!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=document.querySelector(".top-menu"),t=document.getElementById("totop"),n=document.querySelector(".head");window.addEventListener("scroll",(function(){pageYOffset>0?(e.style.position="fixed",t.style.position=pageYOffset>n.clientHeight?"fixed":""):e.style.position=""}))},o=function(){var e=document.querySelector(".club-select"),t=document.querySelector(".clubs-list-hidden");e.addEventListener("click",(function(){return t.classList.toggle("active-element")}))},c=function(){document.querySelector(".popups").addEventListener("click",(function(e){var t=e.target,n=t.closest(".popup");(t.closest(".close-form")||t.classList.contains("overlay")||t.closest(".close-btn"))&&n.classList.remove("active-element")}))},i=function(){document.getElementById("visit-signup").addEventListener("click",(function(){var e=event.target;e.classList.contains("open-popup")&&document.querySelector(e.dataset.popup).classList.add("active-element")}))},l=function(){document.querySelector(".callback-btn").addEventListener("click",(function(e){return document.querySelector(e.target.dataset.popup).classList.add("active-element")}))},u=function(){var e=document.querySelector(".fixed-gift");e.addEventListener("click",(function(){document.getElementById("gift").classList.add("active-element"),e.style.display="none"}))},a=function(){var e=document.querySelector(".popup-menu");document.getElementById("menu-button-click").addEventListener("click",(function(){return e.style.display="flex"})),e.addEventListener("click",(function(t){var n=t.target;(n.closest(".close-menu-btn")||n.closest(".scroll"))&&(e.style.display="none")}))};function s(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(){document.body.addEventListener("submit",(function(e){e.preventDefault();var t=e.target,n=t.querySelector('input[type="checkbox"');if(n){var r=n.parentNode.querySelector("label");if(r.style.backgroundColor="",!n.checked)return void(r.style.backgroundColor="red")}var o=t.querySelectorAll('input[name="club-name"');if(o.length>0){var c=!1;if(s(o).forEach((function(e){e.checked&&(c=e.value)})),"span"===t.lastElementChild.tagName.toLowerCase()&&t.lastElementChild.remove(),!c){var i=document.createElement("span");return i.innerHTML="<strong>Вы не выбрали клуб</strong>",i.style.color="red",t.append(i)}}var l=document.getElementById("thanks"),u=l.querySelector(".form-content");u.innerHTML='\n            <h4>Спасибо!</h4>\n            <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>\n            <button class="btn close-btn">OK</button>\n        ';var a=new FormData(t),d={};a.forEach((function(e,t){d[t]=e})),function(e){return fetch("../server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(d).then((function(e){if(200!==e.status)throw new Error("invalid server response status")})).catch((function(e){console.error(e),u.innerHTML='\n                    <h4>Ошибка!</h4>\n                    <p>Во время отправки запроса обнаружена ошибка.</p>\n                    <button class="btn close-btn">OK</button>\n                '})).finally((function(){return l.classList.toggle("active-element")}))}))};try{r()}finally{}try{o()}finally{}try{c()}finally{}try{f()}finally{}try{i()}finally{}try{l()}finally{}try{document.documentElement.id||u()}finally{}try{a()}finally{}}]);