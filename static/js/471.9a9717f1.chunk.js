"use strict";(self.webpackChunkkrnl_website=self.webpackChunkkrnl_website||[]).push([[471],{272:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(9806),c=n(184);var o=function(e){var t=e.title,n=e.subtitle,o=e.background,i=e.badge,a=e.onClick;return void 0===a&&(a=function(){}),void 0===o?o="linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 100%)":o.startsWith("http")||o.startsWith("/")?o="linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 100%), url(".concat(o,")"):o.startsWith("#")?o="linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 100%), ".concat(o):(console.error("Invalid background type!"),o="linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 100%), url(".concat(o,")")),(0,c.jsx)("div",{className:"card m-1 overflow-hidden",onMouseMove:function(e){for(var t=0,n=Array.from(document.getElementsByClassName("card"));t<n.length;t++){var r=n[t],c=r.getBoundingClientRect(),o=e.clientX-c.left,i=e.clientY-c.top;r.style.setProperty("--mouse-x","".concat(o,"px")),r.style.setProperty("--mouse-y","".concat(i,"px"))}},onClick:a,children:(0,c.jsxs)("div",{className:"card-content",style:{background:o,backgroundSize:"cover",backgroundPosition:"center"},children:[(0,c.jsx)("div",{className:"card-badge-wrapper h-[140px]",children:void 0!==i&&(0,c.jsxs)("div",{className:"origin-top p-2 float-right mt-9 mr-9 w-72 text-center translate-x-[50%] rotate-45 z-4 ".concat(i.background||"bg-purple-500"),children:[void 0!==i.icon&&(0,c.jsx)(r.G,{icon:i.icon,className:"text-white text-lg"}),(0,c.jsx)("p",{className:"text-white text-md font-bold",children:i.text})]})}),(0,c.jsx)("div",{className:"card-info-wrapper",children:(0,c.jsx)("div",{className:"card-info",children:(0,c.jsxs)("div",{className:"card-info-title",children:[(0,c.jsx)("h3",{children:t}),(0,c.jsx)("h4",{children:n})]})})})]})})}},3554:function(e,t,n){var r=n(7762),c=n(4077),o=n(2612),i=n(9585),a=n(5163),s=n(9124),l=n(8838),d=n(3429),u=n(1074),m=n(7689),h=n(921),f=n(5633),p=n(272),g=n(184);t.Z=function(e){var t=e.member,n=(0,m.s0)(),b=function(e){if(void 0!==e.badges){var t,n=(0,r.Z)(e.badges);try{for(n.s();!(t=n.n()).done;)switch(t.value){case"Station Manager":return{icon:u.It,background:"from-purple-700 to-purple-900 bg-gradient-to-b",text:"Station Manager"};case"Technical Director":return{icon:d.dT,background:"from-purple-700 to-purple-900 bg-gradient-to-b",text:"Technical Director"};case"Program Director":return{icon:l.UO,background:"from-purple-700 to-purple-900 bg-gradient-to-b",text:"Program Director"};case"Financial Director":return{icon:s.eg,background:"from-purple-700 to-purple-900 bg-gradient-to-b",text:"Financial Director"};case"Event and Marketing Director":return{icon:a.fT,background:"from-purple-700 to-purple-900 bg-gradient-to-b",text:"Events Director"};case"Music Director":return{icon:i.Xi,background:"from-purple-700 to-purple-900 bg-gradient-to-b",text:"Music Director"};case"Sports Director":return{icon:o._s,background:"from-purple-700 to-purple-900 bg-gradient-to-b",text:"Sports Director"};case"Faculty Advisor":return{icon:c.Cv,background:"from-purple-700 to-purple-900 bg-gradient-to-b",text:"Faculty Advisor"}}}catch(m){n.e(m)}finally{n.f()}}}(t);return(0,g.jsx)(p.Z,{title:t.name,subtitle:t.splash_text,background:t.image,badge:b,onClick:function(){t!==h.O_&&t!==h.Fj?n("/members/".concat((0,f.l)(t.name))):n("/members")}})}},9739:function(e,t,n){n.d(t,{$N:function(){return m},Ai:function(){return u},Y0:function(){return d},Y9:function(){return a},o8:function(){return i},wt:function(){return l},y0:function(){return s}});var r=n(5633),c=n(921),o=n(8936),i=[{name:"The Graveyard Shift",splash_text:"",description:"Alt is such a broad genre. What does any of it even mean? All I know is you love listening to me every week.",background:"#fc73e3",hosts:[(0,c.nf)("Adrien")],scheduleString:"Every Tuesday from 10pm to 11pm",schedule:new o.N("0 22 * * 2",60)},{name:"Stochastic Shuffle",splash_text:"Unpredictability at its finest - every time, by design!",description:"This is a totally unplanned show, where anything can happen (within contractual obligations). There's no logic behind this show, it just is.",background:"#0f3cec",hosts:[(0,c.nf)("Mark")],scheduleString:"Every Monday from 9 pm to 10 pm",schedule:new o.N("0 21 * * 1",60)},{name:"The Vibe",splash_text:"vibes~",description:"Somehow even *more* random than Mark's show, but at least 10x more chill! Ice not required.\n\n*when he feels like it",background:"#1c2dae",hosts:[(0,c.nf)("Grayson")],scheduleString:"Every Sunday from 4pm to 5pm*",schedule:new o.N("0 16 * * 0",60)},{name:"The After School Special",splash_text:"Because no one else streams earlier!",description:"I play music, different vibes every week, and do some rambling (usually too much rambling)",background:"#6f69dd",hosts:[(0,c.nf)("Sophie")],scheduleString:"Every Thursday from 3:30pm to 4:30pm",schedule:new o.N("30 15 * * 4",60)},{name:"Latino Hour",splash_text:":D",description:"Just vibe and listen to music from across Latin America.",background:"#ddfe60",hosts:[(0,c.nf)("Zoe")],scheduleString:"Every Friday from 4pm to 5pm",schedule:new o.N("0 16 * * 5",60)},{name:"Timezones",splash_text:"International Music and Good Vibes",description:"Come and listen to music from all over the world! There's no jet lag here, only Timezones.",background:"#232323",hosts:[(0,c.nf)("Trey")],scheduleString:"Every Wednesday from 3:30pm to 4:30pm",schedule:new o.N("30 15 * * 3",60)},{name:"The Bard's Tale",splash_text:"Where every note tells a tale of bravery, magic, and mayhem!",description:"",background:"#ddfe60",hosts:[(0,c.nf)("Caden")],scheduleString:"Every Sunday from 1pm to 3pm",schedule:new o.N("0 13 * * 0",120)},{name:"CCPR",splash_text:"Cornell College Public Radio",description:"Because we can do anything in 18 ~~days~~ minutes!",background:"#ddfe60",hosts:[(0,c.nf)("Adrien"),(0,c.nf)("Sophie")],scheduleString:"Every Monday from 8:05am to 8:23am",schedule:new o.N("5 8 * * 1",18)},{name:"The Box",splash_text:"",description:"Vibe with music and the occasional conversation",background:"#ddfe60",hosts:[(0,c.nf)("Brock")],guests:"Garnett Strack",scheduleString:"Every Friday from 8pm to 9pm",schedule:new o.N("0 20 * * 5",60)}];function a(e){return i.filter((function(t){return t.hosts.includes(e)||t.hosts.includes(c.O_)}))}function s(){return i.filter((function(e){return!0!==e.hidden&&!(void 0!==e.hiddenAfter&&e.hiddenAfter.getTime()<Date.now())}))}function l(e,t){return!0===t?i.find((function(t){return(0,r.l)(t.name)===(0,r.l)(e)})):i.find((function(t){return t.name===e}))}function d(){return s().filter((function(e){return void 0!==e.schedule.getNextOccurance()})).sort((function(e,t){var n=e.schedule.getNextOccurance(),r=t.schedule.getNextOccurance();return void 0===n||void 0===r?0:n.getTime()-r.getTime()}))}function u(){return s().filter((function(e){return e.schedule.isCurrent()}))}function m(e){return e.sort((function(e,t){var n=e.name.startsWith("The ")?e.name.slice(4):e.name,r=t.name.startsWith("The ")?t.name.slice(4):t.name;return n.localeCompare(r)}))}},6471:function(e,t,n){n.r(t);var r=n(7689),c=n(1087),o=n(1425),i=n(7266),a=n(3554),s=n(9739),l=n(184);t.default=function(){var e=(0,r.UO)().name,t=(0,s.wt)(e||"",!0);return t?(0,l.jsxs)("div",{className:"text-white",children:[(0,l.jsx)(o.Z,{}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"bg-gradient-to-b to-purple-900 from-purple-700 flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4",children:(0,l.jsxs)("div",{className:"flex flex-col items-center w-full",children:[(0,l.jsx)("h1",{className:"text-2xl",children:t.name}),(0,l.jsx)("h2",{className:"text-xl",children:t.splash_text}),(0,l.jsx)(i.Z,{className:"p-4 bg-violet-700 rounded-xl my-8 text-center",children:t.description||"*No description!*"}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("h2",{className:"text-xl text-center",children:"Hosts"}),(0,l.jsx)("div",{className:"flex flex-wrap justify-center p-4 w-full",children:t.hosts.map((function(e){return(0,l.jsx)(a.Z,{member:e},e.name)}))})]})]})})}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)(c.rU,{to:"/schedule/shows",className:"text-white",children:"Back to Shows"})})})]}):(0,l.jsx)("div",{children:"Show not found"})}},3429:function(e,t){var n="code",r=[],c="f121",o="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z";t.DF={prefix:"fas",iconName:n,icon:[640,512,r,c,o]},t.dT=t.DF},9124:function(e,t){var n="dollar-sign",r=[128178,61781,"dollar","usd"],c="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z";t.DF={prefix:"fas",iconName:n,icon:[320,512,r,"24",c]},t.eg=t.DF},1074:function(e,t){var n="headphones",r=[127911],c="f025",o="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z";t.DF={prefix:"fas",iconName:n,icon:[512,512,r,c,o]},t.It=t.DF},2612:function(e,t){var n="medal",r=[127941],c="f5a2",o="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z";t.DF={prefix:"fas",iconName:n,icon:[512,512,r,c,o]},t._s=t.DF},9585:function(e,t){var n="music",r=[127925],c="f001",o="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z";t.DF={prefix:"fas",iconName:n,icon:[512,512,r,c,o]},t.Xi=t.DF},4077:function(e,t){var n="user-tie",r=[],c="f508",o="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z";t.DF={prefix:"fas",iconName:n,icon:[448,512,r,c,o]},t.Cv=t.DF}}]);
//# sourceMappingURL=471.9a9717f1.chunk.js.map