!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var a=t(1),i=t(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);e.exports=i.locals||{}},function(e,n,t){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function l(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},a=[],i=0;i<e.length;i++){var r=e[i],c=n.base?r[0]+n.base:r[0],p=t[c]||0,s="".concat(c," ").concat(p);t[c]=p+1;var f=l(s),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==f?(o[f].references++,o[f].updater(u)):o.push({identifier:s,updater:h(u,n),references:1}),a.push(s)}return a}function p(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=t.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var s,f=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,a){var i=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=f(n,i);else{var r=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(r,o[n]):e.appendChild(r)}}function d(e,n,t){var a=t.css,i=t.media,r=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var m=null,v=0;function h(e,n){var t,a,i;if(n.singleton){var r=v++;t=m||(m=p(n)),a=u.bind(null,t,r,!1),i=u.bind(null,t,r,!0)}else t=p(n),a=d.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var i=l(t[a]);o[i].references--}for(var r=c(e,n),p=0;p<t.length;p++){var s=l(t[p]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}t=r}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"html{background-color:blanchedalmond}.row{display:flex}.column{flex:50%;padding:10px;height:300px}#pizzaCanvas{margin:auto;justify-content:center}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var i=(o=a,l=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),r=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([i]).join("\n")}var o,l,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);a&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";t.r(n);t(0);var a,i,r=document.getElementsByClassName("toppings");Array.from(r).forEach((function(e){e.innerHTML+='<div class="toppings_box">\n    <form class="pizza_topping_form">\n        <div class="topping_amount">\n            <label class="container">Extra\n                <input type="radio" id="inputBtn" name="topping_amount" value="Extra">\n                <span class="checkmark"></span>\n            </label>\n            <label class="container">Normal\n                <input type="radio" id="inputBtn" name="topping_amount" value="Normal">\n                <span class="checkmark"></span>\n            </label>\n            <label class="container">None\n                <input type="radio" id="inputBtn" name="topping_amount" value="None" checked="checked">\n                <span class="checkmark"></span>\n            </label>\n        </div>\n        <div class="portion_of_pizza">\n            <label class="container">Left Half\n                <input type="radio" name="pizza_portion" value="left">\n                <span class="checkmark"></span>\n            </label>\n            <label class="container">Normal\n                <input type="radio" name="pizza_portion" value="right">\n                <span class="checkmark"></span>\n            </label>\n            <label class="container">None\n                <input type="radio" name="pizza_portion" value="full">\n                <span class="checkmark"></span>\n            </label>\n        </div>\n    </form>\n        <div>\n            <p id="order">Hello</p>\n        </div>\n        <div id=\'image_holder\'></div>\n</div>'})),a="special-deal","block"==(i=document.getElementById(a)).style.display?i.style.display="none":i.style.display="block";document.getElementById("inputBtn").addEventListener("click",o);var o=function(e){document.getElementById("inputBtn").click()?document.getElementById("order").innerHTML="Your current price is: 0":(document.getElementById("order").innerHTML="Please select an option",e.preventDefault())},l={prices:[{"x-large":"$20.00"},{large:"$15.00"},{medium:"$12.00"},{small:"$8.00"}],toppings:[{name:"anchovy",file_prefix:"anchovy"},{name:"bacon",file_prefix:"bacon"},{name:"bell_peppers",file_prefix:"bell_peppers"},{name:"cheese",file_prefix:"cheese"},{name:"ham",file_prefix:"ham"},{name:"jalepenos",file_prefix:"jalepenos"},{name:"olives",file_prefix:"olives"},{name:"pepperoni",file_prefix:"pepperoni"},{name:"pineapple",file_prefix:"pineapple"},{name:"crust",file_prefix:"pizza_canvas"},{name:"sausage",file_prefix:"sausage"}],prebuilt1:[{large:"$15.00"},{name:"crust",file_prefix:"pizza_canvas"},{name:"cheese",file_prefix:"cheese"},{name:"bell_peppers",file_prefix:"bell_peppers"},{name:"olives",file_prefix:"olives"}],prebuilt2:[{small:"$8.00"},{name:"crust",file_prefix:"pizza_canvas"},{name:"cheese",file_prefix:"cheese"},{name:"ham",file_prefix:"ham"},{name:"jalepenos",file_prefix:"jalepenos"},{name:"anchovy",file_prefix:"anchovy"}],prebuilt3:[{medium:"$12.00"},{name:"crust",file_prefix:"pizza_canvas"},{name:"bell_peppers",file_prefix:"bell_peppers"},{name:"jalepenos",file_prefix:"jalepenos"},{name:"olives",file_prefix:"olives"},{name:"pineapple",file_prefix:"pineapple"}],prebuilt4:[{"x-large":"$20.00"},{name:"crust",file_prefix:"pizza_canvas"},{name:"cheese",file_prefix:"cheese"},{name:"ham",file_prefix:"ham"},{name:"anchovy",file_prefix:"anchovy"},{name:"bacon",file_prefix:"bacon"},{name:"sausage",file_prefix:"sausage"},{name:"pepperoni",file_prefix:"pepperoni"}],prebuilt5:[{medium:"$12.00"},{name:"crust",file_prefix:"pizza_canvas"},{name:"cheese",file_prefix:"cheese"},{name:"ham",file_prefix:"ham"},{name:"pineapple",file_prefix:"pineapple"}]};document.getElementById("pizza").innerHTML=r;var c=document.getElementById("image_holder"),p=document.createElement("IMG");c.appendChild(p),p.setAttribute("src","./images/pizza_canvas.png");var s=[];l.toppings.forEach((function(e,n){console.log(e.name,n),s[n]={},s[n].left=document.createElement("IMG"),c.appendChild(s[n].left),s[n].left.setAttribute("src","./images/".concat(e.file_prefix,"_left.png")),s[n].right=document.createElement("IMG"),c.appendChild(s[n].right),s[n].right.setAttribute("src","./images/".concat(e.file_prefix,"_right.png"))}));var f=document.getElementById("pizza_view");f.width=270,f.height=270;var u=f.getContext("2d");setInterval((function(){u.clearRect(0,0,270,270),u.drawImage(p,10,10),u.drawImage(s[0].right,10,10)}),100)}]);