(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{252:function(e,t,n){e.exports={}},256:function(e,t,n){"use strict";n(252)},277:function(e,t,n){"use strict";n.r(t);var r=n(271),o=n(255),l={components:{Flicking:r.a},methods:{onCarouselReady:function(e){var t=e.currentTarget;window.addEventListener("resize",(function(){t.resize()}))}},data:function(){return{images:["Fullview_Person.jpg","Frontview_Person2.jpg","Fullview_person2.jpg","Frontview_Person3.jpg","Sideview_person.jpg","frontview_person4.jpg"],carouselSettings:{renderOnlyVisible:!0,circular:!0,autoResize:!0},carouselPlugins:[new o.a({})]}}},c=(n(256),n(21)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"front-page"},[n("Flicking",{staticClass:"slider_front",attrs:{plugins:e.carouselPlugins,options:e.carouselSettings},on:{ready:e.onCarouselReady}},e._l(e.images,(function(image){return n("div",{key:image,staticClass:"carousel-entry"},[n("nuxt-img",{attrs:{src:e.router.base+"/"+image}})],1)})),0),e._v(" "),n("div",{staticClass:"title"},[n("h1",[e._v("Blast From The Past")]),e._v(" "),n("nuxt-link",{attrs:{to:"/catalogus"}},[n("button",{staticClass:"shop"},[e._v("shop now")])])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);