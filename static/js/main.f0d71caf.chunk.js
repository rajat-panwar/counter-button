(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(6),u=n.n(a),s=(n(12),n(13),n(4)),i=n(2),o=n.n(i),l=n(3),f=(n(15),n(7)),p=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",new Promise((function(e,t){e(n)})));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",new Promise((function(t,n){console.log(e.t0),n(e.t0)})));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(f.a)({},t),e.prev=1,e.next=4,fetch("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",{method:"PUT",body:JSON.stringify(n)});case 4:return r=e.sent,e.abrupt("return",new Promise((function(e,t){e(r)})));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",new Promise((function(t,n){n(e.t0)})));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();var d=n(0);var j=function(e){var t=e.start,n=void 0===t?1:t,c=e.lowerLimit,a=void 0===c?0:c,u=e.upperLimit,i=void 0===u?1e3:u;Object(r.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P();case 1:case"end":return e.stop()}}),e)}))),[]);var f=Object(r.useState)(Number(n)),j=Object(s.a)(f,2),v=j[0],m=j[1],h=Object(r.useState)(""),x=Object(s.a)(h,2),O=x[0],w=x[1],N=Object(r.useState)(""),g=Object(s.a)(N,2),y=g[0],k=g[1],C=function(e,t){var n=Object(r.useState)(e),c=Object(s.a)(n,2),a=c[0],u=c[1];return Object(r.useEffect)((function(){if(e){var n=setTimeout((function(){u(e)}),t);return function(){clearTimeout(n)}}}),[e,t]),a}(v,900);Object(r.useEffect)((function(){S(v)}),[C]);var S=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k("pending"),e.prev=1,e.next=4,b({counter1:t});case 4:if(200!==(n=e.sent).status){e.next=12;break}return k(""),e.next=9,n.json();case 9:r=e.sent,c=r.counter1,w(c);case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),k("failure"),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:t=e.sent,m(Number(t)),w(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"value-update-status",children:"failure"===y?Object(d.jsx)("div",{style:{textAlign:"left"},children:"Couldn't update last value"}):Object(d.jsxs)("div",{style:{display:"flex",opacity:"".concat(y?"1":"0")},children:[Object(d.jsx)("div",{className:"loader"}),"Saving counter value"]})}),Object(d.jsxs)("div",{className:"counter-button-container",children:[Object(d.jsx)("button",{className:"decrement-button",onClick:function(){y&&k(""),v-1>=Number(a)&&m(v-1)},children:"-"}),Object(d.jsx)("input",{type:"tel",value:v,max:i,className:"input-box",onChange:function(e){!function(e){var t=+Number(e.target.value);y&&k(""),""===e.target.value&&m(0),isNaN(t)||t&&Number(t)<=i&&m(t)}(e)}}),Object(d.jsx)("button",{className:"increment-button",onClick:function(){y&&k(""),v+1<=Number(i)&&m(v+1)},children:"+"})]}),Object(d.jsx)("div",{className:"updated-counter-display",children:"Counter value: ".concat(O)})]})};var v=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)("div",{className:"counter-button-consumer",children:Object(d.jsx)(j,{})})})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),a(e),u(e)}))};u.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.f0d71caf.chunk.js.map