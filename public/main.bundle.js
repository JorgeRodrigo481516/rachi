!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}(),e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;var t=document.getElementById("to-top");t.addEventListener("click",(function(){window.scrollTo(0,0)})),document.getElementsByTagName("body")[0].onload=function(){for(var e=document.getElementsByClassName("card--preferido"),t=e.length,r=0;r<t;r+=1){var n=document.createElement("img");n.classList.add("card__best-seller"),n.src="icons-best-seller.svg";var c=document.createElement("span");c.classList.add("card__preferido"),c.textContent="Preferido",e[r].insertBefore(n,e[r].firstElementChild),e[r].children[1].insertAdjacentElement("afterend",c)}},window.addEventListener("scroll",(function(){window.pageYOffset>110?t.classList.add("active"):t.classList.remove("active")}))}();
//# sourceMappingURL=main.bundle.js.map