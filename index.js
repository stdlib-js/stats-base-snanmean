// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).snanmean=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||c.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r};var l=e;function y(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=/./;function s(r){return"boolean"==typeof r}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var m,_="function"==typeof Symbol?Symbol.toStringTag:"";m=v()?function(r){var t,e,n,o,u;if(null==r)return d.call(r);e=r[_],u=_,t=null!=(o=r)&&j.call(o,u);try{r[_]=void 0}catch(t){return d.call(r)}return n=d.call(r),t?r[_]=e:delete r[_],n}:function(r){return d.call(r)};var g=m,w=Boolean.prototype.toString;var h=v();function O(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function E(r){return s(r)||O(r)}function A(){return new Function("return this;")()}y(E,"isPrimitive",s),y(E,"isObject",O);var S="object"==typeof self?self:null,N="object"==typeof window?window:null,F="object"==typeof global?global:null;var P=function(r){if(arguments.length){if(!s(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return A()}if(S)return S;if(N)return N;if(F)return F;throw new Error("unexpected error. Unable to resolve global object.")}(),T=P.document&&P.document.childNodes,B=Int8Array;function q(){return/^\s*function\s*([^(]*)/i}var I,x=/^\s*function\s*([^(]*)/i;y(q,"REGEXP",x),I=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};var V=I;function k(r){return null!==r&&"object"==typeof r}var C=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!V(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(k);function M(r){var t,e,n,o;if(("Object"===(e=g(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=x.exec(n.toString()))return t[1]}return k(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}y(k,"isObjectLikeArray",C);var G="function"==typeof p||"object"==typeof B||"function"==typeof T?function(r){return M(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?M(r).toLowerCase():t};var L,R,$=Object.getPrototypeOf;R=Object.getPrototypeOf,L="function"===G(R)?$:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===g(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var D=L;function J(r){return null==r?null:(r=Object(r),D(r))}var U="function"==typeof Math.fround?Math.fround:null,X="function"==typeof Float32Array;var Y=Number.POSITIVE_INFINITY,z="function"==typeof Float32Array?Float32Array:null;var H,K="function"==typeof Float32Array?Float32Array:void 0;H=function(){var r,t;if("function"!=typeof z)return!1;try{r=function(r){return X&&r instanceof Float32Array||"[object Float32Array]"===g(r)}(t=new z([1,3.14,-3.14,5e40]))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===Y}catch(t){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q=new H(1);var W="function"==typeof U?U:function(r){return Q[0]=r,Q[0]};function Z(r,t,e){var n,o,u,i,a,f,c;if(r<=0)return NaN;if(1===r||0===e)return t[0];for(c=n=e<0?(1-r)*e:0,u=0,a=0,f=0;f<r;f++)(o=t[n])==o&&(u=W(u+o),a+=1),n+=e;if(0===a)return NaN;for(u=W(u/a),i=0,n=c,f=0;f<r;f++)(o=t[n])==o&&(i=W(i+W(o-u))),n+=e;return W(u+W(i/a))}y(Z,"ndarray",(function(r,t,e,n){var o,u,i,a,f,c;if(r<=0)return NaN;if(1===r||0===e)return t[n];for(o=n,i=0,f=0,c=0;c<r;c++)(u=t[o])==u&&(i=W(i+u),f+=1),o+=e;if(0===f)return NaN;for(i=W(i/f),o=n,a=0,c=0;c<r;c++)(u=t[o])==u&&(a=W(a+W(u-i))),o+=e;return W(i+W(a/f))}));var rr,tr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===g(r))return!0;r=J(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),er=rr=tr instanceof Error?Z:tr;const{ndarray:nr}=rr;function or(r,t,e){return er(r,t,e)}return y(or,"ndarray",(function(r,t,e,n){return nr(r,t,e,n)})),or}));
//# sourceMappingURL=index.js.map
