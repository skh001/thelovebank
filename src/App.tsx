import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Coffee, Dumbbell, Cookie, Film, Sparkles, Gift } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, onSnapshot, setDoc, deleteDoc, getDoc } from 'firebase/firestore';

// Global variables for Firebase configuration
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// --- Mission Timer Component ---
const MissionTimer = ({ timeInSeconds }) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const isTimeCritical = timeInSeconds <= 60;

  return (
    <div className="flex items-center justify-center p-2 rounded-full bg-white/70 backdrop-blur-sm shadow-inner transition-colors duration-500">
      <div className={`font-bold text-lg tracking-wide ${isTimeCritical ? 'text-rose-500 animate-pulse' : 'text-gray-700'}`}>
        {formattedTime}
      </div>
    </div>
  );
};

// --- Main App Component ---
function App() {
  const [currentView, setCurrentView] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  // New state for mission tracking
  const [activeMission, setActiveMission] = useState(null);
  const [timerRemaining, setTimerRemaining] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [messageBanner, setMessageBanner] = useState(null);
  const [partnerId, setPartnerId] = useState('');

  // Firebase state
  const [app, setApp] = useState(null);
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);

  // Initialize Firebase and Auth
  useEffect(() => {
    try {
      const firebaseApp = initializeApp(firebaseConfig);
      const firebaseAuth = getAuth(firebaseApp);
      const firestoreDb = getFirestore(firebaseApp);
      setApp(firebaseApp);
      setAuth(firebaseAuth);
      setDb(firestoreDb);
      
      // Sign in with custom token if available, otherwise anonymously
      onAuthStateChanged(firebaseAuth, async (user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          if (initialAuthToken) {
            await signInWithCustomToken(firebaseAuth, initialAuthToken);
          } else {
            await signInAnonymously(firebaseAuth);
          }
        }
      });
    } catch (error) {
      console.error("Error initializing Firebase:", error);
    }
  }, []);

  // Timer logic
  useEffect(() => {
    let timerId;
    if (isTimerRunning && timerRemaining > 0) {
      timerId = setInterval(() => {
        setTimerRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else if (timerRemaining === 0) {
      setIsTimerRunning(false);
      setMessageBanner({ type: 'error', text: 'Time\'s up! Mission failed. 💔' });
      // Logic to clear mission from DB if time runs out
      if (activeMission && db && userId) {
        deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'missions', userId)).catch(console.error);
      }
    }
    return () => clearInterval(timerId);
  }, [isTimerRunning, timerRemaining, activeMission, db, userId]);

  // Firestore listener for incoming missions
  useEffect(() => {
    if (db && userId) {
      const missionDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'missions', userId);
      const unsubscribe = onSnapshot(missionDocRef, (docSnap) => {
        if (docSnap.exists()) {
          const missionData = docSnap.data();
          setActiveMission(missionData);
          const elapsed = (Date.now() - missionData.startTime) / 1000;
          const newTimer = Math.max(0, 5 * 60 - Math.floor(elapsed));
          setTimerRemaining(newTimer);
          setIsTimerRunning(true);
        } else {
          setActiveMission(null);
          setTimerRemaining(null);
          setIsTimerRunning(false);
        }
      }, (error) => {
        console.error("Error listening to mission document:", error);
      });
      return () => unsubscribe();
    }
  }, [db, userId]);

  const handleAcceptMission = async (service) => {
    if (!db || !partnerId) {
      setMessageBanner({ type: 'error', text: 'Please enter your partner\'s ID.' });
      return;
    }
    
    // Check if partner ID is valid (exists)
    const partnerDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'missions', partnerId);
    const partnerDocSnap = await getDoc(partnerDocRef);
    if (partnerDocSnap.exists()) {
      setMessageBanner({ type: 'error', text: 'Partner already has an active mission!' });
      return;
    }

    try {
      await setDoc(partnerDocRef, {
        missionName: service.name,
        missionPrice: service.price,
        startTime: Date.now(),
        isCompleted: false,
      });
      setMessageBanner({ type: 'success', text: `Mission "${service.name}" sent to your partner!` });
    } catch (error) {
      console.error("Error sending mission:", error);
      setMessageBanner({ type: 'error', text: 'Failed to send mission. Please try again.' });
    }

    setSelectedService(null);
  };

  const handleCompleteMission = async () => {
    if (db && userId) {
      try {
        await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'missions', userId));
        setMessageBanner({ type: 'success', text: 'Mission completed! Great job! 💕' });
        setActiveMission(null);
      } catch (error) {
        console.error("Error completing mission:", error);
        setMessageBanner({ type: 'error', text: 'Failed to complete mission. Please try again.' });
      }
    }
  };

  const servicesForHer = [
    {
      id: 1,
      name: 'A Kiss',
      description: 'A sweet, tender kiss whenever you need one',
      icon: Heart,
      price: 'Tell me a joke',
      color: 'from-pink-200 to-rose-300'
    },
    {
      id: 2,
      name: 'A Hug',
      description: 'A warm, cozy hug that melts all worries away',
      icon: Sparkles,
      price: 'Do 5 push-ups',
      color: 'from-purple-200 to-pink-300'
    },
    {
      id: 3,
      name: 'A Refreshing Drink',
      description: 'Water, juice, or your favorite beverage delivered with love',
      icon: Coffee,
      price: '10 KISSES ON THE FACE',
      color: 'from-blue-200 to-cyan-300'
    },
    {
      id: 4,
      name: 'SWALE7',
      description: 'U KNOW WHAT IT IS',
      icon: Gift,
      price: 'Cook me my meals for today',
      color: 'from-green-200 to-emerald-300'
    }
  ];

  const servicesForHim = [
    {
      id: 1,
      name: 'Sweet Serenade',
      description: 'A beautiful song sung just for you',
      icon: Heart,
      price: 'Write me a love note',
      color: 'from-rose-200 to-pink-300'
    },
    {
      id: 2,
      name: 'Massage Magic',
      description: 'Relaxing shoulder and back massage',
      icon: Sparkles,
      price: 'Plan our next adventure',
      color: 'from-lavender-200 to-purple-300'
    },
    {
      id: 3,
      name: 'Homemade Delight',
      description: 'Your favorite snack made with extra love',
      icon: Cookie,
      price: 'Do 20 jumping jacks',
      color: 'from-amber-200 to-yellow-300'
    },
    {
      id: 4,
      name: 'Dance Partner',
      description: 'A silly dance session in the living room',
      icon: Gift,
      price: 'Surprise me with flowers',
      color: 'from-teal-200 to-cyan-300'
    }
  ];

  const ServiceCard = ({ service, onOrder }) => {
    const IconComponent = service.icon;
    return (
      <div className={`bg-gradient-to-br ${service.color} rounded-3xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
           onClick={() => onOrder(service)}>
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
            <IconComponent className="w-8 h-8 text-gray-700" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
        </div>
        <div className="bg-white/70 rounded-2xl p-4 backdrop-blur-sm">
          <div className="text-center">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Price</p>
            <p className="text-sm font-bold text-gray-800">{service.price}</p>
          </div>
          <button className="w-full mt-3 bg-white/90 hover:bg-white text-gray-800 font-bold py-2 px-4 rounded-xl transition-colors duration-200 shadow-sm hover:shadow-md">
            Order Now ♡
          </button>
        </div>
      </div>
    );
  };

  const OrderModal = ({ service, onClose, onAccept }) => {
    if (!service) return null;
    
    const IconComponent = service.icon;
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform animate-in">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconComponent className="w-10 h-10 text-gray-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Your Mission:</h3>
              <p className="text-gray-700 font-medium">{service.price}</p>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={onClose}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-2xl transition-colors duration-200"
              >
                Maybe Later
              </button>
              <button 
                onClick={() => onAccept(service)}
                className="flex-1 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Accept Mission!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MissionModal = ({ mission, onComplete }) => {
    if (!mission) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform animate-in">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-10 h-10 text-gray-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">New Mission!</h2>
            <p className="text-gray-600 mb-6">Your partner has sent you a request.</p>
            
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">The Mission:</h3>
              <p className="text-gray-700 font-medium text-lg mb-4">{mission.missionPrice}</p>
              {isTimerRunning && <MissionTimer timeInSeconds={timerRemaining} />}
            </div>
            
            <button 
              onClick={onComplete}
              className="w-full bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Mission Complete!
            </button>
          </div>
        </div>
      </div>
    );
  };

  const MessageBanner = ({ message, onClose }) => {
    if (!message) return null;
    
    const bannerColor = message.type === 'success' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800';
    const closeColor = message.type === 'success' ? 'text-emerald-800 hover:bg-emerald-200' : 'text-rose-800 hover:bg-rose-200';
    
    return (
      <div className={`fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-sm md:max-w-md lg:max-w-lg p-4 rounded-xl shadow-lg flex items-center justify-between z-50 animate-in fade-in slide-in-from-top-4 ${bannerColor}`}>
        <p className="text-sm font-medium">{message.text}</p>
        <button onClick={onClose} className={`p-1 rounded-full ${closeColor}`}>
          <X className="w-5 h-5" />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <MessageBanner message={messageBanner} onClose={() => setMessageBanner(null)} />
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-pink-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                The Love Bank
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => setCurrentView('home')}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    currentView === 'home' 
                      ? 'bg-pink-200 text-pink-800' 
                      : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => setCurrentView('for-her')}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    currentView === 'for-her' 
                      ? 'bg-pink-200 text-pink-800' 
                      : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  For Her ♡
                </button>
                <button
                  onClick={() => setCurrentView('for-him')}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    currentView === 'for-him' 
                      ? 'bg-purple-200 text-purple-800' 
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  For Him ♡
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-pink-100 pt-4">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    setCurrentView('home');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 text-left ${
                    currentView === 'home' 
                      ? 'bg-pink-200 text-pink-800' 
                      : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setCurrentView('for-her');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 text-left ${
                    currentView === 'for-her' 
                      ? 'bg-pink-200 text-pink-800' 
                      : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  For Her ♡
                </button>
                <button
                  onClick={() => {
                    setCurrentView('for-him');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 text-left ${
                    currentView === 'for-him' 
                      ? 'bg-purple-200 text-purple-800' 
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  For Him ♡
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md mb-8 text-center">
          <p className="text-gray-700 font-bold mb-2">Your User ID:</p>
          <p className="font-mono text-xs md:text-sm bg-gray-100 p-2 rounded-lg break-all">{userId || 'Loading...'}</p>
          <p className="text-gray-500 text-xs mt-2">Share this with your partner to send them a mission!</p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            <input 
              type="text" 
              className="w-full p-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-200"
              placeholder="Enter your partner's ID here..."
              value={partnerId}
              onChange={(e) => setPartnerId(e.target.value)}
            />
          </div>
        </div>
        {/* Home View */}
        {currentView === 'home' && (
          <div className="text-center">
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Welcome to The Love Bank
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                A whimsical place where love is the only currency and sweet gestures are always in stock! 
                Exchange loving services with fun challenges instead of money.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div
                onClick={() => setCurrentView('for-her')}
                className="bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl p-8 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-10 h-10 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Services for Her</h3>
                <p className="text-gray-600 mb-6">Browse all the wonderful services she can request from you!</p>
                <div className="bg-white/70 rounded-2xl px-4 py-2 inline-block">
                  <span className="text-sm font-bold text-gray-700">Click to explore ♡</span>
                </div>
              </div>

              <div
                onClick={() => setCurrentView('for-him')}
                className="bg-gradient-to-br from-purple-200 to-blue-300 rounded-3xl p-8 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Sparkles className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Services for Him</h3>
                <p className="text-gray-600 mb-6">Discover all the amazing services you can request from her!</p>
                <div className="bg-white/70 rounded-2xl px-4 py-2 inline-block">
                  <span className="text-sm font-bold text-gray-700">Click to explore ♡</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services for Her */}
        {currentView === 'for-her' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
                Services for Her
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Sweet gestures and loving moments, all available for the price of a fun challenge!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesForHer.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onOrder={setSelectedService}
                />
              ))}
            </div>
          </div>
        )}

        {/* Services for Him */}
        {currentView === 'for-him' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Services for Him
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Wonderful experiences and thoughtful gestures, earned through your own special missions!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesForHim.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onOrder={setSelectedService}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/50 border-t border-pink-100 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-pink-500" />
            <span className="text-gray-600">Made with love for an amazing couple</span>
            <Heart className="w-5 h-5 text-pink-500" />
          </div>
          <p className="text-gray-500 text-sm">
            Remember: The best currency is love, and the richest moments are shared together ♡
          </p>
        </div>
      </footer>

      {/* Order Modal */}
      <OrderModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onAccept={handleAcceptMission}
      />
      {/* Mission Modal for partner */}
      <MissionModal
        mission={activeMission}
        onComplete={handleCompleteMission}
      />
    </div>
  );
}

export default App;
