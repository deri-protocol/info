(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[29],{1206:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));a(730);var n=a(731),c=a(26),r=a(28),i=a(619),s=a(825),o=a.n(s),l=a(732),u=a(110),d=a(18),m=["ACTION","ACCOUNT","LIQUIDITY","AMOUNT","TIMESTAMP (UTC+8)"],b=["action","account","notional","amount","timestamp"],j="".concat("https://infoapi.deri.finance"),f=["DIRECTION","ACCOUNT","SYMBOL","PRICE","VOLUME","NOTIONAL","TIMESTAMP (UTC+8)"],p=["direction","account","symbol","price","volume","notional","timestamp"],O={account:function(e){return Object(r.g)(e.account)},timestamp:function(e){return o()(new Date(1e3*e.timestamp)).format("YYYY-MM-DD HH:mm:ss")},notional:function(e){return Object(d.jsx)(i.a,{value:e.notional,prefix:"$",thousandSeparator:!0,decimalScale:5})},amount:function(e){return Object(d.jsx)(i.a,{value:e.amount,suffix:" ".concat(e.bToken),thousandSeparator:!0,decimalScale:5})},price:function(e){return Object(d.jsx)(i.a,{value:e.price,thousandSeparator:!0,decimalScale:5})},direction:function(e){return Object(d.jsx)("span",{className:"direction ".concat(e.direction),children:e.direction})},action:function(e){return Object(d.jsx)("span",{className:"action ".concat(e.action),children:e.action})}};function v(){var e=Object(c.useParams)(),t=e.network,a=e.add,i=e.catalog,s=e.bToken,o="".concat(j,"/get_liquidity?pool=").concat(a),v="".concat(j,"/get_trade?pool=").concat(a);return Object(d.jsxs)("div",{className:"info",style:{"min-width":"calc(100vw - ".concat(.3*window.screen.width,"px)")},children:[Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)(u.b,{to:"/info",children:"Deri Overview"})," > ","".concat(t," - ").concat(i.toUpperCase()," - ").concat(Object(r.g)(a)," (").concat(s,")")]}),Object(d.jsxs)("div",{className:"chart-box",children:[Object(d.jsxs)("div",{className:"chart",children:[Object(d.jsx)(l.a,{title:"TVL",url:"".concat("https://infoapi.deri.finance","/get_liquidity_history?pool=").concat(a),seriesType:"area"})," "]}),Object(d.jsxs)("div",{className:"chart",children:[Object(d.jsx)(l.a,{title:"Volume 24H",url:"".concat("https://infoapi.deri.finance","/get_trade_history?pool=").concat(a),seriesType:"histogram"})," "]})]}),Object(d.jsxs)("div",{className:"table-by-network",children:[Object(d.jsx)(n.a,{title:"LIQUIDITY",headers:m,columns:b,columnRenders:O,url:o,pagination:!0}),Object(d.jsx)(n.a,{title:"TRADE",headers:f,columns:p,columnRenders:O,url:v,pagination:!0})]})]})}},619:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(55),c=a(623),r=a(10),i=a(6),s=a(621),o=a(18);function l(e){var t=Object(i.useState)(Object(o.jsx)("span",{className:"loading-line"})),a=Object(r.a)(t,2),l=a[0],u=a[1];return Object(i.useEffect)((function(){var t=e.allowZero,a=Object(c.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&u(Object(o.jsx)(s.a,Object(n.a)(Object(n.a)({},a),{},{displayType:"text"}))),function(){}}),[e.value]),l}},730:function(e,t,a){},731:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(1),i=a(10),s=a(6),o=a(638),l=a.n(o),u=a(48),d=a(18);t.a=Object(u.b)("loading")(Object(u.c)((function(e){var t=e.title,a=e.dataSet,n=e.url,o=e.headers,u=e.columns,m=e.columnRenders,b=void 0===m?{}:m,j=e.pagination,f=e.loading,p=e.onRowClick,O=Object(s.useState)([]),v=Object(i.a)(O,2),h=v[0],x=v[1],N=Object(s.useState)(1),y=Object(i.a)(N,2),g=y[0],S=y[1],w=Object(s.useState)(),C=Object(i.a)(w,2),T=C[0],A=C[1],M=Object(s.useState)(10),k=Object(i.a)(M,2),R=k[0],V=(k[1],function(){var e=Object(r.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,j&&(n="".concat(n,"&page=").concat(a,"&page_amount=").concat(R)),f.loading(),e.next=5,l.a.get(n);case 5:200===(r=e.sent).status&&Array.isArray(r.data.data)&&(A(r.data.count/R),r.data.count%R>0&&A(Math.floor(r.data.count/R)+1),x(r.data.data),S(a),f.loaded());case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());return Object(s.useEffect)((function(){a?x(a):V(n,1)}),[n]),Object(d.jsxs)("div",{className:"info-table",children:[Object(d.jsx)("div",{className:"t-title",children:t}),Object(d.jsxs)("div",{className:"tbody",children:[Object(d.jsx)("div",{className:"theader",children:o.map((function(e){return Object(d.jsx)("div",{className:"col",children:e})}))}),h.map((function(e){return Object(d.jsxs)("div",{className:"row",onClick:function(){return p&&p(e)},style:{cursor:p?"pointer":"normal"},children:[u.map((function(t){return Object(d.jsx)("div",{className:"col",children:b[t]?b[t].call(null,e):e[t]})})),Object(d.jsx)("div",{})]})})),j&&Object(d.jsxs)("div",{className:"pagination row",children:[Object(d.jsx)("span",{className:"arrow",onClick:function(){1!==g&&V(n,g-1)},children:" < "}),Object(d.jsxs)("span",{children:["Page ",g," of ",T]}),Object(d.jsx)("span",{className:"arrow",onClick:function(){g!==T&&V(n,g+1)},children:" > "})]})]})]})})))},732:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(0),c=a.n(n),r=a(1),i=a(10),s=a(6),o=a(740),l=a(638),u=a.n(l),d=a(693),m=a.n(d),b=a(28),j=a(18);function f(e){var t=e.title,a=e.url,n=e.seriesType,l=Object(s.useRef)(null),d=Object(s.useRef)(null),f=Object(s.useState)(""),p=Object(i.a)(f,2),O=p[0],v=p[1],h=Object(s.useState)(""),x=Object(i.a)(h,2),N=x[0],y=x[1],g=Object(s.useRef)(),S=function(e){if(!e.point)return y(""),void(g.current&&v(g.current.value));e.seriesPrices.forEach((function(e){e&&v(e)})),e.time&&y("".concat(e.time.year,"-").concat(e.time.month,"-").concat(e.time.day," (UTC+8)"))},w=function(){var e=Object(r.a)(c.a.mark((function e(t){var n,r,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.addAreaSeries({priceLineVisible:!1,lastValueVisible:!1,topColor:"RGBA(0,101,159,.5)",bottomColor:"RGBA(0,101,159,0)",lineColor:"RGB(0,101,159)",priceFormat:{precision:1,minMove:"1000"}}),e.next=3,u.a.get(a);case 3:return 200===(r=e.sent).status&&Array.isArray(r.data.data)&&(i=(i=r.data.data.sort((function(e,t){return e.timestamp>t.timestamp?1:e.timestamp<t.timestamp?-1:0}))).map((function(e){return{time:m()(new Date(1e3*e.timestamp),"yyyy-mm-dd"),value:e.value}})),n.setData(i),s=i[i.length-1],v(s.value),g.current=s),d.current=n,t.timeScale().fitContent(),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(r.a)(c.a.mark((function e(t){var n,r,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.addHistogramSeries({color:"#00659F",priceLineVisible:!1,lastValueVisible:!1,priceFormat:{type:"volume",priceFormatter:function(e){return"$ "+e}},scaleMargins:{top:.2,bottom:0}}),e.next=3,u.a.get(a);case 3:return 200===(r=e.sent).status&&Array.isArray(r.data.data)&&(i=r.data.data.sort((function(e,t){return e.timestamp>t.timestamp?1:e.timestamp<t.timestamp?-1:0})).map((function(e){return{time:m()(new Date(1e3*e.timestamp),"yyyy-mm-dd"),value:Number(e.value)}})),n.setData(i),s=i[i.length-1],v(s.value),g.current=s),d.current=n,t.timeScale().fitContent(),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){var e=function(){var e=document.querySelector(".info-chart").getBoundingClientRect();return Object(o.b)(l.current,{localization:{priceFormatter:function(e){return"$ "+Object(b.d)(e)},locale:"en-US"},timeScale:{rightOffset:0,leftOffset:5,timeVisible:!0,borderColor:"#fff",borderVisible:!1},width:e.width,height:e.height,priceScale:{position:"none",borderColor:"#fff",borderVisible:!1,mode:0},handleScroll:!1,handleScale:!1,crosshair:{mode:o.a.Normal,vertLine:{labelVisible:!1,visible:!1},horzLine:{labelVisible:!1,visible:!1}},grid:{vertLines:{visible:!1},horzLines:{visible:!1}},layout:{backgroundColor:"#212327",textColor:"#fff",fontSize:12}})}();return"area"===n&&w(e),"histogram"===n&&C(e),e.subscribeCrosshairMove(S),function(){e&&(e.unsubscribeCrosshairMove(S),d.current&&e.removeSeries(d.current),e.remove())}}),[a,n]),Object(j.jsxs)("div",{className:"info-chart",children:[Object(j.jsxs)("div",{className:"chart-title",children:[Object(j.jsx)("div",{className:"title-label",children:t}),Object(j.jsxs)("div",{className:"title-value",children:[O?"$".concat(Object(b.d)(O)):""," "]}),Object(j.jsxs)("div",{className:"title-date",children:[N," "]})]}),Object(j.jsx)("div",{className:"series",ref:l})]})}}}]);
//# sourceMappingURL=29.e771772c.chunk.js.map