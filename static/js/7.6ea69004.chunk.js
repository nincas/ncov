(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[7,8],{105:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n(8);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=n(78),o=n(0),l=n.n(o),i=n(106),u=n(27),s=n.n(u),f=n(18),d=n(9);n(105);function m(){var e=Object(a.a)(["\n        display: flex !important;\n        flex-direction: row !important;\n        justify-content: center;\n        align-items: center !important;\n    "]);return m=function(){return e},e}function p(){var e=Object(a.a)(["\n        font-size: 18px !important;\n        color: "," !important;\n    "]);return p=function(){return e},e}function v(){var e=Object(a.a)(["\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        margin-top: 20px;\n        color: #e85f5f;\n        font-size: 15px;\n        padding-bottom: 3px;\n\n        i {\n            color: #fff !important;\n        }\n    "]);return v=function(){return e},e}function h(e){var t=e.country,n=void 0===t?"philippines":t,a=e.theme,u=e.data,h=void 0===u?[]:u,b=e.activeIdx,E=void 0===b?null:b,y=Object(o.useState)([]),x=Object(r.a)(y,2),g=x[0],j=x[1],O=Object(o.useState)({}),S=Object(r.a)(O,2),C=S[0],A=S[1],D=Object(o.useState)(""),R=Object(r.a)(D,2),k=R[0],T=R[1],w=Object(o.useState)(0),I=Object(r.a)(w,2),N=I[0],U=I[1],z=Object(o.useState)(""),L=Object(r.a)(z,2),M=(L[0],L[1]),B=Object(o.useState)({todayCases:"#8DD1E1",deaths:"#b33434",todayDeaths:"#e35146",recovered:"#8884D8",active:"#A4DE6C",critical:"#d97b34",todayRecovered:"#fca503"}),F=Object(r.a)(B,2),J=F[0],K=(F[1],Object(o.useState)(!0)),P=Object(r.a)(K,2),W=P[0],q=P[1],G="dark"==a?"#fff":"#26242E";Object(o.useEffect)((function(){var e=[];if(h.length>0)return j(h),void q(!1);setTimeout((function(){fetch("https://corona.lmao.ninja/v2/countries/"+n).then((function(e){return e.json()})).then((function(t){var n=t.cases;for(var a in A(t.countryInfo),T(t.country),M("".concat(t.countryInfo.lat,",").concat(t.countryInfo.long)),U(t.tests),t)-1===Object.keys(J).indexOf(a)&&delete t[a];console.log(J),s.a.forEach(t,(function(t,a){var c;e.push({name:(c=a,c.charAt(0).toUpperCase()+c.substr(1,c.length)),value:t,fill:J[a],totalCases:n})})),j(e),q(!1)}))}),6e4)}),[g]);var H=function(e){if("string"!=typeof e)return Number(e.toFixed(1)).toLocaleString()},Q=function(e){var t,n=e.viewBox,a=(e.value1,e.value2,n.cx),r=n.cy;return l.a.createElement("text",(c(t={x:a,y:r+20,className:"containerLabel",fill:"red",fontWeight:"bold"},"className","recharts-text recharts-label"),c(t,"textAnchor","middle"),c(t,"dominantBaseline","central"),t))},V=Object(o.useState)(E||5),X=Object(r.a)(V,2),Y=X[0],Z=X[1],$=d.a.div(v()),_=d.a.span(p(),"dark"==a?"yellow":"#26242E"),ee=d.a.div(m());return l.a.createElement("div",{className:"container"},W?l.a.createElement(f.a,{name:n,theme:a}):l.a.createElement("div",{className:"countryContainer"},l.a.createElement(ee,null,C.flag?l.a.createElement("img",{src:C.flag,style:{height:"18px"},title:n?n.toUpperCase():k.toUpperCase()}):"",l.a.createElement(_,null," ",k?k.toUpperCase():n.toUpperCase())),l.a.createElement($,{image:C.flag?C.flag:""},l.a.createElement("span",null,"CASES: ",l.a.createElement("i",null,H(g[0].totalCases))),"global"!==n?l.a.createElement("span",null,"TESTS: ",l.a.createElement("i",null,H(N))):"")),l.a.createElement(i.e,{width:500,height:400},l.a.createElement(i.h,{separator:"",formatter:function(e,t,n){return[H(e),""]}}),l.a.createElement(i.c,{layout:"vertical",verticalAlign:"top",align:"center",iconType:"circle",iconSize:12,formatter:function(e,t){return l.a.createElement("span",{style:{fontSize:"12px",textTransform:"uppercase",color:G}},e,": ",l.a.createElement("i",{style:{color:"red !important"}},H(t.payload.value)))}}),W?"":l.a.createElement(i.d,{data:g,activeIndex:Y,activeShape:function(e){var t=Math.PI/180,n=e.cx,a=e.cy,c=e.midAngle,r=e.innerRadius,o=e.outerRadius,u=e.startAngle,s=e.endAngle,f=e.fill,d=e.payload,m=e.percent,p=(e.value,Math.sin(-t*c)),v=Math.cos(-t*c),h=n+(o+10)*v,b=a+(o+10)*p,E=n+(o+30)*v,y=a+(o+30)*p,x=E+22*(v>=0?1:-1),g=y,j=v>=0?"start":"end";return l.a.createElement("g",null,l.a.createElement("text",{x:n,y:a,className:"recharts-text recharts-label centerTextLabel",textAnchor:"middle",fill:f,dominantBaseline:"central"},l.a.createElement("tspan",{alignmentBaseline:"middle",fontSize:"14",style:{fontWeight:"bold"}},d.name)),l.a.createElement(i.g,{cx:n,cy:a,innerRadius:r,outerRadius:o,startAngle:u,endAngle:s,fill:f}),l.a.createElement(i.g,{cx:n,cy:a,startAngle:u,endAngle:s,innerRadius:o+6,outerRadius:o+10,fill:f}),l.a.createElement("path",{d:"M".concat(h,",").concat(b,"L").concat(E,",").concat(y,"L").concat(x-10,",").concat(g),stroke:f,fill:"none"}),l.a.createElement("circle",{cx:x-10,cy:g,r:2,fill:f,stroke:"none"}),l.a.createElement("text",{x:x+(v>=0?1:-1),y:g,textAnchor:j,fill:G},d.name.toUpperCase()),l.a.createElement("text",{x:x+(v>=0?1:-1),y:g,dy:18,textAnchor:j,fontSize:"12",fill:"#999"},"(".concat((100*m).toFixed(2),"%)")))},dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:85,innerRadius:55,fill:"#8884d8",onMouseEnter:function(e,t){Z(t)},animationDuration:2e3,animationEasing:"ease-in-out"},l.a.createElement(i.b,{width:30,position:"center",content:l.a.createElement(Q,{value1:H(g[0].totalCases),value2:n})}),g.map((function(e,t){return l.a.createElement(i.a,{key:"cell-".concat(t),fill:e.fill})})))))}},389:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(8),c=n(78),r=n(0),o=n.n(r),l=(n(390),n(107)),i=n(9),u=n(18),s=n(27),f=n.n(s);function d(){var e=Object(a.a)(["\n        color: "," !important;\n    "]);return d=function(){return e},e}function m(e){var t=e.theme,n=Object(r.useState)([]),a=Object(c.a)(n,2),s=a[0],m=a[1],p=Object(r.useState)(!0),v=Object(c.a)(p,2),h=v[0],b=v[1],E=Object(r.useState)(0),y=Object(c.a)(E,2),x=y[0],g=y[1];Object(r.useEffect)((function(){setTimeout((function(){var e=[];fetch("https://corona.lmao.ninja/v2/all").then((function(e){return e.json()})).then((function(t){var n={todayCases:"#8DD1E1",deaths:"#b33434",todayDeaths:"#e35146",recovered:"#8884D8",active:"#A4DE6C",critical:"#d97b34",todayRecovered:"#fca503"};g(t.affectedCountries);var a=t.cases;for(var c in t)-1===Object.keys(n).indexOf(c)&&delete t[c];f.a.forEach(t,(function(t,c){var r;e.push({name:(r=c,r.charAt(0).toUpperCase()+r.substr(1,r.length)),value:t,fill:n[c],totalCases:a})})),m(e),b(!1)})).catch((function(e){console.error(e)}))}),5e3)}),[]);var j=i.a.h2(d(),(function(e){return"dark"==e.theme?"#fff":"#333"}));return o.a.createElement("div",{className:"headerContainer"},o.a.createElement(j,{theme:t},"AFFECTED COUNTRIES:",o.a.createElement("i",{style:{color:"red"}},x)),h?o.a.createElement(u.a,{theme:t}):o.a.createElement(l.default,{country:"global",theme:t,data:s,activeIdx:5}))}},390:function(e,t,n){}}]);
//# sourceMappingURL=7.6ea69004.chunk.js.map