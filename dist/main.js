!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=document.querySelector(".top-menu"),t=document.getElementById("totop"),n=document.querySelector(".header-main");window.addEventListener("scroll",(function(){pageYOffset>0?(e.style.position="fixed",t.style.position=pageYOffset>n.clientHeight?"fixed":""):e.style.position=""}))},o=function(){var e=document.querySelector(".club-select"),t=document.querySelector(".clubs-list-hidden");e.addEventListener("click",(function(){return t.classList.toggle("active-element")}))},i=function(){document.querySelector(".popups").addEventListener("click",(function(e){var t=e.target,n=t.closest(".popup");(t.closest(".close-form")||t.classList.contains("overlay")||t.closest(".close-btn"))&&n.classList.remove("active-element")}))},a=function(){document.getElementById("visit-signup").addEventListener("click",(function(){var e=event.target;e.classList.contains("open-popup")&&document.querySelector(e.dataset.popup).classList.add("active-element")}))},l=function(){document.querySelector(".callback-btn").addEventListener("click",(function(e){return document.querySelector(e.target.dataset.popup).classList.add("active-element")}))},s=function(){var e=document.querySelector(".fixed-gift");e.addEventListener("click",(function(){document.getElementById("gift").classList.add("active-element"),e.style.display="none"}))},c=function(){var e=document.querySelector(".popup-menu");document.getElementById("menu-button-click").addEventListener("click",(function(){return e.style.display="flex"})),e.addEventListener("click",(function(t){var n=t.target;(n.closest(".close-menu-btn")||n.closest(".scroll"))&&(e.style.display="none")}))};function u(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(e){var t=!1;return u(e).forEach((function(e){e.checked&&(t=e.value)})),t},y=function(e,t,n){var r=+sessionStorage.getItem("".concat(e,"_currentSlideIndex")),o=r;if(t[r].style.display="none",r+n>=t.length?r=0:r+n<0?r=t.length-1:r+=n,"gallery"===e){var i=document.querySelector(".slider-dots").children;i[o].classList.remove("slick-active"),i[r].classList.add("slick-active")}return t[r].style.display="flex",sessionStorage.setItem("".concat(e,"_currentSlideIndex"),r),r},p=function(e,t){var n=0,r=0;r=requestAnimationFrame((function o(i){i-n>2500&&(n=i,"run"===sessionStorage.getItem("".concat(e,"_sliderStatus"))&&(y(e,t,1),sessionStorage.setItem("".concat(e,"_sliderID"),r))),r=requestAnimationFrame(o)}))};function m(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=function(){document.body.addEventListener("submit",(function(e){e.preventDefault();var t=e.target,n=t.querySelector('input[type="checkbox"');if(n){var r=n.parentNode.querySelector("label");if(r.style.backgroundColor="",!n.checked)return void(r.style.backgroundColor="red")}var o=t.querySelectorAll('input[name="club-name"');if(o.length>0){var i=f(o);if("span"===t.lastElementChild.tagName.toLowerCase()&&t.lastElementChild.remove(),!i){var a=document.createElement("span");return a.innerHTML="<strong>Вы не выбрали клуб</strong>",a.style.color="red",t.append(a)}}if(function(e){var t=!0;return m(e.querySelectorAll("input")).forEach((function(e){"input"===e.tagName.toLowerCase()&&e.pattern&&(e.style.border="",(e.dataset.required||e.value.trim())&&(new RegExp(e.pattern).test(e.value.trim())||(e.style.border="2px solid red",t=!1)))})),t}(t)){var l=document.getElementById("thanks"),s=l.querySelector(".form-content");s.innerHTML='\n            <h4>Спасибо!</h4>\n            <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>\n            <button class="btn close-btn">OK</button>\n        ';var c=new FormData(t),u={};c.forEach((function(e,t){u[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},cache:"default",body:JSON.stringify(e)})}(u).then((function(e){if(200!==e.status)throw new Error("invalid server response status")})).catch((function(e){console.error(e),s.innerHTML='\n                    <h4>Ошибка!</h4>\n                    <p>Во время отправки запроса обнаружена ошибка.</p>\n                    <button class="btn close-btn">OK</button>\n                '})).finally((function(){l.classList.toggle("active-element");var e=t.closest(".popup");e&&e.classList.toggle("active-element"),m(t.querySelectorAll("input")).forEach((function(e){"checkbox"===e.type.toLowerCase()||"radio"===e.type.toLowerCase()||"club-name"===e.name.toLowerCase()?e.checked=!1:e.value=""}))}))}}))};function g(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=function(){var e=document.getElementById("calculater");e.addEventListener("change",(function(){var t,n;try{n=0,n+=("mozaika"===f(e.querySelectorAll('input[name="club-name"'))?[1999,9900,13900,19900]:[2990,14990,21990,24990])[g(e.querySelectorAll('input[name="card-type"')).findIndex((function(e){return e.checked}))],n-="ТЕЛО2020"===e.querySelector("#input-promocode").value.trim()?30*n/100:0,t=+Math.round(n)}catch(e){t=1990}finally{e.querySelector("#price-total").textContent=t}}))},w=function(){var e=document.querySelectorAll(".main-slider>.slide");sessionStorage.removeItem("gallery_currentSlideIndex"),sessionStorage.setItem("main_sliderStatus","run"),p("main",e)};function A(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L=function(){var e=document.querySelectorAll(".gallery-slider>.slide"),t=document.querySelector(".gallery-slider>.switch-container"),n=function(){return sessionStorage.setItem("gallery_sliderStatus","run")};sessionStorage.removeItem("gallery_currentSlideIndex"),n(),p("gallery",e),t.addEventListener("click",(function(t){var n=t.target;if(t.preventDefault(),"span"===n.tagName.toLowerCase())y("gallery",e,n.closest(".next")?1:-1);else if("button"===n.tagName.toLowerCase()){var r=n.parentNode.parentNode.children,o=sessionStorage.getItem("gallery_currentSlideIndex"),i=A(r).indexOf(n.parentNode);y("gallery",e,i-o)}})),t.addEventListener("mouseover",(function(){sessionStorage.setItem("gallery_sliderStatus","stop")})),t.addEventListener("mouseout",(function(){n()}))};function I(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.main,r=t.wrap,o=t.next,i=t.prev,a=t.position,l=void 0===a?0:a,s=t.slidesCount,c=void 0===s?5:s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.main=document.querySelector(n),this.wrap=document.querySelector(r),this.slides=this.wrap.querySelectorAll(".slide"),this.next=document.querySelector(o),this.prev=document.querySelector(i),this.slidesCount=c,this.options={position:l,slideWidth:Math.floor(100/+this.slidesCount)},this.init()}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.addClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider()}},{key:"addClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var e,t=I(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("glo-slider__item")}catch(e){t.e(e)}finally{t.f()}}},{key:"addStyle",value:function(){var e=document.createElement("style");e.id="sliderCarousel-style",e.textContent="\n        .glo-slider {\n            overflow: hidden !important;\n        }\n        .glo-slider__wrap {\n          display: flex !important;\n          transition: transform 0.5s !important;\n          will-change: transform !important;\n        }\n        .glo-slider__item {\n          flex: 0 0 ".concat(this.options.slideWidth,"% !important;\n        }\n      "),document.head.append(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlide.bind(this)),this.next.addEventListener("click",this.nextSlide.bind(this))}},{key:"prevSlide",value:function(){this.options.position<=0||(--this.options.position,this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"),this.arrowHandler())}},{key:"nextSlide",value:function(){this.options.position>this.slidesCount-1||(++this.options.position,this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"),this.arrowHandler())}},{key:"arrowHandler",value:function(){this.next.style.display=this.prev.style.display="block",this.options.position<=0&&(this.prev.style.display="none"),this.options.position>this.slidesCount-1&&(this.next.style.display="none")}}])&&k(t.prototype,n),r&&k(t,r),e}();try{r()}finally{}try{o()}finally{}try{i()}finally{}try{h()}finally{}try{a()}finally{}try{l()}finally{}try{document.documentElement.id||s()}finally{}try{c()}finally{}try{document.documentElement.id||S()}finally{}try{w()}finally{}try{L()}finally{}try{new q({main:".services-wrapper",wrap:".services-slider",next:".arrow-next",prev:".arrow-prev"})}finally{}}]);