"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=n(function(h,t){
var p=require('@stdlib/stats-strided-snanmeanpn/dist').ndarray;function y(e,r,a,d){return p(e,r,a,d)}t.exports=y
});var v=n(function(k,u){
var f=require('@stdlib/strided-base-stride2offset/dist'),x=i();function j(e,r,a){return x(e,r,a,f(e,a))}u.exports=j
});var m=n(function(w,o){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),R=i();l(q,"ndarray",R);o.exports=q
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=m(),s,c=E(_(__dirname,"./native.js"));O(c)?s=b:s=c;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
