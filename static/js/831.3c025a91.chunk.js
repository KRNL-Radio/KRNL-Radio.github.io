"use strict";(self.webpackChunkkrnl_website=self.webpackChunkkrnl_website||[]).push([[831],{4325:function(e,t,n){var s=n(9439),r=n(2791),a=n(9650),o=n(184);function i(e){var t=e.to,n=e.hideDays,i=e.children,l=r.useState({days:0,hours:0,minutes:0,seconds:0}),c=(0,s.Z)(l,2),u=c[0],d=c[1],h=r.useState(!1),f=(0,s.Z)(h,2),m=f[0],x=f[1];return r.useEffect((function(){var e=function(){var e=new Date,s=t.getTime()-e.getTime();s<0&&(s=0),0===s&&!1===m&&x(!0);var r=0;!1===n&&(s-=864e5*(r=Math.floor(s/864e5)));var o=Math.floor(s/36e5);s-=36e5*o;var i=Math.floor(s/6e4);s-=6e4*i;var l=Math.floor(s/1e3);d({days:(0,a.Z)(r,0,99),hours:(0,a.Z)(o,0,99),minutes:(0,a.Z)(i,0,99),seconds:(0,a.Z)(l,0,99)})};e();var s=setInterval(e,1e3);return function(){return clearInterval(s)}}),[t,n,m]),m&&i?(0,o.jsx)(o.Fragment,{children:i}):n?(0,o.jsxs)("span",{className:"countdown font-mono",children:[(0,o.jsx)("span",{style:{"--value":u.hours}}),"h",(0,o.jsx)("span",{style:{"--value":u.minutes}}),"m",(0,o.jsx)("span",{style:{"--value":u.seconds}}),"s"]}):(0,o.jsxs)("span",{className:"countdown font-mono",children:[(0,o.jsx)("span",{style:{"--value":u.days}}),"d",(0,o.jsx)("span",{style:{"--value":u.hours}}),"h",(0,o.jsx)("span",{style:{"--value":u.minutes}}),"m",(0,o.jsx)("span",{style:{"--value":u.seconds}}),"s"]})}i.defaultProps={hideDays:!1},t.Z=i},9739:function(e,t,n){n.d(t,{$N:function(){return h},Ai:function(){return d},Y0:function(){return u},Y9:function(){return i},o8:function(){return o},wt:function(){return c},y0:function(){return l}});var s=n(5633),r=n(3250),a=n(8936),o=[{name:"The Graveyard Shift",splash_text:"",description:"Alt is such a broad genre. What does any of it even mean? All I know is you love listening to me every week.",background:"#fc73e3",hosts:[(0,r.nf)("Adrien")],scheduleString:"Every Tuesday from 10pm to 11pm",schedule:new a.N("0 22 * * 2",60)},{name:"Stochastic Shuffle",splash_text:"Unpredictability at its finest - every time, by design!",description:"This is a totally unplanned show, where anything can happen (within contractual obligations). There's no logic behind this show, it just is.",background:"#0f3cec",hosts:[(0,r.nf)("Mark")],scheduleString:"Every Monday from 9 pm to 10 pm",schedule:new a.N("0 21 * * 1",60)},{name:"The Vibe",splash_text:"vibes~",description:"Somehow even *more* random than Mark's show, but at least 10x more chill! Ice not required.\n\n*when he feels like it",background:"#1c2dae",hosts:[(0,r.nf)("Grayson")],scheduleString:"Every Sunday from 4pm to 5pm*",schedule:new a.N("0 16 * * 0",60)},{name:"The After School Special",splash_text:"Because no one else streams earlier!",description:"I play music, different vibes every week, and do some rambling (usually too much rambling)",background:"#6f69dd",hosts:[(0,r.nf)("Sophie")],scheduleString:"Every Thursday from 3:15pm to 4:15pm",schedule:new a.N("15 15 * * 4",60)},{name:"Latino Hour",splash_text:":D",description:"Just vibe and listen to music from across Latin America.",background:"#ddfe60",hosts:[(0,r.nf)("Zoe")],scheduleString:"Every Friday from 4pm to 5pm",schedule:new a.N("0 16 * * 5",60)},{name:"Timezones",splash_text:"International Music and Good Vibes",description:"Come and listen to music from all over the world! There's no jet lag here, only Timezones.",background:"#232323",hosts:[(0,r.nf)("Trey")],scheduleString:"Every Wednesday from 3:30pm to 4:30pm",schedule:new a.N("30 15 * * 3",60)},{name:"CCPR",splash_text:"Cornell College Public Radio",description:"Because we can do anything in 18 ~~days~~ minutes!",background:"#ddfe60",hosts:[(0,r.nf)("Adrien"),(0,r.nf)("Sophie")],scheduleString:"Every Monday from 8:05am to 8:23am",schedule:new a.N("5 8 * * 1",18)},{name:"The Box",splash_text:"",description:"Vibe with music and the occasional conversation",background:"#ddfe60",hosts:[(0,r.nf)("Brock")],guests:"Garnett Strack",scheduleString:"Every Friday from 8pm to 9pm",schedule:new a.N("0 20 * * 5",60)},{name:"Twin Suns",splash_text:"",description:"A show about Star Wars (and other stuff idk im making stuff up ~mark)",background:"#ddfe60",hosts:[(0,r.nf)("Jake"),(0,r.nf)("Sami")],scheduleString:"Every Tuesday from 8:30pm to 9:30pm",schedule:new a.N("30 20 * * 2",60)},{name:"Melatonin",splash_text:"",description:"WORK IN PROGRESS - Check Instagram for updates!",background:"#ddfe60",hosts:[(0,r.nf)("Mark")],scheduleString:"Every Saturday from 11pm to 1am (for now)",schedule:new a.N("0 23 * * 6",120)}];function i(e){return o.filter((function(t){return t.hosts.includes(e)||t.hosts.includes(r.O_)}))}function l(){return o.filter((function(e){return!0!==e.hidden&&!(void 0!==e.hiddenAfter&&e.hiddenAfter.getTime()<Date.now())}))}function c(e,t){return!0===t?o.find((function(t){return(0,s.l)(t.name)===(0,s.l)(e)})):o.find((function(t){return t.name===e}))}function u(){return l().filter((function(e){return void 0!==e.schedule.getNextOccurance()})).sort((function(e,t){var n=e.schedule.getNextOccurance(),s=t.schedule.getNextOccurance();return void 0===n||void 0===s?0:n.getTime()-s.getTime()}))}function d(){return l().filter((function(e){return e.schedule.isCurrent()}))}function h(e){return e.sort((function(e,t){var n=e.name.startsWith("The ")?e.name.slice(4):e.name,s=t.name.startsWith("The ")?t.name.slice(4):t.name;return n.localeCompare(s)}))}},3127:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var s=n(4165),r=n(5861),a=n(9439),o=n(4889),i=n(9806),l=n(2791),c=n(7087),u=n(4325),d=n(1425),h=n(1541),f=n(3363),m=n.p+"static/media/silence.434cb1544ca911aafbb0.mp3",x=n(9739),p=n(9650),v=n(184);function w(e){var t=e.from,n=e.hideDays,s=e.pause,r=e.forceZero,o=l.useState({days:0,hours:0,minutes:0,seconds:0}),i=(0,a.Z)(o,2),c=i[0],u=i[1];return l.useEffect((function(){var e=function(){if(!s)if(r)u({days:0,hours:0,minutes:0,seconds:0});else{var e=(new Date).getTime()-t.getTime(),a=0;!1===n&&(e-=864e5*(a=Math.floor(e/864e5)));var o=Math.floor(e/36e5);e-=36e5*o;var i=Math.floor(e/6e4);e-=6e4*i;var l=Math.floor(e/1e3);u({days:(0,p.Z)(a,0,99),hours:(0,p.Z)(o,0,99),minutes:(0,p.Z)(i,0,99),seconds:(0,p.Z)(l,0,99)})}};e();var a=setInterval(e,1e3);return function(){return clearInterval(a)}}),[t,n,s,r]),n?(0,v.jsxs)("span",{className:"countdown font-mono",children:[(0,v.jsx)("span",{style:{"--value":c.hours}}),"h",(0,v.jsx)("span",{style:{"--value":c.minutes}}),"m",(0,v.jsx)("span",{style:{"--value":c.seconds}}),"s"]}):(0,v.jsxs)("span",{className:"countdown font-mono",children:[(0,v.jsx)("span",{style:{"--value":c.days}}),"d",(0,v.jsx)("span",{style:{"--value":c.hours}}),"h",(0,v.jsx)("span",{style:{"--value":c.minutes}}),"m",(0,v.jsx)("span",{style:{"--value":c.seconds}}),"s"]})}w.defaultProps={hideDays:!1,pause:!1,forceZero:!1};var y=w,j=n(9085);function g(){var e=l.useState([]),t=(0,a.Z)(e,2),n=t[0],d=t[1],m=l.useState(!0),x=(0,a.Z)(m,2),p=x[0],w=x[1],y=l.useState(""),j=(0,a.Z)(y,2),g=j[0],b=j[1],N=l.useState([]),S=(0,a.Z)(N,2),k=S[0],Z=S[1],_=l.useState(window.player.requests_core.status),T=(0,a.Z)(_,2),C=T[0],M=T[1],q=l.useState(window.player.requests_core.probable_next_request),E=(0,a.Z)(q,2),D=E[0],A=E[1];return(0,l.useEffect)((function(){window.player.requests_core.get_tracks().then((function(e){d(e),Z(e),w(!1)}))}),[]),(0,l.useEffect)((function(){Z(""===g?n:n.filter((function(e){return e.title.toLowerCase().includes(g.toLowerCase())||e.artist.toLowerCase().includes(g.toLowerCase())})))}),[g,n]),(0,l.useEffect)((function(){var e=setInterval((function(){window.player.requests_core.update_throttle_status(),M(window.player.requests_core.status),A(window.player.requests_core.probable_next_request)}),1e3);return function(){clearInterval(e)}}),[]),(0,v.jsxs)("div",{className:"flex flex-col w-full",children:[(0,v.jsx)("div",{className:"text-2xl text-white",children:"Request a Song"}),(0,v.jsx)("input",{type:"text",placeholder:"Search...",className:"input input-bordered w-full",onChange:function(e){return b(e.target.value)}}),"temporary_throttled"===C||"daily_throttled"===C?(0,v.jsxs)("div",{className:"text-xl text-white",children:["You've been throttled! Try again in about"," ",(0,v.jsx)(u.Z,{to:D,hideDays:!0})]}):(0,v.jsx)(v.Fragment,{}),(0,v.jsxs)("div",{className:"overscroll-contain overflow-auto h-96",children:[p?(0,h.z3)():k.map((function(e){var t;return(0,v.jsxs)("div",{className:"flex flex-row items-center border-t p-2 w-full",children:[(0,v.jsx)(c.LazyLoadImage,{src:null!==(t=e.artwork.url)&&void 0!==t?t:f,className:"w-16 h-16 rounded-lg",alt:"",effect:"opacity",placeholder:(0,v.jsx)(h.yM,{})}),(0,v.jsxs)("div",{className:"flex flex-col px-4",children:[(0,v.jsx)("div",{className:"text-white",children:e.title}),(0,v.jsx)("div",{className:"text-white",children:e.artist})]}),(0,v.jsx)("div",{className:"flex flex-row items-center justify-end flex-grow",children:(0,v.jsx)(i.G,{onClick:(0,r.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.player.requests_core.request(e.id);case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:M(window.player.requests_core.status),A(window.player.requests_core.probable_next_request);case 9:case"end":return t.stop()}}),t,null,[[0,5]])}))),icon:o.XS,className:"text-white text-xl p-2 cursor-pointer"})})]},e.id)})),0===k.length&&0!==n.length?(0,v.jsx)("div",{className:"text-white text-xl",children:"No results found"}):(0,v.jsx)(v.Fragment,{}),0===n.length?(0,v.jsx)("div",{className:"text-white text-xl",children:"Requests disabled!"}):(0,v.jsx)(v.Fragment,{})]})]})}var b=function(){var e=l.useState(!1),t=(0,a.Z)(e,2),n=t[0],o=t[1],i=l.useState(!1),c=(0,a.Z)(i,2),h=c[0],p=c[1],w=l.useState(!1),b=(0,a.Z)(w,2),N=b[0],S=b[1],k=l.useState("Loading..."),Z=(0,a.Z)(k,2),_=Z[0],T=Z[1],C=l.useState("Loading..."),M=(0,a.Z)(C,2),q=M[0],E=M[1],D=l.useState(f),A=(0,a.Z)(D,2),I=A[0],F=A[1],L=l.useState(null),P=(0,a.Z)(L,2),R=P[0],O=P[1],G=l.useState(new Date),W=(0,a.Z)(G,2),z=W[0],B=W[1],Y=l.useState(!1),J=(0,a.Z)(Y,2),V=J[0],K=J[1];return(0,l.useEffect)((function(){window.player.start_fast_refresh();var e=function(e){q!==e.host_string&&(E(e.host_string),"Loading..."!==e.host_string&&"Max Jr."!==e.host_string?h&&S(!0):h&&S(!1))};window.player.on("metadata",e);var t=function(e){O((0,x.Ai)()[0]||(0,x.Y0)()[0]),K((0,x.Ai)().length>0),T(e.title),F(e.album_art)};return window.player.on("current_track",t),function(){window.player.stop_refreshing(),window.player.unbind("metadata",e),window.player.unbind("current_track",t)}})),(0,l.useEffect)((function(){B(new Date),window.player.volume(1),N?window.player.play():window.player.unload()}),[N]),(0,v.jsxs)("div",{children:[(0,v.jsx)(d.Z,{}),(0,v.jsx)("h1",{className:"text-4xl text-center",children:"KRNL Dev Player"}),(0,v.jsx)("h2",{className:"text-2xl text-center",children:"For the info desk and/or totallynotmark6!"}),(0,v.jsxs)("div",{className:"flex flex-wrap justify-center p-4 w-full",children:[n?(0,v.jsx)("div",{className:"btn btn-disabled btn-primary mx-2","data-theme":"dark",children:"Primed"}):(0,v.jsx)("button",{className:"btn btn-primary mx-2",onClick:(0,r.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),t=new Audio(m),e.next=4,t.play();case 4:case"end":return e.stop()}}),e)}))),children:"Prime"}),(0,v.jsx)("label",{htmlFor:"requests-modal",className:"btn btn-secondary mx-2 cursor-pointer",id:"requests-modal-icon",children:"Open Request Menu"})]}),n?(0,v.jsxs)("div",{className:"flex flex-wrap justify-center p-4 w-full",children:[h?(0,v.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){return p(!1)},children:"Stop Monitoring"}):(0,v.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){return p(!0)},children:"Start Monitoring"}),N?(0,v.jsx)("button",{className:"btn btn-secondary mx-2",onClick:function(){return S(!1)},children:"Pause"}):(0,v.jsx)("button",{className:"btn btn-accent mx-2",onClick:function(){return S(!0)},children:"Play"})]}):(0,v.jsx)(v.Fragment,{}),(0,v.jsx)("div",{className:"text-xl text-center",children:(0,v.jsx)(y,{from:z,forceZero:!N})}),(0,v.jsxs)("div",{className:"flex flex-wrap justify-center p-4 w-full",children:[(0,v.jsx)("img",{src:I,alt:"Album Art",className:"rounded-lg object-cover place-self-center w-1/12 h-1/12 select-none pointer-events-none transition duration-500 "+(N?"":" filter grayscale")}),(0,v.jsxs)("div",{className:"flex flex-col justify-center mx-4",children:[(0,v.jsx)("div",{className:"text-2xl text-center",children:_}),(0,v.jsx)("div",{className:"text-xl text-center",children:q})]})]}),(0,v.jsx)("div",{className:"flex flex-wrap justify-center p-4 w-full",children:(0,v.jsxs)("div",{className:"flex flex-col justify-center mx-4",children:[(0,v.jsx)("div",{className:"text-3xl text-center",children:"Next Scheduled Show"}),R?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"text-2xl text-center",children:R.name}),(0,v.jsx)("div",{className:"text-xl text-center",children:R.hosts.map((function(e){return e.name})).join(" & ")}),(0,v.jsx)("div",{className:"text-xl text-center",children:V?(0,v.jsxs)("div",{className:"text-red-400",children:[(0,v.jsx)("div",{children:"Ends in:"}),(0,v.jsx)(u.Z,{to:R.schedule.endToDate()||new Date,hideDays:!1})]}):(0,v.jsx)(u.Z,{to:R.schedule.getNextOccurance()||new Date,hideDays:!1})})]}):(0,v.jsx)("div",{className:"text-xl text-center",children:"No shows scheduled"})]})}),(0,v.jsx)("div",{className:"flex flex-wrap justify-center p-4 w-full",children:(0,v.jsx)("button",{className:"btn btn-error mx-2",onClick:(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.Am.promise(new Promise((function(e,t){setTimeout(t,2760)})),{pending:"Running func setupNotifs()",success:"it worked",error:"it failed!!!!!1!1"});case 2:case"end":return e.stop()}}),e)}))),children:"Run Dev Func (DO NOT PRESS)"})}),(0,v.jsx)("input",{type:"checkbox",id:"requests-modal",className:"modal-toggle","data-theme":"luxury"}),(0,v.jsx)("div",{className:"modal modal-middle","data-theme":"luxury",children:(0,v.jsxs)("div",{className:"modal-box",children:[(0,v.jsx)("div",{className:"flex flex-row items-center",children:(0,v.jsx)(g,{})}),(0,v.jsx)("div",{className:"modal-action",children:(0,v.jsx)("label",{htmlFor:"requests-modal",className:"btn",children:"Close"})})]})})]})}},9650:function(e,t,n){function s(e,t,n){return Math.min(Math.max(e,t),n)}n.d(t,{Z:function(){return s}})},3363:function(e,t,n){e.exports=n.p+"static/media/placeholder.0f8aa0177050bfec15f4.jpg"}}]);
//# sourceMappingURL=831.3c025a91.chunk.js.map