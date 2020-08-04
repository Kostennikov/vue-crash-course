(function(e){function t(t){for(var n,s,o=t[0],u=t[1],l=t[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"025e":function(e,t,r){},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"126b":function(e,t,r){"use strict";var n=r("025e"),a=r.n(n);a.a},"39b7":function(e,t,r){"use strict";var n=r("72d2"),a=r("ad55"),i=r("2877"),s=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,"72e2c59a",null);t["default"]=s.exports},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Layout")],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"layout"}},[r("Header"),r("router-view")],1)},o=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[e._m(0),r("div",{staticClass:"header__link"},[r("router-link",{staticClass:"link",attrs:{to:"/",exact:""}},[e._v("Home")]),r("router-link",{staticClass:"link",attrs:{to:"/About"}},[e._v("About")])],1)])},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header__logo"},[r("h2",{staticClass:"header__png"},[e._v("PNG optimize · PNG to WebP")])])}],c=(r("126b"),r("2877")),p={},f=Object(c["a"])(p,u,l,!1,null,"5b549472",null),d=f.exports,v={name:"Layout",components:{Header:d}},m=v,h=Object(c["a"])(m,s,o,!1,null,null,null),_=h.exports,b={name:"App",components:{Layout:_}},g=b,y=(r("034f"),Object(c["a"])(g,a,i,!1,null,null,null)),C=y.exports,j=r("8c4f"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("h1",{staticClass:"cover-heading"},[e._v("Online PNG optimizer by Sijeko")]),r("section",{staticClass:"target"},[r("img",{staticClass:"icon-download",attrs:{src:"https://png.sijeko.ru/img/galleryIcon.png",alt:"Image"}}),r("p",[e._v("Drop your PNG files here!")]),e._m(0),r("div",{attrs:{id:"app"}},[r("input",{attrs:{type:"file",id:"fileInput",multiple:""},on:{change:e.fileChange}}),r("button",{attrs:{id:"send"},on:{click:e.sendFiles}},[e._v("send")]),r("div",{attrs:{id:"output"}},[r("h2",[e._v("Last optimized")]),e._l(e.filesReversed,(function(t){return r("div",{key:t.id},[100===e.progress?r("h1",[e._v("Completed")]):r("h1",[e._v("Not Completed")]),r("img",{class:["image",{image_ok:"ok"==t.status,image_bad:"bad"==t.status}],attrs:{src:t.base64||t.link,alt:""}}),e.showProgress?r("div",{staticClass:"progress",style:"width: "+e.progress+"%"}):e._e(),r("p",[e._v(e._s(t.name))])])}))],2)])]),r("div",{staticClass:"gallery"},[r("ul",[r("Gallery")],1)])])},O=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("small",[e._v("Up to 4 MB each one.")])])}],k=(r("fb6a"),r("b0c0"),r("39b7")),x={components:{Gallery:k["default"]},props:["progress"],data:function(){return{files:[]}},computed:{filesReversed:function(){return this.files.slice().reverse()}},methods:{fileChange:function(e){for(var t=e.target,r=0,n=t.files.length;r<n;r++)this.prepareFile(t.files[r])},prepareFile:function(e){var t=new FileReader,r={binaryFile:e,name:e.name};this.files.push(r),t.addEventListener("load",(function(e){var t=e.target.result;n["a"].set(r,"base64",t)})),t.readAsDataURL(e)},sendFiles:function(){var e=this;this.progress=0,this.showProgress=!0;var t=setInterval((function(){e.progress+=25,e.progress>=100&&clearInterval(t)}),500)}}},P=x,E=(r("bf4f"),Object(c["a"])(P,w,O,!1,null,"07bcfb9f",null)),$=E.exports,q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"cover ",attrs:{role:"main"}},[r("h1",{staticClass:"h1 cover-heading"},[e._v("Description of the site")]),r("div",{staticClass:"about-div"},[r("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae deleniti, dicta dignissimos dolorum error ex explicabo in, minus nemo non pariatur quisquam sequi tenetur ullam vitae voluptates. Porro. ")]),r("p",[e._v("Corporis ducimus esse et impedit maxime modi natus optio placeat quam qui quidem quo rerum sit, ut veniam. Asperiores cupiditate dolor dolore et excepturi ipsum minima natus obcaecati possimus sapiente! ")])]),r("h3",[e._v("Contact")]),r("a",{attrs:{href:"mailto:manager@sijeko.ru"}},[e._v("imanager@sijeko.ru")])])}],L=(r("8324"),{}),F=Object(c["a"])(L,q,A,!1,null,"02bbe442",null),G=F.exports;n["a"].use(j["a"]),n["a"].config.productionTip=!1;var S=[{path:"/",component:$},{path:"/About",component:G}],I=new j["a"]({routes:S});new n["a"]({router:I,render:function(e){return e(C)}}).$mount("#app")},5951:function(e,t,r){},"72d2":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("li",{attrs:{id:"new-data"}})])}]},8324:function(e,t,r){"use strict";var n=r("a72c"),a=r.n(n);a.a},"85ec":function(e,t,r){},"9a8c":function(e,t){},a72c:function(e,t,r){},ad55:function(e,t,r){"use strict";var n=r("9a8c"),a=r.n(n);t["default"]=a.a},bf4f:function(e,t,r){"use strict";var n=r("5951"),a=r.n(n);a.a}});
//# sourceMappingURL=app.13641d81.js.map