(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,a,l){e.exports=l(14)},,,,,function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){"use strict";l.r(a);var t=l(0),c=l.n(t),n=l(3),r=l.n(n),o=(l(10),l(1)),i=l(4);l(11),l(12);var u=({operation:e,double:a,triple:l,click:t,label:n})=>c.a.createElement("button",{onClick:()=>t(n),className:"\n      button \n      ".concat(e?"operation":"","\n      ").concat(a?"double":"","\n      ").concat(l?"triple":"","\n    ")},n);l(13);var s=({value:e})=>c.a.createElement("div",{className:"display"},e);const p={displayValue:"0",clearDisplay:!1,operator:null,values:[0,0],currentIndex:0};var b=()=>{const e=Object(t.useState)(Object(o.a)({},p)),a=Object(i.a)(e,2),l=a[0],n=a[1],r=e=>{if(0===l.currentIndex)n(a=>Object(o.a)(Object(o.a)({},a),{},{operator:e,currentIndex:1,clearDisplay:!0}));else{const a="="===e,t=l.operator,c=[...l.values];switch(t){case"+":c[0]+=c[1];break;case"-":c[0]-=c[1];break;case"*":c[0]*=c[1];break;case"/":c[0]/=c[1];break;default:console.log("default")}c[1]=0,console.log("ola"),n({displayValue:c[0],operator:a?null:e,currentIndex:a?0:1,clearDisplay:!a,values:c})}},b=e=>{if("."===e&&l.displayValue.includes("."))return null;const a=("0"===l.displayValue||l.clearDisplay?"":l.displayValue)+e;if("."!==e){const e=l.currentIndex,t=parseFloat(a),c=[...l.values];c[e]=t,n(e=>Object(o.a)(Object(o.a)({},e),{},{values:c}))}n(e=>Object(o.a)(Object(o.a)({},e),{},{displayValue:a,clearDisplay:!1}))};return c.a.createElement("div",{className:"calculator"},c.a.createElement(s,{value:l.displayValue}),c.a.createElement(u,{label:"AC",click:()=>{n(Object(o.a)({},p))},triple:!0}),c.a.createElement(u,{label:"/",click:r,operation:!0}),["7","8","9"].map(e=>c.a.createElement(u,{label:e,click:b})),c.a.createElement(u,{label:"*",click:r,operation:!0}),["4","5","6"].map(e=>c.a.createElement(u,{label:e,click:b})),c.a.createElement(u,{label:"-",click:r,operation:!0}),["1","2","3"].map(e=>c.a.createElement(u,{label:e,click:b})),c.a.createElement(u,{label:"+",click:r,operation:!0}),c.a.createElement(u,{label:"0",click:b,double:!0}),c.a.createElement(u,{label:".",click:b}),c.a.createElement(u,{label:"=",click:r,operation:!0}))};function d(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Calculator"),c.a.createElement(b,null))}const m=document.getElementById("root");r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),m)}],[[5,1,2]]]);
//# sourceMappingURL=main.755f014d.chunk.js.map