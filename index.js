// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).snanmean={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,l,s,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),s="get"in n,y="set"in n,l&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,n.get),y&&f&&f.call(r,t,n.set),r};var l=n;function s(r,t,n){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(r){var t=function(r){return"/"===r.charAt(0)}(r),n="/"===b(r,-1);return(r=function(r,t){for(var n=0,e=r.length-1;e>=0;e--){var o=r[e];"."===o?r.splice(e,1):".."===o?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}(p(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function p(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}var b="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)},v=/./;function d(r){return"boolean"==typeof r}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return j&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var w,h="function"==typeof Symbol?Symbol.toStringTag:"";w=_()?function(r){var t,n,e,o,u;if(null==r)return m.call(r);n=r[h],u=h,t=null!=(o=r)&&g.call(o,u);try{r[h]=void 0}catch(t){return m.call(r)}return e=m.call(r),t?r[h]=n:delete r[h],e}:function(r){return m.call(r)};var O=w,A=Boolean.prototype.toString;var E=_();function S(r){return"object"==typeof r&&(r instanceof Boolean||(E?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===O(r)))}function N(r){return d(r)||S(r)}function F(){return new Function("return this;")()}s(N,"isPrimitive",d),s(N,"isObject",S);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof B?B:null;var I=function(r){if(arguments.length){if(!d(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return F()}if(P)return P;if(T)return T;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),M=I.document&&I.document.childNodes,V=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C,G=/^\s*function\s*([^(]*)/i;s(k,"REGEXP",G),C=Array.isArray?Array.isArray:function(r){return"[object Array]"===O(r)};var L=C;function q(r){return null!==r&&"object"==typeof r}var J=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!L(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(q);function R(r){var t,n,e,o;if(("Object"===(n=O(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=G.exec(e.toString()))return t[1]}return q(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}s(q,"isObjectLikeArray",J);var U="function"==typeof v||"object"==typeof V||"function"==typeof M?function(r){return R(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?R(r).toLowerCase():t};var X,Y,z=Object.getPrototypeOf;Y=Object.getPrototypeOf,X="function"===U(Y)?z:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===O(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var D=X;function H(r){return null==r?null:(r=Object(r),D(r))}var K="function"==typeof Math.fround?Math.fround:null,Q="function"==typeof Float32Array;var W=Number.POSITIVE_INFINITY,Z="function"==typeof Float32Array?Float32Array:null;var $,rr="function"==typeof Float32Array?Float32Array:void 0;$=function(){var r,t;if("function"!=typeof Z)return!1;try{r=function(r){return Q&&r instanceof Float32Array||"[object Float32Array]"===O(r)}(t=new Z([1,3.14,-3.14,5e40]))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===W}catch(t){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var tr=new $(1);var nr,er="function"==typeof K?K:function(r){return tr[0]=r,tr[0]};function or(r,t,n){var e,o,u,i,f,a,c;if(r<=0)return NaN;if(1===r||0===n)return t[0];for(c=e=n<0?(1-r)*n:0,u=0,f=0,a=0;a<r;a++)(o=t[e])==o&&(u=er(u+o),f+=1),e+=n;if(0===f)return NaN;for(u=er(u/f),i=0,e=c,a=0;a<r;a++)(o=t[e])==o&&(i=er(i+er(o-u))),e+=n;return er(u+er(i/f))}s(or,"ndarray",(function(r,t,n,e){var o,u,i,f,a,c;if(r<=0)return NaN;if(1===r||0===n)return t[e];for(o=e,i=0,a=0,c=0;c<r;c++)(u=t[o])==u&&(i=er(i+u),a+=1),o+=n;if(0===a)return NaN;for(i=er(i/a),o=e,f=0,c=0;c<r;c++)(u=t[o])==u&&(f=er(f+er(u-i))),o+=n;return er(i+er(f/a))}));var ur=function(r){try{return require(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===O(r))return!0;r=H(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}(function(){var r=Array.prototype.slice.call(arguments,0);return y(p(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}("/home/runner/work/stats-base-snanmean/stats-base-snanmean/node_modules/@stdlib/stats-base-snanmeanpn/lib","./native.js")),ir=nr=ur instanceof Error?or:ur;const{ndarray:fr}=nr;function ar(r,t,n){return ir(r,t,n)}function cr(r,t,n,e){return fr(r,t,n,e)}s(ar,"ndarray",cr),r.default=ar,r.ndarray=cr,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
