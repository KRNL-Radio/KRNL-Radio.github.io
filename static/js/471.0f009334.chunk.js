"use strict";(self.webpackChunkkrnl_website=self.webpackChunkkrnl_website||[]).push([[471],{4325:function(e,s,a){var l=a(9439),t=a(2791),n=a(9650),o=a(184);function r(e){var s=e.to,a=e.hideDays,r=e.children,c=t.useState({days:0,hours:0,minutes:0,seconds:0}),i=(0,l.Z)(c,2),d=i[0],u=i[1],x=t.useState(!1),h=(0,l.Z)(x,2),m=h[0],p=h[1];return t.useEffect((function(){var e=function(){var e=new Date,l=s.getTime()-e.getTime();l<0&&(l=0),0===l&&!1===m&&p(!0);var t=0;!1===a&&(l-=864e5*(t=Math.floor(l/864e5)));var o=Math.floor(l/36e5);l-=36e5*o;var r=Math.floor(l/6e4);l-=6e4*r;var c=Math.floor(l/1e3);u({days:(0,n.Z)(t,0,99),hours:(0,n.Z)(o,0,99),minutes:(0,n.Z)(r,0,99),seconds:(0,n.Z)(c,0,99)})};e();var l=setInterval(e,1e3);return function(){return clearInterval(l)}}),[s,a,m]),m&&r?(0,o.jsx)(o.Fragment,{children:r}):a?(0,o.jsxs)("span",{className:"countdown font-mono",children:[(0,o.jsx)("span",{style:{"--value":d.hours}}),"h",(0,o.jsx)("span",{style:{"--value":d.minutes}}),"m",(0,o.jsx)("span",{style:{"--value":d.seconds}}),"s"]}):(0,o.jsxs)("span",{className:"countdown font-mono",children:[(0,o.jsx)("span",{style:{"--value":d.days}}),"d",(0,o.jsx)("span",{style:{"--value":d.hours}}),"h",(0,o.jsx)("span",{style:{"--value":d.minutes}}),"m",(0,o.jsx)("span",{style:{"--value":d.seconds}}),"s"]})}r.defaultProps={hideDays:!1},s.Z=r},6471:function(e,s,a){a.r(s);var l=a(7689),t=a(1087),n=a(1425),o=a(7266),r=a(3554),c=a(573),i=a(4325),d=a(184);s.default=function(){var e,s,a,u,x,h=(0,l.UO)().name,m=(0,c.wt)(h||"",!0);return m?(0,d.jsxs)("div",{className:"text-white",children:[(0,d.jsx)(n.Z,{}),(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"bg-gradient-to-b to-purple-900 from-purple-700 flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4",children:(0,d.jsxs)("div",{className:"flex flex-col items-center w-full",children:[null!==(e=m.logo)&&void 0!==e&&e.opaque?(0,d.jsxs)("label",{className:"swap swap-flip text-9xl",children:[(0,d.jsx)("input",{type:"checkbox"}),(0,d.jsx)("div",{className:"swap-on",children:(0,d.jsx)("img",{src:null!==(s=m.logo)&&void 0!==s&&s.opaque?null===(a=m.logo)||void 0===a?void 0:a.opaque:"https://via.placeholder.com/150",alt:m.name,className:"rounded-3xl w-96 object-cover drop-shadow-md"})}),(0,d.jsx)("div",{className:"swap-off",children:(0,d.jsx)("img",{src:null!==(u=m.logo)&&void 0!==u&&u.transparent?null===(x=m.logo)||void 0===x?void 0:x.transparent:"https://via.placeholder.com/150",alt:m.name,className:"rounded-3xl w-96 object-cover drop-shadow-md"})})]}):(0,d.jsx)("label",{}),(0,d.jsx)("h1",{className:"text-2xl",children:m.name}),(0,d.jsx)("h2",{className:"text-xl",children:m.splash_text}),(0,d.jsx)(i.Z,{to:m.schedule.getNextOccurance()}),(0,d.jsx)(o.Z,{className:"p-4 bg-violet-700 rounded-xl my-8 text-center",children:m.description||"*No description!*"}),(0,d.jsxs)("div",{className:"w-full",children:[(0,d.jsx)("h2",{className:"text-xl text-center",children:"Hosts"}),(0,d.jsx)("div",{className:"flex flex-wrap justify-center p-4 w-full",children:m.hosts.map((function(e){return(0,d.jsx)(r.Z,{member:e},e.name)}))})]})]})})}),(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsx)(t.rU,{to:"/schedule/shows",className:"text-white",children:"Back to Shows"})})})]}):(0,d.jsx)("div",{children:"Show not found"})}},9650:function(e,s,a){function l(e,s,a){return Math.min(Math.max(e,s),a)}a.d(s,{Z:function(){return l}})}}]);
//# sourceMappingURL=471.0f009334.chunk.js.map