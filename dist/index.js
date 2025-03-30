"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=a(function(g,s){
var d=require('@stdlib/stats-strided-snanmeanpn/dist');function y(e,r,n){return d(e,r,n)}s.exports=y
});var v=a(function(h,u){
var x=require('@stdlib/stats-strided-snanmeanpn/dist').ndarray;function f(e,r,n,c){return x(e,r,n,c)}u.exports=f
});var o=a(function(k,m){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=t(),l=v();j(q,"ndarray",l);m.exports=q
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=o(),i,p=_(R(__dirname,"./native.js"));E(p)?i=O:i=p;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
