(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=t(a);fetch(a.href,c)}})();var Uh={exports:{}},Ea={},jh={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function b0(){if(Am)return Ce;Am=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),C=Symbol.iterator;function D(V){return V===null||typeof V!="object"?null:(V=C&&V[C]||V["@@iterator"],typeof V=="function"?V:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,J={};function G(V,$,Se){this.props=V,this.context=$,this.refs=J,this.updater=Se||j}G.prototype.isReactComponent={},G.prototype.setState=function(V,$){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,$,"setState")},G.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function me(){}me.prototype=G.prototype;function ce(V,$,Se){this.props=V,this.context=$,this.refs=J,this.updater=Se||j}var ve=ce.prototype=new me;ve.constructor=ce,Z(ve,G.prototype),ve.isPureReactComponent=!0;var Oe=Array.isArray,Be=Object.prototype.hasOwnProperty,we={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(V,$,Se){var Ae,ke={},Re=null,Ue=null;if($!=null)for(Ae in $.ref!==void 0&&(Ue=$.ref),$.key!==void 0&&(Re=""+$.key),$)Be.call($,Ae)&&!P.hasOwnProperty(Ae)&&(ke[Ae]=$[Ae]);var Me=arguments.length-2;if(Me===1)ke.children=Se;else if(1<Me){for(var He=Array(Me),jt=0;jt<Me;jt++)He[jt]=arguments[jt+2];ke.children=He}if(V&&V.defaultProps)for(Ae in Me=V.defaultProps,Me)ke[Ae]===void 0&&(ke[Ae]=Me[Ae]);return{$$typeof:i,type:V,key:Re,ref:Ue,props:ke,_owner:we.current}}function A(V,$){return{$$typeof:i,type:V.type,key:$,ref:V.ref,props:V.props,_owner:V._owner}}function N(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function R(V){var $={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Se){return $[Se]})}var O=/\/+/g;function S(V,$){return typeof V=="object"&&V!==null&&V.key!=null?R(""+V.key):$.toString(36)}function $e(V,$,Se,Ae,ke){var Re=typeof V;(Re==="undefined"||Re==="boolean")&&(V=null);var Ue=!1;if(V===null)Ue=!0;else switch(Re){case"string":case"number":Ue=!0;break;case"object":switch(V.$$typeof){case i:case e:Ue=!0}}if(Ue)return Ue=V,ke=ke(Ue),V=Ae===""?"."+S(Ue,0):Ae,Oe(ke)?(Se="",V!=null&&(Se=V.replace(O,"$&/")+"/"),$e(ke,$,Se,"",function(jt){return jt})):ke!=null&&(N(ke)&&(ke=A(ke,Se+(!ke.key||Ue&&Ue.key===ke.key?"":(""+ke.key).replace(O,"$&/")+"/")+V)),$.push(ke)),1;if(Ue=0,Ae=Ae===""?".":Ae+":",Oe(V))for(var Me=0;Me<V.length;Me++){Re=V[Me];var He=Ae+S(Re,Me);Ue+=$e(Re,$,Se,He,ke)}else if(He=D(V),typeof He=="function")for(V=He.call(V),Me=0;!(Re=V.next()).done;)Re=Re.value,He=Ae+S(Re,Me++),Ue+=$e(Re,$,Se,He,ke);else if(Re==="object")throw $=String(V),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Ue}function lt(V,$,Se){if(V==null)return V;var Ae=[],ke=0;return $e(V,Ae,"","",function(Re){return $.call(Se,Re,ke++)}),Ae}function oe(V){if(V._status===-1){var $=V._result;$=$(),$.then(function(Se){(V._status===0||V._status===-1)&&(V._status=1,V._result=Se)},function(Se){(V._status===0||V._status===-1)&&(V._status=2,V._result=Se)}),V._status===-1&&(V._status=0,V._result=$)}if(V._status===1)return V._result.default;throw V._result}var Ee={current:null},Q={transition:null},re={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Q,ReactCurrentOwner:we};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:lt,forEach:function(V,$,Se){lt(V,function(){$.apply(this,arguments)},Se)},count:function(V){var $=0;return lt(V,function(){$++}),$},toArray:function(V){return lt(V,function($){return $})||[]},only:function(V){if(!N(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ce.Component=G,Ce.Fragment=t,Ce.Profiler=a,Ce.PureComponent=ce,Ce.StrictMode=s,Ce.Suspense=y,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,Ce.act=te,Ce.cloneElement=function(V,$,Se){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ae=Z({},V.props),ke=V.key,Re=V.ref,Ue=V._owner;if($!=null){if($.ref!==void 0&&(Re=$.ref,Ue=we.current),$.key!==void 0&&(ke=""+$.key),V.type&&V.type.defaultProps)var Me=V.type.defaultProps;for(He in $)Be.call($,He)&&!P.hasOwnProperty(He)&&(Ae[He]=$[He]===void 0&&Me!==void 0?Me[He]:$[He])}var He=arguments.length-2;if(He===1)Ae.children=Se;else if(1<He){Me=Array(He);for(var jt=0;jt<He;jt++)Me[jt]=arguments[jt+2];Ae.children=Me}return{$$typeof:i,type:V.type,key:ke,ref:Re,props:Ae,_owner:Ue}},Ce.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:c,_context:V},V.Consumer=V},Ce.createElement=I,Ce.createFactory=function(V){var $=I.bind(null,V);return $.type=V,$},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(V){return{$$typeof:m,render:V}},Ce.isValidElement=N,Ce.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:oe}},Ce.memo=function(V,$){return{$$typeof:v,type:V,compare:$===void 0?null:$}},Ce.startTransition=function(V){var $=Q.transition;Q.transition={};try{V()}finally{Q.transition=$}},Ce.unstable_act=te,Ce.useCallback=function(V,$){return Ee.current.useCallback(V,$)},Ce.useContext=function(V){return Ee.current.useContext(V)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(V){return Ee.current.useDeferredValue(V)},Ce.useEffect=function(V,$){return Ee.current.useEffect(V,$)},Ce.useId=function(){return Ee.current.useId()},Ce.useImperativeHandle=function(V,$,Se){return Ee.current.useImperativeHandle(V,$,Se)},Ce.useInsertionEffect=function(V,$){return Ee.current.useInsertionEffect(V,$)},Ce.useLayoutEffect=function(V,$){return Ee.current.useLayoutEffect(V,$)},Ce.useMemo=function(V,$){return Ee.current.useMemo(V,$)},Ce.useReducer=function(V,$,Se){return Ee.current.useReducer(V,$,Se)},Ce.useRef=function(V){return Ee.current.useRef(V)},Ce.useState=function(V){return Ee.current.useState(V)},Ce.useSyncExternalStore=function(V,$,Se){return Ee.current.useSyncExternalStore(V,$,Se)},Ce.useTransition=function(){return Ee.current.useTransition()},Ce.version="18.3.1",Ce}var Cm;function Rd(){return Cm||(Cm=1,jh.exports=b0()),jh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function F0(){if(km)return Ea;km=1;var i=Rd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var E,C={},D=null,j=null;v!==void 0&&(D=""+v),y.key!==void 0&&(D=""+y.key),y.ref!==void 0&&(j=y.ref);for(E in y)s.call(y,E)&&!c.hasOwnProperty(E)&&(C[E]=y[E]);if(m&&m.defaultProps)for(E in y=m.defaultProps,y)C[E]===void 0&&(C[E]=y[E]);return{$$typeof:e,type:m,key:D,ref:j,props:C,_owner:a.current}}return Ea.Fragment=t,Ea.jsx=h,Ea.jsxs=h,Ea}var Rm;function U0(){return Rm||(Rm=1,Uh.exports=F0()),Uh.exports}var z=U0(),gt=Rd(),pu={},zh={exports:{}},Kt={},Bh={exports:{}},$h={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function j0(){return Pm||(Pm=1,(function(i){function e(Q,re){var te=Q.length;Q.push(re);e:for(;0<te;){var V=te-1>>>1,$=Q[V];if(0<a($,re))Q[V]=re,Q[te]=$,te=V;else break e}}function t(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var re=Q[0],te=Q.pop();if(te!==re){Q[0]=te;e:for(var V=0,$=Q.length,Se=$>>>1;V<Se;){var Ae=2*(V+1)-1,ke=Q[Ae],Re=Ae+1,Ue=Q[Re];if(0>a(ke,te))Re<$&&0>a(Ue,ke)?(Q[V]=Ue,Q[Re]=te,V=Re):(Q[V]=ke,Q[Ae]=te,V=Ae);else if(Re<$&&0>a(Ue,te))Q[V]=Ue,Q[Re]=te,V=Re;else break e}}return re}function a(Q,re){var te=Q.sortIndex-re.sortIndex;return te!==0?te:Q.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],E=1,C=null,D=3,j=!1,Z=!1,J=!1,G=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ve(Q){for(var re=t(v);re!==null;){if(re.callback===null)s(v);else if(re.startTime<=Q)s(v),re.sortIndex=re.expirationTime,e(y,re);else break;re=t(v)}}function Oe(Q){if(J=!1,ve(Q),!Z)if(t(y)!==null)Z=!0,oe(Be);else{var re=t(v);re!==null&&Ee(Oe,re.startTime-Q)}}function Be(Q,re){Z=!1,J&&(J=!1,me(I),I=-1),j=!0;var te=D;try{for(ve(re),C=t(y);C!==null&&(!(C.expirationTime>re)||Q&&!R());){var V=C.callback;if(typeof V=="function"){C.callback=null,D=C.priorityLevel;var $=V(C.expirationTime<=re);re=i.unstable_now(),typeof $=="function"?C.callback=$:C===t(y)&&s(y),ve(re)}else s(y);C=t(y)}if(C!==null)var Se=!0;else{var Ae=t(v);Ae!==null&&Ee(Oe,Ae.startTime-re),Se=!1}return Se}finally{C=null,D=te,j=!1}}var we=!1,P=null,I=-1,A=5,N=-1;function R(){return!(i.unstable_now()-N<A)}function O(){if(P!==null){var Q=i.unstable_now();N=Q;var re=!0;try{re=P(!0,Q)}finally{re?S():(we=!1,P=null)}}else we=!1}var S;if(typeof ce=="function")S=function(){ce(O)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,lt=$e.port2;$e.port1.onmessage=O,S=function(){lt.postMessage(null)}}else S=function(){G(O,0)};function oe(Q){P=Q,we||(we=!0,S())}function Ee(Q,re){I=G(function(){Q(i.unstable_now())},re)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Q){Q.callback=null},i.unstable_continueExecution=function(){Z||j||(Z=!0,oe(Be))},i.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Q?Math.floor(1e3/Q):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Q){switch(D){case 1:case 2:case 3:var re=3;break;default:re=D}var te=D;D=re;try{return Q()}finally{D=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Q,re){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var te=D;D=Q;try{return re()}finally{D=te}},i.unstable_scheduleCallback=function(Q,re,te){var V=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?V+te:V):te=V,Q){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=te+$,Q={id:E++,callback:re,priorityLevel:Q,startTime:te,expirationTime:$,sortIndex:-1},te>V?(Q.sortIndex=te,e(v,Q),t(y)===null&&Q===t(v)&&(J?(me(I),I=-1):J=!0,Ee(Oe,te-V))):(Q.sortIndex=$,e(y,Q),Z||j||(Z=!0,oe(Be))),Q},i.unstable_shouldYield=R,i.unstable_wrapCallback=function(Q){var re=D;return function(){var te=D;D=re;try{return Q.apply(this,arguments)}finally{D=te}}}})($h)),$h}var xm;function z0(){return xm||(xm=1,Bh.exports=j0()),Bh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function B0(){if(Nm)return Kt;Nm=1;var i=Rd(),e=z0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},C={};function D(n){return y.call(C,n)?!0:y.call(E,n)?!1:v.test(n)?C[n]=!0:(E[n]=!0,!1)}function j(n,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Z(n,r,o,u){if(r===null||typeof r>"u"||j(n,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(n,r,o,u,d,f,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=_}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){G[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];G[r]=new J(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){G[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){G[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){G[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){G[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){G[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){G[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){G[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ce(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(me,ce);G[r]=new J(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(me,ce);G[r]=new J(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(me,ce);G[r]=new J(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){G[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),G.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){G[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function ve(n,r,o,u){var d=G.hasOwnProperty(r)?G[r]:null;(d!==null?d.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Z(r,o,d,u)&&(o=null),u||d===null?D(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(r=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(r):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,r,o):n.setAttribute(r,o))))}var Oe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Be=Symbol.for("react.element"),we=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),R=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),Q=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=Q&&n[Q]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,V;function $(n){if(V===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var Se=!1;function Ae(n,r){if(!n||Se)return"";Se=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var u=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){u=F}n.call(r.prototype)}else{try{throw Error()}catch(F){u=F}n()}}catch(F){if(F&&u&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),f=u.stack.split(`
`),_=d.length-1,T=f.length-1;1<=_&&0<=T&&d[_]!==f[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==f[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==f[T]){var k=`
`+d[_].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=_&&0<=T);break}}}finally{Se=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?$(n):""}function ke(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case we:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case $e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case R:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case lt:return r=n.displayName||null,r!==null?r:Re(n.type)||"Memo";case oe:r=n._payload,n=n._init;try{return Re(n(r))}catch{}}return null}function Ue(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function jt(n){var r=He(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,f=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){u=""+_,f.call(this,_)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(_){u=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function fs(n){n._valueTracker||(n._valueTracker=jt(n))}function ko(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=He(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Vr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ps(n,r){var o=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Za(n,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=Me(r.value!=null?r.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ms(n,r){r=r.checked,r!=null&&ve(n,"checked",r,!1)}function Ci(n,r){ms(n,r);var o=Me(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ut(n,r.type,o):r.hasOwnProperty("defaultValue")&&ut(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ro(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function ut(n,r,o){(r!=="number"||Vr(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var it=Array.isArray;function _n(n,r,o,u){if(n=n.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=r.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Me(o),r=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Po(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function xo(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(it(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:Me(o)}}function el(n,r){var o=Me(r.value),u=Me(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Or(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function No(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gs(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?No(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Mr,tl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(r,o,u,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Mr=Mr||document.createElement("div"),Mr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Mr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ki(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nl=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(n){nl.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Lr[r]=Lr[n]})});function br(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Lr.hasOwnProperty(n)&&Lr[n]?(""+r).trim():r+"px"}function ys(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=br(o,r[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var Do=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vn(n,r){if(r){if(Do[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function _s(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fr=null;function vs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ir=null,sr=null,nt=null;function Vo(n){if(n=oa(n)){if(typeof ir!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Pl(r),ir(n.stateNode,n.type,r))}}function Ur(n){sr?nt?nt.push(n):nt=[n]:sr=n}function jr(){if(sr){var n=sr,r=nt;if(nt=sr=null,Vo(n),r)for(n=0;n<r.length;n++)Vo(r[n])}}function rl(n,r){return n(r)}function il(){}var xn=!1;function sl(n,r,o){if(xn)return n(r,o);xn=!0;try{return rl(n,r,o)}finally{xn=!1,(sr!==null||nt!==null)&&(il(),jr())}}function Ri(n,r){var o=n.stateNode;if(o===null)return null;var u=Pl(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var zr=!1;if(m)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){zr=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{zr=!1}function ol(n,r,o,u,d,f,_,T,k){var F=Array.prototype.slice.call(arguments,3);try{r.apply(o,F)}catch(W){this.onError(W)}}var or=!1,Nn=null,ws=!1,on=null,al={onError:function(n){or=!0,Nn=n}};function ll(n,r,o,u,d,f,_,T,k){or=!1,Nn=null,ol.apply(al,arguments)}function Oo(n,r,o,u,d,f,_,T,k){if(ll.apply(this,arguments),or){if(or){var F=Nn;or=!1,Nn=null}else throw Error(t(198));ws||(ws=!0,on=F)}}function wn(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Mo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function ul(n){if(wn(n)!==n)throw Error(t(188))}function cl(n){var r=n.alternate;if(!r){if(r=wn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,u=r;;){var d=o.return;if(d===null)break;var f=d.alternate;if(f===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===o)return ul(d),n;if(f===u)return ul(d),r;f=f.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=f;else{for(var _=!1,T=d.child;T;){if(T===o){_=!0,o=d,u=f;break}if(T===u){_=!0,u=d,o=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===o){_=!0,o=f,u=d;break}if(T===u){_=!0,u=f,o=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function hl(n){return n=cl(n),n!==null?Pi(n):null}function Pi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Pi(n);if(r!==null)return r;n=n.sibling}return null}var Lo=e.unstable_scheduleCallback,Es=e.unstable_cancelCallback,xi=e.unstable_shouldYield,ar=e.unstable_requestPaint,Ge=e.unstable_now,gc=e.unstable_getCurrentPriorityLevel,Ts=e.unstable_ImmediatePriority,bo=e.unstable_UserBlockingPriority,Ni=e.unstable_NormalPriority,Fo=e.unstable_LowPriority,Is=e.unstable_IdlePriority,Di=null,Xt=null;function dl(n){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Di,n,void 0,(n.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:Vi,Dn=Math.log,an=Math.LN2;function Vi(n){return n>>>=0,n===0?32:31-(Dn(n)/an|0)|0}var Vn=64,$r=4194304;function Fe(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function lr(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,f=n.pingedLanes,_=o&268435455;if(_!==0){var T=_&~d;T!==0?u=Fe(T):(f&=_,f!==0&&(u=Fe(f)))}else _=o&~d,_!==0?u=Fe(_):f!==0&&(u=Fe(f));if(u===0)return 0;if(r!==0&&r!==u&&(r&d)===0&&(d=u&-u,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)o=31-Yt(r),d=1<<o,u|=n[o],r&=~d;return u}function Oi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mi(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var _=31-Yt(f),T=1<<_,k=d[_];k===-1?((T&o)===0||(T&u)!==0)&&(d[_]=Oi(T,r)):k<=r&&(n.expiredLanes|=T),f&=~T}}function Uo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function jo(){var n=Vn;return Vn<<=1,(Vn&4194240)===0&&(Vn=64),n}function zo(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Li(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Yt(r),n[r]=o}function yc(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Yt(o),f=1<<d;r[d]=0,u[d]=-1,n[d]=-1,o&=~f}}function Bo(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-Yt(o),d=1<<u;d&r|n[u]&r&&(n[u]|=r),o&=~d}}var De=0;function On(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var $o,Ss,Ho,qo,Wo,Mn=!1,As=[],Ln=null,bn=null,St=null,bi=new Map,ur=new Map,Jt=[],fl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hr(n,r){switch(n){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":bi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ur.delete(r.pointerId)}}function En(n,r,o,u,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:f,targetContainers:[d]},r!==null&&(r=oa(r),r!==null&&Ss(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function pl(n,r,o,u,d){switch(r){case"focusin":return Ln=En(Ln,n,r,o,u,d),!0;case"dragenter":return bn=En(bn,n,r,o,u,d),!0;case"mouseover":return St=En(St,n,r,o,u,d),!0;case"pointerover":var f=d.pointerId;return bi.set(f,En(bi.get(f)||null,n,r,o,u,d)),!0;case"gotpointercapture":return f=d.pointerId,ur.set(f,En(ur.get(f)||null,n,r,o,u,d)),!0}return!1}function Cs(n){var r=zi(n.target);if(r!==null){var o=wn(r);if(o!==null){if(r=o.tag,r===13){if(r=Mo(o),r!==null){n.blockedOn=r,Wo(n.priority,function(){Ho(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qe(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=ks(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Fr=u,o.target.dispatchEvent(u),Fr=null}else return r=oa(o),r!==null&&Ss(r),n.blockedOn=o,!1;r.shift()}return!0}function ml(n,r,o){qe(n)&&o.delete(r)}function _c(){Mn=!1,Ln!==null&&qe(Ln)&&(Ln=null),bn!==null&&qe(bn)&&(bn=null),St!==null&&qe(St)&&(St=null),bi.forEach(ml),ur.forEach(ml)}function qr(n,r){n.blockedOn===r&&(n.blockedOn=null,Mn||(Mn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_c)))}function Wr(n){function r(d){return qr(d,n)}if(0<As.length){qr(As[0],n);for(var o=1;o<As.length;o++){var u=As[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Ln!==null&&qr(Ln,n),bn!==null&&qr(bn,n),St!==null&&qr(St,n),bi.forEach(r),ur.forEach(r),o=0;o<Jt.length;o++)u=Jt[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Jt.length&&(o=Jt[0],o.blockedOn===null);)Cs(o),o.blockedOn===null&&Jt.shift()}var cr=Oe.ReactCurrentBatchConfig,hr=!0;function Fn(n,r,o,u){var d=De,f=cr.transition;cr.transition=null;try{De=1,Go(n,r,o,u)}finally{De=d,cr.transition=f}}function gl(n,r,o,u){var d=De,f=cr.transition;cr.transition=null;try{De=4,Go(n,r,o,u)}finally{De=d,cr.transition=f}}function Go(n,r,o,u){if(hr){var d=ks(n,r,o,u);if(d===null)Pc(n,r,u,Un,o),Hr(n,u);else if(pl(d,n,r,o,u))u.stopPropagation();else if(Hr(n,u),r&4&&-1<fl.indexOf(n)){for(;d!==null;){var f=oa(d);if(f!==null&&$o(f),f=ks(n,r,o,u),f===null&&Pc(n,r,u,Un,o),f===d)break;d=f}d!==null&&u.stopPropagation()}else Pc(n,r,u,null,o)}}var Un=null;function ks(n,r,o,u){if(Un=null,n=vs(u),n=zi(n),n!==null)if(r=wn(n),r===null)n=null;else if(o=r.tag,o===13){if(n=Mo(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Un=n,null}function Rs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gc()){case Ts:return 1;case bo:return 4;case Ni:case Fo:return 16;case Is:return 536870912;default:return 16}default:return 16}}var Zt=null,Ps=null,dr=null;function yl(){if(dr)return dr;var n,r=Ps,o=r.length,u,d="value"in Zt?Zt.value:Zt.textContent,f=d.length;for(n=0;n<o&&r[n]===d[n];n++);var _=o-n;for(u=1;u<=_&&r[o-u]===d[f-u];u++);return dr=d.slice(n,1<u?1-u:void 0)}function Fi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function jn(){return!0}function Ko(){return!1}function Nt(n){function r(o,u,d,f,_){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(o=n[T],this[T]=o?o(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jn:Ko,this.isPropagationStopped=Ko,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),r}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=Nt(zn),Gr=te({},zn,{view:0,detail:0}),xs=Nt(Gr),Ns,Ds,en,ji=te({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Te,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==en&&(en&&n.type==="mousemove"?(Ns=n.screenX-en.screenX,Ds=n.screenY-en.screenY):Ds=Ns=0,en=n),Ns)},movementY:function(n){return"movementY"in n?n.movementY:Ds}}),Qo=Nt(ji),_l=te({},ji,{dataTransfer:0}),vl=Nt(_l),Vs=te({},Gr,{relatedTarget:0}),At=Nt(Vs),wl=te({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),El=Nt(wl),Kr=te({},zn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Nt(Kr),p=te({},zn,{data:0}),g=Nt(p),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=U[n])?!!r[n]:!1}function Te(){return Y}var st=te({},Gr,{key:function(n){if(n.key){var r=w[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Fi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Te,charCode:function(n){return n.type==="keypress"?Fi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ze=Nt(st),ct=te({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tn=Nt(ct),fr=te({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Te}),Bn=Nt(fr),$n=te({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Os=Nt($n),Xo=te({},ji,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=Nt(Xo),Dv=[9,13,27,32],vc=m&&"CompositionEvent"in window,Yo=null;m&&"documentMode"in document&&(Yo=document.documentMode);var Vv=m&&"TextEvent"in window&&!Yo,yf=m&&(!vc||Yo&&8<Yo&&11>=Yo),_f=" ",vf=!1;function wf(n,r){switch(n){case"keyup":return Dv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ms=!1;function Ov(n,r){switch(n){case"compositionend":return Ef(r);case"keypress":return r.which!==32?null:(vf=!0,_f);case"textInput":return n=r.data,n===_f&&vf?null:n;default:return null}}function Mv(n,r){if(Ms)return n==="compositionend"||!vc&&wf(n,r)?(n=yl(),dr=Ps=Zt=null,Ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return yf&&r.locale!=="ko"?null:r.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Lv[n.type]:r==="textarea"}function If(n,r,o,u){Ur(u),r=Cl(r,"onChange"),0<r.length&&(o=new Ui("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Jo=null,Zo=null;function bv(n){zf(n,0)}function Tl(n){var r=js(n);if(ko(r))return n}function Fv(n,r){if(n==="change")return r}var Sf=!1;if(m){var wc;if(m){var Ec="oninput"in document;if(!Ec){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),Ec=typeof Af.oninput=="function"}wc=Ec}else wc=!1;Sf=wc&&(!document.documentMode||9<document.documentMode)}function Cf(){Jo&&(Jo.detachEvent("onpropertychange",kf),Zo=Jo=null)}function kf(n){if(n.propertyName==="value"&&Tl(Zo)){var r=[];If(r,Zo,n,vs(n)),sl(bv,r)}}function Uv(n,r,o){n==="focusin"?(Cf(),Jo=r,Zo=o,Jo.attachEvent("onpropertychange",kf)):n==="focusout"&&Cf()}function jv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tl(Zo)}function zv(n,r){if(n==="click")return Tl(r)}function Bv(n,r){if(n==="input"||n==="change")return Tl(r)}function $v(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Tn=typeof Object.is=="function"?Object.is:$v;function ea(n,r){if(Tn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!y.call(r,d)||!Tn(n[d],r[d]))return!1}return!0}function Rf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Pf(n,r){var o=Rf(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Rf(o)}}function xf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?xf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Nf(){for(var n=window,r=Vr();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Vr(n.document)}return r}function Tc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Hv(n){var r=Nf(),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&xf(o.ownerDocument.documentElement,o)){if(u!==null&&Tc(o)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,f=Math.min(u.start,d);u=u.end===void 0?f:Math.min(u.end,d),!n.extend&&f>u&&(d=u,u=f,f=d),d=Pf(o,f);var _=Pf(o,u);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>u?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var qv=m&&"documentMode"in document&&11>=document.documentMode,Ls=null,Ic=null,ta=null,Sc=!1;function Df(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Sc||Ls==null||Ls!==Vr(u)||(u=Ls,"selectionStart"in u&&Tc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ta&&ea(ta,u)||(ta=u,u=Cl(Ic,"onSelect"),0<u.length&&(r=new Ui("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=Ls)))}function Il(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var bs={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},Ac={},Vf={};m&&(Vf=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Sl(n){if(Ac[n])return Ac[n];if(!bs[n])return n;var r=bs[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Vf)return Ac[n]=r[o];return n}var Of=Sl("animationend"),Mf=Sl("animationiteration"),Lf=Sl("animationstart"),bf=Sl("transitionend"),Ff=new Map,Uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(n,r){Ff.set(n,r),c(r,[n])}for(var Cc=0;Cc<Uf.length;Cc++){var kc=Uf[Cc],Wv=kc.toLowerCase(),Gv=kc[0].toUpperCase()+kc.slice(1);Qr(Wv,"on"+Gv)}Qr(Of,"onAnimationEnd"),Qr(Mf,"onAnimationIteration"),Qr(Lf,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(bf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function jf(n,r,o){var u=n.type||"unknown-event";n.currentTarget=o,Oo(u,r,void 0,n),n.currentTarget=null}function zf(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var f=void 0;if(r)for(var _=u.length-1;0<=_;_--){var T=u[_],k=T.instance,F=T.currentTarget;if(T=T.listener,k!==f&&d.isPropagationStopped())break e;jf(d,T,F),f=k}else for(_=0;_<u.length;_++){if(T=u[_],k=T.instance,F=T.currentTarget,T=T.listener,k!==f&&d.isPropagationStopped())break e;jf(d,T,F),f=k}}}if(ws)throw n=on,ws=!1,on=null,n}function Ke(n,r){var o=r[Mc];o===void 0&&(o=r[Mc]=new Set);var u=n+"__bubble";o.has(u)||(Bf(r,n,2,!1),o.add(u))}function Rc(n,r,o){var u=0;r&&(u|=4),Bf(o,n,u,r)}var Al="_reactListening"+Math.random().toString(36).slice(2);function ra(n){if(!n[Al]){n[Al]=!0,s.forEach(function(o){o!=="selectionchange"&&(Kv.has(o)||Rc(o,!1,n),Rc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Al]||(r[Al]=!0,Rc("selectionchange",!1,r))}}function Bf(n,r,o,u){switch(Rs(r)){case 1:var d=Fn;break;case 4:d=gl;break;default:d=Go}o=d.bind(null,r,o,n),d=void 0,!zr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(r,o,{capture:!0,passive:d}):n.addEventListener(r,o,!0):d!==void 0?n.addEventListener(r,o,{passive:d}):n.addEventListener(r,o,!1)}function Pc(n,r,o,u,d){var f=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var _=u.tag;if(_===3||_===4){var T=u.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=u.return;_!==null;){var k=_.tag;if((k===3||k===4)&&(k=_.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;_=_.return}for(;T!==null;){if(_=zi(T),_===null)return;if(k=_.tag,k===5||k===6){u=f=_;continue e}T=T.parentNode}}u=u.return}sl(function(){var F=f,W=vs(o),K=[];e:{var H=Ff.get(n);if(H!==void 0){var ee=Ui,se=n;switch(n){case"keypress":if(Fi(o)===0)break e;case"keydown":case"keyup":ee=ze;break;case"focusin":se="focus",ee=At;break;case"focusout":se="blur",ee=At;break;case"beforeblur":case"afterblur":ee=At;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=vl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Bn;break;case Of:case Mf:case Lf:ee=El;break;case bf:ee=Os;break;case"scroll":ee=xs;break;case"wheel":ee=Nv;break;case"copy":case"cut":case"paste":ee=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=tn}var ae=(r&4)!==0,ot=!ae&&n==="scroll",M=ae?H!==null?H+"Capture":null:H;ae=[];for(var x=F,b;x!==null;){b=x;var X=b.stateNode;if(b.tag===5&&X!==null&&(b=X,M!==null&&(X=Ri(x,M),X!=null&&ae.push(ia(x,X,b)))),ot)break;x=x.return}0<ae.length&&(H=new ee(H,se,null,o,W),K.push({event:H,listeners:ae}))}}if((r&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",H&&o!==Fr&&(se=o.relatedTarget||o.fromElement)&&(zi(se)||se[pr]))break e;if((ee||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,ee?(se=o.relatedTarget||o.toElement,ee=F,se=se?zi(se):null,se!==null&&(ot=wn(se),se!==ot||se.tag!==5&&se.tag!==6)&&(se=null)):(ee=null,se=F),ee!==se)){if(ae=Qo,X="onMouseLeave",M="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(ae=tn,X="onPointerLeave",M="onPointerEnter",x="pointer"),ot=ee==null?H:js(ee),b=se==null?H:js(se),H=new ae(X,x+"leave",ee,o,W),H.target=ot,H.relatedTarget=b,X=null,zi(W)===F&&(ae=new ae(M,x+"enter",se,o,W),ae.target=b,ae.relatedTarget=ot,X=ae),ot=X,ee&&se)t:{for(ae=ee,M=se,x=0,b=ae;b;b=Fs(b))x++;for(b=0,X=M;X;X=Fs(X))b++;for(;0<x-b;)ae=Fs(ae),x--;for(;0<b-x;)M=Fs(M),b--;for(;x--;){if(ae===M||M!==null&&ae===M.alternate)break t;ae=Fs(ae),M=Fs(M)}ae=null}else ae=null;ee!==null&&$f(K,H,ee,ae,!1),se!==null&&ot!==null&&$f(K,ot,se,ae,!0)}}e:{if(H=F?js(F):window,ee=H.nodeName&&H.nodeName.toLowerCase(),ee==="select"||ee==="input"&&H.type==="file")var le=Fv;else if(Tf(H))if(Sf)le=Bv;else{le=jv;var he=Uv}else(ee=H.nodeName)&&ee.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(le=zv);if(le&&(le=le(n,F))){If(K,le,o,W);break e}he&&he(n,H,F),n==="focusout"&&(he=H._wrapperState)&&he.controlled&&H.type==="number"&&ut(H,"number",H.value)}switch(he=F?js(F):window,n){case"focusin":(Tf(he)||he.contentEditable==="true")&&(Ls=he,Ic=F,ta=null);break;case"focusout":ta=Ic=Ls=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,Df(K,o,W);break;case"selectionchange":if(qv)break;case"keydown":case"keyup":Df(K,o,W)}var de;if(vc)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Ms?wf(n,o)&&(ge="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ge="onCompositionStart");ge&&(yf&&o.locale!=="ko"&&(Ms||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Ms&&(de=yl()):(Zt=W,Ps="value"in Zt?Zt.value:Zt.textContent,Ms=!0)),he=Cl(F,ge),0<he.length&&(ge=new g(ge,n,null,o,W),K.push({event:ge,listeners:he}),de?ge.data=de:(de=Ef(o),de!==null&&(ge.data=de)))),(de=Vv?Ov(n,o):Mv(n,o))&&(F=Cl(F,"onBeforeInput"),0<F.length&&(W=new g("onBeforeInput","beforeinput",null,o,W),K.push({event:W,listeners:F}),W.data=de))}zf(K,r)})}function ia(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Cl(n,r){for(var o=r+"Capture",u=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Ri(n,o),f!=null&&u.unshift(ia(n,f,d)),f=Ri(n,r),f!=null&&u.push(ia(n,f,d))),n=n.return}return u}function Fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $f(n,r,o,u,d){for(var f=r._reactName,_=[];o!==null&&o!==u;){var T=o,k=T.alternate,F=T.stateNode;if(k!==null&&k===u)break;T.tag===5&&F!==null&&(T=F,d?(k=Ri(o,f),k!=null&&_.unshift(ia(o,k,T))):d||(k=Ri(o,f),k!=null&&_.push(ia(o,k,T)))),o=o.return}_.length!==0&&n.push({event:r,listeners:_})}var Qv=/\r\n?/g,Xv=/\u0000|\uFFFD/g;function Hf(n){return(typeof n=="string"?n:""+n).replace(Qv,`
`).replace(Xv,"")}function kl(n,r,o){if(r=Hf(r),Hf(n)!==r&&o)throw Error(t(425))}function Rl(){}var xc=null,Nc=null;function Dc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Vc=typeof setTimeout=="function"?setTimeout:void 0,Yv=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(n){return qf.resolve(null).then(n).catch(Zv)}:Vc;function Zv(n){setTimeout(function(){throw n})}function Oc(n,r){var o=r,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),Wr(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);Wr(r)}function Xr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Wf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Us,sa="__reactProps$"+Us,pr="__reactContainer$"+Us,Mc="__reactEvents$"+Us,e0="__reactListeners$"+Us,t0="__reactHandles$"+Us;function zi(n){var r=n[Hn];if(r)return r;for(var o=n.parentNode;o;){if(r=o[pr]||o[Hn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=Wf(n);n!==null;){if(o=n[Hn])return o;n=Wf(n)}return r}n=o,o=n.parentNode}return null}function oa(n){return n=n[Hn]||n[pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function js(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Pl(n){return n[sa]||null}var Lc=[],zs=-1;function Yr(n){return{current:n}}function Qe(n){0>zs||(n.current=Lc[zs],Lc[zs]=null,zs--)}function We(n,r){zs++,Lc[zs]=n.current,n.current=r}var Jr={},Dt=Yr(Jr),$t=Yr(!1),Bi=Jr;function Bs(n,r){var o=n.type.contextTypes;if(!o)return Jr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in o)d[f]=r[f];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function xl(){Qe($t),Qe(Dt)}function Gf(n,r,o){if(Dt.current!==Jr)throw Error(t(168));We(Dt,r),We($t,o)}function Kf(n,r,o){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in r))throw Error(t(108,Ue(n)||"Unknown",d));return te({},o,u)}function Nl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Jr,Bi=Dt.current,We(Dt,n),We($t,$t.current),!0}function Qf(n,r,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Kf(n,r,Bi),u.__reactInternalMemoizedMergedChildContext=n,Qe($t),Qe(Dt),We(Dt,n)):Qe($t),We($t,o)}var mr=null,Dl=!1,bc=!1;function Xf(n){mr===null?mr=[n]:mr.push(n)}function n0(n){Dl=!0,Xf(n)}function Zr(){if(!bc&&mr!==null){bc=!0;var n=0,r=De;try{var o=mr;for(De=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}mr=null,Dl=!1}catch(d){throw mr!==null&&(mr=mr.slice(n+1)),Lo(Ts,Zr),d}finally{De=r,bc=!1}}return null}var $s=[],Hs=0,Vl=null,Ol=0,ln=[],un=0,$i=null,gr=1,yr="";function Hi(n,r){$s[Hs++]=Ol,$s[Hs++]=Vl,Vl=n,Ol=r}function Yf(n,r,o){ln[un++]=gr,ln[un++]=yr,ln[un++]=$i,$i=n;var u=gr;n=yr;var d=32-Yt(u)-1;u&=~(1<<d),o+=1;var f=32-Yt(r)+d;if(30<f){var _=d-d%5;f=(u&(1<<_)-1).toString(32),u>>=_,d-=_,gr=1<<32-Yt(r)+d|o<<d|u,yr=f+n}else gr=1<<f|o<<d|u,yr=n}function Fc(n){n.return!==null&&(Hi(n,1),Yf(n,1,0))}function Uc(n){for(;n===Vl;)Vl=$s[--Hs],$s[Hs]=null,Ol=$s[--Hs],$s[Hs]=null;for(;n===$i;)$i=ln[--un],ln[un]=null,yr=ln[--un],ln[un]=null,gr=ln[--un],ln[un]=null}var nn=null,rn=null,Ye=!1,In=null;function Jf(n,r){var o=fn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function Zf(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,nn=n,rn=Xr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,nn=n,rn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=$i!==null?{id:gr,overflow:yr}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=fn(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,nn=n,rn=null,!0):!1;default:return!1}}function jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zc(n){if(Ye){var r=rn;if(r){var o=r;if(!Zf(n,r)){if(jc(n))throw Error(t(418));r=Xr(o.nextSibling);var u=nn;r&&Zf(n,r)?Jf(u,o):(n.flags=n.flags&-4097|2,Ye=!1,nn=n)}}else{if(jc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,nn=n}}}function ep(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function Ml(n){if(n!==nn)return!1;if(!Ye)return ep(n),Ye=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Dc(n.type,n.memoizedProps)),r&&(r=rn)){if(jc(n))throw tp(),Error(t(418));for(;r;)Jf(n,r),r=Xr(r.nextSibling)}if(ep(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){rn=Xr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}rn=null}}else rn=nn?Xr(n.stateNode.nextSibling):null;return!0}function tp(){for(var n=rn;n;)n=Xr(n.nextSibling)}function qs(){rn=nn=null,Ye=!1}function Bc(n){In===null?In=[n]:In.push(n)}var r0=Oe.ReactCurrentBatchConfig;function aa(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(_){var T=d.refs;_===null?delete T[f]:T[f]=_},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ll(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function np(n){var r=n._init;return r(n._payload)}function rp(n){function r(M,x){if(n){var b=M.deletions;b===null?(M.deletions=[x],M.flags|=16):b.push(x)}}function o(M,x){if(!n)return null;for(;x!==null;)r(M,x),x=x.sibling;return null}function u(M,x){for(M=new Map;x!==null;)x.key!==null?M.set(x.key,x):M.set(x.index,x),x=x.sibling;return M}function d(M,x){return M=ai(M,x),M.index=0,M.sibling=null,M}function f(M,x,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<x?(M.flags|=2,x):b):(M.flags|=2,x)):(M.flags|=1048576,x)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,x,b,X){return x===null||x.tag!==6?(x=Vh(b,M.mode,X),x.return=M,x):(x=d(x,b),x.return=M,x)}function k(M,x,b,X){var le=b.type;return le===P?W(M,x,b.props.children,X,b.key):x!==null&&(x.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===oe&&np(le)===x.type)?(X=d(x,b.props),X.ref=aa(M,x,b),X.return=M,X):(X=ou(b.type,b.key,b.props,null,M.mode,X),X.ref=aa(M,x,b),X.return=M,X)}function F(M,x,b,X){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=Oh(b,M.mode,X),x.return=M,x):(x=d(x,b.children||[]),x.return=M,x)}function W(M,x,b,X,le){return x===null||x.tag!==7?(x=Ji(b,M.mode,X,le),x.return=M,x):(x=d(x,b),x.return=M,x)}function K(M,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Vh(""+x,M.mode,b),x.return=M,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Be:return b=ou(x.type,x.key,x.props,null,M.mode,b),b.ref=aa(M,null,x),b.return=M,b;case we:return x=Oh(x,M.mode,b),x.return=M,x;case oe:var X=x._init;return K(M,X(x._payload),b)}if(it(x)||re(x))return x=Ji(x,M.mode,b,null),x.return=M,x;Ll(M,x)}return null}function H(M,x,b,X){var le=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return le!==null?null:T(M,x,""+b,X);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Be:return b.key===le?k(M,x,b,X):null;case we:return b.key===le?F(M,x,b,X):null;case oe:return le=b._init,H(M,x,le(b._payload),X)}if(it(b)||re(b))return le!==null?null:W(M,x,b,X,null);Ll(M,b)}return null}function ee(M,x,b,X,le){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(b)||null,T(x,M,""+X,le);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Be:return M=M.get(X.key===null?b:X.key)||null,k(x,M,X,le);case we:return M=M.get(X.key===null?b:X.key)||null,F(x,M,X,le);case oe:var he=X._init;return ee(M,x,b,he(X._payload),le)}if(it(X)||re(X))return M=M.get(b)||null,W(x,M,X,le,null);Ll(x,X)}return null}function se(M,x,b,X){for(var le=null,he=null,de=x,ge=x=0,Tt=null;de!==null&&ge<b.length;ge++){de.index>ge?(Tt=de,de=null):Tt=de.sibling;var be=H(M,de,b[ge],X);if(be===null){de===null&&(de=Tt);break}n&&de&&be.alternate===null&&r(M,de),x=f(be,x,ge),he===null?le=be:he.sibling=be,he=be,de=Tt}if(ge===b.length)return o(M,de),Ye&&Hi(M,ge),le;if(de===null){for(;ge<b.length;ge++)de=K(M,b[ge],X),de!==null&&(x=f(de,x,ge),he===null?le=de:he.sibling=de,he=de);return Ye&&Hi(M,ge),le}for(de=u(M,de);ge<b.length;ge++)Tt=ee(de,M,ge,b[ge],X),Tt!==null&&(n&&Tt.alternate!==null&&de.delete(Tt.key===null?ge:Tt.key),x=f(Tt,x,ge),he===null?le=Tt:he.sibling=Tt,he=Tt);return n&&de.forEach(function(li){return r(M,li)}),Ye&&Hi(M,ge),le}function ae(M,x,b,X){var le=re(b);if(typeof le!="function")throw Error(t(150));if(b=le.call(b),b==null)throw Error(t(151));for(var he=le=null,de=x,ge=x=0,Tt=null,be=b.next();de!==null&&!be.done;ge++,be=b.next()){de.index>ge?(Tt=de,de=null):Tt=de.sibling;var li=H(M,de,be.value,X);if(li===null){de===null&&(de=Tt);break}n&&de&&li.alternate===null&&r(M,de),x=f(li,x,ge),he===null?le=li:he.sibling=li,he=li,de=Tt}if(be.done)return o(M,de),Ye&&Hi(M,ge),le;if(de===null){for(;!be.done;ge++,be=b.next())be=K(M,be.value,X),be!==null&&(x=f(be,x,ge),he===null?le=be:he.sibling=be,he=be);return Ye&&Hi(M,ge),le}for(de=u(M,de);!be.done;ge++,be=b.next())be=ee(de,M,ge,be.value,X),be!==null&&(n&&be.alternate!==null&&de.delete(be.key===null?ge:be.key),x=f(be,x,ge),he===null?le=be:he.sibling=be,he=be);return n&&de.forEach(function(L0){return r(M,L0)}),Ye&&Hi(M,ge),le}function ot(M,x,b,X){if(typeof b=="object"&&b!==null&&b.type===P&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Be:e:{for(var le=b.key,he=x;he!==null;){if(he.key===le){if(le=b.type,le===P){if(he.tag===7){o(M,he.sibling),x=d(he,b.props.children),x.return=M,M=x;break e}}else if(he.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===oe&&np(le)===he.type){o(M,he.sibling),x=d(he,b.props),x.ref=aa(M,he,b),x.return=M,M=x;break e}o(M,he);break}else r(M,he);he=he.sibling}b.type===P?(x=Ji(b.props.children,M.mode,X,b.key),x.return=M,M=x):(X=ou(b.type,b.key,b.props,null,M.mode,X),X.ref=aa(M,x,b),X.return=M,M=X)}return _(M);case we:e:{for(he=b.key;x!==null;){if(x.key===he)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){o(M,x.sibling),x=d(x,b.children||[]),x.return=M,M=x;break e}else{o(M,x);break}else r(M,x);x=x.sibling}x=Oh(b,M.mode,X),x.return=M,M=x}return _(M);case oe:return he=b._init,ot(M,x,he(b._payload),X)}if(it(b))return se(M,x,b,X);if(re(b))return ae(M,x,b,X);Ll(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(o(M,x.sibling),x=d(x,b),x.return=M,M=x):(o(M,x),x=Vh(b,M.mode,X),x.return=M,M=x),_(M)):o(M,x)}return ot}var Ws=rp(!0),ip=rp(!1),bl=Yr(null),Fl=null,Gs=null,$c=null;function Hc(){$c=Gs=Fl=null}function qc(n){var r=bl.current;Qe(bl),n._currentValue=r}function Wc(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Ks(n,r){Fl=n,$c=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(qt=!0),n.firstContext=null)}function cn(n){var r=n._currentValue;if($c!==n)if(n={context:n,memoizedValue:r,next:null},Gs===null){if(Fl===null)throw Error(t(308));Gs=n,Fl.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return r}var qi=null;function Gc(n){qi===null?qi=[n]:qi.push(n)}function sp(n,r,o,u){var d=r.interleaved;return d===null?(o.next=o,Gc(r)):(o.next=d.next,d.next=o),r.interleaved=o,_r(n,u)}function _r(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ei=!1;function Kc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function op(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ti(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Le&2)!==0){var d=u.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),u.pending=r,_r(n,o)}return d=u.interleaved,d===null?(r.next=r,Gc(u)):(r.next=d.next,d.next=r),u.interleaved=r,_r(n,o)}function Ul(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Bo(n,o)}}function ap(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var _={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};f===null?d=f=_:f=f.next=_,o=o.next}while(o!==null);f===null?d=f=r:f=f.next=r}else d=f=r;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function jl(n,r,o,u){var d=n.updateQueue;ei=!1;var f=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var k=T,F=k.next;k.next=null,_===null?f=F:_.next=F,_=k;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==_&&(T===null?W.firstBaseUpdate=F:T.next=F,W.lastBaseUpdate=k))}if(f!==null){var K=d.baseState;_=0,W=F=k=null,T=f;do{var H=T.lane,ee=T.eventTime;if((u&H)===H){W!==null&&(W=W.next={eventTime:ee,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var se=n,ae=T;switch(H=r,ee=o,ae.tag){case 1:if(se=ae.payload,typeof se=="function"){K=se.call(ee,K,H);break e}K=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ae.payload,H=typeof se=="function"?se.call(ee,K,H):se,H==null)break e;K=te({},K,H);break e;case 2:ei=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[T]:H.push(T))}else ee={eventTime:ee,lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(F=W=ee,k=K):W=W.next=ee,_|=H;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;H=T,T=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(W===null&&(k=K),d.baseState=k,d.firstBaseUpdate=F,d.lastBaseUpdate=W,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);Ki|=_,n.lanes=_,n.memoizedState=K}}function lp(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var la={},qn=Yr(la),ua=Yr(la),ca=Yr(la);function Wi(n){if(n===la)throw Error(t(174));return n}function Qc(n,r){switch(We(ca,r),We(ua,n),We(qn,la),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:gs(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=gs(r,n)}Qe(qn),We(qn,r)}function Qs(){Qe(qn),Qe(ua),Qe(ca)}function up(n){Wi(ca.current);var r=Wi(qn.current),o=gs(r,n.type);r!==o&&(We(ua,n),We(qn,o))}function Xc(n){ua.current===n&&(Qe(qn),Qe(ua))}var Je=Yr(0);function zl(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Yc=[];function Jc(){for(var n=0;n<Yc.length;n++)Yc[n]._workInProgressVersionPrimary=null;Yc.length=0}var Bl=Oe.ReactCurrentDispatcher,Zc=Oe.ReactCurrentBatchConfig,Gi=0,Ze=null,pt=null,wt=null,$l=!1,ha=!1,da=0,i0=0;function Vt(){throw Error(t(321))}function eh(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!Tn(n[o],r[o]))return!1;return!0}function th(n,r,o,u,d,f){if(Gi=f,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Bl.current=n===null||n.memoizedState===null?l0:u0,n=o(u,d),ha){f=0;do{if(ha=!1,da=0,25<=f)throw Error(t(301));f+=1,wt=pt=null,r.updateQueue=null,Bl.current=c0,n=o(u,d)}while(ha)}if(Bl.current=Wl,r=pt!==null&&pt.next!==null,Gi=0,wt=pt=Ze=null,$l=!1,r)throw Error(t(300));return n}function nh(){var n=da!==0;return da=0,n}function Wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ze.memoizedState=wt=n:wt=wt.next=n,wt}function hn(){if(pt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var r=wt===null?Ze.memoizedState:wt.next;if(r!==null)wt=r,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},wt===null?Ze.memoizedState=wt=n:wt=wt.next=n}return wt}function fa(n,r){return typeof r=="function"?r(n):r}function rh(n){var r=hn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=pt,d=u.baseQueue,f=o.pending;if(f!==null){if(d!==null){var _=d.next;d.next=f.next,f.next=_}u.baseQueue=d=f,o.pending=null}if(d!==null){f=d.next,u=u.baseState;var T=_=null,k=null,F=f;do{var W=F.lane;if((Gi&W)===W)k!==null&&(k=k.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),u=F.hasEagerState?F.eagerState:n(u,F.action);else{var K={lane:W,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};k===null?(T=k=K,_=u):k=k.next=K,Ze.lanes|=W,Ki|=W}F=F.next}while(F!==null&&F!==f);k===null?_=u:k.next=T,Tn(u,r.memoizedState)||(qt=!0),r.memoizedState=u,r.baseState=_,r.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do f=d.lane,Ze.lanes|=f,Ki|=f,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function ih(n){var r=hn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,f=r.memoizedState;if(d!==null){o.pending=null;var _=d=d.next;do f=n(f,_.action),_=_.next;while(_!==d);Tn(f,r.memoizedState)||(qt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),o.lastRenderedState=f}return[f,u]}function cp(){}function hp(n,r){var o=Ze,u=hn(),d=r(),f=!Tn(u.memoizedState,d);if(f&&(u.memoizedState=d,qt=!0),u=u.queue,sh(pp.bind(null,o,u,n),[n]),u.getSnapshot!==r||f||wt!==null&&wt.memoizedState.tag&1){if(o.flags|=2048,pa(9,fp.bind(null,o,u,d,r),void 0,null),Et===null)throw Error(t(349));(Gi&30)!==0||dp(o,r,d)}return d}function dp(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function fp(n,r,o,u){r.value=o,r.getSnapshot=u,mp(r)&&gp(n)}function pp(n,r,o){return o(function(){mp(r)&&gp(n)})}function mp(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!Tn(n,o)}catch{return!0}}function gp(n){var r=_r(n,1);r!==null&&kn(r,n,1,-1)}function yp(n){var r=Wn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:n},r.queue=n,n=n.dispatch=a0.bind(null,Ze,n),[r.memoizedState,n]}function pa(n,r,o,u){return n={tag:n,create:r,destroy:o,deps:u,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n)),n}function _p(){return hn().memoizedState}function Hl(n,r,o,u){var d=Wn();Ze.flags|=n,d.memoizedState=pa(1|r,o,void 0,u===void 0?null:u)}function ql(n,r,o,u){var d=hn();u=u===void 0?null:u;var f=void 0;if(pt!==null){var _=pt.memoizedState;if(f=_.destroy,u!==null&&eh(u,_.deps)){d.memoizedState=pa(r,o,f,u);return}}Ze.flags|=n,d.memoizedState=pa(1|r,o,f,u)}function vp(n,r){return Hl(8390656,8,n,r)}function sh(n,r){return ql(2048,8,n,r)}function wp(n,r){return ql(4,2,n,r)}function Ep(n,r){return ql(4,4,n,r)}function Tp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Ip(n,r,o){return o=o!=null?o.concat([n]):null,ql(4,4,Tp.bind(null,r,n),o)}function oh(){}function Sp(n,r){var o=hn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&eh(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Ap(n,r){var o=hn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&eh(r,u[1])?u[0]:(n=n(),o.memoizedState=[n,r],n)}function Cp(n,r,o){return(Gi&21)===0?(n.baseState&&(n.baseState=!1,qt=!0),n.memoizedState=o):(Tn(o,r)||(o=jo(),Ze.lanes|=o,Ki|=o,n.baseState=!0),r)}function s0(n,r){var o=De;De=o!==0&&4>o?o:4,n(!0);var u=Zc.transition;Zc.transition={};try{n(!1),r()}finally{De=o,Zc.transition=u}}function kp(){return hn().memoizedState}function o0(n,r,o){var u=si(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Rp(n))Pp(r,o);else if(o=sp(n,r,o,u),o!==null){var d=Bt();kn(o,n,u,d),xp(o,r,u)}}function a0(n,r,o){var u=si(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Rp(n))Pp(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var _=r.lastRenderedState,T=f(_,o);if(d.hasEagerState=!0,d.eagerState=T,Tn(T,_)){var k=r.interleaved;k===null?(d.next=d,Gc(r)):(d.next=k.next,k.next=d),r.interleaved=d;return}}catch{}finally{}o=sp(n,r,d,u),o!==null&&(d=Bt(),kn(o,n,u,d),xp(o,r,u))}}function Rp(n){var r=n.alternate;return n===Ze||r!==null&&r===Ze}function Pp(n,r){ha=$l=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function xp(n,r,o){if((o&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Bo(n,o)}}var Wl={readContext:cn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},l0={readContext:cn,useCallback:function(n,r){return Wn().memoizedState=[n,r===void 0?null:r],n},useContext:cn,useEffect:vp,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,Hl(4194308,4,Tp.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Hl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Hl(4,2,n,r)},useMemo:function(n,r){var o=Wn();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var u=Wn();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=o0.bind(null,Ze,n),[u.memoizedState,n]},useRef:function(n){var r=Wn();return n={current:n},r.memoizedState=n},useState:yp,useDebugValue:oh,useDeferredValue:function(n){return Wn().memoizedState=n},useTransition:function(){var n=yp(!1),r=n[0];return n=s0.bind(null,n[1]),Wn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var u=Ze,d=Wn();if(Ye){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),Et===null)throw Error(t(349));(Gi&30)!==0||dp(u,r,o)}d.memoizedState=o;var f={value:o,getSnapshot:r};return d.queue=f,vp(pp.bind(null,u,f,n),[n]),u.flags|=2048,pa(9,fp.bind(null,u,f,o,r),void 0,null),o},useId:function(){var n=Wn(),r=Et.identifierPrefix;if(Ye){var o=yr,u=gr;o=(u&~(1<<32-Yt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=da++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=i0++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},u0={readContext:cn,useCallback:Sp,useContext:cn,useEffect:sh,useImperativeHandle:Ip,useInsertionEffect:wp,useLayoutEffect:Ep,useMemo:Ap,useReducer:rh,useRef:_p,useState:function(){return rh(fa)},useDebugValue:oh,useDeferredValue:function(n){var r=hn();return Cp(r,pt.memoizedState,n)},useTransition:function(){var n=rh(fa)[0],r=hn().memoizedState;return[n,r]},useMutableSource:cp,useSyncExternalStore:hp,useId:kp,unstable_isNewReconciler:!1},c0={readContext:cn,useCallback:Sp,useContext:cn,useEffect:sh,useImperativeHandle:Ip,useInsertionEffect:wp,useLayoutEffect:Ep,useMemo:Ap,useReducer:ih,useRef:_p,useState:function(){return ih(fa)},useDebugValue:oh,useDeferredValue:function(n){var r=hn();return pt===null?r.memoizedState=n:Cp(r,pt.memoizedState,n)},useTransition:function(){var n=ih(fa)[0],r=hn().memoizedState;return[n,r]},useMutableSource:cp,useSyncExternalStore:hp,useId:kp,unstable_isNewReconciler:!1};function Sn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function ah(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:te({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Gl={isMounted:function(n){return(n=n._reactInternals)?wn(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Bt(),d=si(n),f=vr(u,d);f.payload=r,o!=null&&(f.callback=o),r=ti(n,f,d),r!==null&&(kn(r,n,d,u),Ul(r,n,d))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Bt(),d=si(n),f=vr(u,d);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=ti(n,f,d),r!==null&&(kn(r,n,d,u),Ul(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Bt(),u=si(n),d=vr(o,u);d.tag=2,r!=null&&(d.callback=r),r=ti(n,d,u),r!==null&&(kn(r,n,u,o),Ul(r,n,u))}};function Np(n,r,o,u,d,f,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,f,_):r.prototype&&r.prototype.isPureReactComponent?!ea(o,u)||!ea(d,f):!0}function Dp(n,r,o){var u=!1,d=Jr,f=r.contextType;return typeof f=="object"&&f!==null?f=cn(f):(d=Ht(r)?Bi:Dt.current,u=r.contextTypes,f=(u=u!=null)?Bs(n,d):Jr),r=new r(o,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Gl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function Vp(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&Gl.enqueueReplaceState(r,r.state,null)}function lh(n,r,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Kc(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=cn(f):(f=Ht(r)?Bi:Dt.current,d.context=Bs(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(ah(n,r,f,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Gl.enqueueReplaceState(d,d.state,null),jl(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,r){try{var o="",u=r;do o+=ke(u),u=u.return;while(u);var d=o}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function uh(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function ch(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var h0=typeof WeakMap=="function"?WeakMap:Map;function Op(n,r,o){o=vr(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){eu||(eu=!0,Ah=u),ch(n,r)},o}function Mp(n,r,o){o=vr(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=r.value;o.payload=function(){return u(d)},o.callback=function(){ch(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(o.callback=function(){ch(n,r),typeof u!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),o}function Lp(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new h0;var d=new Set;u.set(r,d)}else d=u.get(r),d===void 0&&(d=new Set,u.set(r,d));d.has(o)||(d.add(o),n=A0.bind(null,n,r,o),r.then(n,n))}function bp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Fp(n,r,o,u,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=vr(-1,1),r.tag=2,ti(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var d0=Oe.ReactCurrentOwner,qt=!1;function zt(n,r,o,u){r.child=n===null?ip(r,null,o,u):Ws(r,n.child,o,u)}function Up(n,r,o,u,d){o=o.render;var f=r.ref;return Ks(r,d),u=th(n,r,o,u,f,d),o=nh(),n!==null&&!qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Ye&&o&&Fc(r),r.flags|=1,zt(n,r,u,d),r.child)}function jp(n,r,o,u,d){if(n===null){var f=o.type;return typeof f=="function"&&!Dh(f)&&f.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=f,zp(n,r,f,u,d)):(n=ou(o.type,null,u,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var _=f.memoizedProps;if(o=o.compare,o=o!==null?o:ea,o(_,u)&&n.ref===r.ref)return wr(n,r,d)}return r.flags|=1,n=ai(f,u),n.ref=r.ref,n.return=r,r.child=n}function zp(n,r,o,u,d){if(n!==null){var f=n.memoizedProps;if(ea(f,u)&&n.ref===r.ref)if(qt=!1,r.pendingProps=u=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(qt=!0);else return r.lanes=n.lanes,wr(n,r,d)}return hh(n,r,o,u,d)}function Bp(n,r,o){var u=r.pendingProps,d=u.children,f=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(Js,sn),sn|=o;else{if((o&1073741824)===0)return n=f!==null?f.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,We(Js,sn),sn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=f!==null?f.baseLanes:o,We(Js,sn),sn|=u}else f!==null?(u=f.baseLanes|o,r.memoizedState=null):u=o,We(Js,sn),sn|=u;return zt(n,r,d,o),r.child}function $p(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function hh(n,r,o,u,d){var f=Ht(o)?Bi:Dt.current;return f=Bs(r,f),Ks(r,d),o=th(n,r,o,u,f,d),u=nh(),n!==null&&!qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,wr(n,r,d)):(Ye&&u&&Fc(r),r.flags|=1,zt(n,r,o,d),r.child)}function Hp(n,r,o,u,d){if(Ht(o)){var f=!0;Nl(r)}else f=!1;if(Ks(r,d),r.stateNode===null)Ql(n,r),Dp(r,o,u),lh(r,o,u,d),u=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var k=_.context,F=o.contextType;typeof F=="object"&&F!==null?F=cn(F):(F=Ht(o)?Bi:Dt.current,F=Bs(r,F));var W=o.getDerivedStateFromProps,K=typeof W=="function"||typeof _.getSnapshotBeforeUpdate=="function";K||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==u||k!==F)&&Vp(r,_,u,F),ei=!1;var H=r.memoizedState;_.state=H,jl(r,u,_,d),k=r.memoizedState,T!==u||H!==k||$t.current||ei?(typeof W=="function"&&(ah(r,o,W,u),k=r.memoizedState),(T=ei||Np(r,o,T,u,H,k,F))?(K||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=k),_.props=u,_.state=k,_.context=F,u=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{_=r.stateNode,op(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:Sn(r.type,T),_.props=F,K=r.pendingProps,H=_.context,k=o.contextType,typeof k=="object"&&k!==null?k=cn(k):(k=Ht(o)?Bi:Dt.current,k=Bs(r,k));var ee=o.getDerivedStateFromProps;(W=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==K||H!==k)&&Vp(r,_,u,k),ei=!1,H=r.memoizedState,_.state=H,jl(r,u,_,d);var se=r.memoizedState;T!==K||H!==se||$t.current||ei?(typeof ee=="function"&&(ah(r,o,ee,u),se=r.memoizedState),(F=ei||Np(r,o,F,u,H,se,k)||!1)?(W||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,se,k),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,se,k)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=se),_.props=u,_.state=se,_.context=k,u=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),u=!1)}return dh(n,r,o,u,f,d)}function dh(n,r,o,u,d,f){$p(n,r);var _=(r.flags&128)!==0;if(!u&&!_)return d&&Qf(r,o,!1),wr(n,r,f);u=r.stateNode,d0.current=r;var T=_&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&_?(r.child=Ws(r,n.child,null,f),r.child=Ws(r,null,T,f)):zt(n,r,T,f),r.memoizedState=u.state,d&&Qf(r,o,!0),r.child}function qp(n){var r=n.stateNode;r.pendingContext?Gf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Gf(n,r.context,!1),Qc(n,r.containerInfo)}function Wp(n,r,o,u,d){return qs(),Bc(d),r.flags|=256,zt(n,r,o,u),r.child}var fh={dehydrated:null,treeContext:null,retryLane:0};function ph(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gp(n,r,o){var u=r.pendingProps,d=Je.current,f=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(Je,d&1),n===null)return zc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=u.children,n=u.fallback,f?(u=r.mode,f=r.child,_={mode:"hidden",children:_},(u&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=_):f=au(_,u,0,null),n=Ji(n,u,o,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=ph(o),r.memoizedState=fh,n):mh(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return f0(n,r,_,u,T,d,o);if(f){f=u.fallback,_=r.mode,d=n.child,T=d.sibling;var k={mode:"hidden",children:u.children};return(_&1)===0&&r.child!==d?(u=r.child,u.childLanes=0,u.pendingProps=k,r.deletions=null):(u=ai(d,k),u.subtreeFlags=d.subtreeFlags&14680064),T!==null?f=ai(T,f):(f=Ji(f,_,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,_=n.child.memoizedState,_=_===null?ph(o):{baseLanes:_.baseLanes|o,cachePool:null,transitions:_.transitions},f.memoizedState=_,f.childLanes=n.childLanes&~o,r.memoizedState=fh,u}return f=n.child,n=f.sibling,u=ai(f,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=u,r.memoizedState=null,u}function mh(n,r){return r=au({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Kl(n,r,o,u){return u!==null&&Bc(u),Ws(r,n.child,null,o),n=mh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function f0(n,r,o,u,d,f,_){if(o)return r.flags&256?(r.flags&=-257,u=uh(Error(t(422))),Kl(n,r,_,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=u.fallback,d=r.mode,u=au({mode:"visible",children:u.children},d,0,null),f=Ji(f,d,_,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,(r.mode&1)!==0&&Ws(r,n.child,null,_),r.child.memoizedState=ph(_),r.memoizedState=fh,f);if((r.mode&1)===0)return Kl(n,r,_,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var T=u.dgst;return u=T,f=Error(t(419)),u=uh(f,u,void 0),Kl(n,r,_,u)}if(T=(_&n.childLanes)!==0,qt||T){if(u=Et,u!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|_))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,_r(n,d),kn(u,n,d,-1))}return Nh(),u=uh(Error(t(421))),Kl(n,r,_,u)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=C0.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,rn=Xr(d.nextSibling),nn=r,Ye=!0,In=null,n!==null&&(ln[un++]=gr,ln[un++]=yr,ln[un++]=$i,gr=n.id,yr=n.overflow,$i=r),r=mh(r,u.children),r.flags|=4096,r)}function Kp(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Wc(n.return,r,o)}function gh(n,r,o,u,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=u,f.tail=o,f.tailMode=d)}function Qp(n,r,o){var u=r.pendingProps,d=u.revealOrder,f=u.tail;if(zt(n,r,u.children,o),u=Je.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Kp(n,o,r);else if(n.tag===19)Kp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(We(Je,u),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(o=r.child,d=null;o!==null;)n=o.alternate,n!==null&&zl(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),gh(r,!1,d,o,f);break;case"backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&zl(n)===null){r.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}gh(r,!0,o,null,f);break;case"together":gh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ql(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function wr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Ki|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=ai(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=ai(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function p0(n,r,o){switch(r.tag){case 3:qp(r),qs();break;case 5:up(r);break;case 1:Ht(r.type)&&Nl(r);break;case 4:Qc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,d=r.memoizedProps.value;We(bl,u._currentValue),u._currentValue=d;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(We(Je,Je.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Gp(n,r,o):(We(Je,Je.current&1),n=wr(n,r,o),n!==null?n.sibling:null);We(Je,Je.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(n.flags&128)!==0){if(u)return Qp(n,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Je,Je.current),u)break;return null;case 22:case 23:return r.lanes=0,Bp(n,r,o)}return wr(n,r,o)}var Xp,yh,Yp,Jp;Xp=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},yh=function(){},Yp=function(n,r,o,u){var d=n.memoizedProps;if(d!==u){n=r.stateNode,Wi(qn.current);var f=null;switch(o){case"input":d=ps(n,d),u=ps(n,u),f=[];break;case"select":d=te({},d,{value:void 0}),u=te({},u,{value:void 0}),f=[];break;case"textarea":d=Po(n,d),u=Po(n,u),f=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Rl)}vn(o,u);var _;o=null;for(F in d)if(!u.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(o||(o={}),o[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(a.hasOwnProperty(F)?f||(f=[]):(f=f||[]).push(F,null));for(F in u){var k=u[F];if(T=d?.[F],u.hasOwnProperty(F)&&k!==T&&(k!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||k&&k.hasOwnProperty(_)||(o||(o={}),o[_]="");for(_ in k)k.hasOwnProperty(_)&&T[_]!==k[_]&&(o||(o={}),o[_]=k[_])}else o||(f||(f=[]),f.push(F,o)),o=k;else F==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,T=T?T.__html:void 0,k!=null&&T!==k&&(f=f||[]).push(F,k)):F==="children"?typeof k!="string"&&typeof k!="number"||(f=f||[]).push(F,""+k):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(a.hasOwnProperty(F)?(k!=null&&F==="onScroll"&&Ke("scroll",n),f||T===k||(f=[])):(f=f||[]).push(F,k))}o&&(f=f||[]).push("style",o);var F=f;(r.updateQueue=F)&&(r.flags|=4)}},Jp=function(n,r,o,u){o!==u&&(r.flags|=4)};function ma(n,r){if(!Ye)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function m0(n,r,o){var u=r.pendingProps;switch(Uc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Ht(r.type)&&xl(),Ot(r),null;case 3:return u=r.stateNode,Qs(),Qe($t),Qe(Dt),Jc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ml(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,In!==null&&(Rh(In),In=null))),yh(n,r),Ot(r),null;case 5:Xc(r);var d=Wi(ca.current);if(o=r.type,n!==null&&r.stateNode!=null)Yp(n,r,o,u,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Wi(qn.current),Ml(r)){u=r.stateNode,o=r.type;var f=r.memoizedProps;switch(u[Hn]=r,u[sa]=f,n=(r.mode&1)!==0,o){case"dialog":Ke("cancel",u),Ke("close",u);break;case"iframe":case"object":case"embed":Ke("load",u);break;case"video":case"audio":for(d=0;d<na.length;d++)Ke(na[d],u);break;case"source":Ke("error",u);break;case"img":case"image":case"link":Ke("error",u),Ke("load",u);break;case"details":Ke("toggle",u);break;case"input":Za(u,f),Ke("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!f.multiple},Ke("invalid",u);break;case"textarea":xo(u,f),Ke("invalid",u)}vn(o,f),d=null;for(var _ in f)if(f.hasOwnProperty(_)){var T=f[_];_==="children"?typeof T=="string"?u.textContent!==T&&(f.suppressHydrationWarning!==!0&&kl(u.textContent,T,n),d=["children",T]):typeof T=="number"&&u.textContent!==""+T&&(f.suppressHydrationWarning!==!0&&kl(u.textContent,T,n),d=["children",""+T]):a.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&Ke("scroll",u)}switch(o){case"input":fs(u),Ro(u,f,!0);break;case"textarea":fs(u),Or(u);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(u.onclick=Rl)}u=d,r.updateQueue=u,u!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=No(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=_.createElement(o,{is:u.is}):(n=_.createElement(o),o==="select"&&(_=n,u.multiple?_.multiple=!0:u.size&&(_.size=u.size))):n=_.createElementNS(n,o),n[Hn]=r,n[sa]=u,Xp(n,r,!1,!1),r.stateNode=n;e:{switch(_=_s(o,u),o){case"dialog":Ke("cancel",n),Ke("close",n),d=u;break;case"iframe":case"object":case"embed":Ke("load",n),d=u;break;case"video":case"audio":for(d=0;d<na.length;d++)Ke(na[d],n);d=u;break;case"source":Ke("error",n),d=u;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=u;break;case"details":Ke("toggle",n),d=u;break;case"input":Za(n,u),d=ps(n,u),Ke("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=te({},u,{value:void 0}),Ke("invalid",n);break;case"textarea":xo(n,u),d=Po(n,u),Ke("invalid",n);break;default:d=u}vn(o,d),T=d;for(f in T)if(T.hasOwnProperty(f)){var k=T[f];f==="style"?ys(n,k):f==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&tl(n,k)):f==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ki(n,k):typeof k=="number"&&ki(n,""+k):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(a.hasOwnProperty(f)?k!=null&&f==="onScroll"&&Ke("scroll",n):k!=null&&ve(n,f,k,_))}switch(o){case"input":fs(n),Ro(n,u,!1);break;case"textarea":fs(n),Or(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Me(u.value));break;case"select":n.multiple=!!u.multiple,f=u.value,f!=null?_n(n,!!u.multiple,f,!1):u.defaultValue!=null&&_n(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Rl)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)Jp(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(o=Wi(ca.current),Wi(qn.current),Ml(r)){if(u=r.stateNode,o=r.memoizedProps,u[Hn]=r,(f=u.nodeValue!==o)&&(n=nn,n!==null))switch(n.tag){case 3:kl(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&kl(u.nodeValue,o,(n.mode&1)!==0)}f&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Hn]=r,r.stateNode=u}return Ot(r),null;case 13:if(Qe(Je),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&rn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)tp(),qs(),r.flags|=98560,f=!1;else if(f=Ml(r),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Hn]=r}else qs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),f=!1}else In!==null&&(Rh(In),In=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Je.current&1)!==0?mt===0&&(mt=3):Nh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Qs(),yh(n,r),n===null&&ra(r.stateNode.containerInfo),Ot(r),null;case 10:return qc(r.type._context),Ot(r),null;case 17:return Ht(r.type)&&xl(),Ot(r),null;case 19:if(Qe(Je),f=r.memoizedState,f===null)return Ot(r),null;if(u=(r.flags&128)!==0,_=f.rendering,_===null)if(u)ma(f,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=zl(n),_!==null){for(r.flags|=128,ma(f,!1),u=_.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)f=o,n=u,f.flags&=14680066,_=f.alternate,_===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=_.childLanes,f.lanes=_.lanes,f.child=_.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=_.memoizedProps,f.memoizedState=_.memoizedState,f.updateQueue=_.updateQueue,f.type=_.type,n=_.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return We(Je,Je.current&1|2),r.child}n=n.sibling}f.tail!==null&&Ge()>Zs&&(r.flags|=128,u=!0,ma(f,!1),r.lanes=4194304)}else{if(!u)if(n=zl(_),n!==null){if(r.flags|=128,u=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ma(f,!0),f.tail===null&&f.tailMode==="hidden"&&!_.alternate&&!Ye)return Ot(r),null}else 2*Ge()-f.renderingStartTime>Zs&&o!==1073741824&&(r.flags|=128,u=!0,ma(f,!1),r.lanes=4194304);f.isBackwards?(_.sibling=r.child,r.child=_):(o=f.last,o!==null?o.sibling=_:r.child=_,f.last=_)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Ge(),r.sibling=null,o=Je.current,We(Je,u?o&1|2:o&1),r):(Ot(r),null);case 22:case 23:return xh(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(sn&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function g0(n,r){switch(Uc(r),r.tag){case 1:return Ht(r.type)&&xl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Qs(),Qe($t),Qe(Dt),Jc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Xc(r),null;case 13:if(Qe(Je),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));qs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Qe(Je),null;case 4:return Qs(),null;case 10:return qc(r.type._context),null;case 22:case 23:return xh(),null;case 24:return null;default:return null}}var Xl=!1,Mt=!1,y0=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Ys(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){rt(n,r,u)}else o.current=null}function _h(n,r,o){try{o()}catch(u){rt(n,r,u)}}var Zp=!1;function _0(n,r){if(xc=hr,n=Nf(),Tc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,f=u.focusNode;u=u.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var _=0,T=-1,k=-1,F=0,W=0,K=n,H=null;t:for(;;){for(var ee;K!==o||d!==0&&K.nodeType!==3||(T=_+d),K!==f||u!==0&&K.nodeType!==3||(k=_+u),K.nodeType===3&&(_+=K.nodeValue.length),(ee=K.firstChild)!==null;)H=K,K=ee;for(;;){if(K===n)break t;if(H===o&&++F===d&&(T=_),H===f&&++W===u&&(k=_),(ee=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=ee}o=T===-1||k===-1?null:{start:T,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Nc={focusedElem:n,selectionRange:o},hr=!1,ie=r;ie!==null;)if(r=ie,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ie=n;else for(;ie!==null;){r=ie;try{var se=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var ae=se.memoizedProps,ot=se.memoizedState,M=r.stateNode,x=M.getSnapshotBeforeUpdate(r.elementType===r.type?ae:Sn(r.type,ae),ot);M.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){rt(r,r.return,X)}if(n=r.sibling,n!==null){n.return=r.return,ie=n;break}ie=r.return}return se=Zp,Zp=!1,se}function ga(n,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&_h(r,o,f)}d=d.next}while(d!==u)}}function Yl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function vh(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function em(n){var r=n.alternate;r!==null&&(n.alternate=null,em(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Hn],delete r[sa],delete r[Mc],delete r[e0],delete r[t0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function tm(n){return n.tag===5||n.tag===3||n.tag===4}function nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||tm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wh(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Rl));else if(u!==4&&(n=n.child,n!==null))for(wh(n,r,o),n=n.sibling;n!==null;)wh(n,r,o),n=n.sibling}function Eh(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Eh(n,r,o),n=n.sibling;n!==null;)Eh(n,r,o),n=n.sibling}var Ct=null,An=!1;function ni(n,r,o){for(o=o.child;o!==null;)rm(n,r,o),o=o.sibling}function rm(n,r,o){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Di,o)}catch{}switch(o.tag){case 5:Mt||Ys(o,r);case 6:var u=Ct,d=An;Ct=null,ni(n,r,o),Ct=u,An=d,Ct!==null&&(An?(n=Ct,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Ct.removeChild(o.stateNode));break;case 18:Ct!==null&&(An?(n=Ct,o=o.stateNode,n.nodeType===8?Oc(n.parentNode,o):n.nodeType===1&&Oc(n,o),Wr(n)):Oc(Ct,o.stateNode));break;case 4:u=Ct,d=An,Ct=o.stateNode.containerInfo,An=!0,ni(n,r,o),Ct=u,An=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var f=d,_=f.destroy;f=f.tag,_!==void 0&&((f&2)!==0||(f&4)!==0)&&_h(o,r,_),d=d.next}while(d!==u)}ni(n,r,o);break;case 1:if(!Mt&&(Ys(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(T){rt(o,r,T)}ni(n,r,o);break;case 21:ni(n,r,o);break;case 22:o.mode&1?(Mt=(u=Mt)||o.memoizedState!==null,ni(n,r,o),Mt=u):ni(n,r,o);break;default:ni(n,r,o)}}function im(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new y0),r.forEach(function(u){var d=k0.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function Cn(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var f=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:Ct=T.stateNode,An=!1;break e;case 3:Ct=T.stateNode.containerInfo,An=!0;break e;case 4:Ct=T.stateNode.containerInfo,An=!0;break e}T=T.return}if(Ct===null)throw Error(t(160));rm(f,_,d),Ct=null,An=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(F){rt(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)sm(r,n),r=r.sibling}function sm(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Cn(r,n),Gn(n),u&4){try{ga(3,n,n.return),Yl(3,n)}catch(ae){rt(n,n.return,ae)}try{ga(5,n,n.return)}catch(ae){rt(n,n.return,ae)}}break;case 1:Cn(r,n),Gn(n),u&512&&o!==null&&Ys(o,o.return);break;case 5:if(Cn(r,n),Gn(n),u&512&&o!==null&&Ys(o,o.return),n.flags&32){var d=n.stateNode;try{ki(d,"")}catch(ae){rt(n,n.return,ae)}}if(u&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,_=o!==null?o.memoizedProps:f,T=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{T==="input"&&f.type==="radio"&&f.name!=null&&ms(d,f),_s(T,_);var F=_s(T,f);for(_=0;_<k.length;_+=2){var W=k[_],K=k[_+1];W==="style"?ys(d,K):W==="dangerouslySetInnerHTML"?tl(d,K):W==="children"?ki(d,K):ve(d,W,K,F)}switch(T){case"input":Ci(d,f);break;case"textarea":el(d,f);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ee=f.value;ee!=null?_n(d,!!f.multiple,ee,!1):H!==!!f.multiple&&(f.defaultValue!=null?_n(d,!!f.multiple,f.defaultValue,!0):_n(d,!!f.multiple,f.multiple?[]:"",!1))}d[sa]=f}catch(ae){rt(n,n.return,ae)}}break;case 6:if(Cn(r,n),Gn(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(ae){rt(n,n.return,ae)}}break;case 3:if(Cn(r,n),Gn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Wr(r.containerInfo)}catch(ae){rt(n,n.return,ae)}break;case 4:Cn(r,n),Gn(n);break;case 13:Cn(r,n),Gn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Sh=Ge())),u&4&&im(n);break;case 22:if(W=o!==null&&o.memoizedState!==null,n.mode&1?(Mt=(F=Mt)||W,Cn(r,n),Mt=F):Cn(r,n),Gn(n),u&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!W&&(n.mode&1)!==0)for(ie=n,W=n.child;W!==null;){for(K=ie=W;ie!==null;){switch(H=ie,ee=H.child,H.tag){case 0:case 11:case 14:case 15:ga(4,H,H.return);break;case 1:Ys(H,H.return);var se=H.stateNode;if(typeof se.componentWillUnmount=="function"){u=H,o=H.return;try{r=u,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(ae){rt(u,o,ae)}}break;case 5:Ys(H,H.return);break;case 22:if(H.memoizedState!==null){lm(K);continue}}ee!==null?(ee.return=H,ie=ee):lm(K)}W=W.sibling}e:for(W=null,K=n;;){if(K.tag===5){if(W===null){W=K;try{d=K.stateNode,F?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(T=K.stateNode,k=K.memoizedProps.style,_=k!=null&&k.hasOwnProperty("display")?k.display:null,T.style.display=br("display",_))}catch(ae){rt(n,n.return,ae)}}}else if(K.tag===6){if(W===null)try{K.stateNode.nodeValue=F?"":K.memoizedProps}catch(ae){rt(n,n.return,ae)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;W===K&&(W=null),K=K.return}W===K&&(W=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Cn(r,n),Gn(n),u&4&&im(n);break;case 21:break;default:Cn(r,n),Gn(n)}}function Gn(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(tm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ki(d,""),u.flags&=-33);var f=nm(n);Eh(n,f,d);break;case 3:case 4:var _=u.stateNode.containerInfo,T=nm(n);wh(n,T,_);break;default:throw Error(t(161))}}catch(k){rt(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function v0(n,r,o){ie=n,om(n)}function om(n,r,o){for(var u=(n.mode&1)!==0;ie!==null;){var d=ie,f=d.child;if(d.tag===22&&u){var _=d.memoizedState!==null||Xl;if(!_){var T=d.alternate,k=T!==null&&T.memoizedState!==null||Mt;T=Xl;var F=Mt;if(Xl=_,(Mt=k)&&!F)for(ie=d;ie!==null;)_=ie,k=_.child,_.tag===22&&_.memoizedState!==null?um(d):k!==null?(k.return=_,ie=k):um(d);for(;f!==null;)ie=f,om(f),f=f.sibling;ie=d,Xl=T,Mt=F}am(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ie=f):am(n)}}function am(n){for(;ie!==null;){var r=ie;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Mt||Yl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Mt)if(o===null)u.componentDidMount();else{var d=r.elementType===r.type?o.memoizedProps:Sn(r.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&lp(r,f,u);break;case 3:var _=r.updateQueue;if(_!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}lp(r,_,o)}break;case 5:var T=r.stateNode;if(o===null&&r.flags&4){o=T;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var W=F.memoizedState;if(W!==null){var K=W.dehydrated;K!==null&&Wr(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||r.flags&512&&vh(r)}catch(H){rt(r,r.return,H)}}if(r===n){ie=null;break}if(o=r.sibling,o!==null){o.return=r.return,ie=o;break}ie=r.return}}function lm(n){for(;ie!==null;){var r=ie;if(r===n){ie=null;break}var o=r.sibling;if(o!==null){o.return=r.return,ie=o;break}ie=r.return}}function um(n){for(;ie!==null;){var r=ie;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Yl(4,r)}catch(k){rt(r,o,k)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var d=r.return;try{u.componentDidMount()}catch(k){rt(r,d,k)}}var f=r.return;try{vh(r)}catch(k){rt(r,f,k)}break;case 5:var _=r.return;try{vh(r)}catch(k){rt(r,_,k)}}}catch(k){rt(r,r.return,k)}if(r===n){ie=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ie=T;break}ie=r.return}}var w0=Math.ceil,Jl=Oe.ReactCurrentDispatcher,Th=Oe.ReactCurrentOwner,dn=Oe.ReactCurrentBatchConfig,Le=0,Et=null,ht=null,kt=0,sn=0,Js=Yr(0),mt=0,ya=null,Ki=0,Zl=0,Ih=0,_a=null,Wt=null,Sh=0,Zs=1/0,Er=null,eu=!1,Ah=null,ri=null,tu=!1,ii=null,nu=0,va=0,Ch=null,ru=-1,iu=0;function Bt(){return(Le&6)!==0?Ge():ru!==-1?ru:ru=Ge()}function si(n){return(n.mode&1)===0?1:(Le&2)!==0&&kt!==0?kt&-kt:r0.transition!==null?(iu===0&&(iu=jo()),iu):(n=De,n!==0||(n=window.event,n=n===void 0?16:Rs(n.type)),n)}function kn(n,r,o,u){if(50<va)throw va=0,Ch=null,Error(t(185));Li(n,o,u),((Le&2)===0||n!==Et)&&(n===Et&&((Le&2)===0&&(Zl|=o),mt===4&&oi(n,kt)),Gt(n,u),o===1&&Le===0&&(r.mode&1)===0&&(Zs=Ge()+500,Dl&&Zr()))}function Gt(n,r){var o=n.callbackNode;Mi(n,r);var u=lr(n,n===Et?kt:0);if(u===0)o!==null&&Es(o),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(o!=null&&Es(o),r===1)n.tag===0?n0(hm.bind(null,n)):Xf(hm.bind(null,n)),Jv(function(){(Le&6)===0&&Zr()}),o=null;else{switch(On(u)){case 1:o=Ts;break;case 4:o=bo;break;case 16:o=Ni;break;case 536870912:o=Is;break;default:o=Ni}o=vm(o,cm.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function cm(n,r){if(ru=-1,iu=0,(Le&6)!==0)throw Error(t(327));var o=n.callbackNode;if(eo()&&n.callbackNode!==o)return null;var u=lr(n,n===Et?kt:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=su(n,u);else{r=u;var d=Le;Le|=2;var f=fm();(Et!==n||kt!==r)&&(Er=null,Zs=Ge()+500,Xi(n,r));do try{I0();break}catch(T){dm(n,T)}while(!0);Hc(),Jl.current=f,Le=d,ht!==null?r=0:(Et=null,kt=0,r=mt)}if(r!==0){if(r===2&&(d=Uo(n),d!==0&&(u=d,r=kh(n,d))),r===1)throw o=ya,Xi(n,0),oi(n,u),Gt(n,Ge()),o;if(r===6)oi(n,u);else{if(d=n.current.alternate,(u&30)===0&&!E0(d)&&(r=su(n,u),r===2&&(f=Uo(n),f!==0&&(u=f,r=kh(n,f))),r===1))throw o=ya,Xi(n,0),oi(n,u),Gt(n,Ge()),o;switch(n.finishedWork=d,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Yi(n,Wt,Er);break;case 3:if(oi(n,u),(u&130023424)===u&&(r=Sh+500-Ge(),10<r)){if(lr(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Vc(Yi.bind(null,n,Wt,Er),r);break}Yi(n,Wt,Er);break;case 4:if(oi(n,u),(u&4194240)===u)break;for(r=n.eventTimes,d=-1;0<u;){var _=31-Yt(u);f=1<<_,_=r[_],_>d&&(d=_),u&=~f}if(u=d,u=Ge()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*w0(u/1960))-u,10<u){n.timeoutHandle=Vc(Yi.bind(null,n,Wt,Er),u);break}Yi(n,Wt,Er);break;case 5:Yi(n,Wt,Er);break;default:throw Error(t(329))}}}return Gt(n,Ge()),n.callbackNode===o?cm.bind(null,n):null}function kh(n,r){var o=_a;return n.current.memoizedState.isDehydrated&&(Xi(n,r).flags|=256),n=su(n,r),n!==2&&(r=Wt,Wt=o,r!==null&&Rh(r)),n}function Rh(n){Wt===null?Wt=n:Wt.push.apply(Wt,n)}function E0(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],f=d.getSnapshot;d=d.value;try{if(!Tn(f(),d))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function oi(n,r){for(r&=~Ih,r&=~Zl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-Yt(r),u=1<<o;n[o]=-1,r&=~u}}function hm(n){if((Le&6)!==0)throw Error(t(327));eo();var r=lr(n,0);if((r&1)===0)return Gt(n,Ge()),null;var o=su(n,r);if(n.tag!==0&&o===2){var u=Uo(n);u!==0&&(r=u,o=kh(n,u))}if(o===1)throw o=ya,Xi(n,0),oi(n,r),Gt(n,Ge()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Yi(n,Wt,Er),Gt(n,Ge()),null}function Ph(n,r){var o=Le;Le|=1;try{return n(r)}finally{Le=o,Le===0&&(Zs=Ge()+500,Dl&&Zr())}}function Qi(n){ii!==null&&ii.tag===0&&(Le&6)===0&&eo();var r=Le;Le|=1;var o=dn.transition,u=De;try{if(dn.transition=null,De=1,n)return n()}finally{De=u,dn.transition=o,Le=r,(Le&6)===0&&Zr()}}function xh(){sn=Js.current,Qe(Js)}function Xi(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Yv(o)),ht!==null)for(o=ht.return;o!==null;){var u=o;switch(Uc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&xl();break;case 3:Qs(),Qe($t),Qe(Dt),Jc();break;case 5:Xc(u);break;case 4:Qs();break;case 13:Qe(Je);break;case 19:Qe(Je);break;case 10:qc(u.type._context);break;case 22:case 23:xh()}o=o.return}if(Et=n,ht=n=ai(n.current,null),kt=sn=r,mt=0,ya=null,Ih=Zl=Ki=0,Wt=_a=null,qi!==null){for(r=0;r<qi.length;r++)if(o=qi[r],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,f=o.pending;if(f!==null){var _=f.next;f.next=d,u.next=_}o.pending=u}qi=null}return n}function dm(n,r){do{var o=ht;try{if(Hc(),Bl.current=Wl,$l){for(var u=Ze.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}$l=!1}if(Gi=0,wt=pt=Ze=null,ha=!1,da=0,Th.current=null,o===null||o.return===null){mt=1,ya=r,ht=null;break}e:{var f=n,_=o.return,T=o,k=r;if(r=kt,T.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var F=k,W=T,K=W.tag;if((W.mode&1)===0&&(K===0||K===11||K===15)){var H=W.alternate;H?(W.updateQueue=H.updateQueue,W.memoizedState=H.memoizedState,W.lanes=H.lanes):(W.updateQueue=null,W.memoizedState=null)}var ee=bp(_);if(ee!==null){ee.flags&=-257,Fp(ee,_,T,f,r),ee.mode&1&&Lp(f,F,r),r=ee,k=F;var se=r.updateQueue;if(se===null){var ae=new Set;ae.add(k),r.updateQueue=ae}else se.add(k);break e}else{if((r&1)===0){Lp(f,F,r),Nh();break e}k=Error(t(426))}}else if(Ye&&T.mode&1){var ot=bp(_);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),Fp(ot,_,T,f,r),Bc(Xs(k,T));break e}}f=k=Xs(k,T),mt!==4&&(mt=2),_a===null?_a=[f]:_a.push(f),f=_;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var M=Op(f,k,r);ap(f,M);break e;case 1:T=k;var x=f.type,b=f.stateNode;if((f.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ri===null||!ri.has(b)))){f.flags|=65536,r&=-r,f.lanes|=r;var X=Mp(f,T,r);ap(f,X);break e}}f=f.return}while(f!==null)}mm(o)}catch(le){r=le,ht===o&&o!==null&&(ht=o=o.return);continue}break}while(!0)}function fm(){var n=Jl.current;return Jl.current=Wl,n===null?Wl:n}function Nh(){(mt===0||mt===3||mt===2)&&(mt=4),Et===null||(Ki&268435455)===0&&(Zl&268435455)===0||oi(Et,kt)}function su(n,r){var o=Le;Le|=2;var u=fm();(Et!==n||kt!==r)&&(Er=null,Xi(n,r));do try{T0();break}catch(d){dm(n,d)}while(!0);if(Hc(),Le=o,Jl.current=u,ht!==null)throw Error(t(261));return Et=null,kt=0,mt}function T0(){for(;ht!==null;)pm(ht)}function I0(){for(;ht!==null&&!xi();)pm(ht)}function pm(n){var r=_m(n.alternate,n,sn);n.memoizedProps=n.pendingProps,r===null?mm(n):ht=r,Th.current=null}function mm(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=m0(o,r,sn),o!==null){ht=o;return}}else{if(o=g0(o,r),o!==null){o.flags&=32767,ht=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,ht=null;return}}if(r=r.sibling,r!==null){ht=r;return}ht=r=n}while(r!==null);mt===0&&(mt=5)}function Yi(n,r,o){var u=De,d=dn.transition;try{dn.transition=null,De=1,S0(n,r,o,u)}finally{dn.transition=d,De=u}return null}function S0(n,r,o,u){do eo();while(ii!==null);if((Le&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=o.lanes|o.childLanes;if(yc(n,f),n===Et&&(ht=Et=null,kt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||tu||(tu=!0,vm(Ni,function(){return eo(),null})),f=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||f){f=dn.transition,dn.transition=null;var _=De;De=1;var T=Le;Le|=4,Th.current=null,_0(n,o),sm(o,n),Hv(Nc),hr=!!xc,Nc=xc=null,n.current=o,v0(o),ar(),Le=T,De=_,dn.transition=f}else n.current=o;if(tu&&(tu=!1,ii=n,nu=d),f=n.pendingLanes,f===0&&(ri=null),dl(o.stateNode),Gt(n,Ge()),r!==null)for(u=n.onRecoverableError,o=0;o<r.length;o++)d=r[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(eu)throw eu=!1,n=Ah,Ah=null,n;return(nu&1)!==0&&n.tag!==0&&eo(),f=n.pendingLanes,(f&1)!==0?n===Ch?va++:(va=0,Ch=n):va=0,Zr(),null}function eo(){if(ii!==null){var n=On(nu),r=dn.transition,o=De;try{if(dn.transition=null,De=16>n?16:n,ii===null)var u=!1;else{if(n=ii,ii=null,nu=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,ie=n.current;ie!==null;){var f=ie,_=f.child;if((ie.flags&16)!==0){var T=f.deletions;if(T!==null){for(var k=0;k<T.length;k++){var F=T[k];for(ie=F;ie!==null;){var W=ie;switch(W.tag){case 0:case 11:case 15:ga(8,W,f)}var K=W.child;if(K!==null)K.return=W,ie=K;else for(;ie!==null;){W=ie;var H=W.sibling,ee=W.return;if(em(W),W===F){ie=null;break}if(H!==null){H.return=ee,ie=H;break}ie=ee}}}var se=f.alternate;if(se!==null){var ae=se.child;if(ae!==null){se.child=null;do{var ot=ae.sibling;ae.sibling=null,ae=ot}while(ae!==null)}}ie=f}}if((f.subtreeFlags&2064)!==0&&_!==null)_.return=f,ie=_;else e:for(;ie!==null;){if(f=ie,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:ga(9,f,f.return)}var M=f.sibling;if(M!==null){M.return=f.return,ie=M;break e}ie=f.return}}var x=n.current;for(ie=x;ie!==null;){_=ie;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,ie=b;else e:for(_=x;ie!==null;){if(T=ie,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Yl(9,T)}}catch(le){rt(T,T.return,le)}if(T===_){ie=null;break e}var X=T.sibling;if(X!==null){X.return=T.return,ie=X;break e}ie=T.return}}if(Le=d,Zr(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Di,n)}catch{}u=!0}return u}finally{De=o,dn.transition=r}}return!1}function gm(n,r,o){r=Xs(o,r),r=Op(n,r,1),n=ti(n,r,1),r=Bt(),n!==null&&(Li(n,1,r),Gt(n,r))}function rt(n,r,o){if(n.tag===3)gm(n,n,o);else for(;r!==null;){if(r.tag===3){gm(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ri===null||!ri.has(u))){n=Xs(o,n),n=Mp(r,n,1),r=ti(r,n,1),n=Bt(),r!==null&&(Li(r,1,n),Gt(r,n));break}}r=r.return}}function A0(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&o,Et===n&&(kt&o)===o&&(mt===4||mt===3&&(kt&130023424)===kt&&500>Ge()-Sh?Xi(n,0):Ih|=o),Gt(n,r)}function ym(n,r){r===0&&((n.mode&1)===0?r=1:(r=$r,$r<<=1,($r&130023424)===0&&($r=4194304)));var o=Bt();n=_r(n,r),n!==null&&(Li(n,r,o),Gt(n,o))}function C0(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),ym(n,o)}function k0(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),ym(n,o)}var _m;_m=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||$t.current)qt=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return qt=!1,p0(n,r,o);qt=(n.flags&131072)!==0}else qt=!1,Ye&&(r.flags&1048576)!==0&&Yf(r,Ol,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Ql(n,r),n=r.pendingProps;var d=Bs(r,Dt.current);Ks(r,o),d=th(null,r,u,n,d,o);var f=nh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(u)?(f=!0,Nl(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Kc(r),d.updater=Gl,r.stateNode=d,d._reactInternals=r,lh(r,u,n,o),r=dh(null,r,u,!0,f,o)):(r.tag=0,Ye&&f&&Fc(r),zt(null,r,d,o),r=r.child),r;case 16:u=r.elementType;e:{switch(Ql(n,r),n=r.pendingProps,d=u._init,u=d(u._payload),r.type=u,d=r.tag=P0(u),n=Sn(u,n),d){case 0:r=hh(null,r,u,n,o);break e;case 1:r=Hp(null,r,u,n,o);break e;case 11:r=Up(null,r,u,n,o);break e;case 14:r=jp(null,r,u,Sn(u.type,n),o);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:Sn(u,d),hh(n,r,u,d,o);case 1:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:Sn(u,d),Hp(n,r,u,d,o);case 3:e:{if(qp(r),n===null)throw Error(t(387));u=r.pendingProps,f=r.memoizedState,d=f.element,op(n,r),jl(r,u,null,o);var _=r.memoizedState;if(u=_.element,f.isDehydrated)if(f={element:u,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=Xs(Error(t(423)),r),r=Wp(n,r,u,o,d);break e}else if(u!==d){d=Xs(Error(t(424)),r),r=Wp(n,r,u,o,d);break e}else for(rn=Xr(r.stateNode.containerInfo.firstChild),nn=r,Ye=!0,In=null,o=ip(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(qs(),u===d){r=wr(n,r,o);break e}zt(n,r,u,o)}r=r.child}return r;case 5:return up(r),n===null&&zc(r),u=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,_=d.children,Dc(u,d)?_=null:f!==null&&Dc(u,f)&&(r.flags|=32),$p(n,r),zt(n,r,_,o),r.child;case 6:return n===null&&zc(r),null;case 13:return Gp(n,r,o);case 4:return Qc(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Ws(r,null,u,o):zt(n,r,u,o),r.child;case 11:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:Sn(u,d),Up(n,r,u,d,o);case 7:return zt(n,r,r.pendingProps,o),r.child;case 8:return zt(n,r,r.pendingProps.children,o),r.child;case 12:return zt(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,d=r.pendingProps,f=r.memoizedProps,_=d.value,We(bl,u._currentValue),u._currentValue=_,f!==null)if(Tn(f.value,_)){if(f.children===d.children&&!$t.current){r=wr(n,r,o);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var T=f.dependencies;if(T!==null){_=f.child;for(var k=T.firstContext;k!==null;){if(k.context===u){if(f.tag===1){k=vr(-1,o&-o),k.tag=2;var F=f.updateQueue;if(F!==null){F=F.shared;var W=F.pending;W===null?k.next=k:(k.next=W.next,W.next=k),F.pending=k}}f.lanes|=o,k=f.alternate,k!==null&&(k.lanes|=o),Wc(f.return,o,r),T.lanes|=o;break}k=k.next}}else if(f.tag===10)_=f.type===r.type?null:f.child;else if(f.tag===18){if(_=f.return,_===null)throw Error(t(341));_.lanes|=o,T=_.alternate,T!==null&&(T.lanes|=o),Wc(_,o,r),_=f.sibling}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===r){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}zt(n,r,d.children,o),r=r.child}return r;case 9:return d=r.type,u=r.pendingProps.children,Ks(r,o),d=cn(d),u=u(d),r.flags|=1,zt(n,r,u,o),r.child;case 14:return u=r.type,d=Sn(u,r.pendingProps),d=Sn(u.type,d),jp(n,r,u,d,o);case 15:return zp(n,r,r.type,r.pendingProps,o);case 17:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:Sn(u,d),Ql(n,r),r.tag=1,Ht(u)?(n=!0,Nl(r)):n=!1,Ks(r,o),Dp(r,u,d),lh(r,u,d,o),dh(null,r,u,!0,n,o);case 19:return Qp(n,r,o);case 22:return Bp(n,r,o)}throw Error(t(156,r.tag))};function vm(n,r){return Lo(n,r)}function R0(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(n,r,o,u){return new R0(n,r,o,u)}function Dh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function P0(n){if(typeof n=="function")return Dh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===lt)return 14}return 2}function ai(n,r){var o=n.alternate;return o===null?(o=fn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ou(n,r,o,u,d,f){var _=2;if(u=n,typeof n=="function")Dh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case P:return Ji(o.children,d,f,r);case I:_=8,d|=8;break;case A:return n=fn(12,o,r,d|2),n.elementType=A,n.lanes=f,n;case S:return n=fn(13,o,r,d),n.elementType=S,n.lanes=f,n;case $e:return n=fn(19,o,r,d),n.elementType=$e,n.lanes=f,n;case Ee:return au(o,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:_=10;break e;case R:_=9;break e;case O:_=11;break e;case lt:_=14;break e;case oe:_=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=fn(_,o,r,d),r.elementType=n,r.type=u,r.lanes=f,r}function Ji(n,r,o,u){return n=fn(7,n,u,r),n.lanes=o,n}function au(n,r,o,u){return n=fn(22,n,u,r),n.elementType=Ee,n.lanes=o,n.stateNode={isHidden:!1},n}function Vh(n,r,o){return n=fn(6,n,null,r),n.lanes=o,n}function Oh(n,r,o){return r=fn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function x0(n,r,o,u,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zo(0),this.expirationTimes=zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Mh(n,r,o,u,d,f,_,T,k){return n=new x0(n,r,o,T,k),r===1?(r=1,f===!0&&(r|=8)):r=0,f=fn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kc(f),n}function N0(n,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:u==null?null:""+u,children:n,containerInfo:r,implementation:o}}function wm(n){if(!n)return Jr;n=n._reactInternals;e:{if(wn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Ht(o))return Kf(n,o,r)}return r}function Em(n,r,o,u,d,f,_,T,k){return n=Mh(o,u,!0,n,d,f,_,T,k),n.context=wm(null),o=n.current,u=Bt(),d=si(o),f=vr(u,d),f.callback=r??null,ti(o,f,d),n.current.lanes=d,Li(n,d,u),Gt(n,u),n}function lu(n,r,o,u){var d=r.current,f=Bt(),_=si(d);return o=wm(o),r.context===null?r.context=o:r.pendingContext=o,r=vr(f,_),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=ti(d,r,_),n!==null&&(kn(n,d,_,f),Ul(n,d,_)),_}function uu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Lh(n,r){Tm(n,r),(n=n.alternate)&&Tm(n,r)}function D0(){return null}var Im=typeof reportError=="function"?reportError:function(n){console.error(n)};function bh(n){this._internalRoot=n}cu.prototype.render=bh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));lu(n,r,null,null)},cu.prototype.unmount=bh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Qi(function(){lu(null,n,null,null)}),r[pr]=null}};function cu(n){this._internalRoot=n}cu.prototype.unstable_scheduleHydration=function(n){if(n){var r=qo();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Jt.length&&r!==0&&r<Jt[o].priority;o++);Jt.splice(o,0,n),o===0&&Cs(n)}};function Fh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function hu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Sm(){}function V0(n,r,o,u,d){if(d){if(typeof u=="function"){var f=u;u=function(){var F=uu(_);f.call(F)}}var _=Em(r,u,n,0,null,!1,!1,"",Sm);return n._reactRootContainer=_,n[pr]=_.current,ra(n.nodeType===8?n.parentNode:n),Qi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var T=u;u=function(){var F=uu(k);T.call(F)}}var k=Mh(n,0,!1,null,null,!1,!1,"",Sm);return n._reactRootContainer=k,n[pr]=k.current,ra(n.nodeType===8?n.parentNode:n),Qi(function(){lu(r,k,o,u)}),k}function du(n,r,o,u,d){var f=o._reactRootContainer;if(f){var _=f;if(typeof d=="function"){var T=d;d=function(){var k=uu(_);T.call(k)}}lu(r,_,n,d)}else _=V0(o,r,n,d,u);return uu(_)}$o=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=Fe(r.pendingLanes);o!==0&&(Bo(r,o|1),Gt(r,Ge()),(Le&6)===0&&(Zs=Ge()+500,Zr()))}break;case 13:Qi(function(){var u=_r(n,1);if(u!==null){var d=Bt();kn(u,n,1,d)}}),Lh(n,1)}},Ss=function(n){if(n.tag===13){var r=_r(n,134217728);if(r!==null){var o=Bt();kn(r,n,134217728,o)}Lh(n,134217728)}},Ho=function(n){if(n.tag===13){var r=si(n),o=_r(n,r);if(o!==null){var u=Bt();kn(o,n,r,u)}Lh(n,r)}},qo=function(){return De},Wo=function(n,r){var o=De;try{return De=n,r()}finally{De=o}},ir=function(n,r,o){switch(r){case"input":if(Ci(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var d=Pl(u);if(!d)throw Error(t(90));ko(u),Ci(u,d)}}}break;case"textarea":el(n,o);break;case"select":r=o.value,r!=null&&_n(n,!!o.multiple,r,!1)}},rl=Ph,il=Qi;var O0={usingClientEntryPoint:!1,Events:[oa,js,Pl,Ur,jr,Ph]},wa={findFiberByHostInstance:zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},M0={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=hl(n),n===null?null:n.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||D0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{Di=fu.inject(M0),Xt=fu}catch{}}return Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0,Kt.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fh(r))throw Error(t(200));return N0(n,r,null,o)},Kt.createRoot=function(n,r){if(!Fh(n))throw Error(t(299));var o=!1,u="",d=Im;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Mh(n,1,!1,null,null,o,!1,u,d),n[pr]=r.current,ra(n.nodeType===8?n.parentNode:n),new bh(r)},Kt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=hl(r),n=n===null?null:n.stateNode,n},Kt.flushSync=function(n){return Qi(n)},Kt.hydrate=function(n,r,o){if(!hu(r))throw Error(t(200));return du(null,n,r,!0,o)},Kt.hydrateRoot=function(n,r,o){if(!Fh(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,f="",_=Im;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),r=Em(r,null,n,1,o??null,d,!1,f,_),n[pr]=r.current,ra(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,d]:r.mutableSourceEagerHydrationData.push(o,d);return new cu(r)},Kt.render=function(n,r,o){if(!hu(r))throw Error(t(200));return du(null,n,r,!1,o)},Kt.unmountComponentAtNode=function(n){if(!hu(n))throw Error(t(40));return n._reactRootContainer?(Qi(function(){du(null,null,n,!1,function(){n._reactRootContainer=null,n[pr]=null})}),!0):!1},Kt.unstable_batchedUpdates=Ph,Kt.unstable_renderSubtreeIntoContainer=function(n,r,o,u){if(!hu(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return du(n,r,o,!1,u)},Kt.version="18.3.1-next-f1338f8080-20240426",Kt}var Dm;function $0(){if(Dm)return zh.exports;Dm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),zh.exports=B0(),zh.exports}var Vm;function H0(){if(Vm)return pu;Vm=1;var i=$0();return pu.createRoot=i.createRoot,pu.hydrateRoot=i.hydrateRoot,pu}var q0=H0();/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var W0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ls=(i,e)=>{const t=gt.forwardRef(({color:s="currentColor",size:a=24,strokeWidth:c=2,absoluteStrokeWidth:h,className:m="",children:y,...v},E)=>gt.createElement("svg",{ref:E,...W0,width:a,height:a,stroke:s,strokeWidth:h?Number(c)*24/Number(a):c,className:["lucide",`lucide-${G0(i)}`,m].join(" "),...v},[...e.map(([C,D])=>gt.createElement(C,D)),...Array.isArray(y)?y:[y]]));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=ls("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=ls("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=ls("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=ls("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=ls("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=ls("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=ls("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Y0=()=>{};var Lm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},J0=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[t++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[t++],h=i[t++],m=i[t++],y=((a&7)<<18|(c&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const c=i[t++],h=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|h&63)}}return e.join("")},uy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],h=a+1<i.length,m=h?i[a+1]:0,y=a+2<i.length,v=y?i[a+2]:0,E=c>>2,C=(c&3)<<4|m>>4;let D=(m&15)<<2|v>>6,j=v&63;y||(j=64,h||(D=64)),s.push(t[E],t[C],t[D],t[j])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ly(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):J0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=t[i.charAt(a++)],m=a<i.length?t[i.charAt(a)]:0;++a;const v=a<i.length?t[i.charAt(a)]:64;++a;const C=a<i.length?t[i.charAt(a)]:64;if(++a,c==null||m==null||v==null||C==null)throw new Z0;const D=c<<2|m>>4;if(s.push(D),v!==64){const j=m<<4&240|v>>2;if(s.push(j),C!==64){const Z=v<<6&192|C;s.push(Z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Z0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ew=function(i){const e=ly(i);return uy.encodeByteArray(e,!0)},Vu=function(i){return ew(i).replace(/\./g,"")},cy=function(i){try{return uy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=()=>tw().__FIREBASE_DEFAULTS__,rw=()=>{if(typeof process>"u"||typeof Lm>"u")return;const i=Lm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},iw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&cy(i[1]);return e&&JSON.parse(e)},Zu=()=>{try{return Y0()||nw()||rw()||iw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},hy=i=>Zu()?.emulatorHosts?.[i],sw=i=>{const e=hy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},dy=()=>Zu()?.config,fy=i=>Zu()?.[`_${i}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function py(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Vu(JSON.stringify(t)),Vu(JSON.stringify(h)),""].join(".")}const Ca={};function lw(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ca))Ca[e]?i.emulator.push(e):i.prod.push(e);return i}function uw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let bm=!1;function my(i,e){if(typeof window>"u"||typeof document>"u"||!wo(window.location.host)||Ca[i]===e||Ca[i]||bm)return;Ca[i]=e;function t(D){return`__firebase__banner__${D}`}const s="__firebase__banner",c=lw().prod.length>0;function h(){const D=document.getElementById(s);D&&D.remove()}function m(D){D.style.display="flex",D.style.background="#7faaf0",D.style.position="fixed",D.style.bottom="5px",D.style.left="5px",D.style.padding=".5em",D.style.borderRadius="5px",D.style.alignItems="center"}function y(D,j){D.setAttribute("width","24"),D.setAttribute("id",j),D.setAttribute("height","24"),D.setAttribute("viewBox","0 0 24 24"),D.setAttribute("fill","none"),D.style.marginLeft="-6px"}function v(){const D=document.createElement("span");return D.style.cursor="pointer",D.style.marginLeft="16px",D.style.fontSize="24px",D.innerHTML=" &times;",D.onclick=()=>{bm=!0,h()},D}function E(D,j){D.setAttribute("id",j),D.innerText="Learn more",D.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",D.setAttribute("target","__blank"),D.style.paddingLeft="5px",D.style.textDecoration="underline"}function C(){const D=uw(s),j=t("text"),Z=document.getElementById(j)||document.createElement("span"),J=t("learnmore"),G=document.getElementById(J)||document.createElement("a"),me=t("preprendIcon"),ce=document.getElementById(me)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(D.created){const ve=D.element;m(ve),E(G,J);const Oe=v();y(ce,me),ve.append(ce,Z,G,Oe),document.body.appendChild(ve)}c?(Z.innerText="Preview backend disconnected.",ce.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ce.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Z.innerText="Preview backend running in this workspace."),Z.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function hw(){const i=Zu()?.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function pw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mw(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function gw(){return!hw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yw(){try{return typeof indexedDB=="object"}catch{return!1}}function _w(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="FirebaseError";class Dr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=vw,Object.setPrototypeOf(this,Dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,za.prototype.create)}}class za{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,c=this.errors[e],h=c?ww(c,s):"Error",m=`${this.serviceName}: ${h} (${a}).`;return new Dr(a,m,s)}}function ww(i,e){return i.replace(Ew,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const Ew=/\{\$([^}]+)}/g;function Tw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function rs(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const c=i[a],h=e[a];if(Fm(c)&&Fm(h)){if(!rs(c,h))return!1}else if(c!==h)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function Fm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Iw(i,e){const t=new Sw(i,e);return t.subscribe.bind(t)}class Sw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Aw(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=qh),a.error===void 0&&(a.error=qh),a.complete===void 0&&(a.complete=qh);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Aw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function qh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(i){return i&&i._delegate?i._delegate:i}class is{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ow;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rw(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[c,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);s===m&&h.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const c=this.instances.get(s);return c&&e(c,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:kw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kw(i){return i===es?void 0:i}function Rw(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Cw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Pe||(Pe={}));const xw={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},Nw=Pe.INFO,Dw={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},Vw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=Dw[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pd{constructor(e){this.name=e,this._logLevel=Nw,this._logHandler=Vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const Ow=(i,e)=>e.some(t=>i instanceof t);let Um,jm;function Mw(){return Um||(Um=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lw(){return jm||(jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gy=new WeakMap,rd=new WeakMap,yy=new WeakMap,Wh=new WeakMap,xd=new WeakMap;function bw(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",h)},c=()=>{t(mi(i.result)),a()},h=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&gy.set(t,i)}).catch(()=>{}),xd.set(e,i),e}function Fw(i){if(rd.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",h),i.removeEventListener("abort",h)},c=()=>{t(),a()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",h),i.addEventListener("abort",h)});rd.set(i,e)}let id={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return rd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||yy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Uw(i){id=i(id)}function jw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Gh(this),e,...t);return yy.set(s,e.sort?e.sort():[e]),mi(s)}:Lw().includes(i)?function(...e){return i.apply(Gh(this),e),mi(gy.get(this))}:function(...e){return mi(i.apply(Gh(this),e))}}function zw(i){return typeof i=="function"?jw(i):(i instanceof IDBTransaction&&Fw(i),Ow(i,Mw())?new Proxy(i,id):i)}function mi(i){if(i instanceof IDBRequest)return bw(i);if(Wh.has(i))return Wh.get(i);const e=zw(i);return e!==i&&(Wh.set(i,e),xd.set(e,i)),e}const Gh=i=>xd.get(i);function Bw(i,e,{blocked:t,upgrade:s,blocking:a,terminated:c}={}){const h=indexedDB.open(i,e),m=mi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(mi(h.result),y.oldVersion,y.newVersion,mi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{c&&y.addEventListener("close",()=>c()),a&&y.addEventListener("versionchange",v=>a(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const $w=["get","getKey","getAll","getAllKeys","count"],Hw=["put","add","delete","clear"],Kh=new Map;function zm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Kh.get(e))return Kh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=Hw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||$w.includes(t)))return;const c=async function(h,...m){const y=this.transaction(h,a?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),a&&y.done]))[0]};return Kh.set(e,c),c}Uw(i=>({...i,get:(e,t,s)=>zm(e,t)||i.get(e,t,s),has:(e,t)=>!!zm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ww(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ww(i){return i.getComponent()?.type==="VERSION"}const sd="@firebase/app",Bm="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Pd("@firebase/app"),Gw="@firebase/app-compat",Kw="@firebase/analytics-compat",Qw="@firebase/analytics",Xw="@firebase/app-check-compat",Yw="@firebase/app-check",Jw="@firebase/auth",Zw="@firebase/auth-compat",eE="@firebase/database",tE="@firebase/data-connect",nE="@firebase/database-compat",rE="@firebase/functions",iE="@firebase/functions-compat",sE="@firebase/installations",oE="@firebase/installations-compat",aE="@firebase/messaging",lE="@firebase/messaging-compat",uE="@firebase/performance",cE="@firebase/performance-compat",hE="@firebase/remote-config",dE="@firebase/remote-config-compat",fE="@firebase/storage",pE="@firebase/storage-compat",mE="@firebase/firestore",gE="@firebase/ai",yE="@firebase/firestore-compat",_E="firebase",vE="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="[DEFAULT]",wE={[sd]:"fire-core",[Gw]:"fire-core-compat",[Qw]:"fire-analytics",[Kw]:"fire-analytics-compat",[Yw]:"fire-app-check",[Xw]:"fire-app-check-compat",[Jw]:"fire-auth",[Zw]:"fire-auth-compat",[eE]:"fire-rtdb",[tE]:"fire-data-connect",[nE]:"fire-rtdb-compat",[rE]:"fire-fn",[iE]:"fire-fn-compat",[sE]:"fire-iid",[oE]:"fire-iid-compat",[aE]:"fire-fcm",[lE]:"fire-fcm-compat",[uE]:"fire-perf",[cE]:"fire-perf-compat",[hE]:"fire-rc",[dE]:"fire-rc-compat",[fE]:"fire-gcs",[pE]:"fire-gcs-compat",[mE]:"fire-fst",[yE]:"fire-fst-compat",[gE]:"fire-vertex","fire-js":"fire-js",[_E]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new Map,EE=new Map,ad=new Map;function $m(i,e){try{i.container.addComponent(e)}catch(t){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function ho(i){const e=i.name;if(ad.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;ad.set(e,i);for(const t of Ou.values())$m(t,i);for(const t of EE.values())$m(t,i);return!0}function Nd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function pn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new za("app","Firebase",TE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=vE;function _y(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:od,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw gi.create("bad-app-name",{appName:String(a)});if(t||(t=dy()),!t)throw gi.create("no-options");const c=Ou.get(a);if(c){if(rs(t,c.options)&&rs(s,c.config))return c;throw gi.create("duplicate-app",{appName:a})}const h=new Pw(a);for(const y of ad.values())h.addComponent(y);const m=new IE(t,s,h);return Ou.set(a,m),m}function vy(i=od){const e=Ou.get(i);if(!e&&i===od&&dy())return _y();if(!e)throw gi.create("no-app",{appName:i});return e}function yi(i,e,t){let s=wE[i]??i;t&&(s+=`-${t}`);const a=s.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const h=[`Unable to register library "${s}" with version "${e}":`];a&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(h.join(" "));return}ho(new is(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="firebase-heartbeat-database",AE=1,Da="firebase-heartbeat-store";let Qh=null;function wy(){return Qh||(Qh=Bw(SE,AE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Da)}catch(t){console.warn(t)}}}}).catch(i=>{throw gi.create("idb-open",{originalErrorMessage:i.message})})),Qh}async function CE(i){try{const t=(await wy()).transaction(Da),s=await t.objectStore(Da).get(Ey(i));return await t.done,s}catch(e){if(e instanceof Dr)Cr.warn(e.message);else{const t=gi.create("idb-get",{originalErrorMessage:e?.message});Cr.warn(t.message)}}}async function Hm(i,e){try{const s=(await wy()).transaction(Da,"readwrite");await s.objectStore(Da).put(e,Ey(i)),await s.done}catch(t){if(t instanceof Dr)Cr.warn(t.message);else{const s=gi.create("idb-set",{originalErrorMessage:t?.message});Cr.warn(s.message)}}}function Ey(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=1024,RE=30;class PE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new NE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qm();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>RE){const a=DE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Cr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qm(),{heartbeatsToSend:t,unsentEntries:s}=xE(this._heartbeatsCache.heartbeats),a=Vu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Cr.warn(e),""}}}function qm(){return new Date().toISOString().substring(0,10)}function xE(i,e=kE){const t=[];let s=i.slice();for(const a of i){const c=t.find(h=>h.agent===a.agent);if(c){if(c.dates.push(a.date),Wm(t)>e){c.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),Wm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class NE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yw()?_w().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await CE(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Hm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Hm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wm(i){return Vu(JSON.stringify({version:2,heartbeats:i})).length}function DE(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(i){ho(new is("platform-logger",e=>new qw(e),"PRIVATE")),ho(new is("heartbeat",e=>new PE(e),"PRIVATE")),yi(sd,Bm,i),yi(sd,Bm,"esm2020"),yi("fire-js","")}VE("");var OE="firebase",ME="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yi(OE,ME,"app");function Ty(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LE=Ty,Iy=new za("auth","Firebase",Ty());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new Pd("@firebase/auth");function bE(i,...e){Mu.logLevel<=Pe.WARN&&Mu.warn(`Auth (${Eo}): ${i}`,...e)}function Iu(i,...e){Mu.logLevel<=Pe.ERROR&&Mu.error(`Auth (${Eo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(i,...e){throw Dd(i,...e)}function Qn(i,...e){return Dd(i,...e)}function Sy(i,e,t){const s={...LE(),[e]:t};return new za("auth","Firebase",s).create(e,{appName:i.name})}function Sr(i){return Sy(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Iy.create(i,...e)}function ye(i,e,...t){if(!i)throw Dd(e,...t)}function Tr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Iu(e),new Error(e)}function Rr(i,e){i||Tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(){return typeof self<"u"&&self.location?.href||""}function FE(){return Gm()==="http:"||Gm()==="https:"}function Gm(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FE()||fw()||"connection"in navigator)?navigator.onLine:!0}function jE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rr(t>e,"Short delay should be less than long delay!"),this.isMobile=cw()||pw()}get(){return UE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(i,e){Rr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$E=new $a(3e4,6e4);function Ha(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function To(i,e,t,s,a={}){return Cy(i,a,async()=>{let c={},h={};s&&(e==="GET"?h=s:c={body:JSON.stringify(s)});const m=Ba({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:y,...c};return dw()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&wo(i.emulatorConfig.host)&&(v.credentials="include"),Ay.fetch()(await ky(i,i.config.apiHost,t,m),v)})}async function Cy(i,e,t){i._canInitEmulator=!1;const s={...zE,...e};try{const a=new HE(i),c=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw mu(i,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const m=c.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw mu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw mu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw mu(i,"user-disabled",h);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Sy(i,E,v);kr(i,E)}}catch(a){if(a instanceof Dr)throw a;kr(i,"network-request-failed",{message:String(a)})}}async function Od(i,e,t,s,a={}){const c=await To(i,e,t,s,a);return"mfaPendingCredential"in c&&kr(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function ky(i,e,t,s){const a=`${e}${t}?${s}`,c=i,h=c.config.emulator?Vd(i.config,a):`${i.config.apiScheme}://${a}`;return BE.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}class HE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Qn(this.auth,"network-request-failed")),$E.get())})}}function mu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Qn(i,e,s);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(i,e){return To(i,"POST","/v1/accounts:delete",e)}async function Lu(i,e){return To(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WE(i,e=!1){const t=yn(i),s=await t.getIdToken(e),a=Md(s);ye(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,h=c?.sign_in_provider;return{claims:a,token:s,authTime:ka(Xh(a.auth_time)),issuedAtTime:ka(Xh(a.iat)),expirationTime:ka(Xh(a.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Xh(i){return Number(i)*1e3}function Md(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Iu("JWT malformed, contained fewer than 3 sections"),null;try{const a=cy(t);return a?JSON.parse(a):(Iu("Failed to decode base64 JWT payload"),null)}catch(a){return Iu("Caught error parsing JWT payload as JSON",a?.toString()),null}}function Km(i){const e=Md(i);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Dr&&GE(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function GE({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ka(this.lastLoginAt),this.creationTime=ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bu(i){const e=i.auth,t=await i.getIdToken(),s=await Va(i,Lu(e,{idToken:t}));ye(s?.users.length,e,"internal-error");const a=s.users[0];i._notifyReloadListener(a);const c=a.providerUserInfo?.length?Ry(a.providerUserInfo):[],h=XE(i.providerData,c),m=i.isAnonymous,y=!(i.email&&a.passwordHash)&&!h?.length,v=m?y:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new ud(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(i,E)}async function QE(i){const e=yn(i);await bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XE(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Ry(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YE(i,e){const t=await Cy(i,{},async()=>{const s=Ba({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,h=await ky(i,a,"/v1/token",`key=${c}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&wo(i.emulatorConfig.host)&&(y.credentials="include"),Ay.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function JE(i,e){return To(i,"POST","/v2/accounts:revokeToken",Ha(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Km(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=Km(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:c}=await YE(e,t);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:c}=t,h=new oo;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),a&&(ye(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),c&&(ye(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(i,e){ye(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Rn{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new KE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ud(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Va(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return WE(this,e)}reload(){return QE(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Rn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await bu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(Sr(this.auth));const e=await this.getIdToken();return await Va(this,qE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,c=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:C,emailVerified:D,isAnonymous:j,providerData:Z,stsTokenManager:J}=t;ye(C&&J,e,"internal-error");const G=oo.fromJSON(this.name,J);ye(typeof C=="string",e,"internal-error"),ui(s,e.name),ui(a,e.name),ye(typeof D=="boolean",e,"internal-error"),ye(typeof j=="boolean",e,"internal-error"),ui(c,e.name),ui(h,e.name),ui(m,e.name),ui(y,e.name),ui(v,e.name),ui(E,e.name);const me=new Rn({uid:C,auth:e,email:a,emailVerified:D,displayName:s,isAnonymous:j,photoURL:h,phoneNumber:c,tenantId:m,stsTokenManager:G,createdAt:v,lastLoginAt:E});return Z&&Array.isArray(Z)&&(me.providerData=Z.map(ce=>({...ce}))),y&&(me._redirectEventId=y),me}static async _fromIdTokenResponse(e,t,s=!1){const a=new oo;a.updateFromServerResponse(t);const c=new Rn({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await bu(c),c}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];ye(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?Ry(a.providerUserInfo):[],h=!(a.email&&a.passwordHash)&&!c?.length,m=new oo;m.updateFromIdToken(s);const y=new Rn({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new ud(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!c?.length};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=new Map;function Ir(i){Rr(i instanceof Function,"Expected a class definition");let e=Qm.get(i);return e?(Rr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Qm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Py.type="NONE";const Xm=Py;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(i,e,t){return`firebase:${i}:${e}:${t}`}class ao{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=Su(this.userKey,a.apiKey,c),this.fullPersistenceKey=Su("persistence",a.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lu(this.auth,{idToken:e}).catch(()=>{});return t?Rn._fromGetAccountInfoResponse(this.auth,t,e):null}return Rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ao(Ir(Xm),e,s);const a=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let c=a[0]||Ir(Xm);const h=Su(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const E=await v._get(h);if(E){let C;if(typeof E=="string"){const D=await Lu(e,{idToken:E}).catch(()=>{});if(!D)break;C=await Rn._fromGetAccountInfoResponse(e,D,E)}else C=Rn._fromJSON(e,E);v!==c&&(m=C),c=v;break}}catch{}const y=a.filter(v=>v._shouldAllowMigration);return!c._shouldAllowMigration||!y.length?new ao(c,e,s):(c=y[0],m&&await c._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==c)try{await v._remove(h)}catch{}})),new ao(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(My(e))return"Blackberry";if(Ly(e))return"Webos";if(Ny(e))return"Safari";if((e.includes("chrome/")||Dy(e))&&!e.includes("edge/"))return"Chrome";if(Oy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function xy(i=Ut()){return/firefox\//i.test(i)}function Ny(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dy(i=Ut()){return/crios\//i.test(i)}function Vy(i=Ut()){return/iemobile/i.test(i)}function Oy(i=Ut()){return/android/i.test(i)}function My(i=Ut()){return/blackberry/i.test(i)}function Ly(i=Ut()){return/webos/i.test(i)}function Ld(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function ZE(i=Ut()){return Ld(i)&&!!window.navigator?.standalone}function eT(){return mw()&&document.documentMode===10}function by(i=Ut()){return Ld(i)||Oy(i)||Ly(i)||My(i)||/windows phone/i.test(i)||Vy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(i,e=[]){let t;switch(i){case"Browser":t=Ym(Ut());break;case"Worker":t=`${Ym(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Eo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=c=>new Promise((h,m)=>{try{const y=e(c);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(i,e={}){return To(i,"GET","/v2/passwordPolicy",Ha(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=6;class iT{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??rT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jm(this),this.idTokenSubscription=new Jm(this),this.beforeStateQueue=new tT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Iy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ir(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ao.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lu(this,{idToken:e}),s=await Rn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(pn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===h)&&m?.user&&(s=m.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bu(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(Sr(this));const t=e?yn(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(Sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(Sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nT(this),t=new iT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new za("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await JE(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ir(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await ao.create(this,[Ir(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(m,this,"internal-error"),m.then(()=>{h||c(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,a);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&bE(`Error while retrieving App Check token: ${e.error}`),e?.token}}function qa(i){return yn(i)}class Jm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Iw(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oT(i){bd=i}function aT(i){return bd.loadJS(i)}function lT(){return bd.gapiScript}function uT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(i,e){const t=Nd(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),c=t.getOptions();if(rs(c,e??{}))return a;kr(a,"already-initialized")}return t.initialize({options:e})}function hT(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ir);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function dT(i,e,t){const s=qa(i);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,c=Uy(e),{host:h,port:m}=fT(e),y=m===null?"":`:${m}`,v={url:`${c}//${h}${y}/`},E=Object.freeze({host:h,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(rs(v,s.config.emulator)&&rs(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,wo(h)?(py(`${c}//${h}${y}`),my("Auth",!0)):pT()}function Uy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function fT(i){const e=Uy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:Zm(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:Zm(h)}}}function Zm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function pT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tr("not implemented")}_getIdTokenResponse(e){return Tr("not implemented")}_linkToIdToken(e,t){return Tr("not implemented")}_getReauthenticationResolver(e){return Tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(i,e){return Od(i,"POST","/v1/accounts:signInWithIdp",Ha(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="http://localhost";class ss extends jy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...c}=t;if(!s||!a)return null;const h=new ss(s,a);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return lo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,lo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lo(e,t)}buildRequest(){const e={requestUri:mT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ba(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends zy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Wa{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ss._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Wa{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Wa{constructor(){super("twitter.com")}static credential(e,t){return ss._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fi.credential(t,s)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gT(i,e){return Od(i,"POST","/v1/accounts:signUp",Ha(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const c=await Rn._fromIdTokenResponse(e,s,a),h=eg(s);return new Pr({user:c,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=eg(s);return new Pr({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function eg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yT(i){if(pn(i.app))return Promise.reject(Sr(i));const e=qa(i);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Pr({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await gT(e,{returnSecureToken:!0}),s=await Pr._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends Dr{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Fu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Fu(e,t,s,a)}}function By(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Fu._fromErrorAndOperation(i,c,e,s):c})}async function _T(i,e,t=!1){const s=await Va(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Pr._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vT(i,e,t=!1){const{auth:s}=i;if(pn(s.app))return Promise.reject(Sr(s));const a="reauthenticate";try{const c=await Va(i,By(s,a,e,i),t);ye(c.idToken,s,"internal-error");const h=Md(c.idToken);ye(h,s,"internal-error");const{sub:m}=h;return ye(i.uid===m,s,"user-mismatch"),Pr._forOperation(i,a,c)}catch(c){throw c?.code==="auth/user-not-found"&&kr(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(i,e,t=!1){if(pn(i.app))return Promise.reject(Sr(i));const s="signIn",a=await By(i,s,e),c=await Pr._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(c.user),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ET(i,e){return Od(i,"POST","/v1/accounts:signInWithCustomToken",Ha(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(i,e){if(pn(i.app))return Promise.reject(Sr(i));const t=qa(i),s=await ET(t,{token:e,returnSecureToken:!0}),a=await Pr._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(a.user),a}function IT(i,e,t,s){return yn(i).onIdTokenChanged(e,t,s)}function ST(i,e,t){return yn(i).beforeAuthStateChanged(e,t)}function AT(i,e,t,s){return yn(i).onAuthStateChanged(e,t,s)}const Uu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Uu,"1"),this.storage.removeItem(Uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=1e3,kT=10;class Hy extends $y{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=by(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);eT()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,kT):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},CT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hy.type="LOCAL";const RT=Hy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy extends $y{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qy.type="SESSION";const Wy=qy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new ec(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:c}=t.data,h=this.handlersMap[a];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const m=Array.from(h).map(async v=>v(t.origin,c)),y=await PT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,h;return new Promise((m,y)=>{const v=Fd("",20);a.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:a,onMessage(C){const D=C;if(D.data.eventId===v)switch(D.data.status){case"ack":clearTimeout(E),c=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(D.data.response);break;default:clearTimeout(E),clearTimeout(c),y(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return window}function NT(i){Xn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(){return typeof Xn().WorkerGlobalScope<"u"&&typeof Xn().importScripts=="function"}async function DT(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VT(){return navigator?.serviceWorker?.controller||null}function OT(){return Gy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="firebaseLocalStorageDb",MT=1,ju="firebaseLocalStorage",Qy="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tc(i,e){return i.transaction([ju],e?"readwrite":"readonly").objectStore(ju)}function LT(){const i=indexedDB.deleteDatabase(Ky);return new Ga(i).toPromise()}function cd(){const i=indexedDB.open(Ky,MT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(ju,{keyPath:Qy})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(ju)?e(s):(s.close(),await LT(),e(await cd()))})})}async function tg(i,e,t){const s=tc(i,!0).put({[Qy]:e,value:t});return new Ga(s).toPromise()}async function bT(i,e){const t=tc(i,!1).get(e),s=await new Ga(t).toPromise();return s===void 0?null:s.value}function ng(i,e){const t=tc(i,!0).delete(e);return new Ga(t).toPromise()}const FT=800,UT=3;class Xy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>UT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(OT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await DT(),!this.activeServiceWorker)return;this.sender=new xT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cd();return await tg(e,Uu,"1"),await ng(e,Uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>tg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>bT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ng(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=tc(a,!1).getAll();return new Ga(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xy.type="LOCAL";const jT=Xy;new $a(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(i,e){return e?Ir(e):(ye(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud extends jy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function BT(i){return wT(i.auth,new Ud(i),i.bypassAuthState)}function $T(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),vT(t,new Ud(i),i.bypassAuthState)}async function HT(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),_T(t,new Ud(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,t,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:c,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BT;case"linkViaPopup":case"linkViaRedirect":return HT;case"reauthViaPopup":case"reauthViaRedirect":return $T;default:kr(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=new $a(2e3,1e4);class so extends Yy{constructor(e,t,s,a,c){super(e,t,a,c),this.provider=s,this.authWindow=null,this.pollId=null,so.currentPopupAction&&so.currentPopupAction.cancel(),so.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=Fd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,so.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qT.get())};e()}}so.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="pendingRedirect",Au=new Map;class GT extends Yy{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Au.get(this.auth._key());if(!e){try{const s=await KT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Au.set(this.auth._key(),e)}return this.bypassAuthState||Au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KT(i,e){const t=YT(e),s=XT(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function QT(i,e){Au.set(i._key(),e)}function XT(i){return Ir(i._redirectPersistence)}function YT(i){return Su(WT,i.config.apiKey,i.name)}async function JT(i,e,t=!1){if(pn(i.app))return Promise.reject(Sr(i));const s=qa(i),a=zT(s,e),h=await new GT(s,a,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=600*1e3;class eI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Jy(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Qn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZT&&this.cachedEventUids.clear(),this.cachedEventUids.has(rg(e))}saveEventToCache(e){this.cachedEventUids.add(rg(e)),this.lastProcessedEventTime=Date.now()}}function rg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Jy({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function tI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jy(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(i,e={}){return To(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iI=/^https?/;async function sI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await nI(i);for(const t of e)try{if(oI(t))return}catch{}kr(i,"unauthorized-domain")}function oI(i){const e=ld(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!iI.test(t))return!1;if(rI.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=new $a(3e4,6e4);function ig(){const i=Xn().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function lI(i){return new Promise((e,t)=>{function s(){ig(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ig(),t(Qn(i,"network-request-failed"))},timeout:aI.get()})}if(Xn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Xn().gapi?.load)s();else{const a=uT("iframefcb");return Xn()[a]=()=>{gapi.load?s():t(Qn(i,"network-request-failed"))},aT(`${lT()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Cu=null,e})}let Cu=null;function uI(i){return Cu=Cu||lI(i),Cu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=new $a(5e3,15e3),hI="__/auth/iframe",dI="emulator/auth/iframe",fI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mI(i){const e=i.config;ye(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Vd(e,dI):`https://${i.config.authDomain}/${hI}`,s={apiKey:e.apiKey,appName:i.name,v:Eo},a=pI.get(i.config.apiHost);a&&(s.eid=a);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${t}?${Ba(s).slice(1)}`}async function gI(i){const e=await uI(i),t=Xn().gapi;return ye(t,i,"internal-error"),e.open({where:document.body,url:mI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fI,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const h=Qn(i,"network-request-failed"),m=Xn().setTimeout(()=>{c(h)},cI.get());function y(){Xn().clearTimeout(m),a(s)}s.ping(y).then(y,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_I=500,vI=600,wI="_blank",EI="http://localhost";class sg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TI(i,e,t,s=_I,a=vI){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...yI,width:s.toString(),height:a.toString(),top:c,left:h},v=Ut().toLowerCase();t&&(m=Dy(v)?wI:t),xy(v)&&(e=e||EI,y.scrollbars="yes");const E=Object.entries(y).reduce((D,[j,Z])=>`${D}${j}=${Z},`,"");if(ZE(v)&&m!=="_self")return II(e||"",m),new sg(null);const C=window.open(e||"",m,E);ye(C,i,"popup-blocked");try{C.focus()}catch{}return new sg(C)}function II(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="__/auth/handler",AI="emulator/auth/handler",CI=encodeURIComponent("fac");async function og(i,e,t,s,a,c){ye(i.config.authDomain,i,"auth-domain-config-required"),ye(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Eo,eventId:a};if(e instanceof zy){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Tw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,C]of Object.entries({}))h[E]=C}if(e instanceof Wa){const E=e.getScopes().filter(C=>C!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const y=await i._getAppCheckToken(),v=y?`#${CI}=${encodeURIComponent(y)}`:"";return`${kI(i)}?${Ba(m).slice(1)}${v}`}function kI({config:i}){return i.emulator?Vd(i,AI):`https://${i.authDomain}/${SI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="webStorageSupport";class RI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wy,this._completeRedirectFn=JT,this._overrideRedirectResult=QT}async _openPopup(e,t,s,a){Rr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await og(e,t,s,ld(),a);return TI(e,c,Fd())}async _openRedirect(e,t,s,a){await this._originValidation(e);const c=await og(e,t,s,ld(),a);return NT(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:c}=this.eventManagers[t];return a?Promise.resolve(a):(Rr(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await gI(e),s=new eI(e);return t.register("authEvent",a=>(ye(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yh,{type:Yh},a=>{const c=a?.[0]?.[Yh];c!==void 0&&t(!!c),kr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return by()||Ny()||Ld()}}const PI=RI;var ag="@firebase/auth",lg="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DI(i){ho(new is("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fy(i)},v=new sT(s,a,c,y);return hT(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ho(new is("auth-internal",e=>{const t=qa(e.getProvider("auth").getImmediate());return(s=>new xI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yi(ag,lg,NI(i)),yi(ag,lg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=300,OI=fy("authIdTokenMaxAge")||VI;let ug=null;const MI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>OI)return;const a=t?.token;ug!==a&&(ug=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function LI(i=vy()){const e=Nd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=cT(i,{popupRedirectResolver:PI,persistence:[jT,RT,Wy]}),s=fy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=MI(c.toString());ST(t,h,()=>h(t.currentUser)),IT(t,m=>h(m))}}const a=hy("auth");return a&&dT(t,`http://${a}`),t}function bI(){return document.getElementsByTagName("head")?.[0]??document}oT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const c=Qn("internal-error");c.customData=a,t(c)},s.type="text/javascript",s.charset="UTF-8",bI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DI("Browser");var cg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _i,Zy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function A(){}A.prototype=I.prototype,P.F=I.prototype,P.prototype=new A,P.prototype.constructor=P,P.D=function(N,R,O){for(var S=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)S[$e-2]=arguments[$e];return I.prototype[R].apply(N,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(P,I,A){A||(A=0);const N=Array(16);if(typeof I=="string")for(var R=0;R<16;++R)N[R]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(R=0;R<16;++R)N[R]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=P.g[0],A=P.g[1],R=P.g[2];let O=P.g[3],S;S=I+(O^A&(R^O))+N[0]+3614090360&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(R^I&(A^R))+N[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=R+(A^O&(I^A))+N[2]+606105819&4294967295,R=O+(S<<17&4294967295|S>>>15),S=A+(I^R&(O^I))+N[3]+3250441966&4294967295,A=R+(S<<22&4294967295|S>>>10),S=I+(O^A&(R^O))+N[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(R^I&(A^R))+N[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=R+(A^O&(I^A))+N[6]+2821735955&4294967295,R=O+(S<<17&4294967295|S>>>15),S=A+(I^R&(O^I))+N[7]+4249261313&4294967295,A=R+(S<<22&4294967295|S>>>10),S=I+(O^A&(R^O))+N[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(R^I&(A^R))+N[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=R+(A^O&(I^A))+N[10]+4294925233&4294967295,R=O+(S<<17&4294967295|S>>>15),S=A+(I^R&(O^I))+N[11]+2304563134&4294967295,A=R+(S<<22&4294967295|S>>>10),S=I+(O^A&(R^O))+N[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(R^I&(A^R))+N[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=R+(A^O&(I^A))+N[14]+2792965006&4294967295,R=O+(S<<17&4294967295|S>>>15),S=A+(I^R&(O^I))+N[15]+1236535329&4294967295,A=R+(S<<22&4294967295|S>>>10),S=I+(R^O&(A^R))+N[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^R&(I^A))+N[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=R+(I^A&(O^I))+N[11]+643717713&4294967295,R=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(R^O))+N[0]+3921069994&4294967295,A=R+(S<<20&4294967295|S>>>12),S=I+(R^O&(A^R))+N[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^R&(I^A))+N[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=R+(I^A&(O^I))+N[15]+3634488961&4294967295,R=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(R^O))+N[4]+3889429448&4294967295,A=R+(S<<20&4294967295|S>>>12),S=I+(R^O&(A^R))+N[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^R&(I^A))+N[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=R+(I^A&(O^I))+N[3]+4107603335&4294967295,R=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(R^O))+N[8]+1163531501&4294967295,A=R+(S<<20&4294967295|S>>>12),S=I+(R^O&(A^R))+N[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^R&(I^A))+N[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=R+(I^A&(O^I))+N[7]+1735328473&4294967295,R=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(R^O))+N[12]+2368359562&4294967295,A=R+(S<<20&4294967295|S>>>12),S=I+(A^R^O)+N[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^R)+N[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=R+(O^I^A)+N[11]+1839030562&4294967295,R=O+(S<<16&4294967295|S>>>16),S=A+(R^O^I)+N[14]+4259657740&4294967295,A=R+(S<<23&4294967295|S>>>9),S=I+(A^R^O)+N[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^R)+N[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=R+(O^I^A)+N[7]+4139469664&4294967295,R=O+(S<<16&4294967295|S>>>16),S=A+(R^O^I)+N[10]+3200236656&4294967295,A=R+(S<<23&4294967295|S>>>9),S=I+(A^R^O)+N[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^R)+N[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=R+(O^I^A)+N[3]+3572445317&4294967295,R=O+(S<<16&4294967295|S>>>16),S=A+(R^O^I)+N[6]+76029189&4294967295,A=R+(S<<23&4294967295|S>>>9),S=I+(A^R^O)+N[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^R)+N[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=R+(O^I^A)+N[15]+530742520&4294967295,R=O+(S<<16&4294967295|S>>>16),S=A+(R^O^I)+N[2]+3299628645&4294967295,A=R+(S<<23&4294967295|S>>>9),S=I+(R^(A|~O))+N[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~R))+N[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=R+(I^(O|~A))+N[14]+2878612391&4294967295,R=O+(S<<15&4294967295|S>>>17),S=A+(O^(R|~I))+N[5]+4237533241&4294967295,A=R+(S<<21&4294967295|S>>>11),S=I+(R^(A|~O))+N[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~R))+N[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=R+(I^(O|~A))+N[10]+4293915773&4294967295,R=O+(S<<15&4294967295|S>>>17),S=A+(O^(R|~I))+N[1]+2240044497&4294967295,A=R+(S<<21&4294967295|S>>>11),S=I+(R^(A|~O))+N[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~R))+N[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=R+(I^(O|~A))+N[6]+2734768916&4294967295,R=O+(S<<15&4294967295|S>>>17),S=A+(O^(R|~I))+N[13]+1309151649&4294967295,A=R+(S<<21&4294967295|S>>>11),S=I+(R^(A|~O))+N[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~R))+N[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=R+(I^(O|~A))+N[2]+718787259&4294967295,R=O+(S<<15&4294967295|S>>>17),S=A+(O^(R|~I))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(R+(S<<21&4294967295|S>>>11))&4294967295,P.g[2]=P.g[2]+R&4294967295,P.g[3]=P.g[3]+O&4294967295}s.prototype.v=function(P,I){I===void 0&&(I=P.length);const A=I-this.blockSize,N=this.C;let R=this.h,O=0;for(;O<I;){if(R==0)for(;O<=A;)a(this,P,O),O+=this.blockSize;if(typeof P=="string"){for(;O<I;)if(N[R++]=P.charCodeAt(O++),R==this.blockSize){a(this,N),R=0;break}}else for(;O<I;)if(N[R++]=P[O++],R==this.blockSize){a(this,N),R=0;break}}this.h=R,this.o+=I},s.prototype.A=function(){var P=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;I=this.o*8;for(var A=P.length-8;A<P.length;++A)P[A]=I&255,I/=256;for(this.v(P),P=Array(16),I=0,A=0;A<4;++A)for(let N=0;N<32;N+=8)P[I++]=this.g[A]>>>N&255;return P};function c(P,I){var A=m;return Object.prototype.hasOwnProperty.call(A,P)?A[P]:A[P]=I(P)}function h(P,I){this.h=I;const A=[];let N=!0;for(let R=P.length-1;R>=0;R--){const O=P[R]|0;N&&O==I||(A[R]=O,N=!1)}this.g=A}var m={};function y(P){return-128<=P&&P<128?c(P,function(I){return new h([I|0],I<0?-1:0)}):new h([P|0],P<0?-1:0)}function v(P){if(isNaN(P)||!isFinite(P))return C;if(P<0)return G(v(-P));const I=[];let A=1;for(let N=0;P>=A;N++)I[N]=P/A|0,A*=4294967296;return new h(I,0)}function E(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return G(E(P.substring(1),I));if(P.indexOf("-")>=0)throw Error('number format error: interior "-" character');const A=v(Math.pow(I,8));let N=C;for(let O=0;O<P.length;O+=8){var R=Math.min(8,P.length-O);const S=parseInt(P.substring(O,O+R),I);R<8?(R=v(Math.pow(I,R)),N=N.j(R).add(v(S))):(N=N.j(A),N=N.add(v(S)))}return N}var C=y(0),D=y(1),j=y(16777216);i=h.prototype,i.m=function(){if(J(this))return-G(this).m();let P=0,I=1;for(let A=0;A<this.g.length;A++){const N=this.i(A);P+=(N>=0?N:4294967296+N)*I,I*=4294967296}return P},i.toString=function(P){if(P=P||10,P<2||36<P)throw Error("radix out of range: "+P);if(Z(this))return"0";if(J(this))return"-"+G(this).toString(P);const I=v(Math.pow(P,6));var A=this;let N="";for(;;){const R=Oe(A,I).g;A=me(A,R.j(I));let O=((A.g.length>0?A.g[0]:A.h)>>>0).toString(P);if(A=R,Z(A))return O+N;for(;O.length<6;)O="0"+O;N=O+N}},i.i=function(P){return P<0?0:P<this.g.length?this.g[P]:this.h};function Z(P){if(P.h!=0)return!1;for(let I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function J(P){return P.h==-1}i.l=function(P){return P=me(this,P),J(P)?-1:Z(P)?0:1};function G(P){const I=P.g.length,A=[];for(let N=0;N<I;N++)A[N]=~P.g[N];return new h(A,~P.h).add(D)}i.abs=function(){return J(this)?G(this):this},i.add=function(P){const I=Math.max(this.g.length,P.g.length),A=[];let N=0;for(let R=0;R<=I;R++){let O=N+(this.i(R)&65535)+(P.i(R)&65535),S=(O>>>16)+(this.i(R)>>>16)+(P.i(R)>>>16);N=S>>>16,O&=65535,S&=65535,A[R]=S<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function me(P,I){return P.add(G(I))}i.j=function(P){if(Z(this)||Z(P))return C;if(J(this))return J(P)?G(this).j(G(P)):G(G(this).j(P));if(J(P))return G(this.j(G(P)));if(this.l(j)<0&&P.l(j)<0)return v(this.m()*P.m());const I=this.g.length+P.g.length,A=[];for(var N=0;N<2*I;N++)A[N]=0;for(N=0;N<this.g.length;N++)for(let R=0;R<P.g.length;R++){const O=this.i(N)>>>16,S=this.i(N)&65535,$e=P.i(R)>>>16,lt=P.i(R)&65535;A[2*N+2*R]+=S*lt,ce(A,2*N+2*R),A[2*N+2*R+1]+=O*lt,ce(A,2*N+2*R+1),A[2*N+2*R+1]+=S*$e,ce(A,2*N+2*R+1),A[2*N+2*R+2]+=O*$e,ce(A,2*N+2*R+2)}for(P=0;P<I;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=I;P<2*I;P++)A[P]=0;return new h(A,0)};function ce(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function ve(P,I){this.g=P,this.h=I}function Oe(P,I){if(Z(I))throw Error("division by zero");if(Z(P))return new ve(C,C);if(J(P))return I=Oe(G(P),I),new ve(G(I.g),G(I.h));if(J(I))return I=Oe(P,G(I)),new ve(G(I.g),I.h);if(P.g.length>30){if(J(P)||J(I))throw Error("slowDivide_ only works with positive integers.");for(var A=D,N=I;N.l(P)<=0;)A=Be(A),N=Be(N);var R=we(A,1),O=we(N,1);for(N=we(N,2),A=we(A,2);!Z(N);){var S=O.add(N);S.l(P)<=0&&(R=R.add(A),O=S),N=we(N,1),A=we(A,1)}return I=me(P,R.j(I)),new ve(R,I)}for(R=C;P.l(I)>=0;){for(A=Math.max(1,Math.floor(P.m()/I.m())),N=Math.ceil(Math.log(A)/Math.LN2),N=N<=48?1:Math.pow(2,N-48),O=v(A),S=O.j(I);J(S)||S.l(P)>0;)A-=N,O=v(A),S=O.j(I);Z(O)&&(O=D),R=R.add(O),P=me(P,S)}return new ve(R,P)}i.B=function(P){return Oe(this,P).h},i.and=function(P){const I=Math.max(this.g.length,P.g.length),A=[];for(let N=0;N<I;N++)A[N]=this.i(N)&P.i(N);return new h(A,this.h&P.h)},i.or=function(P){const I=Math.max(this.g.length,P.g.length),A=[];for(let N=0;N<I;N++)A[N]=this.i(N)|P.i(N);return new h(A,this.h|P.h)},i.xor=function(P){const I=Math.max(this.g.length,P.g.length),A=[];for(let N=0;N<I;N++)A[N]=this.i(N)^P.i(N);return new h(A,this.h^P.h)};function Be(P){const I=P.g.length+1,A=[];for(let N=0;N<I;N++)A[N]=P.i(N)<<1|P.i(N-1)>>>31;return new h(A,P.h)}function we(P,I){const A=I>>5;I%=32;const N=P.g.length-A,R=[];for(let O=0;O<N;O++)R[O]=I>0?P.i(O+A)>>>I|P.i(O+A+1)<<32-I:P.i(O+A);return new h(R,P.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Zy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,_i=h}).apply(typeof cg<"u"?cg:typeof self<"u"?self:typeof window<"u"?window:{});var gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var e_,Ta,t_,ku,hd,n_,r_,i_;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof gu=="object"&&gu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function a(l,p){if(p)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in g))break e;g=g[L]}l=l[l.length-1],w=g[l],p=p(w),p!=w&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}a("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(l){return l||function(p){var g=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&g.push([w,p[w]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function v(l,p,g){return v=y,v.apply(null,arguments)}function E(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function C(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(w,L,U){for(var Y=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)Y[Te-2]=arguments[Te];return p.prototype[L].apply(w,Y)}}var D=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function j(l){const p=l.length;if(p>0){const g=Array(p);for(let w=0;w<p;w++)g[w]=l[w];return g}return[]}function Z(l,p){for(let w=1;w<arguments.length;w++){const L=arguments[w];var g=typeof L;if(g=g!="object"?g:L?Array.isArray(L)?"array":g:"null",g=="array"||g=="object"&&typeof L.length=="number"){g=l.length||0;const U=L.length||0;l.length=g+U;for(let Y=0;Y<U;Y++)l[g+Y]=L[Y]}else l.push(L)}}class J{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function G(l){h.setTimeout(()=>{throw l},0)}function me(){var l=P;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class ce{constructor(){this.h=this.g=null}add(p,g){const w=ve.get();w.set(p,g),this.h?this.h.next=w:this.g=w,this.h=w}}var ve=new J(()=>new Oe,l=>l.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,we=!1,P=new ce,I=()=>{const l=Promise.resolve(void 0);Be=()=>{l.then(A)}};function A(){for(var l;l=me();){try{l.h.call(l.g)}catch(g){G(g)}var p=ve;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}we=!1}function N(){this.u=this.u,this.C=this.C}N.prototype.u=!1,N.prototype.dispose=function(){this.u||(this.u=!0,this.N())},N.prototype[Symbol.dispose]=function(){this.dispose()},N.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function S(l){return/^[\s\xa0]*$/.test(l)}function $e(l,p){R.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}C($e,R),$e.prototype.init=function(l,p){const g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var lt="closure_listenable_"+(Math.random()*1e6|0),oe=0;function Ee(l,p,g,w,L){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!w,this.ha=L,this.key=++oe,this.da=this.fa=!1}function Q(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function re(l,p,g){for(const w in l)p.call(g,l[w],w,l)}function te(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function V(l){const p={};for(const g in l)p[g]=l[g];return p}const $="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Se(l,p){let g,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(g in w)l[g]=w[g];for(let U=0;U<$.length;U++)g=$[U],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function Ae(l){this.src=l,this.g={},this.h=0}Ae.prototype.add=function(l,p,g,w,L){const U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);const Y=Re(l,p,w,L);return Y>-1?(p=l[Y],g||(p.fa=!1)):(p=new Ee(p,this.src,U,!!w,L),p.fa=g,l.push(p)),p};function ke(l,p){const g=p.type;if(g in l.g){var w=l.g[g],L=Array.prototype.indexOf.call(w,p,void 0),U;(U=L>=0)&&Array.prototype.splice.call(w,L,1),U&&(Q(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Re(l,p,g,w){for(let L=0;L<l.length;++L){const U=l[L];if(!U.da&&U.listener==p&&U.capture==!!g&&U.ha==w)return L}return-1}var Ue="closure_lm_"+(Math.random()*1e6|0),Me={};function He(l,p,g,w,L){if(Array.isArray(p)){for(let U=0;U<p.length;U++)He(l,p[U],g,w,L);return null}return g=Ro(g),l&&l[lt]?l.J(p,g,m(w)?!!w.capture:!1,L):jt(l,p,g,!1,w,L)}function jt(l,p,g,w,L,U){if(!p)throw Error("Invalid event type");const Y=m(L)?!!L.capture:!!L;let Te=ms(l);if(Te||(l[Ue]=Te=new Ae(l)),g=Te.add(p,g,w,Y,U),g.proxy)return g;if(w=fs(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)O||(L=Y),L===void 0&&(L=!1),l.addEventListener(p.toString(),w,L);else if(l.attachEvent)l.attachEvent(ps(p.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function fs(){function l(g){return p.call(l.src,l.listener,g)}const p=Za;return l}function ko(l,p,g,w,L){if(Array.isArray(p))for(var U=0;U<p.length;U++)ko(l,p[U],g,w,L);else w=m(w)?!!w.capture:!!w,g=Ro(g),l&&l[lt]?(l=l.i,U=String(p).toString(),U in l.g&&(p=l.g[U],g=Re(p,g,w,L),g>-1&&(Q(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[U],l.h--)))):l&&(l=ms(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Re(p,g,w,L)),(g=l>-1?p[l]:null)&&Vr(g))}function Vr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[lt])ke(p.i,l);else{var g=l.type,w=l.proxy;p.removeEventListener?p.removeEventListener(g,w,l.capture):p.detachEvent?p.detachEvent(ps(g),w):p.addListener&&p.removeListener&&p.removeListener(w),(g=ms(p))?(ke(g,l),g.h==0&&(g.src=null,p[Ue]=null)):Q(l)}}}function ps(l){return l in Me?Me[l]:Me[l]="on"+l}function Za(l,p){if(l.da)l=!0;else{p=new $e(p,this);const g=l.listener,w=l.ha||l.src;l.fa&&Vr(l),l=g.call(w,p)}return l}function ms(l){return l=l[Ue],l instanceof Ae?l:null}var Ci="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ro(l){return typeof l=="function"?l:(l[Ci]||(l[Ci]=function(p){return l.handleEvent(p)}),l[Ci])}function ut(){N.call(this),this.i=new Ae(this),this.M=this,this.G=null}C(ut,N),ut.prototype[lt]=!0,ut.prototype.removeEventListener=function(l,p,g,w){ko(this,l,p,g,w)};function it(l,p){var g,w=l.G;if(w)for(g=[];w;w=w.G)g.push(w);if(l=l.M,w=p.type||p,typeof p=="string")p=new R(p,l);else if(p instanceof R)p.target=p.target||l;else{var L=p;p=new R(w,l),Se(p,L)}L=!0;let U,Y;if(g)for(Y=g.length-1;Y>=0;Y--)U=p.g=g[Y],L=_n(U,w,!0,p)&&L;if(U=p.g=l,L=_n(U,w,!0,p)&&L,L=_n(U,w,!1,p)&&L,g)for(Y=0;Y<g.length;Y++)U=p.g=g[Y],L=_n(U,w,!1,p)&&L}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let w=0;w<g.length;w++)Q(g[w]);delete l.g[p],l.h--}}this.G=null},ut.prototype.J=function(l,p,g,w){return this.i.add(String(l),p,!1,g,w)},ut.prototype.K=function(l,p,g,w){return this.i.add(String(l),p,!0,g,w)};function _n(l,p,g,w){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let L=!0;for(let U=0;U<p.length;++U){const Y=p[U];if(Y&&!Y.da&&Y.capture==g){const Te=Y.listener,st=Y.ha||Y.src;Y.fa&&ke(l.i,Y),L=Te.call(st,w)!==!1&&L}}return L&&!w.defaultPrevented}function Po(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=v(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function xo(l){l.g=Po(()=>{l.g=null,l.i&&(l.i=!1,xo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class el extends N{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:xo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Or(l){N.call(this),this.h=l,this.g={}}C(Or,N);var No=[];function gs(l){re(l.g,function(p,g){this.g.hasOwnProperty(g)&&Vr(p)},l),l.g={}}Or.prototype.N=function(){Or.Z.N.call(this),gs(this)},Or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mr=h.JSON.stringify,tl=h.JSON.parse,ki=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Lr(){}function nl(){}var br={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ys(){R.call(this,"d")}C(ys,R);function Do(){R.call(this,"c")}C(Do,R);var vn={},_s=null;function Fr(){return _s=_s||new ut}vn.Ia="serverreachability";function vs(l){R.call(this,vn.Ia,l)}C(vs,R);function ir(l){const p=Fr();it(p,new vs(p))}vn.STAT_EVENT="statevent";function sr(l,p){R.call(this,vn.STAT_EVENT,l),this.stat=p}C(sr,R);function nt(l){const p=Fr();it(p,new sr(p,l))}vn.Ja="timingevent";function Vo(l,p){R.call(this,vn.Ja,l),this.size=p}C(Vo,R);function Ur(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function jr(){this.g=!0}jr.prototype.ua=function(){this.g=!1};function rl(l,p,g,w,L,U){l.info(function(){if(l.g)if(U){var Y="",Te=U.split("&");for(let ze=0;ze<Te.length;ze++){var st=Te[ze].split("=");if(st.length>1){const ct=st[0];st=st[1];const tn=ct.split("_");Y=tn.length>=2&&tn[1]=="type"?Y+(ct+"="+st+"&"):Y+(ct+"=redacted&")}}}else Y=null;else Y=U;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+g+`
`+Y})}function il(l,p,g,w,L,U,Y){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+g+`
`+U+" "+Y})}function xn(l,p,g,w){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ri(l,g)+(w?" "+w:"")})}function sl(l,p){l.info(function(){return"TIMEOUT: "+p})}jr.prototype.info=function(){};function Ri(l,p){if(!l.g)return p;if(!p)return null;try{const U=JSON.parse(p);if(U){for(l=0;l<U.length;l++)if(Array.isArray(U[l])){var g=U[l];if(!(g.length<2)){var w=g[1];if(Array.isArray(w)&&!(w.length<1)){var L=w[0];if(L!="noop"&&L!="stop"&&L!="close")for(let Y=1;Y<w.length;Y++)w[Y]=""}}}}return Mr(U)}catch{return p}}var zr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Br={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ol;function or(){}C(or,Lr),or.prototype.g=function(){return new XMLHttpRequest},ol=new or;function Nn(l){return encodeURIComponent(String(l))}function ws(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function on(l,p,g,w){this.j=l,this.i=p,this.l=g,this.S=w||1,this.V=new Or(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new al}function al(){this.i=null,this.g="",this.h=!1}var ll={},Oo={};function wn(l,p,g){l.M=1,l.A=lr(an(p)),l.u=g,l.R=!0,Mo(l,null)}function Mo(l,p){l.F=Date.now(),Pi(l),l.B=an(l.A);var g=l.B,w=l.S;Array.isArray(w)||(w=[String(w)]),qo(g.i,"t",w),l.C=0,g=l.j.L,l.h=new al,l.g=_l(l.j,g?p:null,!l.u),l.P>0&&(l.O=new el(v(l.Y,l,l.g),l.P)),p=l.V,g=l.g,w=l.ba;var L="readystatechange";Array.isArray(L)||(L&&(No[0]=L.toString()),L=No);for(let U=0;U<L.length;U++){const Y=He(g,L[U],w||p.handleEvent,!1,p.h||p);if(!Y)break;p.g[Y.key]=Y}p=l.J?V(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),ir(),rl(l.i,l.v,l.B,l.l,l.S,l.u)}on.prototype.ba=function(l){l=l.target;const p=this.O;p&&Fn(l)==3?p.j():this.Y(l)},on.prototype.Y=function(l){try{if(l==this.g)e:{const Te=Fn(this.g),st=this.g.ya(),ze=this.g.ca();if(!(Te<3)&&(Te!=3||this.g&&(this.h.h||this.g.la()||gl(this.g)))){this.K||Te!=4||st==7||(st==8||ze<=0?ir(3):ir(2)),Es(this);var p=this.g.ca();this.X=p;var g=ul(this);if(this.o=p==200,il(this.i,this.v,this.B,this.l,this.S,Te,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,L=this.g;if((w=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(w)){var U=w;break t}}U=null}if(l=U)xn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,l);else{this.o=!1,this.m=3,nt(12),ar(this),xi(this);break e}}if(this.R){l=!0;let ct;for(;!this.K&&this.C<g.length;)if(ct=hl(this,g),ct==Oo){Te==4&&(this.m=4,nt(14),l=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==ll){this.m=4,nt(15),xn(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else xn(this.i,this.l,ct,null),Ge(this,ct);if(cl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||g.length!=0||this.h.h||(this.m=1,nt(16),l=!1),this.o=this.o&&l,!l)xn(this.i,this.l,g,"[Invalid Chunked Response]"),ar(this),xi(this);else if(g.length>0&&!this.W){this.W=!0;var Y=this.j;Y.g==this&&Y.aa&&!Y.P&&(Y.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Ui(Y),Y.P=!0,nt(11))}}else xn(this.i,this.l,g,null),Ge(this,g);Te==4&&ar(this),this.o&&!this.K&&(Te==4?Ns(this.j,this):(this.o=!1,Pi(this)))}else Go(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),ar(this),xi(this)}}}catch{}finally{}};function ul(l){if(!cl(l))return l.g.la();const p=gl(l.g);if(p==="")return"";let g="";const w=p.length,L=Fn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return ar(l),xi(l),"";l.h.i=new h.TextDecoder}for(let U=0;U<w;U++)l.h.h=!0,g+=l.h.i.decode(p[U],{stream:!(L&&U==w-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function cl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function hl(l,p){var g=l.C,w=p.indexOf(`
`,g);return w==-1?Oo:(g=Number(p.substring(g,w)),isNaN(g)?ll:(w+=1,w+g>p.length?Oo:(p=p.slice(w,w+g),l.C=w+g,p)))}on.prototype.cancel=function(){this.K=!0,ar(this)};function Pi(l){l.T=Date.now()+l.H,Lo(l,l.H)}function Lo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Ur(v(l.aa,l),p)}function Es(l){l.D&&(h.clearTimeout(l.D),l.D=null)}on.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(sl(this.i,this.B),this.M!=2&&(ir(),nt(17)),ar(this),this.m=2,xi(this)):Lo(this,this.T-l)};function xi(l){l.j.I==0||l.K||Ns(l.j,l)}function ar(l){Es(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,gs(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ge(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||Fo(g.h,l))){if(!l.L&&Fo(g.h,l)&&g.I==3){try{var w=g.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)xs(g),Zt(g);else break e;zn(g),nt(18)}}else g.xa=L[1],0<g.xa-g.K&&L[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Ur(v(g.Va,g),6e3));Ni(g.h)<=1&&g.ta&&(g.ta=void 0)}else en(g,11)}else if((l.L||g.g==l)&&xs(g),!S(p))for(L=g.Ba.g.parse(p),p=0;p<L.length;p++){let ze=L[p];const ct=ze[0];if(!(ct<=g.K))if(g.K=ct,ze=ze[1],g.I==2)if(ze[0]=="c"){g.M=ze[1],g.ba=ze[2];const tn=ze[3];tn!=null&&(g.ka=tn,g.j.info("VER="+g.ka));const fr=ze[4];fr!=null&&(g.za=fr,g.j.info("SVER="+g.za));const Bn=ze[5];Bn!=null&&typeof Bn=="number"&&Bn>0&&(w=1.5*Bn,g.O=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const $n=l.g;if($n){const Os=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Os){var U=w.h;U.g||Os.indexOf("spdy")==-1&&Os.indexOf("quic")==-1&&Os.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Is(U,U.h),U.h=null))}if(w.G){const Xo=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;Xo&&(w.wa=Xo,Fe(w.J,w.G,Xo))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),w=g;var Y=l;if(w.na=Qo(w,w.L?w.ba:null,w.W),Y.L){Di(w.h,Y);var Te=Y,st=w.O;st&&(Te.H=st),Te.D&&(Es(Te),Pi(Te)),w.g=Y}else Nt(w);g.i.length>0&&dr(g)}else ze[0]!="stop"&&ze[0]!="close"||en(g,7);else g.I==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?en(g,7):Rs(g):ze[0]!="noop"&&g.l&&g.l.qa(ze),g.A=0)}}ir(4)}catch{}}var gc=class{constructor(l,p){this.g=l,this.map=p}};function Ts(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function bo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ni(l){return l.h?1:l.g?l.g.size:0}function Fo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Is(l,p){l.g?l.g.add(p):l.h=p}function Di(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Ts.prototype.cancel=function(){if(this.i=Xt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Xt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return j(l.i)}var dl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yt(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const w=l[g].indexOf("=");let L,U=null;w>=0?(L=l[g].substring(0,w),U=l[g].substring(w+1)):L=l[g],p(L,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Dn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Dn?(this.l=l.l,Vi(this,l.j),this.o=l.o,this.g=l.g,Vn(this,l.u),this.h=l.h,$r(this,Wo(l.i)),this.m=l.m):l&&(p=String(l).match(dl))?(this.l=!1,Vi(this,p[1]||"",!0),this.o=Oi(p[2]||""),this.g=Oi(p[3]||"",!0),Vn(this,p[4]),this.h=Oi(p[5]||"",!0),$r(this,p[6]||"",!0),this.m=Oi(p[7]||"")):(this.l=!1,this.i=new De(null,this.l))}Dn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Mi(p,jo,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Mi(p,jo,!0),"@"),l.push(Nn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Mi(g,g.charAt(0)=="/"?Li:zo,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Mi(g,Bo)),l.join("")},Dn.prototype.resolve=function(l){const p=an(this);let g=!!l.j;g?Vi(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var w=l.h;if(g)Vn(p,l.u);else if(g=!!l.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var L=p.h.lastIndexOf("/");L!=-1&&(w=p.h.slice(0,L+1)+w)}if(L=w,L==".."||L==".")w="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){w=L.lastIndexOf("/",0)==0,L=L.split("/");const U=[];for(let Y=0;Y<L.length;){const Te=L[Y++];Te=="."?w&&Y==L.length&&U.push(""):Te==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),w&&Y==L.length&&U.push("")):(U.push(Te),w=!0)}w=U.join("/")}else w=L}return g?p.h=w:g=l.i.toString()!=="",g?$r(p,Wo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function an(l){return new Dn(l)}function Vi(l,p,g){l.j=g?Oi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Vn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function $r(l,p,g){p instanceof De?(l.i=p,As(l.i,l.l)):(g||(p=Mi(p,yc)),l.i=new De(p,l.l))}function Fe(l,p,g){l.i.set(p,g)}function lr(l){return Fe(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Oi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Mi(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,Uo),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Uo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var jo=/[#\/\?@]/g,zo=/[#\?:]/g,Li=/[#\?]/g,yc=/[#\?@]/g,Bo=/#/g;function De(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function On(l){l.g||(l.g=new Map,l.h=0,l.i&&Yt(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=De.prototype,i.add=function(l,p){On(this),this.i=null,l=Mn(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function $o(l,p){On(l),p=Mn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Ss(l,p){return On(l),p=Mn(l,p),l.g.has(p)}i.forEach=function(l,p){On(this),this.g.forEach(function(g,w){g.forEach(function(L){l.call(p,L,w,this)},this)},this)};function Ho(l,p){On(l);let g=[];if(typeof p=="string")Ss(l,p)&&(g=g.concat(l.g.get(Mn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return On(this),this.i=null,l=Mn(this,l),Ss(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=Ho(this,l),l.length>0?String(l[0]):p):p};function qo(l,p,g){$o(l,p),g.length>0&&(l.i=null,l.g.set(Mn(l,p),j(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var g=p[w];const L=Nn(g);g=Ho(this,g);for(let U=0;U<g.length;U++){let Y=L;g[U]!==""&&(Y+="="+Nn(g[U])),l.push(Y)}}return this.i=l.join("&")};function Wo(l){const p=new De;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Mn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function As(l,p){p&&!l.j&&(On(l),l.i=null,l.g.forEach(function(g,w){const L=w.toLowerCase();w!=L&&($o(this,w),qo(this,L,g))},l)),l.j=p}function Ln(l,p){const g=new jr;if(h.Image){const w=new Image;w.onload=E(St,g,"TestLoadImage: loaded",!0,p,w),w.onerror=E(St,g,"TestLoadImage: error",!1,p,w),w.onabort=E(St,g,"TestLoadImage: abort",!1,p,w),w.ontimeout=E(St,g,"TestLoadImage: timeout",!1,p,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else p(!1)}function bn(l,p){const g=new jr,w=new AbortController,L=setTimeout(()=>{w.abort(),St(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:w.signal}).then(U=>{clearTimeout(L),U.ok?St(g,"TestPingServer: ok",!0,p):St(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),St(g,"TestPingServer: error",!1,p)})}function St(l,p,g,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(g)}catch{}}function bi(){this.g=new ki}function ur(l){this.i=l.Sb||null,this.h=l.ab||!1}C(ur,Lr),ur.prototype.g=function(){return new Jt(this.i,this.h)};function Jt(l,p){ut.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}C(Jt,ut),i=Jt.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,En(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;fl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function fl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Hr(this):En(this),this.readyState==3&&fl(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,Hr(this))},i.Na=function(l){this.g&&(this.response=l,Hr(this))},i.ga=function(){this.g&&Hr(this)};function Hr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,En(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function En(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Jt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function pl(l){let p="";return re(l,function(g,w){p+=w,p+=":",p+=g,p+=`\r
`}),p}function Cs(l,p,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=pl(g),typeof l=="string"?g!=null&&Nn(g):Fe(l,p,g))}function qe(l){ut.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}C(qe,ut);var ml=/^https?$/i,_c=["POST","PUT"];i=qe.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ol.g(),this.g.onreadystatechange=D(v(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){qr(this,U);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)g.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const U of w.keys())g.set(U,w.get(U));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),L=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(_c,p,void 0)>=0)||w||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Y]of g)this.g.setRequestHeader(U,Y);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(U){qr(this,U)}};function qr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Wr(l),hr(l)}function Wr(l){l.A||(l.A=!0,it(l,"complete"),it(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,it(this,"complete"),it(this,"abort"),hr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hr(this,!0)),qe.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?cr(this):this.Xa())},i.Xa=function(){cr(this)};function cr(l){if(l.h&&typeof c<"u"){if(l.v&&Fn(l)==4)setTimeout(l.Ca.bind(l),0);else if(it(l,"readystatechange"),Fn(l)==4){l.h=!1;try{const U=l.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var w;if(w=U===0){let Y=String(l.D).match(dl)[1]||null;!Y&&h.self&&h.self.location&&(Y=h.self.location.protocol.slice(0,-1)),w=!ml.test(Y?Y.toLowerCase():"")}g=w}if(g)it(l,"complete"),it(l,"success");else{l.o=6;try{var L=Fn(l)>2?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.ca()+"]",Wr(l)}}finally{hr(l)}}}}function hr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||it(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Fn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return Fn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),tl(p)}};function gl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Go(l){const p={};l=(l.g&&Fn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(S(l[w]))continue;var g=ws(l[w]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=p[L]||[];p[L]=U,U.push(g)}te(p,function(w){return w.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function ks(l){this.za=0,this.i=[],this.j=new jr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Un("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Un("baseRetryDelayMs",5e3,l),this.Za=Un("retryDelaySeedMs",1e4,l),this.Ta=Un("forwardChannelMaxRetries",2,l),this.va=Un("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Ts(l&&l.concurrentRequestLimit),this.Ba=new bi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=ks.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,w){nt(0),this.W=l,this.H=p||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.J=Qo(this,null,this.W),dr(this)};function Rs(l){if(Ps(l),l.I==3){var p=l.V++,g=an(l.J);if(Fe(g,"SID",l.M),Fe(g,"RID",p),Fe(g,"TYPE","terminate"),jn(l,g),p=new on(l,l.j,p),p.M=2,p.A=lr(an(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=_l(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Pi(p)}ji(l)}function Zt(l){l.g&&(Ui(l),l.g.cancel(),l.g=null)}function Ps(l){Zt(l),l.v&&(h.clearTimeout(l.v),l.v=null),xs(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function dr(l){if(!bo(l.h)&&!l.m){l.m=!0;var p=l.Ea;Be||I(),we||(Be(),we=!0),P.add(p,l),l.D=0}}function yl(l,p){return Ni(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Ur(v(l.Ea,l,p),Ds(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const L=new on(this,this.j,l);let U=this.o;if(this.U&&(U?(U=V(U),Se(U,this.U)):U=this.U),this.u!==null||this.R||(L.J=U,U=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=Ko(this,L,p),g=an(this.J),Fe(g,"RID",l),Fe(g,"CVER",22),this.G&&Fe(g,"X-HTTP-Session-Id",this.G),jn(this,g),U&&(this.R?p="headers="+Nn(pl(U))+"&"+p:this.u&&Cs(g,this.u,U)),Is(this.h,L),this.Ra&&Fe(g,"TYPE","init"),this.S?(Fe(g,"$req",p),Fe(g,"SID","null"),L.U=!0,wn(L,g,null)):wn(L,g,p),this.I=2}}else this.I==3&&(l?Fi(this,l):this.i.length==0||bo(this.h)||Fi(this))};function Fi(l,p){var g;p?g=p.l:g=l.V++;const w=an(l.J);Fe(w,"SID",l.M),Fe(w,"RID",g),Fe(w,"AID",l.K),jn(l,w),l.u&&l.o&&Cs(w,l.u,l.o),g=new on(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Ko(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Is(l.h,g),wn(g,w,p)}function jn(l,p){l.H&&re(l.H,function(g,w){Fe(p,w,g)}),l.l&&re({},function(g,w){Fe(p,w,g)})}function Ko(l,p,g){g=Math.min(l.i.length,g);const w=l.l?v(l.l.Ka,l.l,l):null;e:{var L=l.i;let Te=-1;for(;;){const st=["count="+g];Te==-1?g>0?(Te=L[0].g,st.push("ofs="+Te)):Te=0:st.push("ofs="+Te);let ze=!0;for(let ct=0;ct<g;ct++){var U=L[ct].g;const tn=L[ct].map;if(U-=Te,U<0)Te=Math.max(0,L[ct].g-100),ze=!1;else try{U="req"+U+"_"||"";try{var Y=tn instanceof Map?tn:Object.entries(tn);for(const[fr,Bn]of Y){let $n=Bn;m(Bn)&&($n=Mr(Bn)),st.push(U+fr+"="+encodeURIComponent($n))}}catch(fr){throw st.push(U+"type="+encodeURIComponent("_badmap")),fr}}catch{w&&w(tn)}}if(ze){Y=st.join("&");break e}}Y=void 0}return l=l.i.splice(0,g),p.G=l,Y}function Nt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;Be||I(),we||(Be(),we=!0),P.add(p,l),l.A=0}}function zn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Ur(v(l.Da,l),Ds(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,Gr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Ur(v(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),Zt(this),Gr(this))};function Ui(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Gr(l){l.g=new on(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=an(l.na);Fe(p,"RID","rpc"),Fe(p,"SID",l.M),Fe(p,"AID",l.K),Fe(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Fe(p,"TO",l.ia),Fe(p,"TYPE","xmlhttp"),jn(l,p),l.u&&l.o&&Cs(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=lr(an(p)),g.u=null,g.R=!0,Mo(g,l)}i.Va=function(){this.C!=null&&(this.C=null,Zt(this),zn(this),nt(19))};function xs(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Ns(l,p){var g=null;if(l.g==p){xs(l),Ui(l),l.g=null;var w=2}else if(Fo(l.h,p))g=p.G,Di(l.h,p),w=1;else return;if(l.I!=0){if(p.o)if(w==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var L=l.D;w=Fr(),it(w,new Vo(w,g)),dr(l)}else Nt(l);else if(L=p.m,L==3||L==0&&p.X>0||!(w==1&&yl(l,p)||w==2&&zn(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),L){case 1:en(l,5);break;case 4:en(l,10);break;case 3:en(l,6);break;default:en(l,2)}}}function Ds(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function en(l,p){if(l.j.info("Error code "+p),p==2){var g=v(l.bb,l),w=l.Ua;const L=!w;w=new Dn(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Vi(w,"https"),lr(w),L?Ln(w.toString(),g):bn(w.toString(),g)}else nt(2);l.I=0,l.l&&l.l.pa(p),ji(l),Ps(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function ji(l){if(l.I=0,l.ja=[],l.l){const p=Xt(l.h);(p.length!=0||l.i.length!=0)&&(Z(l.ja,p),Z(l.ja,l.i),l.h.i.length=0,j(l.i),l.i.length=0),l.l.oa()}}function Qo(l,p,g){var w=g instanceof Dn?an(g):new Dn(g);if(w.g!="")p&&(w.g=p+"."+w.g),Vn(w,w.u);else{var L=h.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;const U=new Dn(null);w&&Vi(U,w),p&&(U.g=p),L&&Vn(U,L),g&&(U.h=g),w=U}return g=l.G,p=l.wa,g&&p&&Fe(w,g,p),Fe(w,"VER",l.ka),jn(l,w),w}function _l(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new qe(new ur({ab:g})):new qe(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function vl(){}i=vl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Vs(){}Vs.prototype.g=function(l,p){return new At(l,p)};function At(l,p){ut.call(this),this.g=new ks(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!S(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!S(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Kr(this)}C(At,ut),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Rs(this.g)},At.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=Mr(l),l=g);p.i.push(new gc(p.Ya++,l)),p.I==3&&dr(p)},At.prototype.N=function(){this.g.l=null,delete this.j,Rs(this.g),delete this.g,At.Z.N.call(this)};function wl(l){ys.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}C(wl,ys);function El(){Do.call(this),this.status=1}C(El,Do);function Kr(l){this.g=l}C(Kr,vl),Kr.prototype.ra=function(){it(this.g,"a")},Kr.prototype.qa=function(l){it(this.g,new wl(l))},Kr.prototype.pa=function(l){it(this.g,new El)},Kr.prototype.oa=function(){it(this.g,"b")},Vs.prototype.createWebChannel=Vs.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,i_=function(){return new Vs},r_=function(){return Fr()},n_=vn,hd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},zr.NO_ERROR=0,zr.TIMEOUT=8,zr.HTTP_ERROR=6,ku=zr,Br.COMPLETE="complete",t_=Br,nl.EventType=br,br.OPEN="a",br.CLOSE="b",br.ERROR="c",br.MESSAGE="d",ut.prototype.listen=ut.prototype.J,Ta=nl,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,e_=qe}).apply(typeof gu<"u"?gu:typeof self<"u"?self:typeof window<"u"?window:{});const hg="@firebase/firestore",dg="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Pd("@firebase/firestore");function to(){return os.logLevel}function ne(i,...e){if(os.logLevel<=Pe.DEBUG){const t=e.map(jd);os.debug(`Firestore (${Io}): ${i}`,...t)}}function xr(i,...e){if(os.logLevel<=Pe.ERROR){const t=e.map(jd);os.error(`Firestore (${Io}): ${i}`,...t)}}function fo(i,...e){if(os.logLevel<=Pe.WARN){const t=e.map(jd);os.warn(`Firestore (${Io}): ${i}`,...t)}}function jd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,s_(i,s,t)}function s_(i,e,t){let s=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw xr(s),new Error(s)}function je(i,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,i||s_(e,a,s)}function Ie(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Dr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bt.UNAUTHENTICATED)))}shutdown(){}}class UI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class jI{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0,42304);let s=this.i;const a=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let c=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new vi,e.enqueueRetryable((()=>a(this.currentUser)))};const h=()=>{const y=c;e.enqueueRetryable((async()=>{await y.promise,await a(this.currentUser)}))},m=y=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new vi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(je(typeof s.accessToken=="string",31837,{l:s}),new o_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class zI{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class BI{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new zI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(bt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $I{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,pn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){je(this.o===void 0,3512);const s=c=>{c.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const a=c=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>a(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?a(c):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new fg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new fg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=HI(40);for(let c=0;c<a.length;++c)s.length<20&&a[c]<t&&(s+=e.charAt(a[c]%62))}return s}}function xe(i,e){return i<e?-1:i>e?1:0}function dd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const a=i.charAt(s),c=e.charAt(s);if(a!==c)return Jh(a)===Jh(c)?xe(a,c):Jh(a)?1:-1}return xe(i.length,e.length)}const qI=55296,WI=57343;function Jh(i){const e=i.charCodeAt(0);return e>=qI&&e<=WI}function po(i,e,t){return i.length===e.length&&i.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="__name__";class Kn{constructor(e,t,s){t===void 0?t=0:t>e.length&&pe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&pe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Kn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Kn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const c=Kn.compareSegments(e.get(a),t.get(a));if(c!==0)return c}return xe(e.length,t.length)}static compareSegments(e,t){const s=Kn.isNumericId(e),a=Kn.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Kn.extractNumericId(e).compare(Kn.extractNumericId(t)):dd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _i.fromString(e.substring(4,e.length-2))}}class et extends Kn{construct(e,t,s){return new et(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new et(t)}static emptyPath(){return new et([])}}const GI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Kn{construct(e,t,s){return new Pt(e,t,s)}static isValidIdentifier(e){return GI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pg}static keyField(){return new Pt([pg])}static fromServerFormat(e){const t=[];let s="",a=0;const c=()=>{if(s.length===0)throw new ue(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new ue(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ue(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else m==="`"?(h=!h,a++):m!=="."||h?(s+=m,a++):(c(),a++)}if(c(),h)throw new ue(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(et.fromString(e))}static fromName(e){return new fe(et.fromString(e).popFirst(5))}static empty(){return new fe(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return et.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new et(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(i,e,t){if(!t)throw new ue(q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function QI(i,e,t,s){if(e===!0&&s===!0)throw new ue(q.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function mg(i){if(!fe.isDocumentKey(i))throw new ue(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function a_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Bd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":pe(12329,{type:typeof i})}function Ar(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ue(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bd(i);throw new ue(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(i,e){const t={typeString:i};return e&&(t.value=e),t}function Ka(i,e){if(!a_(i))throw new ue(q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(a&&typeof h!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(c!==void 0&&h!==c.value){t=`Expected '${s}' field to equal '${c.value}'`;break}}if(t)throw new ue(q.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=-62135596800,yg=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*yg);return new Xe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<gg)throw new ue(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yg}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ka(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:ft("string",Xe._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new Xe(0,0))}static max(){return new _e(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=-1;function XI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=_e.fromTimestamp(s===1e9?new Xe(t+1,0):new Xe(t,s));return new wi(a,fe.empty(),e)}function YI(i){return new wi(i.readTime,i.key,Oa)}class wi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new wi(_e.min(),fe.empty(),Oa)}static max(){return new wi(_e.max(),fe.empty(),Oa)}}function JI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(i.documentKey,e.documentKey),t!==0?t:xe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class e1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(i){if(i.code!==q.FAILED_PRECONDITION||i.message!==ZI)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B(((s,a)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,a)},this.catchCallback=c=>{this.wrapFailure(t,c).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):B.reject(t)}static resolve(e){return new B(((t,s)=>{t(e)}))}static reject(e){return new B(((t,s)=>{s(e)}))}static waitFor(e){return new B(((t,s)=>{let a=0,c=0,h=!1;e.forEach((m=>{++a,m.next((()=>{++c,h&&c===a&&t()}),(y=>s(y)))})),h=!0,c===a&&t()}))}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next((a=>a?B.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,c)=>{s.push(t.call(this,a,c))})),this.waitFor(s)}static mapArray(e,t){return new B(((s,a)=>{const c=e.length,h=new Array(c);let m=0;for(let y=0;y<c;y++){const v=y;t(e[v]).next((E=>{h[v]=E,++m,m===c&&s(h)}),(E=>a(E)))}}))}static doWhile(e,t){return new B(((s,a)=>{const c=()=>{e()===!0?t().next((()=>{c()}),a):s()};c()}))}}function t1(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ao(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}nc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=-1;function rc(i){return i==null}function zu(i){return i===0&&1/i==-1/0}function n1(i){return typeof i=="number"&&Number.isInteger(i)&&!zu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="";function r1(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=_g(e)),e=i1(i.get(t),e);return _g(e)}function i1(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const c=i.charAt(a);switch(c){case"\0":t+="";break;case l_:t+="";break;default:t+=c}}return t}function _g(i){return i+l_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function us(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function u_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yu(this.root,e,this.comparator,!1)}getReverseIterator(){return new yu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yu(this.root,e,this.comparator,!0)}}class yu{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=t?s(e.key,t):1,t&&a&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,a,c){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=a??Rt.EMPTY,this.right=c??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,c){return new Rt(e??this.key,t??this.value,s??this.color,a??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const c=s(e,a.key);return a=c<0?a.copy(null,null,null,a.left.insert(e,t,s),null):c===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Rt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,t,s,a,c){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wg(this.data.getIterator())}getIteratorFrom(e){return new wg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,c=s.getNext().key;if(this.comparator(a,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class wg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new Pn([])}unionWith(e){let t=new vt(Pt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return po(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new c_("Invalid base64 string: "+c):c}})(e);return new xt(t)}static fromUint8Array(e){const t=(function(a){let c="";for(let h=0;h<a.length;++h)c+=String.fromCharCode(a[h]);return c})(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const s1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(i){if(je(!!i,39018),typeof i=="string"){let e=0;const t=s1.exec(i);if(je(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:at(i.seconds),nanos:at(i.nanos)}}function at(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ti(i){return typeof i=="string"?xt.fromBase64String(i):xt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="server_timestamp",d_="__type__",f_="__previous_value__",p_="__local_write_time__";function Hd(i){return(i?.mapValue?.fields||{})[d_]?.stringValue===h_}function ic(i){const e=i.mapValue.fields[f_];return Hd(e)?ic(e):e}function Ma(i){const e=Ei(i.mapValue.fields[p_].timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,t,s,a,c,h,m,y,v,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=c,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=E}}const Bu="(default)";class La{constructor(e,t){this.projectId=e,this.database=t||Bu}static empty(){return new La("","")}get isDefaultDatabase(){return this.database===Bu}isEqual(e){return e instanceof La&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="__type__",a1="__max__",_u={mapValue:{}},g_="__vector__",$u="value";function Ii(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Hd(i)?4:u1(i)?9007199254740991:l1(i)?10:11:pe(28295,{value:i})}function nr(i,e){if(i===e)return!0;const t=Ii(i);if(t!==Ii(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ma(i).isEqual(Ma(e));case 3:return(function(a,c){if(typeof a.timestampValue=="string"&&typeof c.timestampValue=="string"&&a.timestampValue.length===c.timestampValue.length)return a.timestampValue===c.timestampValue;const h=Ei(a.timestampValue),m=Ei(c.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(a,c){return Ti(a.bytesValue).isEqual(Ti(c.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(a,c){return at(a.geoPointValue.latitude)===at(c.geoPointValue.latitude)&&at(a.geoPointValue.longitude)===at(c.geoPointValue.longitude)})(i,e);case 2:return(function(a,c){if("integerValue"in a&&"integerValue"in c)return at(a.integerValue)===at(c.integerValue);if("doubleValue"in a&&"doubleValue"in c){const h=at(a.doubleValue),m=at(c.doubleValue);return h===m?zu(h)===zu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return po(i.arrayValue.values||[],e.arrayValue.values||[],nr);case 10:case 11:return(function(a,c){const h=a.mapValue.fields||{},m=c.mapValue.fields||{};if(vg(h)!==vg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!nr(h[y],m[y])))return!1;return!0})(i,e);default:return pe(52216,{left:i})}}function ba(i,e){return(i.values||[]).find((t=>nr(t,e)))!==void 0}function mo(i,e){if(i===e)return 0;const t=Ii(i),s=Ii(e);if(t!==s)return xe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(i.booleanValue,e.booleanValue);case 2:return(function(c,h){const m=at(c.integerValue||c.doubleValue),y=at(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return Eg(i.timestampValue,e.timestampValue);case 4:return Eg(Ma(i),Ma(e));case 5:return dd(i.stringValue,e.stringValue);case 6:return(function(c,h){const m=Ti(c),y=Ti(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(c,h){const m=c.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const E=xe(m[v],y[v]);if(E!==0)return E}return xe(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(c,h){const m=xe(at(c.latitude),at(h.latitude));return m!==0?m:xe(at(c.longitude),at(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Tg(i.arrayValue,e.arrayValue);case 10:return(function(c,h){const m=c.fields||{},y=h.fields||{},v=m[$u]?.arrayValue,E=y[$u]?.arrayValue,C=xe(v?.values?.length||0,E?.values?.length||0);return C!==0?C:Tg(v,E)})(i.mapValue,e.mapValue);case 11:return(function(c,h){if(c===_u.mapValue&&h===_u.mapValue)return 0;if(c===_u.mapValue)return 1;if(h===_u.mapValue)return-1;const m=c.fields||{},y=Object.keys(m),v=h.fields||{},E=Object.keys(v);y.sort(),E.sort();for(let C=0;C<y.length&&C<E.length;++C){const D=dd(y[C],E[C]);if(D!==0)return D;const j=mo(m[y[C]],v[E[C]]);if(j!==0)return j}return xe(y.length,E.length)})(i.mapValue,e.mapValue);default:throw pe(23264,{he:t})}}function Eg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return xe(i,e);const t=Ei(i),s=Ei(e),a=xe(t.seconds,s.seconds);return a!==0?a:xe(t.nanos,s.nanos)}function Tg(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const c=mo(t[a],s[a]);if(c)return c}return xe(t.length,s.length)}function go(i){return fd(i)}function fd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Ei(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ti(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return fe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",a=!0;for(const c of t.values||[])a?a=!1:s+=",",s+=fd(c);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",c=!0;for(const h of s)c?c=!1:a+=",",a+=`${h}:${fd(t.fields[h])}`;return a+"}"})(i.mapValue):pe(61005,{value:i})}function Ru(i){switch(Ii(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ic(i);return e?16+Ru(e):16;case 5:return 2*i.stringValue.length;case 6:return Ti(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,c)=>a+Ru(c)),0)})(i.arrayValue);case 10:case 11:return(function(s){let a=0;return us(s.fields,((c,h)=>{a+=c.length+Ru(h)})),a})(i.mapValue);default:throw pe(13486,{value:i})}}function pd(i){return!!i&&"integerValue"in i}function qd(i){return!!i&&"arrayValue"in i}function Ig(i){return!!i&&"nullValue"in i}function Sg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Pu(i){return!!i&&"mapValue"in i}function l1(i){return(i?.mapValue?.fields||{})[m_]?.stringValue===g_}function Ra(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return us(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ra(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ra(i.arrayValue.values[t]);return e}return{...i}}function u1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===a1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.value=e}static empty(){return new mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Pu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ra(t)}setAll(e){let t=Pt.emptyPath(),s={},a=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,a),s={},a=[],t=m.popLast()}h?s[m.lastSegment()]=Ra(h):a.push(m.lastSegment())}));const c=this.getFieldsMap(t);this.applyChanges(c,s,a)}delete(e){const t=this.field(e.popLast());Pu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Pu(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){us(t,((a,c)=>e[a]=c));for(const a of s)delete e[a]}clone(){return new mn(Ra(this.value))}}function y_(i){const e=[];return us(i.fields,((t,s)=>{const a=new Pt([t]);if(Pu(s)){const c=y_(s.mapValue).fields;if(c.length===0)e.push(a);else for(const h of c)e.push(a.child(h))}else e.push(a)})),new Pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,s,a,c,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=c,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ft(e,0,_e.min(),_e.min(),_e.min(),mn.empty(),0)}static newFoundDocument(e,t,s,a){return new Ft(e,1,t,_e.min(),s,a,0)}static newNoDocument(e,t){return new Ft(e,2,t,_e.min(),_e.min(),mn.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,_e.min(),_e.min(),mn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t){this.position=e,this.inclusive=t}}function Ag(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const c=e[a],h=i.position[a];if(c.field.isKeyField()?s=fe.comparator(fe.fromName(h.referenceValue),t.key):s=mo(h,t.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Cg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!nr(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t="asc"){this.field=e,this.dir=t}}function c1(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{}class yt extends __{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new d1(e,t,s):t==="array-contains"?new m1(e,s):t==="in"?new g1(e,s):t==="not-in"?new y1(e,s):t==="array-contains-any"?new _1(e,s):new yt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new f1(e,s):new p1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(mo(t,this.value)):t!==null&&Ii(this.value)===Ii(t)&&this.matchesComparison(mo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rr extends __{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new rr(e,t)}matches(e){return v_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function v_(i){return i.op==="and"}function w_(i){return h1(i)&&v_(i)}function h1(i){for(const e of i.filters)if(e instanceof rr)return!1;return!0}function md(i){if(i instanceof yt)return i.field.canonicalString()+i.op.toString()+go(i.value);if(w_(i))return i.filters.map((e=>md(e))).join(",");{const e=i.filters.map((t=>md(t))).join(",");return`${i.op}(${e})`}}function E_(i,e){return i instanceof yt?(function(s,a){return a instanceof yt&&s.op===a.op&&s.field.isEqual(a.field)&&nr(s.value,a.value)})(i,e):i instanceof rr?(function(s,a){return a instanceof rr&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((c,h,m)=>c&&E_(h,a.filters[m])),!0):!1})(i,e):void pe(19439)}function T_(i){return i instanceof yt?(function(t){return`${t.field.canonicalString()} ${t.op} ${go(t.value)}`})(i):i instanceof rr?(function(t){return t.op.toString()+" {"+t.getFilters().map(T_).join(" ,")+"}"})(i):"Filter"}class d1 extends yt{constructor(e,t,s){super(e,t,s),this.key=fe.fromName(s.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class f1 extends yt{constructor(e,t){super(e,"in",t),this.keys=I_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class p1 extends yt{constructor(e,t){super(e,"not-in",t),this.keys=I_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function I_(i,e){return(e.arrayValue?.values||[]).map((t=>fe.fromName(t.referenceValue)))}class m1 extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qd(t)&&ba(t.arrayValue,this.value)}}class g1 extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ba(this.value.arrayValue,t)}}class y1 extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ba(this.value.arrayValue,t)}}class _1 extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ba(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,t=null,s=[],a=[],c=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=c,this.startAt=h,this.endAt=m,this.Te=null}}function kg(i,e=null,t=[],s=[],a=null,c=null,h=null){return new v1(i,e,t,s,a,c,h)}function Wd(i){const e=Ie(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>md(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(c){return c.field.canonicalString()+c.dir})(s))).join(","),rc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>go(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>go(s))).join(",")),e.Te=t}return e.Te}function Gd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!c1(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!E_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Cg(i.startAt,e.startAt)&&Cg(i.endAt,e.endAt)}function gd(i){return fe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t=null,s=[],a=[],c=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=c,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function w1(i,e,t,s,a,c,h,m){return new sc(i,e,t,s,a,c,h,m)}function oc(i){return new sc(i)}function Rg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function E1(i){return i.collectionGroup!==null}function Pa(i){const e=Ie(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const c of e.explicitOrderBy)e.Ie.push(c),t.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new vt(Pt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((c=>{t.has(c.canonicalString())||c.isKeyField()||e.Ie.push(new qu(c,s))})),t.has(Pt.keyField().canonicalString())||e.Ie.push(new qu(Pt.keyField(),s))}return e.Ie}function Yn(i){const e=Ie(i);return e.Ee||(e.Ee=T1(e,Pa(i))),e.Ee}function T1(i,e){if(i.limitType==="F")return kg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((a=>{const c=a.dir==="desc"?"asc":"desc";return new qu(a.field,c)}));const t=i.endAt?new Hu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Hu(i.startAt.position,i.startAt.inclusive):null;return kg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function yd(i,e,t){return new sc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function ac(i,e){return Gd(Yn(i),Yn(e))&&i.limitType===e.limitType}function S_(i){return`${Wd(Yn(i))}|lt:${i.limitType}`}function no(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>T_(a))).join(", ")}]`),rc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>go(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>go(a))).join(",")),`Target(${s})`})(Yn(i))}; limitType=${i.limitType})`}function lc(i,e){return e.isFoundDocument()&&(function(s,a){const c=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):fe.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)})(i,e)&&(function(s,a){for(const c of Pa(s))if(!c.field.isKeyField()&&a.data.field(c.field)===null)return!1;return!0})(i,e)&&(function(s,a){for(const c of s.filters)if(!c.matches(a))return!1;return!0})(i,e)&&(function(s,a){return!(s.startAt&&!(function(h,m,y){const v=Ag(h,m,y);return h.inclusive?v<=0:v<0})(s.startAt,Pa(s),a)||s.endAt&&!(function(h,m,y){const v=Ag(h,m,y);return h.inclusive?v>=0:v>0})(s.endAt,Pa(s),a))})(i,e)}function I1(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function A_(i){return(e,t)=>{let s=!1;for(const a of Pa(i)){const c=S1(a,e,t);if(c!==0)return c;s=s||a.field.isKeyField()}return 0}}function S1(i,e,t){const s=i.field.isKeyField()?fe.comparator(e.key,t.key):(function(c,h,m){const y=h.data.field(c),v=m.data.field(c);return y!==null&&v!==null?mo(y,v):pe(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return pe(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,c]of s)if(this.equalsFn(a,e))return c}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let c=0;c<a.length;c++)if(this.equalsFn(a[c][0],e))return void(a[c]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,((t,s)=>{for(const[a,c]of s)e(a,c)}))}isEmpty(){return u_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=new tt(fe.comparator);function Nr(){return A1}const C_=new tt(fe.comparator);function Ia(...i){let e=C_;for(const t of i)e=e.insert(t.key,t);return e}function k_(i){let e=C_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ts(){return xa()}function R_(){return xa()}function xa(){return new cs((i=>i.toString()),((i,e)=>i.isEqual(e)))}const C1=new tt(fe.comparator),k1=new vt(fe.comparator);function Ne(...i){let e=k1;for(const t of i)e=e.add(t);return e}const R1=new vt(xe);function P1(){return R1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zu(e)?"-0":e}}function P_(i){return{integerValue:""+i}}function x1(i,e){return n1(e)?P_(e):Kd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this._=void 0}}function N1(i,e,t){return i instanceof Wu?(function(a,c){const h={fields:{[d_]:{stringValue:h_},[p_]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return c&&Hd(c)&&(c=ic(c)),c&&(h.fields[f_]=c),{mapValue:h}})(t,e):i instanceof Fa?N_(i,e):i instanceof Ua?D_(i,e):(function(a,c){const h=x_(a,c),m=Pg(h)+Pg(a.Ae);return pd(h)&&pd(a.Ae)?P_(m):Kd(a.serializer,m)})(i,e)}function D1(i,e,t){return i instanceof Fa?N_(i,e):i instanceof Ua?D_(i,e):t}function x_(i,e){return i instanceof Gu?(function(s){return pd(s)||(function(c){return!!c&&"doubleValue"in c})(s)})(e)?e:{integerValue:0}:null}class Wu extends uc{}class Fa extends uc{constructor(e){super(),this.elements=e}}function N_(i,e){const t=V_(e);for(const s of i.elements)t.some((a=>nr(a,s)))||t.push(s);return{arrayValue:{values:t}}}class Ua extends uc{constructor(e){super(),this.elements=e}}function D_(i,e){let t=V_(e);for(const s of i.elements)t=t.filter((a=>!nr(a,s)));return{arrayValue:{values:t}}}class Gu extends uc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Pg(i){return at(i.integerValue||i.doubleValue)}function V_(i){return qd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function V1(i,e){return i.field.isEqual(e.field)&&(function(s,a){return s instanceof Fa&&a instanceof Fa||s instanceof Ua&&a instanceof Ua?po(s.elements,a.elements,nr):s instanceof Gu&&a instanceof Gu?nr(s.Ae,a.Ae):s instanceof Wu&&a instanceof Wu})(i.transform,e.transform)}class O1{constructor(e,t){this.version=e,this.transformResults=t}}class Jn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Jn}static exists(e){return new Jn(void 0,e)}static updateTime(e){return new Jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class cc{}function O_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Qd(i.key,Jn.none()):new Qa(i.key,i.data,Jn.none());{const t=i.data,s=mn.empty();let a=new vt(Pt.comparator);for(let c of e.fields)if(!a.has(c)){let h=t.field(c);h===null&&c.length>1&&(c=c.popLast(),h=t.field(c)),h===null?s.delete(c):s.set(c,h),a=a.add(c)}return new hs(i.key,s,new Pn(a.toArray()),Jn.none())}}function M1(i,e,t){i instanceof Qa?(function(a,c,h){const m=a.value.clone(),y=Ng(a.fieldTransforms,c,h.transformResults);m.setAll(y),c.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof hs?(function(a,c,h){if(!xu(a.precondition,c))return void c.convertToUnknownDocument(h.version);const m=Ng(a.fieldTransforms,c,h.transformResults),y=c.data;y.setAll(M_(a)),y.setAll(m),c.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(a,c,h){c.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Na(i,e,t,s){return i instanceof Qa?(function(c,h,m,y){if(!xu(c.precondition,h))return m;const v=c.value.clone(),E=Dg(c.fieldTransforms,y,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof hs?(function(c,h,m,y){if(!xu(c.precondition,h))return m;const v=Dg(c.fieldTransforms,y,h),E=h.data;return E.setAll(M_(c)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((C=>C.field)))})(i,e,t,s):(function(c,h,m){return xu(c.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function L1(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),c=x_(s.transform,a||null);c!=null&&(t===null&&(t=mn.empty()),t.set(s.field,c))}return t||null}function xg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&po(s,a,((c,h)=>V1(c,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Qa extends cc{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class hs extends cc{constructor(e,t,s,a,c=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function M_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Ng(i,e,t){const s=new Map;je(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let a=0;a<t.length;a++){const c=i[a],h=c.transform,m=e.data.field(c.field);s.set(c.field,D1(h,m,t[a]))}return s}function Dg(i,e,t){const s=new Map;for(const a of i){const c=a.transform,h=t.data.field(a.field);s.set(a.field,N1(c,h,e))}return s}class Qd extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class b1 extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const c=this.mutations[a];c.key.isEqual(e.key)&&M1(c,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Na(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Na(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=R_();return this.mutations.forEach((a=>{const c=e.get(a.key),h=c.overlayedDocument;let m=this.applyToLocalView(h,c.mutatedFields);m=t.has(a.key)?null:m;const y=O_(h,m);y!==null&&s.set(a.key,y),h.isValidDocument()||h.convertToNoDocument(_e.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&po(this.mutations,e.mutations,((t,s)=>xg(t,s)))&&po(this.baseMutations,e.baseMutations,((t,s)=>xg(t,s)))}}class Xd{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){je(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return C1})();const c=e.mutations;for(let h=0;h<c.length;h++)a=a.insert(c[h].key,s[h].version);return new Xd(e,t,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,Ve;function z1(i){switch(i){case q.OK:return pe(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return pe(15467,{code:i})}}function L_(i){if(i===void 0)return xr("GRPC error has no .code"),q.UNKNOWN;switch(i){case dt.OK:return q.OK;case dt.CANCELLED:return q.CANCELLED;case dt.UNKNOWN:return q.UNKNOWN;case dt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case dt.INTERNAL:return q.INTERNAL;case dt.UNAVAILABLE:return q.UNAVAILABLE;case dt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case dt.NOT_FOUND:return q.NOT_FOUND;case dt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case dt.ABORTED:return q.ABORTED;case dt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case dt.DATA_LOSS:return q.DATA_LOSS;default:return pe(39323,{code:i})}}(Ve=dt||(dt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=new _i([4294967295,4294967295],0);function Vg(i){const e=B1().encode(i),t=new Zy;return t.update(e),new Uint8Array(t.digest())}function Og(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new _i([t,s],0),new _i([a,c],0)]}class Yd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Sa(`Invalid padding: ${t}`);if(s<0)throw new Sa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Sa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Sa(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=_i.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(_i.fromNumber(s)));return a.compare($1)===1&&(a=new _i([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Vg(e),[s,a]=Og(t);for(let c=0;c<this.hashCount;c++){const h=this.ye(s,a,c);if(!this.we(h))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),h=new Yd(c,a,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Vg(e),[s,a]=Og(t);for(let c=0;c<this.hashCount;c++){const h=this.ye(s,a,c);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Sa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t,s,a,c){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Xa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new hc(_e.min(),a,new tt(xe),Nr(),Ne())}}class Xa{constructor(e,t,s,a,c){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Xa(s,t,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class b_{constructor(e,t){this.targetId=e,this.Ce=t}}class F_{constructor(e,t,s=xt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class Mg{constructor(){this.ve=0,this.Fe=Lg(),this.Me=xt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ne(),t=Ne(),s=Ne();return this.Fe.forEach(((a,c)=>{switch(c){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:pe(38017,{changeType:c})}})),new Xa(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Lg()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class H1{constructor(e){this.Ge=e,this.ze=new Map,this.je=Nr(),this.Je=vu(),this.He=vu(),this.Ye=new tt(xe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:pe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const c=a.target;if(gd(c))if(s===0){const h=new fe(c.path);this.et(t,h,Ft.newNoDocument(h,_e.min()))}else je(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:c=0}=t;let h,m;try{h=Ti(s).toUint8Array()}catch(y){if(y instanceof c_)return fo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Yd(h,a,c)}catch(y){return fo(y instanceof Sa?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((c=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${c.path.canonicalString()}`;e.mightContain(m)||(this.et(t,c,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((c,h)=>{const m=this.ot(h);if(m){if(c.current&&gd(m.target)){const y=new fe(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Ft.newNoDocument(y,e))}c.Be&&(t.set(h,c.ke()),c.qe())}}));let s=Ne();this.He.forEach(((c,h)=>{let m=!0;h.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(c))})),this.je.forEach(((c,h)=>h.setReadTime(e)));const a=new hc(e,t,this.Ye,this.je,s);return this.je=Nr(),this.Je=vu(),this.He=vu(),this.Ye=new tt(xe),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Mg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new vt(xe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new vt(xe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Mg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function vu(){return new tt(fe.comparator)}function Lg(){return new tt(fe.comparator)}const q1={asc:"ASCENDING",desc:"DESCENDING"},W1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},G1={and:"AND",or:"OR"};class K1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _d(i,e){return i.useProto3Json||rc(e)?e:{value:e}}function Ku(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function U_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function Q1(i,e){return Ku(i,e.toTimestamp())}function Zn(i){return je(!!i,49232),_e.fromTimestamp((function(t){const s=Ei(t);return new Xe(s.seconds,s.nanos)})(i))}function Jd(i,e){return vd(i,e).canonicalString()}function vd(i,e){const t=(function(a){return new et(["projects",a.projectId,"databases",a.database])})(i).child("documents");return e===void 0?t:t.child(e)}function j_(i){const e=et.fromString(i);return je(q_(e),10190,{key:e.toString()}),e}function wd(i,e){return Jd(i.databaseId,e.path)}function Zh(i,e){const t=j_(e);if(t.get(1)!==i.databaseId.projectId)throw new ue(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ue(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new fe(B_(t))}function z_(i,e){return Jd(i.databaseId,e)}function X1(i){const e=j_(i);return e.length===4?et.emptyPath():B_(e)}function Ed(i){return new et(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function B_(i){return je(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function bg(i,e,t){return{name:wd(i,e),fields:t.value.mapValue.fields}}function Y1(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:pe(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],c=(function(v,E){return v.useProto3Json?(je(E===void 0||typeof E=="string",58123),xt.fromBase64String(E||"")):(je(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),xt.fromUint8Array(E||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const E=v.code===void 0?q.UNKNOWN:L_(v.code);return new ue(E,v.message||"")})(h);t=new F_(s,a,c,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Zh(i,s.document.name),c=Zn(s.document.updateTime),h=s.document.createTime?Zn(s.document.createTime):_e.min(),m=new mn({mapValue:{fields:s.document.fields}}),y=Ft.newFoundDocument(a,c,h,m),v=s.targetIds||[],E=s.removedTargetIds||[];t=new Nu(v,E,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Zh(i,s.document),c=s.readTime?Zn(s.readTime):_e.min(),h=Ft.newNoDocument(a,c),m=s.removedTargetIds||[];t=new Nu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Zh(i,s.document),c=s.removedTargetIds||[];t=new Nu([],c,a,null)}else{if(!("filter"in e))return pe(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:c}=s,h=new j1(a,c),m=s.targetId;t=new b_(m,h)}}return t}function J1(i,e){let t;if(e instanceof Qa)t={update:bg(i,e.key,e.value)};else if(e instanceof Qd)t={delete:wd(i,e.key)};else if(e instanceof hs)t={update:bg(i,e.key,e.data),updateMask:aS(e.fieldMask)};else{if(!(e instanceof b1))return pe(16599,{Vt:e.type});t={verify:wd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(c,h){const m=h.transform;if(m instanceof Wu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Fa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ua)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Gu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw pe(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,c){return c.updateTime!==void 0?{updateTime:Q1(a,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:pe(27497)})(i,e.precondition)),t}function Z1(i,e){return i&&i.length>0?(je(e!==void 0,14353),i.map((t=>(function(a,c){let h=a.updateTime?Zn(a.updateTime):Zn(c);return h.isEqual(_e.min())&&(h=Zn(c)),new O1(h,a.transformResults||[])})(t,e)))):[]}function eS(i,e){return{documents:[z_(i,e.path)]}}function tS(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=z_(i,a);const c=(function(v){if(v.length!==0)return H_(rr.create(v,"and"))})(e.filters);c&&(t.structuredQuery.where=c);const h=(function(v){if(v.length!==0)return v.map((E=>(function(D){return{field:ro(D.field),direction:iS(D.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=_d(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:a}}function nS(i){let e=X1(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){je(s===1,65062);const E=t.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let c=[];t.where&&(c=(function(C){const D=$_(C);return D instanceof rr&&w_(D)?D.getFilters():[D]})(t.where));let h=[];t.orderBy&&(h=(function(C){return C.map((D=>(function(Z){return new qu(io(Z.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Z.direction))})(D)))})(t.orderBy));let m=null;t.limit&&(m=(function(C){let D;return D=typeof C=="object"?C.value:C,rc(D)?null:D})(t.limit));let y=null;t.startAt&&(y=(function(C){const D=!!C.before,j=C.values||[];return new Hu(j,D)})(t.startAt));let v=null;return t.endAt&&(v=(function(C){const D=!C.before,j=C.values||[];return new Hu(j,D)})(t.endAt)),w1(e,a,h,c,m,"F",y,v)}function rS(i,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=io(t.unaryFilter.field);return yt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=io(t.unaryFilter.field);return yt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=io(t.unaryFilter.field);return yt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=io(t.unaryFilter.field);return yt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}})(i):i.fieldFilter!==void 0?(function(t){return yt.create(io(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return rr.create(t.compositeFilter.filters.map((s=>$_(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return pe(1026)}})(t.compositeFilter.op))})(i):pe(30097,{filter:i})}function iS(i){return q1[i]}function sS(i){return W1[i]}function oS(i){return G1[i]}function ro(i){return{fieldPath:i.canonicalString()}}function io(i){return Pt.fromServerFormat(i.fieldPath)}function H_(i){return i instanceof yt?(function(t){if(t.op==="=="){if(Sg(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NAN"}};if(Ig(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Sg(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NOT_NAN"}};if(Ig(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ro(t.field),op:sS(t.op),value:t.value}}})(i):i instanceof rr?(function(t){const s=t.getFilters().map((a=>H_(a)));return s.length===1?s[0]:{compositeFilter:{op:oS(t.op),filters:s}}})(i):pe(54877,{filter:i})}function aS(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function q_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,s,a,c=_e.min(),h=_e.min(),m=xt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.yt=e}}function uS(i){const e=nS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?yd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.Cn=new hS}addToCollectionParentIndex(e,t){return this.Cn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(wi.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(wi.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class hS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new vt(et.comparator),c=!a.has(s);return this.index[t]=a.add(s),c}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new vt(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},W_=41943040;class Qt{static withCacheSize(e){return new Qt(e,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.DEFAULT_COLLECTION_PERCENTILE=10,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qt.DEFAULT=new Qt(W_,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qt.DISABLED=new Qt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new yo(0)}static cr(){return new yo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="LruGarbageCollector",dS=1048576;function jg([i,e],[t,s]){const a=xe(i,t);return a===0?xe(e,s):a}class fS{constructor(e){this.Ir=e,this.buffer=new vt(jg),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();jg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class pS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ne(Ug,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ao(t)?ne(Ug,"Ignoring IndexedDB error during garbage collection: ",t):await So(t)}await this.Vr(3e5)}))}}class mS{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return B.resolve(nc.ce);const s=new fS(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Fg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,c,h,m,y,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((C=>(C>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),a=this.params.maximumSequenceNumbersToCollect):a=C,h=Date.now(),this.nthSequenceNumber(e,a)))).next((C=>(s=C,m=Date.now(),this.removeTargets(e,s,t)))).next((C=>(c=C,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((C=>(v=Date.now(),to()<=Pe.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${a} in `+(m-h)+`ms
	Removed ${c} targets in `+(y-m)+`ms
	Removed ${C} documents in `+(v-y)+`ms
Total Duration: ${v-E}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:c,documentsRemoved:C}))))}}function gS(i,e){return new mS(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(){this.changes=new cs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&Na(s.mutation,a,Pn.empty(),Xe.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ne()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ne()){const a=ts();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((c=>{let h=Ia();return c.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ts();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ne())))}populateOverlays(e,t,s){const a=[];return s.forEach((c=>{t.has(c)||a.push(c)})),this.documentOverlayCache.getOverlays(e,a).next((c=>{c.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,a){let c=Nr();const h=xa(),m=(function(){return xa()})();return t.forEach(((y,v)=>{const E=s.get(v.key);a.has(v.key)&&(E===void 0||E.mutation instanceof hs)?c=c.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),Na(E.mutation,v,E.mutation.getFieldMask(),Xe.now())):h.set(v.key,Pn.empty())})),this.recalculateAndSaveOverlays(e,c).next((y=>(y.forEach(((v,E)=>h.set(v,E))),t.forEach(((v,E)=>m.set(v,new _S(E,h.get(v)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=xa();let a=new tt(((h,m)=>h-m)),c=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let E=s.get(y)||Pn.empty();E=m.applyToLocalView(v,E),s.set(y,E);const C=(a.get(m.batchId)||Ne()).add(y);a=a.insert(m.batchId,C)}))})).next((()=>{const h=[],m=a.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,E=y.value,C=R_();E.forEach((D=>{if(!c.has(D)){const j=O_(t.get(D),s.get(D));j!==null&&C.set(D,j),c=c.add(D)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,C))}return B.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):E1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((c=>{const h=a-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-c.size):B.resolve(ts());let m=Oa,y=c;return h.next((v=>B.forEach(v,((E,C)=>(m<C.largestBatchId&&(m=C.largestBatchId),c.get(E)?B.resolve():this.remoteDocumentCache.getEntry(e,E).next((D=>{y=y.insert(E,D)}))))).next((()=>this.populateOverlays(e,v,c))).next((()=>this.computeViews(e,y,v,Ne()))).next((E=>({batchId:m,changes:k_(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((s=>{let a=Ia();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const c=t.collectionGroup;let h=Ia();return this.indexManager.getCollectionParents(e,c).next((m=>B.forEach(m,(y=>{const v=(function(C,D){return new sc(D,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)})(t,y.child(c));return this.getDocumentsMatchingCollectionQuery(e,v,s,a).next((E=>{E.forEach(((C,D)=>{h=h.insert(C,D)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let c;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(c=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,c,a)))).next((h=>{c.forEach(((y,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,Ft.newInvalidDocument(E)))}));let m=Ia();return h.forEach(((y,v)=>{const E=c.get(y);E!==void 0&&Na(E.mutation,v,Pn.empty(),Xe.now()),lc(t,v)&&(m=m.insert(y,v))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return B.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Zn(a.createTime)}})(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:uS(a.bundledQuery),readTime:Zn(a.readTime)}})(t)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(){this.overlays=new tt(fe.comparator),this.qr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ts();return B.forEach(t,(a=>this.getOverlay(e,a).next((c=>{c!==null&&s.set(a,c)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,c)=>{this.St(e,t,c)})),B.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const a=ts(),c=t.length+1,h=new fe(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===c&&y.largestBatchId>s&&a.set(y.getKey(),y)}return B.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let c=new tt(((v,E)=>v-E));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let E=c.get(v.largestBatchId);E===null&&(E=ts(),c=c.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const m=ts(),y=c.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,E)=>m.set(v,E))),!(m.size()>=a)););return B.resolve(m)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const h=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new U1(t,s));let c=this.qr.get(t);c===void 0&&(c=Ne(),this.qr.set(t,c)),this.qr.set(t,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.Qr=new vt(It.$r),this.Ur=new vt(It.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new It(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new It(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new fe(new et([])),s=new It(t,e),a=new It(t,e+1),c=[];return this.Ur.forEachInRange([s,a],(h=>{this.Gr(h),c.push(h.key)})),c}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new fe(new et([])),s=new It(t,e),a=new It(t,e+1);let c=Ne();return this.Ur.forEachInRange([s,a],(h=>{c=c.add(h.key)})),c}containsKey(e){const t=new It(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return fe.comparator(e.key,t.key)||xe(e.Yr,t.Yr)}static Kr(e,t){return xe(e.Yr,t.Yr)||fe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new vt(It.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new F1(c,t,s,a);this.mutationQueue.push(h);for(const m of a)this.Zr=this.Zr.add(new It(m.key,c)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),c=a<0?0:a;return B.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?$d:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),a=new It(t,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([s,a],(h=>{const m=this.Xr(h.Yr);c.push(m)})),B.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new vt(xe);return t.forEach((a=>{const c=new It(a,0),h=new It(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,h],(m=>{s=s.add(m.Yr)}))})),B.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let c=s;fe.isDocumentKey(c)||(c=c.child(""));const h=new It(new fe(c),0);let m=new vt(xe);return this.Zr.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===a&&(m=m.add(y.Yr)),!0)}),h),B.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){je(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return B.forEach(t.mutations,(a=>{const c=new It(a.key,t.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new It(t,0),a=this.Zr.firstAfterOrEqual(s);return B.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.ri=e,this.docs=(function(){return new tt(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),c=a?a.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Nr();return t.forEach((a=>{const c=this.docs.get(a);s=s.insert(a,c?c.document.mutableCopy():Ft.newInvalidDocument(a))})),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let c=Nr();const h=t.path,m=new fe(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:E}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||JI(YI(E),s)<=0||(a.has(E.key)||lc(t,E))&&(c=c.insert(E.key,E.mutableCopy()))}return B.resolve(c)}getAllFromCollectionGroup(e,t,s,a){pe(9500)}ii(e,t){return B.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new AS(this)}getSize(e){return B.resolve(this.size)}}class AS extends yS{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),B.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.persistence=e,this.si=new cs((t=>Wd(t)),Gd),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.oi=0,this._i=new Zd,this.targetCount=0,this.ai=yo.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),B.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new yo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.Pr(t),B.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let a=0;const c=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),c.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)})),B.waitFor(c).next((()=>a))}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),B.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,c=[];return a&&t.forEach((h=>{c.push(a.markPotentiallyOrphaned(e,h))})),B.waitFor(c)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t){this.ui={},this.overlays={},this.ci=new nc(0),this.li=!1,this.li=!0,this.hi=new TS,this.referenceDelegate=e(this),this.Pi=new CS(this),this.indexManager=new cS,this.remoteDocumentCache=(function(a){return new SS(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new lS(t),this.Ii=new wS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ES,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new IS(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const a=new kS(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((c=>this.referenceDelegate.di(a).next((()=>c)))).toPromise().then((c=>(a.raiseOnCommittedEvent(),c)))}Ai(e,t){return B.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class kS extends e1{constructor(e){super(),this.currentSequenceNumber=e}}class ef{constructor(e){this.persistence=e,this.Ri=new Zd,this.Vi=null}static mi(e){return new ef(e)}get fi(){if(this.Vi)return this.Vi;throw pe(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),B.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((c=>this.fi.add(c.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,(s=>{const a=fe.fromPath(s);return this.gi(e,a).next((c=>{c||t.removeEntry(a,_e.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return B.or([()=>B.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Qu{constructor(e,t){this.persistence=e,this.pi=new cs((s=>r1(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=gS(this,t)}static mi(e,t){return new Qu(e,t)}Ei(){}di(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return B.forEach(this.pi,((s,a)=>this.br(e,s,a).next((c=>c?B.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),c=a.newChangeBuffer();return a.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,c.removeEntry(h,_e.min()))})))).next((()=>c.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),B.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ru(e.data.value)),t}br(e,t,s){return B.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return B.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=Ne(),a=Ne();for(const c of t.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:a=a.add(c.doc.key)}return new tf(e,t.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return gw()?8:t1(Ut())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const c={result:null};return this.ys(e,t).next((h=>{c.result=h})).next((()=>{if(!c.result)return this.ws(e,t,a,s).next((h=>{c.result=h}))})).next((()=>{if(c.result)return;const h=new RS;return this.Ss(e,t,h).next((m=>{if(c.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>c.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(to()<=Pe.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",no(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(to()<=Pe.DEBUG&&ne("QueryEngine","Query:",no(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(to()<=Pe.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",no(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(t))):B.resolve())}ys(e,t){if(Rg(t))return B.resolve(null);let s=Yn(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=yd(t,null,"F"),s=Yn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((c=>{const h=Ne(...c);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.Ds(t,m);return this.Cs(t,v,h,y.readTime)?this.ys(e,yd(t,null,"F")):this.vs(e,v,t,y)}))))})))))}ws(e,t,s,a){return Rg(t)||a.isEqual(_e.min())?B.resolve(null):this.ps.getDocuments(e,s).next((c=>{const h=this.Ds(t,c);return this.Cs(t,h,s,a)?B.resolve(null):(to()<=Pe.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),no(t)),this.vs(e,h,t,XI(a,Oa)).next((m=>m)))}))}Ds(e,t){let s=new vt(A_(e));return t.forEach(((a,c)=>{lc(e,c)&&(s=s.add(c))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const c=e.limitType==="F"?t.last():t.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(a)>0)}Ss(e,t,s){return to()<=Pe.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",no(t)),this.ps.getDocumentsMatchingQuery(e,t,wi.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((c=>(t.forEach((h=>{c=c.insert(h.key,h)})),c)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="LocalStore",xS=3e8;class NS{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new tt(xe),this.xs=new cs((c=>Wd(c)),Gd),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vS(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function DS(i,e,t,s){return new NS(i,e,t,s)}async function K_(i,e){const t=Ie(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((c=>(a=c,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((c=>{const h=[],m=[];let y=Ne();for(const v of a){h.push(v.batchId);for(const E of v.mutations)y=y.add(E.key)}for(const v of c){m.push(v.batchId);for(const E of v.mutations)y=y.add(E.key)}return t.localDocuments.getDocuments(s,y).next((v=>({Ls:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function VS(i,e){const t=Ie(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),c=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,v,E){const C=v.batch,D=C.keys();let j=B.resolve();return D.forEach((Z=>{j=j.next((()=>E.getEntry(y,Z))).next((J=>{const G=v.docVersions.get(Z);je(G!==null,48541),J.version.compareTo(G)<0&&(C.applyToRemoteDocument(J,v),J.isValidDocument()&&(J.setReadTime(v.commitVersion),E.addEntry(J)))}))})),j.next((()=>m.mutationQueue.removeMutationBatch(y,C)))})(t,s,e,c).next((()=>c.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Ne();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function Q_(i){const e=Ie(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function OS(i,e){const t=Ie(i),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const m=[];e.targetChanges.forEach(((E,C)=>{const D=a.get(C);if(!D)return;m.push(t.Pi.removeMatchingKeys(c,E.removedDocuments,C).next((()=>t.Pi.addMatchingKeys(c,E.addedDocuments,C))));let j=D.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(C)!==null?j=j.withResumeToken(xt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):E.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(E.resumeToken,s)),a=a.insert(C,j),(function(J,G,me){return J.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=xS?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0})(D,j,E)&&m.push(t.Pi.updateTargetData(c,j))}));let y=Nr(),v=Ne();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(c,E))})),m.push(MS(c,h,e.documentUpdates).next((E=>{y=E.ks,v=E.qs}))),!s.isEqual(_e.min())){const E=t.Pi.getLastRemoteSnapshotVersion(c).next((C=>t.Pi.setTargetsMetadata(c,c.currentSequenceNumber,s)));m.push(E)}return B.waitFor(m).next((()=>h.apply(c))).next((()=>t.localDocuments.getLocalViewOfDocuments(c,y,v))).next((()=>y))})).then((c=>(t.Ms=a,c)))}function MS(i,e,t){let s=Ne(),a=Ne();return t.forEach((c=>s=s.add(c))),e.getEntries(i,s).next((c=>{let h=Nr();return t.forEach(((m,y)=>{const v=c.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(a=a.add(m)),y.isNoDocument()&&y.version.isEqual(_e.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ne(nf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)})),{ks:h,qs:a}}))}function LS(i,e){const t=Ie(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=$d),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function bS(i,e){const t=Ie(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((c=>c?(a=c,B.resolve(a)):t.Pi.allocateTargetId(s).next((h=>(a=new pi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Td(i,e,t){const s=Ie(i),a=s.Ms.get(e),c=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",c,(h=>s.persistence.referenceDelegate.removeTarget(h,a)))}catch(h){if(!Ao(h))throw h;ne(nf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function zg(i,e,t){const s=Ie(i);let a=_e.min(),c=Ne();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,E){const C=Ie(y),D=C.xs.get(E);return D!==void 0?B.resolve(C.Ms.get(D)):C.Pi.getTargetData(v,E)})(s,h,Yn(e)).next((m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{c=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?a:_e.min(),t?c:Ne()))).next((m=>(FS(s,I1(e),m),{documents:m,Qs:c})))))}function FS(i,e,t){let s=i.Os.get(e)||_e.min();t.forEach(((a,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)})),i.Os.set(e,s)}class Bg{constructor(){this.activeTargetIds=P1()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class US{constructor(){this.Mo=new Bg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Bg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="ConnectivityMonitor";class Hg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ne($g,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ne($g,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wu=null;function Id(){return wu===null?wu=(function(){return 268435456+Math.round(2147483648*Math.random())})():wu++,"0x"+wu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="RestConnection",zS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class BS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===Bu?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,c){const h=Id(),m=this.zo(e,t.toUriEncodedString());ne(ed,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,a,c);const{host:v}=new URL(m),E=wo(v);return this.Jo(e,m,y,s,E).then((C=>(ne(ed,`Received RPC '${e}' ${h}: `,C),C)),(C=>{throw fo(ed,`RPC '${e}' ${h} failed with error: `,C,"url: ",m,"request:",s),C}))}Ho(e,t,s,a,c,h){return this.Go(e,t,s,a,c)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Io})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,c)=>e[c]=a)),s&&s.headers.forEach(((a,c)=>e[c]=a))}zo(e,t){const s=zS[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class HS extends BS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,c){const h=Id();return new Promise(((m,y)=>{const v=new e_;v.setWithCredentials(!0),v.listenOnce(t_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case ku.NO_ERROR:const C=v.getResponseJson();ne(Lt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(C)),m(C);break;case ku.TIMEOUT:ne(Lt,`RPC '${e}' ${h} timed out`),y(new ue(q.DEADLINE_EXCEEDED,"Request time out"));break;case ku.HTTP_ERROR:const D=v.getStatus();if(ne(Lt,`RPC '${e}' ${h} failed with status:`,D,"response text:",v.getResponseText()),D>0){let j=v.getResponseJson();Array.isArray(j)&&(j=j[0]);const Z=j?.error;if(Z&&Z.status&&Z.message){const J=(function(me){const ce=me.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(ce)>=0?ce:q.UNKNOWN})(Z.status);y(new ue(J,Z.message))}else y(new ue(q.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new ue(q.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{l_:e,streamId:h,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{ne(Lt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(a);ne(Lt,`RPC '${e}' ${h} sending request:`,a),v.send(t,"POST",E,s,15)}))}T_(e,t,s){const a=Id(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=i_(),m=r_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const E=c.join("");ne(Lt,`Creating RPC '${e}' stream ${a}: ${E}`,y);const C=h.createWebChannel(E,y);this.I_(C);let D=!1,j=!1;const Z=new $S({Yo:G=>{j?ne(Lt,`Not sending because RPC '${e}' stream ${a} is closed:`,G):(D||(ne(Lt,`Opening RPC '${e}' stream ${a} transport.`),C.open(),D=!0),ne(Lt,`RPC '${e}' stream ${a} sending:`,G),C.send(G))},Zo:()=>C.close()}),J=(G,me,ce)=>{G.listen(me,(ve=>{try{ce(ve)}catch(Oe){setTimeout((()=>{throw Oe}),0)}}))};return J(C,Ta.EventType.OPEN,(()=>{j||(ne(Lt,`RPC '${e}' stream ${a} transport opened.`),Z.o_())})),J(C,Ta.EventType.CLOSE,(()=>{j||(j=!0,ne(Lt,`RPC '${e}' stream ${a} transport closed`),Z.a_(),this.E_(C))})),J(C,Ta.EventType.ERROR,(G=>{j||(j=!0,fo(Lt,`RPC '${e}' stream ${a} transport errored. Name:`,G.name,"Message:",G.message),Z.a_(new ue(q.UNAVAILABLE,"The operation could not be completed")))})),J(C,Ta.EventType.MESSAGE,(G=>{if(!j){const me=G.data[0];je(!!me,16349);const ce=me,ve=ce?.error||ce[0]?.error;if(ve){ne(Lt,`RPC '${e}' stream ${a} received error:`,ve);const Oe=ve.status;let Be=(function(I){const A=dt[I];if(A!==void 0)return L_(A)})(Oe),we=ve.message;Be===void 0&&(Be=q.INTERNAL,we="Unknown error status: "+Oe+" with message "+ve.message),j=!0,Z.a_(new ue(Be,we)),C.close()}else ne(Lt,`RPC '${e}' stream ${a} received:`,me),Z.u_(me)}})),J(m,n_.STAT_EVENT,(G=>{G.stat===hd.PROXY?ne(Lt,`RPC '${e}' stream ${a} detected buffering proxy`):G.stat===hd.NOPROXY&&ne(Lt,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{Z.__()}),0),Z}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function td(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(i){return new K1(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,s=1e3,a=1.5,c=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&ne("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="PersistentStream";class Y_{constructor(e,t,s,a,c,h,m,y){this.Mi=e,this.S_=s,this.b_=a,this.connection=c,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new X_(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(xr(t.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new ue(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ne(qg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ne(qg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qS extends Y_{constructor(e,t,s,a,c,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,h),this.serializer=c}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Y1(this.serializer,e),s=(function(c){if(!("targetChange"in c))return _e.min();const h=c.targetChange;return h.targetIds&&h.targetIds.length?_e.min():h.readTime?Zn(h.readTime):_e.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Ed(this.serializer),t.addTarget=(function(c,h){let m;const y=h.target;if(m=gd(y)?{documents:eS(c,y)}:{query:tS(c,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=U_(c,h.resumeToken);const v=_d(c,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(_e.min())>0){m.readTime=Ku(c,h.snapshotVersion.toTimestamp());const v=_d(c,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=rS(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Ed(this.serializer),t.removeTarget=e,this.q_(t)}}class WS extends Y_{constructor(e,t,s,a,c,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,h),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Z1(e.writeResults,e.commitTime),s=Zn(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Ed(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>J1(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{}class KS extends GS{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ue(q.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,h])=>this.connection.Go(e,vd(t,s),a,c,h))).catch((c=>{throw c.name==="FirebaseError"?(c.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue(q.UNKNOWN,c.toString())}))}Ho(e,t,s,a,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,vd(t,s),a,h,m,c))).catch((h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ue(q.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class QS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xr(t),this.aa=!1):ne("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="RemoteStore";class XS{constructor(e,t,s,a,c){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{ds(this)&&(ne(as,"Restarting streams for network reachability change."),await(async function(y){const v=Ie(y);v.Ea.add(4),await Ya(v),v.Ra.set("Unknown"),v.Ea.delete(4),await fc(v)})(this))}))})),this.Ra=new QS(s,a)}}async function fc(i){if(ds(i))for(const e of i.da)await e(!0)}async function Ya(i){for(const e of i.da)await e(!1)}function J_(i,e){const t=Ie(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),af(t)?of(t):Co(t).O_()&&sf(t,e))}function rf(i,e){const t=Ie(i),s=Co(t);t.Ia.delete(e),s.O_()&&Z_(t,e),t.Ia.size===0&&(s.O_()?s.L_():ds(t)&&t.Ra.set("Unknown"))}function sf(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Co(i).Y_(e)}function Z_(i,e){i.Va.Ue(e),Co(i).Z_(e)}function of(i){i.Va=new H1({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Co(i).start(),i.Ra.ua()}function af(i){return ds(i)&&!Co(i).x_()&&i.Ia.size>0}function ds(i){return Ie(i).Ea.size===0}function ev(i){i.Va=void 0}async function YS(i){i.Ra.set("Online")}async function JS(i){i.Ia.forEach(((e,t)=>{sf(i,e)}))}async function ZS(i,e){ev(i),af(i)?(i.Ra.ha(e),of(i)):i.Ra.set("Unknown")}async function eA(i,e,t){if(i.Ra.set("Online"),e instanceof F_&&e.state===2&&e.cause)try{await(async function(a,c){const h=c.cause;for(const m of c.targetIds)a.Ia.has(m)&&(await a.remoteSyncer.rejectListen(m,h),a.Ia.delete(m),a.Va.removeTarget(m))})(i,e)}catch(s){ne(as,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xu(i,s)}else if(e instanceof Nu?i.Va.Ze(e):e instanceof b_?i.Va.st(e):i.Va.tt(e),!t.isEqual(_e.min()))try{const s=await Q_(i.localStore);t.compareTo(s)>=0&&await(function(c,h){const m=c.Va.Tt(h);return m.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const E=c.Ia.get(v);E&&c.Ia.set(v,E.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,v)=>{const E=c.Ia.get(y);if(!E)return;c.Ia.set(y,E.withResumeToken(xt.EMPTY_BYTE_STRING,E.snapshotVersion)),Z_(c,y);const C=new pi(E.target,y,v,E.sequenceNumber);sf(c,C)})),c.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ne(as,"Failed to raise snapshot:",s),await Xu(i,s)}}async function Xu(i,e,t){if(!Ao(e))throw e;i.Ea.add(1),await Ya(i),i.Ra.set("Offline"),t||(t=()=>Q_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ne(as,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await fc(i)}))}function tv(i,e){return e().catch((t=>Xu(i,t,e)))}async function pc(i){const e=Ie(i),t=Si(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:$d;for(;tA(e);)try{const a=await LS(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,nA(e,a)}catch(a){await Xu(e,a)}nv(e)&&rv(e)}function tA(i){return ds(i)&&i.Ta.length<10}function nA(i,e){i.Ta.push(e);const t=Si(i);t.O_()&&t.X_&&t.ea(e.mutations)}function nv(i){return ds(i)&&!Si(i).x_()&&i.Ta.length>0}function rv(i){Si(i).start()}async function rA(i){Si(i).ra()}async function iA(i){const e=Si(i);for(const t of i.Ta)e.ea(t.mutations)}async function sA(i,e,t){const s=i.Ta.shift(),a=Xd.from(s,e,t);await tv(i,(()=>i.remoteSyncer.applySuccessfulWrite(a))),await pc(i)}async function oA(i,e){e&&Si(i).X_&&await(async function(s,a){if((function(h){return z1(h)&&h!==q.ABORTED})(a.code)){const c=s.Ta.shift();Si(s).B_(),await tv(s,(()=>s.remoteSyncer.rejectFailedWrite(c.batchId,a))),await pc(s)}})(i,e),nv(i)&&rv(i)}async function Wg(i,e){const t=Ie(i);t.asyncQueue.verifyOperationInProgress(),ne(as,"RemoteStore received new credentials");const s=ds(t);t.Ea.add(3),await Ya(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await fc(t)}async function aA(i,e){const t=Ie(i);e?(t.Ea.delete(2),await fc(t)):e||(t.Ea.add(2),await Ya(t),t.Ra.set("Unknown"))}function Co(i){return i.ma||(i.ma=(function(t,s,a){const c=Ie(t);return c.sa(),new qS(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,a)})(i.datastore,i.asyncQueue,{Xo:YS.bind(null,i),t_:JS.bind(null,i),r_:ZS.bind(null,i),H_:eA.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),af(i)?of(i):i.Ra.set("Unknown")):(await i.ma.stop(),ev(i))}))),i.ma}function Si(i){return i.fa||(i.fa=(function(t,s,a){const c=Ie(t);return c.sa(),new WS(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,a)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:rA.bind(null,i),r_:oA.bind(null,i),ta:iA.bind(null,i),na:sA.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await pc(i)):(await i.fa.stop(),i.Ta.length>0&&(ne(as,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,s,a,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=c,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,c){const h=Date.now()+s,m=new lf(e,t,h,a,c);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uf(i,e){if(xr("AsyncQueue",`${e}: ${i}`),Ao(i))return new ue(q.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{static emptySet(e){return new uo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||fe.comparator(t.key,s.key):(t,s)=>fe.comparator(t.key,s.key),this.keyedMap=Ia(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof uo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,c=s.getNext().key;if(!a.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new uo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.ga=new tt(fe.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):pe(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class _o{constructor(e,t,s,a,c,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=c,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,a,c){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new _o(e,t,uo.emptySet(t),h,s,a,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class uA{constructor(){this.queries=Kg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=Ie(t),c=a.queries;a.queries=Kg(),c.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new ue(q.ABORTED,"Firestore shutting down"))}}function Kg(){return new cs((i=>S_(i)),ac)}async function iv(i,e){const t=Ie(i);let s=3;const a=e.query;let c=t.queries.get(a);c?!c.ba()&&e.Da()&&(s=2):(c=new lA,s=e.Da()?0:1);try{switch(s){case 0:c.wa=await t.onListen(a,!0);break;case 1:c.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(h){const m=uf(h,`Initialization of query '${no(e.query)}' failed`);return void e.onError(m)}t.queries.set(a,c),c.Sa.push(e),e.va(t.onlineState),c.wa&&e.Fa(c.wa)&&cf(t)}async function sv(i,e){const t=Ie(i),s=e.query;let a=3;const c=t.queries.get(s);if(c){const h=c.Sa.indexOf(e);h>=0&&(c.Sa.splice(h,1),c.Sa.length===0?a=e.Da()?0:1:!c.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function cA(i,e){const t=Ie(i);let s=!1;for(const a of e){const c=a.query,h=t.queries.get(c);if(h){for(const m of h.Sa)m.Fa(a)&&(s=!0);h.wa=a}}s&&cf(t)}function hA(i,e,t){const s=Ie(i),a=s.queries.get(e);if(a)for(const c of a.Sa)c.onError(t);s.queries.delete(e)}function cf(i){i.Ca.forEach((e=>{e.next()}))}var Sd,Qg;(Qg=Sd||(Sd={})).Ma="default",Qg.Cache="cache";class ov{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new _o(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=_o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Sd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.key=e}}class lv{constructor(e){this.key=e}}class dA{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ne(),this.mutatedKeys=Ne(),this.eu=A_(e),this.tu=new uo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Gg,a=t?t.tu:this.tu;let c=t?t.mutatedKeys:this.mutatedKeys,h=a,m=!1;const y=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,v=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((E,C)=>{const D=a.get(E),j=lc(this.query,C)?C:null,Z=!!D&&this.mutatedKeys.has(D.key),J=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let G=!1;D&&j?D.data.isEqual(j.data)?Z!==J&&(s.track({type:3,doc:j}),G=!0):this.su(D,j)||(s.track({type:2,doc:j}),G=!0,(y&&this.eu(j,y)>0||v&&this.eu(j,v)<0)&&(m=!0)):!D&&j?(s.track({type:0,doc:j}),G=!0):D&&!j&&(s.track({type:1,doc:D}),G=!0,(y||v)&&(m=!0)),G&&(j?(h=h.add(j),c=J?c.add(E):c.delete(E)):(h=h.delete(E),c=c.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),c=c.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Cs:m,mutatedKeys:c}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const c=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,C)=>(function(j,Z){const J=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{Rt:G})}};return J(j)-J(Z)})(E.type,C.type)||this.eu(E.doc,C.doc))),this.ou(s),a=a??!1;const m=t&&!a?this._u():[],y=this.Xa.size===0&&this.current&&!a?1:0,v=y!==this.Za;return this.Za=y,h.length!==0||v?{snapshot:new _o(this.query,e.tu,c,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Gg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ne(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new lv(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new av(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return _o.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const hf="SyncEngine";class fA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class pA{constructor(e){this.key=e,this.hu=!1}}class mA{constructor(e,t,s,a,c,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=c,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new cs((m=>S_(m)),ac),this.Iu=new Map,this.Eu=new Set,this.du=new tt(fe.comparator),this.Au=new Map,this.Ru=new Zd,this.Vu={},this.mu=new Map,this.fu=yo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function gA(i,e,t=!0){const s=pv(i);let a;const c=s.Tu.get(e);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),a=c.view.lu()):a=await uv(s,e,t,!0),a}async function yA(i,e){const t=pv(i);await uv(t,e,!0,!1)}async function uv(i,e,t,s){const a=await bS(i.localStore,Yn(e)),c=a.targetId,h=i.sharedClientState.addLocalQueryTarget(c,t);let m;return s&&(m=await _A(i,e,c,h==="current",a.resumeToken)),i.isPrimaryClient&&t&&J_(i.remoteStore,a),m}async function _A(i,e,t,s,a){i.pu=(C,D,j)=>(async function(J,G,me,ce){let ve=G.view.ru(me);ve.Cs&&(ve=await zg(J.localStore,G.query,!1).then((({documents:P})=>G.view.ru(P,ve))));const Oe=ce&&ce.targetChanges.get(G.targetId),Be=ce&&ce.targetMismatches.get(G.targetId)!=null,we=G.view.applyChanges(ve,J.isPrimaryClient,Oe,Be);return Yg(J,G.targetId,we.au),we.snapshot})(i,C,D,j);const c=await zg(i.localStore,e,!0),h=new dA(e,c.Qs),m=h.ru(c.documents),y=Xa.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),v=h.applyChanges(m,i.isPrimaryClient,y);Yg(i,t,v.au);const E=new fA(e,t,h);return i.Tu.set(e,E),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),v.snapshot}async function vA(i,e,t){const s=Ie(i),a=s.Tu.get(e),c=s.Iu.get(a.targetId);if(c.length>1)return s.Iu.set(a.targetId,c.filter((h=>!ac(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Td(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&rf(s.remoteStore,a.targetId),Ad(s,a.targetId)})).catch(So)):(Ad(s,a.targetId),await Td(s.localStore,a.targetId,!0))}async function wA(i,e){const t=Ie(i),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),rf(t.remoteStore,s.targetId))}async function EA(i,e,t){const s=RA(i);try{const a=await(function(h,m){const y=Ie(h),v=Xe.now(),E=m.reduce(((j,Z)=>j.add(Z.key)),Ne());let C,D;return y.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let Z=Nr(),J=Ne();return y.Ns.getEntries(j,E).next((G=>{Z=G,Z.forEach(((me,ce)=>{ce.isValidDocument()||(J=J.add(me))}))})).next((()=>y.localDocuments.getOverlayedDocuments(j,Z))).next((G=>{C=G;const me=[];for(const ce of m){const ve=L1(ce,C.get(ce.key).overlayedDocument);ve!=null&&me.push(new hs(ce.key,ve,y_(ve.value.mapValue),Jn.exists(!0)))}return y.mutationQueue.addMutationBatch(j,v,me,m)})).next((G=>{D=G;const me=G.applyToLocalDocumentSet(C,J);return y.documentOverlayCache.saveOverlays(j,G.batchId,me)}))})).then((()=>({batchId:D.batchId,changes:k_(C)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(h,m,y){let v=h.Vu[h.currentUser.toKey()];v||(v=new tt(xe)),v=v.insert(m,y),h.Vu[h.currentUser.toKey()]=v})(s,a.batchId,t),await Ja(s,a.changes),await pc(s.remoteStore)}catch(a){const c=uf(a,"Failed to persist write");t.reject(c)}}async function cv(i,e){const t=Ie(i);try{const s=await OS(t.localStore,e);e.targetChanges.forEach(((a,c)=>{const h=t.Au.get(c);h&&(je(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?h.hu=!0:a.modifiedDocuments.size>0?je(h.hu,14607):a.removedDocuments.size>0&&(je(h.hu,42227),h.hu=!1))})),await Ja(t,s,e)}catch(s){await So(s)}}function Xg(i,e,t){const s=Ie(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((c,h)=>{const m=h.view.va(e);m.snapshot&&a.push(m.snapshot)})),(function(h,m){const y=Ie(h);y.onlineState=m;let v=!1;y.queries.forEach(((E,C)=>{for(const D of C.Sa)D.va(m)&&(v=!0)})),v&&cf(y)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function TA(i,e,t){const s=Ie(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),c=a&&a.key;if(c){let h=new tt(fe.comparator);h=h.insert(c,Ft.newNoDocument(c,_e.min()));const m=Ne().add(c),y=new hc(_e.min(),new Map,new tt(xe),h,m);await cv(s,y),s.du=s.du.remove(c),s.Au.delete(e),df(s)}else await Td(s.localStore,e,!1).then((()=>Ad(s,e,t))).catch(So)}async function IA(i,e){const t=Ie(i),s=e.batch.batchId;try{const a=await VS(t.localStore,e);dv(t,s,null),hv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ja(t,a)}catch(a){await So(a)}}async function SA(i,e,t){const s=Ie(i);try{const a=await(function(h,m){const y=Ie(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let E;return y.mutationQueue.lookupMutationBatch(v,m).next((C=>(je(C!==null,37113),E=C.keys(),y.mutationQueue.removeMutationBatch(v,C)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,E,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E))).next((()=>y.localDocuments.getDocuments(v,E)))}))})(s.localStore,e);dv(s,e,t),hv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ja(s,a)}catch(a){await So(a)}}function hv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function dv(i,e,t){const s=Ie(i);let a=s.Vu[s.currentUser.toKey()];if(a){const c=a.get(e);c&&(t?c.reject(t):c.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function Ad(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||fv(i,s)}))}function fv(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(rf(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),df(i))}function Yg(i,e,t){for(const s of t)s instanceof av?(i.Ru.addReference(s.key,e),AA(i,s)):s instanceof lv?(ne(hf,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||fv(i,s.key)):pe(19791,{wu:s})}function AA(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(ne(hf,"New document in limbo: "+t),i.Eu.add(s),df(i))}function df(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new fe(et.fromString(e)),s=i.fu.next();i.Au.set(s,new pA(t)),i.du=i.du.insert(t,s),J_(i.remoteStore,new pi(Yn(oc(t.path)),s,"TargetPurposeLimboResolution",nc.ce))}}async function Ja(i,e,t){const s=Ie(i),a=[],c=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((v=>{if((v||t)&&s.isPrimaryClient){const E=v?!v.fromCache:t?.targetChanges.get(y.targetId)?.current;s.sharedClientState.updateQueryState(y.targetId,E?"current":"not-current")}if(v){a.push(v);const E=tf.As(y.targetId,v);c.push(E)}})))})),await Promise.all(h),s.Pu.H_(a),await(async function(y,v){const E=Ie(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(C=>B.forEach(v,(D=>B.forEach(D.Es,(j=>E.persistence.referenceDelegate.addReference(C,D.targetId,j))).next((()=>B.forEach(D.ds,(j=>E.persistence.referenceDelegate.removeReference(C,D.targetId,j)))))))))}catch(C){if(!Ao(C))throw C;ne(nf,"Failed to update sequence numbers: "+C)}for(const C of v){const D=C.targetId;if(!C.fromCache){const j=E.Ms.get(D),Z=j.snapshotVersion,J=j.withLastLimboFreeSnapshotVersion(Z);E.Ms=E.Ms.insert(D,J)}}})(s.localStore,c))}async function CA(i,e){const t=Ie(i);if(!t.currentUser.isEqual(e)){ne(hf,"User change. New user:",e.toKey());const s=await K_(t.localStore,e);t.currentUser=e,(function(c,h){c.mu.forEach((m=>{m.forEach((y=>{y.reject(new ue(q.CANCELLED,h))}))})),c.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ja(t,s.Ls)}}function kA(i,e){const t=Ie(i),s=t.Au.get(e);if(s&&s.hu)return Ne().add(s.key);{let a=Ne();const c=t.Iu.get(e);if(!c)return a;for(const h of c){const m=t.Tu.get(h);a=a.unionWith(m.view.nu)}return a}}function pv(i){const e=Ie(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=cv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TA.bind(null,e),e.Pu.H_=cA.bind(null,e.eventManager),e.Pu.yu=hA.bind(null,e.eventManager),e}function RA(i){const e=Ie(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SA.bind(null,e),e}class Yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return DS(this.persistence,new PS,e.initialUser,this.serializer)}Cu(e){return new G_(ef.mi,this.serializer)}Du(e){return new US}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yu.provider={build:()=>new Yu};class PA extends Yu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){je(this.persistence.referenceDelegate instanceof Qu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new pS(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new G_((s=>Qu.mi(s,t)),this.serializer)}}class Cd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=CA.bind(null,this.syncEngine),await aA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new uA})()}createDatastore(e){const t=dc(e.databaseInfo.databaseId),s=(function(c){return new HS(c)})(e.databaseInfo);return(function(c,h,m,y){return new KS(c,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,c,h,m){return new XS(s,a,c,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>Xg(this.syncEngine,t,0)),(function(){return Hg.v()?new Hg:new jS})())}createSyncEngine(e,t){return(function(a,c,h,m,y,v,E){const C=new mA(a,c,h,m,y,v);return E&&(C.gu=!0),C})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Ie(t);ne(as,"RemoteStore shutting down."),s.Ea.add(5),await Ya(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Cd.provider={build:()=>new Cd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="FirestoreClient";class xA{constructor(e,t,s,a,c){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=bt.UNAUTHENTICATED,this.clientId=zd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,(async h=>{ne(Ai,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Ai,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=uf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function nd(i,e){i.asyncQueue.verifyOperationInProgress(),ne(Ai,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async a=>{s.isEqual(a)||(await K_(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function Jg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await NA(i);ne(Ai,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>Wg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,a)=>Wg(e.remoteStore,a))),i._onlineComponents=e}async function NA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne(Ai,"Using user provided OfflineComponentProvider");try{await nd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===q.FAILED_PRECONDITION||a.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;fo("Error using user provided cache. Falling back to memory cache: "+t),await nd(i,new Yu)}}else ne(Ai,"Using default OfflineComponentProvider"),await nd(i,new PA(void 0));return i._offlineComponents}async function gv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne(Ai,"Using user provided OnlineComponentProvider"),await Jg(i,i._uninitializedComponentsProvider._online)):(ne(Ai,"Using default OnlineComponentProvider"),await Jg(i,new Cd))),i._onlineComponents}function DA(i){return gv(i).then((e=>e.syncEngine))}async function kd(i){const e=await gv(i),t=e.eventManager;return t.onListen=gA.bind(null,e.syncEngine),t.onUnlisten=vA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=wA.bind(null,e.syncEngine),t}function VA(i,e,t={}){const s=new vi;return i.asyncQueue.enqueueAndForget((async()=>(function(c,h,m,y,v){const E=new mv({next:D=>{E.Nu(),h.enqueueAndForget((()=>sv(c,C)));const j=D.docs.has(m);!j&&D.fromCache?v.reject(new ue(q.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&D.fromCache&&y&&y.source==="server"?v.reject(new ue(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(D)},error:D=>v.reject(D)}),C=new ov(oc(m.path),E,{includeMetadataChanges:!0,qa:!0});return iv(c,C)})(await kd(i),i.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="firestore.googleapis.com",ey=!0;class ty{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ue(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_v,this.ssl=ey}else this.host=e.host,this.ssl=e.ssl??ey;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=W_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dS)throw new ue(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ue(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ue(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ue(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ff{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ty({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ty(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new FI;switch(s.type){case"firstParty":return new BI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Zg.get(t);s&&(ne("ComponentProvider","Removing Datastore"),Zg.delete(t),s.terminate())})(this),Promise.resolve()}}function OA(i,e,t,s={}){i=Ar(i,ff);const a=wo(e),c=i._getSettings(),h={...c,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;a&&(py(`https://${m}`),my("Firestore",!0)),c.host!==_v&&c.host!==m&&fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...c,host:m,ssl:a,emulatorOptions:s};if(!rs(y,h)&&(i._setSettings(y),s.mockUserToken)){let v,E;if(typeof s.mockUserToken=="string")v=s.mockUserToken,E=bt.MOCK_USER;else{v=aw(s.mockUserToken,i._app?.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ue(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new bt(C)}i._authCredentials=new UI(new o_(v,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new mc(this.firestore,e,this._query)}}class _t{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ja(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}toJSON(){return{type:_t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ka(t,_t._jsonSchema))return new _t(e,s||null,new fe(et.fromString(t.referencePath)))}}_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:ft("string",_t._jsonSchemaVersion),referencePath:ft("string")};class ja extends mc{constructor(e,t,s){super(e,t,oc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new fe(e))}withConverter(e){return new ja(this.firestore,e,this._path)}}function Eu(i,e,...t){if(i=yn(i),arguments.length===1&&(e=zd.newId()),KI("doc","path",e),i instanceof ff){const s=et.fromString(e,...t);return mg(s),new _t(i,null,new fe(s))}{if(!(i instanceof _t||i instanceof ja))throw new ue(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(et.fromString(e,...t));return mg(s),new _t(i.firestore,i instanceof ja?i.converter:null,new fe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="AsyncQueue";class ry{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new X_(this,"async_queue_retry"),this._c=()=>{const s=td();s&&ne(ny,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=td();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=td();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new vi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ao(e))throw e;ne(ny,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,xr("INTERNAL UNHANDLED ERROR: ",iy(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=lf.createAndSchedule(this,e,t,s,(c=>this.hc(c)));return this.tc.push(a),a}uc(){this.nc&&pe(47125,{Pc:iy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function iy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const c of s)if(c in a&&typeof a[c]=="function")return!0;return!1})(i,["next","error","complete"])}class vo extends ff{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new ry,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ry(e),this._firestoreClient=void 0,await e}}}function MA(i,e){const t=typeof i=="object"?i:vy(),s=typeof i=="string"?i:Bu,a=Nd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const c=sw("firestore");c&&OA(a,...c)}return a}function pf(i){if(i._terminated)throw new ue(q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||LA(i),i._firestoreClient}function LA(i){const e=i._freezeSettings(),t=(function(a,c,h,m){return new o1(a,c,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,yv(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(i._databaseId,i._app?.options.appId||"",i._persistenceKey,e);i._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new xA(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(a){const c=a?._online.build();return{_offline:a?._offline.build(c),_online:c}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gn(xt.fromBase64String(e))}catch(t){throw new ue(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new gn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:gn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ka(e,gn._jsonSchema))return gn.fromBase64String(e.bytes)}}gn._jsonSchemaVersion="firestore/bytes/1.0",gn._jsonSchema={type:ft("string",gn._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:er._jsonSchemaVersion}}static fromJSON(e){if(Ka(e,er._jsonSchema))return new er(e.latitude,e.longitude)}}er._jsonSchemaVersion="firestore/geoPoint/1.0",er._jsonSchema={type:ft("string",er._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==a[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:tr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ka(e,tr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new tr(e.vectorValues);throw new ue(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tr._jsonSchemaVersion="firestore/vectorValue/1.0",tr._jsonSchema={type:ft("string",tr._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=/^__.*__$/;class FA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new hs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qa(e,this.data,t,this.fieldTransforms)}}function wv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{Ac:i})}}class gf{constructor(e,t,s,a,c,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new gf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ju(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(wv(this.Ac)&&bA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class UA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||dc(e)}Cc(e,t,s,a=!1){return new gf({Ac:e,methodName:t,Dc:s,path:Pt.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jA(i){const e=i._freezeSettings(),t=dc(i._databaseId);return new UA(i._databaseId,!!e.ignoreUndefinedProperties,t)}function zA(i,e,t,s,a,c={}){const h=i.Cc(c.merge||c.mergeFields?2:0,e,t,a);Sv("Data must be an object, but it was:",h,s);const m=Tv(s,h);let y,v;if(c.merge)y=new Pn(h.fieldMask),v=h.fieldTransforms;else if(c.mergeFields){const E=[];for(const C of c.mergeFields){const D=BA(e,C,t);if(!h.contains(D))throw new ue(q.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);HA(E,D)||E.push(D)}y=new Pn(E),v=h.fieldTransforms.filter((C=>y.covers(C.field)))}else y=null,v=h.fieldTransforms;return new FA(new mn(m),y,v)}function Ev(i,e){if(Iv(i=yn(i)))return Sv("Unsupported field value:",e,i),Tv(i,e);if(i instanceof vv)return(function(s,a){if(!wv(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(a);c&&a.fieldTransforms.push(c)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const c=[];let h=0;for(const m of s){let y=Ev(m,a.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),c.push(y),h++}return{arrayValue:{values:c}}})(i,e)}return(function(s,a){if((s=yn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return x1(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=Xe.fromDate(s);return{timestampValue:Ku(a.serializer,c)}}if(s instanceof Xe){const c=new Xe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ku(a.serializer,c)}}if(s instanceof er)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof gn)return{bytesValue:U_(a.serializer,s._byteString)};if(s instanceof _t){const c=a.databaseId,h=s.firestore._databaseId;if(!h.isEqual(c))throw a.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Jd(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof tr)return(function(h,m){return{mapValue:{fields:{[m_]:{stringValue:g_},[$u]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw m.Sc("VectorValues must only contain numeric values.");return Kd(m.serializer,v)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${Bd(s)}`)})(i,e)}function Tv(i,e){const t={};return u_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(i,((s,a)=>{const c=Ev(a,e.mc(s));c!=null&&(t[s]=c)})),{mapValue:{fields:t}}}function Iv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Xe||i instanceof er||i instanceof gn||i instanceof _t||i instanceof vv||i instanceof tr)}function Sv(i,e,t){if(!Iv(t)||!a_(t)){const s=Bd(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function BA(i,e,t){if((e=yn(e))instanceof mf)return e._internalPath;if(typeof e=="string")return Av(i,e);throw Ju("Field path arguments must be of type string or ",i,!1,void 0,t)}const $A=new RegExp("[~\\*/\\[\\]]");function Av(i,e,t){if(e.search($A)>=0)throw Ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new mf(...e.split("."))._internalPath}catch{throw Ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Ju(i,e,t,s,a){const c=s&&!s.isEmpty(),h=a!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(c||h)&&(y+=" (found",c&&(y+=` in field ${s}`),h&&(y+=` in document ${a}`),y+=")"),new ue(q.INVALID_ARGUMENT,m+i+y)}function HA(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t,s,a,c){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(kv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qA extends Cv{data(){return super.data()}}function kv(i,e){return typeof e=="string"?Av(i,e):e instanceof mf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ue(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class GA{convertValue(e,t="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return us(e,((a,c)=>{s[a]=this.convertValue(c,t)})),s}convertVectorValue(e){const t=e.fields?.[$u].arrayValue?.values?.map((s=>at(s.doubleValue)));return new tr(t)}convertGeoPoint(e){return new er(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ic(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ma(e));default:return null}}convertTimestamp(e){const t=Ei(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=et.fromString(e);je(q_(s),9688,{name:e});const a=new La(s.get(1),s.get(3)),c=new fe(s.popFirst(5));return a.isEqual(t)||xr(`Document ${c} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Aa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ns extends Cv{constructor(e,t,s,a,c,h){super(e,t,s,a,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(kv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ns._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ns._jsonSchemaVersion="firestore/documentSnapshot/1.0",ns._jsonSchema={type:ft("string",ns._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Du extends ns{data(e={}){return super.data(e)}}class co{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Aa(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Du(this._firestore,this._userDataWriter,s.key,s,new Aa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,c){if(a._snapshot.oldDocs.isEmpty()){let h=0;return a._snapshot.docChanges.map((m=>{const y=new Du(a._firestore,a._userDataWriter,m.doc.key,m.doc,new Aa(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((m=>c||m.type!==3)).map((m=>{const y=new Du(a._firestore,a._userDataWriter,m.doc.key,m.doc,new Aa(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);let v=-1,E=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:QA(m.type),doc:y,oldIndex:v,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=co._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=zd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((c=>{c._document!==null&&(t.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),a.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function QA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(i){i=Ar(i,_t);const e=Ar(i.firestore,vo);return VA(pf(e),i._key).then((t=>xv(e,i,t)))}co._jsonSchemaVersion="firestore/querySnapshot/1.0",co._jsonSchema={type:ft("string",co._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class Rv extends GA{constructor(e){super(),this.firestore=e}convertBytes(e){return new gn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,t)}}function YA(i,e,t){i=Ar(i,_t);const s=Ar(i.firestore,vo),a=KA(i.converter,e);return Pv(s,[zA(jA(s),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,Jn.none())])}function oy(i){return Pv(Ar(i.firestore,vo),[new Qd(i._key,Jn.none())])}function JA(i,...e){i=yn(i);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||sy(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(sy(e[s])){const y=e[s];e[s]=y.next?.bind(y),e[s+1]=y.error?.bind(y),e[s+2]=y.complete?.bind(y)}let c,h,m;if(i instanceof _t)h=Ar(i.firestore,vo),m=oc(i._key.path),c={next:y=>{e[s]&&e[s](xv(h,i,y))},error:e[s+1],complete:e[s+2]};else{const y=Ar(i,mc);h=Ar(y.firestore,vo),m=y._query;const v=new Rv(h);c={next:E=>{e[s]&&e[s](new co(h,v,y,E))},error:e[s+1],complete:e[s+2]},WA(i._query)}return(function(v,E,C,D){const j=new mv(D),Z=new ov(E,j,C);return v.asyncQueue.enqueueAndForget((async()=>iv(await kd(v),Z))),()=>{j.Nu(),v.asyncQueue.enqueueAndForget((async()=>sv(await kd(v),Z)))}})(pf(h),m,a,c)}function Pv(i,e){return(function(s,a){const c=new vi;return s.asyncQueue.enqueueAndForget((async()=>EA(await DA(s),a,c))),c.promise})(pf(i),e)}function xv(i,e,t){const s=t.docs.get(e._key),a=new Rv(i);return new ns(i,a,e._key,s,new Aa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){Io=a})(Eo),ho(new is("firestore",((s,{instanceIdentifier:a,options:c})=>{const h=s.getProvider("app").getImmediate(),m=new vo(new jI(s.getProvider("auth-internal")),new $I(h,s.getProvider("app-check-internal")),(function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ue(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new La(v.options.projectId,E)})(h,a),h);return c={useFetchStreams:t,...c},m._setSettings(c),m}),"PUBLIC").setMultipleInstances(!0)),yi(hg,dg,e),yi(hg,dg,"esm2020")})();const Tu=typeof __app_id<"u"?__app_id:"default-app-id",ZA=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{},ay=typeof __initial_auth_token<"u"?__initial_auth_token:null,eC=({timeInSeconds:i})=>{const e=Math.floor(i/60),t=i%60,s=`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`,a=i<=60;return z.jsx("div",{className:"flex items-center justify-center p-2 rounded-full bg-white/70 backdrop-blur-sm shadow-inner transition-colors duration-500",children:z.jsx("div",{className:`font-bold text-lg tracking-wide ${a?"text-rose-500 animate-pulse":"text-gray-700"}`,children:s})})};function tC(){const[i,e]=gt.useState("home"),[t,s]=gt.useState(!1),[a,c]=gt.useState(null),[h,m]=gt.useState(null),[y,v]=gt.useState(null),[E,C]=gt.useState(!1),[D,j]=gt.useState(null),[Z,J]=gt.useState(""),[G,me]=gt.useState(null),[ce,ve]=gt.useState(null),[Oe,Be]=gt.useState(null),[we,P]=gt.useState(null);gt.useEffect(()=>{try{const oe=_y(ZA),Ee=LI(oe),Q=MA(oe);me(oe),Be(Ee),ve(Q),AT(Ee,async re=>{re?P(re.uid):ay?await TT(Ee,ay):await yT(Ee)})}catch(oe){console.error("Error initializing Firebase:",oe)}},[]),gt.useEffect(()=>{let oe;return E&&y>0?oe=setInterval(()=>{v(Ee=>Ee-1)},1e3):y===0&&(C(!1),j({type:"error",text:"Time's up! Mission failed. 💔"}),h&&ce&&we&&oy(Eu(ce,"artifacts",Tu,"public","data","missions",we)).catch(console.error)),()=>clearInterval(oe)},[E,y,h,ce,we]),gt.useEffect(()=>{if(ce&&we){const oe=Eu(ce,"artifacts",Tu,"public","data","missions",we),Ee=JA(oe,Q=>{if(Q.exists()){const re=Q.data();m(re);const te=(Date.now()-re.startTime)/1e3,V=Math.max(0,300-Math.floor(te));v(V),C(!0)}else m(null),v(null),C(!1)},Q=>{console.error("Error listening to mission document:",Q)});return()=>Ee()}},[ce,we]);const I=async oe=>{if(!ce||!Z){j({type:"error",text:"Please enter your partner's ID."});return}const Ee=Eu(ce,"artifacts",Tu,"public","data","missions",Z);if((await XA(Ee)).exists()){j({type:"error",text:"Partner already has an active mission!"});return}try{await YA(Ee,{missionName:oe.name,missionPrice:oe.price,startTime:Date.now(),isCompleted:!1}),j({type:"success",text:`Mission "${oe.name}" sent to your partner!`})}catch(re){console.error("Error sending mission:",re),j({type:"error",text:"Failed to send mission. Please try again."})}c(null)},A=async()=>{if(ce&&we)try{await oy(Eu(ce,"artifacts",Tu,"public","data","missions",we)),j({type:"success",text:"Mission completed! Great job! 💕"}),m(null)}catch(oe){console.error("Error completing mission:",oe),j({type:"error",text:"Failed to complete mission. Please try again."})}},N=[{id:1,name:"A Kiss",description:"A sweet, tender kiss whenever you need one",icon:Zi,price:"Tell me a joke",color:"from-pink-200 to-rose-300"},{id:2,name:"A Hug",description:"A warm, cozy hug that melts all worries away",icon:Hh,price:"Do 5 push-ups",color:"from-purple-200 to-pink-300"},{id:3,name:"A Refreshing Drink",description:"Water, juice, or your favorite beverage delivered with love",icon:K0,price:"10 KISSES ON THE FACE",color:"from-blue-200 to-cyan-300"},{id:4,name:"SWALE7",description:"U KNOW WHAT IT IS",icon:Om,price:"Cook me my meals for today",color:"from-green-200 to-emerald-300"}],R=[{id:1,name:"Sweet Serenade",description:"A beautiful song sung just for you",icon:Zi,price:"Write me a love note",color:"from-rose-200 to-pink-300"},{id:2,name:"Massage Magic",description:"Relaxing shoulder and back massage",icon:Hh,price:"Plan our next adventure",color:"from-lavender-200 to-purple-300"},{id:3,name:"Homemade Delight",description:"Your favorite snack made with extra love",icon:Q0,price:"Do 20 jumping jacks",color:"from-amber-200 to-yellow-300"},{id:4,name:"Dance Partner",description:"A silly dance session in the living room",icon:Om,price:"Surprise me with flowers",color:"from-teal-200 to-cyan-300"}],O=({service:oe,onOrder:Ee})=>{const Q=oe.icon;return z.jsxs("div",{className:`bg-gradient-to-br ${oe.color} rounded-3xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`,onClick:()=>Ee(oe),children:[z.jsxs("div",{className:"text-center mb-4",children:[z.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md",children:z.jsx(Q,{className:"w-8 h-8 text-gray-700"})}),z.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-2",children:oe.name}),z.jsx("p",{className:"text-gray-600 text-sm leading-relaxed",children:oe.description})]}),z.jsxs("div",{className:"bg-white/70 rounded-2xl p-4 backdrop-blur-sm",children:[z.jsxs("div",{className:"text-center",children:[z.jsx("p",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1",children:"Price"}),z.jsx("p",{className:"text-sm font-bold text-gray-800",children:oe.price})]}),z.jsx("button",{className:"w-full mt-3 bg-white/90 hover:bg-white text-gray-800 font-bold py-2 px-4 rounded-xl transition-colors duration-200 shadow-sm hover:shadow-md",children:"Order Now ♡"})]})]})},S=({service:oe,onClose:Ee,onAccept:Q})=>{if(!oe)return null;const re=oe.icon;return z.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:z.jsx("div",{className:"bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform animate-in",children:z.jsxs("div",{className:"text-center",children:[z.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center mx-auto mb-4",children:z.jsx(re,{className:"w-10 h-10 text-gray-700"})}),z.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:oe.name}),z.jsx("p",{className:"text-gray-600 mb-6",children:oe.description}),z.jsxs("div",{className:"bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-6",children:[z.jsx("h3",{className:"text-lg font-bold text-gray-800 mb-2",children:"Your Mission:"}),z.jsx("p",{className:"text-gray-700 font-medium",children:oe.price})]}),z.jsxs("div",{className:"flex gap-3",children:[z.jsx("button",{onClick:Ee,className:"flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-2xl transition-colors duration-200",children:"Maybe Later"}),z.jsx("button",{onClick:()=>Q(oe),className:"flex-1 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl",children:"Accept Mission!"})]})]})})})},$e=({mission:oe,onComplete:Ee})=>oe?z.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:z.jsx("div",{className:"bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform animate-in",children:z.jsxs("div",{className:"text-center",children:[z.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center mx-auto mb-4",children:z.jsx(Zi,{className:"w-10 h-10 text-gray-700"})}),z.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"New Mission!"}),z.jsx("p",{className:"text-gray-600 mb-6",children:"Your partner has sent you a request."}),z.jsxs("div",{className:"bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-6",children:[z.jsx("h3",{className:"text-lg font-bold text-gray-800 mb-2",children:"The Mission:"}),z.jsx("p",{className:"text-gray-700 font-medium text-lg mb-4",children:oe.missionPrice}),E&&z.jsx(eC,{timeInSeconds:y})]}),z.jsx("button",{onClick:Ee,className:"w-full bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl",children:"Mission Complete!"})]})})}):null,lt=({message:oe,onClose:Ee})=>{if(!oe)return null;const Q=oe.type==="success"?"bg-emerald-100 text-emerald-800":"bg-rose-100 text-rose-800",re=oe.type==="success"?"text-emerald-800 hover:bg-emerald-200":"text-rose-800 hover:bg-rose-200";return z.jsxs("div",{className:`fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-sm md:max-w-md lg:max-w-lg p-4 rounded-xl shadow-lg flex items-center justify-between z-50 animate-in fade-in slide-in-from-top-4 ${Q}`,children:[z.jsx("p",{className:"text-sm font-medium",children:oe.text}),z.jsx("button",{onClick:Ee,className:`p-1 rounded-full ${re}`,children:z.jsx(Mm,{className:"w-5 h-5"})})]})};return z.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50",children:[z.jsx(lt,{message:D,onClose:()=>j(null)}),z.jsx("header",{className:"bg-white/80 backdrop-blur-md border-b border-pink-100 sticky top-0 z-40",children:z.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-4",children:[z.jsxs("div",{className:"flex items-center justify-between",children:[z.jsxs("div",{className:"flex items-center gap-3",children:[z.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center",children:z.jsx(Zi,{className:"w-6 h-6 text-white"})}),z.jsx("h1",{className:"text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent",children:"The Love Bank"})]}),z.jsxs("div",{className:"flex items-center gap-4",children:[z.jsxs("nav",{className:"hidden md:flex items-center gap-6",children:[z.jsx("button",{onClick:()=>e("home"),className:`px-4 py-2 rounded-full font-medium transition-all duration-200 ${i==="home"?"bg-pink-200 text-pink-800":"text-gray-600 hover:text-pink-600 hover:bg-pink-50"}`,children:"Home"}),z.jsx("button",{onClick:()=>e("for-her"),className:`px-4 py-2 rounded-full font-medium transition-all duration-200 ${i==="for-her"?"bg-pink-200 text-pink-800":"text-gray-600 hover:text-pink-600 hover:bg-pink-50"}`,children:"For Her ♡"}),z.jsx("button",{onClick:()=>e("for-him"),className:`px-4 py-2 rounded-full font-medium transition-all duration-200 ${i==="for-him"?"bg-purple-200 text-purple-800":"text-gray-600 hover:text-purple-600 hover:bg-purple-50"}`,children:"For Him ♡"})]}),z.jsx("button",{onClick:()=>s(!t),className:"md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors duration-200",children:t?z.jsx(Mm,{className:"w-6 h-6"}):z.jsx(X0,{className:"w-6 h-6"})})]})]}),t&&z.jsx("nav",{className:"md:hidden mt-4 pb-4 border-t border-pink-100 pt-4",children:z.jsxs("div",{className:"flex flex-col gap-2",children:[z.jsx("button",{onClick:()=>{e("home"),s(!1)},className:`px-4 py-2 rounded-full font-medium transition-all duration-200 text-left ${i==="home"?"bg-pink-200 text-pink-800":"text-gray-600 hover:text-pink-600 hover:bg-pink-50"}`,children:"Home"}),z.jsx("button",{onClick:()=>{e("for-her"),s(!1)},className:`px-4 py-2 rounded-full font-medium transition-all duration-200 text-left ${i==="for-her"?"bg-pink-200 text-pink-800":"text-gray-600 hover:text-pink-600 hover:bg-pink-50"}`,children:"For Her ♡"}),z.jsx("button",{onClick:()=>{e("for-him"),s(!1)},className:`px-4 py-2 rounded-full font-medium transition-all duration-200 text-left ${i==="for-him"?"bg-purple-200 text-purple-800":"text-gray-600 hover:text-purple-600 hover:bg-purple-50"}`,children:"For Him ♡"})]})})]})}),z.jsxs("main",{className:"max-w-6xl mx-auto px-4 py-8",children:[z.jsxs("div",{className:"bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md mb-8 text-center",children:[z.jsx("p",{className:"text-gray-700 font-bold mb-2",children:"Your User ID:"}),z.jsx("p",{className:"font-mono text-xs md:text-sm bg-gray-100 p-2 rounded-lg break-all",children:we||"Loading..."}),z.jsx("p",{className:"text-gray-500 text-xs mt-2",children:"Share this with your partner to send them a mission!"}),z.jsx("div",{className:"flex flex-col md:flex-row items-center gap-4 mt-4",children:z.jsx("input",{type:"text",className:"w-full p-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-200",placeholder:"Enter your partner's ID here...",value:Z,onChange:oe=>J(oe.target.value)})})]}),i==="home"&&z.jsxs("div",{className:"text-center",children:[z.jsxs("div",{className:"mb-12",children:[z.jsx("h2",{className:"text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6",children:"Welcome to The Love Bank"}),z.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed",children:"A whimsical place where love is the only currency and sweet gestures are always in stock! Exchange loving services with fun challenges instead of money."})]}),z.jsxs("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:[z.jsxs("div",{onClick:()=>e("for-her"),className:"bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl p-8 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300",children:[z.jsx("div",{className:"w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg",children:z.jsx(Zi,{className:"w-10 h-10 text-pink-600"})}),z.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Services for Her"}),z.jsx("p",{className:"text-gray-600 mb-6",children:"Browse all the wonderful services she can request from you!"}),z.jsx("div",{className:"bg-white/70 rounded-2xl px-4 py-2 inline-block",children:z.jsx("span",{className:"text-sm font-bold text-gray-700",children:"Click to explore ♡"})})]}),z.jsxs("div",{onClick:()=>e("for-him"),className:"bg-gradient-to-br from-purple-200 to-blue-300 rounded-3xl p-8 cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300",children:[z.jsx("div",{className:"w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg",children:z.jsx(Hh,{className:"w-10 h-10 text-purple-600"})}),z.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Services for Him"}),z.jsx("p",{className:"text-gray-600 mb-6",children:"Discover all the amazing services you can request from her!"}),z.jsx("div",{className:"bg-white/70 rounded-2xl px-4 py-2 inline-block",children:z.jsx("span",{className:"text-sm font-bold text-gray-700",children:"Click to explore ♡"})})]})]})]}),i==="for-her"&&z.jsxs("div",{children:[z.jsxs("div",{className:"text-center mb-12",children:[z.jsx("h2",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4",children:"Services for Her"}),z.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Sweet gestures and loving moments, all available for the price of a fun challenge!"})]}),z.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:N.map(oe=>z.jsx(O,{service:oe,onOrder:c},oe.id))})]}),i==="for-him"&&z.jsxs("div",{children:[z.jsxs("div",{className:"text-center mb-12",children:[z.jsx("h2",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4",children:"Services for Him"}),z.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Wonderful experiences and thoughtful gestures, earned through your own special missions!"})]}),z.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:R.map(oe=>z.jsx(O,{service:oe,onOrder:c},oe.id))})]})]}),z.jsx("footer",{className:"bg-white/50 border-t border-pink-100 mt-16",children:z.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 text-center",children:[z.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[z.jsx(Zi,{className:"w-5 h-5 text-pink-500"}),z.jsx("span",{className:"text-gray-600",children:"Made with love for an amazing couple"}),z.jsx(Zi,{className:"w-5 h-5 text-pink-500"})]}),z.jsx("p",{className:"text-gray-500 text-sm",children:"Remember: The best currency is love, and the richest moments are shared together ♡"})]})}),z.jsx(S,{service:a,onClose:()=>c(null),onAccept:I}),z.jsx($e,{mission:h,onComplete:A})]})}q0.createRoot(document.getElementById("root")).render(z.jsx(gt.StrictMode,{children:z.jsx(tC,{})}));
