(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{250:function(t,e,r){t.exports={}},253:function(t,e,r){"use strict";r(250)},275:function(t,e,r){"use strict";r.r(e);var n=r(87),c=r(4),o=(r(34),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,i,o,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.$content,t.params,c=[],i=0;case 3:if(!(i<4)){e.next=13;break}return o=[],e.next=7,r("products").fetch();case 7:l=e.sent,i%2==0?((d=l[0]).path,o.push.apply(o,Object(n.a)(l)),o.push(d)):o.push.apply(o,Object(n.a)(l)),c.push(o);case 10:i++,e.next=3;break;case 13:return e.abrupt("return",{cols:c});case 14:case"end":return e.stop()}}),e)})))()}}),l=(r(253),r(21)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"catalogus-page"},[r("div",{staticClass:"products"},[r("div",{staticClass:"products-grid"},t._l(t.cols,(function(col){return r("div",{key:col.toString(),staticClass:"products-col"},t._l(col,(function(e){return r("nuxt-link",{key:e.path,staticClass:"products-item",attrs:{to:e.path}},[r("nuxt-img",{attrs:{src:""+(t.router.base+e.images[Math.floor(Math.random()*e.images.length)])}})],1)})),1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);