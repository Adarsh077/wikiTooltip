!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=4)}([function(t,n,e){var r=e(1),i=e(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var a={insert:"head",singleton:!1},o=(r(i,a),i.locals?i.locals:{});t.exports=o},function(t,n,e){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),o=[];function c(t){for(var n=-1,e=0;e<o.length;e++)if(o[e].identifier===t){n=e;break}return n}function d(t,n){for(var e={},r=[],i=0;i<t.length;i++){var a=t[i],d=n.base?a[0]+n.base:a[0],s=e[d]||0,l="".concat(d," ").concat(s);e[d]=s+1;var p=c(l),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(o[p].references++,o[p].updater(u)):o.push({identifier:l,updater:b(u,n),references:1}),r.push(l)}return r}function s(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=e.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,p=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function u(t,n,e,r){var i=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=p(n,i);else{var a=document.createTextNode(i),o=t.childNodes;o[n]&&t.removeChild(o[n]),o.length?t.insertBefore(a,o[n]):t.appendChild(a)}}function f(t,n,e){var r=e.css,i=e.media,a=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,h=0;function b(t,n){var e,r,i;if(n.singleton){var a=h++;e=m||(m=s(n)),r=u.bind(null,e,a,!1),i=u.bind(null,e,a,!0)}else e=s(n),r=f.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=d(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var i=c(e[r]);o[i].references--}for(var a=d(t,n),s=0;s<e.length;s++){var l=c(e[s]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}e=a}}}},function(t,n,e){(n=e(3)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);"]),n.push([t.i,'* {\n  box-sizing: border-box;\n}\n\n[data-hover-wrapper] {\n  transition: opacity 0.3s, transform 0.3s;\n}\n\n.card-panel {\n  padding: 24px;\n  border-radius: 2px;\n  margin: 0.5em 0 1em 0;\n  background-color: #fff;\n  transition: box-shadow 0.25s;\n  transition: -webkit-box-shadow 0.25s;\n  -webkit-transition: -webkit-box-shadow 0.25s;\n  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;\n  -webkit-box-shadow: 0 2px 2px 0 #00000024, 0 1px 5px 0 #00000033,\n    0 3px 1px -2px #0000001f;\n  box-shadow: 0 2px 2px 0 #00000024, 0 3px 1px -2px #0000001f,\n    0 1px 5px 0 #00000033;\n}\n\n.card {\n  position: relative;\n  border-radius: 2px;\n  margin: 0.5em 0 1em 0;\n  background-color: #fff;\n  transition: box-shadow 0.25s;\n  font-family: "Roboto" !important;\n  transition: -webkit-box-shadow 0.25s;\n  -webkit-transition: -webkit-box-shadow 0.25s;\n  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\n.card.horizontal {\n  display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n}\n\n.card.horizontal.small .card-image {\n  height: 100%;\n  max-height: none;\n  overflow: visible;\n}\n\n.card.horizontal.small .card-image img {\n  height: 100%;\n}\n\n.card.horizontal .card-image {\n  max-width: 50%;\n}\n\n.card.horizontal .card-image img {\n  width: auto;\n  max-width: 100%;\n  border-radius: 2px 0 0 2px;\n}\n\n.card.horizontal .card-stacked {\n  flex: 1;\n  -ms-flex: 1;\n  display: flex;\n  position: relative;\n  -webkit-box-flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  flex-direction: column;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n}\n\n.card.horizontal .card-stacked .card-content {\n  flex-grow: 1;\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n}\n\n.card .card-image {\n  position: relative;\n}\n\n.card .card-image img {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  display: block;\n  position: relative;\n  border-radius: 2px 2px 0 0;\n}\n\n.card .card-content {\n  padding: 24px;\n  border-radius: 0 0 2px 2px;\n}\n\n.card .card-content p {\n  margin: 0;\n}\n\n/* 16dp elevation */\n.z-depth-4 {\n  box-shadow: 0 16px 24px 2px #00000024, 0 6px 30px 5px #0000001f,\n    0 8px 10px -7px #00000033;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.wiki-card--vertical {\n  max-width: 40em;\n}\n\n.wiki-card--horizontal .card-image img,\n.wiki-card--vertical .card-image img {\n  background-size: cover;\n  background-position: center;\n}\n\n.wiki-card--vertical .card-image img {\n  height: 15em;\n  width: 11em !important;\n}\n\n.wiki-card--vertical .card-stacked {\n  width: 24.5em;\n}\n\n.wiki-card--vertical .card-stacked .card-content p,\n.wiki-card--horizontal .card-content p {\n  overflow: hidden;\n  position: relative;\n  margin-right: -1em;\n  padding-right: 1em;\n  line-height: 1.4em;\n  text-align: justify;\n}\n.wiki-card--vertical .card-stacked .card-content p {\n  max-height: 11em;\n}\n\n.wiki-card--vertical .card-stacked .card-content p:before,\n.wiki-card--horizontal .card-content p:before {\n  right: 0;\n  bottom: 0;\n  content: "...";\n  position: absolute;\n}\n\n.wiki-card--vertical .card-stacked .card-content p:after,\n.wiki-card--horizontal .card-content p:after {\n  content: "";\n  right: 0;\n  width: 1em;\n  height: 1em;\n  margin-top: 0.2em;\n  position: absolute;\n}\n\n.wiki-card--horizontal {\n  max-width: 22em;\n}\n.wiki-card--horizontal .card-image img {\n  width: 22em !important;\n  max-height: 12em !important;\n}\n\n.wiki-card--horizontal .card-content p {\n  max-height: 12em !important;\n}\n',""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var i=(o=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(a).concat([i]).join("\n")}var o,c,d;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&i[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),n.push(d))}},n}},function(t,n,e){"use strict";e.r(n);e(0);var r=t=>new Promise((n,e)=>{const r=new XMLHttpRequest;r.onreadystatechange=function(){4===this.readyState&&200===this.status?n(JSON.parse(this.responseText)):4===this.readyState&&200!=this.status&&e("Error code: "+this.status)},r.open("GET",t,!0),r.send()}),i=t=>{const n=t.target.getAttribute("data-hover-id"),e=document.getElementById(n),{top:r,left:i,right:a,bottom:o}=t.target.getBoundingClientRect();return`position: fixed; left: ${e.offsetWidth>window.innerWidth-a?a:i}px; top:${e.offsetHeight>window.innerHeight-o?r-e.offsetHeight:o}px`};const a=t=>{const n=t.target.getAttribute("data-hover-id");document.getElementById(n).setAttribute("style",i(t))},o=t=>{const n=t.target.getAttribute("data-hover-id");document.getElementById(n).style.opacity=0,document.getElementById(n).style.transform="scale(.8)",setTimeout(()=>document.getElementById(n).remove(),150)},c=t=>{const n=t.target.getAttribute("data-hover-content"),e=(()=>{let t="";for(let n in Array(10).fill(""))t+="ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm"[Math.round(51*Math.random())];return t})(),r=document.createElement("DIV");t.target.setAttribute("data-hover-id",e),r.setAttribute("data-hover-wrapper",""),r.setAttribute("id",e),r.setAttribute("style","opacity: 0; transform: scale(.8)"),r.innerHTML=n,document.body.append(r),r.setAttribute("style",i(t))};window.addEventListener("scroll",()=>{const t=document.querySelector("[data-hover-wrapper]");t&&t.remove()});document.querySelectorAll("[data-wikitooltip]").forEach(t=>{(async t=>{const n=t.getAttribute("data-wikitooltip"),e=await r("https://en.wikipedia.org/api/rest_v1/page/summary/"+n);let i=await r(e.api_urls.media);if(i=i.items[0].thumbnail.source,i){const n=new Image;n.src=i;const r=n.height>n.width?(a=i,o=e.extract_html,`\n\t\t\t<div class="card horizontal z-depth-4 wiki-card--vertical">\n\t\t\t\t<div class="card-image">\n\t\t\t\t\t<img class="card2-image"\n\t\t\t\t\t\tsrc="${a}">\n\t\t\t\t</div>\n\t\t\t\t<div class="card-stacked">\n\t\t\t\t\t<div class="card-content">\n\t\t\t\t\t\t<p class="text-justify card2">${o}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>`):((t,n)=>`\n\t\t\t<div class="card z-depth-4 wiki-card--horizontal">\n\t\t\t\t<div class="card-image">\n\t\t\t\t\t<img class="card1-image"\n\t\t\t\t\t\tsrc="${t}">\n\t\t\t\t</div>\n\t\t\t\t<div class="card-content">\n\t\t\t\t\t<p class="text-justify card1">${n}</p>\n\t\t\t\t</div>\n\t\t\t</div>`)(i,e.extract_html);n.addEventListener("load",()=>t.setAttribute("data-hover-content",r,!1))}else t.setAttribute("data-hover-content",(t=>`\n\t\t<div class="card z-depth-4 wiki-card--horizontal">\n\t\t<div class="card-content">\n\t\t\t<p class="text-justify card1">${t}</p>\n\t\t</div>\n\t</div>`)(e.extract_html));var a,o})(t),t.addEventListener("mouseover",c),t.addEventListener("mousemove",a),t.addEventListener("mouseleave",o)})}]);