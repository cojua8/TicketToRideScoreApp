(this["webpackJsonpticket-to-ride-score-app"]=this["webpackJsonpticket-to-ride-score-app"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(5),s=n.n(o),u=(n(11),n(4),n(3)),a=n(6),i=(n(12),n(0)),l=function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:Object(i.jsx)("h3",{children:e.length})}),Object(i.jsx)("th",{children:Object(i.jsxs)("div",{className:"input-group",role:"group",children:[Object(i.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){e.numberRoutes>0&&e.handleRouteChange(e.routeScore,e.numberRoutes-1)},children:Object(i.jsx)("i",{className:"bi bi-dash"})}),Object(i.jsx)("input",{type:"text",className:"form-control text-center",style:{width:"50px"},value:e.numberRoutes,onChange:function(t){var n=parseInt(t.target.value);isNaN(n)?e.handleRouteChange(e.routeScore,0):e.handleRouteChange(e.routeScore,n)}}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){e.handleRouteChange(e.routeScore,e.numberRoutes+1)},children:Object(i.jsx)("i",{className:"bi bi-plus"})})]})}),Object(i.jsx)("th",{children:Object(i.jsx)("h3",{children:e.routeScore*e.numberRoutes})})]})},b=function(){var e=Object(c.useState)([{length:1,routeScore:1,numberRoutes:0},{length:2,routeScore:2,numberRoutes:0},{length:3,routeScore:4,numberRoutes:0},{length:4,routeScore:7,numberRoutes:0},{length:6,routeScore:15,numberRoutes:0},{length:8,routeScore:21,numberRoutes:0}]),t=Object(a.a)(e,2),n=t[0],r=t[1],o=function(e,t){var c=n.map((function(n){return n.routeScore===e?Object(u.a)(Object(u.a)({},n),{},{numberRoutes:t}):n}));r(c)},s=n.map((function(e){return Object(i.jsx)(l,{length:e.length,routeScore:e.routeScore,numberRoutes:e.numberRoutes,totalScore:e.totalScore,handleRouteChange:o},e.length)})),b=n.reduce((function(e,t){return e+t.routeScore*t.numberRoutes}),0),h=n.reduce((function(e,t){return e+t.length*t.numberRoutes}),0);return Object(i.jsx)("div",{className:"position-absolute top-50 start-50 translate-middle",children:Object(i.jsxs)("div",{className:"bg-light border border-primary rounded-3 px-4 py-4 opacity-75 text-center",children:[Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{className:"text-center h4",children:[Object(i.jsx)("th",{scope:"col",children:"Route length"}),Object(i.jsx)("th",{scope:"col",children:"Total routes"}),Object(i.jsx)("th",{scope:"col",children:"Total score"})]})}),Object(i.jsx)("tbody",{className:"text-center align-middle",children:s})]}),Object(i.jsxs)("h6",{className:"text-secondary",children:["Total used trains: ",h]}),Object(i.jsxs)("h2",{children:["Total score: ",b]})]})})};var h=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("img",{className:"position-absolute w-100 h-100 opacity-25",alt:"",src:"/TicketToRideScoreApp/images/background.jpg"}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(b,{})})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),o(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.91585d23.chunk.js.map