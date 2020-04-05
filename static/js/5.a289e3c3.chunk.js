(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[5],{105:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(8);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=n(78),l=n(0),o=n.n(l),i=n(106),u=n(27),s=n.n(u),f=n(18),d=n(9);n(105);function m(){var e=Object(a.a)(["\n        display: flex !important;\n        flex-direction: row !important;\n        justify-content: center;\n        align-items: center !important;\n    "]);return m=function(){return e},e}function p(){var e=Object(a.a)(["\n        font-size: 18px !important;\n        color: yellow !important;\n        text-decoration: underline;\n    "]);return p=function(){return e},e}function y(){var e=Object(a.a)(["\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        margin-top: 20px;\n        color: #e85f5f;\n        font-size: 15px;\n        padding-bottom: 3px;\n\n        i {\n            color: #fff !important;\n        }\n    "]);return y=function(){return e},e}function b(e){var t=e.country,n=void 0===t?"philippines":t,a=e.data,u=void 0===a?[]:a,b=e.activeIdx,v=void 0===b?null:b,h=Object(l.useState)([]),g=Object(c.a)(h,2),x=g[0],E=g[1],j=Object(l.useState)({}),O=Object(c.a)(j,2),S=O[0],A=O[1],C=Object(l.useState)(""),w=Object(c.a)(C,2),M=w[0],I=w[1],R=Object(l.useState)(0),T=Object(c.a)(R,2),U=T[0],z=T[1],N=Object(l.useState)(["#8DD1E1","#b33434","#e35146","#8884D8","#A4DE6C","#d97b34"]),k=Object(c.a)(N,2),D=k[0],L=(k[1],Object(l.useState)(!0)),P=Object(c.a)(L,2),B=P[0],F=P[1];Object(l.useEffect)((function(){var e=[];if(u.length>0)return E(u),void F(!1);setTimeout((function(){fetch("https://corona.lmao.ninja/countries/"+n).then((function(e){return e.json()})).then((function(t){var n=t.cases;A(t.countryInfo),I(t.country),delete t.country,delete t.countryInfo,delete t.cases,delete t.casesPerOneMillion,delete t.deathsPerOneMillion,delete t.updated,delete t.testsPerOneMillion,z(t.tests),delete t.tests,s.a.forEach(t,(function(t,a){var r;e.push({name:(r=a,r.charAt(0).toUpperCase()+r.substr(1,r.length)),value:t,totalCases:n})})),E(e),F(!1)}))}),3e3)}),[x]);var J=function(e){return Number(e.toFixed(1)).toLocaleString()},K=function(e){var t,n=e.viewBox,a=(e.value1,e.value2,n.cx),c=n.cy;return o.a.createElement("text",(r(t={x:a,y:c+20,className:"containerLabel",fill:"red",fontWeight:"bold"},"className","recharts-text recharts-label"),r(t,"textAnchor","middle"),r(t,"dominantBaseline","central"),t))},W=Object(l.useState)(v||4),$=Object(c.a)(W,2),q=$[0],G=$[1],H=d.a.div(y()),Q=d.a.span(p()),V=d.a.div(m());return o.a.createElement("div",{className:"container"},B?o.a.createElement(f.a,{name:n}):o.a.createElement("div",{className:"countryContainer"},o.a.createElement(V,null,S.flag?o.a.createElement("img",{src:S.flag,style:{height:"18px"},title:n?n.toUpperCase():M.toUpperCase()}):"",o.a.createElement(Q,null," ",M?M.toUpperCase():n.toUpperCase())),o.a.createElement(H,{image:S.flag?S.flag:""},o.a.createElement("span",null,"CASES: ",o.a.createElement("i",null,J(x[0].totalCases))),"global"!==n?o.a.createElement("span",null,"TESTS: ",o.a.createElement("i",null,J(U))):"")),o.a.createElement(i.e,{width:500,height:350},o.a.createElement(i.h,{separator:"",formatter:function(e,t,n){return[J(e),""]}}),o.a.createElement(i.c,{layout:"vertical",verticalAlign:"top",align:"center",iconType:"circle",iconSize:"12",formatter:function(e,t){return o.a.createElement("span",{style:{fontSize:"12px",textTransform:"uppercase",color:"#fff"}},e,": ",o.a.createElement("i",{style:{color:"red !important"}},J(t.payload.value)))}}),B?"":o.a.createElement(i.d,{data:x,activeIndex:q,activeShape:function(e){var t=Math.PI/180,n=e.cx,a=e.cy,r=e.midAngle,c=e.innerRadius,l=e.outerRadius,u=e.startAngle,s=e.endAngle,f=e.fill,d=e.payload,m=e.percent,p=(e.value,Math.sin(-t*r)),y=Math.cos(-t*r),b=n+(l+10)*y,v=a+(l+10)*p,h=n+(l+30)*y,g=a+(l+30)*p,x=h+22*(y>=0?1:-1),E=g,j=y>=0?"start":"end";return o.a.createElement("g",null,o.a.createElement("text",{x:n,y:a,className:"recharts-text recharts-label centerTextLabel",textAnchor:"middle",fill:f,dominantBaseline:"central"},o.a.createElement("tspan",{alignmentBaseline:"middle",fontSize:"14",style:{fontWeight:"bold"}},d.name)),o.a.createElement(i.g,{cx:n,cy:a,innerRadius:c,outerRadius:l,startAngle:u,endAngle:s,fill:f}),o.a.createElement(i.g,{cx:n,cy:a,startAngle:u,endAngle:s,innerRadius:l+6,outerRadius:l+10,fill:f}),o.a.createElement("path",{d:"M".concat(b,",").concat(v,"L").concat(h,",").concat(g,"L").concat(x-10,",").concat(E),stroke:f,fill:"none"}),o.a.createElement("circle",{cx:x-10,cy:E,r:2,fill:f,stroke:"none"}),o.a.createElement("text",{x:x+(y>=0?1:-1),y:E,textAnchor:j,fill:"#fff"},d.name.toUpperCase()),o.a.createElement("text",{x:x+(y>=0?1:-1),y:E,dy:18,textAnchor:j,fontSize:"12",fill:"#999"},"(".concat((100*m).toFixed(2),"%)")))},dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:85,innerRadius:55,fill:"#8884d8",onMouseEnter:function(e,t){G(t)},animationDuration:2e3,animationEasing:"ease-in-out"},o.a.createElement(i.b,{width:30,position:"center",content:o.a.createElement(K,{value1:J(x[0].totalCases),value2:n})}),x.map((function(e,t){return o.a.createElement(i.a,{key:"cell-".concat(t),fill:D[t]})})))))}},78:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(i){r=!0,c=i}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=5.a289e3c3.chunk.js.map