!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){window.addEventListener("scroll",(function(){var e=document.querySelector(".top-menu");pageYOffset>0?e.style.position="fixed":e.style.position="relative"}))},o=function(){var e=document.querySelector(".club-select"),t=document.querySelector(".clubs-list-hidden");e.addEventListener("click",(function(){return t.classList.toggle("active-element")}))},c=function(){document.querySelector(".forms").addEventListener("click",(function(e){var t=e.target,n=t.closest(".popup");(t.closest(".close-form")||t.classList.contains("overlay"))&&n.classList.remove("active-element")}))},i=function(){document.getElementById("visit-signup").addEventListener("click",(function(){var e=event.target;e.classList.contains("open-popup")&&document.querySelector(e.dataset.popup).classList.add("active-element")}))},l=function(){document.querySelector(".callback-btn").addEventListener("click",(function(e){return document.querySelector(e.target.dataset.popup).classList.add("active-element")}))},u=function(){var e=document.querySelector(".fixed-gift");e.addEventListener("click",(function(){document.getElementById("gift").classList.add("active-element"),e.style.display="none"}))},s=function(){var e=document.querySelector(".popup-menu");document.getElementById("menu-button-click").addEventListener("click",(function(){return e.style.display="flex"})),e.addEventListener("click",(function(t){var n=t.target;(n.closest(".close-menu-btn")||n.closest(".scroll"))&&(e.style.display="none")}))};try{r()}finally{}try{o()}finally{}try{c()}finally{}try{i()}finally{}try{l()}finally{}if(!document.documentElement.id)try{u()}finally{}try{s()}finally{}}]);