(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"0367":function(t,e,a){},"14ee":function(t,e,a){},1984:function(t,e,a){},"200b":function(t,e,a){},"2dae":function(t,e,a){"use strict";var s=a("14ee"),i=a.n(s);i.a},"2f46":function(t,e){t.exports="data:image/png;base64,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"},"2fea":function(t,e,a){},"313c":function(t,e,a){},3388:function(t,e,a){t.exports=a.p+"img/PictIceConcept.5dbd0ce1.png"},"3d9d":function(t,e,a){t.exports=a.p+"img/music_movie.6be0714e.png"},"3f3b":function(t,e,a){},"43af":function(t,e,a){},"4e43":function(t,e,a){t.exports=a.p+"img/Pr_Logo.ec25326a.svg"},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Top"}},[a("mq-layout",{attrs:{mq:["xl"]}},[a("Sidebar")],1),a("mq-layout",{attrs:{mq:["l","m","s","xs"]}},[a("Hamburger")],1),a("transition",{attrs:{mode:"out-in"},on:{"before-enter":t.beforeEnter}},[a("router-view")],1),a("Topbtn"),a("footer",[a("p",{staticClass:"copyright",domProps:{innerHTML:t._s(t.copy+" "+t.now+" "+t.copyright)}})])],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"side"},[a("ul",[a("li",[a("router-link",{staticClass:"page",attrs:{to:"/","active-class":"pageActive",exact:""}},[a("span",[t._v("Top")])])],1),a("li",[a("router-link",{staticClass:"page",attrs:{to:"/Gallery","active-class":"pageActive",exact:""}},[a("span",[t._v("Gallery")])])],1),a("li",[a("a",{attrs:{href:"https://twitter.com/HLC012",target:"_blank",rel:"noopener"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 490 398.04"}},[a("defs"),a("path",{attrs:{fill:"#353535",d:"M489.22 47.9c.18-.27.39-.51.57-.78a200.09 200.09 0 01-45.47 13.9c-3.79.57-7.6 1.06-11.46 1.36a100.81 100.81 0 0037.65-41.48 107.46 107.46 0 006-13.09l-.59.31c.08-.26.24-.49.32-.76a201.1 201.1 0 01-63.81 24.38 100.42 100.42 0 00-171.55 89.8c.09.62.14 1.22.22 1.84A284.81 284.81 0 0153 39.33a279.77 279.77 0 01-18.48-20.68c0 .05 0 .1-.07.15l-.37-.41a100.23 100.23 0 0018 123.47 107 107 0 0012.38 10.62 100.22 100.22 0 01-44.78-12.46v1.26c0 40.49 24.12 75.11 58.63 91a102.24 102.24 0 0021.09 7.68 100.33 100.33 0 01-25.58 3.35 99.81 99.81 0 01-16.7-1.59c-.56-.16-1.17-.2-1.72-.38 0 .08.07.15.09.22-.19 0-.4 0-.58-.06a100.68 100.68 0 0077.78 68.2 105 105 0 0015.66 1.9A201.6 201.6 0 0124 354.3c-6.52 0-12.91-.53-19.27-1.13-1.47-.26-3-.36-4.43-.71.28.17.58.32.85.5-.37 0-.75 0-1.12-.07A284.35 284.35 0 00154 398.02c102.16 0 178.56-46.81 226.63-111 .15-.22.33-.41.49-.62a299.2 299.2 0 0012.89-19c.83-1.32 1.76-2.58 2.57-3.91a297.4 297.4 0 0010.4-18.9c.82-1.59 1.74-3.12 2.53-4.73q5.72-11.66 10.34-23.66l.12-.28c13.13-34 20-69.5 20-103.74q0-6.54-.29-13A203.86 203.86 0 00481 59.08c3.08-3.77 6.13-7.56 9-11.49l-.78.31z"}})]),a("span",{staticClass:"ring"})])]),a("li",[a("a",{attrs:{href:"https://www.instagram.com/h0l1c2/",target:"_blank",rel:"noopener"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 486.26 486.49"}},[a("defs"),a("path",{attrs:{fill:"#353535",d:"M484.1 351.96c-1.46 30.69-10 59.4-29.72 83.85-22 27.21-51.1 42.21-85.21 46.29-24.73 3-49.8 3.64-74.73 4-39.66.59-79.33.44-119-.11-24.43-.33-49-.34-72.95-6.55-54.65-14.19-87.23-49.59-97.2-104.69-3.8-21-4.49-42.72-4.82-64.14-.68-44.82-.54-89.67-.06-134.47.26-24.78.28-49.71 6.63-74 14.25-54.41 49.6-86.86 104.47-96.82 21-3.81 42.71-4.51 64.12-4.84 45-.7 90-.56 135-.07 24.61.26 49.37.3 73.45 6.6 54.4 14.22 86.92 49.51 96.91 104.4 3.81 21 4.15 42.71 4.89 64.13.79 22.64.18 45.33.18 68zm-42-109.08c0-20.16.39-40.34-.12-60.5-.48-19-.95-38-3.14-56.82-4.85-41.72-30-69.31-70.58-76.7-17.58-3.2-35.75-4-53.68-4.3-44-.62-88-.58-132-.19a541.48 541.48 0 00-56.82 3.08c-42 4.84-69.66 30.09-77 70.87-3.13 17.44-4 35.44-4.24 53.2-.61 44.16-.58 88.34-.18 132.5a533.55 533.55 0 003.11 56.83c4.85 41.71 30 69.31 70.58 76.7 17.58 3.2 35.75 4 53.68 4.29 44 .63 88 .59 132 .2 19-.17 38-1.19 56.82-3.09 18.34-1.86 35.24-8.24 49.51-20.61 20.13-17.46 28.48-40.56 29.81-66.05"}}),a("path",{attrs:{fill:"#353535",d:"M242.91 368.14c-69 0-124.76-56.06-124.69-125.34.07-69 56.1-124.66 125.43-124.59 68.92.07 124.54 56.2 124.44 125.58-.1 68.72-56.16 124.41-125.18 124.35zm81.12-124.8c0-44.35-36.25-81-80.12-81-44.88 0-81.6 36-81.63 80 0 45.14 36 81.77 80.37 81.77 44.94.03 81.38-36.17 81.38-80.77z"}}),a("path",{attrs:{fill:"#353535",d:"M373.03 84.23a29.3 29.3 0 01-.12 58.6c-16.06.11-29.66-13.59-29.41-29.65a29.4 29.4 0 0129.53-28.95z"}})]),a("span",{staticClass:"ring1"})])]),a("li",[a("a",{attrs:{href:"#mailgo","data-address":"h0l1c.biz","data-domain":"gmail.com"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 490 358.26"}},[a("defs"),a("path",{attrs:{fill:"#353535",d:"M475.23 0H14.77A14.78 14.78 0 000 14.79v29.08l245 164.18L490 43.86V14.79A14.78 14.78 0 00475.23 0z"}}),a("path",{attrs:{fill:"#353535",d:"M0 104.5v194.63a59.1 59.1 0 0059.13 59.11h371.74A59.1 59.1 0 00490 299.13V104.48L245 268.67z"}})]),a("span",{staticClass:"ring2"})])])])])},o=[],l=(a("2dae"),a("2877")),c={},u=Object(l["a"])(c,r,o,!1,null,null,null),d=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"scroll-lock",rawName:"v-scroll-lock",value:t.look,expression:"look"}],attrs:{id:"headerWrap"}},[a("div",{staticClass:"js-modal-bk",class:{active:t.modal_bk},on:{click:t.modalBkClick}}),a("header",{staticClass:"header",class:{active:t.bgOpacty}},[a("div",{staticClass:"headerInner"},[a("div",{staticClass:"headerMenu",class:{active:t.headerMenu_state},attrs:{id:"js-open-menu"},on:{click:t.mainMenuToggle}},[a("span",{staticClass:"headerMenuLine"}),a("span",{staticClass:"headerMenuLine"}),a("span",{staticClass:"headerMenuLine"})]),a("div",{staticClass:"headerMenuInner",class:{active:t.headerMenu_state},on:{click:t.modalBkClick}},[a("ul",{staticClass:"headerMenuList"},[a("li",{staticClass:"menuText"},[a("router-link",{attrs:{to:"/","active-class":"currentPage",exact:""}},[a("span",[t._v("Top")])])],1),a("li",{staticClass:"menuText"},[a("router-link",{attrs:{to:"/Gallery","active-class":"currentPage",exact:""}},[a("span",[t._v("Gallery")])])],1)]),a("hr"),a("ul",{staticClass:"snsIcon"},[a("li",[a("a",{attrs:{href:"https://twitter.com/HLC012",target:"_blank",rel:"noopener"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 490 398.04"}},[a("defs"),a("path",{attrs:{fill:"#fafafa",d:"M489.22 47.9c.18-.27.39-.51.57-.78a200.09 200.09 0 01-45.47 13.9c-3.79.57-7.6 1.06-11.46 1.36a100.81 100.81 0 0037.65-41.48 107.46 107.46 0 006-13.09l-.59.31c.08-.26.24-.49.32-.76a201.1 201.1 0 01-63.81 24.38 100.42 100.42 0 00-171.55 89.8c.09.62.14 1.22.22 1.84A284.81 284.81 0 0153 39.33a279.77 279.77 0 01-18.48-20.68c0 .05 0 .1-.07.15l-.37-.41a100.23 100.23 0 0018 123.47 107 107 0 0012.38 10.62 100.22 100.22 0 01-44.78-12.46v1.26c0 40.49 24.12 75.11 58.63 91a102.24 102.24 0 0021.09 7.68 100.33 100.33 0 01-25.58 3.35 99.81 99.81 0 01-16.7-1.59c-.56-.16-1.17-.2-1.72-.38 0 .08.07.15.09.22-.19 0-.4 0-.58-.06a100.68 100.68 0 0077.78 68.2 105 105 0 0015.66 1.9A201.6 201.6 0 0124 354.3c-6.52 0-12.91-.53-19.27-1.13-1.47-.26-3-.36-4.43-.71.28.17.58.32.85.5-.37 0-.75 0-1.12-.07A284.35 284.35 0 00154 398.02c102.16 0 178.56-46.81 226.63-111 .15-.22.33-.41.49-.62a299.2 299.2 0 0012.89-19c.83-1.32 1.76-2.58 2.57-3.91a297.4 297.4 0 0010.4-18.9c.82-1.59 1.74-3.12 2.53-4.73q5.72-11.66 10.34-23.66l.12-.28c13.13-34 20-69.5 20-103.74q0-6.54-.29-13A203.86 203.86 0 00481 59.08c3.08-3.77 6.13-7.56 9-11.49l-.78.31z"}})])])]),a("li",[a("a",{attrs:{href:"https://www.instagram.com/h0l1c2/",target:"_blank",rel:"noopener"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 486.26 486.49"}},[a("defs"),a("path",{attrs:{fill:"#fafafa",d:"M484.1 351.96c-1.46 30.69-10 59.4-29.72 83.85-22 27.21-51.1 42.21-85.21 46.29-24.73 3-49.8 3.64-74.73 4-39.66.59-79.33.44-119-.11-24.43-.33-49-.34-72.95-6.55-54.65-14.19-87.23-49.59-97.2-104.69-3.8-21-4.49-42.72-4.82-64.14-.68-44.82-.54-89.67-.06-134.47.26-24.78.28-49.71 6.63-74 14.25-54.41 49.6-86.86 104.47-96.82 21-3.81 42.71-4.51 64.12-4.84 45-.7 90-.56 135-.07 24.61.26 49.37.3 73.45 6.6 54.4 14.22 86.92 49.51 96.91 104.4 3.81 21 4.15 42.71 4.89 64.13.79 22.64.18 45.33.18 68zm-42-109.08c0-20.16.39-40.34-.12-60.5-.48-19-.95-38-3.14-56.82-4.85-41.72-30-69.31-70.58-76.7-17.58-3.2-35.75-4-53.68-4.3-44-.62-88-.58-132-.19a541.48 541.48 0 00-56.82 3.08c-42 4.84-69.66 30.09-77 70.87-3.13 17.44-4 35.44-4.24 53.2-.61 44.16-.58 88.34-.18 132.5a533.55 533.55 0 003.11 56.83c4.85 41.71 30 69.31 70.58 76.7 17.58 3.2 35.75 4 53.68 4.29 44 .63 88 .59 132 .2 19-.17 38-1.19 56.82-3.09 18.34-1.86 35.24-8.24 49.51-20.61 20.13-17.46 28.48-40.56 29.81-66.05"}}),a("path",{attrs:{fill:"#fafafa",d:"M242.91 368.14c-69 0-124.76-56.06-124.69-125.34.07-69 56.1-124.66 125.43-124.59 68.92.07 124.54 56.2 124.44 125.58-.1 68.72-56.16 124.41-125.18 124.35zm81.12-124.8c0-44.35-36.25-81-80.12-81-44.88 0-81.6 36-81.63 80 0 45.14 36 81.77 80.37 81.77 44.94.03 81.38-36.17 81.38-80.77z"}}),a("path",{attrs:{fill:"#fafafa5",d:"M373.03 84.23a29.3 29.3 0 01-.12 58.6c-16.06.11-29.66-13.59-29.41-29.65a29.4 29.4 0 0129.53-28.95z"}})])])]),a("li",[a("a",{attrs:{href:"#mailgo","data-address":"contact","data-domain":"h0l1c.work"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 490 358.26"}},[a("defs"),a("path",{attrs:{fill:"#fafafa",d:"M475.23 0H14.77A14.78 14.78 0 000 14.79v29.08l245 164.18L490 43.86V14.79A14.78 14.78 0 00475.23 0z"}}),a("path",{attrs:{fill:"#fafafa",d:"M0 104.5v194.63a59.1 59.1 0 0059.13 59.11h371.74A59.1 59.1 0 00490 299.13V104.48L245 268.67z"}})])])])])])])])])},p=[],m={data(){return{look:!1,headerMenu_state:!1,modal_bk:!1,bgOpacty:!1}},methods:{mainMenuToggle:function(){if(1==this.headerMenu_state)return this.headerMenu_state=!1,this.modal_bk=!1,this.bgOpacty=!1,void(this.look=!1);this.headerMenu_state=!0,this.modal_bk=!0,this.bgOpacty=!0,this.look=!0},modalBkClick:function(){this.headerMenu_state=!1,this.modal_bk=!1,this.bgOpacty=!1,this.look=!1}}},v=m,h=(a("bf7f"),Object(l["a"])(v,f,p,!1,null,null,null)),g=h.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#Top",offset:-60},expression:"{\n    el: '#Top',\n    offset: -60,\n  }"}],staticClass:"topBtn",class:{show:t.show}},[t._m(0)])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#"}},[a("span"),a("span")])}],k={data(){return{show:!1}},mounted(){window.addEventListener("scroll",()=>{this.show=window.scrollY>200})}},C=k,_=(a("7d2c"),Object(l["a"])(C,A,b,!1,null,null,null)),w=_.exports,x={data(){return{copy:"&copy; 2020 -",now:"",copyright:", H0L1C."}},created(){const t=new Date;this.now=t.getFullYear()},components:{Sidebar:d,Hamburger:g,Topbtn:w},methods:{beforeEnter(){this.$root.$emit("triggerScroll")}}},y=x,B=(a("034f"),Object(l["a"])(y,i,n,!1,null,null,null)),I=B.exports,S=a("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main",attrs:{id:"main"}},[a("transition",{attrs:{name:"loadingFade"}},[t.loading?a("div",{staticClass:"loadingAnim"}):t._e()]),a("p",{staticClass:"version"},[t._v("Ver : "+t._s(t.ver))]),a("mq-layout",{attrs:{mq:["xl"]}},[a("Menu")],1),t._m(0),a("About"),a("Work",{attrs:{num:3,worksTitle:t.workTitle}}),a("Skill"),a("Contact")],1)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title",attrs:{id:"Top"}},[a("h1",[t._v("STUDIO H0L1C")]),a("a",{attrs:{href:"#"}},[a("span")])])}],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"menuList"},[a("li",[a("p",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#About",offset:-60},expression:"{\n        el: '#About',\n        offset: -60,\n      }"}],staticClass:"AboutLink"},[t._v(" ABOUT ")])]),a("li",[a("p",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#Work",offset:-60},expression:"{\n        el: '#Work',\n        offset: -60,\n      }"}],staticClass:"WorkLink"},[t._v(" WORKS ")])]),a("li",[a("p",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#Skill",offset:-60},expression:"{\n        el: '#Skill',\n        offset: -60,\n      }"}],staticClass:"SkillLink"},[t._v(" SKILL ")])]),a("li",[a("p",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#Contact",offset:-60},expression:"{\n        el: '#Contact',\n        offset: -60,\n      }"}],staticClass:"ContactLink"},[t._v(" CONTACT ")])])])},T=[],W=(a("efa6"),{}),P=Object(l["a"])(W,O,T,!1,null,null,null),M=P.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about section"},[s("hr"),s("h2",{attrs:{id:"About"}},[t._v("ABOUT")]),s("p",{staticClass:"caption"}),s("div",{staticClass:"myProfile"},[s("div",{staticClass:"icon"},[s("img",{staticClass:"myImg",attrs:{src:a("a289"),alt:"MyIcon",loading:"lazy"}}),s("h3",[t._v("H0L1C")])]),s("div",{staticClass:"profile"},[s("p",[s("br"),t._v(" 1999年生まれ 動画クリエイター / VJ"),s("br"),s("br"),t._v(" 動画作品やWeb・VRコンテンツの制作をしています。"),s("br"),t._v(" また、ライブシステムの開発からオペレーションなども行っています。"),s("br")])])])])}],K=(a("b8ab"),{}),G=Object(l["a"])(K,j,z,!1,null,null,null),N=G.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"work section"},[a("hr"),a("h2",{attrs:{id:"Work"}},[t._v(t._s(t.worksTitle))]),a("p",{staticClass:"caption"},[t._v("2020/11 ~ "+t._s(t.date))]),a("div",{staticClass:"projectList",attrs:{name:"works"}},t._l(t.workList,(function(e){return a("div",{key:e.id,staticClass:"projectItem"},[a("router-link",{staticClass:"projectLink",attrs:{to:"/Product/"+e.id}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"work.image"}],attrs:{loading:"lazy",alt:e.alt}}),a("div",{staticClass:"productName"},[a("h3",[t._v(t._s(e.name))])]),a("p",[t._v(t._s(e.caption))])])],1)})),0),a("div",{staticClass:"moreBtnWrap"},["/"==this.$route.path?a("router-link",{staticClass:"moreBtnLink",attrs:{to:"./Gallery"}},[a("p",{staticClass:"moreBtn"},[t._v(t._s(t.btnText))])]):t._e()],1)])},D=[];const H=[{id:0,name:"KOUSA",time:"2019",image:a("f43b"),alt:"KOUSAサムネイル画像",caption:"VRゲーム / 映像作品の展示と運営",sections:[{title:"KOUSA2019",img:"",alt:"KOUSA2019画像",text:"「学生と社会の新しいつながりの場を創り出す」をテーマにした展示会「KOUSA展」の企画・運営団体であるKOUSAに所属。2019年には日本科学未来館にて「KOUSA2019」を2日間に渡って開催し400名を超える方にご来場頂きました。また、運営を行うと共に、出展者としてVRゲームの開発と映像作品の制作に携わり実際に展示を行いました。"},{title:"VR × 2D",img:a("7435"),alt:"ペタアニメーション画像",text:"VRプレイヤーと2Dプレイヤーに分かれて戦う対戦型パズルゲーム「MagicBlock」では2Dプレイヤーが操作するキャラクターアニメーションの他、広報・ルール説明用の映像を担当しました。キャラクターアニメーションの制作にはLive2Dを使用しました。"},{title:"Music × Movie",img:a("3d9d"),alt:"映像作品画像",text:"キーボード・クラリネットの生演奏と映像を組み合わせた作品の展示を行いました。二台のプロジェクターを使用して壁一面に映像を映し出し、リアルタイムに演奏と合わせることによって空間全体を演出できるような作品を制作しました。こちらの作品でも映像部分を担当しました。"}]},{id:1,name:"HABAKI",time:"2019/10/31 ~ ",image:a("a61a"),alt:"HABAKIサムネイル画像",caption:"VTuberの作成と運営",sections:[{title:"Project",img:a("b403"),alt:"HABAKIロゴ",text:"学生が立案したテーマを元に1年間かけて共同研究を行う「プロジェクト」という大学の講義にて取り組んでいる作品です。視聴者との双方向コミュニケーションを通して存在が変化していくVTuberというコンテンツを取り上げ、その技術と表現についての研究を行っています。また、実際にVTuberを制作しマルチメディア展開に挑戦しています。\nチーム内では主に映像編集・配信サポート・デザインを担当しています。"},{title:"Video & Recording",img:"",alt:"むぎむしゃアニメーション画像",text:"元々は対面形式で収録や作品制作を行う予定でしたが新型コロナウイルス感染拡大の影響を受け、収録から投稿までの全てのワークフローをオンライン上で完結できるよう整備を行いました。\nこれまでに投稿されている動画は私を含めた3名のメンバーで制作されています。編集は主にエフェクトやキャラクターアニメーションが登場する部分に加え最近では音声処理を担当しています。\nまた、2020/10/04に行われた初回配信も遠隔地にいる演者2名の映像・音声を集約し配信を行うことで対応を行っています。この配信に向け、遅延・画質検証などを行い当日は映像と音声の集約・配信を担当しました。",movie:"O22rcdDdT8s",linktext:"YouTube",link:"https://www.youtube.com/channel/UC6sjImHi5w_9mVVfkXauF3g?view_as=subscriber"},{title:"Website",img:a("de92"),alt:"HABAKIWebサイト画像",text:"現在、活動内容を公開する場 / プロデュースしているキャラクター（天ノ葉つむぎ・武者丸）に関しての情報をまとめる場として公式サイトを制作しています。本サイトの制作ではデザインを担当しています。",linktext:"鈨組 Official Site",link:"https://habakigumi.netlify.app/"}]},{id:2,name:"PictIce",time:"2019/05/27 ~ 07/29",image:a("9fda"),alt:"PictIceサムネイル画像",caption:"コミュニケーションデザインの提案",sections:[{title:"Concept",img:a("3388"),alt:"PictIceロゴ画像",text:"2020年に開催予定であった東京オリンピック・パラリンピックを想定したコミュニケーションデザインの提案を行う課題で取り組んだ作品です。シンクロナイズドスイミングから名称が変更されたアーティスティックスイミングをより楽しんでもらうためのデザインとして「競技中の選手の形をデフォルメしたアイスキューブ」を提案しました。\n会場内で販売されているドリンクに入れることを想定し、手元でも競技を再現して楽しめ身近に感じることができることをコンセプトに制作しました。"},{title:"Website",img:a("d6a8"),alt:"PictIceWebサイト画像",text:"提案したデザインを紹介するためのWebサイトのデザイン・制作を行いました。「アイスキューブ」という冷やすことを目的とした製品に合わせ、ユーザーのスクロールに応じて温度が下がるような表現を取り入れたデザインにまとめました。",linktext:"PictIce-WebSite",link:"https://h0l1c.github.io/IxDFinalWeb/"}]},{id:3,name:"SUISEI MUSIC POWER LIVE ",time:"2019/05/27 ~ 07/29",image:a("9fda"),alt:"PictIceサムネイル画像",caption:"コミュニケーションデザインの提案",sections:[{title:"Concept",img:a("3388"),alt:"PictIceロゴ画像",text:"2020年に開催予定であった東京オリンピック・パラリンピックを想定したコミュニケーションデザインの提案を行う課題で取り組んだ作品です。シンクロナイズドスイミングから名称が変更されたアーティスティックスイミングをより楽しんでもらうためのデザインとして「競技中の選手の形をデフォルメしたアイスキューブ」を提案しました。\n会場内で販売されているドリンクに入れることを想定し、手元でも競技を再現して楽しめ身近に感じることができることをコンセプトに制作しました。"},{title:"Website",img:a("d6a8"),alt:"PictIceWebサイト画像",text:"提案したデザインを紹介するためのWebサイトのデザイン・制作を行いました。「アイスキューブ」という冷やすことを目的とした製品に合わせ、ユーザーのスクロールに応じて温度が下がるような表現を取り入れたデザインにまとめました。",linktext:"Site：PictIceWeb",link:"https://h0l1c.github.io/IxDFinalWeb/"}]},{id:4,name:"PictIce",time:"2019/05/27 ~ 07/29",image:a("9fda"),alt:"PictIceサムネイル画像",caption:"コミュニケーションデザインの提案",sections:[{title:"Concept",img:a("3388"),alt:"PictIceロゴ画像",text1:"2020年に開催予定であった東京オリンピック・パラリンピックを想定したコミュニケーションデザインの提案を行う課題で取り組んだ作品です。シンクロナイズドスイミングから名称が変更されたアーティスティックスイミングをより楽しんでもらうためのデザインとして「競技中の選手の形をデフォルメしたアイスキューブ」を提案しました。",text2:"会場内で販売されているドリンクに入れることを想定し、手元でも競技を再現して楽しめ身近に感じることができることをコンセプトに制作しました。"},{title:"Website",img:a("d6a8"),alt:"PictIceWebサイト画像",text1:"提案したデザインを紹介するためのWebサイトのデザイン・制作を行いました。「アイスキューブ」という冷やすことを目的とした製品に合わせ、ユーザーのスクロールに応じて温度が下がるような表現を取り入れたデザインにまとめました。",linktext:"Site：PictIceWeb",link:"https://h0l1c.github.io/IxDFinalWeb/"}]},{id:5,name:"PictIce",time:"2019/05/27 ~ 07/29",image:a("9fda"),alt:"PictIceサムネイル画像",caption:"コミュニケーションデザインの提案",sections:[{title:"Concept",img:a("3388"),alt:"PictIceロゴ画像",text1:"2020年に開催予定であった東京オリンピック・パラリンピックを想定したコミュニケーションデザインの提案を行う課題で取り組んだ作品です。シンクロナイズドスイミングから名称が変更されたアーティスティックスイミングをより楽しんでもらうためのデザインとして「競技中の選手の形をデフォルメしたアイスキューブ」を提案しました。",text2:"会場内で販売されているドリンクに入れることを想定し、手元でも競技を再現して楽しめ身近に感じることができることをコンセプトに制作しました。"},{title:"Website",img:a("d6a8"),alt:"PictIceWebサイト画像",text1:"提案したデザインを紹介するためのWebサイトのデザイン・制作を行いました。「アイスキューブ」という冷やすことを目的とした製品に合わせ、ユーザーのスクロールに応じて温度が下がるような表現を取り入れたデザインにまとめました。",linktext:"Site：PictIceWeb",link:"https://h0l1c.github.io/IxDFinalWeb/"}]}];var Q={data(){return{works:H}},fetch(t){return H},find(t){return H.find(e=>e.id===t)},asyncFind(t,e){setTimeout(()=>{e(H.find(e=>e.id===t))},0)}},U={data(){return{date:"2021/02",btnText:"AllWorks & Events"}},methods:{updateTime:function(){let t=new Date;this.date=this.zeroPadding(t.getFullYear(),4)+"/"+this.zeroPadding(t.getMonth()+1,2)},zeroPadding:function(t,e){let a="";for(var s=0;s<e;s++)a+="0";return(a+t).slice(-e)}},mounted:function(){window.onload=this.updateTime},computed:{workList(){return this.works.slice(0,this.num)}},props:["num","worksTitle"],mixins:[Q]},F=U,R=(a("7760"),Object(l["a"])(F,V,D,!1,null,null,null)),q=R.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skill section"},[a("hr"),a("h2",{attrs:{id:"Skill"}},[t._v("SKILL")]),a("div",{staticClass:"caption"}),a("intersect",{on:{enter:t.play}},[a("transition-group",{staticClass:"skillList",attrs:{name:"skillList"}},t._l(t.skillList,(function(e){return a("div",{key:e.title,staticClass:"skillItem",class:{graphAnim:t.view}},[a("div",{staticClass:"graph"},[a("svg",[a("circle",{attrs:{cx:"100",cy:"100",r:"60"}}),a("circle",{attrs:{cx:"100",cy:"100",r:"60"}})]),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"skill.img"}],staticClass:"skillImage",attrs:{loading:"lazy",alt:e.alt}})]),a("div",{staticClass:"graphTitle"},[a("span",{staticClass:"skillTitle"},[t._v(t._s(e.title))])])])})),0)],1)],1)},X=[],Z=a("760e"),J={components:{Intersect:Z["a"]},data:function(){return{view:!1,skillList:[{title:"AfterEffects",img:a("cf83"),alt:"After Effects icon"},{title:"PremierePro",img:a("4e43"),alt:"Premiere Pro icon"},{title:"CharacterAnimator",img:a("e9fb"),alt:"Character Animator icon"},{title:"TouchDesigner",img:a("2f46"),alt:"TouchDesigner icon"},{title:"XD",img:a("d28f"),alt:"Adobe XD icon"},{title:"HTML5",img:a("d0bb"),alt:"HTML5 icon"},{title:"CSS3",img:a("a1a0"),alt:"CSS3 icon"},{title:"Vue.js",img:a("591d"),alt:"Vue.js icon"}]}},methods:{play:function(){this.view=!0},setFilter:function(t){this.currentFilter=t}}},$=J,tt=(a("c03d"),Object(l["a"])($,Y,X,!1,null,null,null)),et=tt.exports,at=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact section"},[a("hr"),a("h2",{attrs:{id:"Contact"}},[t._v("CONTACT")]),a("p",{staticClass:"caption"},[t._v("ご依頼などは、TwitterDM・メールにてお願い致します。")]),a("div",{staticClass:"contactList"},[a("div",{staticClass:"contactItem leftItem"},[a("a",{attrs:{href:"https://twitter.com/HLC012",target:"_blank",rel:"noopener"}},[a("h3",[t._v("TwitterDM")])])]),a("div",{staticClass:"contactItem rightItem"},[a("a",{attrs:{href:"#mailgo","data-address":"h0l1c.biz","data-domain":"gmail.com"}},[a("h3",[t._v("Mail")])])])])])}],it=(a("610c"),{}),nt=Object(l["a"])(it,at,st,!1,null,null,null),rt=nt.exports,ot={data(){return{loading:!0,ver:"2.0.0",workTitle:"WORKS"}},mounted(){setTimeout(()=>{this.loading=!1},300)},components:{Menu:M,About:N,Work:q,Skill:et,Contact:rt}},lt=ot,ct=(a("599a"),Object(l["a"])(lt,E,L,!1,null,null,null)),ut=ct.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"topicPath"},[a("li",{staticClass:"topicPathLink"},[a("router-link",{attrs:{to:"/"}},[a("p",[t._v("Top")])])],1),a("li",{staticClass:"topicPathLink"},[a("router-link",{attrs:{to:"/Gallery"}},[a("p",[t._v("Gallery")])])],1),a("li",{staticClass:"topicPathCurrent"},[a("p",[t._v(t._s(t.works[t.id].name))])])]),a("div",{directives:[{name:"scroll-lock",rawName:"v-scroll-lock",value:t.scrollLook,expression:"scrollLook"}],staticClass:"workBody",class:{productBody:t.move,productBodyActive:t.moved},attrs:{id:"workmain"}},[a("h1",{staticClass:"productTitle"},[t._v(t._s(t.works[t.id].name))]),a("div",{staticClass:"description"},[a("p",[t._v("制作期間： "+t._s(t.works[t.id].time))])]),a("div",{staticClass:"productImage",style:{backgroundImage:"url("+t.works[t.id].image+")"}}),a("div",{staticClass:"sectionList"},t._l(t.works[t.id].sections,(function(e,s){return a("div",{key:e.title,staticClass:"articleSection"},[e.title?a("h2",[t._v(t._s(e.title))]):t._e(),a("div",{staticClass:"article"},[e.img?a("div",{staticClass:"topParts"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"section.img"}],staticClass:"articleImg",attrs:{loading:"lazy",alt:e.alt},on:{click:function(e){return t.openModal(s)}}})]):t._e(),e.movie?a("youtube",{staticClass:"articleMovie",attrs:{resize:!0,fitParent:!0,"video-id":e.movie}}):t._e(),a("div",{staticClass:"bottomParts"},[e.text?a("p",{staticClass:"sectionText"},[t._v(" "+t._s(e.text)+" ")]):t._e(),e.link?a("a",{attrs:{href:e.link,target:"_blank",rel:"noopener"}},[a("p",{staticClass:"sectionLink"},[t._v(t._s(e.linktext))])]):t._e()])],1)])})),0),a("div",{staticClass:"btnWrap"},[a("router-link",{attrs:{to:"/",exact:""}},[a("p",{staticClass:"backBtn backTop"},[t._v("Back to Top")])]),a("router-link",{attrs:{to:"/Gallery",exact:""}},[a("p",{staticClass:"backBtn backWorks"},[t._v("Other Works")])])],1),t.popupActive?a("div",{staticClass:"popup",on:{click:function(e){return t.closeModal()}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.works[t.id].sections[t.num].img,expression:"works[id].sections[num].img"}],staticClass:"zoomImg",attrs:{alt:t.works[t.id].sections[t.num].alt},on:{click:function(e){return t.closeModal()}}}),a("div",{staticClass:"closeBtn",on:{click:function(e){return t.closeModal()}}},[a("p",[t._v("CLOSE")])]),a("div",{staticClass:"popupBG"})]):t._e()])])},ft=[],pt={mixins:[Q],props:{id:Number},data:function(){return{num:"",popupActive:!1,scrollLook:!1,move:!1,moved:!1,entered:!1}},methods:{openModal(t){this.num=t,this.popupActive=!0,this.scrollLook=!0},closeModal(){this.popupActive=!1,this.scrollLook=!1},enter(){this.move=!0},leave(){this.move=!1,this.moved=!0,setTimeout(()=>{this.moved=!1},500)}},watch:{entered:function(){this.entered?this.enter():this.leave()}},mounted(){this.$router.beforeResolve((t,e,a)=>{scrollTo(0,0),this.entered=!0,a()}),this.$router.afterEach((t,e,a)=>{setTimeout(()=>{this.entered=!1},260)})}},mt=pt,vt=(a("e903"),Object(l["a"])(mt,dt,ft,!1,null,null,null)),ht=vt.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mq-layout",{attrs:{mq:["xl"]}},[a("WorkMenu")],1),a("Work",{attrs:{num:6,worksTitle:t.workTitle}}),a("hr"),a("Events"),a("div",{staticClass:"btnWrap"},[a("router-link",{attrs:{to:"/",exact:""}},[a("p",{staticClass:"backBtn backTop"},[t._v("Back to Top")])])],1)],1)},At=[],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"menuList"},[a("li",[a("p",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#Work",offset:-60},expression:"{\n        el: '#Work',\n        offset: -60,\n      }"}],staticClass:"allWorks"},[t._v(" ALL WORKS ")])]),a("li",[a("p",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#events",offset:-60},expression:"{\n        el: '#events',\n        offset: -60,\n      }"}],staticClass:"events"},[t._v(" EVENTS ")])])])},kt=[],Ct=(a("f9fd"),{}),_t=Object(l["a"])(Ct,bt,kt,!1,null,null,null),wt=_t.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section"},[a("h2",{attrs:{id:"events"}},[t._v("EVENTS")]),a("p",{staticClass:"caption"},[t._v("お手伝いさせて頂いたイベントの一覧です。")]),a("div",{staticClass:"eventsList"},[a("div",{staticClass:"tabs"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tabShow,expression:"tabShow"}],attrs:{type:"radio",name:"tab",id:"tab1",value:"1"},domProps:{checked:t._q(t.tabShow,"1")},on:{change:function(e){t.tabShow="1"}}}),a("label",{attrs:{for:"tab1"}},[t._v(t._s(t.year))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tabShow,expression:"tabShow"}],attrs:{type:"radio",name:"tab",id:"tab2",value:"2"},domProps:{checked:t._q(t.tabShow,"2")},on:{change:function(e){t.tabShow="2"}}}),a("label",{attrs:{for:"tab2"}},[t._v(t._s(t.year+1))])]),a("div",{staticClass:"eventsContents"},[t.loading?a("div",{staticClass:"loading"},[t._m(0)]):t._e(),t.error?a("div",{staticClass:"loading"},[a("p",{staticClass:"errorMessage"},[t._v("情報の取得に失敗しました。")])]):t._e(),1==t.tabShow?a("table",[t._m(1),t._l(t.contents2020,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.year)+"/"+t._s(e.date))]),a("td",{staticClass:"eventsLink"},[a("a",{attrs:{href:e.url,target:"_blank",rel:"noopener"}},[t._v(" "+t._s(e.event)+" ")])]),a("td",[t._v(t._s(e.position))])])}))],2):2==t.tabShow?a("table",[t._m(2),t._l(t.contents2021,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.year)+"/"+t._s(e.date))]),a("td",{staticClass:"eventsLink"},[a("a",{attrs:{href:e.url,target:"_blank",rel:"noopener"}},[t._v(" "+t._s(e.event)+" ")])]),a("td",[t._v(t._s(e.position))])])}))],2):t._e()])])])},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner"},[a("span",[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("日付")]),a("th",[t._v("イベント")]),a("th",[t._v("担当")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("日付")]),a("th",[t._v("イベント")]),a("th",[t._v("担当")])])])}],Bt=a("bc3a"),It=a.n(Bt);const St="https://script.google.com/macros/s/AKfycbyhba3Or-O040D-KKmABIu8Pc0jfAXE6zsN4tZPjdnw4VQhB3UGWG78/exec";var Et={data(){return{year:2020,tabShow:1,loading:!0,error:!1,list:[]}},computed:{contents2020:function(){return this.list.filter((function(t){return t.year==this.year}),this)},contents2021:function(){return this.list.filter((function(t){return t.year==this.year+1}),this)}},mounted(){this.getData()},methods:{getData(){It.a.get(St).then(t=>{this.loading=!1,this.list=t.data}).catch(t=>{this.error=!0})}}},Lt=Et,Ot=(a("e456"),Object(l["a"])(Lt,xt,yt,!1,null,null,null)),Tt=Ot.exports,Wt={data(){return{loading:!0,workTitle:"ALL WORKS"}},mounted(){setTimeout(()=>{this.loading=!1},300)},components:{WorkMenu:wt,Work:q,Events:Tt}},Pt=Wt,Mt=Object(l["a"])(Pt,gt,At,!1,null,null,null),jt=Mt.exports,zt=a("caf9"),Kt=a("f40c"),Gt=a("660e"),Nt=a("e0ec"),Vt=a.n(Nt);a("a30e");let Dt=a("f13c");s["a"].use(zt["a"],{preLoad:1.3,attempt:1,throttleWait:50}),s["a"].use(Gt["a"],{breakpoints:{xs:321,s:416,m:641,l:960,xl:1/0},defaultBreakpoint:"l"}),s["a"].use(Dt,{container:"body",duration:50,easing:"ease-in",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),s["a"].use(Kt["a"],{bodyScrollOptions:{reserveScrollBarGap:!0}}),s["a"].use(Vt.a),s["a"].use(S["a"]);var Ht=new S["a"]({mode:"history",routes:[{path:"/",name:"Top",component:ut},{path:"/Gallery",name:"Gallery",component:jt},{path:"/Product/:id",component:ht,props:t=>({id:Number(t.params.id)})}],scrollBehavior(t,e,a){return new Promise(e=>{this.app.$root.$once("triggerScroll",()=>{let s={x:0,y:0};a&&(s=a),t.hash&&(s={selector:t.hash}),e(s)})})}}),Qt=a("2106"),Ut=a.n(Qt),Ft=a("cf42"),Rt=a.n(Ft),qt=a("9483");Object(qt["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),s["a"].config.productionTip=!1,new s["a"]({router:Ht,axios:It.a,VueAxios:Ut.a,css:Rt.a,render:function(t){return t(I)}}).$mount("#app")},"591d":function(t,e,a){t.exports=a.p+"img/Vue_Logo.4aa7d416.svg"},"599a":function(t,e,a){"use strict";var s=a("2fea"),i=a.n(s);i.a},"5a50":function(t,e,a){},"610c":function(t,e,a){"use strict";var s=a("0367"),i=a.n(s);i.a},6265:function(t,e,a){},7435:function(t,e,a){t.exports=a.p+"img/peta.70ffb894.gif"},7760:function(t,e,a){"use strict";var s=a("200b"),i=a.n(s);i.a},"7d2c":function(t,e,a){"use strict";var s=a("1984"),i=a.n(s);i.a},"85ec":function(t,e,a){},"8d50":function(t,e,a){},"98e0":function(t,e,a){},"9fda":function(t,e,a){t.exports=a.p+"img/PICTICE_thumbnail.27f3a81f.png"},a1a0:function(t,e,a){t.exports=a.p+"img/CSS_Logo.14c504d9.svg"},a289:function(t,e,a){t.exports=a.p+"img/HLC_IO.9ab24bb0.png"},a61a:function(t,e,a){t.exports=a.p+"img/HABAKI_thumbnail.e1658a8d.png"},b403:function(t,e,a){t.exports=a.p+"img/HABAKILogo.485bcfe3.png"},b8ab:function(t,e,a){"use strict";var s=a("98e0"),i=a.n(s);i.a},bf7f:function(t,e,a){"use strict";var s=a("43af"),i=a.n(s);i.a},c03d:function(t,e,a){"use strict";var s=a("6265"),i=a.n(s);i.a},cf42:function(t,e,a){},cf83:function(t,e,a){t.exports=a.p+"img/Ae_Logo.01a74cbe.svg"},d0bb:function(t,e,a){t.exports=a.p+"img/HTML_Logo.ff6521c7.svg"},d28f:function(t,e,a){t.exports=a.p+"img/Xd_Logo.d549a894.svg"},d6a8:function(t,e,a){t.exports=a.p+"img/PictIceWeb.5163b73c.png"},de92:function(t,e,a){t.exports=a.p+"img/HABAKI_web.65a9cbc4.png"},e456:function(t,e,a){"use strict";var s=a("5a50"),i=a.n(s);i.a},e903:function(t,e,a){"use strict";var s=a("3f3b"),i=a.n(s);i.a},e9fb:function(t,e,a){t.exports=a.p+"img/Ch_Logo.604e1a99.svg"},efa6:function(t,e,a){"use strict";var s=a("8d50"),i=a.n(s);i.a},f43b:function(t,e,a){t.exports=a.p+"img/KOUSA_thumbnail.cfeaa0e9.png"},f9fd:function(t,e,a){"use strict";var s=a("313c"),i=a.n(s);i.a}});
//# sourceMappingURL=app.ab762333.js.map