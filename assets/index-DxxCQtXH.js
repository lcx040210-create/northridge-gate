var Sv=Object.defineProperty;var Ev=(t,e,n)=>e in t?Sv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Li=(t,e,n)=>Ev(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Mv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _m={exports:{}},Ol={},xm={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),Tv=Symbol.for("react.portal"),wv=Symbol.for("react.fragment"),Av=Symbol.for("react.strict_mode"),Rv=Symbol.for("react.profiler"),Cv=Symbol.for("react.provider"),bv=Symbol.for("react.context"),Lv=Symbol.for("react.forward_ref"),Pv=Symbol.for("react.suspense"),Nv=Symbol.for("react.memo"),Dv=Symbol.for("react.lazy"),If=Symbol.iterator;function Iv(t){return t===null||typeof t!="object"?null:(t=If&&t[If]||t["@@iterator"],typeof t=="function"?t:null)}var ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sm=Object.assign,Em={};function Bs(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||ym}Bs.prototype.isReactComponent={};Bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mm(){}Mm.prototype=Bs.prototype;function yd(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||ym}var Sd=yd.prototype=new Mm;Sd.constructor=yd;Sm(Sd,Bs.prototype);Sd.isPureReactComponent=!0;var Uf=Array.isArray,Tm=Object.prototype.hasOwnProperty,Ed={current:null},wm={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tm.call(e,i)&&!wm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Vo,type:t,key:s,ref:o,props:r,_owner:Ed.current}}function Uv(t,e){return{$$typeof:Vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Md(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function Ov(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Of=/\/+/g;function oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ov(""+t.key):e.toString(36)}function Wa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vo:case Tv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+oc(o,0):i,Uf(r)?(n="",t!=null&&(n=t.replace(Of,"$&/")+"/"),Wa(r,e,n,"",function(c){return c})):r!=null&&(Md(r)&&(r=Uv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Of,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Uf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+oc(s,a);o+=Wa(s,e,n,l,r)}else if(l=Iv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+oc(s,a++),o+=Wa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ea(t,e,n){if(t==null)return t;var i=[],r=0;return Wa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Fv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},ja={transition:null},kv={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:ja,ReactCurrentOwner:Ed};function Rm(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:ea,forEach:function(t,e,n){ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ea(t,function(){e++}),e},toArray:function(t){return ea(t,function(e){return e})||[]},only:function(t){if(!Md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Bs;qe.Fragment=wv;qe.Profiler=Rv;qe.PureComponent=yd;qe.StrictMode=Av;qe.Suspense=Pv;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kv;qe.act=Rm;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Sm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ed.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tm.call(e,l)&&!wm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Vo,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:bv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cv,_context:t},t.Consumer=t};qe.createElement=Am;qe.createFactory=function(t){var e=Am.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:Lv,render:t}};qe.isValidElement=Md;qe.lazy=function(t){return{$$typeof:Dv,_payload:{_status:-1,_result:t},_init:Fv}};qe.memo=function(t,e){return{$$typeof:Nv,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=ja.transition;ja.transition={};try{t()}finally{ja.transition=e}};qe.unstable_act=Rm;qe.useCallback=function(t,e){return sn.current.useCallback(t,e)};qe.useContext=function(t){return sn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return sn.current.useEffect(t,e)};qe.useId=function(){return sn.current.useId()};qe.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return sn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};qe.useRef=function(t){return sn.current.useRef(t)};qe.useState=function(t){return sn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return sn.current.useTransition()};qe.version="18.3.1";xm.exports=qe;var pe=xm.exports;const zv=Mv(pe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv=pe,Hv=Symbol.for("react.element"),Gv=Symbol.for("react.fragment"),Vv=Object.prototype.hasOwnProperty,Wv=Bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jv={key:!0,ref:!0,__self:!0,__source:!0};function Cm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Vv.call(e,i)&&!jv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Hv,type:t,key:s,ref:o,props:r,_owner:Wv.current}}Ol.Fragment=Gv;Ol.jsx=Cm;Ol.jsxs=Cm;_m.exports=Ol;var w=_m.exports,mu={},bm={exports:{}},Tn={},Lm={exports:{}},Pm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,U){var k=N.length;N.push(U);e:for(;0<k;){var Z=k-1>>>1,Q=N[Z];if(0<r(Q,U))N[Z]=U,N[k]=Q,k=Z;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var U=N[0],k=N.pop();if(k!==U){N[0]=k;e:for(var Z=0,Q=N.length,V=Q>>>1;Z<V;){var K=2*(Z+1)-1,se=N[K],de=K+1,me=N[de];if(0>r(se,k))de<Q&&0>r(me,se)?(N[Z]=me,N[de]=k,Z=de):(N[Z]=se,N[K]=k,Z=K);else if(de<Q&&0>r(me,k))N[Z]=me,N[de]=k,Z=de;else break e}}return U}function r(N,U){var k=N.sortIndex-U.sortIndex;return k!==0?k:N.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,m=!1,x=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var U=n(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=N)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(c)}}function y(N){if(_=!1,g(N),!x)if(n(l)!==null)x=!0,X(b);else{var U=n(c);U!==null&&$(y,U.startTime-N)}}function b(N,U){x=!1,_&&(_=!1,u(D),D=-1),m=!0;var k=h;try{for(g(U),f=n(l);f!==null&&(!(f.expirationTime>U)||N&&!B());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,h=f.priorityLevel;var Q=Z(f.expirationTime<=U);U=t.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(l)&&i(l),g(U)}else i(l);f=n(l)}if(f!==null)var V=!0;else{var K=n(c);K!==null&&$(y,K.startTime-U),V=!1}return V}finally{f=null,h=k,m=!1}}var C=!1,A=null,D=-1,E=5,M=-1;function B(){return!(t.unstable_now()-M<E)}function q(){if(A!==null){var N=t.unstable_now();M=N;var U=!0;try{U=A(!0,N)}finally{U?J():(C=!1,A=null)}}else C=!1}var J;if(typeof v=="function")J=function(){v(q)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,F=P.port2;P.port1.onmessage=q,J=function(){F.postMessage(null)}}else J=function(){p(q,0)};function X(N){A=N,C||(C=!0,J())}function $(N,U){D=p(function(){N(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,X(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var k=h;h=U;try{return N()}finally{h=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,U){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=h;h=N;try{return U()}finally{h=k}},t.unstable_scheduleCallback=function(N,U,k){var Z=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?Z+k:Z):k=Z,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=k+Q,N={id:d++,callback:U,priorityLevel:N,startTime:k,expirationTime:Q,sortIndex:-1},k>Z?(N.sortIndex=k,e(c,N),n(l)===null&&N===n(c)&&(_?(u(D),D=-1):_=!0,$(y,k-Z))):(N.sortIndex=Q,e(l,N),x||m||(x=!0,X(b))),N},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(N){var U=h;return function(){var k=h;h=U;try{return N.apply(this,arguments)}finally{h=k}}}})(Pm);Lm.exports=Pm;var Xv=Lm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv=pe,Mn=Xv;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nm=new Set,Eo={};function zr(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(Eo[t]=e,t=0;t<e.length;t++)Nm.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=Object.prototype.hasOwnProperty,Yv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff={},kf={};function $v(t){return gu.call(kf,t)?!0:gu.call(Ff,t)?!1:Yv.test(t)?kf[t]=!0:(Ff[t]=!0,!1)}function Kv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Zv(t,e,n,i){if(e===null||typeof e>"u"||Kv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Td=/[\-:]([a-z])/g;function wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Td,wd);Gt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Td,wd);Gt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Td,wd);Gt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ad(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Zv(e,n,r,i)&&(n=null),i||r===null?$v(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var bi=qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=Symbol.for("react.element"),ss=Symbol.for("react.portal"),os=Symbol.for("react.fragment"),Rd=Symbol.for("react.strict_mode"),vu=Symbol.for("react.profiler"),Dm=Symbol.for("react.provider"),Im=Symbol.for("react.context"),Cd=Symbol.for("react.forward_ref"),_u=Symbol.for("react.suspense"),xu=Symbol.for("react.suspense_list"),bd=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),Um=Symbol.for("react.offscreen"),zf=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=zf&&t[zf]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,ac;function ao(t){if(ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ac=e&&e[1]||""}return`
`+ac+t}var lc=!1;function cc(t,e){if(!t||lc)return"";lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function Qv(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=cc(t.type,!1),t;case 11:return t=cc(t.type.render,!1),t;case 1:return t=cc(t.type,!0),t;default:return""}}function yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case os:return"Fragment";case ss:return"Portal";case vu:return"Profiler";case Rd:return"StrictMode";case _u:return"Suspense";case xu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Im:return(t.displayName||"Context")+".Consumer";case Dm:return(t._context.displayName||"Context")+".Provider";case Cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bd:return e=t.displayName||null,e!==null?e:yu(t.type)||"Memo";case Fi:e=t._payload,t=t._init;try{return yu(t(e))}catch{}}return null}function Jv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yu(e);case 8:return e===Rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Om(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function e_(t){var e=Om(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function na(t){t._valueTracker||(t._valueTracker=e_(t))}function Fm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Om(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Su(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function km(t,e){e=e.checked,e!=null&&Ad(t,"checked",e,!1)}function Eu(t,e){km(t,e);var n=ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mu(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mu(t,e,n){(e!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lo=Array.isArray;function Ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Tu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(lo(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function zm(t,e){var n=ir(e.value),i=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ia,Hm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ia=ia||document.createElement("div"),ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},t_=["Webkit","ms","Moz","O"];Object.keys(fo).forEach(function(t){t_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fo[e]=fo[t]})});function Gm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fo.hasOwnProperty(t)&&fo[t]?(""+e).trim():e+"px"}function Vm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Gm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var n_=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Au(t,e){if(e){if(n_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Ru(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cu=null;function Ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bu=null,Es=null,Ms=null;function Wf(t){if(t=Xo(t)){if(typeof bu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Hl(e),bu(t.stateNode,t.type,e))}}function Wm(t){Es?Ms?Ms.push(t):Ms=[t]:Es=t}function jm(){if(Es){var t=Es,e=Ms;if(Ms=Es=null,Wf(t),e)for(t=0;t<e.length;t++)Wf(e[t])}}function Xm(t,e){return t(e)}function qm(){}var uc=!1;function Ym(t,e,n){if(uc)return t(e,n);uc=!0;try{return Xm(t,e,n)}finally{uc=!1,(Es!==null||Ms!==null)&&(qm(),jm())}}function To(t,e){var n=t.stateNode;if(n===null)return null;var i=Hl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Lu=!1;if(Ti)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Lu=!1}function i_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ho=!1,rl=null,sl=!1,Pu=null,r_={onError:function(t){ho=!0,rl=t}};function s_(t,e,n,i,r,s,o,a,l){ho=!1,rl=null,i_.apply(r_,arguments)}function o_(t,e,n,i,r,s,o,a,l){if(s_.apply(this,arguments),ho){if(ho){var c=rl;ho=!1,rl=null}else throw Error(re(198));sl||(sl=!0,Pu=c)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jf(t){if(Br(t)!==t)throw Error(re(188))}function a_(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return jf(r),t;if(s===i)return jf(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Km(t){return t=a_(t),t!==null?Zm(t):null}function Zm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zm(t);if(e!==null)return e;t=t.sibling}return null}var Qm=Mn.unstable_scheduleCallback,Xf=Mn.unstable_cancelCallback,l_=Mn.unstable_shouldYield,c_=Mn.unstable_requestPaint,Tt=Mn.unstable_now,u_=Mn.unstable_getCurrentPriorityLevel,Pd=Mn.unstable_ImmediatePriority,Jm=Mn.unstable_UserBlockingPriority,ol=Mn.unstable_NormalPriority,d_=Mn.unstable_LowPriority,eg=Mn.unstable_IdlePriority,Fl=null,ii=null;function f_(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:m_,h_=Math.log,p_=Math.LN2;function m_(t){return t>>>=0,t===0?32:31-(h_(t)/p_|0)|0}var ra=64,sa=4194304;function co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=co(a):(s&=o,s!==0&&(i=co(s)))}else o=n&~r,o!==0?i=co(o):s!==0&&(i=co(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function g_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function v_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=g_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tg(){var t=ra;return ra<<=1,!(ra&4194240)&&(ra=64),t}function dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function __(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ig,Dd,rg,sg,og,Du=!1,oa=[],Xi=null,qi=null,Yi=null,wo=new Map,Ao=new Map,Bi=[],x_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qf(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(e.pointerId)}}function Ys(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xo(e),e!==null&&Dd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function y_(t,e,n,i,r){switch(e){case"focusin":return Xi=Ys(Xi,t,e,n,i,r),!0;case"dragenter":return qi=Ys(qi,t,e,n,i,r),!0;case"mouseover":return Yi=Ys(Yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wo.set(s,Ys(wo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ao.set(s,Ys(Ao.get(s)||null,t,e,n,i,r)),!0}return!1}function ag(t){var e=Mr(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=$m(n),e!==null){t.blockedOn=e,og(t.priority,function(){rg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Iu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Cu=i,n.target.dispatchEvent(i),Cu=null}else return e=Xo(n),e!==null&&Dd(e),t.blockedOn=n,!1;e.shift()}return!0}function Yf(t,e,n){Xa(t)&&n.delete(e)}function S_(){Du=!1,Xi!==null&&Xa(Xi)&&(Xi=null),qi!==null&&Xa(qi)&&(qi=null),Yi!==null&&Xa(Yi)&&(Yi=null),wo.forEach(Yf),Ao.forEach(Yf)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,Du||(Du=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,S_)))}function Ro(t){function e(r){return $s(r,t)}if(0<oa.length){$s(oa[0],t);for(var n=1;n<oa.length;n++){var i=oa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&$s(Xi,t),qi!==null&&$s(qi,t),Yi!==null&&$s(Yi,t),wo.forEach(e),Ao.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)ag(n),n.blockedOn===null&&Bi.shift()}var Ts=bi.ReactCurrentBatchConfig,ll=!0;function E_(t,e,n,i){var r=et,s=Ts.transition;Ts.transition=null;try{et=1,Id(t,e,n,i)}finally{et=r,Ts.transition=s}}function M_(t,e,n,i){var r=et,s=Ts.transition;Ts.transition=null;try{et=4,Id(t,e,n,i)}finally{et=r,Ts.transition=s}}function Id(t,e,n,i){if(ll){var r=Iu(t,e,n,i);if(r===null)Sc(t,e,i,cl,n),qf(t,i);else if(y_(r,t,e,n,i))i.stopPropagation();else if(qf(t,i),e&4&&-1<x_.indexOf(t)){for(;r!==null;){var s=Xo(r);if(s!==null&&ig(s),s=Iu(t,e,n,i),s===null&&Sc(t,e,i,cl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Sc(t,e,i,null,n)}}var cl=null;function Iu(t,e,n,i){if(cl=null,t=Ld(i),t=Mr(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cl=t,null}function lg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(u_()){case Pd:return 1;case Jm:return 4;case ol:case d_:return 16;case eg:return 536870912;default:return 16}default:return 16}}var Gi=null,Ud=null,qa=null;function cg(){if(qa)return qa;var t,e=Ud,n=e.length,i,r="value"in Gi?Gi.value:Gi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return qa=r.slice(t,1<i?1-i:void 0)}function Ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function aa(){return!0}function $f(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?aa:$f,this.isPropagationStopped=$f,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Od=wn(Hs),jo=xt({},Hs,{view:0,detail:0}),T_=wn(jo),fc,hc,Ks,kl=xt({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(fc=t.screenX-Ks.screenX,hc=t.screenY-Ks.screenY):hc=fc=0,Ks=t),fc)},movementY:function(t){return"movementY"in t?t.movementY:hc}}),Kf=wn(kl),w_=xt({},kl,{dataTransfer:0}),A_=wn(w_),R_=xt({},jo,{relatedTarget:0}),pc=wn(R_),C_=xt({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),b_=wn(C_),L_=xt({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),P_=wn(L_),N_=xt({},Hs,{data:0}),Zf=wn(N_),D_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=U_[t])?!!e[t]:!1}function Fd(){return O_}var F_=xt({},jo,{key:function(t){if(t.key){var e=D_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fd,charCode:function(t){return t.type==="keypress"?Ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k_=wn(F_),z_=xt({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=wn(z_),B_=xt({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fd}),H_=wn(B_),G_=xt({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),V_=wn(G_),W_=xt({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j_=wn(W_),X_=[9,13,27,32],kd=Ti&&"CompositionEvent"in window,po=null;Ti&&"documentMode"in document&&(po=document.documentMode);var q_=Ti&&"TextEvent"in window&&!po,ug=Ti&&(!kd||po&&8<po&&11>=po),Jf=" ",eh=!1;function dg(t,e){switch(t){case"keyup":return X_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function Y_(t,e){switch(t){case"compositionend":return fg(e);case"keypress":return e.which!==32?null:(eh=!0,Jf);case"textInput":return t=e.data,t===Jf&&eh?null:t;default:return null}}function $_(t,e){if(as)return t==="compositionend"||!kd&&dg(t,e)?(t=cg(),qa=Ud=Gi=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ug&&e.locale!=="ko"?null:e.data;default:return null}}var K_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!K_[t.type]:e==="textarea"}function hg(t,e,n,i){Wm(i),e=ul(e,"onChange"),0<e.length&&(n=new Od("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var mo=null,Co=null;function Z_(t){Tg(t,0)}function zl(t){var e=us(t);if(Fm(e))return t}function Q_(t,e){if(t==="change")return e}var pg=!1;if(Ti){var mc;if(Ti){var gc="oninput"in document;if(!gc){var nh=document.createElement("div");nh.setAttribute("oninput","return;"),gc=typeof nh.oninput=="function"}mc=gc}else mc=!1;pg=mc&&(!document.documentMode||9<document.documentMode)}function ih(){mo&&(mo.detachEvent("onpropertychange",mg),Co=mo=null)}function mg(t){if(t.propertyName==="value"&&zl(Co)){var e=[];hg(e,Co,t,Ld(t)),Ym(Z_,e)}}function J_(t,e,n){t==="focusin"?(ih(),mo=e,Co=n,mo.attachEvent("onpropertychange",mg)):t==="focusout"&&ih()}function ex(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(Co)}function tx(t,e){if(t==="click")return zl(e)}function nx(t,e){if(t==="input"||t==="change")return zl(e)}function ix(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:ix;function bo(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!gu.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sh(t,e){var n=rh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rh(n)}}function gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vg(){for(var t=window,e=il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rx(t){var e=vg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gg(n.ownerDocument.documentElement,n)){if(i!==null&&zd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=sh(n,s);var o=sh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sx=Ti&&"documentMode"in document&&11>=document.documentMode,ls=null,Uu=null,go=null,Ou=!1;function oh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ou||ls==null||ls!==il(i)||(i=ls,"selectionStart"in i&&zd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),go&&bo(go,i)||(go=i,i=ul(Uu,"onSelect"),0<i.length&&(e=new Od("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ls)))}function la(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},vc={},_g={};Ti&&(_g=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Bl(t){if(vc[t])return vc[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _g)return vc[t]=e[n];return t}var xg=Bl("animationend"),yg=Bl("animationiteration"),Sg=Bl("animationstart"),Eg=Bl("transitionend"),Mg=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){Mg.set(t,e),zr(e,[t])}for(var _c=0;_c<ah.length;_c++){var xc=ah[_c],ox=xc.toLowerCase(),ax=xc[0].toUpperCase()+xc.slice(1);or(ox,"on"+ax)}or(xg,"onAnimationEnd");or(yg,"onAnimationIteration");or(Sg,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(Eg,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lx=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function lh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,o_(i,e,void 0,t),t.currentTarget=null}function Tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;lh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;lh(r,a,c),s=l}}}if(sl)throw t=Pu,sl=!1,Pu=null,t}function ut(t,e){var n=e[Hu];n===void 0&&(n=e[Hu]=new Set);var i=t+"__bubble";n.has(i)||(wg(e,t,2,!1),n.add(i))}function yc(t,e,n){var i=0;e&&(i|=4),wg(n,t,i,e)}var ca="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[ca]){t[ca]=!0,Nm.forEach(function(n){n!=="selectionchange"&&(lx.has(n)||yc(n,!1,t),yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ca]||(e[ca]=!0,yc("selectionchange",!1,e))}}function wg(t,e,n,i){switch(lg(e)){case 1:var r=E_;break;case 4:r=M_;break;default:r=Id}n=r.bind(null,e,n,t),r=void 0,!Lu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Sc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Mr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ym(function(){var c=s,d=Ld(n),f=[];e:{var h=Mg.get(t);if(h!==void 0){var m=Od,x=t;switch(t){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":m=k_;break;case"focusin":x="focus",m=pc;break;case"focusout":x="blur",m=pc;break;case"beforeblur":case"afterblur":m=pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=A_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=H_;break;case xg:case yg:case Sg:m=b_;break;case Eg:m=V_;break;case"scroll":m=T_;break;case"wheel":m=j_;break;case"copy":case"cut":case"paste":m=P_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Qf}var _=(e&4)!==0,p=!_&&t==="scroll",u=_?h!==null?h+"Capture":null:h;_=[];for(var v=c,g;v!==null;){g=v;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,u!==null&&(y=To(v,u),y!=null&&_.push(Po(v,y,g)))),p)break;v=v.return}0<_.length&&(h=new m(h,x,null,n,d),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Cu&&(x=n.relatedTarget||n.fromElement)&&(Mr(x)||x[wi]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Mr(x):null,x!==null&&(p=Br(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(_=Kf,y="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Qf,y="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?h:us(m),g=x==null?h:us(x),h=new _(y,v+"leave",m,n,d),h.target=p,h.relatedTarget=g,y=null,Mr(d)===c&&(_=new _(u,v+"enter",x,n,d),_.target=g,_.relatedTarget=p,y=_),p=y,m&&x)t:{for(_=m,u=x,v=0,g=_;g;g=Gr(g))v++;for(g=0,y=u;y;y=Gr(y))g++;for(;0<v-g;)_=Gr(_),v--;for(;0<g-v;)u=Gr(u),g--;for(;v--;){if(_===u||u!==null&&_===u.alternate)break t;_=Gr(_),u=Gr(u)}_=null}else _=null;m!==null&&ch(f,h,m,_,!1),x!==null&&p!==null&&ch(f,p,x,_,!0)}}e:{if(h=c?us(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var b=Q_;else if(th(h))if(pg)b=nx;else{b=ex;var C=J_}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=tx);if(b&&(b=b(t,c))){hg(f,b,n,d);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Mu(h,"number",h.value)}switch(C=c?us(c):window,t){case"focusin":(th(C)||C.contentEditable==="true")&&(ls=C,Uu=c,go=null);break;case"focusout":go=Uu=ls=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,oh(f,n,d);break;case"selectionchange":if(sx)break;case"keydown":case"keyup":oh(f,n,d)}var A;if(kd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else as?dg(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(ug&&n.locale!=="ko"&&(as||D!=="onCompositionStart"?D==="onCompositionEnd"&&as&&(A=cg()):(Gi=d,Ud="value"in Gi?Gi.value:Gi.textContent,as=!0)),C=ul(c,D),0<C.length&&(D=new Zf(D,t,null,n,d),f.push({event:D,listeners:C}),A?D.data=A:(A=fg(n),A!==null&&(D.data=A)))),(A=q_?Y_(t,n):$_(t,n))&&(c=ul(c,"onBeforeInput"),0<c.length&&(d=new Zf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}Tg(f,e)})}function Po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=To(t,n),s!=null&&i.unshift(Po(t,s,r)),s=To(t,e),s!=null&&i.push(Po(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ch(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=To(n,s),l!=null&&o.unshift(Po(n,l,a))):r||(l=To(n,s),l!=null&&o.push(Po(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cx=/\r\n?/g,ux=/\u0000|\uFFFD/g;function uh(t){return(typeof t=="string"?t:""+t).replace(cx,`
`).replace(ux,"")}function ua(t,e,n){if(e=uh(e),uh(t)!==e&&n)throw Error(re(425))}function dl(){}var Fu=null,ku=null;function zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bu=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,fx=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(t){return dh.resolve(null).then(t).catch(hx)}:Bu;function hx(t){setTimeout(function(){throw t})}function Ec(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ro(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ro(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),ni="__reactFiber$"+Gs,No="__reactProps$"+Gs,wi="__reactContainer$"+Gs,Hu="__reactEvents$"+Gs,px="__reactListeners$"+Gs,mx="__reactHandles$"+Gs;function Mr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wi]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fh(t);t!==null;){if(n=t[ni])return n;t=fh(t)}return e}t=n,n=t.parentNode}return null}function Xo(t){return t=t[ni]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Hl(t){return t[No]||null}var Gu=[],ds=-1;function ar(t){return{current:t}}function ft(t){0>ds||(t.current=Gu[ds],Gu[ds]=null,ds--)}function ct(t,e){ds++,Gu[ds]=t.current,t.current=e}var rr={},$t=ar(rr),dn=ar(!1),Nr=rr;function Ls(t,e){var n=t.type.contextTypes;if(!n)return rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function fl(){ft(dn),ft($t)}function hh(t,e,n){if($t.current!==rr)throw Error(re(168));ct($t,e),ct(dn,n)}function Ag(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,Jv(t)||"Unknown",r));return xt({},n,i)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Nr=$t.current,ct($t,t),ct(dn,dn.current),!0}function ph(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Ag(t,e,Nr),i.__reactInternalMemoizedMergedChildContext=t,ft(dn),ft($t),ct($t,t)):ft(dn),ct(dn,n)}var gi=null,Gl=!1,Mc=!1;function Rg(t){gi===null?gi=[t]:gi.push(t)}function gx(t){Gl=!0,Rg(t)}function lr(){if(!Mc&&gi!==null){Mc=!0;var t=0,e=et;try{var n=gi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,Gl=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),Qm(Pd,lr),r}finally{et=e,Mc=!1}}return null}var fs=[],hs=0,pl=null,ml=0,Cn=[],bn=0,Dr=null,_i=1,xi="";function vr(t,e){fs[hs++]=ml,fs[hs++]=pl,pl=t,ml=e}function Cg(t,e,n){Cn[bn++]=_i,Cn[bn++]=xi,Cn[bn++]=Dr,Dr=t;var i=_i;t=xi;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-$n(e)+r|n<<r|i,xi=s+t}else _i=1<<s|n<<r|i,xi=t}function Bd(t){t.return!==null&&(vr(t,1),Cg(t,1,0))}function Hd(t){for(;t===pl;)pl=fs[--hs],fs[hs]=null,ml=fs[--hs],fs[hs]=null;for(;t===Dr;)Dr=Cn[--bn],Cn[bn]=null,xi=Cn[--bn],Cn[bn]=null,_i=Cn[--bn],Cn[bn]=null}var En=null,Sn=null,ht=!1,jn=null;function bg(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Sn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Sn=null,!0):!1;default:return!1}}function Vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wu(t){if(ht){var e=Sn;if(e){var n=e;if(!mh(t,e)){if(Vu(t))throw Error(re(418));e=$i(n.nextSibling);var i=En;e&&mh(t,e)?bg(i,n):(t.flags=t.flags&-4097|2,ht=!1,En=t)}}else{if(Vu(t))throw Error(re(418));t.flags=t.flags&-4097|2,ht=!1,En=t}}}function gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function da(t){if(t!==En)return!1;if(!ht)return gh(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zu(t.type,t.memoizedProps)),e&&(e=Sn)){if(Vu(t))throw Lg(),Error(re(418));for(;e;)bg(t,e),e=$i(e.nextSibling)}if(gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=En?$i(t.stateNode.nextSibling):null;return!0}function Lg(){for(var t=Sn;t;)t=$i(t.nextSibling)}function Ps(){Sn=En=null,ht=!1}function Gd(t){jn===null?jn=[t]:jn.push(t)}var vx=bi.ReactCurrentBatchConfig;function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function fa(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vh(t){var e=t._init;return e(t._payload)}function Pg(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Ji(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,g,y){return v===null||v.tag!==6?(v=Lc(g,u.mode,y),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,y){var b=g.type;return b===os?d(u,v,g.props.children,y,g.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Fi&&vh(b)===v.type)?(y=r(v,g.props),y.ref=Zs(u,v,g),y.return=u,y):(y=tl(g.type,g.key,g.props,null,u.mode,y),y.ref=Zs(u,v,g),y.return=u,y)}function c(u,v,g,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Pc(g,u.mode,y),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function d(u,v,g,y,b){return v===null||v.tag!==7?(v=Cr(g,u.mode,y,b),v.return=u,v):(v=r(v,g),v.return=u,v)}function f(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Lc(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ta:return g=tl(v.type,v.key,v.props,null,u.mode,g),g.ref=Zs(u,null,v),g.return=u,g;case ss:return v=Pc(v,u.mode,g),v.return=u,v;case Fi:var y=v._init;return f(u,y(v._payload),g)}if(lo(v)||Xs(v))return v=Cr(v,u.mode,g,null),v.return=u,v;fa(u,v)}return null}function h(u,v,g,y){var b=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(u,v,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ta:return g.key===b?l(u,v,g,y):null;case ss:return g.key===b?c(u,v,g,y):null;case Fi:return b=g._init,h(u,v,b(g._payload),y)}if(lo(g)||Xs(g))return b!==null?null:d(u,v,g,y,null);fa(u,g)}return null}function m(u,v,g,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(g)||null,a(v,u,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ta:return u=u.get(y.key===null?g:y.key)||null,l(v,u,y,b);case ss:return u=u.get(y.key===null?g:y.key)||null,c(v,u,y,b);case Fi:var C=y._init;return m(u,v,g,C(y._payload),b)}if(lo(y)||Xs(y))return u=u.get(g)||null,d(v,u,y,b,null);fa(v,y)}return null}function x(u,v,g,y){for(var b=null,C=null,A=v,D=v=0,E=null;A!==null&&D<g.length;D++){A.index>D?(E=A,A=null):E=A.sibling;var M=h(u,A,g[D],y);if(M===null){A===null&&(A=E);break}t&&A&&M.alternate===null&&e(u,A),v=s(M,v,D),C===null?b=M:C.sibling=M,C=M,A=E}if(D===g.length)return n(u,A),ht&&vr(u,D),b;if(A===null){for(;D<g.length;D++)A=f(u,g[D],y),A!==null&&(v=s(A,v,D),C===null?b=A:C.sibling=A,C=A);return ht&&vr(u,D),b}for(A=i(u,A);D<g.length;D++)E=m(A,u,D,g[D],y),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?D:E.key),v=s(E,v,D),C===null?b=E:C.sibling=E,C=E);return t&&A.forEach(function(B){return e(u,B)}),ht&&vr(u,D),b}function _(u,v,g,y){var b=Xs(g);if(typeof b!="function")throw Error(re(150));if(g=b.call(g),g==null)throw Error(re(151));for(var C=b=null,A=v,D=v=0,E=null,M=g.next();A!==null&&!M.done;D++,M=g.next()){A.index>D?(E=A,A=null):E=A.sibling;var B=h(u,A,M.value,y);if(B===null){A===null&&(A=E);break}t&&A&&B.alternate===null&&e(u,A),v=s(B,v,D),C===null?b=B:C.sibling=B,C=B,A=E}if(M.done)return n(u,A),ht&&vr(u,D),b;if(A===null){for(;!M.done;D++,M=g.next())M=f(u,M.value,y),M!==null&&(v=s(M,v,D),C===null?b=M:C.sibling=M,C=M);return ht&&vr(u,D),b}for(A=i(u,A);!M.done;D++,M=g.next())M=m(A,u,D,M.value,y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?D:M.key),v=s(M,v,D),C===null?b=M:C.sibling=M,C=M);return t&&A.forEach(function(q){return e(u,q)}),ht&&vr(u,D),b}function p(u,v,g,y){if(typeof g=="object"&&g!==null&&g.type===os&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ta:e:{for(var b=g.key,C=v;C!==null;){if(C.key===b){if(b=g.type,b===os){if(C.tag===7){n(u,C.sibling),v=r(C,g.props.children),v.return=u,u=v;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Fi&&vh(b)===C.type){n(u,C.sibling),v=r(C,g.props),v.ref=Zs(u,C,g),v.return=u,u=v;break e}n(u,C);break}else e(u,C);C=C.sibling}g.type===os?(v=Cr(g.props.children,u.mode,y,g.key),v.return=u,u=v):(y=tl(g.type,g.key,g.props,null,u.mode,y),y.ref=Zs(u,v,g),y.return=u,u=y)}return o(u);case ss:e:{for(C=g.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Pc(g,u.mode,y),v.return=u,u=v}return o(u);case Fi:return C=g._init,p(u,v,C(g._payload),y)}if(lo(g))return x(u,v,g,y);if(Xs(g))return _(u,v,g,y);fa(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=Lc(g,u.mode,y),v.return=u,u=v),o(u)):n(u,v)}return p}var Ns=Pg(!0),Ng=Pg(!1),gl=ar(null),vl=null,ps=null,Vd=null;function Wd(){Vd=ps=vl=null}function jd(t){var e=gl.current;ft(gl),t._currentValue=e}function ju(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){vl=t,Vd=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Vd!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(vl===null)throw Error(re(308));ps=t,vl.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var Tr=null;function Xd(t){Tr===null?Tr=[t]:Tr.push(t)}function Dg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ai(t,i)}function Ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ki=!1;function qd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ig(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(t,n)}return r=i.interleaved,r===null?(e.next=e,Xd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(t,n)}function $a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nd(t,n)}}function _h(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,i){var r=t.updateQueue;ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,_=a;switch(h=e,m=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=xt({},f,h);break e;case 2:ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=o,t.lanes=o,t.memoizedState=f}}function xh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var qo={},ri=ar(qo),Do=ar(qo),Io=ar(qo);function wr(t){if(t===qo)throw Error(re(174));return t}function Yd(t,e){switch(ct(Io,e),ct(Do,t),ct(ri,qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wu(e,t)}ft(ri),ct(ri,e)}function Ds(){ft(ri),ft(Do),ft(Io)}function Ug(t){wr(Io.current);var e=wr(ri.current),n=wu(e,t.type);e!==n&&(ct(Do,t),ct(ri,n))}function $d(t){Do.current===t&&(ft(ri),ft(Do))}var vt=ar(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tc=[];function Kd(){for(var t=0;t<Tc.length;t++)Tc[t]._workInProgressVersionPrimary=null;Tc.length=0}var Ka=bi.ReactCurrentDispatcher,wc=bi.ReactCurrentBatchConfig,Ir=0,_t=null,bt=null,Ft=null,yl=!1,vo=!1,Uo=0,_x=0;function Wt(){throw Error(re(321))}function Zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function Qd(t,e,n,i,r,s){if(Ir=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ka.current=t===null||t.memoizedState===null?Ex:Mx,t=n(i,r),vo){s=0;do{if(vo=!1,Uo=0,25<=s)throw Error(re(301));s+=1,Ft=bt=null,e.updateQueue=null,Ka.current=Tx,t=n(i,r)}while(vo)}if(Ka.current=Sl,e=bt!==null&&bt.next!==null,Ir=0,Ft=bt=_t=null,yl=!1,e)throw Error(re(300));return t}function Jd(){var t=Uo!==0;return Uo=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?_t.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Un(){if(bt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ft===null?_t.memoizedState:Ft.next;if(e!==null)Ft=e,bt=t;else{if(t===null)throw Error(re(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ft===null?_t.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Oo(t,e){return typeof e=="function"?e(t):e}function Ac(t){var e=Un(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ir&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,_t.lanes|=d,Ur|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Zn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rc(t){var e=Un(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Og(){}function Fg(t,e){var n=_t,i=Un(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,ef(Bg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,Fo(9,zg.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(re(349));Ir&30||kg(n,e,r)}return r}function kg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zg(t,e,n,i){e.value=n,e.getSnapshot=i,Hg(e)&&Gg(t)}function Bg(t,e,n){return n(function(){Hg(e)&&Gg(t)})}function Hg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function Gg(t){var e=Ai(t,1);e!==null&&Kn(e,t,1,-1)}function yh(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:t},e.queue=t,t=t.dispatch=Sx.bind(null,_t,t),[e.memoizedState,t]}function Fo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Vg(){return Un().memoizedState}function Za(t,e,n,i){var r=ei();_t.flags|=t,r.memoizedState=Fo(1|e,n,void 0,i===void 0?null:i)}function Vl(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&Zd(i,o.deps)){r.memoizedState=Fo(e,n,s,i);return}}_t.flags|=t,r.memoizedState=Fo(1|e,n,s,i)}function Sh(t,e){return Za(8390656,8,t,e)}function ef(t,e){return Vl(2048,8,t,e)}function Wg(t,e){return Vl(4,2,t,e)}function jg(t,e){return Vl(4,4,t,e)}function Xg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qg(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4,4,Xg.bind(null,e,t),n)}function tf(){}function Yg(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $g(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Kg(t,e,n){return Ir&21?(Zn(n,e)||(n=tg(),_t.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function xx(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=wc.transition;wc.transition={};try{t(!1),e()}finally{et=n,wc.transition=i}}function Zg(){return Un().memoizedState}function yx(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Qg(t))Jg(e,n);else if(n=Dg(t,e,n,i),n!==null){var r=nn();Kn(n,t,i,r),e0(n,e,i)}}function Sx(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qg(t))Jg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,o)){var l=e.interleaved;l===null?(r.next=r,Xd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Dg(t,e,r,i),n!==null&&(r=nn(),Kn(n,t,i,r),e0(n,e,i))}}function Qg(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function Jg(t,e){vo=yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function e0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nd(t,n)}}var Sl={readContext:In,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},Ex={readContext:In,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Sh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Za(4194308,4,Xg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Za(4194308,4,t,e)},useInsertionEffect:function(t,e){return Za(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=yx.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:yh,useDebugValue:tf,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=yh(!1),e=t[0];return t=xx.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=ei();if(ht){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),zt===null)throw Error(re(349));Ir&30||kg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Sh(Bg.bind(null,i,s,t),[t]),i.flags|=2048,Fo(9,zg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=zt.identifierPrefix;if(ht){var n=xi,i=_i;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_x++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Mx={readContext:In,useCallback:Yg,useContext:In,useEffect:ef,useImperativeHandle:qg,useInsertionEffect:Wg,useLayoutEffect:jg,useMemo:$g,useReducer:Ac,useRef:Vg,useState:function(){return Ac(Oo)},useDebugValue:tf,useDeferredValue:function(t){var e=Un();return Kg(e,bt.memoizedState,t)},useTransition:function(){var t=Ac(Oo)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Og,useSyncExternalStore:Fg,useId:Zg,unstable_isNewReconciler:!1},Tx={readContext:In,useCallback:Yg,useContext:In,useEffect:ef,useImperativeHandle:qg,useInsertionEffect:Wg,useLayoutEffect:jg,useMemo:$g,useReducer:Rc,useRef:Vg,useState:function(){return Rc(Oo)},useDebugValue:tf,useDeferredValue:function(t){var e=Un();return bt===null?e.memoizedState=t:Kg(e,bt.memoizedState,t)},useTransition:function(){var t=Rc(Oo)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Og,useSyncExternalStore:Fg,useId:Zg,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wl={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=Qi(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(Kn(e,t,r,i),$a(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=Qi(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(Kn(e,t,r,i),$a(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=Qi(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ki(t,r,i),e!==null&&(Kn(e,t,i,n),$a(e,t,i))}};function Eh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!bo(n,i)||!bo(r,s):!0}function t0(t,e,n){var i=!1,r=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=fn(e)?Nr:$t.current,i=e.contextTypes,s=(i=i!=null)?Ls(t,r):rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Wl.enqueueReplaceState(e,e.state,null)}function qu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},qd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=fn(e)?Nr:$t.current,r.context=Ls(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Wl.enqueueReplaceState(r,r.state,null),_l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e){try{var n="",i=e;do n+=Qv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wx=typeof WeakMap=="function"?WeakMap:Map;function n0(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ml||(Ml=!0,rd=i),Yu(t,e)},n}function i0(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Yu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yu(t,e),typeof i!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Th(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=zx.bind(null,t,e,n),e.then(t,t))}function wh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ah(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,Ki(n,e,1))),n.lanes|=1),t)}var Ax=bi.ReactCurrentOwner,un=!1;function en(t,e,n,i){e.child=t===null?Ng(e,null,n,i):Ns(e,t.child,n,i)}function Rh(t,e,n,i,r){n=n.render;var s=e.ref;return ws(e,r),i=Qd(t,e,n,i,s,r),n=Jd(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(ht&&n&&Bd(e),e.flags|=1,en(t,e,i,r),e.child)}function Ch(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!uf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,r0(t,e,s,i,r)):(t=tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=Ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function r0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(bo(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return $u(t,e,n,i,r)}function s0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(gs,xn),xn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(gs,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(gs,xn),xn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(gs,xn),xn|=i;return en(t,e,r,n),e.child}function o0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $u(t,e,n,i,r){var s=fn(n)?Nr:$t.current;return s=Ls(e,s),ws(e,r),n=Qd(t,e,n,i,s,r),i=Jd(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(ht&&i&&Bd(e),e.flags|=1,en(t,e,n,r),e.child)}function bh(t,e,n,i,r){if(fn(n)){var s=!0;hl(e)}else s=!1;if(ws(e,r),e.stateNode===null)Qa(t,e),t0(e,n,i),qu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=fn(n)?Nr:$t.current,c=Ls(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Mh(e,o,i,c),ki=!1;var h=e.memoizedState;o.state=h,_l(e,i,o,r),l=e.memoizedState,a!==i||h!==l||dn.current||ki?(typeof d=="function"&&(Xu(e,n,d,i),l=e.memoizedState),(a=ki||Eh(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ig(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=fn(n)?Nr:$t.current,l=Ls(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Mh(e,o,i,l),ki=!1,h=e.memoizedState,o.state=h,_l(e,i,o,r);var x=e.memoizedState;a!==f||h!==x||dn.current||ki?(typeof m=="function"&&(Xu(e,n,m,i),x=e.memoizedState),(c=ki||Eh(e,n,c,i,h,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Ku(t,e,n,i,s,r)}function Ku(t,e,n,i,r,s){o0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ph(e,n,!1),Ri(t,e,s);i=e.stateNode,Ax.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ns(e,t.child,null,s),e.child=Ns(e,null,a,s)):en(t,e,a,s),e.memoizedState=i.state,r&&ph(e,n,!0),e.child}function a0(t){var e=t.stateNode;e.pendingContext?hh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hh(t,e.context,!1),Yd(t,e.containerInfo)}function Lh(t,e,n,i,r){return Ps(),Gd(r),e.flags|=256,en(t,e,n,i),e.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function l0(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(vt,r&1),t===null)return Wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ql(o,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qu(n),e.memoizedState=Zu,t):nf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Rx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ji(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Qu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zu,i}return s=t.child,t=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function nf(t,e){return e=ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ha(t,e,n,i){return i!==null&&Gd(i),Ns(e,t.child,null,n),t=nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Rx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Cc(Error(re(422))),ha(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ql({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ns(e,t.child,null,o),e.child.memoizedState=Qu(o),e.memoizedState=Zu,s);if(!(e.mode&1))return ha(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Cc(s,i,void 0),ha(t,e,o,i)}if(a=(o&t.childLanes)!==0,un||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ai(t,r),Kn(i,t,r,-1))}return cf(),i=Cc(Error(re(421))),ha(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Bx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=$i(r.nextSibling),En=e,ht=!0,jn=null,t!==null&&(Cn[bn++]=_i,Cn[bn++]=xi,Cn[bn++]=Dr,_i=t.id,xi=t.overflow,Dr=e),e=nf(e,i.children),e.flags|=4096,e)}function Ph(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ju(t.return,e,n)}function bc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function c0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ph(t,n,e);else if(t.tag===19)Ph(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),bc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}bc(e,!0,n,null,s);break;case"together":bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Cx(t,e,n){switch(e.tag){case 3:a0(e),Ps();break;case 5:Ug(e);break;case 1:fn(e.type)&&hl(e);break;case 4:Yd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?l0(t,e,n):(ct(vt,vt.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);ct(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return c0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,s0(t,e,n)}return Ri(t,e,n)}var u0,Ju,d0,f0;u0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ju=function(){};d0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ri.current);var s=null;switch(n){case"input":r=Su(t,r),i=Su(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Tu(t,r),i=Tu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=dl)}Au(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Eo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};f0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qs(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function bx(t,e,n){var i=e.pendingProps;switch(Hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return fn(e.type)&&fl(),jt(e),null;case 3:return i=e.stateNode,Ds(),ft(dn),ft($t),Kd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(ad(jn),jn=null))),Ju(t,e),jt(e),null;case 5:$d(e);var r=wr(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)d0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return jt(e),null}if(t=wr(ri.current),da(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[No]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<uo.length;r++)ut(uo[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Bf(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Gf(i,s),ut("invalid",i)}Au(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ua(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ua(i.textContent,a,t),r=["children",""+a]):Eo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":na(i),Hf(i,s,!0);break;case"textarea":na(i),Vf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[No]=i,u0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ru(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<uo.length;r++)ut(uo[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Bf(t,i),r=Su(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Gf(t,i),r=Tu(t,i),ut("invalid",t);break;default:r=i}Au(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Vm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Mo(t,l):typeof l=="number"&&Mo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Eo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&Ad(t,s,l,o))}switch(n){case"input":na(t),Hf(t,i,!1);break;case"textarea":na(t),Vf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)f0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=wr(Io.current),wr(ri.current),da(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:ua(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return jt(e),null;case 13:if(ft(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&Sn!==null&&e.mode&1&&!(e.flags&128))Lg(),Ps(),e.flags|=98560,s=!1;else if(s=da(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[ni]=e}else Ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else jn!==null&&(ad(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Lt===0&&(Lt=3):cf())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Ds(),Ju(t,e),t===null&&Lo(e.stateNode.containerInfo),jt(e),null;case 10:return jd(e.type._context),jt(e),null;case 17:return fn(e.type)&&fl(),jt(e),null;case 19:if(ft(vt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Qs(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xl(t),o!==null){for(e.flags|=128,Qs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Us&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return jt(e),null}else 2*Tt()-s.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=vt.current,ct(vt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return lf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Lx(t,e){switch(Hd(e),e.tag){case 1:return fn(e.type)&&fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ds(),ft(dn),ft($t),Kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $d(e),null;case 13:if(ft(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(vt),null;case 4:return Ds(),null;case 10:return jd(e.type._context),null;case 22:case 23:return lf(),null;case 24:return null;default:return null}}var pa=!1,Yt=!1,Px=typeof WeakSet=="function"?WeakSet:Set,he=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function ed(t,e,n){try{n()}catch(i){Et(t,e,i)}}var Nh=!1;function Nx(t,e){if(Fu=ll,t=vg(),zd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ku={focusedElem:t,selectionRange:n},ll=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,p=x.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:Gn(e.type,_),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){Et(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return x=Nh,Nh=!1,x}function _o(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ed(e,n,s)}r=r.next}while(r!==i)}}function jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function h0(t){var e=t.alternate;e!==null&&(t.alternate=null,h0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[No],delete e[Hu],delete e[px],delete e[mx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p0(t){return t.tag===5||t.tag===3||t.tag===4}function Dh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dl));else if(i!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}function id(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}var Bt=null,Wn=!1;function Pi(t,e,n){for(n=n.child;n!==null;)m0(t,e,n),n=n.sibling}function m0(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:Yt||ms(n,e);case 6:var i=Bt,r=Wn;Bt=null,Pi(t,e,n),Bt=i,Wn=r,Bt!==null&&(Wn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Wn?(t=Bt,n=n.stateNode,t.nodeType===8?Ec(t.parentNode,n):t.nodeType===1&&Ec(t,n),Ro(t)):Ec(Bt,n.stateNode));break;case 4:i=Bt,r=Wn,Bt=n.stateNode.containerInfo,Wn=!0,Pi(t,e,n),Bt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ed(n,e,o),r=r.next}while(r!==i)}Pi(t,e,n);break;case 1:if(!Yt&&(ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}Pi(t,e,n);break;case 21:Pi(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Pi(t,e,n),Yt=i):Pi(t,e,n);break;default:Pi(t,e,n)}}function Ih(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Px),e.forEach(function(i){var r=Hx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Wn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Wn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Wn=!0;break e}a=a.return}if(Bt===null)throw Error(re(160));m0(s,o,r),Bt=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g0(e,t),e=e.sibling}function g0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Jn(t),i&4){try{_o(3,t,t.return),jl(3,t)}catch(_){Et(t,t.return,_)}try{_o(5,t,t.return)}catch(_){Et(t,t.return,_)}}break;case 1:On(e,t),Jn(t),i&512&&n!==null&&ms(n,n.return);break;case 5:if(On(e,t),Jn(t),i&512&&n!==null&&ms(n,n.return),t.flags&32){var r=t.stateNode;try{Mo(r,"")}catch(_){Et(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&km(r,s),Ru(a,o);var c=Ru(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Vm(r,f):d==="dangerouslySetInnerHTML"?Hm(r,f):d==="children"?Mo(r,f):Ad(r,d,f,c)}switch(a){case"input":Eu(r,s);break;case"textarea":zm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ss(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ss(r,!!s.multiple,s.defaultValue,!0):Ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[No]=s}catch(_){Et(t,t.return,_)}}break;case 6:if(On(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Et(t,t.return,_)}}break;case 3:if(On(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(e.containerInfo)}catch(_){Et(t,t.return,_)}break;case 4:On(e,t),Jn(t);break;case 13:On(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(of=Tt())),i&4&&Ih(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||d,On(e,t),Yt=c):On(e,t),Jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(he=t,d=t.child;d!==null;){for(f=he=d;he!==null;){switch(h=he,m=h.child,h.tag){case 0:case 11:case 14:case 15:_o(4,h,h.return);break;case 1:ms(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){Et(i,n,_)}}break;case 5:ms(h,h.return);break;case 22:if(h.memoizedState!==null){Oh(f);continue}}m!==null?(m.return=h,he=m):Oh(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Gm("display",o))}catch(_){Et(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){Et(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:On(e,t),Jn(t),i&4&&Ih(t);break;case 21:break;default:On(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p0(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Mo(r,""),i.flags&=-33);var s=Dh(t);id(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Dh(t);nd(t,a,o);break;default:throw Error(re(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dx(t,e,n){he=t,v0(t)}function v0(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=pa;var c=Yt;if(pa=o,(Yt=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?Fh(r):l!==null?(l.return=o,he=l):Fh(r);for(;s!==null;)he=s,v0(s),s=s.sibling;he=r,pa=a,Yt=c}Uh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):Uh(t)}}function Uh(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ro(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Yt||e.flags&512&&td(e)}catch(h){Et(e,e.return,h)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function Oh(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function Fh(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jl(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{td(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{td(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var Ix=Math.ceil,El=bi.ReactCurrentDispatcher,rf=bi.ReactCurrentOwner,Dn=bi.ReactCurrentBatchConfig,Ze=0,zt=null,Rt=null,Ht=0,xn=0,gs=ar(0),Lt=0,ko=null,Ur=0,Xl=0,sf=0,xo=null,ln=null,of=0,Us=1/0,pi=null,Ml=!1,rd=null,Zi=null,ma=!1,Vi=null,Tl=0,yo=0,sd=null,Ja=-1,el=0;function nn(){return Ze&6?Tt():Ja!==-1?Ja:Ja=Tt()}function Qi(t){return t.mode&1?Ze&2&&Ht!==0?Ht&-Ht:vx.transition!==null?(el===0&&(el=tg()),el):(t=et,t!==0||(t=window.event,t=t===void 0?16:lg(t.type)),t):1}function Kn(t,e,n,i){if(50<yo)throw yo=0,sd=null,Error(re(185));Wo(t,n,i),(!(Ze&2)||t!==zt)&&(t===zt&&(!(Ze&2)&&(Xl|=n),Lt===4&&Hi(t,Ht)),hn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(Us=Tt()+500,Gl&&lr()))}function hn(t,e){var n=t.callbackNode;v_(t,e);var i=al(t,t===zt?Ht:0);if(i===0)n!==null&&Xf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xf(n),e===1)t.tag===0?gx(kh.bind(null,t)):Rg(kh.bind(null,t)),fx(function(){!(Ze&6)&&lr()}),n=null;else{switch(ng(i)){case 1:n=Pd;break;case 4:n=Jm;break;case 16:n=ol;break;case 536870912:n=eg;break;default:n=ol}n=w0(n,_0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _0(t,e){if(Ja=-1,el=0,Ze&6)throw Error(re(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var i=al(t,t===zt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=wl(t,i);else{e=i;var r=Ze;Ze|=2;var s=y0();(zt!==t||Ht!==e)&&(pi=null,Us=Tt()+500,Rr(t,e));do try{Fx();break}catch(a){x0(t,a)}while(!0);Wd(),El.current=s,Ze=r,Rt!==null?e=0:(zt=null,Ht=0,e=Lt)}if(e!==0){if(e===2&&(r=Nu(t),r!==0&&(i=r,e=od(t,r))),e===1)throw n=ko,Rr(t,0),Hi(t,i),hn(t,Tt()),n;if(e===6)Hi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ux(r)&&(e=wl(t,i),e===2&&(s=Nu(t),s!==0&&(i=s,e=od(t,s))),e===1))throw n=ko,Rr(t,0),Hi(t,i),hn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:_r(t,ln,pi);break;case 3:if(Hi(t,i),(i&130023424)===i&&(e=of+500-Tt(),10<e)){if(al(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Bu(_r.bind(null,t,ln,pi),e);break}_r(t,ln,pi);break;case 4:if(Hi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-$n(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ix(i/1960))-i,10<i){t.timeoutHandle=Bu(_r.bind(null,t,ln,pi),i);break}_r(t,ln,pi);break;case 5:_r(t,ln,pi);break;default:throw Error(re(329))}}}return hn(t,Tt()),t.callbackNode===n?_0.bind(null,t):null}function od(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=wl(t,e),t!==2&&(e=ln,ln=n,e!==null&&ad(e)),t}function ad(t){ln===null?ln=t:ln.push.apply(ln,t)}function Ux(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e){for(e&=~sf,e&=~Xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function kh(t){if(Ze&6)throw Error(re(327));As();var e=al(t,0);if(!(e&1))return hn(t,Tt()),null;var n=wl(t,e);if(t.tag!==0&&n===2){var i=Nu(t);i!==0&&(e=i,n=od(t,i))}if(n===1)throw n=ko,Rr(t,0),Hi(t,e),hn(t,Tt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,ln,pi),hn(t,Tt()),null}function af(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(Us=Tt()+500,Gl&&lr())}}function Or(t){Vi!==null&&Vi.tag===0&&!(Ze&6)&&As();var e=Ze;Ze|=1;var n=Dn.transition,i=et;try{if(Dn.transition=null,et=1,t)return t()}finally{et=i,Dn.transition=n,Ze=e,!(Ze&6)&&lr()}}function lf(){xn=gs.current,ft(gs)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dx(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(Hd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fl();break;case 3:Ds(),ft(dn),ft($t),Kd();break;case 5:$d(i);break;case 4:Ds();break;case 13:ft(vt);break;case 19:ft(vt);break;case 10:jd(i.type._context);break;case 22:case 23:lf()}n=n.return}if(zt=t,Rt=t=Ji(t.current,null),Ht=xn=e,Lt=0,ko=null,sf=Xl=Ur=0,ln=xo=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Tr=null}return t}function x0(t,e){do{var n=Rt;try{if(Wd(),Ka.current=Sl,yl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yl=!1}if(Ir=0,Ft=bt=_t=null,vo=!1,Uo=0,rf.current=null,n===null||n.return===null){Lt=1,ko=e,Rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=wh(o);if(m!==null){m.flags&=-257,Ah(m,o,a,s,e),m.mode&1&&Th(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){Th(s,c,e),cf();break e}l=Error(re(426))}}else if(ht&&a.mode&1){var p=wh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Ah(p,o,a,s,e),Gd(Is(l,a));break e}}s=l=Is(l,a),Lt!==4&&(Lt=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=n0(s,l,e);_h(s,u);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Zi===null||!Zi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=i0(s,a,e);_h(s,y);break e}}s=s.return}while(s!==null)}E0(n)}catch(b){e=b,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function y0(){var t=El.current;return El.current=Sl,t===null?Sl:t}function cf(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),zt===null||!(Ur&268435455)&&!(Xl&268435455)||Hi(zt,Ht)}function wl(t,e){var n=Ze;Ze|=2;var i=y0();(zt!==t||Ht!==e)&&(pi=null,Rr(t,e));do try{Ox();break}catch(r){x0(t,r)}while(!0);if(Wd(),Ze=n,El.current=i,Rt!==null)throw Error(re(261));return zt=null,Ht=0,Lt}function Ox(){for(;Rt!==null;)S0(Rt)}function Fx(){for(;Rt!==null&&!l_();)S0(Rt)}function S0(t){var e=T0(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?E0(t):Rt=e,rf.current=null}function E0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Lx(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Rt=null;return}}else if(n=bx(n,e,xn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Lt===0&&(Lt=5)}function _r(t,e,n){var i=et,r=Dn.transition;try{Dn.transition=null,et=1,kx(t,e,n,i)}finally{Dn.transition=r,et=i}return null}function kx(t,e,n,i){do As();while(Vi!==null);if(Ze&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(__(t,s),t===zt&&(Rt=zt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ma||(ma=!0,w0(ol,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=et;et=1;var a=Ze;Ze|=4,rf.current=null,Nx(t,n),g0(n,t),rx(ku),ll=!!Fu,ku=Fu=null,t.current=n,Dx(n),c_(),Ze=a,et=o,Dn.transition=s}else t.current=n;if(ma&&(ma=!1,Vi=t,Tl=r),s=t.pendingLanes,s===0&&(Zi=null),f_(n.stateNode),hn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ml)throw Ml=!1,t=rd,rd=null,t;return Tl&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===sd?yo++:(yo=0,sd=t):yo=0,lr(),null}function As(){if(Vi!==null){var t=ng(Tl),e=Dn.transition,n=et;try{if(Dn.transition=null,et=16>t?16:t,Vi===null)var i=!1;else{if(t=Vi,Vi=null,Tl=0,Ze&6)throw Error(re(331));var r=Ze;for(Ze|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var d=he;switch(d.tag){case 0:case 11:case 15:_o(8,d,s)}var f=d.child;if(f!==null)f.return=d,he=f;else for(;he!==null;){d=he;var h=d.sibling,m=d.return;if(h0(d),d===c){he=null;break}if(h!==null){h.return=m,he=h;break}he=m}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_o(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,he=u;break e}he=s.return}}var v=t.current;for(he=v;he!==null;){o=he;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,he=g;else e:for(o=v;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jl(9,a)}}catch(b){Et(a,a.return,b)}if(a===o){he=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,he=y;break e}he=a.return}}if(Ze=r,lr(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Fl,t)}catch{}i=!0}return i}finally{et=n,Dn.transition=e}}return!1}function zh(t,e,n){e=Is(n,e),e=n0(t,e,1),t=Ki(t,e,1),e=nn(),t!==null&&(Wo(t,1,e),hn(t,e))}function Et(t,e,n){if(t.tag===3)zh(t,t,n);else for(;e!==null;){if(e.tag===3){zh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zi===null||!Zi.has(i))){t=Is(n,t),t=i0(e,t,1),e=Ki(e,t,1),t=nn(),e!==null&&(Wo(e,1,t),hn(e,t));break}}e=e.return}}function zx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Ht&n)===n&&(Lt===4||Lt===3&&(Ht&130023424)===Ht&&500>Tt()-of?Rr(t,0):sf|=n),hn(t,e)}function M0(t,e){e===0&&(t.mode&1?(e=sa,sa<<=1,!(sa&130023424)&&(sa=4194304)):e=1);var n=nn();t=Ai(t,e),t!==null&&(Wo(t,e,n),hn(t,n))}function Bx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),M0(t,n)}function Hx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),M0(t,n)}var T0;T0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,Cx(t,e,n);un=!!(t.flags&131072)}else un=!1,ht&&e.flags&1048576&&Cg(e,ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Qa(t,e),t=e.pendingProps;var r=Ls(e,$t.current);ws(e,n),r=Qd(null,e,i,t,r,n);var s=Jd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qd(e),r.updater=Wl,e.stateNode=r,r._reactInternals=e,qu(e,i,t,n),e=Ku(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&Bd(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Qa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Vx(i),t=Gn(i,t),r){case 0:e=$u(null,e,i,t,n);break e;case 1:e=bh(null,e,i,t,n);break e;case 11:e=Rh(null,e,i,t,n);break e;case 14:e=Ch(null,e,i,Gn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),$u(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),bh(t,e,i,r,n);case 3:e:{if(a0(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ig(t,e),_l(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Is(Error(re(423)),e),e=Lh(t,e,i,n,r);break e}else if(i!==r){r=Is(Error(re(424)),e),e=Lh(t,e,i,n,r);break e}else for(Sn=$i(e.stateNode.containerInfo.firstChild),En=e,ht=!0,jn=null,n=Ng(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ps(),i===r){e=Ri(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return Ug(e),t===null&&Wu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,zu(i,r)?o=null:s!==null&&zu(i,s)&&(e.flags|=32),o0(t,e),en(t,e,o,n),e.child;case 6:return t===null&&Wu(e),null;case 13:return l0(t,e,n);case 4:return Yd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ns(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Rh(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ct(gl,i._currentValue),i._currentValue=o,s!==null)if(Zn(s.value,o)){if(s.children===r.children&&!dn.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ju(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ju(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ws(e,n),r=In(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),Ch(t,e,i,r,n);case 15:return r0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Qa(t,e),e.tag=1,fn(i)?(t=!0,hl(e)):t=!1,ws(e,n),t0(e,i,r),qu(e,i,r,n),Ku(null,e,i,!0,t,n);case 19:return c0(t,e,n);case 22:return s0(t,e,n)}throw Error(re(156,e.tag))};function w0(t,e){return Qm(t,e)}function Gx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new Gx(t,e,n,i)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vx(t){if(typeof t=="function")return uf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cd)return 11;if(t===bd)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")uf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case os:return Cr(n.children,r,s,e);case Rd:o=8,r|=8;break;case vu:return t=Nn(12,n,e,r|2),t.elementType=vu,t.lanes=s,t;case _u:return t=Nn(13,n,e,r),t.elementType=_u,t.lanes=s,t;case xu:return t=Nn(19,n,e,r),t.elementType=xu,t.lanes=s,t;case Um:return ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dm:o=10;break e;case Im:o=9;break e;case Cd:o=11;break e;case bd:o=14;break e;case Fi:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function ql(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=Um,t.lanes=n,t.stateNode={isHidden:!1},t}function Lc(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Pc(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Wx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dc(0),this.expirationTimes=dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function df(t,e,n,i,r,s,o,a,l){return t=new Wx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qd(s),t}function jx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function A0(t){if(!t)return rr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(fn(n))return Ag(t,n,e)}return e}function R0(t,e,n,i,r,s,o,a,l){return t=df(n,i,!0,t,r,s,o,a,l),t.context=A0(null),n=t.current,i=nn(),r=Qi(n),s=Ei(i,r),s.callback=e??null,Ki(n,s,r),t.current.lanes=r,Wo(t,r,i),hn(t,i),t}function Yl(t,e,n,i){var r=e.current,s=nn(),o=Qi(r);return n=A0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ki(r,e,o),t!==null&&(Kn(t,r,o,s),$a(t,r,o)),o}function Al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ff(t,e){Bh(t,e),(t=t.alternate)&&Bh(t,e)}function Xx(){return null}var C0=typeof reportError=="function"?reportError:function(t){console.error(t)};function hf(t){this._internalRoot=t}$l.prototype.render=hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Yl(t,e,null,null)};$l.prototype.unmount=hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){Yl(null,t,null,null)}),e[wi]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&ag(t)}};function pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hh(){}function qx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Al(o);s.call(c)}}var o=R0(e,i,t,0,null,!1,!1,"",Hh);return t._reactRootContainer=o,t[wi]=o.current,Lo(t.nodeType===8?t.parentNode:t),Or(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Al(l);a.call(c)}}var l=df(t,0,!1,null,null,!1,!1,"",Hh);return t._reactRootContainer=l,t[wi]=l.current,Lo(t.nodeType===8?t.parentNode:t),Or(function(){Yl(e,l,n,i)}),l}function Zl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Al(o);a.call(l)}}Yl(e,o,t,r)}else o=qx(n,e,t,r,i);return Al(o)}ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=co(e.pendingLanes);n!==0&&(Nd(e,n|1),hn(e,Tt()),!(Ze&6)&&(Us=Tt()+500,lr()))}break;case 13:Or(function(){var i=Ai(t,1);if(i!==null){var r=nn();Kn(i,t,1,r)}}),ff(t,1)}};Dd=function(t){if(t.tag===13){var e=Ai(t,134217728);if(e!==null){var n=nn();Kn(e,t,134217728,n)}ff(t,134217728)}};rg=function(t){if(t.tag===13){var e=Qi(t),n=Ai(t,e);if(n!==null){var i=nn();Kn(n,t,e,i)}ff(t,e)}};sg=function(){return et};og=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};bu=function(t,e,n){switch(e){case"input":if(Eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Hl(i);if(!r)throw Error(re(90));Fm(i),Eu(i,r)}}}break;case"textarea":zm(t,n);break;case"select":e=n.value,e!=null&&Ss(t,!!n.multiple,e,!1)}};Xm=af;qm=Or;var Yx={usingClientEntryPoint:!1,Events:[Xo,us,Hl,Wm,jm,af]},Js={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$x={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Km(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||Xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ga.isDisabled&&ga.supportsFiber)try{Fl=ga.inject($x),ii=ga}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pf(e))throw Error(re(200));return jx(t,e,null,n)};Tn.createRoot=function(t,e){if(!pf(t))throw Error(re(299));var n=!1,i="",r=C0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=df(t,1,!1,null,null,n,!1,i,r),t[wi]=e.current,Lo(t.nodeType===8?t.parentNode:t),new hf(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Km(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Or(t)};Tn.hydrate=function(t,e,n){if(!Kl(e))throw Error(re(200));return Zl(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!pf(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=C0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=R0(e,null,t,1,n??null,r,!1,s,o),t[wi]=e.current,Lo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new $l(e)};Tn.render=function(t,e,n){if(!Kl(e))throw Error(re(200));return Zl(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Kl(t))throw Error(re(40));return t._reactRootContainer?(Or(function(){Zl(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1};Tn.unstable_batchedUpdates=af;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Kl(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Zl(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function b0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0)}catch(t){console.error(t)}}b0(),bm.exports=Tn;var Kx=bm.exports,Gh=Kx;mu.createRoot=Gh.createRoot,mu.hydrateRoot=Gh.hydrateRoot;const Zx={id:"v1-human",claimedName:"Dispatcher · Daniel Cole",role:"human",state:"clean",portrait:"./assets/portraits/v1_human_frame1.svg",freezeFrames:["./assets/portraits/v1_human_frame1.svg","./assets/portraits/v1_human_frame2.svg","./assets/portraits/v1_human_frame3.svg","./assets/portraits/v1_human_frame4.svg","./assets/portraits/v1_human_frame5.svg"],attackFrame:"./assets/portraits/v1_human_attack.svg",voice:"human",greeting:"...Hey. Can you open the door? The rain is brutal. I'm here to take the second half of the shift.",tells:{eye:"Eyes look normal. Just annoyed about being soaked.",id:"Photo matches the face. The teeth count lines up.",questions:[{q:"What brings you here tonight?",a:"Shift swap. Day shift said I'd cover the second half."},{q:"Is it raining out there?",a:"Pouring. Got soaked on the way over."},{q:"Anyone waiting for you at home?",a:"...My daughter. She said she'd wait up for me. I promised to bring her warm milk."}]},correctVerdict:"admit",outcomes:{admit:{text:"The door opens a crack. He nods and steps in, and his shadow dissolves into the corridor.",san:0},execute:{text:"You press execute. Red splashes across the glass. He falls, and does not move again.",san:-15},contain:{text:"He is dragged into the containment pod, shouting through the window all night.",san:-8}}},Qx={id:"v2-skinfit",claimedName:"Maintenance · Marcus Reed",role:"skinfit",state:"clean",portrait:"./assets/portraits/v2_skinfit_frame1.svg",freezeFrames:["./assets/portraits/v2_skinfit_frame1.svg","./assets/portraits/v2_skinfit_frame2.svg","./assets/portraits/v2_skinfit_frame3.svg","./assets/portraits/v2_skinfit_frame4.svg","./assets/portraits/v2_skinfit_frame5.svg"],attackFrame:"./assets/portraits/v2_skinfit_attack.svg",voice:"skinfit",greeting:"Good evening. I'm here to fix the light. The light. Your light, it's broken.",glitchLine:"LIGHT BROKEN。FIX THE LIGHT。THE LIGHT,,",tells:{eye:"He blinks, but his two eyes are not on the same rhythm.",id:"The teeth count on his ID never matches his mouth.",questions:[{q:"Badge number?",a:"Badge... 2207."},{q:"Which light are you fixing tonight?",a:"The one north of the guardroom. It's been flickering."},{q:"What's that behind your ear?",a:"(It pauses)... Shaving. Slipped."}]},correctVerdict:"execute",correctTool:"axe",outcomes:{admit:{text:"You let him in. Behind you, something clicks in a way joints shouldn't.",san:-10},execute:{text:"The axe falls, the seam splits, and the skin slides off the bones.",san:0},contain:{text:"The pod door seals. Inside, it speaks with your voice.",san:-8}}},Jx={id:"v3-suspicious",claimedName:"Visitor · Sam Whitfield",role:"human",state:"clean",portrait:"./assets/portraits/v3_suspicious_frame1.svg",freezeFrames:["./assets/portraits/v3_suspicious_frame1.svg","./assets/portraits/v3_suspicious_frame2.svg","./assets/portraits/v3_suspicious_frame3.svg","./assets/portraits/v3_suspicious_frame4.svg","./assets/portraits/v3_suspicious_frame5.svg"],attackFrame:"./assets/portraits/v3_suspicious_attack.svg",voice:"suspicious",greeting:"Please—please hurry, something followed me out there. I ran the whole way!",tells:{eye:"His blinking rhythm is off, but it might just be nerves.",id:"The ID is real, but the photo is worn almost blank.",questions:[{q:"Why come at this hour?",a:"I didn't want to. I was told this place could shelter me."},{q:"Do you know anyone inside?",a:"My sister is on duty in there. She's... I can't remember."},{q:"What's your sister's name?",a:"She's... Lynn. Yes, Lynn Whitfield. She said she's on the night shift tonight."}]},correctVerdict:"admit",outcomes:{admit:{text:"He steps in and lets out a long breath, sinking onto the bench.",san:0},execute:{text:"You killed a man. The blood was real, and so was the warmth.",san:-20},contain:{text:"He is shoved into the pod, crying that he isn't one of them.",san:-15}}},ey={id:"v4-coretick",claimedName:"Relief · Victor Hale",role:"coretick",state:"clean",portrait:"./assets/portraits/v4_coretick_frame1.svg",freezeFrames:["./assets/portraits/v4_coretick_frame1.svg","./assets/portraits/v4_coretick_frame2.svg","./assets/portraits/v4_coretick_frame3.svg","./assets/portraits/v4_coretick_frame4.svg","./assets/portraits/v4_coretick_frame5.svg"],attackFrame:"./assets/portraits/v4_coretick_attack.svg",voice:"coretick",greeting:"Hello. I'm here for the relief shift. The weather is the same as yesterday. Open the door, please.",glitchLine:"RELIEF。OPEN THE DOOR。THE DOOR, THE DOOR,,",tells:{eye:"Below the collarbone, a very faint metallic ticking.",id:"The ID is impossibly new. Not even a crease.",questions:[{q:"How's the weather tonight?",a:"Same as yesterday."},{q:"Whose shift are you taking?",a:"The last one called in sick. I'm covering."},{q:"What's the last one's name?",a:"(A pause. A tick under the collarbone.) ...I don't remember."}]},correctVerdict:"execute",correctTool:"gun",outcomes:{admit:{text:"It walks in, and the ticking grows louder down the corridor.",san:-12},execute:{text:"The shot lands in the core beneath the collarbone. It drops like something unplugged.",san:-5},contain:{text:"Inside the pod, the ticking never stops all night.",san:-8}}},Rl=[Zx,Qx,Jx,ey];function ty(t,e,n){const i=e===t.correctVerdict;let r=!0,s=!1;e==="execute"&&t.correctVerdict==="execute"&&t.correctTool&&(r=n===t.correctTool,s=!r);const o=i&&r,a=t.outcomes[e]??{text:"",san:0};return{verdict:e,tool:n,correct:o,escaped:s,outcome:a}}function va(t,e){return Math.max(0,Math.min(100,t+e))}const L0={phase:"opening",san:75,reaction:100,reactionMax:100,ventilationOn:!1,sofaUsed:!1,coffeeUsed:0,sedativeUsed:!1,hallucinationTriggered:!1,visitorIndex:0,records:[],autoReleased:null,sanTouchedBelow15:!1,equippedWeapon:null,gunAmmo:12,sprinklerTriggered:!1,doorUnlocked:!1,windowMarks:[]};function ld(t){return t.phase==="visitor"?Rl[t.visitorIndex]??null:null}function ny(t,e){switch(e.type){case"START":return{...L0,phase:"visitor"};case"JUDGE":{const n=ld(t);if(!n)return t;const i=ty(n,e.verdict,e.tool),r={visitorId:n.id,role:n.role,state:n.state,correctTool:n.correctTool,verdict:i.verdict,tool:i.tool,correct:i.correct,escaped:i.escaped,sanAtJudge:t.san},s=i.outcome.san??0,o=t.sedativeUsed&&s<0?Math.round(s/2):s,a=va(t.san,o),l=t.visitorIndex+1,c=l>=Rl.length;return{...t,san:a,records:[...t.records,r],visitorIndex:l,phase:"visitor",doorUnlocked:t.doorUnlocked||c,sanTouchedBelow15:t.sanTouchedBelow15||a<15}}case"INSPECT":return t;case"DRINK_COFFEE":return t.coffeeUsed>=2?t:{...t,coffeeUsed:t.coffeeUsed+1,san:va(t.san,8),reaction:Math.min(t.reactionMax,t.reaction+20)};case"USE_SEDATIVE":{if(t.sedativeUsed)return t;const n=Math.round(t.reactionMax*.7);return{...t,sedativeUsed:!0,reactionMax:n,reaction:Math.min(t.reaction,n)}}case"USE_SOFA":{const n=ld(t);if(t.sofaUsed||!n)return t;const i=e.claw?va(t.san,-10):va(t.san,20),r=t.visitorIndex+1,s=r>=Rl.length;return{...t,san:i,sofaUsed:!0,autoReleased:n,visitorIndex:r,phase:"visitor",doorUnlocked:t.doorUnlocked||s}}case"TOGGLE_VENTILATION":return{...t,ventilationOn:!t.ventilationOn};case"EQUIP_WEAPON":return{...t,equippedWeapon:e.weapon};case"USE_WEAPON":return t.equippedWeapon&&t.equippedWeapon==="gun"?{...t,gunAmmo:Math.max(0,t.gunAmmo-1)}:t;case"TRIGGER_SPRINKLER":return{...t,sprinklerTriggered:!0};case"MARK_WINDOW":return t.windowMarks.length>=8?t:{...t,windowMarks:[...t.windowMarks,e.mark]};case"OPEN_DOOR":return t.doorUnlocked?{...t,phase:"dawn"}:t;default:return t}}const iy={axe:{tool:"axe",frames:["./assets/exec/exec_axe_1.svg","./assets/exec/exec_axe_2.svg","./assets/exec/exec_axe_3.svg","./assets/exec/exec_axe_4.svg"],residue:"./assets/env/window_residue_axe.svg",onSuccess:{san:0,radioDistort:!0},onFailure:{san:-10,escaped:!0}},gun:{tool:"gun",frames:["./assets/exec/exec_gun_1.svg","./assets/exec/exec_gun_2.svg","./assets/exec/exec_gun_3.svg","./assets/exec/exec_gun_4.svg"],residue:"./assets/env/window_residue_gun.svg",onSuccess:{san:-5,radioDistort:!1},onFailure:{san:-5,escaped:!0}},fire:{tool:"fire",frames:["./assets/exec/exec_fire_1.svg","./assets/exec/exec_fire_2.svg","./assets/exec/exec_fire_3.svg","./assets/exec/exec_fire_4.svg"],residue:"./assets/env/window_residue_fire.svg",onSuccess:{san:0,radioDistort:!1},onFailure:{san:-5,escaped:!0}}};function ry(t,e){const n=iy[e];return t.correctTool===e?{success:!0,frames:n.frames,residue:n.residue,sanDelta:n.onSuccess.san??0,radioDistort:n.onSuccess.radioDistort??!1,escaped:!1}:{success:!1,frames:n.frames,residue:n.residue,sanDelta:n.onFailure.san??-10,radioDistort:!1,escaped:!0}}const Fn=[{id:"manual-missing",surface:"manual",text:"《IDENTIFICATION MANUAL v0.4》 — two pages in the middle have been torn out."},{id:"drawer-note",surface:"drawer",text:`A sticky note: "Don't trust anyone who says they're here to take over your shift."`},{id:"radio-static",surface:"radio",text:"The radio sometimes spits out a busy tone from the laboratory."},{id:"lightbox",surface:"lightbox",text:'Lightbox: "NO DAYLIGHT ALLOWED". Outside the window, it is always night.'},{id:"cabinet-label",surface:"label",text:'Armory: FIRE AXE (available), HANDGUN (available), the rest greyed out — "DAY SHIFT ONLY".'},{id:"poster-protocol",surface:"poster1",text:"Poster on the wall: [EMERGENCY PROTOCOL] From Night 19 onward, all outposts enter emergency mode. Identification failure tolerance: 0%."},{id:"poster-warning",surface:"poster2",text:'Red hazard sign: "INFECTED TRAITS: grey skin, dilated pupils, body temperature below 28°C. Execute on sight."'},{id:"notice-board",surface:"notice",text:'Notice board: "Missing since Night 17: the former night guard of Checkpoint 3. Report any sighting of him — or of a body double — immediately." (Scrawled underneath in pencil: "he was here last night")'},{id:"shelf-log",surface:"shelf1",text:'A folder on the shelf: 《NORTHRIDGE OUTPOST OPERATIONS LOG》 Night 16: "Tonight 1▓ people tried to get in. Only 3 were real."'},{id:"shelf-report",surface:"shelf2",text:'A yellowed report: 《INVESTIGATION INTO THE ORIGIN OF THE REPLACEMENT EVENT》 "The origin is still undetermined. The number of impostors grows every night. Full lockdown advised,。"'},{id:"shelf-memo",surface:"shelf3",text:'A memo: "Remember: impostors imitate people you know. Do not hesitate. Do not talk. Execute on sight." (On the back, in the same handwriting: "trust them")'},{id:"desk-note",surface:"desk",text:`A note on the desk: "Night 18 record: misjudgment rate 2/8. Warning from HQ: one more mistake and I will be replaced. I don't want to become one of them."`},{id:"door-sign",surface:"doorsign",text:'Label on the door: "EMERGENCY EXIT — evacuation only. Unauthorized opening triggers the alarm. The door is locked."'},{id:"window-scratch",surface:"windowmark",text:'Scratches on the window frame: "They wait outside. Sometimes for hours. Do not open the window,。"'},{id:"bed-diary",surface:"bed",text:'A diary by the bed: "Night 15: I saw myself standing outside the window. It smiled at me. I did not open the door. The next day it was gone."'},{id:"sofa-magazine",surface:"sofa",text:'A magazine on the sofa: 《REPLACEMENT EVENT SPECIAL ISSUE》 "Impostor intelligence keeps evolving. Latest case: impersonating a wounded child to pass inspection."'},{id:"supply-label",surface:"supply",text:'Supply locker label: "Emergency supplies: bandage ×2, sedative ×1 (used up), spare magazines ×3. Use sparingly."'}],sy=[{id:"axe",name:"Fire Axe",desc:"Standard-issue blade.",locked:!1},{id:"gun",name:"Handgun",desc:"For Core-ticks. Aim for the core under the collarbone.",locked:!1},{id:"fire",name:"Incinerator",desc:"For Wet-nests.",locked:!1}],oy=[{id:"coffee",name:"Coffee",desc:"Warm. The machine's coffee keeps you awake a little longer.",constraint:"Hands shake for 20s; the machine only pours two cups"},{id:"sedative",name:"Sedative Leaf",desc:"Chews like dry hay.",constraint:"San drains slower; reaction cap -30%; single use"}],ay=[{key:"skinfit",name:"Skin-fit",tells:"A seam runs from behind the ear down the neck; the two eyes blink out of sync; the teeth in the ID photo never match the mouth.",response:"Fire Axe. Cut the seam.",locked:!1},{key:"coretick",name:"Core-tick",tells:'A metal ticking under the collarbone, the temples glint sometimes; pupils pin-sized; ask about the weather and it only ever answers "same as yesterday".',response:"Handgun. Aim for the core.",locked:!1},{key:"wetnest",name:"Wet-nest",tells:"Webbing glints between the fingers, its breath sinks instead of rising; refuses water; the voice carries a wet sound.",response:"Incinerator.",locked:!1},{key:"infected",name:"Infected",tells:'Still human, but the throat slides the wrong way; suddenly begs you to "open the door".',response:"Contain. Do not kill.",locked:!1},{key:"mirror",name:"Mirror",tells:"???",response:"???",locked:!0},{key:"hollow",name:"Hollow",tells:"???",response:"???",locked:!0},{key:"crawler",name:"Crawler",tells:"???",response:"???",locked:!0}],ly={id:"background-book",title:"REPLACEMENT EVENT RESPONSE MANUAL · INTERNAL",pages:[`CHAPTER 1 · ORIGIN

The Replacement Event was first recorded 19 days ago. At 2:47 AM, an unknown organism breached Laboratory Section 3 of the Northridge complex.

Early characteristics:
- The leaked matter is a translucent gel
- It seeps through skin on contact
- "Replacement completes within 24 hours

To this day, the source remains ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ confirmed.`,`CHAPTER 2 · REPLACEMENT MECHANISM

The replaced retain complete memories, appearance, and voice.

Telling signs:
1. Body temperature below 28°C
2. Pupils react to light abnormally
3. Skin in greyish tones
4. Small behavioral errors (names, habits。)

WARNING: Advanced impostors can fake all of the above.
Advanced impostors cannot fake all of the above.`,`CHAPTER 3 · THE INFECTED

Human infectees exist in a "half-replaced" state.

Identification:
- Consciousness remains, but the body slips out of control
- They report "hearing whispers"
- They beg to be executed before full conversion

POLICY: Execute on sight. Do not release.
EXCEPTION: Release upon the written request of the infectee. (See Chapter 2.)`,`CHAPTER 4 · OUTPOST DUTY

Your duties:
1. Check the papers of every visitor
2. Identify impostors and infectees
3. Pass judgment: ADMIT / EXECUTE / CONTAIN

Consequences of misjudgment:
- Admitting an impostor = contamination spreads
- Executing a human = a mark on your file

Three consecutive misjudgments, and you will be "replaced".
Four consecutive misjudgments, and you will be promoted.

Each night, five visitors arrive at the gate.`,`CHAPTER 5 · KNOWN CASES

Case 1 · Night 12
An impostor posed as a child, claiming its parents were inside. Inspection found normal body temperature and valid papers. It was admitted. The next day, three people in that sector were missing.

Case 2 · Night 16
A human infectee begged to be released for treatment. The guard hesitated, then released her. Eight hours later she completed conversion and broke through the inner line.

Case 3 · Night ██
——(The rest of this page has been torn out.)

LESSON: Do not trust anyone,。`]},cy={id:"predecessor-note",title:"A NOTE FROM THE PREVIOUS GUARD",pages:[`If you are reading this, I am already gone.

My name is Daniel Mathers. Night guard, Checkpoint 3 — the one before you. Today is my 18th night.

Across the first 17 nights my misjudgment rate was 3 out of 8. HQ sent a final warning: one more mistake, and I would be "replaced".

I don't know how many more nights I can keep doing this。`,`Night 15. I saw myself standing outside the window.

Same uniform. Same name on the badge. It smiled at me and knocked on the glass,。
t̷h̶e̵y̶ ̸s̶a̶i̶d̸ ̷"̶l̶e̷t̵ ̷m̶e̶ ̶i̷n̶,̸ ̵I̶'̷m̶ ̷t̶h̶e̸ ̶r̷e̶a̶l̵ ̶o̶n̷e̶"̸

I did not open the door. It was gone by morning.

But I know it is still out there, waiting.`,`The manual says impostors imitate people you know. But they also imitate you。

If you ever see another you outside the window, do not hesitate.

Do not talk. Do not try to tell us apart,.
Execute.

Otherwise you will never know, which one of us in the mirror is, you.`,`Final advice:

1. Do not sleep. There are claw marks on the sofa.
2. Do not overuse the sedatives. You need to stay sharp.
3. Two pages were torn out of the manual. They were the most important ones.
4. Never open the door. Even when your shift ends. Even at dawn.

Good luck.

——Daniel Mathers
Night 20, 3:22 AM

▓▓▓▓▓▓▓▓ it already knows I am dead ▓▓▓▓▓▓▓▓`]},Nc=[{id:"poster-protocol",title:"EMERGENCY PROTOCOL",pages:[`EMERGENCY PROTOCOL
(REPLACEMENT EVENT RESPONSE)

From Night 19 onward, all outposts enter emergency mode.

New regulations:
• Identification failure tolerance: 0%
• Suspects are executed on sight
• Speaking with a visitor for more than 30 seconds is forbidden
• A shift record must be filed every night

Violators will be ▓▓▓▓▓▓▓▓ immediately.

——Northridge Security Council`]},{id:"poster-warning",title:"HAZARD NOTICE",pages:[`HAZARD NOTICE

Traits of the infected:

APPEARANCE:
• Greyish skin
• Dilated pupils
• Body temperature below 28°C

BEHAVIOR:
• Claims to "need help"
• Begs to be let in for treatment
• Reports "hearing whispers"

RESPONSE:
Execute on sight. Do not release,
and do not look at them for too long.

REMEMBER: The infection cannot be reversed。`]},{id:"poster-missing",title:"MISSING PERSONNEL",pages:[`MISSING PERSONNEL NOTICE

Missing since Night 17:

• Checkpoint 3 night guard: Daniel Mathers
• Checkpoint 7 night guard: Leo Marsh
• Laboratory technician: Nora Vane

Mathers' final shift log was filed on Night 20.

If you encounter any of the above — or their body doubles —
report immediately. Do not make contact.
Do not open the door. Even for the one you recognize。

——Northridge Outpost Administration`]}],uy={id:"banner-gate",title:"NORTHRIDGE PERIMETER · SEVEN CHECKPOINTS",pages:[`NORTHRIDGE PERIMETER · CHECKPOINT MAP

The isolation system of the Northridge Perimeter consists of seven checkpoints, numbered from the outside inward along the Northridge Tunnel.

Checkpoint 1 (outer)……no signal
Checkpoint 2 (outer)……no signal
Checkpoint 3 (outer)……you are here
Checkpoint 4 (mid)……status unknown
Checkpoint 5 (mid)……status unknown
Checkpoint 6 (inner)……status unknown
Checkpoint 7 (core)……status unknown

Since Checkpoints 1 and 2 went dark, Checkpoint 3 is the last outer barrier of the line。`,`DISCIPLINE

Hold your gate.
Do not ask about the gates behind you.

Checkpoint 3 rules:
• Process visitors only. Do not ask where they go.
• Contact with inner checkpoints is forbidden.
• Leaving your post to enter the tunnel is forbidden.
• Four visitors per night。 If a fifth one knocks——do not open.

Remember: the gate is not for looking out.
It is for keeping the outside from seeing in,.

▓▓▓▓▓▓▓ hold the gate ▓▓▓▓▓▓▓

——Northridge Security Council`]};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mf="160",dy=0,Vh=1,fy=2,P0=1,hy=2,hi=3,sr=0,pn=1,vi=2,er=0,Rs=1,Wh=2,jh=3,Xh=4,py=5,Sr=100,my=101,gy=102,qh=103,Yh=104,vy=200,_y=201,xy=202,yy=203,cd=204,ud=205,Sy=206,Ey=207,My=208,Ty=209,wy=210,Ay=211,Ry=212,Cy=213,by=214,Ly=0,Py=1,Ny=2,Cl=3,Dy=4,Iy=5,Uy=6,Oy=7,N0=0,Fy=1,ky=2,tr=0,zy=1,By=2,Hy=3,Gy=4,Vy=5,Wy=6,D0=300,Os=301,Fs=302,dd=303,fd=304,Ql=306,bl=1e3,qn=1001,hd=1002,tn=1003,$h=1004,Dc=1005,Ln=1006,jy=1007,zo=1008,nr=1009,Xy=1010,qy=1011,gf=1012,I0=1013,Wi=1014,ji=1015,Bo=1016,U0=1017,O0=1018,br=1020,Yy=1021,Yn=1023,$y=1024,Ky=1025,Lr=1026,ks=1027,Zy=1028,F0=1029,Qy=1030,k0=1031,z0=1033,Ic=33776,Uc=33777,Oc=33778,Fc=33779,Kh=35840,Zh=35841,Qh=35842,Jh=35843,B0=36196,ep=37492,tp=37496,np=37808,ip=37809,rp=37810,sp=37811,op=37812,ap=37813,lp=37814,cp=37815,up=37816,dp=37817,fp=37818,hp=37819,pp=37820,mp=37821,kc=36492,gp=36494,vp=36495,Jy=36283,_p=36284,xp=36285,yp=36286,H0=3e3,Pr=3001,eS=3200,tS=3201,G0=0,nS=1,Pn="",At="srgb",Ci="srgb-linear",vf="display-p3",Jl="display-p3-linear",Ll="linear",dt="srgb",Pl="rec709",Nl="p3",Vr=7680,Sp=519,iS=512,rS=513,sS=514,V0=515,oS=516,aS=517,lS=518,cS=519,Ep=35044,Mp="300 es",pd=1035,yi=2e3,Dl=2001;class Vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zc=Math.PI/180,md=180/Math.PI;function Yo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function cn(t,e,n){return Math.max(e,Math.min(n,t))}function uS(t,e){return(t%e+e)%e}function Bc(t,e,n){return(1-n)*t+n*e}function Tp(t){return(t&t-1)===0&&t!==0}function gd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],x=i[8],_=r[0],p=r[3],u=r[6],v=r[1],g=r[4],y=r[7],b=r[2],C=r[5],A=r[8];return s[0]=o*_+a*v+l*b,s[3]=o*p+a*g+l*C,s[6]=o*u+a*y+l*A,s[1]=c*_+d*v+f*b,s[4]=c*p+d*g+f*C,s[7]=c*u+d*y+f*A,s[2]=h*_+m*v+x*b,s[5]=h*p+m*g+x*C,s[8]=h*u+m*y+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,m=c*s-o*l,x=n*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(r*c-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(d*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=m*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Hc.makeScale(e,n)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hc=new je;function W0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ho(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dS(){const t=Ho("canvas");return t.style.display="block",t}const wp={};function So(t){t in wp||(wp[t]=!0,console.warn(t))}const Ap=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rp=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_a={[Ci]:{transfer:Ll,primaries:Pl,toReference:t=>t,fromReference:t=>t},[At]:{transfer:dt,primaries:Pl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Jl]:{transfer:Ll,primaries:Nl,toReference:t=>t.applyMatrix3(Rp),fromReference:t=>t.applyMatrix3(Ap)},[vf]:{transfer:dt,primaries:Nl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Rp),fromReference:t=>t.applyMatrix3(Ap).convertLinearToSRGB()}},fS=new Set([Ci,Jl]),nt={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!fS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=_a[e].toReference,r=_a[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return _a[t].primaries},getTransfer:function(t){return t===Pn?Ll:_a[t].transfer}};function Cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class j0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=Ho("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ho("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Cs(n[i]/255)*255):n[i]=Cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hS=0;class X0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Yo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vc(r[o].image)):s.push(Vc(r[o]))}else s=Vc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?j0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pS=0;class mn extends Vs{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=qn,r=qn,s=Ln,o=zo,a=Yn,l=nr,c=mn.DEFAULT_ANISOTROPY,d=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Yo(),this.name="",this.source=new X0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(So("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Pr?At:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bl:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bl:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return So("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?Pr:H0}set encoding(e){So("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pr?At:Pn}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=D0;mn.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,n=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],x=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,y=(m+1)/2,b=(u+1)/2,C=(d+h)/4,A=(f+_)/4,D=(x+p)/4;return g>y&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=A/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=D/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-x)*(p-x)+(f-_)*(f-_)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(f-_)/v,this.z=(h-d)/v,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mS extends Vs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new pt(0,0,e,n),this.scissorTest=!1,this.viewport=new pt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(So("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pr?At:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new X0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends mS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class q0 extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gS extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=_;return}if(f!==_||l!==h||c!==m||d!==x){let p=1-a;const u=l*h+c*m+d*x+f*_,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const b=Math.sqrt(g),C=Math.atan2(b,u*v);p=Math.sin(p*C)/b,a=Math.sin(a*C)/b}const y=a*v;if(l=l*p+h*y,c=c*p+m*y,d=d*p+x*y,f=f*p+_*y,p===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=b,c*=b,d*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+d*f+l*m-c*h,e[n+1]=l*x+d*h+c*f-a*m,e[n+2]=c*x+d*m+a*h-l*f,e[n+3]=d*x-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*m*x,this._y=c*m*f-h*d*x,this._z=c*d*x+h*m*f,this._w=c*d*f-h*m*x;break;case"YXZ":this._x=h*d*f+c*m*x,this._y=c*m*f-h*d*x,this._z=c*d*x-h*m*f,this._w=c*d*f+h*m*x;break;case"ZXY":this._x=h*d*f-c*m*x,this._y=c*m*f+h*d*x,this._z=c*d*x+h*m*f,this._w=c*d*f-h*m*x;break;case"ZYX":this._x=h*d*f-c*m*x,this._y=c*m*f+h*d*x,this._z=c*d*x-h*m*f,this._w=c*d*f+h*m*x;break;case"YZX":this._x=h*d*f+c*m*x,this._y=c*m*f+h*d*x,this._z=c*d*x-h*m*f,this._w=c*d*f-h*m*x;break;case"XZY":this._x=h*d*f-c*m*x,this._y=c*m*f-h*d*x,this._z=c*d*x+h*m*f,this._w=c*d*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Cp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Cp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new O,Cp=new $o;class Ko{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),ya.subVectors(this.max,to),jr.subVectors(e.a,to),Xr.subVectors(e.b,to),qr.subVectors(e.c,to),Ni.subVectors(Xr,jr),Di.subVectors(qr,Xr),fr.subVectors(jr,qr);let n=[0,-Ni.z,Ni.y,0,-Di.z,Di.y,0,-fr.z,fr.y,Ni.z,0,-Ni.x,Di.z,0,-Di.x,fr.z,0,-fr.x,-Ni.y,Ni.x,0,-Di.y,Di.x,0,-fr.y,fr.x,0];return!jc(n,jr,Xr,qr,ya)||(n=[1,0,0,0,1,0,0,0,1],!jc(n,jr,Xr,qr,ya))?!1:(Sa.crossVectors(Ni,Di),n=[Sa.x,Sa.y,Sa.z],jc(n,jr,Xr,qr,ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new O,new O,new O,new O,new O,new O,new O,new O],kn=new O,xa=new Ko,jr=new O,Xr=new O,qr=new O,Ni=new O,Di=new O,fr=new O,to=new O,ya=new O,Sa=new O,hr=new O;function jc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){hr.fromArray(t,s);const a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),c=n.dot(hr),d=i.dot(hr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const vS=new Ko,no=new O,Xc=new O;class _f{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):vS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const n=no.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(no,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Xc)),this.expandByPoint(no.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new O,qc=new O,Ea=new O,Ii=new O,Yc=new O,Ma=new O,$c=new O;class _S{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qc.copy(e).add(n).multiplyScalar(.5),Ea.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(qc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ea),a=Ii.dot(this.direction),l=-Ii.dot(Ea),c=Ii.lengthSq(),d=Math.abs(1-o*o);let f,h,m,x;if(d>0)if(f=o*l-a,h=o*a-l,x=s*d,f>=0)if(h>=-x)if(h<=x){const _=1/d;f*=_,h*=_,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qc).addScaledVector(Ea,h),m}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,s){Yc.subVectors(n,e),Ma.subVectors(i,e),$c.crossVectors(Yc,Ma);let o=this.direction.dot($c),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(Ma.crossVectors(Ii,Ma));if(l<0)return null;const c=a*this.direction.dot(Yc.cross(Ii));if(c<0||l+c>o)return null;const d=-a*Ii.dot($c);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,s,o,a,l,c,d,f,h,m,x,_,p){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,m,x,_,p)}set(e,n,i,r,s,o,a,l,c,d,f,h,m,x,_,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=x,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),o=1/Yr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,m=o*f,x=a*d,_=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+x*c,n[5]=h-_*c,n[9]=-a*l,n[2]=_-h*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,x=c*d,_=c*f;n[0]=h+_*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=m*a-x,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,x=c*d,_=c*f;n[0]=h-_*a,n[4]=-o*f,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*d,n[9]=_-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,m=o*f,x=a*d,_=a*f;n[0]=l*d,n[4]=x*c-m,n[8]=h*c+_,n[1]=l*f,n[5]=_*c+h,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,x=a*l,_=a*c;n[0]=l*d,n[4]=_-h*f,n[8]=x*f+m,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*f+x,n[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,m=o*c,x=a*l,_=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+_,n[5]=o*d,n[9]=m*f-x,n[2]=x*f-m,n[6]=a*d,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xS,e,yS)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ui.crossVectors(i,vn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ui.crossVectors(i,vn)),Ui.normalize(),Ta.crossVectors(vn,Ui),r[0]=Ui.x,r[4]=Ta.x,r[8]=vn.x,r[1]=Ui.y,r[5]=Ta.y,r[9]=vn.y,r[2]=Ui.z,r[6]=Ta.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],x=i[2],_=i[6],p=i[10],u=i[14],v=i[3],g=i[7],y=i[11],b=i[15],C=r[0],A=r[4],D=r[8],E=r[12],M=r[1],B=r[5],q=r[9],J=r[13],P=r[2],F=r[6],X=r[10],$=r[14],N=r[3],U=r[7],k=r[11],Z=r[15];return s[0]=o*C+a*M+l*P+c*N,s[4]=o*A+a*B+l*F+c*U,s[8]=o*D+a*q+l*X+c*k,s[12]=o*E+a*J+l*$+c*Z,s[1]=d*C+f*M+h*P+m*N,s[5]=d*A+f*B+h*F+m*U,s[9]=d*D+f*q+h*X+m*k,s[13]=d*E+f*J+h*$+m*Z,s[2]=x*C+_*M+p*P+u*N,s[6]=x*A+_*B+p*F+u*U,s[10]=x*D+_*q+p*X+u*k,s[14]=x*E+_*J+p*$+u*Z,s[3]=v*C+g*M+y*P+b*N,s[7]=v*A+g*B+y*F+b*U,s[11]=v*D+g*q+y*X+b*k,s[15]=v*E+g*J+y*$+b*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],x=e[3],_=e[7],p=e[11],u=e[15];return x*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+_*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*d-s*l*d)+p*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],x=e[12],_=e[13],p=e[14],u=e[15],v=f*p*c-_*h*c+_*l*m-a*p*m-f*l*u+a*h*u,g=x*h*c-d*p*c-x*l*m+o*p*m+d*l*u-o*h*u,y=d*_*c-x*f*c+x*a*m-o*_*m-d*a*u+o*f*u,b=x*f*l-d*_*l-x*a*h+o*_*h+d*a*p-o*f*p,C=n*v+i*g+r*y+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=v*A,e[1]=(_*h*s-f*p*s-_*r*m+i*p*m+f*r*u-i*h*u)*A,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*u+i*l*u)*A,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*A,e[4]=g*A,e[5]=(d*p*s-x*h*s+x*r*m-n*p*m-d*r*u+n*h*u)*A,e[6]=(x*l*s-o*p*s-x*r*c+n*p*c+o*r*u-n*l*u)*A,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*m+n*l*m)*A,e[8]=y*A,e[9]=(x*f*s-d*_*s-x*i*m+n*_*m+d*i*u-n*f*u)*A,e[10]=(o*_*s-x*a*s+x*i*c-n*_*c-o*i*u+n*a*u)*A,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*m-n*a*m)*A,e[12]=b*A,e[13]=(d*_*r-x*f*r+x*i*h-n*_*h-d*i*p+n*f*p)*A,e[14]=(x*a*r-o*_*r-x*i*l+n*_*l+o*i*p-n*a*p)*A,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,m=s*d,x=s*f,_=o*d,p=o*f,u=a*f,v=l*c,g=l*d,y=l*f,b=i.x,C=i.y,A=i.z;return r[0]=(1-(_+u))*b,r[1]=(m+y)*b,r[2]=(x-g)*b,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(h+u))*C,r[6]=(p+v)*C,r[7]=0,r[8]=(x+g)*A,r[9]=(p-v)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Yr.set(r[0],r[1],r[2]).length();const o=Yr.set(r[4],r[5],r[6]).length(),a=Yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const c=1/s,d=1/o,f=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=d,zn.elements[5]*=d,zn.elements[6]*=d,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=yi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,x;if(a===yi)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Dl)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=yi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,m=(i+r)*d;let x,_;if(a===yi)x=(o+s)*f,_=-2*f;else if(a===Dl)x=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Yr=new O,zn=new Ct,xS=new O(0,0,0),yS=new O(1,1,1),Ui=new O,Ta=new O,vn=new O,bp=new Ct,Lp=new $o;class ec{constructor(e=0,n=0,i=0,r=ec.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lp.setFromEuler(this),this.setFromQuaternion(Lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ec.DEFAULT_ORDER="XYZ";class Y0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SS=0;const Pp=new O,$r=new $o,ui=new Ct,wa=new O,io=new O,ES=new O,MS=new $o,Np=new O(1,0,0),Dp=new O(0,1,0),Ip=new O(0,0,1),TS={type:"added"},wS={type:"removed"};class rn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new O,n=new ec,i=new $o,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new je}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Np,e)}rotateY(e){return this.rotateOnAxis(Dp,e)}rotateZ(e){return this.rotateOnAxis(Ip,e)}translateOnAxis(e,n){return Pp.copy(e).applyQuaternion(this.quaternion),this.position.add(Pp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Np,e)}translateY(e){return this.translateOnAxis(Dp,e)}translateZ(e){return this.translateOnAxis(Ip,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wa.copy(e):wa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(io,wa,this.up):ui.lookAt(wa,io,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(ui),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(TS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,ES),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,MS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new O(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new O,di=new O,Kc=new O,fi=new O,Kr=new O,Zr=new O,Up=new O,Zc=new O,Qc=new O,Jc=new O;let Aa=!1;class Xn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),di.subVectors(i,n),Kc.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(di),l=Bn.dot(Kc),c=di.dot(di),d=di.dot(Kc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*d)*h,x=(o*d-a*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Aa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Aa=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),di.subVectors(e,n),Bn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Bn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Aa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Aa=!0),Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Kr.subVectors(r,i),Zr.subVectors(s,i),Zc.subVectors(e,i);const l=Kr.dot(Zc),c=Zr.dot(Zc);if(l<=0&&c<=0)return n.copy(i);Qc.subVectors(e,r);const d=Kr.dot(Qc),f=Zr.dot(Qc);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Kr,o);Jc.subVectors(e,s);const m=Kr.dot(Jc),x=Zr.dot(Jc);if(x>=0&&m<=x)return n.copy(s);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Zr,a);const p=d*x-m*f;if(p<=0&&f-d>=0&&m-x>=0)return Up.subVectors(s,r),a=(f-d)/(f-d+(m-x)),n.copy(r).addScaledVector(Up,a);const u=1/(p+_+h);return o=_*u,a=h*u,n.copy(i).addScaledVector(Kr,o).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function eu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=uS(e,1),n=cn(n,0,1),i=cn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=eu(o,s,e+1/3),this.g=eu(o,s,e),this.b=eu(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=At){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=At){const i=$0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=Gc(e.r),this.g=Gc(e.g),this.b=Gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return nt.fromWorkingColorSpace(qt.copy(this),e),Math.round(cn(qt.r*255,0,255))*65536+Math.round(cn(qt.g*255,0,255))*256+Math.round(cn(qt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=At){nt.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==At?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+n,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Oi),e.getHSL(Ra);const i=Bc(Oi.h,Ra.h,n),r=Bc(Oi.s,Ra.s,n),s=Bc(Oi.l,Ra.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ke;Ke.NAMES=$0;let AS=0;class Zo extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Rs,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cd&&(i.blendSrc=this.blendSrc),this.blendDst!==ud&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vn extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=N0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new O,Ca=new Qe;class si{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ep,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ca.fromBufferAttribute(this,n),Ca.applyMatrix3(e),this.setXY(n,Ca.x,Ca.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=eo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ep&&(e.usage=this.usage),e}}class K0 extends si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Z0 extends si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class oi extends si{constructor(e,n,i){super(new Float32Array(e),n,i)}}let RS=0;const Rn=new Ct,tu=new rn,Qr=new O,_n=new Ko,ro=new Ko,Ot=new O;class cr extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W0(e)?Z0:K0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new oi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _f);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(_n.min,ro.min),_n.expandByPoint(Ot),Ot.addVectors(_n.max,ro.max),_n.expandByPoint(Ot)):(_n.expandByPoint(ro.min),_n.expandByPoint(ro.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ot.fromBufferAttribute(a,c),l&&(Qr.fromBufferAttribute(e,c),Ot.add(Qr)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let M=0;M<a;M++)c[M]=new O,d[M]=new O;const f=new O,h=new O,m=new O,x=new Qe,_=new Qe,p=new Qe,u=new O,v=new O;function g(M,B,q){f.fromArray(r,M*3),h.fromArray(r,B*3),m.fromArray(r,q*3),x.fromArray(o,M*2),_.fromArray(o,B*2),p.fromArray(o,q*2),h.sub(f),m.sub(f),_.sub(x),p.sub(x);const J=1/(_.x*p.y-p.x*_.y);isFinite(J)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(J),v.copy(m).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(J),c[M].add(u),c[B].add(u),c[q].add(u),d[M].add(v),d[B].add(v),d[q].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let M=0,B=y.length;M<B;++M){const q=y[M],J=q.start,P=q.count;for(let F=J,X=J+P;F<X;F+=3)g(i[F+0],i[F+1],i[F+2])}const b=new O,C=new O,A=new O,D=new O;function E(M){A.fromArray(s,M*3),D.copy(A);const B=c[M];b.copy(B),b.sub(A.multiplyScalar(A.dot(B))).normalize(),C.crossVectors(D,B);const J=C.dot(d[M])<0?-1:1;l[M*4]=b.x,l[M*4+1]=b.y,l[M*4+2]=b.z,l[M*4+3]=J}for(let M=0,B=y.length;M<B;++M){const q=y[M],J=q.start,P=q.count;for(let F=J,X=J+P;F<X;F+=3)E(i[F+0]),E(i[F+1]),E(i[F+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,d=new O,f=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let m=0,x=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*d;for(let u=0;u<d;u++)h[x++]=c[m++]}return new si(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Op=new Ct,pr=new _S,ba=new _f,Fp=new O,Jr=new O,es=new O,ts=new O,nu=new O,La=new O,Pa=new Qe,Na=new Qe,Da=new Qe,kp=new O,zp=new O,Bp=new O,Ia=new O,Ua=new O;class Me extends rn{constructor(e=new cr,n=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){La.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(nu.fromBufferAttribute(f,e),o?La.addScaledVector(nu,d):La.addScaledVector(nu.sub(n),d))}n.add(La)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(ba.containsPoint(pr.origin)===!1&&(pr.intersectSphere(ba,Fp)===null||pr.origin.distanceToSquared(Fp)>(e.far-e.near)**2))&&(Op.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Op),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const p=h[x],u=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,b=g;y<b;y+=3){const C=a.getX(y),A=a.getX(y+1),D=a.getX(y+2);r=Oa(this,u,e,i,c,d,f,C,A,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){const v=a.getX(p),g=a.getX(p+1),y=a.getX(p+2);r=Oa(this,o,e,i,c,d,f,v,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const p=h[x],u=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,b=g;y<b;y+=3){const C=y,A=y+1,D=y+2;r=Oa(this,u,e,i,c,d,f,C,A,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){const v=p,g=p+1,y=p+2;r=Oa(this,o,e,i,c,d,f,v,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function CS(t,e,n,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===sr,a),l===null)return null;Ua.copy(a),Ua.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ua);return c<n.near||c>n.far?null:{distance:c,point:Ua.clone(),object:t}}function Oa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Jr),t.getVertexPosition(l,es),t.getVertexPosition(c,ts);const d=CS(t,e,n,i,Jr,es,ts,Ia);if(d){r&&(Pa.fromBufferAttribute(r,a),Na.fromBufferAttribute(r,l),Da.fromBufferAttribute(r,c),d.uv=Xn.getInterpolation(Ia,Jr,es,ts,Pa,Na,Da,new Qe)),s&&(Pa.fromBufferAttribute(s,a),Na.fromBufferAttribute(s,l),Da.fromBufferAttribute(s,c),d.uv1=Xn.getInterpolation(Ia,Jr,es,ts,Pa,Na,Da,new Qe),d.uv2=d.uv1),o&&(kp.fromBufferAttribute(o,a),zp.fromBufferAttribute(o,l),Bp.fromBufferAttribute(o,c),d.normal=Xn.getInterpolation(Ia,Jr,es,ts,kp,zp,Bp,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};Xn.getNormal(Jr,es,ts,f.normal),d.face=f}return d}class rt extends cr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(d,3)),this.setAttribute("uv",new oi(f,2));function x(_,p,u,v,g,y,b,C,A,D,E){const M=y/A,B=b/D,q=y/2,J=b/2,P=C/2,F=A+1,X=D+1;let $=0,N=0;const U=new O;for(let k=0;k<X;k++){const Z=k*B-J;for(let Q=0;Q<F;Q++){const V=Q*M-q;U[_]=V*v,U[p]=Z*g,U[u]=P,c.push(U.x,U.y,U.z),U[_]=0,U[p]=0,U[u]=C>0?1:-1,d.push(U.x,U.y,U.z),f.push(Q/A),f.push(1-k/D),$+=1}}for(let k=0;k<D;k++)for(let Z=0;Z<A;Z++){const Q=h+Z+F*k,V=h+Z+F*(k+1),K=h+(Z+1)+F*(k+1),se=h+(Z+1)+F*k;l.push(Q,V,se),l.push(V,K,se),N+=6}a.addGroup(m,N,E),m+=N,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=zs(t[n]);for(const r in i)e[r]=i[r]}return e}function bS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Q0(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const LS={clone:zs,merge:Jt};var PS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PS,this.fragmentShader=NS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=bS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class J0 extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yn extends J0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=md*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return md*2*Math.atan(Math.tan(zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ns=-90,is=1;class DS extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(ns,is,e,n);r.layers=this.layers,this.add(r);const s=new yn(ns,is,e,n);s.layers=this.layers,this.add(s);const o=new yn(ns,is,e,n);o.layers=this.layers,this.add(o);const a=new yn(ns,is,e,n);a.layers=this.layers,this.add(a);const l=new yn(ns,is,e,n);l.layers=this.layers,this.add(l);const c=new yn(ns,is,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class ev extends mn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Os,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IS extends Fr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(So("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pr?At:Pn),this.texture=new ev(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rt(5,5,5),s=new kr({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:er});s.uniforms.tEquirect.value=n;const o=new Me(r,s),a=n.minFilter;return n.minFilter===zo&&(n.minFilter=Ln),new DS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const iu=new O,US=new O,OS=new je;class xr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=iu.subVectors(i,n).cross(US.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(iu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OS.getNormalMatrix(e),r=this.coplanarPoint(iu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new _f,Fa=new O;class xf{constructor(e=new xr,n=new xr,i=new xr,r=new xr,s=new xr,o=new xr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],x=r[9],_=r[10],p=r[11],u=r[12],v=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,p-m,y-u).normalize(),i[1].setComponents(l+s,h+c,p+m,y+u).normalize(),i[2].setComponents(l+o,h+d,p+x,y+v).normalize(),i[3].setComponents(l-o,h-d,p-x,y-v).normalize(),i[4].setComponents(l-a,h-f,p-_,y-g).normalize(),n===yi)i[5].setComponents(l+a,h+f,p+_,y+g).normalize();else if(n===Dl)i[5].setComponents(a,f,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fa.x=r.normal.x>0?e.max.x:e.min.x,Fa.y=r.normal.y>0?e.max.y:e.min.y,Fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function FS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,m=f.byteLength,x=t.createBuffer();t.bindBuffer(d,x),t.bufferData(d,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,f){const h=d.array,m=d._updateRange,x=d.updateRanges;if(t.bindBuffer(f,c),m.count===-1&&x.length===0&&t.bufferSubData(f,0,h),x.length!==0){for(let _=0,p=x.length;_<p;_++){const u=x[_];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:o,remove:a,update:l}}class gt extends cr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,m=[],x=[],_=[],p=[];for(let u=0;u<d;u++){const v=u*h-o;for(let g=0;g<c;g++){const y=g*f-s;x.push(y,-v,0),_.push(0,0,1),p.push(g/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const g=v+c*u,y=v+c*(u+1),b=v+1+c*(u+1),C=v+1+c*u;m.push(g,y,C),m.push(y,b,C)}this.setIndex(m),this.setAttribute("position",new oi(x,3)),this.setAttribute("normal",new oi(_,3)),this.setAttribute("uv",new oi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.widthSegments,e.heightSegments)}}var kS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,VS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,YS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,aE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pE="gl_FragColor = linearToOutputTexel( gl_FragColor );",mE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_E=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ME=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,RE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,WE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,JE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,eM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_M=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:kS,alphahash_pars_fragment:zS,alphamap_fragment:BS,alphamap_pars_fragment:HS,alphatest_fragment:GS,alphatest_pars_fragment:VS,aomap_fragment:WS,aomap_pars_fragment:jS,batching_pars_vertex:XS,batching_vertex:qS,begin_vertex:YS,beginnormal_vertex:$S,bsdfs:KS,iridescence_fragment:ZS,bumpmap_pars_fragment:QS,clipping_planes_fragment:JS,clipping_planes_pars_fragment:eE,clipping_planes_pars_vertex:tE,clipping_planes_vertex:nE,color_fragment:iE,color_pars_fragment:rE,color_pars_vertex:sE,color_vertex:oE,common:aE,cube_uv_reflection_fragment:lE,defaultnormal_vertex:cE,displacementmap_pars_vertex:uE,displacementmap_vertex:dE,emissivemap_fragment:fE,emissivemap_pars_fragment:hE,colorspace_fragment:pE,colorspace_pars_fragment:mE,envmap_fragment:gE,envmap_common_pars_fragment:vE,envmap_pars_fragment:_E,envmap_pars_vertex:xE,envmap_physical_pars_fragment:PE,envmap_vertex:yE,fog_vertex:SE,fog_pars_vertex:EE,fog_fragment:ME,fog_pars_fragment:TE,gradientmap_pars_fragment:wE,lightmap_fragment:AE,lightmap_pars_fragment:RE,lights_lambert_fragment:CE,lights_lambert_pars_fragment:bE,lights_pars_begin:LE,lights_toon_fragment:NE,lights_toon_pars_fragment:DE,lights_phong_fragment:IE,lights_phong_pars_fragment:UE,lights_physical_fragment:OE,lights_physical_pars_fragment:FE,lights_fragment_begin:kE,lights_fragment_maps:zE,lights_fragment_end:BE,logdepthbuf_fragment:HE,logdepthbuf_pars_fragment:GE,logdepthbuf_pars_vertex:VE,logdepthbuf_vertex:WE,map_fragment:jE,map_pars_fragment:XE,map_particle_fragment:qE,map_particle_pars_fragment:YE,metalnessmap_fragment:$E,metalnessmap_pars_fragment:KE,morphcolor_vertex:ZE,morphnormal_vertex:QE,morphtarget_pars_vertex:JE,morphtarget_vertex:eM,normal_fragment_begin:tM,normal_fragment_maps:nM,normal_pars_fragment:iM,normal_pars_vertex:rM,normal_vertex:sM,normalmap_pars_fragment:oM,clearcoat_normal_fragment_begin:aM,clearcoat_normal_fragment_maps:lM,clearcoat_pars_fragment:cM,iridescence_pars_fragment:uM,opaque_fragment:dM,packing:fM,premultiplied_alpha_fragment:hM,project_vertex:pM,dithering_fragment:mM,dithering_pars_fragment:gM,roughnessmap_fragment:vM,roughnessmap_pars_fragment:_M,shadowmap_pars_fragment:xM,shadowmap_pars_vertex:yM,shadowmap_vertex:SM,shadowmask_pars_fragment:EM,skinbase_vertex:MM,skinning_pars_vertex:TM,skinning_vertex:wM,skinnormal_vertex:AM,specularmap_fragment:RM,specularmap_pars_fragment:CM,tonemapping_fragment:bM,tonemapping_pars_fragment:LM,transmission_fragment:PM,transmission_pars_fragment:NM,uv_pars_fragment:DM,uv_pars_vertex:IM,uv_vertex:UM,worldpos_vertex:OM,background_vert:FM,background_frag:kM,backgroundCube_vert:zM,backgroundCube_frag:BM,cube_vert:HM,cube_frag:GM,depth_vert:VM,depth_frag:WM,distanceRGBA_vert:jM,distanceRGBA_frag:XM,equirect_vert:qM,equirect_frag:YM,linedashed_vert:$M,linedashed_frag:KM,meshbasic_vert:ZM,meshbasic_frag:QM,meshlambert_vert:JM,meshlambert_frag:eT,meshmatcap_vert:tT,meshmatcap_frag:nT,meshnormal_vert:iT,meshnormal_frag:rT,meshphong_vert:sT,meshphong_frag:oT,meshphysical_vert:aT,meshphysical_frag:lT,meshtoon_vert:cT,meshtoon_frag:uT,points_vert:dT,points_frag:fT,shadow_vert:hT,shadow_frag:pT,sprite_vert:mT,sprite_frag:gT},ae={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ti={basic:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Jt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Jt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Jt([ae.points,ae.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Jt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Jt([ae.common,ae.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Jt([ae.sprite,ae.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Jt([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Jt([ae.lights,ae.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ti.physical={uniforms:Jt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ka={r:0,b:0,g:0};function vT(t,e,n,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function x(p,u){let v=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?_(a,l):g&&g.isColor&&(_(g,1),v=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ql)?(d===void 0&&(d=new Me(new rt(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:zs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=nt.getTransfer(g.colorSpace)!==dt,(f!==g||h!==g.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=g,h=g.version,m=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Me(new gt(2,2),new kr({name:"BackgroundMaterial",uniforms:zs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=nt.getTransfer(g.colorSpace)!==dt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(ka,Q0(t)),i.buffers.color.setClear(ka.r,ka.g,ka.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:x}}function _T(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,d=!1;function f(P,F,X,$,N){let U=!1;if(o){const k=_($,X,F);c!==k&&(c=k,m(c.object)),U=u(P,$,X,N),U&&v(P,$,X,N)}else{const k=F.wireframe===!0;(c.geometry!==$.id||c.program!==X.id||c.wireframe!==k)&&(c.geometry=$.id,c.program=X.id,c.wireframe=k,U=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,D(P,F,X,$),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(P){return i.isWebGL2?t.bindVertexArray(P):s.bindVertexArrayOES(P)}function x(P){return i.isWebGL2?t.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,F,X){const $=X.wireframe===!0;let N=a[P.id];N===void 0&&(N={},a[P.id]=N);let U=N[F.id];U===void 0&&(U={},N[F.id]=U);let k=U[$];return k===void 0&&(k=p(h()),U[$]=k),k}function p(P){const F=[],X=[],$=[];for(let N=0;N<r;N++)F[N]=0,X[N]=0,$[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:$,object:P,attributes:{},index:null}}function u(P,F,X,$){const N=c.attributes,U=F.attributes;let k=0;const Z=X.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const K=N[Q];let se=U[Q];if(se===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;k++}return c.attributesNum!==k||c.index!==$}function v(P,F,X,$){const N={},U=F.attributes;let k=0;const Z=X.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let K=U[Q];K===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),N[Q]=se,k++}c.attributes=N,c.attributesNum=k,c.index=$}function g(){const P=c.newAttributes;for(let F=0,X=P.length;F<X;F++)P[F]=0}function y(P){b(P,0)}function b(P,F){const X=c.newAttributes,$=c.enabledAttributes,N=c.attributeDivisors;X[P]=1,$[P]===0&&(t.enableVertexAttribArray(P),$[P]=1),N[P]!==F&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),N[P]=F)}function C(){const P=c.newAttributes,F=c.enabledAttributes;for(let X=0,$=F.length;X<$;X++)F[X]!==P[X]&&(t.disableVertexAttribArray(X),F[X]=0)}function A(P,F,X,$,N,U,k){k===!0?t.vertexAttribIPointer(P,F,X,N,U):t.vertexAttribPointer(P,F,X,$,N,U)}function D(P,F,X,$){if(i.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const N=$.attributes,U=X.getAttributes(),k=F.defaultAttributeValues;for(const Z in U){const Q=U[Z];if(Q.location>=0){let V=N[Z];if(V===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const K=V.normalized,se=V.itemSize,de=n.get(V);if(de===void 0)continue;const me=de.buffer,z=de.type,Se=de.bytesPerElement,ye=i.isWebGL2===!0&&(z===t.INT||z===t.UNSIGNED_INT||V.gpuType===I0);if(V.isInterleavedBufferAttribute){const Ye=V.data,H=Ye.stride,Dt=V.offset;if(Ye.isInstancedInterleavedBuffer){for(let we=0;we<Q.locationSize;we++)b(Q.location+we,Ye.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let we=0;we<Q.locationSize;we++)y(Q.location+we);t.bindBuffer(t.ARRAY_BUFFER,me);for(let we=0;we<Q.locationSize;we++)A(Q.location+we,se/Q.locationSize,z,K,H*Se,(Dt+se/Q.locationSize*we)*Se,ye)}else{if(V.isInstancedBufferAttribute){for(let Ye=0;Ye<Q.locationSize;Ye++)b(Q.location+Ye,V.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ye=0;Ye<Q.locationSize;Ye++)y(Q.location+Ye);t.bindBuffer(t.ARRAY_BUFFER,me);for(let Ye=0;Ye<Q.locationSize;Ye++)A(Q.location+Ye,se/Q.locationSize,z,K,se*Se,se/Q.locationSize*Ye*Se,ye)}}else if(k!==void 0){const K=k[Z];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Q.location,K);break;case 3:t.vertexAttrib3fv(Q.location,K);break;case 4:t.vertexAttrib4fv(Q.location,K);break;default:t.vertexAttrib1fv(Q.location,K)}}}}C()}function E(){q();for(const P in a){const F=a[P];for(const X in F){const $=F[X];for(const N in $)x($[N].object),delete $[N];delete F[X]}delete a[P]}}function M(P){if(a[P.id]===void 0)return;const F=a[P.id];for(const X in F){const $=F[X];for(const N in $)x($[N].object),delete $[N];delete F[X]}delete a[P.id]}function B(P){for(const F in a){const X=a[F];if(X[P.id]===void 0)continue;const $=X[P.id];for(const N in $)x($[N].object),delete $[N];delete X[P.id]}}function q(){J(),d=!0,c!==l&&(c=l,m(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:q,resetDefaultState:J,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:B,initAttributes:g,enableAttribute:y,disableUnusedAttributes:C}}function xT(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let m,x;if(r)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<h;x++)this.render(d[x],f[x]);else{m.multiDrawArraysWEBGL(s,d,0,f,0,h);let x=0;for(let _=0;_<h;_++)x+=f[_];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function yT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,y=o||e.has("OES_texture_float"),b=g&&y,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:C}}function ST(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new xr,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||x===null||x.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,g=v*4;let y=u.clippingState||null;l.value=y,y=d(x,h,g,m);for(let b=0;b!==g;++b)y[b]=n[b];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,x){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const u=m+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,y=m;g!==_;++g,y+=4)o.copy(f[g]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ET(t){let e=new WeakMap;function n(o,a){return a===dd?o.mapping=Os:a===fd&&(o.mapping=Fs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===dd||a===fd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new IS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class MT extends J0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const vs=4,Hp=[.125,.215,.35,.446,.526,.582],Er=20,ru=new MT,Gp=new Ke;let su=null,ou=0,au=0;const yr=(1+Math.sqrt(5))/2,rs=1/yr,Vp=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,yr,rs),new O(0,yr,-rs),new O(rs,0,yr),new O(-rs,0,yr),new O(yr,rs,0),new O(-yr,rs,0)];class Wp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){su=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(su,ou,au),e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),su=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Bo,format:Yn,colorSpace:Ci,depthBuffer:!1},r=jp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TT(s)),this._blurMaterial=wT(s,e,n)}return r}_compileMaterial(e){const n=new Me(this._lodPlanes[0],e);this._renderer.compile(n,ru)}_sceneToCubeUV(e,n,i,r){const a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Gp),d.toneMapping=tr,d.autoClear=!1;const m=new Vn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),x=new Me(new rt,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Gp),_=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;za(r,v*g,u>2?g:0,g,g),d.setRenderTarget(r),_&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Os||e.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Me(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;za(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ru)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vp[(r-1)%Vp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Me(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Er-1),_=s/x,p=isFinite(s)?1+Math.floor(d*_):Er;p>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Er}`);const u=[];let v=0;for(let A=0;A<Er;++A){const D=A/_,E=Math.exp(-D*D/2);u.push(E),A===0?v+=E:A<p&&(v+=2*E)}for(let A=0;A<u.length;A++)u[A]=u[A]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-i;const y=this._sizeLods[r],b=3*y*(r>g-vs?r-g+vs:0),C=4*(this._cubeSize-y);za(n,b,C,3*y,2*y),l.setRenderTarget(n),l.render(f,ru)}}function TT(t){const e=[],n=[],i=[];let r=t;const s=t-vs+1+Hp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-vs?l=Hp[o-t+vs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,x=6,_=3,p=2,u=1,v=new Float32Array(_*x*m),g=new Float32Array(p*x*m),y=new Float32Array(u*x*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,D=C>2?0:-1,E=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];v.set(E,_*x*C),g.set(h,p*x*C);const M=[C,C,C,C,C,C];y.set(M,u*x*C)}const b=new cr;b.setAttribute("position",new si(v,_)),b.setAttribute("uv",new si(g,p)),b.setAttribute("faceIndex",new si(y,u)),e.push(b),r>vs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function jp(t,e,n){const i=new Fr(t,e,n);return i.texture.mapping=Ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function za(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function wT(t,e,n){const i=new Float32Array(Er),r=new O(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Xp(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function qp(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function yf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function AT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===dd||l===fd,d=l===Os||l===Fs;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Wp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new Wp(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function RT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function CT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const _=h.morphAttributes[x];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const _=m[x];for(let p=0,u=_.length;p<u;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,x=f.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let g=0,y=v.length;g<y;g+=3){const b=v[g+0],C=v[g+1],A=v[g+2];h.push(b,C,C,A,A,b)}}else if(x!==void 0){const v=x.array;_=x.version;for(let g=0,y=v.length/3-1;g<y;g+=3){const b=g+0,C=g+1,A=g+2;h.push(b,C,C,A,A,b)}}else return;const p=new(W0(h)?Z0:K0)(h,1);p.version=_;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function bT(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,x){t.drawElements(s,x,a,m*l),n.update(x,s,1)}function f(m,x,_){if(_===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,x,a,m*l,_),n.update(x,s,_)}function h(m,x,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,x[u]);else{p.multiDrawElementsWEBGL(s,x,0,a,m,0,_);let u=0;for(let v=0;v<_;v++)u+=x[v];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function LT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function PT(t,e){return t[0]-e[0]}function NT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function DT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let p=s.get(d);if(p===void 0||p.count!==_){let F=function(){J.dispose(),s.delete(d),d.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const g=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let E=0;g===!0&&(E=1),y===!0&&(E=2),b===!0&&(E=3);let M=d.attributes.position.count*E,B=1;M>e.maxTextureSize&&(B=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const q=new Float32Array(M*B*4*_),J=new q0(q,M,B,_);J.type=ji,J.needsUpdate=!0;const P=E*4;for(let X=0;X<_;X++){const $=C[X],N=A[X],U=D[X],k=M*B*4*X;for(let Z=0;Z<$.count;Z++){const Q=Z*P;g===!0&&(o.fromBufferAttribute($,Z),q[k+Q+0]=o.x,q[k+Q+1]=o.y,q[k+Q+2]=o.z,q[k+Q+3]=0),y===!0&&(o.fromBufferAttribute(N,Z),q[k+Q+4]=o.x,q[k+Q+5]=o.y,q[k+Q+6]=o.z,q[k+Q+7]=0),b===!0&&(o.fromBufferAttribute(U,Z),q[k+Q+8]=o.x,q[k+Q+9]=o.y,q[k+Q+10]=o.z,q[k+Q+11]=U.itemSize===4?o.w:1)}}p={count:_,texture:J,size:new Qe(M,B)},s.set(d,p),d.addEventListener("dispose",F)}let u=0;for(let g=0;g<h.length;g++)u+=h[g];const v=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=h===void 0?0:h.length;let _=i[d.id];if(_===void 0||_.length!==x){_=[];for(let y=0;y<x;y++)_[y]=[y,0];i[d.id]=_}for(let y=0;y<x;y++){const b=_[y];b[0]=y,b[1]=h[y]}_.sort(NT);for(let y=0;y<8;y++)y<x&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(PT);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const b=a[y],C=b[0],A=b[1];C!==Number.MAX_SAFE_INTEGER&&A?(p&&d.getAttribute("morphTarget"+y)!==p[C]&&d.setAttribute("morphTarget"+y,p[C]),u&&d.getAttribute("morphNormal"+y)!==u[C]&&d.setAttribute("morphNormal"+y,u[C]),r[y]=A,v+=A):(p&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),u&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),r[y]=0)}const g=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function IT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class nv extends mn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Lr,d!==Lr&&d!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Lr&&(i=Wi),i===void 0&&d===ks&&(i=br),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const iv=new mn,rv=new nv(1,1);rv.compareFunction=V0;const sv=new q0,ov=new gS,av=new ev,Yp=[],$p=[],Kp=new Float32Array(16),Zp=new Float32Array(9),Qp=new Float32Array(4);function Ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Yp[r];if(s===void 0&&(s=new Float32Array(r),Yp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function tc(t,e){let n=$p[e];n===void 0&&(n=new Int32Array(e),$p[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function UT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function kT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function zT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;Qp.set(i),t.uniformMatrix2fv(this.addr,!1,Qp),Nt(n,i)}}function BT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;Zp.set(i),t.uniformMatrix3fv(this.addr,!1,Zp),Nt(n,i)}}function HT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;Kp.set(i),t.uniformMatrix4fv(this.addr,!1,Kp),Nt(n,i)}}function GT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function XT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function $T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function KT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?rv:iv;n.setTexture2D(e||s,r)}function ZT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ov,r)}function QT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||av,r)}function JT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||sv,r)}function e1(t){switch(t){case 5126:return UT;case 35664:return OT;case 35665:return FT;case 35666:return kT;case 35674:return zT;case 35675:return BT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return WT;case 35669:case 35673:return jT;case 5125:return XT;case 36294:return qT;case 36295:return YT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}function t1(t,e){t.uniform1fv(this.addr,e)}function n1(t,e){const n=Ws(e,this.size,2);t.uniform2fv(this.addr,n)}function i1(t,e){const n=Ws(e,this.size,3);t.uniform3fv(this.addr,n)}function r1(t,e){const n=Ws(e,this.size,4);t.uniform4fv(this.addr,n)}function s1(t,e){const n=Ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function o1(t,e){const n=Ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function a1(t,e){const n=Ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function l1(t,e){t.uniform1iv(this.addr,e)}function c1(t,e){t.uniform2iv(this.addr,e)}function u1(t,e){t.uniform3iv(this.addr,e)}function d1(t,e){t.uniform4iv(this.addr,e)}function f1(t,e){t.uniform1uiv(this.addr,e)}function h1(t,e){t.uniform2uiv(this.addr,e)}function p1(t,e){t.uniform3uiv(this.addr,e)}function m1(t,e){t.uniform4uiv(this.addr,e)}function g1(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||iv,s[o])}function v1(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ov,s[o])}function _1(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||av,s[o])}function x1(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||sv,s[o])}function y1(t){switch(t){case 5126:return t1;case 35664:return n1;case 35665:return i1;case 35666:return r1;case 35674:return s1;case 35675:return o1;case 35676:return a1;case 5124:case 35670:return l1;case 35667:case 35671:return c1;case 35668:case 35672:return u1;case 35669:case 35673:return d1;case 5125:return f1;case 36294:return h1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return x1}}class S1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=e1(n.type)}}class E1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=y1(n.type)}}class M1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const lu=/(\w+)(\])?(\[|\.)?/g;function Jp(t,e){t.seq.push(e),t.map[e.id]=e}function T1(t,e,n){const i=t.name,r=i.length;for(lu.lastIndex=0;;){const s=lu.exec(i),o=lu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Jp(n,c===void 0?new S1(a,t,e):new E1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new M1(a),Jp(n,f)),n=f}}}class nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);T1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function em(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const w1=37297;let A1=0;function R1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function C1(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Nl&&n===Pl?i="LinearDisplayP3ToLinearSRGB":e===Pl&&n===Nl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ci:case Jl:return[i,"LinearTransferOETF"];case At:case vf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function tm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+R1(t.getShaderSource(e),o)}else return r}function b1(t,e){const n=C1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function L1(t,e){let n;switch(e){case zy:n="Linear";break;case By:n="Reinhard";break;case Hy:n="OptimizedCineon";break;case Gy:n="ACESFilmic";break;case Wy:n="AgX";break;case Vy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function P1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_s).join(`
`)}function N1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_s).join(`
`)}function D1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function I1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function _s(t){return t!==""}function nm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function im(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U1=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(t){return t.replace(U1,F1)}const O1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function F1(t,e){let n=Be[e];if(n===void 0){const i=O1.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vd(n)}const k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rm(t){return t.replace(k1,z1)}function z1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function B1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===hy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function H1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Os:case Fs:e="ENVMAP_TYPE_CUBE";break;case Ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function V1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case N0:e="ENVMAP_BLENDING_MULTIPLY";break;case Fy:e="ENVMAP_BLENDING_MIX";break;case ky:e="ENVMAP_BLENDING_ADD";break}return e}function W1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function j1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=B1(n),c=H1(n),d=G1(n),f=V1(n),h=W1(n),m=n.isWebGL2?"":P1(n),x=N1(n),_=D1(s),p=r.createProgram();let u,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(_s).join(`
`),u.length>0&&(u+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(_s).join(`
`),v.length>0&&(v+=`
`)):(u=[sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),v=[m,sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?Be.tonemapping_pars_fragment:"",n.toneMapping!==tr?L1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,b1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_s).join(`
`)),o=vd(o),o=nm(o,n),o=im(o,n),a=vd(a),a=nm(a,n),a=im(a,n),o=rm(o),a=rm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=g+u+o,b=g+v+a,C=em(r,r.VERTEX_SHADER,y),A=em(r,r.FRAGMENT_SHADER,b);r.attachShader(p,C),r.attachShader(p,A),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(q){if(t.debug.checkShaderErrors){const J=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(C).trim(),F=r.getShaderInfoLog(A).trim();let X=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,C,A);else{const N=tm(r,C,"vertex"),U=tm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+N+`
`+U)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||F==="")&&($=!1);$&&(q.diagnostics={runnable:X,programLog:J,vertexShader:{log:P,prefix:u},fragmentShader:{log:F,prefix:v}})}r.deleteShader(C),r.deleteShader(A),E=new nl(r,p),M=I1(r,p)}let E;this.getUniforms=function(){return E===void 0&&D(this),E};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(p,w1)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=A1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=A,this}let X1=0;class q1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Y1(e),n.set(e,i)),i}}class Y1{constructor(e){this.id=X1++,this.code=e,this.usedTimes=0}}function $1(t,e,n,i,r,s,o){const a=new Y0,l=new q1,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function p(E,M,B,q,J){const P=q.fog,F=J.geometry,X=E.isMeshStandardMaterial?q.environment:null,$=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),N=$&&$.mapping===Ql?$.image.height:null,U=x[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const k=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Z=k!==void 0?k.length:0;let Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let V,K,se,de;if(U){const Kt=ti[U];V=Kt.vertexShader,K=Kt.fragmentShader}else V=E.vertexShader,K=E.fragmentShader,l.update(E),se=l.getVertexShaderID(E),de=l.getFragmentShaderID(E);const me=t.getRenderTarget(),z=J.isInstancedMesh===!0,Se=J.isBatchedMesh===!0,ye=!!E.map,Ye=!!E.matcap,H=!!$,Dt=!!E.aoMap,we=!!E.lightMap,Ne=!!E.bumpMap,_e=!!E.normalMap,st=!!E.displacementMap,Ie=!!E.emissiveMap,R=!!E.metalnessMap,S=!!E.roughnessMap,G=E.anisotropy>0,ie=E.clearcoat>0,ee=E.iridescence>0,te=E.sheen>0,Ee=E.transmission>0,le=G&&!!E.anisotropyMap,ge=ie&&!!E.clearcoatMap,be=ie&&!!E.clearcoatNormalMap,He=ie&&!!E.clearcoatRoughnessMap,ne=ee&&!!E.iridescenceMap,tt=ee&&!!E.iridescenceThicknessMap,Xe=te&&!!E.sheenColorMap,Ue=te&&!!E.sheenRoughnessMap,Ae=!!E.specularMap,ve=!!E.specularColorMap,ze=!!E.specularIntensityMap,Je=Ee&&!!E.transmissionMap,yt=Ee&&!!E.thicknessMap,Ve=!!E.gradientMap,oe=!!E.alphaMap,L=E.alphaTest>0,ce=!!E.alphaHash,ue=!!E.extensions,Le=!!F.attributes.uv1,Re=!!F.attributes.uv2,ot=!!F.attributes.uv3;let at=tr;return E.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(at=t.toneMapping),{isWebGL2:d,shaderID:U,shaderType:E.type,shaderName:E.name,vertexShader:V,fragmentShader:K,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Se,instancing:z,instancingColor:z&&J.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ci,map:ye,matcap:Ye,envMap:H,envMapMode:H&&$.mapping,envMapCubeUVHeight:N,aoMap:Dt,lightMap:we,bumpMap:Ne,normalMap:_e,displacementMap:h&&st,emissiveMap:Ie,normalMapObjectSpace:_e&&E.normalMapType===nS,normalMapTangentSpace:_e&&E.normalMapType===G0,metalnessMap:R,roughnessMap:S,anisotropy:G,anisotropyMap:le,clearcoat:ie,clearcoatMap:ge,clearcoatNormalMap:be,clearcoatRoughnessMap:He,iridescence:ee,iridescenceMap:ne,iridescenceThicknessMap:tt,sheen:te,sheenColorMap:Xe,sheenRoughnessMap:Ue,specularMap:Ae,specularColorMap:ve,specularIntensityMap:ze,transmission:Ee,transmissionMap:Je,thicknessMap:yt,gradientMap:Ve,opaque:E.transparent===!1&&E.blending===Rs,alphaMap:oe,alphaTest:L,alphaHash:ce,combine:E.combine,mapUv:ye&&_(E.map.channel),aoMapUv:Dt&&_(E.aoMap.channel),lightMapUv:we&&_(E.lightMap.channel),bumpMapUv:Ne&&_(E.bumpMap.channel),normalMapUv:_e&&_(E.normalMap.channel),displacementMapUv:st&&_(E.displacementMap.channel),emissiveMapUv:Ie&&_(E.emissiveMap.channel),metalnessMapUv:R&&_(E.metalnessMap.channel),roughnessMapUv:S&&_(E.roughnessMap.channel),anisotropyMapUv:le&&_(E.anisotropyMap.channel),clearcoatMapUv:ge&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(E.sheenRoughnessMap.channel),specularMapUv:Ae&&_(E.specularMap.channel),specularColorMapUv:ve&&_(E.specularColorMap.channel),specularIntensityMapUv:ze&&_(E.specularIntensityMap.channel),transmissionMapUv:Je&&_(E.transmissionMap.channel),thicknessMapUv:yt&&_(E.thicknessMap.channel),alphaMapUv:oe&&_(E.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_e||G),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Re,vertexUv3s:ot,pointsUvs:J.isPoints===!0&&!!F.attributes.uv&&(ye||oe),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:at,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ye&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===vi,flipSided:E.side===pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ue&&E.extensions.derivatives===!0,extensionFragDepth:ue&&E.extensions.fragDepth===!0,extensionDrawBuffers:ue&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)M.push(B),M.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(v(M,E),g(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function g(E,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function y(E){const M=x[E.type];let B;if(M){const q=ti[M];B=LS.clone(q.uniforms)}else B=E.uniforms;return B}function b(E,M){let B;for(let q=0,J=c.length;q<J;q++){const P=c[q];if(P.cacheKey===M){B=P,++B.usedTimes;break}}return B===void 0&&(B=new j1(t,M,E,s),c.push(B)),B}function C(E){if(--E.usedTimes===0){const M=c.indexOf(E);c[M]=c[c.length-1],c.pop(),E.destroy()}}function A(E){l.remove(E)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:b,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:D}}function K1(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Z1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function om(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function am(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,m,x,_,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:_,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=_,u.group=p),e++,u}function a(f,h,m,x,_,p){const u=o(f,h,m,x,_,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,h,m,x,_,p){const u=o(f,h,m,x,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||Z1),i.length>1&&i.sort(h||om),r.length>1&&r.sort(h||om)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function Q1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new am,t.set(i,[o])):r>=s.length?(o=new am,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function J1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Ke};break;case"SpotLight":n={position:new O,direction:new O,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function ew(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let tw=0;function nw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function iw(t,e){const n=new J1,i=ew(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new O);const s=new O,o=new Ct,a=new Ct;function l(d,f){let h=0,m=0,x=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,p=0,u=0,v=0,g=0,y=0,b=0,C=0,A=0,D=0,E=0;d.sort(nw);const M=f===!0?Math.PI:1;for(let q=0,J=d.length;q<J;q++){const P=d[q],F=P.color,X=P.intensity,$=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*X*M,m+=F.g*X*M,x+=F.b*X*M;else if(P.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(P.sh.coefficients[U],X);E++}else if(P.isDirectionalLight){const U=n.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){const k=P.shadow,Z=i.get(P);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,r.directionalShadow[_]=Z,r.directionalShadowMap[_]=N,r.directionalShadowMatrix[_]=P.shadow.matrix,y++}r.directional[_]=U,_++}else if(P.isSpotLight){const U=n.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(F).multiplyScalar(X*M),U.distance=$,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,r.spot[u]=U;const k=P.shadow;if(P.map&&(r.spotLightMap[A]=P.map,A++,k.updateMatrices(P),P.castShadow&&D++),r.spotLightMatrix[u]=k.matrix,P.castShadow){const Z=i.get(P);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,r.spotShadow[u]=Z,r.spotShadowMap[u]=N,C++}u++}else if(P.isRectAreaLight){const U=n.get(P);U.color.copy(F).multiplyScalar(X),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=U,v++}else if(P.isPointLight){const U=n.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity*M),U.distance=P.distance,U.decay=P.decay,P.castShadow){const k=P.shadow,Z=i.get(P);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,Z.shadowCameraNear=k.camera.near,Z.shadowCameraFar=k.camera.far,r.pointShadow[p]=Z,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=P.shadow.matrix,b++}r.point[p]=U,p++}else if(P.isHemisphereLight){const U=n.get(P);U.skyColor.copy(P.color).multiplyScalar(X*M),U.groundColor.copy(P.groundColor).multiplyScalar(X*M),r.hemi[g]=U,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const B=r.hash;(B.directionalLength!==_||B.pointLength!==p||B.spotLength!==u||B.rectAreaLength!==v||B.hemiLength!==g||B.numDirectionalShadows!==y||B.numPointShadows!==b||B.numSpotShadows!==C||B.numSpotMaps!==A||B.numLightProbes!==E)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+A-D,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=E,B.directionalLength=_,B.pointLength=p,B.spotLength=u,B.rectAreaLength=v,B.hemiLength=g,B.numDirectionalShadows=y,B.numPointShadows=b,B.numSpotShadows=C,B.numSpotMaps=A,B.numLightProbes=E,r.version=tw++)}function c(d,f){let h=0,m=0,x=0,_=0,p=0;const u=f.matrixWorldInverse;for(let v=0,g=d.length;v<g;v++){const y=d[v];if(y.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),h++}else if(y.isSpotLight){const b=r.spot[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),x++}else if(y.isRectAreaLight){const b=r.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),a.identity(),o.copy(y.matrixWorld),o.premultiply(u),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),m++}else if(y.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function lm(t,e){const n=new iw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function rw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new lm(t,e),n.set(s,[l])):o>=a.length?(l=new lm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class sw extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ow extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cw(t,e,n){let i=new xf;const r=new Qe,s=new Qe,o=new pt,a=new sw({depthPacking:tS}),l=new ow,c={},d=n.maxTextureSize,f={[sr]:pn,[pn]:sr,[vi]:vi},h=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:aw,fragmentShader:lw}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new cr;x.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Me(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=P0;let u=this.type;this.render=function(C,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),B=t.getActiveMipmapLevel(),q=t.state;q.setBlending(er),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const J=u!==hi&&this.type===hi,P=u===hi&&this.type!==hi;for(let F=0,X=C.length;F<X;F++){const $=C[F],N=$.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const U=N.getFrameExtents();if(r.multiply(U),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/U.x),r.x=s.x*U.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/U.y),r.y=s.y*U.y,N.mapSize.y=s.y)),N.map===null||J===!0||P===!0){const Z=this.type!==hi?{minFilter:tn,magFilter:tn}:{};N.map!==null&&N.map.dispose(),N.map=new Fr(r.x,r.y,Z),N.map.texture.name=$.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const k=N.getViewportCount();for(let Z=0;Z<k;Z++){const Q=N.getViewport(Z);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),q.viewport(o),N.updateMatrices($,Z),i=N.getFrustum(),y(A,D,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===hi&&v(N,D),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(E,M,B)};function v(C,A){const D=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Fr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,D,h,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,D,m,_,null)}function g(C,A,D,E){let M=null;const B=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)M=B;else if(M=D.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const q=M.uuid,J=A.uuid;let P=c[q];P===void 0&&(P={},c[q]=P);let F=P[J];F===void 0&&(F=M.clone(),P[J]=F,A.addEventListener("dispose",b)),M=F}if(M.visible=A.visible,M.wireframe=A.wireframe,E===hi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=t.properties.get(M);q.light=D}return M}function y(C,A,D,E,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===hi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const J=e.update(C),P=C.material;if(Array.isArray(P)){const F=J.groups;for(let X=0,$=F.length;X<$;X++){const N=F[X],U=P[N.materialIndex];if(U&&U.visible){const k=g(C,U,E,M);C.onBeforeShadow(t,C,A,D,J,k,N),t.renderBufferDirect(D,null,J,k,C,N),C.onAfterShadow(t,C,A,D,J,k,N)}}}else if(P.visible){const F=g(C,P,E,M);C.onBeforeShadow(t,C,A,D,J,F,null),t.renderBufferDirect(D,null,J,F,C,null),C.onAfterShadow(t,C,A,D,J,F,null)}}const q=C.children;for(let J=0,P=q.length;J<P;J++)y(q[J],A,D,E,M)}function b(C){C.target.removeEventListener("dispose",b);for(const D in c){const E=c[D],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function uw(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ce=new pt;let ue=null;const Le=new pt(0,0,0,0);return{setMask:function(Re){ue!==Re&&!L&&(t.colorMask(Re,Re,Re,Re),ue=Re)},setLocked:function(Re){L=Re},setClear:function(Re,ot,at,It,Kt){Kt===!0&&(Re*=It,ot*=It,at*=It),ce.set(Re,ot,at,It),Le.equals(ce)===!1&&(t.clearColor(Re,ot,at,It),Le.copy(ce))},reset:function(){L=!1,ue=null,Le.set(-1,0,0,0)}}}function s(){let L=!1,ce=null,ue=null,Le=null;return{setTest:function(Re){Re?Se(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(Re){ce!==Re&&!L&&(t.depthMask(Re),ce=Re)},setFunc:function(Re){if(ue!==Re){switch(Re){case Ly:t.depthFunc(t.NEVER);break;case Py:t.depthFunc(t.ALWAYS);break;case Ny:t.depthFunc(t.LESS);break;case Cl:t.depthFunc(t.LEQUAL);break;case Dy:t.depthFunc(t.EQUAL);break;case Iy:t.depthFunc(t.GEQUAL);break;case Uy:t.depthFunc(t.GREATER);break;case Oy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=Re}},setLocked:function(Re){L=Re},setClear:function(Re){Le!==Re&&(t.clearDepth(Re),Le=Re)},reset:function(){L=!1,ce=null,ue=null,Le=null}}}function o(){let L=!1,ce=null,ue=null,Le=null,Re=null,ot=null,at=null,It=null,Kt=null;return{setTest:function(lt){L||(lt?Se(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(lt){ce!==lt&&!L&&(t.stencilMask(lt),ce=lt)},setFunc:function(lt,Zt,Qn){(ue!==lt||Le!==Zt||Re!==Qn)&&(t.stencilFunc(lt,Zt,Qn),ue=lt,Le=Zt,Re=Qn)},setOp:function(lt,Zt,Qn){(ot!==lt||at!==Zt||It!==Qn)&&(t.stencilOp(lt,Zt,Qn),ot=lt,at=Zt,It=Qn)},setLocked:function(lt){L=lt},setClear:function(lt){Kt!==lt&&(t.clearStencil(lt),Kt=lt)},reset:function(){L=!1,ce=null,ue=null,Le=null,Re=null,ot=null,at=null,It=null,Kt=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,_=[],p=null,u=!1,v=null,g=null,y=null,b=null,C=null,A=null,D=null,E=new Ke(0,0,0),M=0,B=!1,q=null,J=null,P=null,F=null,X=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,U=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=U>=1):k.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=U>=2);let Z=null,Q={};const V=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),se=new pt().fromArray(V),de=new pt().fromArray(K);function me(L,ce,ue,Le){const Re=new Uint8Array(4),ot=t.createTexture();t.bindTexture(L,ot),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let at=0;at<ue;at++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,Re):t.texImage2D(ce+at,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Re);return ot}const z={};z[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),z[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(z[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),z[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(t.DEPTH_TEST),l.setFunc(Cl),Ie(!1),R(Vh),Se(t.CULL_FACE),_e(er);function Se(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function ye(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ye(L,ce){return m[L]!==ce?(t.bindFramebuffer(L,ce),m[L]=ce,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ce),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function H(L,ce){let ue=_,Le=!1;if(L)if(ue=x.get(ce),ue===void 0&&(ue=[],x.set(ce,ue)),L.isWebGLMultipleRenderTargets){const Re=L.texture;if(ue.length!==Re.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let ot=0,at=Re.length;ot<at;ot++)ue[ot]=t.COLOR_ATTACHMENT0+ot;ue.length=Re.length,Le=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,Le=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,Le=!0);Le&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Dt(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const we={[Sr]:t.FUNC_ADD,[my]:t.FUNC_SUBTRACT,[gy]:t.FUNC_REVERSE_SUBTRACT};if(i)we[qh]=t.MIN,we[Yh]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(we[qh]=L.MIN_EXT,we[Yh]=L.MAX_EXT)}const Ne={[vy]:t.ZERO,[_y]:t.ONE,[xy]:t.SRC_COLOR,[cd]:t.SRC_ALPHA,[wy]:t.SRC_ALPHA_SATURATE,[My]:t.DST_COLOR,[Sy]:t.DST_ALPHA,[yy]:t.ONE_MINUS_SRC_COLOR,[ud]:t.ONE_MINUS_SRC_ALPHA,[Ty]:t.ONE_MINUS_DST_COLOR,[Ey]:t.ONE_MINUS_DST_ALPHA,[Ay]:t.CONSTANT_COLOR,[Ry]:t.ONE_MINUS_CONSTANT_COLOR,[Cy]:t.CONSTANT_ALPHA,[by]:t.ONE_MINUS_CONSTANT_ALPHA};function _e(L,ce,ue,Le,Re,ot,at,It,Kt,lt){if(L===er){u===!0&&(ye(t.BLEND),u=!1);return}if(u===!1&&(Se(t.BLEND),u=!0),L!==py){if(L!==v||lt!==B){if((g!==Sr||C!==Sr)&&(t.blendEquation(t.FUNC_ADD),g=Sr,C=Sr),lt)switch(L){case Rs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wh:t.blendFunc(t.ONE,t.ONE);break;case jh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Rs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case jh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,b=null,A=null,D=null,E.set(0,0,0),M=0,v=L,B=lt}return}Re=Re||ce,ot=ot||ue,at=at||Le,(ce!==g||Re!==C)&&(t.blendEquationSeparate(we[ce],we[Re]),g=ce,C=Re),(ue!==y||Le!==b||ot!==A||at!==D)&&(t.blendFuncSeparate(Ne[ue],Ne[Le],Ne[ot],Ne[at]),y=ue,b=Le,A=ot,D=at),(It.equals(E)===!1||Kt!==M)&&(t.blendColor(It.r,It.g,It.b,Kt),E.copy(It),M=Kt),v=L,B=!1}function st(L,ce){L.side===vi?ye(t.CULL_FACE):Se(t.CULL_FACE);let ue=L.side===pn;ce&&(ue=!ue),Ie(ue),L.blending===Rs&&L.transparent===!1?_e(er):_e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Le=L.stencilWrite;c.setTest(Le),Le&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(L){q!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),q=L)}function R(L){L!==dy?(Se(t.CULL_FACE),L!==J&&(L===Vh?t.cullFace(t.BACK):L===fy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),J=L}function S(L){L!==P&&(N&&t.lineWidth(L),P=L)}function G(L,ce,ue){L?(Se(t.POLYGON_OFFSET_FILL),(F!==ce||X!==ue)&&(t.polygonOffset(ce,ue),F=ce,X=ue)):ye(t.POLYGON_OFFSET_FILL)}function ie(L){L?Se(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function ee(L){L===void 0&&(L=t.TEXTURE0+$-1),Z!==L&&(t.activeTexture(L),Z=L)}function te(L,ce,ue){ue===void 0&&(Z===null?ue=t.TEXTURE0+$-1:ue=Z);let Le=Q[ue];Le===void 0&&(Le={type:void 0,texture:void 0},Q[ue]=Le),(Le.type!==L||Le.texture!==ce)&&(Z!==ue&&(t.activeTexture(ue),Z=ue),t.bindTexture(L,ce||z[L]),Le.type=L,Le.texture=ce)}function Ee(){const L=Q[Z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(L){se.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),se.copy(L))}function Je(L){de.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),de.copy(L))}function yt(L,ce){let ue=f.get(ce);ue===void 0&&(ue=new WeakMap,f.set(ce,ue));let Le=ue.get(L);Le===void 0&&(Le=t.getUniformBlockIndex(ce,L.name),ue.set(L,Le))}function Ve(L,ce){const Le=f.get(ce).get(L);d.get(ce)!==Le&&(t.uniformBlockBinding(ce,Le,L.__bindingPointIndex),d.set(ce,Le))}function oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Z=null,Q={},m={},x=new WeakMap,_=[],p=null,u=!1,v=null,g=null,y=null,b=null,C=null,A=null,D=null,E=new Ke(0,0,0),M=0,B=!1,q=null,J=null,P=null,F=null,X=null,se.set(0,0,t.canvas.width,t.canvas.height),de.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:ye,bindFramebuffer:Ye,drawBuffers:H,useProgram:Dt,setBlending:_e,setMaterial:st,setFlipSided:Ie,setCullFace:R,setLineWidth:S,setPolygonOffset:G,setScissorTest:ie,activeTexture:ee,bindTexture:te,unbindTexture:Ee,compressedTexImage2D:le,compressedTexImage3D:ge,texImage2D:Ae,texImage3D:ve,updateUBOMapping:yt,uniformBlockBinding:Ve,texStorage2D:Xe,texStorage3D:Ue,texSubImage2D:be,texSubImage3D:He,compressedTexSubImage2D:ne,compressedTexSubImage3D:tt,scissor:ze,viewport:Je,reset:oe}}function dw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return m?new OffscreenCanvas(R,S):Ho("canvas")}function _(R,S,G,ie){let ee=1;if((R.width>ie||R.height>ie)&&(ee=ie/Math.max(R.width,R.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const te=S?gd:Math.floor,Ee=te(ee*R.width),le=te(ee*R.height);f===void 0&&(f=x(Ee,le));const ge=G?x(Ee,le):f;return ge.width=Ee,ge.height=le,ge.getContext("2d").drawImage(R,0,0,Ee,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ee+"x"+le+")."),ge}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Tp(R.width)&&Tp(R.height)}function u(R){return a?!1:R.wrapS!==qn||R.wrapT!==qn||R.minFilter!==tn&&R.minFilter!==Ln}function v(R,S){return R.generateMipmaps&&S&&R.minFilter!==tn&&R.minFilter!==Ln}function g(R){t.generateMipmap(R)}function y(R,S,G,ie,ee=!1){if(a===!1)return S;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=S;if(S===t.RED&&(G===t.FLOAT&&(te=t.R32F),G===t.HALF_FLOAT&&(te=t.R16F),G===t.UNSIGNED_BYTE&&(te=t.R8)),S===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(te=t.R8UI),G===t.UNSIGNED_SHORT&&(te=t.R16UI),G===t.UNSIGNED_INT&&(te=t.R32UI),G===t.BYTE&&(te=t.R8I),G===t.SHORT&&(te=t.R16I),G===t.INT&&(te=t.R32I)),S===t.RG&&(G===t.FLOAT&&(te=t.RG32F),G===t.HALF_FLOAT&&(te=t.RG16F),G===t.UNSIGNED_BYTE&&(te=t.RG8)),S===t.RGBA){const Ee=ee?Ll:nt.getTransfer(ie);G===t.FLOAT&&(te=t.RGBA32F),G===t.HALF_FLOAT&&(te=t.RGBA16F),G===t.UNSIGNED_BYTE&&(te=Ee===dt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function b(R,S,G){return v(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==Ln?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){return R===tn||R===$h||R===Dc?t.NEAREST:t.LINEAR}function A(R){const S=R.target;S.removeEventListener("dispose",A),E(S),S.isVideoTexture&&d.delete(S)}function D(R){const S=R.target;S.removeEventListener("dispose",D),B(S)}function E(R){const S=i.get(R);if(S.__webglInit===void 0)return;const G=R.source,ie=h.get(G);if(ie){const ee=ie[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(R),Object.keys(ie).length===0&&h.delete(G)}i.remove(R)}function M(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const G=R.source,ie=h.get(G);delete ie[S.__cacheKey],o.memory.textures--}function B(R){const S=R.texture,G=i.get(R),ie=i.get(S);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(G.__webglFramebuffer[ee]))for(let te=0;te<G.__webglFramebuffer[ee].length;te++)t.deleteFramebuffer(G.__webglFramebuffer[ee][te]);else t.deleteFramebuffer(G.__webglFramebuffer[ee]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[ee])}else{if(Array.isArray(G.__webglFramebuffer))for(let ee=0;ee<G.__webglFramebuffer.length;ee++)t.deleteFramebuffer(G.__webglFramebuffer[ee]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ee=0;ee<G.__webglColorRenderbuffer.length;ee++)G.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[ee]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,te=S.length;ee<te;ee++){const Ee=i.get(S[ee]);Ee.__webglTexture&&(t.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(R)}let q=0;function J(){q=0}function P(){const R=q;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),q+=1,R}function F(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function X(R,S){const G=i.get(R);if(R.isVideoTexture&&st(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(G,R,S);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+S)}function $(R,S){const G=i.get(R);if(R.version>0&&G.__version!==R.version){se(G,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+S)}function N(R,S){const G=i.get(R);if(R.version>0&&G.__version!==R.version){se(G,R,S);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+S)}function U(R,S){const G=i.get(R);if(R.version>0&&G.__version!==R.version){de(G,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+S)}const k={[bl]:t.REPEAT,[qn]:t.CLAMP_TO_EDGE,[hd]:t.MIRRORED_REPEAT},Z={[tn]:t.NEAREST,[$h]:t.NEAREST_MIPMAP_NEAREST,[Dc]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[jy]:t.LINEAR_MIPMAP_NEAREST,[zo]:t.LINEAR_MIPMAP_LINEAR},Q={[iS]:t.NEVER,[cS]:t.ALWAYS,[rS]:t.LESS,[V0]:t.LEQUAL,[sS]:t.EQUAL,[lS]:t.GEQUAL,[oS]:t.GREATER,[aS]:t.NOTEQUAL};function V(R,S,G){if(G?(t.texParameteri(R,t.TEXTURE_WRAP_S,k[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,k[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,k[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Z[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Z[S.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==qn||S.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,C(S.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,C(S.minFilter)),S.minFilter!==tn&&S.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===tn||S.minFilter!==Dc&&S.minFilter!==zo||S.type===ji&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Bo&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function K(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const ie=S.source;let ee=h.get(ie);ee===void 0&&(ee={},h.set(ie,ee));const te=F(S);if(te!==R.__cacheKey){ee[te]===void 0&&(ee[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[te].usedTimes++;const Ee=ee[R.__cacheKey];Ee!==void 0&&(ee[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(S)),R.__cacheKey=te,R.__webglTexture=ee[te].texture}return G}function se(R,S,G){let ie=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=t.TEXTURE_3D);const ee=K(R,S),te=S.source;n.bindTexture(ie,R.__webglTexture,t.TEXTURE0+G);const Ee=i.get(te);if(te.version!==Ee.__version||ee===!0){n.activeTexture(t.TEXTURE0+G);const le=nt.getPrimaries(nt.workingColorSpace),ge=S.colorSpace===Pn?null:nt.getPrimaries(S.colorSpace),be=S.colorSpace===Pn||le===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const He=u(S)&&p(S.image)===!1;let ne=_(S.image,He,!1,r.maxTextureSize);ne=Ie(S,ne);const tt=p(ne)||a,Xe=s.convert(S.format,S.colorSpace);let Ue=s.convert(S.type),Ae=y(S.internalFormat,Xe,Ue,S.colorSpace,S.isVideoTexture);V(ie,S,tt);let ve;const ze=S.mipmaps,Je=a&&S.isVideoTexture!==!0&&Ae!==B0,yt=Ee.__version===void 0||ee===!0,Ve=b(S,ne,tt);if(S.isDepthTexture)Ae=t.DEPTH_COMPONENT,a?S.type===ji?Ae=t.DEPTH_COMPONENT32F:S.type===Wi?Ae=t.DEPTH_COMPONENT24:S.type===br?Ae=t.DEPTH24_STENCIL8:Ae=t.DEPTH_COMPONENT16:S.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Lr&&Ae===t.DEPTH_COMPONENT&&S.type!==gf&&S.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Wi,Ue=s.convert(S.type)),S.format===ks&&Ae===t.DEPTH_COMPONENT&&(Ae=t.DEPTH_STENCIL,S.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=br,Ue=s.convert(S.type))),yt&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Ae,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Ae,ne.width,ne.height,0,Xe,Ue,null));else if(S.isDataTexture)if(ze.length>0&&tt){Je&&yt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ae,ze[0].width,ze[0].height);for(let oe=0,L=ze.length;oe<L;oe++)ve=ze[oe],Je?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ve.width,ve.height,Xe,Ue,ve.data):n.texImage2D(t.TEXTURE_2D,oe,Ae,ve.width,ve.height,0,Xe,Ue,ve.data);S.generateMipmaps=!1}else Je?(yt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ae,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,Xe,Ue,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Ae,ne.width,ne.height,0,Xe,Ue,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Je&&yt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Ae,ze[0].width,ze[0].height,ne.depth);for(let oe=0,L=ze.length;oe<L;oe++)ve=ze[oe],S.format!==Yn?Xe!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,ne.depth,Xe,ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,Ae,ve.width,ve.height,ne.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,ne.depth,Xe,Ue,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,Ae,ve.width,ve.height,ne.depth,0,Xe,Ue,ve.data)}else{Je&&yt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ae,ze[0].width,ze[0].height);for(let oe=0,L=ze.length;oe<L;oe++)ve=ze[oe],S.format!==Yn?Xe!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,ve.width,ve.height,Xe,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,Ae,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ve.width,ve.height,Xe,Ue,ve.data):n.texImage2D(t.TEXTURE_2D,oe,Ae,ve.width,ve.height,0,Xe,Ue,ve.data)}else if(S.isDataArrayTexture)Je?(yt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Ae,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Xe,Ue,ne.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,ne.width,ne.height,ne.depth,0,Xe,Ue,ne.data);else if(S.isData3DTexture)Je?(yt&&n.texStorage3D(t.TEXTURE_3D,Ve,Ae,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Xe,Ue,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,ne.width,ne.height,ne.depth,0,Xe,Ue,ne.data);else if(S.isFramebufferTexture){if(yt)if(Je)n.texStorage2D(t.TEXTURE_2D,Ve,Ae,ne.width,ne.height);else{let oe=ne.width,L=ne.height;for(let ce=0;ce<Ve;ce++)n.texImage2D(t.TEXTURE_2D,ce,Ae,oe,L,0,Xe,Ue,null),oe>>=1,L>>=1}}else if(ze.length>0&&tt){Je&&yt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ae,ze[0].width,ze[0].height);for(let oe=0,L=ze.length;oe<L;oe++)ve=ze[oe],Je?n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Xe,Ue,ve):n.texImage2D(t.TEXTURE_2D,oe,Ae,Xe,Ue,ve);S.generateMipmaps=!1}else Je?(yt&&n.texStorage2D(t.TEXTURE_2D,Ve,Ae,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Xe,Ue,ne)):n.texImage2D(t.TEXTURE_2D,0,Ae,Xe,Ue,ne);v(S,tt)&&g(ie),Ee.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function de(R,S,G){if(S.image.length!==6)return;const ie=K(R,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const te=i.get(ee);if(ee.version!==te.__version||ie===!0){n.activeTexture(t.TEXTURE0+G);const Ee=nt.getPrimaries(nt.workingColorSpace),le=S.colorSpace===Pn?null:nt.getPrimaries(S.colorSpace),ge=S.colorSpace===Pn||Ee===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const be=S.isCompressedTexture||S.image[0].isCompressedTexture,He=S.image[0]&&S.image[0].isDataTexture,ne=[];for(let oe=0;oe<6;oe++)!be&&!He?ne[oe]=_(S.image[oe],!1,!0,r.maxCubemapSize):ne[oe]=He?S.image[oe].image:S.image[oe],ne[oe]=Ie(S,ne[oe]);const tt=ne[0],Xe=p(tt)||a,Ue=s.convert(S.format,S.colorSpace),Ae=s.convert(S.type),ve=y(S.internalFormat,Ue,Ae,S.colorSpace),ze=a&&S.isVideoTexture!==!0,Je=te.__version===void 0||ie===!0;let yt=b(S,tt,Xe);V(t.TEXTURE_CUBE_MAP,S,Xe);let Ve;if(be){ze&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,yt,ve,tt.width,tt.height);for(let oe=0;oe<6;oe++){Ve=ne[oe].mipmaps;for(let L=0;L<Ve.length;L++){const ce=Ve[L];S.format!==Yn?Ue!==null?ze?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,0,0,ce.width,ce.height,Ue,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,ve,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,0,0,ce.width,ce.height,Ue,Ae,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L,ve,ce.width,ce.height,0,Ue,Ae,ce.data)}}}else{Ve=S.mipmaps,ze&&Je&&(Ve.length>0&&yt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,yt,ve,ne[0].width,ne[0].height));for(let oe=0;oe<6;oe++)if(He){ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ne[oe].width,ne[oe].height,Ue,Ae,ne[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ve,ne[oe].width,ne[oe].height,0,Ue,Ae,ne[oe].data);for(let L=0;L<Ve.length;L++){const ue=Ve[L].image[oe].image;ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,0,0,ue.width,ue.height,Ue,Ae,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,ve,ue.width,ue.height,0,Ue,Ae,ue.data)}}else{ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ue,Ae,ne[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ve,Ue,Ae,ne[oe]);for(let L=0;L<Ve.length;L++){const ce=Ve[L];ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,0,0,Ue,Ae,ce.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L+1,ve,Ue,Ae,ce.image[oe])}}}v(S,Xe)&&g(t.TEXTURE_CUBE_MAP),te.__version=ee.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function me(R,S,G,ie,ee,te){const Ee=s.convert(G.format,G.colorSpace),le=s.convert(G.type),ge=y(G.internalFormat,Ee,le,G.colorSpace);if(!i.get(S).__hasExternalTextures){const He=Math.max(1,S.width>>te),ne=Math.max(1,S.height>>te);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,te,ge,He,ne,S.depth,0,Ee,le,null):n.texImage2D(ee,te,ge,He,ne,0,Ee,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),_e(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,i.get(G).__webglTexture,0,Ne(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,i.get(G).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function z(R,S,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let ie=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||_e(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ji?ie=t.DEPTH_COMPONENT32F:ee.type===Wi&&(ie=t.DEPTH_COMPONENT24));const te=Ne(S);_e(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,ie,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,ie,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const ie=Ne(S);G&&_e(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):_e(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<ie.length;ee++){const te=ie[ee],Ee=s.convert(te.format,te.colorSpace),le=s.convert(te.type),ge=y(te.internalFormat,Ee,le,te.colorSpace),be=Ne(S);G&&_e(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,ge,S.width,S.height):_e(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,ge,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ge,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const ie=i.get(S.depthTexture).__webglTexture,ee=Ne(S);if(S.depthTexture.format===Lr)_e(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(S.depthTexture.format===ks)_e(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ye(R){const S=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Se(S.__webglFramebuffer,R)}else if(G){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=t.createRenderbuffer(),z(S.__webglDepthbuffer[ie],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),z(S.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(R,S,G){const ie=i.get(R);S!==void 0&&me(ie.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&ye(R)}function H(R){const S=R.texture,G=i.get(R),ie=i.get(S);R.addEventListener("dispose",D),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=S.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,te=R.isWebGLMultipleRenderTargets===!0,Ee=p(R)||a;if(ee){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let ge=0;ge<S.mipmaps.length;ge++)G.__webglFramebuffer[le][ge]=t.createFramebuffer()}else G.__webglFramebuffer[le]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)G.__webglFramebuffer[le]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(te)if(r.drawBuffers){const le=R.texture;for(let ge=0,be=le.length;ge<be;ge++){const He=i.get(le[ge]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&_e(R)===!1){const le=te?S:[S];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ge=0;ge<le.length;ge++){const be=le[ge];G.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ge]);const He=s.convert(be.format,be.colorSpace),ne=s.convert(be.type),tt=y(be.internalFormat,He,ne,be.colorSpace,R.isXRRenderTarget===!0),Xe=Ne(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,tt,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,G.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),z(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),V(t.TEXTURE_CUBE_MAP,S,Ee);for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)me(G.__webglFramebuffer[le][ge],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else me(G.__webglFramebuffer[le],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(S,Ee)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(te){const le=R.texture;for(let ge=0,be=le.length;ge<be;ge++){const He=le[ge],ne=i.get(He);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),V(t.TEXTURE_2D,He,Ee),me(G.__webglFramebuffer,R,He,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),v(He,Ee)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?le=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,ie.__webglTexture),V(le,S,Ee),a&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)me(G.__webglFramebuffer[ge],R,S,t.COLOR_ATTACHMENT0,le,ge);else me(G.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,le,0);v(S,Ee)&&g(le),n.unbindTexture()}R.depthBuffer&&ye(R)}function Dt(R){const S=p(R)||a,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,ee=G.length;ie<ee;ie++){const te=G[ie];if(v(te,S)){const Ee=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(te).__webglTexture;n.bindTexture(Ee,le),g(Ee),n.unbindTexture()}}}function we(R){if(a&&R.samples>0&&_e(R)===!1){const S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,ie=R.height;let ee=t.COLOR_BUFFER_BIT;const te=[],Ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(R),ge=R.isWebGLMultipleRenderTargets===!0;if(ge)for(let be=0;be<S.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let be=0;be<S.length;be++){te.push(t.COLOR_ATTACHMENT0+be),R.depthBuffer&&te.push(Ee);const He=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(He===!1&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ge&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[be]),He===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ee]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ee])),ge){const ne=i.get(S[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,G,ie,0,0,G,ie,ee,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let be=0;be<S.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,le.__webglColorRenderbuffer[be]);const He=i.get(S[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ne(R){return Math.min(r.maxSamples,R.samples)}function _e(R){const S=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function st(R){const S=o.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function Ie(R,S){const G=R.colorSpace,ie=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===pd||G!==Ci&&G!==Pn&&(nt.getTransfer(G)===dt?a===!1?e.has("EXT_sRGB")===!0&&ie===Yn?(R.format=pd,R.minFilter=Ln,R.generateMipmaps=!1):S=j0.sRGBToLinear(S):(ie!==Yn||ee!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=N,this.setTextureCube=U,this.rebindTextures=Ye,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=me,this.useMultisampledRTT=_e}function fw(t,e,n){const i=n.isWebGL2;function r(s,o=Pn){let a;const l=nt.getTransfer(o);if(s===nr)return t.UNSIGNED_BYTE;if(s===U0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===O0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Xy)return t.BYTE;if(s===qy)return t.SHORT;if(s===gf)return t.UNSIGNED_SHORT;if(s===I0)return t.INT;if(s===Wi)return t.UNSIGNED_INT;if(s===ji)return t.FLOAT;if(s===Bo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Yy)return t.ALPHA;if(s===Yn)return t.RGBA;if(s===$y)return t.LUMINANCE;if(s===Ky)return t.LUMINANCE_ALPHA;if(s===Lr)return t.DEPTH_COMPONENT;if(s===ks)return t.DEPTH_STENCIL;if(s===pd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Zy)return t.RED;if(s===F0)return t.RED_INTEGER;if(s===Qy)return t.RG;if(s===k0)return t.RG_INTEGER;if(s===z0)return t.RGBA_INTEGER;if(s===Ic||s===Uc||s===Oc||s===Fc)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ic)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ic)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kh||s===Zh||s===Qh||s===Jh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Kh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===B0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ep||s===tp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ep)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===tp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===np||s===ip||s===rp||s===sp||s===op||s===ap||s===lp||s===cp||s===up||s===dp||s===fp||s===hp||s===pp||s===mp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===np)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ip)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===op)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ap)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===up)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kc||s===gp||s===vp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===kc)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Jy||s===_p||s===xp||s===yp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===kc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===_p)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class hw extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Si extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pw={type:"move"};class cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class mw extends Vs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,x=null;const _=n.getContextAttributes();let p=null,u=null;const v=[],g=[],y=new Qe;let b=null;const C=new yn;C.layers.enable(1),C.viewport=new pt;const A=new yn;A.layers.enable(2),A.viewport=new pt;const D=[C,A],E=new hw;E.layers.enable(1),E.layers.enable(2);let M=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=v[V];return K===void 0&&(K=new cu,v[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=v[V];return K===void 0&&(K=new cu,v[V]=K),K.getGripSpace()},this.getHand=function(V){let K=v[V];return K===void 0&&(K=new cu,v[V]=K),K.getHandSpace()};function q(V){const K=g.indexOf(V.inputSource);if(K===-1)return;const se=v[K];se!==void 0&&(se.update(V.inputSource,V.frame,c||o),se.dispatchEvent({type:V.type,data:V.inputSource}))}function J(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",P);for(let V=0;V<v.length;V++){const K=g[V];K!==null&&(g[V]=null,v[V].disconnect(K))}M=null,B=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,u=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",J),r.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Fr(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,se=null,de=null;_.depth&&(de=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=_.stencil?ks:Lr,se=_.stencil?br:Wi);const me={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Fr(h.textureWidth,h.textureHeight,{format:Yn,type:nr,depthTexture:new nv(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const z=e.properties.get(u);z.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(V){for(let K=0;K<V.removed.length;K++){const se=V.removed[K],de=g.indexOf(se);de>=0&&(g[de]=null,v[de].disconnect(se))}for(let K=0;K<V.added.length;K++){const se=V.added[K];let de=g.indexOf(se);if(de===-1){for(let z=0;z<v.length;z++)if(z>=g.length){g.push(se),de=z;break}else if(g[z]===null){g[z]=se,de=z;break}if(de===-1)break}const me=v[de];me&&me.connect(se)}}const F=new O,X=new O;function $(V,K,se){F.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(se.matrixWorld);const de=F.distanceTo(X),me=K.projectionMatrix.elements,z=se.projectionMatrix.elements,Se=me[14]/(me[10]-1),ye=me[14]/(me[10]+1),Ye=(me[9]+1)/me[5],H=(me[9]-1)/me[5],Dt=(me[8]-1)/me[0],we=(z[8]+1)/z[0],Ne=Se*Dt,_e=Se*we,st=de/(-Dt+we),Ie=st*-Dt;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ie),V.translateZ(st),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const R=Se+st,S=ye+st,G=Ne-Ie,ie=_e+(de-Ie),ee=Ye*ye/S*R,te=H*ye/S*R;V.projectionMatrix.makePerspective(G,ie,ee,te,R,S),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function N(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;E.near=A.near=C.near=V.near,E.far=A.far=C.far=V.far,(M!==E.near||B!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),M=E.near,B=E.far);const K=V.parent,se=E.cameras;N(E,K);for(let de=0;de<se.length;de++)N(se[de],K);se.length===2?$(E,C,A):E.projectionMatrix.copy(C.projectionMatrix),U(V,E,K)};function U(V,K,se){se===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(se.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=md*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let k=null;function Z(V,K){if(d=K.getViewerPose(c||o),x=K,d!==null){const se=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let de=!1;se.length!==E.cameras.length&&(E.cameras.length=0,de=!0);for(let me=0;me<se.length;me++){const z=se[me];let Se=null;if(m!==null)Se=m.getViewport(z);else{const Ye=f.getViewSubImage(h,z);Se=Ye.viewport,me===0&&(e.setRenderTargetTextures(u,Ye.colorTexture,h.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(u))}let ye=D[me];ye===void 0&&(ye=new yn,ye.layers.enable(me),ye.viewport=new pt,D[me]=ye),ye.matrix.fromArray(z.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(z.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Se.x,Se.y,Se.width,Se.height),me===0&&(E.matrix.copy(ye.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),de===!0&&E.cameras.push(ye)}}for(let se=0;se<v.length;se++){const de=g[se],me=v[se];de!==null&&me!==void 0&&me.update(de,K,c||o)}k&&k(V,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const Q=new tv;Q.setAnimationLoop(Z),this.setAnimationLoop=function(V){k=V},this.dispose=function(){}}}function gw(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Q0(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,g,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===pn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===pn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const y=g.program;i.uniformBlockBinding(v,y)}function c(v,g){let y=r[v.id];y===void 0&&(x(v),y=d(v),r[v.id]=y,v.addEventListener("dispose",p));const b=g.program;i.updateUBOMapping(v,b);const C=e.render.frame;s[v.id]!==C&&(h(v),s[v.id]=C)}function d(v){const g=f();v.__bindingPointIndex=g;const y=t.createBuffer(),b=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],y=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,A=y.length;C<A;C++){const D=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,M=D.length;E<M;E++){const B=D[E];if(m(B,C,E,b)===!0){const q=B.__offset,J=Array.isArray(B.value)?B.value:[B.value];let P=0;for(let F=0;F<J.length;F++){const X=J[F],$=_(X);typeof X=="number"||typeof X=="boolean"?(B.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,q+P,B.__data)):X.isMatrix3?(B.__data[0]=X.elements[0],B.__data[1]=X.elements[1],B.__data[2]=X.elements[2],B.__data[3]=0,B.__data[4]=X.elements[3],B.__data[5]=X.elements[4],B.__data[6]=X.elements[5],B.__data[7]=0,B.__data[8]=X.elements[6],B.__data[9]=X.elements[7],B.__data[10]=X.elements[8],B.__data[11]=0):(X.toArray(B.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,B.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,y,b){const C=v.value,A=g+"_"+y;if(b[A]===void 0)return typeof C=="number"||typeof C=="boolean"?b[A]=C:b[A]=C.clone(),!0;{const D=b[A];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return b[A]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function x(v){const g=v.uniforms;let y=0;const b=16;for(let A=0,D=g.length;A<D;A++){const E=Array.isArray(g[A])?g[A]:[g[A]];for(let M=0,B=E.length;M<B;M++){const q=E[M],J=Array.isArray(q.value)?q.value:[q.value];for(let P=0,F=J.length;P<F;P++){const X=J[P],$=_(X),N=y%b;N!==0&&b-N<$.boundary&&(y+=b-N),q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=y,y+=$.storage}}}const C=y%b;return C>0&&(y+=b-C),v.__size=y,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class lv{constructor(e={}){const{canvas:n=dS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;const g=this;let y=!1,b=0,C=0,A=null,D=-1,E=null;const M=new pt,B=new pt;let q=null;const J=new Ke(0);let P=0,F=n.width,X=n.height,$=1,N=null,U=null;const k=new pt(0,0,F,X),Z=new pt(0,0,F,X);let Q=!1;const V=new xf;let K=!1,se=!1,de=null;const me=new Ct,z=new Qe,Se=new O,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return A===null?$:1}let H=i;function Dt(T,I){for(let j=0;j<T.length;j++){const Y=T[j],W=n.getContext(Y,I);if(W!==null)return W}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mf}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ce,!1),H===null){const I=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&I.shift(),H=Dt(I,T),H===null)throw Dt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let we,Ne,_e,st,Ie,R,S,G,ie,ee,te,Ee,le,ge,be,He,ne,tt,Xe,Ue,Ae,ve,ze,Je;function yt(){we=new RT(H),Ne=new yT(H,we,e),we.init(Ne),ve=new fw(H,we,Ne),_e=new uw(H,we,Ne),st=new LT(H),Ie=new K1,R=new dw(H,we,_e,Ie,Ne,ve,st),S=new ET(g),G=new AT(g),ie=new FS(H,Ne),ze=new _T(H,we,ie,Ne),ee=new CT(H,ie,st,ze),te=new IT(H,ee,ie,st),Xe=new DT(H,Ne,R),He=new ST(Ie),Ee=new $1(g,S,G,we,Ne,ze,He),le=new gw(g,Ie),ge=new Q1,be=new rw(we,Ne),tt=new vT(g,S,G,_e,te,h,l),ne=new cw(g,te,Ne),Je=new vw(H,st,Ne,_e),Ue=new xT(H,we,st,Ne),Ae=new bT(H,we,st,Ne),st.programs=Ee.programs,g.capabilities=Ne,g.extensions=we,g.properties=Ie,g.renderLists=ge,g.shadowMap=ne,g.state=_e,g.info=st}yt();const Ve=new mw(g,H);this.xr=Ve,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=we.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=we.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(F,X,!1))},this.getSize=function(T){return T.set(F,X)},this.setSize=function(T,I,j=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,X=I,n.width=Math.floor(T*$),n.height=Math.floor(I*$),j===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(F*$,X*$).floor()},this.setDrawingBufferSize=function(T,I,j){F=T,X=I,$=j,n.width=Math.floor(T*j),n.height=Math.floor(I*j),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(k)},this.setViewport=function(T,I,j,Y){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,I,j,Y),_e.viewport(M.copy(k).multiplyScalar($).floor())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,I,j,Y){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,I,j,Y),_e.scissor(B.copy(Z).multiplyScalar($).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(T){_e.setScissorTest(Q=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(T=!0,I=!0,j=!0){let Y=0;if(T){let W=!1;if(A!==null){const fe=A.texture.format;W=fe===z0||fe===k0||fe===F0}if(W){const fe=A.texture.type,Te=fe===nr||fe===Wi||fe===gf||fe===br||fe===U0||fe===O0,Ce=tt.getClearColor(),De=tt.getClearAlpha(),Ge=Ce.r,Oe=Ce.g,ke=Ce.b;Te?(m[0]=Ge,m[1]=Oe,m[2]=ke,m[3]=De,H.clearBufferuiv(H.COLOR,0,m)):(x[0]=Ge,x[1]=Oe,x[2]=ke,x[3]=De,H.clearBufferiv(H.COLOR,0,x))}else Y|=H.COLOR_BUFFER_BIT}I&&(Y|=H.DEPTH_BUFFER_BIT),j&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),ge.dispose(),be.dispose(),Ie.dispose(),S.dispose(),G.dispose(),te.dispose(),ze.dispose(),Je.dispose(),Ee.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Kt),Ve.removeEventListener("sessionend",lt),de&&(de.dispose(),de=null),Zt.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=st.autoReset,I=ne.enabled,j=ne.autoUpdate,Y=ne.needsUpdate,W=ne.type;yt(),st.autoReset=T,ne.enabled=I,ne.autoUpdate=j,ne.needsUpdate=Y,ne.type=W}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const I=T.target;I.removeEventListener("dispose",ue),Le(I)}function Le(T){Re(T),Ie.remove(T)}function Re(T){const I=Ie.get(T).programs;I!==void 0&&(I.forEach(function(j){Ee.releaseProgram(j)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,j,Y,W,fe){I===null&&(I=ye);const Te=W.isMesh&&W.matrixWorld.determinant()<0,Ce=vv(T,I,j,Y,W);_e.setMaterial(Y,Te);let De=j.index,Ge=1;if(Y.wireframe===!0){if(De=ee.getWireframeAttribute(j),De===void 0)return;Ge=2}const Oe=j.drawRange,ke=j.attributes.position;let Mt=Oe.start*Ge,gn=(Oe.start+Oe.count)*Ge;fe!==null&&(Mt=Math.max(Mt,fe.start*Ge),gn=Math.min(gn,(fe.start+fe.count)*Ge)),De!==null?(Mt=Math.max(Mt,0),gn=Math.min(gn,De.count)):ke!=null&&(Mt=Math.max(Mt,0),gn=Math.min(gn,ke.count));const Ut=gn-Mt;if(Ut<0||Ut===1/0)return;ze.setup(W,Y,Ce,j,De);let ai,mt=Ue;if(De!==null&&(ai=ie.get(De),mt=Ae,mt.setIndex(ai)),W.isMesh)Y.wireframe===!0?(_e.setLineWidth(Y.wireframeLinewidth*Ye()),mt.setMode(H.LINES)):mt.setMode(H.TRIANGLES);else if(W.isLine){let We=Y.linewidth;We===void 0&&(We=1),_e.setLineWidth(We*Ye()),W.isLineSegments?mt.setMode(H.LINES):W.isLineLoop?mt.setMode(H.LINE_LOOP):mt.setMode(H.LINE_STRIP)}else W.isPoints?mt.setMode(H.POINTS):W.isSprite&&mt.setMode(H.TRIANGLES);if(W.isBatchedMesh)mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)mt.renderInstances(Mt,Ut,W.count);else if(j.isInstancedBufferGeometry){const We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,nc=Math.min(j.instanceCount,We);mt.renderInstances(Mt,Ut,nc)}else mt.render(Mt,Ut)};function ot(T,I,j){T.transparent===!0&&T.side===vi&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,Jo(T,I,j),T.side=sr,T.needsUpdate=!0,Jo(T,I,j),T.side=vi):Jo(T,I,j)}this.compile=function(T,I,j=null){j===null&&(j=T),p=be.get(j),p.init(),v.push(p),j.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),T!==j&&T.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(g._useLegacyLights);const Y=new Set;return T.traverse(function(W){const fe=W.material;if(fe)if(Array.isArray(fe))for(let Te=0;Te<fe.length;Te++){const Ce=fe[Te];ot(Ce,j,W),Y.add(Ce)}else ot(fe,j,W),Y.add(fe)}),v.pop(),p=null,Y},this.compileAsync=function(T,I,j=null){const Y=this.compile(T,I,j);return new Promise(W=>{function fe(){if(Y.forEach(function(Te){Ie.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){W(T);return}setTimeout(fe,10)}we.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let at=null;function It(T){at&&at(T)}function Kt(){Zt.stop()}function lt(){Zt.start()}const Zt=new tv;Zt.setAnimationLoop(It),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(T){at=T,Ve.setAnimationLoop(T),T===null?Zt.stop():Zt.start()},Ve.addEventListener("sessionstart",Kt),Ve.addEventListener("sessionend",lt),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(I),I=Ve.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,I,A),p=be.get(T,v.length),p.init(),v.push(p),me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V.setFromProjectionMatrix(me),se=this.localClippingEnabled,K=He.init(this.clippingPlanes,se),_=ge.get(T,u.length),_.init(),u.push(_),Qn(T,I,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(N,U),this.info.render.frame++,K===!0&&He.beginShadows();const j=p.state.shadowsArray;if(ne.render(j,T,I),K===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(_,T),p.setupLights(g._useLegacyLights),I.isArrayCamera){const Y=I.cameras;for(let W=0,fe=Y.length;W<fe;W++){const Te=Y[W];Cf(_,T,Te,Te.viewport)}}else Cf(_,T,I);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(g,T,I),ze.resetDefaultState(),D=-1,E=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Qn(T,I,j,Y){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||V.intersectsSprite(T)){Y&&Se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const Te=te.update(T),Ce=T.material;Ce.visible&&_.push(T,Te,Ce,j,Se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||V.intersectsObject(T))){const Te=te.update(T),Ce=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Se.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Se.copy(Te.boundingSphere.center)),Se.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(Ce)){const De=Te.groups;for(let Ge=0,Oe=De.length;Ge<Oe;Ge++){const ke=De[Ge],Mt=Ce[ke.materialIndex];Mt&&Mt.visible&&_.push(T,Te,Mt,j,Se.z,ke)}}else Ce.visible&&_.push(T,Te,Ce,j,Se.z,null)}}const fe=T.children;for(let Te=0,Ce=fe.length;Te<Ce;Te++)Qn(fe[Te],I,j,Y)}function Cf(T,I,j,Y){const W=T.opaque,fe=T.transmissive,Te=T.transparent;p.setupLightsView(j),K===!0&&He.setGlobalState(g.clippingPlanes,j),fe.length>0&&gv(W,fe,I,j),Y&&_e.viewport(M.copy(Y)),W.length>0&&Qo(W,I,j),fe.length>0&&Qo(fe,I,j),Te.length>0&&Qo(Te,I,j),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function gv(T,I,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const fe=Ne.isWebGL2;de===null&&(de=new Fr(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Bo:nr,minFilter:zo,samples:fe?4:0})),g.getDrawingBufferSize(z),fe?de.setSize(z.x,z.y):de.setSize(gd(z.x),gd(z.y));const Te=g.getRenderTarget();g.setRenderTarget(de),g.getClearColor(J),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();const Ce=g.toneMapping;g.toneMapping=tr,Qo(T,j,Y),R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de);let De=!1;for(let Ge=0,Oe=I.length;Ge<Oe;Ge++){const ke=I[Ge],Mt=ke.object,gn=ke.geometry,Ut=ke.material,ai=ke.group;if(Ut.side===vi&&Mt.layers.test(Y.layers)){const mt=Ut.side;Ut.side=pn,Ut.needsUpdate=!0,bf(Mt,j,Y,gn,Ut,ai),Ut.side=mt,Ut.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de)),g.setRenderTarget(Te),g.setClearColor(J,P),g.toneMapping=Ce}function Qo(T,I,j){const Y=I.isScene===!0?I.overrideMaterial:null;for(let W=0,fe=T.length;W<fe;W++){const Te=T[W],Ce=Te.object,De=Te.geometry,Ge=Y===null?Te.material:Y,Oe=Te.group;Ce.layers.test(j.layers)&&bf(Ce,I,j,De,Ge,Oe)}}function bf(T,I,j,Y,W,fe){T.onBeforeRender(g,I,j,Y,W,fe),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(g,I,j,Y,T,fe),W.transparent===!0&&W.side===vi&&W.forceSinglePass===!1?(W.side=pn,W.needsUpdate=!0,g.renderBufferDirect(j,I,Y,W,T,fe),W.side=sr,W.needsUpdate=!0,g.renderBufferDirect(j,I,Y,W,T,fe),W.side=vi):g.renderBufferDirect(j,I,Y,W,T,fe),T.onAfterRender(g,I,j,Y,W,fe)}function Jo(T,I,j){I.isScene!==!0&&(I=ye);const Y=Ie.get(T),W=p.state.lights,fe=p.state.shadowsArray,Te=W.state.version,Ce=Ee.getParameters(T,W.state,fe,I,j),De=Ee.getProgramCacheKey(Ce);let Ge=Y.programs;Y.environment=T.isMeshStandardMaterial?I.environment:null,Y.fog=I.fog,Y.envMap=(T.isMeshStandardMaterial?G:S).get(T.envMap||Y.environment),Ge===void 0&&(T.addEventListener("dispose",ue),Ge=new Map,Y.programs=Ge);let Oe=Ge.get(De);if(Oe!==void 0){if(Y.currentProgram===Oe&&Y.lightsStateVersion===Te)return Pf(T,Ce),Oe}else Ce.uniforms=Ee.getUniforms(T),T.onBuild(j,Ce,g),T.onBeforeCompile(Ce,g),Oe=Ee.acquireProgram(Ce,De),Ge.set(De,Oe),Y.uniforms=Ce.uniforms;const ke=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=He.uniform),Pf(T,Ce),Y.needsLights=xv(T),Y.lightsStateVersion=Te,Y.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMap.value=W.state.directionalShadowMap,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotShadowMap.value=W.state.spotShadowMap,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMap.value=W.state.pointShadowMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Oe,Y.uniformsList=null,Oe}function Lf(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=nl.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Pf(T,I){const j=Ie.get(T);j.outputColorSpace=I.outputColorSpace,j.batching=I.batching,j.instancing=I.instancing,j.instancingColor=I.instancingColor,j.skinning=I.skinning,j.morphTargets=I.morphTargets,j.morphNormals=I.morphNormals,j.morphColors=I.morphColors,j.morphTargetsCount=I.morphTargetsCount,j.numClippingPlanes=I.numClippingPlanes,j.numIntersection=I.numClipIntersection,j.vertexAlphas=I.vertexAlphas,j.vertexTangents=I.vertexTangents,j.toneMapping=I.toneMapping}function vv(T,I,j,Y,W){I.isScene!==!0&&(I=ye),R.resetTextureUnits();const fe=I.fog,Te=Y.isMeshStandardMaterial?I.environment:null,Ce=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ci,De=(Y.isMeshStandardMaterial?G:S).get(Y.envMap||Te),Ge=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Oe=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ke=!!j.morphAttributes.position,Mt=!!j.morphAttributes.normal,gn=!!j.morphAttributes.color;let Ut=tr;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ut=g.toneMapping);const ai=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,mt=ai!==void 0?ai.length:0,We=Ie.get(Y),nc=p.state.lights;if(K===!0&&(se===!0||T!==E)){const An=T===E&&Y.id===D;He.setState(Y,T,An)}let St=!1;Y.version===We.__version?(We.needsLights&&We.lightsStateVersion!==nc.state.version||We.outputColorSpace!==Ce||W.isBatchedMesh&&We.batching===!1||!W.isBatchedMesh&&We.batching===!0||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||We.envMap!==De||Y.fog===!0&&We.fog!==fe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==He.numPlanes||We.numIntersection!==He.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==Oe||We.morphTargets!==ke||We.morphNormals!==Mt||We.morphColors!==gn||We.toneMapping!==Ut||Ne.isWebGL2===!0&&We.morphTargetsCount!==mt)&&(St=!0):(St=!0,We.__version=Y.version);let ur=We.currentProgram;St===!0&&(ur=Jo(Y,I,W));let Nf=!1,js=!1,ic=!1;const Vt=ur.getUniforms(),dr=We.uniforms;if(_e.useProgram(ur.program)&&(Nf=!0,js=!0,ic=!0),Y.id!==D&&(D=Y.id,js=!0),Nf||E!==T){Vt.setValue(H,"projectionMatrix",T.projectionMatrix),Vt.setValue(H,"viewMatrix",T.matrixWorldInverse);const An=Vt.map.cameraPosition;An!==void 0&&An.setValue(H,Se.setFromMatrixPosition(T.matrixWorld)),Ne.logarithmicDepthBuffer&&Vt.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Vt.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,js=!0,ic=!0)}if(W.isSkinnedMesh){Vt.setOptional(H,W,"bindMatrix"),Vt.setOptional(H,W,"bindMatrixInverse");const An=W.skeleton;An&&(Ne.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Vt.setValue(H,"boneTexture",An.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Vt.setOptional(H,W,"batchingTexture"),Vt.setValue(H,"batchingTexture",W._matricesTexture,R));const rc=j.morphAttributes;if((rc.position!==void 0||rc.normal!==void 0||rc.color!==void 0&&Ne.isWebGL2===!0)&&Xe.update(W,j,ur),(js||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,Vt.setValue(H,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(dr.envMap.value=De,dr.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),js&&(Vt.setValue(H,"toneMappingExposure",g.toneMappingExposure),We.needsLights&&_v(dr,ic),fe&&Y.fog===!0&&le.refreshFogUniforms(dr,fe),le.refreshMaterialUniforms(dr,Y,$,X,de),nl.upload(H,Lf(We),dr,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(nl.upload(H,Lf(We),dr,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Vt.setValue(H,"center",W.center),Vt.setValue(H,"modelViewMatrix",W.modelViewMatrix),Vt.setValue(H,"normalMatrix",W.normalMatrix),Vt.setValue(H,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const An=Y.uniformsGroups;for(let sc=0,yv=An.length;sc<yv;sc++)if(Ne.isWebGL2){const Df=An[sc];Je.update(Df,ur),Je.bind(Df,ur)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ur}function _v(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function xv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,I,j){Ie.get(T.texture).__webglTexture=I,Ie.get(T.depthTexture).__webglTexture=j;const Y=Ie.get(T);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,I){const j=Ie.get(T);j.__webglFramebuffer=I,j.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,j=0){A=T,b=I,C=j;let Y=!0,W=null,fe=!1,Te=!1;if(T){const De=Ie.get(T);De.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(H.FRAMEBUFFER,null),Y=!1):De.__webglFramebuffer===void 0?R.setupRenderTarget(T):De.__hasExternalTextures&&R.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Te=!0);const Oe=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[I])?W=Oe[I][j]:W=Oe[I],fe=!0):Ne.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?W=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?W=Oe[j]:W=Oe,M.copy(T.viewport),B.copy(T.scissor),q=T.scissorTest}else M.copy(k).multiplyScalar($).floor(),B.copy(Z).multiplyScalar($).floor(),q=Q;if(_e.bindFramebuffer(H.FRAMEBUFFER,W)&&Ne.drawBuffers&&Y&&_e.drawBuffers(T,W),_e.viewport(M),_e.scissor(B),_e.setScissorTest(q),fe){const De=Ie.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+I,De.__webglTexture,j)}else if(Te){const De=Ie.get(T.texture),Ge=I||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,De.__webglTexture,j||0,Ge)}D=-1},this.readRenderTargetPixels=function(T,I,j,Y,W,fe,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){_e.bindFramebuffer(H.FRAMEBUFFER,Ce);try{const De=T.texture,Ge=De.format,Oe=De.type;if(Ge!==Yn&&ve.convert(Ge)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Oe===Bo&&(we.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&we.has("EXT_color_buffer_float"));if(Oe!==nr&&ve.convert(Oe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===ji&&(Ne.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-Y&&j>=0&&j<=T.height-W&&H.readPixels(I,j,Y,W,ve.convert(Ge),ve.convert(Oe),fe)}finally{const De=A!==null?Ie.get(A).__webglFramebuffer:null;_e.bindFramebuffer(H.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(T,I,j=0){const Y=Math.pow(2,-j),W=Math.floor(I.image.width*Y),fe=Math.floor(I.image.height*Y);R.setTexture2D(I,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,T.x,T.y,W,fe),_e.unbindTexture()},this.copyTextureToTexture=function(T,I,j,Y=0){const W=I.image.width,fe=I.image.height,Te=ve.convert(j.format),Ce=ve.convert(j.type);R.setTexture2D(j,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment),I.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Y,T.x,T.y,W,fe,Te,Ce,I.image.data):I.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Y,T.x,T.y,I.mipmaps[0].width,I.mipmaps[0].height,Te,I.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,Y,T.x,T.y,Te,Ce,I.image),Y===0&&j.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(T,I,j,Y,W=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=T.max.x-T.min.x+1,Te=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,De=ve.convert(Y.format),Ge=ve.convert(Y.type);let Oe;if(Y.isData3DTexture)R.setTexture3D(Y,0),Oe=H.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)R.setTexture2DArray(Y,0),Oe=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const ke=H.getParameter(H.UNPACK_ROW_LENGTH),Mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),gn=H.getParameter(H.UNPACK_SKIP_PIXELS),Ut=H.getParameter(H.UNPACK_SKIP_ROWS),ai=H.getParameter(H.UNPACK_SKIP_IMAGES),mt=j.isCompressedTexture?j.mipmaps[W]:j.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,mt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,T.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,T.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?H.texSubImage3D(Oe,W,I.x,I.y,I.z,fe,Te,Ce,De,Ge,mt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Oe,W,I.x,I.y,I.z,fe,Te,Ce,De,mt.data)):H.texSubImage3D(Oe,W,I.x,I.y,I.z,fe,Te,Ce,De,Ge,mt),H.pixelStorei(H.UNPACK_ROW_LENGTH,ke),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,gn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ut),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ai),W===0&&Y.generateMipmaps&&H.generateMipmap(Oe),_e.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){b=0,C=0,A=null,_e.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===vf?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===Jl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?Pr:H0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pr?At:Ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _w extends lv{}_w.prototype.isWebGL1Renderer=!0;class Sf{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=n,this.far=i}clone(){return new Sf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xw extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class zi extends cr{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],m=[];let x=0;const _=[],p=i/2;let u=0;v(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(d),this.setAttribute("position",new oi(f,3)),this.setAttribute("normal",new oi(h,3)),this.setAttribute("uv",new oi(m,2));function v(){const y=new O,b=new O;let C=0;const A=(n-e)/i;for(let D=0;D<=s;D++){const E=[],M=D/s,B=M*(n-e)+e;for(let q=0;q<=r;q++){const J=q/r,P=J*l+a,F=Math.sin(P),X=Math.cos(P);b.x=B*F,b.y=-M*i+p,b.z=B*X,f.push(b.x,b.y,b.z),y.set(F,A,X).normalize(),h.push(y.x,y.y,y.z),m.push(J,1-M),E.push(x++)}_.push(E)}for(let D=0;D<r;D++)for(let E=0;E<s;E++){const M=_[E][D],B=_[E+1][D],q=_[E+1][D+1],J=_[E][D+1];d.push(M,B,J),d.push(B,q,J),C+=6}c.addGroup(u,C,0),u+=C}function g(y){const b=x,C=new Qe,A=new O;let D=0;const E=y===!0?e:n,M=y===!0?1:-1;for(let q=1;q<=r;q++)f.push(0,p*M,0),h.push(0,M,0),m.push(.5,.5),x++;const B=x;for(let q=0;q<=r;q++){const P=q/r*l+a,F=Math.cos(P),X=Math.sin(P);A.x=E*X,A.y=p*M,A.z=E*F,f.push(A.x,A.y,A.z),h.push(0,M,0),C.x=F*.5+.5,C.y=X*.5*M+.5,m.push(C.x,C.y),x++}for(let q=0;q<r;q++){const J=b+q,P=B+q;y===!0?d.push(P,P+1,J):d.push(P+1,P,J),D+=3}c.addGroup(u,D,y===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class it extends Zo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=G0,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const cm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class yw{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return x}return null}}}const Sw=new yw;class Ef{constructor(e){this.manager=e!==void 0?e:Sw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ef.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ew extends Ef{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=cm.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Ho("img");function l(){d(),cm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){d(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class cv extends Ef{constructor(e){super(e)}load(e,n,i,r){const s=new mn,o=new Ew(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Mf extends rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class Mw extends Mf{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const uu=new Ct,um=new O,dm=new O;class Tw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xf,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;um.setFromMatrixPosition(e.matrixWorld),n.position.copy(um),dm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(dm),n.updateMatrixWorld(),uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fm=new Ct,so=new O,du=new O;class ww extends Tw{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),so.setFromMatrixPosition(e.matrixWorld),i.position.copy(so),du.copy(i.position),du.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(du),i.updateMatrixWorld(),r.makeTranslation(-so.x,-so.y,-so.z),fm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fm)}}class fu extends Mf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ww}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Aw extends Mf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mf);function Qt(t){return new Promise((e,n)=>{new cv().load(t,e,void 0,n)})}function oo(t,e=1){return t.colorSpace=At,t.wrapS=t.wrapT=bl,t.repeat.set(e,e),t}async function Rw(t){const[e,n,i,r,s,o,a,l,c,d,f,h,m,x,_]=await Promise.all([Qt("./assets/room/wall.svg"),Qt("./assets/room/floor.svg"),Qt("./assets/room/sofa.svg"),Qt("./assets/room/metal.svg"),Qt("./assets/room/wood.svg"),Qt("./assets/room/door.svg"),Qt("./assets/room/cabinet.svg"),Qt("./assets/room/poster.svg"),Qt("./assets/room/books.svg"),Qt("./assets/scenes/window.svg"),Qt("./assets/scenes/window_glass.svg"),Qt("./assets/room/posterProtocol.svg"),Qt("./assets/room/posterWarning.svg"),Qt("./assets/room/posterMissing.svg"),Qt("./assets/room/banner.svg")]);for(const ee of[o,a,l,c,d,f,h,m,x,_])ee.colorSpace=At;oo(e,1),e.repeat.set(3,1),oo(n,2),oo(i,2),oo(r),oo(s);const p=new it({map:i,roughness:.9}),u=new it({map:r,roughness:.5,metalness:.4}),v=new it({map:s,roughness:.8});t.background=new Ke(1712412),t.fog=new Sf(1712412,6,20);const g=new Me(new gt(10,10),new it({map:n,roughness:.9}));g.rotation.x=-Math.PI/2,t.add(g);const y=new Me(new gt(10,4),new it({map:e,roughness:.85}));y.position.set(0,2,-3),t.add(y);const b=new Me(new gt(2.6,1.6),new Vn({map:d}));b.position.set(0,1.95,-2.99),t.add(b);const C=new Me(new gt(2.6,1.6),new Vn({map:f,transparent:!0}));C.position.set(0,1.95,-2.97),t.add(C);const A=new it({color:2237994,roughness:.5,metalness:.5});for(const[ee,te,Ee,le]of[[2.8,.1,0,2.8],[2.8,.1,0,1.1],[.1,1.8,-1.35,1.95],[.1,1.8,1.35,1.95]]){const ge=new Me(new rt(ee,te,.08),A);ge.position.set(Ee,le,-2.95),t.add(ge)}const D=new fu(14723168,12,5,2);D.position.set(0,2,-2.5),t.add(D);const E=new Me(new gt(1.6,.8),new Vn({map:l}));E.position.set(3.2,2.4,-2.98),t.add(E);const M=new Me(new gt(1,1.25),new Vn({map:h}));M.position.set(-4.97,2.1,.3),M.rotation.y=Math.PI/2,t.add(M);const B=new Me(new gt(1,1.25),new Vn({map:x}));B.position.set(-4.97,2.1,1.9),B.rotation.y=Math.PI/2,t.add(B);const q=new Me(new gt(1,1.25),new Vn({map:m}));q.position.set(4.97,2.1,.3),q.rotation.y=-Math.PI/2,t.add(q);const J=new Me(new gt(2.8,.7),new Vn({map:_}));J.position.set(-2.5,3.3,2.97),J.rotation.y=Math.PI,t.add(J);const P=new it({color:3027758,roughness:.9}),F=new Me(new gt(10,4),P);F.position.set(0,2,3),t.add(F);const X=new Me(new gt(6,4),P);X.position.set(-5,2,0),X.rotation.y=Math.PI/2,t.add(X);const $=new Me(new gt(6,4),P);$.position.set(5,2,0),$.rotation.y=-Math.PI/2,t.add($);const N=new Me(new gt(10,6),P);N.position.set(0,4,0),N.rotation.x=Math.PI/2,t.add(N);const U=new Me(new rt(3.2,.9,.9),u);U.position.set(0,.45,-2.4),t.add(U);const k=new Me(new rt(3.3,.12,1),u);k.position.set(0,.96,-2.4),t.add(k);const Z=new Me(new rt(.42,.07,.3),new it({color:5904916,roughness:.7}));Z.position.set(.45,1.05,-2.25),Z.rotation.y=.2,t.add(Z);const Q=new Me(new rt(.38,.05,.26),new it({color:14209208,roughness:.9}));Q.position.set(.45,1.08,-2.25),Q.rotation.y=.2,t.add(Q);const V=new Me(new gt(.22,.3),new it({color:14209200,roughness:.95}));V.position.set(-.55,1.075,-2.3),V.rotation.x=-Math.PI/2,V.rotation.z=.25,t.add(V);const K=new Me(new gt(.18,.26),new Vn({color:2763300}));K.position.set(-.55,1.078,-2.3),K.rotation.x=-Math.PI/2,K.rotation.z=.25,K.visible=!1,t.add(K);const se=new Me(new rt(2.4,.5,1),p);se.position.set(0,.4,1.4),t.add(se);const de=new Me(new rt(2.4,.9,.28),p);de.position.set(0,1.05,1.9),t.add(de);const me=new Me(new rt(.28,.7,1),p);me.position.set(-1.34,.55,1.4),t.add(me);const z=new Me(new rt(.28,.7,1),p);z.position.set(1.34,.55,1.4),t.add(z);const Se=new Me(new rt(.9,2.2,.6),u);Se.position.set(4.2,1.1,1.2),t.add(Se);const ye=new Me(new gt(.58,2.1),new it({map:a,roughness:.6,metalness:.3}));ye.rotation.y=-Math.PI/2,ye.position.set(3.74,1.1,1.2),t.add(ye);const Ye=new Me(new rt(.1,.25,.05),new it({color:10132112,roughness:.4,metalness:.6}));Ye.visible=!1,t.add(Ye);const H=new Me(new rt(.6,2,1.6),v);H.position.set(-4.6,1,1.2),t.add(H);const Dt=new Me(new rt(.1,.06,1.56),new it({color:4142372,roughness:.8}));Dt.position.set(-4.26,1.43,1.2),t.add(Dt);const we=new Me(new rt(.1,.06,1.56),new it({color:4142372,roughness:.8}));we.position.set(-4.26,.75,1.2),t.add(we);for(const ee of[1.76,1.08,.4]){const te=new Me(new gt(1.44,.62),new it({map:c,roughness:.9}));te.rotation.y=Math.PI/2,te.position.set(-4.29,ee,1.2),t.add(te)}const Ne=new Me(new rt(.6,1.2,.5),u);Ne.position.set(4.6,.6,-1.8),t.add(Ne);const _e=new Me(new gt(.52,1.1),new it({color:4871506,roughness:.6,metalness:.3}));_e.rotation.y=-Math.PI/2,_e.position.set(4.29,.6,-1.8),t.add(_e);const st=new Me(new rt(.15,2.2,1.1),u);st.position.set(4.9,1.1,-.8),t.add(st);const Ie=new Me(new gt(1.1,2.2),new it({map:o,roughness:.6,metalness:.3}));Ie.rotation.y=-Math.PI/2,Ie.position.set(4.82,1.1,-.8),t.add(Ie);const R=new Me(new rt(.06,.28,.06),new it({color:11575424,roughness:.4,metalness:.5}));R.position.set(4.8,1.1,-.45),t.add(R);const S=new Me(new rt(.04,.18,.18),new it({color:10099226,roughness:.4,emissive:4852234,emissiveIntensity:.6}));S.position.set(4.8,1.3,-.45),t.add(S),t.add(new Mw(10136218,2763300,1.3)),t.add(new Aw(11186344,1.5));const G=new fu(10467583,70,18,1.8);G.position.set(0,3.5,0),t.add(G);const ie=new fu(14731384,50,12,1.8);ie.position.set(0,3.2,-1),t.add(ie)}const hm=[{id:"window",label:"Observation Window",position:[0,1.6,-2],lookAt:[0,1.6,-3]},{id:"manual",label:"Manual Shelf",position:[-3.5,1.4,1.2],lookAt:[-4.2,1.4,1.2]},{id:"weapons",label:"Armory",position:[3.5,1.4,1.2],lookAt:[4.2,1.4,1.2]},{id:"supplies",label:"Supply Locker",position:[1.8,1.2,-2],lookAt:[2.5,1.2,-2.4]},{id:"sofa",label:"Sofa",position:[0,1.2,.8],lookAt:[0,1.2,1.4]},{id:"door",label:"Door",position:[3.8,1.6,-.8],lookAt:[4.5,1.6,-.8]},{id:"book",label:"Book on Desk",position:[.45,1.1,-2.25],lookAt:[.45,1.1,-2.25]},{id:"note",label:"Note",position:[-.55,1.1,-2.3],lookAt:[-.55,1.1,-2.3]},{id:"poster1",label:"Protocol Poster",position:[-4.97,2.1,.3],lookAt:[-4.97,2.1,.3]},{id:"poster2",label:"Hazard Poster",position:[4.97,2.1,.3],lookAt:[4.97,2.1,.3]},{id:"poster3",label:"Missing Personnel",position:[-4.97,2.1,1.9],lookAt:[-4.97,2.1,1.9]},{id:"banner",label:"Banner",position:[-2.5,1.6,2.7],lookAt:[-2.5,3.3,3]}],Cw=4,bw=2,Lw=5,Pw=15,_d=1.6,uv=1,pm=.002;function Go(t,e,n){return Math.max(e,Math.min(n,t))}const Nw=[{x:4.2,z:1.2,radius:1},{x:-4.6,z:1.2,radius:1},{x:4.6,z:-1.8,radius:.8},{x:0,z:-2.5,radius:.9}],Dw={minX:-1.4,maxX:1.4,minZ:.9,maxZ:2.05};function Iw(t,e,n,i){const r=Go(t,i.minX,i.maxX),s=Go(e,i.minZ,i.maxZ),o=t-r,a=e-s,l=o*o+a*a;if(l>=n*n)return[t,e];if(l===0){const f=t-i.minX,h=i.maxX-t,m=e-i.minZ,x=i.maxZ-e,_=Math.min(f,h,m,x);return _===f?[i.minX-n,e]:_===h?[i.maxX+n,e]:_===m?[t,i.minZ-n]:[t,i.maxZ+n]}const c=Math.sqrt(l),d=(n-c)/c;return[t+o*d,e+a*d]}function Uw(t,e,n,i){const r=t.crouching?bw:Cw;let s=0,o=0;e.forward&&(o-=1),e.back&&(o+=1),e.left&&(s-=1),e.right&&(s+=1);const a=Math.hypot(s,o);a>0&&(s/=a,o/=a);const l=Math.sin(t.yaw),c=Math.cos(t.yaw);let d=t.x+(s*c+o*l)*r*n,f=t.z+(-s*l+o*c)*r*n;const h=.3;for(const p of Nw){const u=Math.hypot(d-p.x,f-p.z);if(u<p.radius+h){const v=(d-p.x)/u,g=(f-p.z)/u;d=p.x+v*(p.radius+h),f=p.z+g*(p.radius+h)}}[d,f]=Iw(d,f,h,Dw),d=Go(d,i.minX,i.maxX),f=Go(f,i.minZ,i.maxZ);const m=e.crouch?uv:_d;let x=t.vy,_=t.y;return e.jump&&_<=m+.01&&(x=Lw),x-=Pw*n,_+=x*n,_<=m&&(_=m,x=0),{x:d,y:_,z:f,vy:x,yaw:t.yaw,pitch:t.pitch,crouching:e.crouch}}function Ow(t,e,n){const i=t.yaw-e*pm,r=Go(t.pitch-n*pm,-Math.PI/2+.01,Math.PI/2-.01);return{...t,yaw:i,pitch:r}}let xe=null,xs=null,Ar=null,mi=null,Ba=null,ys=!1,Mi=null,gr=null,Ha=null;const mm=new Set;function Fe(){return xe?xe.currentTime:0}function dv(){if(!Ba&&xe){Ba=xe.createBuffer(1,2*xe.sampleRate,xe.sampleRate);const t=Ba.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}return Ba}function Hr(t,e,n,i=Fe(),r=Ar){const s=xe.createGain();return s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(Math.max(t,2e-4),i+e),s.gain.exponentialRampToValueAtTime(1e-4,i+e+n),r&&s.connect(r),s}function $e(t,e,n,i={}){if(!xe)return;const r=i.at??Fe(),s=xe.createOscillator();s.type=i.type??"sine",s.frequency.setValueAtTime(t,r),i.to&&s.frequency.exponentialRampToValueAtTime(i.to,r+e),s.connect(Hr(n,i.attack??.005,e,r,i.dest===void 0?Ar:i.dest)),s.start(r),s.stop(r+e+.05)}function Pe(t,e,n={}){if(!xe)return;const i=n.at??Fe(),r=xe.createBufferSource();r.buffer=dv(),r.playbackRate.value=n.rate??1;const s=xe.createBiquadFilter();s.type=n.type??"lowpass",s.frequency.setValueAtTime(n.freq??2e3,i),n.to&&s.frequency.exponentialRampToValueAtTime(n.to,i+t),s.Q.value=n.q??.8,r.connect(s),s.connect(Hr(e,n.attack??.003,t,i,n.dest===void 0?Ar:n.dest)),r.start(i,Math.random()*1.5),r.stop(i+t+.1)}function kt(t,e){const n=window.setTimeout(()=>{mm.delete(n),e()},t);mm.add(n)}function Fw(){if(xe)return;const t=typeof AudioContext<"u"?AudioContext:window.webkitAudioContext;if(!t)return;xe=new t,xs=xe.createGain(),xs.gain.value=ys?0:.8,xs.connect(xe.destination);const e=xe.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,e.connect(xs),Ar=xe.createGain(),Ar.gain.value=.9,Ar.connect(e),mi=xe.createGain(),mi.gain.value=.22,mi.connect(e);for(const x of[55,55.8,82.4]){const _=xe.createOscillator();_.frequency.value=x;const p=xe.createGain();p.gain.value=x>80?.12:.4,_.connect(p),p.connect(mi),_.start()}const n=xe.createOscillator();n.type="sawtooth",n.frequency.value=120;const i=xe.createBiquadFilter();i.type="lowpass",i.frequency.value=500,gr=xe.createGain(),gr.gain.value=.05,n.connect(i),i.connect(gr),gr.connect(mi),n.start();const r=()=>{if(!xe||!gr)return;const x=Fe();for(let _=0;_<3+Math.random()*4;_++)gr.gain.setValueAtTime(Math.random()<.5?.005:.09,x+_*.05),Math.random()<.5&&Pe(.03,.05,{type:"highpass",freq:3e3,at:x+_*.05});gr.gain.setValueAtTime(.05,x+.4),kt(6e3+Math.random()*14e3,r)};kt(5e3,r);const s=(x,_,p,u=1)=>{const v=xe.createBufferSource();v.buffer=dv(),v.loop=!0,v.playbackRate.value=u;const g=xe.createBiquadFilter();g.type=x,g.frequency.value=_;const y=xe.createGain();return y.gain.value=p,v.connect(g),g.connect(y),y.connect(mi),v.start(),{fl:g,g:y}};s("lowpass",800,.35),s("highpass",5e3,.06,.7);const o=()=>{xe&&($e(2400+Math.random()*2400,.03,.015+Math.random()*.02,{type:"sine",dest:mi}),kt(60+Math.random()*400,o))};o();const a=s("bandpass",400,.25,.5);a.fl.Q.value=3;const l=xe.createOscillator();l.frequency.value=.07;const c=xe.createGain();c.gain.value=250,l.connect(c),c.connect(a.fl.frequency),l.start();const d=()=>{kw(),kt(25e3+Math.random()*35e3,d)};kt(12e3+Math.random()*1e4,d);const f=()=>{zw(.6+Math.random()),kt(3e4+Math.random()*4e4,f)};kt(2e4,f);const h=xe.createOscillator();h.frequency.value=7200;const m=xe.createGain();m.gain.value=0,h.connect(m),m.connect(Ar),h.start(),Mi={osc:h,gain:m},window.addEventListener("keydown",x=>{x.code==="KeyM"&&Tf()})}function kw(){xe&&(Pe(.15,.25,{type:"lowpass",freq:3e3,to:300}),Pe(4.5,.5,{type:"lowpass",freq:220,to:40,attack:.3,rate:.4}))}function zw(t=1){if(xe){Pe(t,.06,{type:"bandpass",freq:1800,q:2});for(let e=0;e<4;e++)$e(600+Math.random()*900,.08,.03,{type:"square",at:Fe()+Math.random()*t})}}function Bw(t){if(!xe||!Mi)return;const e=t>=70?0:Math.min(.05,(70-t)/70*.05);Mi.gain.gain.setTargetAtTime(e,Fe(),.8),Mi.osc.frequency.setTargetAtTime(6800+(70-Math.min(70,t))*30,Fe(),1)}function Tf(){return ys=!ys,xs&&xe&&xs.gain.setTargetAtTime(ys?0:.8,Fe(),.05),ys}function Hw(){return ys}let Ga=!1;function Gw(t=!1){if(!xe)return;Ga=!Ga;const e=t?.12:.3;Pe(.09,e,{type:"lowpass",freq:Ga?900:750,to:200}),$e(Ga?70:64,.08,e*.8,{to:40}),Pe(.04,e*.3,{type:"highpass",freq:3500,at:Fe()+.02})}function Vw(){Pe(.12,.12,{type:"bandpass",freq:600})}function Ww(){$e(58,.2,.5,{to:35}),Pe(.15,.35,{type:"lowpass",freq:700,to:150})}function jw(){Pe(.25,.08,{type:"bandpass",freq:1200,q:1.5,attack:.05})}function Hn(){$e(180,.14,.2,{to:90})}function hu(){$e(1400,.03,.06,{type:"square"})}function Xw(){for(let t=0;t<3;t++){const e=Fe()+t*.14;Pe(.08,.4,{type:"bandpass",freq:1400,q:4,at:e}),$e(220,.1,.15,{type:"square",at:e,to:180})}$e(90,.4,.3,{at:Fe()+.5,to:60})}function Va(){Pe(.22,.2,{type:"highpass",freq:1800,to:5e3,attack:.04}),Pe(.12,.1,{type:"bandpass",freq:3e3,at:Fe()+.18})}function Il(){if(!xe)return;const t=xe.createOscillator();t.type="sawtooth";const e=Fe();t.frequency.setValueAtTime(340,e);for(let i=1;i<10;i++)t.frequency.linearRampToValueAtTime(300+Math.random()*120,e+i*.07);const n=xe.createBiquadFilter();n.type="bandpass",n.frequency.value=900,n.Q.value=6,t.connect(n),n.connect(Hr(.12,.08,.7,e)),t.start(e),t.stop(e+.9),Pe(.1,.35,{type:"lowpass",freq:1200,at:e+.75})}function qw(){Pe(1.2,.18,{type:"bandpass",freq:500,to:1600,q:5,attack:.1}),kt(1400,()=>{$e(140,.12,.25,{to:80}),kt(500,()=>$e(130,.12,.22,{to:80}))})}function Yw(){for(let t=0;t<6;t++)Pe(.07,.15,{type:"bandpass",freq:900+Math.random()*600,q:2,at:Fe()+t*.22})}function $w(){Pe(.4,.3,{type:"lowpass",freq:400,to:120});for(let t=0;t<3;t++)Pe(1.3,.1,{type:"bandpass",freq:700,q:1.2,attack:.6,at:Fe()+.8+t*2.6}),Pe(1.6,.07,{type:"bandpass",freq:500,q:1.2,attack:.2,at:Fe()+2+t*2.6});for(let t=0;t<8;t++)fv(.3,Fe()+1+t*(.8+t*.08))}function xd(t=!0){$e(t?900:700,.05,.1,{type:"square"}),Pe(t?.35:.2,.08,{type:"bandpass",freq:2200,q:1.5,at:Fe()+.04})}function Kw(){for(const[t,e]of[[0,0],[1,.24],[2,.46]])$e(t===2?110:130,.12,.45,{to:70,at:Fe()+e}),Pe(.06,.3,{type:"bandpass",freq:1800,q:1.2,at:Fe()+e})}const Zw={human:{f:150,type:"triangle",spread:40},suspicious:{f:175,type:"triangle",spread:70},skinfit:{f:128,type:"triangle",spread:20},coretick:{f:160,type:"square",spread:8},wetnest:{f:95,type:"sawtooth",spread:30}};function Qw(t,e=!1){if(!xe)return;const n=Zw[t];let i=n.f+(Math.random()-.5)*n.spread;e&&Math.random()<.3&&(i*=Math.random()<.5?.5:1.9);const r=xe.createOscillator();r.type=n.type,r.frequency.value=i;const s=xe.createBiquadFilter();s.type="bandpass",s.frequency.value=900+Math.random()*500,s.Q.value=1.5,r.connect(s),s.connect(Hr(.12,.01,.07)),r.start(),r.stop(Fe()+.1),t==="coretick"&&Math.random()<.25&&$e(3200,.015,.08,{type:"square",at:Fe()+.05}),t==="wetnest"&&Math.random()<.3&&Pe(.08,.06,{type:"lowpass",freq:400,rate:.5}),e&&Math.random()<.15&&Pe(.05,.12,{type:"highpass",freq:4e3})}function Jw(){for(let t=0;t<5;t++)Pe(.5+Math.random()*.5,.06,{type:"bandpass",freq:2500+Math.random()*2e3,q:4,attack:.15,at:Fe()+t*.45})}function eA(t){t==="eye"&&($e(2e3,.3,.04,{to:3e3,attack:.1}),Pe(.2,.05,{type:"highpass",freq:6e3})),t==="id"&&(Pe(.1,.2,{type:"bandpass",freq:2400}),kt(250,()=>$e(1200,.06,.08,{type:"square"}))),t==="question"&&xd(!0)}function tA(){if(!xe)return;const t=xe.createOscillator();t.type="square",t.frequency.value=180;const e=xe.createBiquadFilter();e.type="lowpass",e.frequency.value=1200,t.connect(e),e.connect(Hr(.1,.01,.9)),t.start(),t.stop(Fe()+1),kt(900,()=>{Pe(.1,.4,{type:"bandpass",freq:1e3,q:3}),Il()})}function nA(){Pe(1.2,.3,{type:"highpass",freq:2500,to:800,attack:.02}),kt(1e3,()=>{$e(50,.6,.7,{to:30}),Pe(.2,.5,{type:"lowpass",freq:900})}),kt(1800,()=>{for(let t=0;t<5;t++)$e(100,.1,.2,{to:70,at:Fe()+t*.3+Math.random()*.1})})}function fv(t=.5,e=Fe()){$e(62,.12,t,{to:40,at:e}),$e(56,.14,t*.7,{to:36,at:e+.18})}function hv(){if(xe){for(const t of[700,1043,1580]){const e=xe.createOscillator();e.type="sawtooth";const n=Fe();e.frequency.setValueAtTime(t,n),e.frequency.linearRampToValueAtTime(t*1.6,n+.5);const i=xe.createOscillator();i.frequency.value=38;const r=xe.createGain();r.gain.value=t*.05,i.connect(r),r.connect(e.frequency),e.connect(Hr(.07,.02,.6,n)),e.start(n),i.start(n),e.stop(n+.7),i.stop(n+.7)}Pe(.6,.15,{type:"bandpass",freq:2500,q:1})}}function iA(t){$e(1100,.05,.1,{type:"square"})}function rA(){Ha==null||Ha.stop(),Ha=null}function wf(){Pe(.04,1,{type:"highpass",freq:800}),Pe(.5,.9,{type:"lowpass",freq:4e3,to:300}),$e(90,.3,.9,{to:35}),kt(80,()=>Pe(1.4,.2,{type:"lowpass",freq:1200,to:200,attack:.05})),kt(420,()=>{for(let t=0;t<3;t++)$e(4200+t*900,.08,.05,{at:Fe()+t*.09})})}function sA(){Pe(.3,.4,{type:"highpass",freq:3e3});for(let t=0;t<10;t++)$e(2e3+Math.random()*5e3,.04,.06,{type:"square",at:Fe()+Math.random()*.4});$e(300,.8,.15,{type:"sawtooth",to:40})}function Af(){Pe(.35,.3,{type:"bandpass",freq:400,to:2500,q:2,attack:.2})}function oA(){$e(80,.25,1,{to:40}),Pe(.2,.8,{type:"lowpass",freq:2500,to:300}),Pe(.35,.4,{type:"lowpass",freq:600,rate:.6,at:Fe()+.03}),pv()}function pv(){Pe(.08,.5,{type:"highpass",freq:3500});for(let t=0;t<8;t++)$e(3e3+Math.random()*4e3,.15+Math.random()*.3,.05,{at:Fe()+Math.random()*.3})}function aA(){Pe(.6,.8,{type:"highpass",freq:2e3,to:6e3});for(let t=0;t<24;t++)$e(2500+Math.random()*6e3,.1+Math.random()*.4,.07,{at:Fe()+Math.random()*.8});$e(70,.4,.8,{to:30})}function Rf(){Pe(.3,.3,{type:"bandpass",freq:800,q:2}),$e(200,.1,.1,{type:"square",to:120})}function Ul(){Pe(1.6,.8,{type:"lowpass",freq:300,to:2400,attack:.15}),Pe(2.2,.4,{type:"bandpass",freq:500,q:1,attack:.4,rate:.5});for(let t=0;t<30;t++)Pe(.02,.2,{type:"highpass",freq:3e3,at:Fe()+.5+Math.random()*2.5})}function pu(){$e(55,.4,.8,{to:30}),Pe(.3,.5,{type:"lowpass",freq:500})}function lA(){rA(),hv(),kt(250,aA),kt(600,()=>{Pe(.8,.6,{type:"lowpass",freq:800,to:100}),$e(40,3,.6,{to:25,attack:.02});for(let t=0;t<4;t++)fv(.5-t*.1,Fe()+.6+t*(1+t*.5))}),Mi&&xe&&(Mi.gain.gain.setTargetAtTime(.08,Fe()+.8,.3),Mi.gain.gain.setTargetAtTime(0,Fe()+6,1))}function cA(){if(!(!xe||!mi)){mi.gain.setTargetAtTime(.03,Fe(),2),Mi&&Mi.gain.gain.setTargetAtTime(0,Fe(),.5),[261.6,329.6,392,523.2].forEach((t,e)=>$e(t,5,.06,{attack:1.5+e*.3,type:"sine"}));for(let t=0;t<6;t++)kt(2e3+t*900+Math.random()*500,()=>$e(3200+Math.random()*800,.12,.05,{to:4200}))}}function gm(){if(!xe)return;const t=Fe();for(let e=0;e<6;e++)$e(440,.15,.08,{type:"square",at:t+e*.5})}function vm(){if(!xe)return;const t=Fe();for(let e=0;e<50;e++)Pe(.08,.015,{type:"highpass",freq:2e3+Math.random()*1e3,q:.3,at:t+e*.1})}function uA(){if(!xe)return;const t=Fe();$e(800,.8,.12,{type:"sawtooth",to:1200,at:t});const e=xe.createOscillator();e.frequency.value=12;const n=xe.createGain();n.gain.value=50,e.connect(n);const i=xe.createOscillator();i.frequency.setValueAtTime(1e3,t),n.connect(i.frequency),i.connect(Hr(.08,.02,.8,t)),i.start(t),i.stop(t+.82),e.start(t),e.stop(t+.82)}function dA(){if(!xe)return;const t=Fe();$e(120,2,.06,{type:"sawtooth",to:240,at:t}),Pe(2,.04,{type:"bandpass",freq:400,to:800,q:2,at:t})}class fA{constructor(){Li(this,"group");Li(this,"leftArm");Li(this,"rightArm");Li(this,"leftHand");Li(this,"rightHand");Li(this,"weapon",null);Li(this,"state","empty");this.group=new Si,this.group.position.set(0,-.4,-.5);const e=new it({color:9075306,roughness:.8}),n=new it({color:11049096,roughness:.7});this.leftArm=new Me(new zi(.04,.035,.35,8),e),this.leftArm.position.set(-.15,-.1,.1),this.leftArm.rotation.z=.3,this.group.add(this.leftArm),this.leftHand=new Me(new rt(.06,.08,.04),n),this.leftHand.position.set(-.22,-.25,.12),this.group.add(this.leftHand),this.rightArm=new Me(new zi(.04,.035,.35,8),e),this.rightArm.position.set(.15,-.1,.1),this.rightArm.rotation.z=-.3,this.group.add(this.rightArm),this.rightHand=new Me(new rt(.06,.08,.04),n),this.rightHand.position.set(.22,-.25,.12),this.group.add(this.rightHand)}getObject(){return this.group}setState(e){if(this.state!==e){switch(this.state=e,this.weapon&&(this.group.remove(this.weapon),this.weapon=null),this.leftArm.rotation.set(0,0,.3),this.rightArm.rotation.set(0,0,-.3),this.leftHand.position.set(-.22,-.25,.12),this.rightHand.position.set(.22,-.25,.12),e){case"axe":this.weapon=this.createAxe(),this.rightArm.rotation.set(-.5,0,-.2),this.rightHand.position.set(.12,-.3,.05);break;case"gun":this.weapon=this.createGun(),this.rightArm.rotation.set(-.8,0,-.15),this.leftArm.rotation.set(-.8,0,.15),this.rightHand.position.set(.08,-.25,-.05),this.leftHand.position.set(-.08,-.25,-.05);break;case"flamethrower":this.weapon=this.createFlamethrower(),this.rightArm.rotation.set(-.6,0,-.2),this.rightHand.position.set(.15,-.28,0);break}this.weapon&&this.group.add(this.weapon)}}update(e,n){if(!n||this.state!=="empty")return;const i=Math.sin(e*Math.PI*.8)*.15;this.leftArm.rotation.x=-.3+i,this.rightArm.rotation.x=-.3-i}createAxe(){const e=new Si,n=new Me(new zi(.025,.025,.6,8),new it({color:5917242,roughness:.9}));n.position.set(.1,-.3,0),n.rotation.set(.5,0,-.3),e.add(n);const i=new Me(new rt(.18,.12,.03),new it({color:8947848,roughness:.3,metalness:.8}));return i.position.set(.08,0,0),i.rotation.set(.5,0,-.3),e.add(i),e}createGun(){const e=new Si,n=new Me(new rt(.05,.15,.22),new it({color:2763306,roughness:.5,metalness:.6}));n.position.set(0,-.25,-.12),e.add(n);const i=new Me(new zi(.012,.012,.15,8),new it({color:2763306,roughness:.4,metalness:.7}));return i.position.set(0,-.2,-.28),i.rotation.x=Math.PI/2,e.add(i),e}createFlamethrower(){const e=new Si,n=new Me(new zi(.06,.06,.2,12),new it({color:13676624,roughness:.5,metalness:.4}));n.position.set(.12,-.28,.05),n.rotation.set(0,0,-.3),e.add(n);const i=new Me(new zi(.015,.02,.08,8),new it({color:4868682,roughness:.6,metalness:.6}));return i.position.set(.08,-.22,-.08),i.rotation.x=Math.PI/2,e.add(i),e}async animateAttack(e){return new Promise(n=>{e==="axe"?this.animateAxeSwing(n):e==="gun"?this.animateGunRecoil(n):e==="fire"&&this.animateFlameShot(n)})}animateAxeSwing(e){const n=Date.now(),i=400,r=this.rightArm.rotation.x,s=()=>{const a=(Date.now()-n)/i;if(a<.5)this.rightArm.rotation.x=r+a*4;else if(a<1)this.rightArm.rotation.x=r+(2-a*2)*2;else{this.rightArm.rotation.x=r,e();return}requestAnimationFrame(s)};s()}animateGunRecoil(e){const n=Date.now(),i=150,r=this.group.position.z,s=()=>{const a=(Date.now()-n)/i;if(a<.3)this.group.position.z=r+a*.15;else if(a<1)this.group.position.z=r+(1-a)*.045;else{this.group.position.z=r,e();return}requestAnimationFrame(s)};s()}animateFlameShot(e){const n=Date.now(),i=200,r=()=>{const o=(Date.now()-n)/i;if(o<1)this.rightArm.rotation.z=-.2+Math.sin(o*Math.PI*8)*.05;else{this.rightArm.rotation.z=-.2,e();return}requestAnimationFrame(r)};r()}}const hA={axe:"./assets/env/window_residue_axe.svg",gun:"./assets/env/window_residue_gun.svg",fire:"./assets/env/window_residue_fire.svg"},pA={minX:-4.5,maxX:4.5,minZ:-2.85,maxZ:2.75},mA=2.5,gA=.3;function vA({onInteract:t,equippedWeapon:e,windowMarks:n}){var x;const i=pe.useRef(null),r=pe.useRef(t);r.current=t;const[s,o]=pe.useState(!1),[a,l]=pe.useState(null),c=pe.useRef(null),d=pe.useRef(null),f=pe.useRef(null),h=pe.useRef(e);h.current=e,pe.useEffect(()=>{const _=i.current,p=new lv({antialias:!0});p.setSize(_.clientWidth,_.clientHeight),_.appendChild(p.domElement);const u=new xw;f.current=u;const v=new yn(70,_.clientWidth/_.clientHeight,.1,50);v.rotation.order="YXZ";let g={x:0,y:_d,z:.2,vy:0,yaw:0,pitch:0,crouching:!1};const y={forward:!1,back:!1,left:!1,right:!1,jump:!1,crouch:!1};let b=performance.now(),C=0;const A=new fA;v.add(A.getObject());function D(){const $=-Math.sin(g.yaw),N=-Math.cos(g.yaw);let U=null,k=1/0;for(const Z of hm){const Q=Z.position[0]-g.x,V=Z.position[2]-g.z,K=Math.hypot(Q,V);if(K>mA)continue;const se=$*Q+N*V;Math.acos(Math.max(-1,Math.min(1,se/K)))<gA&&K<k&&(U=Z.id,k=K)}return U}function E(){const $=D();$&&r.current($)}const M=$=>{document.pointerLockElement===p.domElement&&(g=Ow(g,$.movementX,$.movementY))},B=()=>{if(document.pointerLockElement!==p.domElement)p.domElement.requestPointerLock();else{const $=D();r.current($==="window"?"weapon_hit_window":"use_weapon")}},q=()=>{o(document.pointerLockElement===p.domElement)},J=$=>{switch($.code){case"KeyW":y.forward=!0;break;case"KeyS":y.back=!0;break;case"KeyA":y.left=!0;break;case"KeyD":y.right=!0;break;case"Space":y.jump=!0,$.preventDefault();break;case"ControlLeft":case"ControlRight":y.crouch=!0;break;case"KeyF":E();break}},P=$=>{switch($.code){case"KeyW":y.forward=!1;break;case"KeyS":y.back=!1;break;case"KeyA":y.left=!1;break;case"KeyD":y.right=!1;break;case"Space":y.jump=!1;break;case"ControlLeft":case"ControlRight":y.crouch=!1;break}};document.addEventListener("mousemove",M),document.addEventListener("keydown",J),document.addEventListener("keyup",P),document.addEventListener("pointerlockchange",q),p.domElement.addEventListener("mousedown",B);let F=0;const X=()=>{const $=performance.now(),N=Math.min(.05,($-b)/1e3);b=$;const U=g;g=Uw(g,y,N,pA);const k=g.crouching?uv:_d,Z=g.y<=k+.01;Z&&(C+=Math.hypot(g.x-U.x,g.z-U.z),C>(g.crouching?.9:1.5)&&(C=0,Gw(g.crouching))),U.vy<=0&&g.vy>0&&Vw(),U.vy<-2&&g.vy===0&&Ww(),!U.crouching&&g.crouching&&jw();const Q=Z?Math.sin(C*Math.PI*1.33)*.03:0;v.position.set(g.x,g.y+Q,g.z),v.rotation.y=g.yaw,v.rotation.x=g.pitch;const V=h.current==="axe"?"axe":h.current==="gun"?"gun":h.current==="fire"?"flamethrower":"empty";A.setState(V),A.update(C,Z),p.render(u,v);const K=D();K!==c.current&&(c.current=K,l(K)),F=requestAnimationFrame(X)};return Rw(u).then(()=>{F=requestAnimationFrame(X)}).catch(()=>{F=requestAnimationFrame(X)}),()=>{cancelAnimationFrame(F),document.removeEventListener("mousemove",M),document.removeEventListener("keydown",J),document.removeEventListener("keyup",P),document.removeEventListener("pointerlockchange",q),p.domElement.removeEventListener("mousedown",B),v.remove(A.getObject()),f.current=null,_.removeChild(p.domElement),p.dispose()}},[]),pe.useEffect(()=>{const _=f.current;if(!_||(d.current&&(_.remove(d.current),d.current=null),n.length===0))return;const p=new Si;n.forEach(u=>{const v=new cv().load(hA[u.tool]);v.colorSpace=At;const g=new Me(new gt(2.6,1.6),new Vn({map:v,transparent:!0,depthWrite:!1}));g.scale.set(u.scale,u.scale,1),g.position.set((u.x-50)/100*2.6,1.95+(u.y-50)/100*1.6,-2.94),g.rotation.z=u.rotation*Math.PI/180,p.add(g)}),_.add(p),d.current=p},[n]);const m=(x=hm.find(_=>_.id===a))==null?void 0:x.label;return w.jsxs("div",{style:{position:"absolute",inset:0},children:[w.jsx("div",{ref:i,style:{position:"absolute",inset:0}}),s&&w.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:6,height:6,margin:"-3px 0 0 -3px",borderRadius:"50%",background:"#e8e8e0",opacity:.75,pointerEvents:"none"}}),!s&&w.jsx("div",{style:{position:"absolute",top:"58%",left:"50%",transform:"translateX(-50%)",color:"#e8e8e0",background:"rgba(0,0,0,0.65)",padding:"8px 18px",borderRadius:6,pointerEvents:"none"},children:"CLICK SCREEN TO LOCK MOUSE"}),s&&a&&w.jsxs("div",{style:{position:"absolute",top:"54%",left:"50%",transform:"translateX(-50%)",color:"#ffe9a8",background:"rgba(0,0,0,0.65)",padding:"6px 16px",borderRadius:6,pointerEvents:"none"},children:["F TO INTERACT: ",m]})]})}function _A(t,e="human",n=!1,i=45){const[r,s]=pe.useState(0);return pe.useEffect(()=>{if(s(0),!t)return;let o=0,a=0;const l=()=>{o++,s(o);const c=t[o-1];o%2===1&&c&&!/[\s，。、！？…—「」,.!?]/.test(c)&&Qw(e,n),o<t.length&&(a=window.setTimeout(l,/[，。！？…,.!?]/.test(c)?i*5:i))};return a=window.setTimeout(l,i),()=>clearTimeout(a)},[t,e,n,i]),{shown:t.slice(0,r),done:r>=t.length}}function mv({text:t,voice:e,glitch:n,className:i}){const{shown:r,done:s}=_A(t,e,n);return w.jsx("p",{className:`${i??"line"}${s?"":" caret"}`,children:r})}function xA({visitor:t}){const e=t.role!=="human";return w.jsxs("div",{"data-testid":"window",className:"card",children:[w.jsx("h4",{children:"INTERCOM"}),w.jsxs("div",{className:"speaker",children:[w.jsx("span",{className:"led"}),t.claimedName]}),t.greeting?w.jsx(mv,{text:t.greeting,voice:t.voice,glitch:e}):w.jsx("p",{className:"line",children:"It watches you through the glass, waiting for you to speak."}),t.glitchLine&&w.jsxs("p",{"data-testid":"glitch",className:"line glitch",children:["「",t.glitchLine,"」"]})]})}function yA({visitor:t,frames:e,className:n}){const i=e??(t.freezeFrames.length?t.freezeFrames:[t.portrait]),[r,s]=pe.useState(0),o=t.role!=="human";return pe.useEffect(()=>{if(s(0),i.length<=1)return;let a=0,l=0;const c=()=>{let d;o?(l=Math.random()<.25?0:Math.floor(Math.random()*i.length),d=Math.random()<.12?1800+Math.random()*1600:110+Math.random()*520):(l=(l+1)%i.length,d=l===0?1600+Math.random()*2400:90+Math.random()*90),s(l),a=window.setTimeout(c,d)};return a=window.setTimeout(c,900),()=>clearTimeout(a)},[t,i.length,o]),w.jsx("div",{className:n??"portrait",children:i.map((a,l)=>w.jsx("img",{src:a,alt:l===r?t.claimedName:"",style:{display:l===r?"block":"none"},draggable:!1},a))})}const SA=[{id:"eye",label:"EYES",icon:"./assets/icons/eye.svg"},{id:"id",label:"ID",icon:"./assets/icons/id.svg"},{id:"question",label:"ASK",icon:"./assets/icons/question.svg"}];function EA({visitor:t,onInspect:e}){const[n,i]=pe.useState({}),[r,s]=pe.useState(0),o=t.tells.questions,a=t.role!=="human",l=c=>{eA(c),c==="question"&&n.question?r<o.length-1&&s(d=>d+1):i(d=>({...d,[c]:!0})),e(c)};return w.jsxs("div",{"data-testid":"inspect",className:"card",children:[w.jsx("h4",{children:"INSPECT"}),w.jsx("div",{className:"row",children:SA.map(c=>w.jsxs("button",{className:"btn",onClick:()=>l(c.id),disabled:c.id==="question"&&n.question&&r>=o.length-1,children:[w.jsx("img",{src:c.icon,alt:""}),w.jsx("span",{children:c.id==="question"&&n.question?"ASK AGAIN":c.label})]},c.id))}),n.eye&&w.jsxs("div",{className:"finding",children:[w.jsx("img",{src:"./assets/icons/eye.svg",alt:""}),w.jsx("span",{children:t.tells.eye})]}),n.id&&w.jsxs("div",{className:"finding",children:[w.jsx("img",{src:"./assets/icons/id.svg",alt:""}),w.jsx("span",{children:t.tells.id})]}),n.question&&o[r]&&w.jsxs("div",{className:"finding",children:[w.jsx("img",{src:"./assets/icons/question.svg",alt:""}),w.jsxs("div",{children:[w.jsxs("div",{className:"q",children:["You: ",o[r].q]}),w.jsx(mv,{text:o[r].a,voice:t.voice,glitch:a},r)]})]})]})}const MA=[{v:"admit",label:"ADMIT",icon:"./assets/icons/admit.svg",hint:"OPEN GATE"},{v:"execute",label:"EXECUTE",icon:"./assets/icons/execute.svg",hint:"PICK WEAPON"},{v:"contain",label:"CONTAIN",icon:"./assets/icons/contain.svg",hint:"SEAL POD"}],TA=[{t:"axe",name:"Fire Axe"},{t:"gun",name:"Handgun"},{t:"fire",name:"Incinerator"}];function wA({disabled:t,onJudge:e}){const[n,i]=pe.useState(!1);return n?w.jsxs("div",{"data-testid":"tool-select",className:"card",children:[w.jsx("h4",{children:"ARMORY · SELECT EXECUTION TOOL"}),w.jsxs("div",{className:"row",children:[TA.map(({t:r,name:s})=>w.jsxs("button",{className:"btn danger",onClick:()=>{hu(),e("execute",r)},children:[w.jsx("img",{src:`./assets/icons/${r}.svg`,alt:""}),w.jsx("span",{children:s}),w.jsx("small",{children:r})]},r)),w.jsx("button",{className:"btn",onClick:()=>{hu(),i(!1)},children:"CANCEL"})]})]}):w.jsxs("div",{"data-testid":"verdict",className:"card",children:[w.jsx("h4",{children:"VERDICT"}),w.jsx("div",{className:"row",children:MA.map(({v:r,label:s,icon:o,hint:a})=>w.jsxs("button",{className:`btn${r==="execute"?" danger":""}`,disabled:t,onClick:()=>{hu(),r==="execute"?i(!0):e(r)},children:[w.jsx("img",{src:o,alt:""}),w.jsx("span",{children:s}),w.jsx("small",{children:a})]},r))})]})}const AA=[900,1500,2150,3e3],RA=4400,CA={axe:["none","translateX(-2%)","translateX(-6%) rotate(-7deg) scale(1.03)","translate(-10%, 32%) rotate(-24deg)"],gun:["none","translateY(-1%)","translate(3%, -2%) rotate(6deg) scale(0.98)","translate(6%, 36%) rotate(18deg)"],fire:["none","scale(1.01)","translateY(4%) scale(0.97)","translateY(40%) scale(0.9)"]},bA={axe:["brightness(0.8)","brightness(0.8)","brightness(1.3) contrast(1.3)","brightness(0.45) saturate(0.6)"],gun:["brightness(0.8)","brightness(1.6) sepia(0.4)","brightness(1.2) contrast(1.4)","brightness(0.45)"],fire:["brightness(0.8)","brightness(1.2) sepia(0.6)","brightness(1.4) sepia(1) saturate(3) hue-rotate(-20deg)","brightness(0.15) sepia(1)"]};function LA(t,e,n){t==="axe"&&[()=>Il(),()=>Af(),()=>oA(),()=>n&&pu()][e](),t==="gun"&&[()=>iA(),()=>wf(),()=>n?sA():pv(),()=>n&&pu()][e](),t==="fire"&&[()=>Rf(),()=>Ul(),()=>hv(),()=>n&&pu()][e]()}function PA({result:t,onDone:e,tool:n,visitor:i}){var c,d;const[r,s]=pe.useState(-1),o=n??((d=(c=t.frames[0])==null?void 0:c.match(/exec_(axe|gun|fire)/))==null?void 0:d[1])??"axe";pe.useEffect(()=>{s(-1);const f=AA.map((h,m)=>setTimeout(()=>{s(m),LA(o,m,t.success)},h));return f.push(setTimeout(e,RA)),()=>f.forEach(clearTimeout)},[t,e,o]);const a=r<0?"none":!t.success&&r===3?"translateX(60%) scale(0.9)":CA[o][r],l=(i==null?void 0:i.attackFrame)??(i==null?void 0:i.portrait);return w.jsxs("div",{"data-testid":"exec-overlay",className:"exec",children:[r===-1&&w.jsx("div",{"data-testid":"blackout",style:{position:"absolute",inset:0,background:"#000"}}),r>=0&&w.jsxs("div",{className:`stage${r===2?" shaking":""}`,children:[w.jsx("img",{className:"fx",src:(i==null?void 0:i.scene)??"./assets/scenes/window.svg",alt:"",style:{filter:"brightness(0.55)"}}),l&&w.jsx("div",{className:"portrait",style:{transform:`translateX(-50%) ${a}`,filter:bA[o][r],opacity:!t.success&&r===3?0:1},children:w.jsx("img",{src:l,alt:"",draggable:!1})}),w.jsx("img",{className:"fx",src:"./assets/scenes/window_glass.svg",alt:""}),r===3&&t.success&&w.jsx("img",{className:"fx",src:t.residue,alt:"Residue"}),w.jsx("img",{className:"fx",src:t.frames[r],alt:`Frame ${r}`}),w.jsx("div",{className:`flash${r===1||r===2?" on":""}`},r)]})]})}function NA({visitor:t,onSuccess:e,onFail:n}){const[i,r]=pe.useState(0),[s,o]=pe.useState(3e3),a=7;pe.useEffect(()=>{const c=Date.now(),d=setInterval(()=>{const h=Date.now()-c;o(3e3-h),h>=3e3&&(clearInterval(d),n())},50),f=h=>{h.code==="KeyF"&&(Af(),r(m=>{const x=m+1;return x>=a&&(clearInterval(d),setTimeout(()=>e(),200)),x}))};return document.addEventListener("keydown",f),()=>{clearInterval(d),document.removeEventListener("keydown",f)}},[e,n]);const l=i/a*100;return w.jsx("div",{className:"overlay",style:{background:"rgba(0,0,0,0.85)"},children:w.jsxs("div",{className:"pane",style:{maxWidth:800,textAlign:"center"},children:[w.jsx("img",{src:t.attackFrame??t.portrait,alt:"",style:{width:300,height:400,objectFit:"cover",borderRadius:8,marginBottom:24}}),w.jsx("h2",{style:{fontSize:28,marginBottom:16,color:"#d04030"},children:"SPAM F!"}),w.jsxs("div",{style:{position:"relative",width:"100%",height:40,background:"#2a2a24",borderRadius:8,marginBottom:16,overflow:"hidden"},children:[w.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:`${l}%`,background:"linear-gradient(90deg, #c04030, #d05040)",transition:"width 0.1s"}}),w.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,fontWeight:"bold"},children:[i," / ",a]})]}),w.jsxs("div",{style:{fontSize:16,color:s<1e3?"#d04030":"#e0b050"},children:["TIME LEFT: ",(s/1e3).toFixed(1),"s"]})]})})}function DA({visitor:t,gunAmmo:e,onSuccess:n,onFail:i,onOutOfAmmo:r}){const[s,o]=pe.useState(1e4),a=pe.useRef(null),l=pe.useRef(null);return pe.useEffect(()=>{t.role==="skinfit"?a.current={x:71,y:51}:t.role==="coretick"?a.current={x:50,y:42}:a.current={x:50,y:30}},[t.role]),pe.useEffect(()=>{const c=Date.now(),d=setInterval(()=>{const h=1e4-(Date.now()-c);o(h),h<=0&&i()},100),f=h=>{if(e<=0){Hn(),r();return}wf();const m=l.current.getBoundingClientRect(),x=(h.clientX-m.left)/m.width*100,_=(h.clientY-m.top)/m.height*100;if(a.current){const p=x-a.current.x,u=_-a.current.y;Math.sqrt(p*p+u*u)<8&&(clearInterval(d),setTimeout(()=>n(),300))}};return document.addEventListener("click",f),()=>{clearInterval(d),document.removeEventListener("click",f)}},[e,n,i,r]),w.jsx("div",{className:"overlay",style:{background:"rgba(0,0,0,0.9)",cursor:"crosshair"},children:w.jsxs("div",{ref:l,style:{position:"relative",width:600,height:800,margin:"0 auto"},children:[w.jsx("img",{src:t.attackFrame??t.portrait,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:8}}),a.current&&w.jsx("div",{style:{position:"absolute",left:`${a.current.x}%`,top:`${a.current.y}%`,width:60,height:60,border:"2px dashed rgba(255,68,68,0.5)",borderRadius:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none"}}),w.jsxs("div",{style:{position:"absolute",top:16,left:16,color:"#e8e2cc",fontSize:14},children:[w.jsxs("div",{style:{marginBottom:8},children:["TIME: ",(s/1e3).toFixed(1),"s"]}),w.jsxs("div",{style:{color:e===0?"#d04030":"#e0b050"},children:["AMMO: ",e]})]}),w.jsx("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.7)",padding:"8px 16px",borderRadius:6,color:"#e8e2cc",fontSize:13},children:"AIM AT THE WEAK SPOT AND CLICK TO FIRE"})]})})}function IA({visitor:t,onSuccess:e,onFail:n,onOverheat:i}){const[r,s]=pe.useState(!1),[o,a]=pe.useState(0),[l,c]=pe.useState(1e4),d=pe.useRef(0),f=pe.useRef(!1);pe.useEffect(()=>{const m=Date.now();let x,_=null;const p=setInterval(()=>{const y=Date.now()-m;c(1e4-y),y>=1e4&&n()},50),u=()=>{if(r&&!f.current&&(d.current=d.current+1.5,a(d.current),d.current>100)){f.current=!0,i();return}x=requestAnimationFrame(u)};x=requestAnimationFrame(u);const v=y=>{y.code==="KeyF"&&!r&&!f.current&&(s(!0),_=setTimeout(()=>dA(),100))},g=y=>{y.code==="KeyF"&&r&&(s(!1),_&&clearTimeout(_),d.current>=80&&d.current<=100?(cancelAnimationFrame(x),clearInterval(p),setTimeout(()=>{Ul(),e()},200)):d.current<80&&(Rf(),n()))};return document.addEventListener("keydown",v),document.addEventListener("keyup",g),()=>{cancelAnimationFrame(x),clearInterval(p),_&&clearTimeout(_),document.removeEventListener("keydown",v),document.removeEventListener("keyup",g)}},[r,e,n,i]);const h=o>=80&&o<=100?"#50d050":o>100?"#d04030":"#d0b050";return w.jsx("div",{className:"overlay",style:{background:"rgba(0,0,0,0.85)"},children:w.jsxs("div",{className:"pane",style:{maxWidth:800,textAlign:"center"},children:[w.jsx("img",{src:t.attackFrame??t.portrait,alt:"",style:{width:300,height:400,objectFit:"cover",borderRadius:8,marginBottom:24}}),w.jsx("h2",{style:{fontSize:28,marginBottom:16,color:"#d0b050"},children:"HOLD F TO CHARGE"}),w.jsxs("div",{style:{position:"relative",width:"100%",height:50,background:"#2a2a24",borderRadius:8,marginBottom:16,overflow:"hidden",border:"2px solid #3a3a32"},children:[w.jsx("div",{style:{position:"absolute",left:"80%",top:0,bottom:0,width:"20%",background:"rgba(80, 208, 80, 0.2)",borderLeft:"2px dashed #50d050"}}),w.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:`${Math.min(o,100)}%`,background:`linear-gradient(90deg, ${h}, ${h})`,transition:"background 0.2s"}}),w.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,fontWeight:"bold"},children:[o.toFixed(0),"%"]})]}),w.jsx("div",{style:{fontSize:15,color:"#9a9a90",marginBottom:12},children:"CHARGE TO 80-100%, THEN RELEASE"}),w.jsxs("div",{style:{fontSize:16,color:l<3e3?"#d04030":"#e0b050"},children:["TIME LEFT: ",(l/1e3).toFixed(1),"s"]}),o>100&&w.jsx("div",{style:{marginTop:16,color:"#d04030",fontSize:18,fontWeight:"bold"},children:"⚠ OVERHEAT! THE CANISTER IS ABOUT TO BURST"})]})})}function UA({state:t}){const[e,n]=pe.useState(Hw()),i=t.san>=70?"NORMAL":t.san>=40?"RINGING":t.san>=15?"SWAP":"INVERT",r=t.san>=70?"#5aa05a":t.san>=40?"#c9b060":"#b83a2a";return w.jsxs(w.Fragment,{children:[w.jsxs("div",{"data-testid":"hud",className:"hud",children:[w.jsx("img",{src:"./assets/icons/san.svg",alt:""}),w.jsxs("div",{children:[w.jsxs("div",{style:{fontSize:13},children:["San: ",t.san," (",i,")"]}),w.jsx("div",{className:"bar",children:w.jsx("div",{style:{width:`${t.san}%`,background:r}})})]})]}),w.jsxs("div",{className:"hud-right",children:[w.jsxs("span",{children:["VISITORS ",Math.min(t.visitorIndex+1,4)," / 4"]}),w.jsx("button",{className:"btn",style:{padding:"4px 8px"},onClick:()=>n(Tf()),title:"M MUTE",children:w.jsx("img",{src:e?"./assets/icons/mute.svg":"./assets/icons/sound.svg",alt:e?"Muted":"Sound"})})]}),w.jsx("div",{className:"san-fx",style:{boxShadow:t.san<70?`inset 0 0 ${200-t.san*2}px rgba(${t.san<40?"90,0,0":"0,0,0"},${(.9-t.san/100).toFixed(2)})`:"none"}})]})}function OA({state:t}){const{equippedWeapon:e,gunAmmo:n}=t;return e?w.jsxs("div",{style:{position:"absolute",bottom:80,right:24,background:"rgba(0,0,0,0.75)",padding:"12px 16px",borderRadius:6,color:"#e8e2cc",minWidth:140},children:[w.jsx("div",{style:{fontSize:11,color:"#9a9a90",marginBottom:4,textTransform:"uppercase",letterSpacing:1},children:"EQUIPPED"}),w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[w.jsx("img",{src:`./assets/icons/${e}.svg`,alt:"",style:{width:36,height:36}}),w.jsxs("div",{children:[w.jsxs("div",{style:{fontWeight:"bold",fontSize:15},children:[e==="axe"&&"FIRE AXE",e==="gun"&&"HANDGUN",e==="fire"&&"INCINERATOR"]}),e==="gun"&&w.jsxs("div",{style:{fontSize:13,color:n===0?"#d04030":"#e0b050",marginTop:2},children:["AMMO: ",n,"/12"]})]})]}),w.jsx("div",{style:{fontSize:11,color:"#8a8a80",marginTop:8,borderTop:"1px solid #3a3a32",paddingTop:6},children:"F TO USE"})]}):null}function FA(){const t=pe.useRef(null);return pe.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;e.width=window.innerWidth,e.height=window.innerHeight;const i=[];for(let o=0;o<200;o++)i.push({x:Math.random()*e.width,y:Math.random()*e.height-e.height,speed:3+Math.random()*2,opacity:.3+Math.random()*.4});let r;const s=()=>{n.clearRect(0,0,e.width,e.height);for(const o of i)o.y+=o.speed,o.y>e.height&&(o.y=-10,o.x=Math.random()*e.width),n.fillStyle=`rgba(200, 220, 240, ${o.opacity})`,n.fillRect(o.x,o.y,2,8);r=requestAnimationFrame(s)};return s(),()=>cancelAnimationFrame(r)},[]),w.jsx("canvas",{ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:9999}})}function kA({active:t}){const e=pe.useRef(null),n=pe.useRef([]),i=pe.useRef();return pe.useEffect(()=>{if(!t){n.current=[],i.current&&cancelAnimationFrame(i.current);return}const r=e.current;if(!r)return;const s=r.getContext("2d");if(!s)return;r.width=window.innerWidth,r.height=window.innerHeight;const o=r.width/2,a=r.height/2,l=()=>{if(t){s.clearRect(0,0,r.width,r.height);for(let c=0;c<8;c++)n.current.push({x:o+(Math.random()-.5)*60,y:a+(Math.random()-.5)*60,vx:(Math.random()-.5)*4,vy:-8-Math.random()*6,life:1,maxLife:30+Math.random()*20,size:20+Math.random()*30});n.current=n.current.filter(c=>{c.x+=c.vx,c.y+=c.vy,c.vy+=.2,c.life++,c.size*=.96;const d=1-c.life/c.maxLife;if(d<=0)return!1;const f=c.life/c.maxLife;let h,m,x;f<.3?(h=255,m=240-f*200,x=100-f*300):f<.6?(h=255,m=140-(f-.3)*300,x=10):(h=255-(f-.6)*400,m=50-(f-.6)*100,x=10);const _=s.createRadialGradient(c.x,c.y,0,c.x,c.y,c.size);return _.addColorStop(0,`rgba(${h}, ${m}, ${x}, ${d})`),_.addColorStop(.5,`rgba(${h*.8}, ${m*.7}, ${x}, ${d*.6})`),_.addColorStop(1,`rgba(${h*.5}, ${m*.4}, ${x}, 0)`),s.fillStyle=_,s.fillRect(c.x-c.size,c.y-c.size,c.size*2,c.size*2),!0}),i.current=requestAnimationFrame(l)}};return l(),()=>{i.current&&cancelAnimationFrame(i.current)}},[t]),t?w.jsx("canvas",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:9998}}):null}function zA({item:t,onClose:e}){const[n,i]=pe.useState(0),r=()=>{n<t.pages.length-1&&i(n+1)},s=()=>{n>0&&i(n-1)};return w.jsx("div",{className:"overlay",style:{background:"rgba(0,0,0,0.85)"},children:w.jsxs("div",{style:{position:"relative",width:700,maxWidth:"90%",maxHeight:"80vh",margin:"5vh auto",background:"#2a2520",border:"2px solid #5a4a3a",borderRadius:8,padding:40,color:"#e8e2cc",fontFamily:"serif",boxShadow:"0 8px 32px rgba(0,0,0,0.5)",overflow:"auto"},children:[w.jsx("h2",{style:{margin:"0 0 24px 0",fontSize:24,color:"#e8e2cc",borderBottom:"1px solid #5a4a3a",paddingBottom:12},children:t.title}),w.jsx("div",{style:{fontSize:16,lineHeight:1.8,whiteSpace:"pre-wrap",minHeight:300,marginBottom:24},children:t.pages[n]}),w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid #5a4a3a",paddingTop:16},children:[w.jsx("button",{className:"btn",onClick:s,disabled:n===0,style:{opacity:n===0?.3:1},children:"‹ PREV"}),w.jsxs("span",{style:{color:"#a89888",fontSize:14},children:[n+1," / ",t.pages.length]}),w.jsx("button",{className:"btn",onClick:r,disabled:n===t.pages.length-1,style:{opacity:n===t.pages.length-1?.3:1},children:"NEXT ›"})]}),w.jsx("button",{className:"btn",onClick:e,style:{position:"absolute",top:16,right:16,minWidth:80},children:"CLOSE"})]})})}function BA(t){const e=t.records.filter(s=>!s.correct).length,n=t.records.some(s=>s.verdict==="admit"&&s.role!=="human"),i=t.records.some(s=>s.verdict==="execute"&&s.role==="human"),r=n||t.autoReleased!==null&&t.autoReleased.role!=="human";return t.sanTouchedBelow15&&i?"unclean":r?"contaminated":e<=1?"passed":"contaminated"}const HA=[{id:"passed",condition:"≤1 misjudgment, no impostor escaped",lines:["Most of tonight's stamps landed right.","Dawn breaks."]},{id:"contaminated",condition:"an impostor entered, or one flipped",lines:["Something has already gone inside.","Dawn breaks, but the facility is no longer clean."]},{id:"unclean",condition:"San<15 at some point and ≥1 wrongful kill",lines:["In the mirror, you blink.","The other eye lags one frame behind."]}],GA={admit:"ADMIT",execute:"EXECUTE",contain:"CONTAIN"};function VA(t){return[{lines:["You push the door open.","The night shift is over."],dur:3800},{img:"./assets/env/corridor_silhouette.svg",lines:["The corridor is dark, but you know the way.","Behind you, the door closes by itself the moment you step out."],dur:5200},{img:"./assets/ui/dawn.svg",lines:["Dawn breaks.",...t],dur:4800},{teaser:!0,img:"./assets/ui/teaser.svg",title:"NORTHRIDGE GATE Ⅱ · BEYOND THE CHECKPOINT",lines:["Northridge Gate was never just one gate.","You held only one of seven.","The next shift will call your name soon."],dur:6500}]}function WA({state:t}){const e=BA({records:t.records,sanTouchedBelow15:t.sanTouchedBelow15,autoReleased:t.autoReleased}),n=HA.find(l=>l.id===e),i=l=>{var c;return((c=Rl.find(d=>d.id===l))==null?void 0:c.claimedName)??l},[r]=pe.useState(()=>VA(n.lines)),[s,o]=pe.useState(0),a=s>=r.length;return pe.useEffect(()=>{cA()},[]),pe.useEffect(()=>{if(a)return;const l=setTimeout(()=>o(c=>Math.min(c+1,r.length)),r[s].dur);return()=>clearTimeout(l)},[s,a,r]),w.jsx("div",{"data-testid":"dawn",className:"dawn",onClick:()=>o(l=>Math.min(l+1,r.length)),children:a?w.jsxs("div",{className:"dawn-card",children:[w.jsx("h1",{children:"DAWN"}),w.jsx("table",{children:w.jsxs("tbody",{children:[t.records.map((l,c)=>w.jsxs("tr",{children:[w.jsx("td",{children:i(l.visitorId)}),w.jsxs("td",{children:[GA[l.verdict],l.tool?` · ${l.tool}`:""]}),w.jsxs("td",{className:l.correct?"ok":"bad",children:[l.correct?"CORRECT":"WRONG",l.escaped?" · ESCAPED":""]}),w.jsx("td",{style:{color:"#8a8a80"},children:l.role==="human"?l.state==="infected"?"INFECTED":"HUMAN":"IMPOSTOR"})]},c)),t.autoReleased&&w.jsxs("tr",{children:[w.jsx("td",{children:t.autoReleased.claimedName}),w.jsx("td",{children:"SOFA AUTO-RELEASE"}),w.jsx("td",{className:t.autoReleased.role==="human"?"ok":"bad",children:t.autoReleased.role==="human"?"HUMAN":"IMPOSTOR"}),w.jsx("td",{})]})]})}),w.jsx("h2",{children:e==="passed"?"SHIFT PASSED":e==="contaminated"?"FACILITY CONTAMINATED":"YOU ARE NOT CLEAN"}),n.lines.map(l=>w.jsx("p",{children:l},l)),w.jsx("div",{style:{marginTop:20},children:w.jsx("button",{className:"btn",onClick:()=>location.reload(),children:"TAKE ANOTHER SHIFT"})})]}):w.jsxs("div",{className:"dawn-beat",style:r[s].img?{backgroundImage:`url(${r[s].img})`}:void 0,children:[r[s].teaser?w.jsxs("div",{className:"dawn-teaser",children:[w.jsx("p",{className:"dawn-teaser-tag",children:"COMING NEXT"}),w.jsx("h1",{children:r[s].title}),r[s].lines.map(l=>w.jsx("p",{children:l},l))]}):w.jsx("div",{className:"dawn-lines",children:r[s].lines.map(l=>w.jsx("p",{children:l},l))}),w.jsx("div",{className:"dawn-hint",children:"CLICK TO CONTINUE ▸"})]},s)})}function jA({visitor:t}){return pe.useEffect(()=>{lA()},[]),w.jsxs("div",{"data-testid":"death",className:"death",children:[t&&w.jsx("div",{className:"portrait",children:w.jsx("img",{src:t.attackFrame??t.portrait,alt:"",draggable:!1})}),w.jsx("img",{className:"fx",src:"./assets/env/glass_shatter.svg",alt:""}),w.jsx("img",{className:"fx",src:"./assets/env/blood_vignette.svg",alt:""}),w.jsx("div",{className:"black"}),w.jsxs("div",{className:"msg",children:[w.jsx("h1",{children:"YOU DIED"}),w.jsx("p",{children:"When it came through the glass, you never got to pull the trigger."}),w.jsx("button",{className:"btn big",onClick:()=>location.reload(),children:"RESTART"})]})]})}const XA=(t,e)=>e?"All visitors processed. The door is unlocked — go open it and leave.":t===0?"Walk to the observation window (straight ahead) and press F to inspect the visitor":"Someone is knocking on the window. Return to the observation window to process the next visitor";function qA(){var $,N,U,k,Z,Q,V,K,se,de,me;const[t,e]=pe.useReducer(ny,L0),[n,i]=pe.useState(null),[r,s]=pe.useState(null),[o,a]=pe.useState(null),[l,c]=pe.useState(!1),[d,f]=pe.useState(null),[h,m]=pe.useState(!1),[x,_]=pe.useState(null),p=pe.useRef(0),u=ld(t),v=pe.useCallback((z,Se=4200)=>{f(z),clearTimeout(p.current),p.current=window.setTimeout(()=>f(null),Se)},[]);pe.useEffect(()=>{const z=Se=>{if(Se.code==="KeyM"){const ye=Tf();v(ye?"MUTED":"UNMUTED",1500)}};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[v]),pe.useEffect(()=>{var z;n!==null&&((z=document.exitPointerLock)==null||z.call(document))},[n]),pe.useEffect(()=>{Bw(t.san)},[t.san]),pe.useEffect(()=>{if(t.phase!=="visitor"||!u)return;const z=setTimeout(()=>Kw(),t.visitorIndex===0?2500:1200);return()=>clearTimeout(z)},[t.phase,t.visitorIndex,u]);const g=n==="window"&&t.visitorIndex===2&&!t.hallucinationTriggered;pe.useEffect(()=>{if(g){const z=setTimeout(()=>Jw(),2e3);return()=>clearTimeout(z)}},[g]);const y=z=>{if(!(r||o||x||l!==!1)){if(z==="use_weapon"){C();return}if(z==="weapon_hit_window"){t.equippedWeapon&&e({type:"MARK_WINDOW",mark:b(t.equippedWeapon,t.windowMarks.length)}),C();return}if(z==="door"){t.doorUnlocked?Hn():(Xw(),v("The door is locked. You must finish all inspections to leave.")),i("door");return}if(z==="book"){Va(),_(ly);return}if(z==="note"){Va(),_(cy);return}if(z==="poster1"){Hn(),_(Nc[0]);return}if(z==="poster2"){Hn(),_(Nc[1]);return}if(z==="poster3"){Hn(),_(Nc[2]);return}if(z==="banner"){Hn(),_(uy);return}Hn(),z==="window"&&xd(!0),z==="manual"&&Va(),z==="weapons"&&Il(),z==="supplies"&&Hn(),i(z)}},b=(z,Se)=>({tool:z,x:25+Se*37%45+Math.random()*6,y:25+Se*23%45+Math.random()*6,rotation:(Math.random()-.5)*40,scale:.42+Math.random()*.16}),C=()=>{if(!t.equippedWeapon){v("NO WEAPON EQUIPPED");return}if(t.equippedWeapon==="axe")Af(),v("You swing the axe at empty air.");else if(t.equippedWeapon==="gun"){if(t.gunAmmo<=0){Hn(),v("The magazine is empty.");return}wf(),e({type:"USE_WEAPON"}),v("The gunshot echoes through the room."),Math.random()<.05&&!t.sprinklerTriggered&&setTimeout(()=>{e({type:"TRIGGER_SPRINKLER"}),gm(),setTimeout(()=>vm(),500),v("THE SMOKE ALARM IS TRIGGERED! The ceiling starts spraying water.",5e3)},800)}else t.equippedWeapon==="fire"&&(m(!0),Rf(),setTimeout(()=>{Ul(),m(!1)},1500),v("Flame bursts from the canister."),Math.random()<.3&&setTimeout(()=>{v("The flame backfires — you are burned!",4e3)},1e3),Math.random()<.5&&!t.sprinklerTriggered&&setTimeout(()=>{e({type:"TRIGGER_SPRINKLER"}),gm(),setTimeout(()=>vm(),500),v("THE SMOKE ALARM IS TRIGGERED! The ceiling starts spraying water.",5e3)},1500))},A=()=>{n==="window"&&xd(!1),n==="manual"&&Va(),i(null)},D=(z,Se)=>{if(!u)return;if(z==="execute"&&Se){s({tool:Se,visitor:u});return}z==="admit"&&tA(),z==="contain"&&nA();const ye=u.outcomes[z];ye&&v(ye.text),e({type:"JUDGE",verdict:z,tool:Se}),i(null)},E=()=>{if(!r)return;const z=ry(r.visitor,r.tool);a({result:z,tool:r.tool,visitor:r.visitor}),e({type:"JUDGE",verdict:"execute",tool:r.tool}),e({type:"MARK_WINDOW",mark:b(r.tool,t.windowMarks.length)}),r.tool==="gun"&&e({type:"USE_WEAPON"}),s(null),i(null)},M=()=>{r&&(uA(),v(`IT'S STILL ALIVE! ${r.visitor.role!=="human"?"It escaped into the night.":"He fled in terror."}`,5e3),e({type:"JUDGE",verdict:"execute",tool:r.tool}),s(null),i(null))},B=()=>{c((r==null?void 0:r.visitor)??null),s(null)},q=()=>{Ul(),e({type:"JUDGE",verdict:"execute",tool:"fire"}),v("THE CANISTER OVERHEATS AND EXPLODES! You are burned.",4e3),s(null)},J=()=>{v("OUT OF AMMO!",3e3),B()},P=pe.useRef(o);P.current=o;const F=pe.useCallback(()=>{var Se;const z=P.current;if(z){const ye=z.result.success?(Se=z.visitor.outcomes.execute)==null?void 0:Se.text:"No — it survived. Only a smear is left on the glass. It fled into the night.";ye&&v(ye,5200)}a(null)},[v]);if(t.phase==="opening")return w.jsx("div",{className:"title",children:w.jsxs("div",{className:"title-card",children:[w.jsxs("p",{children:["Night 19 after the Replacement Event. You are the night guard at Checkpoint 3, Northridge Outpost. Through the observation window, judge every visitor — ",w.jsx("b",{style:{color:"#e8e2cc"},children:"HUMAN"}),", ",w.jsx("b",{style:{color:"#e8e2cc"},children:"IMPOSTOR"}),", or ",w.jsx("b",{style:{color:"#e8e2cc"},children:"INFECTED"})," — then ADMIT, EXECUTE, or CONTAIN. Right or wrong, you will only know at dawn."]}),w.jsxs("div",{className:"keys",children:[w.jsx("kbd",{children:"W A S D"}),w.jsx("span",{children:"MOVE"}),w.jsx("kbd",{children:"MOUSE"}),w.jsx("span",{children:"LOOK (CLICK SCREEN TO LOCK MOUSE)"}),w.jsx("kbd",{children:"SPACE / CTRL"}),w.jsx("span",{children:"JUMP / CROUCH"}),w.jsx("kbd",{children:"F"}),w.jsx("span",{children:"INTERACT WITH TARGETED OBJECT"}),w.jsx("kbd",{children:"LMB"}),w.jsx("span",{children:"USE WEAPON (AIM AT THE WINDOW TO LEAVE MARKS)"}),w.jsx("kbd",{children:"M"}),w.jsx("span",{children:"MUTE"})]}),w.jsx("p",{style:{fontSize:13},children:"The observation window is straight ahead. Manual shelf on the left, armory on the right, sofa and door behind you. Headphones recommended."}),w.jsx("button",{"data-testid":"start",className:"btn big",onClick:()=>{Fw(),e({type:"START"})},children:"BEGIN SHIFT"})]})});if(t.phase==="dawn")return w.jsx(WA,{state:t});const X=($=Fn.find(z=>z.surface==="label"))==null?void 0:$.text;return w.jsxs("div",{style:{position:"relative",height:"100%"},children:[w.jsx(vA,{onInteract:y,equippedWeapon:t.equippedWeapon,windowMarks:t.windowMarks}),w.jsx(UA,{state:t}),w.jsx(OA,{state:t}),h&&w.jsx(kA,{active:h}),t.sprinklerTriggered&&w.jsx(FA,{}),n===null&&!o&&w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"hint",style:{top:56},children:["→ ",XA(t.records.length,t.doorUnlocked)]}),w.jsx("div",{className:"hint",style:{bottom:28,color:"#c8c8c0"},children:"AIM AT AN OBJECT, PRESS F TO INTERACT"})]}),d&&w.jsx("div",{className:"toast",children:d}),n==="window"&&u&&w.jsxs("div",{className:"window-view",children:[w.jsxs("div",{className:"pane",children:[w.jsx("img",{src:u.scene??"./assets/scenes/window.svg",alt:""}),g&&w.jsx("img",{className:"shoes",src:"./assets/env/shoes_hallucination.svg",alt:""}),w.jsx(yA,{visitor:u}),w.jsx("img",{src:"./assets/scenes/window_glass.svg",alt:""}),w.jsx("div",{className:"rim"}),g&&w.jsx("p",{"data-testid":"hallucination",style:{position:"absolute",bottom:14,left:14,color:"#e0a0a0",background:"rgba(0,0,0,0.6)",padding:"4px 10px",borderRadius:3},children:"In the corridor, there is an extra pair of shoes."}),w.jsx("p",{style:{position:"absolute",bottom:14,right:14,color:"#8a8a80",background:"rgba(0,0,0,0.6)",padding:"4px 10px",borderRadius:3,fontSize:12},children:(N=Fn.find(z=>z.surface==="windowmark"))==null?void 0:N.text})]}),w.jsxs("div",{className:"side",children:[w.jsx(xA,{visitor:u}),w.jsx(EA,{visitor:u,onInspect:z=>e({type:"INSPECT",slot:z})},u.id),w.jsx(wA,{disabled:!1,onJudge:D},`v-${u.id}`),w.jsx("button",{className:"btn",onClick:A,style:{alignSelf:"flex-start"},children:"LEAVE WINDOW"})]})]}),n==="manual"&&w.jsx("div",{className:"overlay",children:w.jsxs("div",{className:"manual",children:[w.jsxs("div",{className:"panel-head",children:[w.jsxs("h2",{children:[w.jsx("img",{src:"./assets/icons/manual.svg",alt:"",style:{filter:"invert(0.85)"}}),"IDENTIFICATION MANUAL v0.4"]}),w.jsx("button",{className:"btn",onClick:A,children:"CLOSE"})]}),w.jsxs("div",{className:"pages",children:[ay.map(z=>w.jsxs("div",{className:`entry ${z.locked?"locked":""}`,children:[w.jsx("img",{src:`./assets/manual/${z.key}.svg`,alt:"",style:z.locked?{filter:"brightness(0.3) blur(2px)"}:{}}),w.jsxs("div",{children:[w.jsxs("b",{children:[z.name," ",z.locked&&w.jsx("span",{style:{color:"#8a6a4a",fontSize:13},children:"🔒 LOCKED"})]}),w.jsx("p",{style:z.locked?{color:"#6a6a60"}:{},children:z.tells}),w.jsxs("p",{className:"resp",style:z.locked?{color:"#6a6a60"}:{},children:["RESPONSE: ",z.response]})]})]},z.key)),w.jsxs("p",{className:"note",children:["Rules: inspect before you judge. ID checks are free; examining eyes and asking questions cost reaction time.",w.jsx("br",{}),"Executions must be aimed at the weak spot by hand — wait longer than 10 seconds and it breaks through the glass. Use the wrong weapon and it escapes.",w.jsx("br",{}),(U=Fn.find(z=>z.surface==="manual"))==null?void 0:U.text," ",(k=Fn.find(z=>z.surface==="drawer"))==null?void 0:k.text,w.jsx("br",{}),"A few documents are tucked into the shelf:",w.jsx("br",{}),"· ",(Z=Fn.find(z=>z.surface==="shelf1"))==null?void 0:Z.text,w.jsx("br",{}),"· ",(Q=Fn.find(z=>z.surface==="shelf2"))==null?void 0:Q.text,w.jsx("br",{}),"· ",(V=Fn.find(z=>z.surface==="shelf3"))==null?void 0:V.text]})]})]})}),n==="weapons"&&w.jsx("div",{className:"overlay",children:w.jsxs("div",{className:"panel",style:{width:640},children:[w.jsxs("div",{className:"panel-head",children:[w.jsxs("h2",{children:[w.jsx("img",{src:"./assets/icons/gun.svg",alt:""}),"ARMORY"]}),w.jsx("button",{className:"btn",onClick:()=>{Il(),A()},children:"CLOSE"})]}),w.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:16,padding:"16px 0"},children:sy.map(z=>w.jsxs("div",{className:`weapon-slot ${z.locked?"locked":""}`,style:{display:"flex",flexDirection:"column",alignItems:"center",padding:16,background:z.locked?"#2a2a24":t.equippedWeapon===z.id?"#4a5548":"#3a3a32",borderRadius:6,border:z.locked?"2px dashed #4a4a40":t.equippedWeapon===z.id?"2px solid #60b060":"2px solid #5a5a50",cursor:z.locked?"not-allowed":"pointer"},onClick:()=>{z.locked||(e({type:"EQUIP_WEAPON",weapon:z.id}),Hn(),v(`EQUIPPED ${z.name}`))},children:[w.jsx("img",{src:`./assets/icons/${z.id}.svg`,alt:"",style:{width:72,height:72,marginBottom:8,filter:z.locked?"brightness(0.3)":"none"}}),w.jsx("div",{style:{fontWeight:"bold",marginBottom:4,color:z.locked?"#6a6a60":"#e8e2cc"},children:z.name}),z.locked&&w.jsx("div",{style:{fontSize:12,color:"#8a6a4a"},children:"🔒 DAY SHIFT ONLY"}),!z.locked&&w.jsx("div",{className:"desc",style:{textAlign:"center",fontSize:12},children:z.desc}),t.equippedWeapon===z.id&&w.jsx("div",{style:{marginTop:8,color:"#60b060",fontSize:11},children:"✓ EQUIPPED"})]},z.id))}),w.jsx("p",{className:"desc",style:{color:"#8a8a80",fontSize:12,marginTop:8},children:"CLICK TO EQUIP. PRESS F TO USE."}),w.jsx("p",{className:"desc",style:{color:"#6a6a60",fontSize:12,marginTop:8},children:X})]})}),n==="supplies"&&w.jsx("div",{className:"overlay",children:w.jsxs("div",{className:"panel",style:{width:520},children:[w.jsxs("div",{className:"panel-head",children:[w.jsxs("h2",{children:[w.jsx("img",{src:"./assets/icons/coffee.svg",alt:""}),"SUPPLY LOCKER"]}),w.jsx("button",{className:"btn",onClick:A,children:"CLOSE"})]}),oy.map(z=>w.jsxs("div",{className:"item",children:[w.jsx("img",{src:`./assets/icons/${z.id}.svg`,alt:""}),w.jsxs("div",{style:{flex:1},children:[w.jsx("div",{style:{fontWeight:"bold",marginBottom:2},children:z.name}),w.jsx("div",{className:"desc",children:z.desc}),w.jsxs("div",{className:"warn",children:["⚠ ",z.constraint]})]}),z.id==="coffee"&&w.jsx("button",{className:"btn",disabled:t.coffeeUsed>=2,onClick:()=>{qw(),e({type:"DRINK_COFFEE"}),v("Warm bitter liquid. Your heartbeat quickens.")},children:t.coffeeUsed>=2?"EMPTY":"DRINK"}),z.id==="sedative"&&w.jsx("button",{className:"btn",disabled:t.sedativeUsed,onClick:()=>{Yw(),e({type:"USE_SEDATIVE"}),v("Tastes like dry hay. Your breathing steadies.")},children:t.sedativeUsed?"USED":"CHEW"})]},z.id)),w.jsx("p",{className:"desc",style:{color:"#8a8a80",fontSize:12,marginTop:16},children:(K=Fn.find(z=>z.surface==="drawer"))==null?void 0:K.text}),w.jsx("p",{className:"desc",style:{color:"#6a6a60",fontSize:12,marginTop:6},children:(se=Fn.find(z=>z.surface==="supply"))==null?void 0:se.text})]})}),n==="sofa"&&w.jsx("div",{className:"overlay",children:w.jsxs("div",{className:"panel",style:{width:440},children:[w.jsxs("div",{className:"panel-head",children:[w.jsxs("h2",{children:[w.jsx("img",{src:"./assets/icons/sofa.svg",alt:""}),"SOFA"]}),w.jsx("button",{className:"btn",onClick:A,children:"LEAVE"})]}),w.jsxs("p",{style:{lineHeight:1.7,marginBottom:16},children:["Close your eyes and rest for about 40 seconds. San +20.",w.jsx("br",{}),w.jsx("span",{style:{color:"#e0a0a0"},children:"But if anyone is waiting in line while your eyes are closed, one of them will be auto-released."}),w.jsx("br",{}),w.jsx("span",{style:{color:"#8a8a80"},children:"Once per shift only."})]}),w.jsx("p",{className:"desc",style:{color:"#6a6a60",fontSize:12,marginBottom:12},children:(de=Fn.find(z=>z.surface==="sofa"))==null?void 0:de.text}),w.jsx("button",{className:"btn big",disabled:t.sofaUsed,onClick:()=>{$w(),e({type:"USE_SOFA",claw:Math.random()<.15}),A(),v("You close your eyes. Rain, heartbeat — and somewhere far away, a door opens.")},children:t.sofaUsed?"ALREADY RESTED":"REST"})]})}),n==="door"&&w.jsx("div",{className:"overlay",children:w.jsxs("div",{className:"panel",style:{width:360,textAlign:"center"},children:[w.jsx("img",{src:"./assets/icons/lock.svg",alt:"",style:{width:56,height:56,marginBottom:8}}),w.jsx("h2",{style:{margin:"0 0 12px"},children:t.doorUnlocked?"DOOR UNLOCKED":"DOOR LOCKED"}),!t.doorUnlocked&&w.jsx("p",{style:{color:"#9a9a90",margin:"0 0 16px"},children:"The door reads: NO EXIT · UNTIL DAWN. You must complete all inspections before you may leave."}),w.jsx("p",{className:"desc",style:{color:"#6a6a60",fontSize:12,margin:"0 0 16px"},children:(me=Fn.find(z=>z.surface==="doorsign"))==null?void 0:me.text}),t.doorUnlocked&&w.jsxs("div",{children:[w.jsx("p",{style:{color:"#e0a050",margin:"0 0 16px"},children:"All visitors inspected. You may end your shift."}),w.jsx("button",{className:"btn big",style:{background:"#4a8a4a",borderColor:"#4a8a4a",marginBottom:12},onClick:()=>{Hn(),e({type:"OPEN_DOOR"}),A()},children:"PUSH THE DOOR OPEN"})]}),w.jsx("button",{className:"btn",onClick:A,children:"BACK"})]})}),x&&w.jsx(zA,{item:x,onClose:()=>_(null)}),o&&w.jsx(PA,{result:o.result,tool:o.tool,visitor:o.visitor,onDone:F}),l!==!1&&w.jsx(jA,{visitor:l}),r&&r.tool==="axe"&&w.jsx(NA,{visitor:r.visitor,onSuccess:E,onFail:B}),r&&r.tool==="gun"&&w.jsx(DA,{visitor:r.visitor,gunAmmo:t.gunAmmo,onSuccess:E,onFail:B,onOutOfAmmo:J}),r&&r.tool==="fire"&&w.jsx(IA,{visitor:r.visitor,onSuccess:E,onFail:M,onOverheat:q})]})}mu.createRoot(document.getElementById("root")).render(w.jsx(zv.StrictMode,{children:w.jsx(qA,{})}));
