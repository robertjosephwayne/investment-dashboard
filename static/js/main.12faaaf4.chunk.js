(this["webpackJsonpinvestment-dashboard"]=this["webpackJsonpinvestment-dashboard"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(0),r=n.n(i),a=n(19),o=n.n(a),s=n(16);var u=Object(s.b)((function(e){return{activeStockSymbol:e.stockTicker.activeStockSymbol,closingPricesDaily:e.stockTicker.closingPricesDaily}}))((function(e){var t=e.activeStockSymbol,n=e.closingPricesDaily.map((function(e){return Object(c.jsxs)("li",{children:["Year: ",e.year,", Month: ",e.month,", Day:"," ",e.day,", Closing Price: ",e.closingPriceDaily]})}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:t}),Object(c.jsx)("ul",{children:n})]})})),l=n(29),b=n(12),j=Object(b.b)("STOCK_PRICES_FETCH"),d=Object(b.b)("STOCK_PRICES_FETCH_SUCCESS");var p=function(e){var t=e.onSubmit;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{className:"ml-4 focus:outline-none",onClick:t,children:"Submit"})})};var O=function(e){var t=e.inputValue,n=e.onChange;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("input",{type:"text",value:t,onChange:n,className:"border focus:outline-none"})})};var f=Object(s.b)(null,(function(e){return{fetchStockPrices:function(t){return e(j(t))}}}))((function(e){var t=e.fetchStockPrices,n=Object(i.useState)(""),r=Object(l.a)(n,2),a=r[0],o=r[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{onChange:function(e){var t=e.target;o(t.value)},inputValue:a}),Object(c.jsx)(p,{onSubmit:function(){t(a)}})]})})),h=function(e){var t=e.title;return Object(c.jsx)("h1",{className:"font-bold",children:t})},y=function(e){var t=e.title;return Object(c.jsx)("div",{className:"flex items-center h-16 px-8 py-4 text-lg bg-gray-200",children:Object(c.jsx)(h,{title:t})})};var m=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(y,{title:"Investment Dashboard"}),Object(c.jsx)("div",{children:Object(c.jsx)(f,{})}),Object(c.jsx)(u,{})]})},v=(n(54),n(59)),S=n(8),g=n(60),x=n(58),k=n(43),C=n(61),P=n(41),D=n(26),T=function(e){return e.response["Time Series (Daily)"]},E=function(e){return function(e){return Object.keys(e)}(e).map((function(t){var n=e[t]["4. close"],c=t.split("-"),i=Object(l.a)(c,3);return{year:i[0],month:i[1],day:i[2],closingPriceDaily:n}}))},F=function(e){return function(e){return e.response["Meta Data"]}(e)["2. Symbol"]},I=n(37),_=Object(b.c)({activeStockSymbol:"",closingPricesDaily:[]},(function(e){e.addCase(d,(function(e,t){return Object(I.a)(Object(I.a)({},e),{},{activeStockSymbol:t.payload.stockSymbol,closingPricesDaily:t.payload.closingPricesDaily})}))})),M=[function(e){return e.pipe(Object(k.a)(j),Object(P.a)((function(e){return Object(C.a)({url:"https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=".concat(e.payload,"&outputsize=full&datatype=json"),method:"GET",headers:{"Content-Type":"application/json","x-rapidapi-key":"3769b6156emsha3a59545ea9f3dcp12c003jsn36240bba836f","x-rapidapi-host":"alpha-vantage.p.rapidapi.com"}}).pipe(Object(D.a)((function(e){var t=T(e),n=E(t),c=F(e);return d({stockSymbol:c,closingPricesDaily:n})})))})))}],N=function(e,t,n){return g.a.apply(void 0,M)(e,t,n).pipe(Object(x.a)((function(e,t){return console.error(e),t})))},w=Object(S.c)({stockTicker:_}),L=Object(v.a)(),R=[L];var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};o.a.render(Object(c.jsx)(s.a,{store:function(){var e=Object(b.a)({reducer:w,middleware:R});return L.run(N),e}(),children:Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m,{})})}),document.getElementById("root")),B()}},[[55,1,2]]]);
//# sourceMappingURL=main.12faaaf4.chunk.js.map