(()=>{var e={857:(e,t,r)=>{"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}r.r(t),r.d(t,{__DO_NOT_USE__ActionTypes:()=>a,applyMiddleware:()=>b,bindActionCreators:()=>E,combineReducers:()=>y,compose:()=>v,createStore:()=>d,legacy_createStore:()=>s});var u="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function p(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function d(e,t,r){var n;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(c(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error(c(1));return r(d)(e,t)}if("function"!=typeof e)throw new Error(c(2));var o=e,i=t,f=[],s=f,y=!1;function l(){s===f&&(s=f.slice())}function E(){if(y)throw new Error(c(3));return i}function v(e){if("function"!=typeof e)throw new Error(c(4));if(y)throw new Error(c(5));var t=!0;return l(),s.push(e),function(){if(t){if(y)throw new Error(c(6));t=!1,l();var r=s.indexOf(e);s.splice(r,1),f=null}}}function b(e){if(!p(e))throw new Error(c(7));if(void 0===e.type)throw new Error(c(8));if(y)throw new Error(c(9));try{y=!0,i=o(i,e)}finally{y=!1}for(var t=f=s,r=0;r<t.length;r++)(0,t[r])();return e}function O(e){if("function"!=typeof e)throw new Error(c(10));o=e,b({type:a.REPLACE})}function h(){var e,t=v;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(c(11));function r(){e.next&&e.next(E())}return r(),{unsubscribe:t(r)}}})[u]=function(){return this},e}return b({type:a.INIT}),(n={dispatch:b,subscribe:v,getState:E,replaceReducer:O})[u]=h,n}var s=d;function y(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];"function"==typeof e[o]&&(r[o]=e[o])}var i,u=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:a.INIT}))throw new Error(c(12));if(void 0===r(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(c(13))}))}(r)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},f=0;f<u.length;f++){var a=u[f],p=r[a],d=e[a],s=p(d,t);if(void 0===s)throw t&&t.type,new Error(c(14));o[a]=s,n=n||s!==d}return(n=n||u.length!==Object.keys(e).length)?o:e}}function l(e,t){return function(){return t(e.apply(this,arguments))}}function E(e,t){if("function"==typeof e)return l(e,t);if("object"!=typeof e||null===e)throw new Error(c(16));var r={};for(var n in e){var o=e[n];"function"==typeof o&&(r[n]=l(o,t))}return r}function v(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error(c(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},u=t.map((function(e){return e(o)}));return n=v.apply(void 0,u)(r.dispatch),i(i({},r),{},{dispatch:n})}}}},883:e=>{e.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO",IMPAR:"IMPAR",ASYNC:"ASYNC"}},518:(e,t,r)=>{const{INCREMENTO:n,DECREMENTO:o,IMPAR:i,ASYNC:c}=r(883);e.exports={incremento:()=>({type:n}),decremento:()=>({type:o}),impar:()=>({type:i}),async:()=>({type:c})}},616:(e,t,r)=>{const{INCREMENTO:n,DECREMENTO:o,IMPAR:i,ASYNC:c}=r(883),u={contador:0};e.exports=function(e=u,t){switch(t.type){case n:return{...e,contador:e.contador+1};case o:return{...e,contador:e.contador-1};case i:return e.contador%2==0?{...e,contador:e.contador+1}:{...e};case c:return{...e,contador:e.contador+1};default:return{...e}}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{createStore:e}=r(857),t=r(616),{incremento:n,decremento:o,impar:i,async:c}=r(518);var u=e(t),f=document.getElementById("valor");function a(){let e=u.getState().contador;f.innerText=e}a(),u.subscribe(a);let p=document.getElementById("incremento"),d=document.getElementById("decremento"),s=document.getElementById("incrementoImpar"),y=document.getElementById("incrementoAsync");p.addEventListener("click",(()=>{u.dispatch(n())})),d.addEventListener("click",(()=>{u.dispatch(o())})),s.addEventListener("click",(()=>{u.dispatch(i())})),y.addEventListener("click",(()=>{setTimeout((()=>{u.dispatch(c())}),2e3)}))})()})();