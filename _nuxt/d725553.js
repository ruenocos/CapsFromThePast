(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{252:function(t,e,n){t.exports={}},256:function(t,e,n){"use strict";n(252)},277:function(t,e,n){"use strict";n.r(e);var r=n(271),o=n(255),l={components:{Flicking:r.a},methods:{onCarouselReady:function(t){var e=t.currentTarget;window.addEventListener("resize",(function(){e.resize()}))}},data:function(){return{images:["Fullview_Person.jpg","Frontview_Person2.jpg","Fullview_person2.jpg","Frontview_Person3.jpg","Sideview_person.jpg","frontview_person4.jpg"],carouselSettings:{renderOnlyVisible:!0,circular:!0,autoResize:!0},carouselPlugins:[new o.a({})]}}},c=(n(256),n(21)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"front-page"},[n("Flicking",{staticClass:"slider_front",attrs:{plugins:t.carouselPlugins,options:t.carouselSettings},on:{ready:t.onCarouselReady}},t._l(t.images,(function(image){return n("div",{key:image,staticClass:"carousel-entry"},[n("nuxt-img",{attrs:{src:""+image}})],1)})),0),t._v(" "),n("div",{staticClass:"title"},[n("h1",[t._v("Blast From The Past")]),t._v(" "),n("nuxt-link",{attrs:{to:"/catalogus"}},[n("button",{staticClass:"shop"},[t._v("shop now")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);