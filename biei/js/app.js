"use strict";function Carousel(e){var t=this,o={};o.setting=e,o.sel={main:document.querySelector(o.setting.main),wrap:document.querySelector(o.setting.wrap),children:document.querySelector(o.setting.wrap).children,prev:document.querySelector(o.setting.prev),next:document.querySelector(o.setting.next)},o.opt={position:0,max_position:document.querySelector(o.setting.wrap).children.length},null!==o.sel.prev&&o.sel.prev.addEventListener("click",function(){t.prev_slide()}),null!==o.sel.next&&o.sel.next.addEventListener("click",function(){t.next_slide()}),this.prev_slide=function(){--o.opt.position,o.opt.position<0&&(o.sel.wrap.classList.add("s-notransition"),o.opt.position=o.opt.max_position-1),o.sel.wrap.style.transform="translateX(-".concat(o.opt.position,"00%)")},this.next_slide=function(){++o.opt.position,o.opt.position>=o.opt.max_position&&(o.opt.position=0),o.sel.wrap.style.transform="translateX(-".concat(o.opt.position,"00%)")}}window.onload=function(){new Carousel({main:".js-carousel",wrap:".js-carousel__wrap",prev:".js-carousel__prev",next:".js-carousel__next"});var t=document.createElement("iframe");t.src="https://www.youtube.com/embed/SbMJSpwxrdE",t.frameBorder=0,t.allowFullscreen=!0;var o=document.getElementById("modal"),n=document.getElementById("modal-overlay"),e=document.getElementById("close-button"),s=document.getElementById("open-button");e.addEventListener("click",function(e){e.preventDefault(),document.querySelector(".modal__data").removeChild(t),o.classList.toggle("closed"),n.classList.toggle("closed")}),s.addEventListener("click",function(){t.width=document.querySelector(".footer__wrapper").clientWidth-200,t.height=.5625*(document.querySelector(".footer__wrapper").clientWidth-200),document.querySelector(".modal__data").append(t),o.classList.toggle("closed"),n.classList.toggle("closed")}),n.addEventListener("click",function(){document.querySelector(".modal__data").removeChild(t),o.classList.toggle("closed"),n.classList.toggle("closed")})};