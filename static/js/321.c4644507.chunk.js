"use strict";(self.webpackChunkkrnl_website=self.webpackChunkkrnl_website||[]).push([[321],{4325:function(e,t,n){var s=n(9439),a=n(2791),r=n(9650),o=n(184);function i(e){var t=e.to,n=e.hideDays,i=e.children,l=a.useState({days:0,hours:0,minutes:0,seconds:0}),c=(0,s.Z)(l,2),u=c[0],d=c[1],h=a.useState(!1),f=(0,s.Z)(h,2),x=f[0],m=f[1];return a.useEffect((function(){var e=function(){var e=new Date,s=t.getTime()-e.getTime();s<0&&(s=0),0===s&&!1===x&&m(!0);var a=0;!1===n&&(s-=864e5*(a=Math.floor(s/864e5)));var o=Math.floor(s/36e5);s-=36e5*o;var i=Math.floor(s/6e4);s-=6e4*i;var l=Math.floor(s/1e3);d({days:(0,r.Z)(a,0,99),hours:(0,r.Z)(o,0,99),minutes:(0,r.Z)(i,0,99),seconds:(0,r.Z)(l,0,99)})};e();var s=setInterval(e,1e3);return function(){return clearInterval(s)}}),[t,n,x]),x&&i?(0,o.jsx)(o.Fragment,{children:i}):n?(0,o.jsxs)("span",{className:"countdown font-mono",children:[(0,o.jsx)("span",{style:{"--value":u.hours}}),"h",(0,o.jsx)("span",{style:{"--value":u.minutes}}),"m",(0,o.jsx)("span",{style:{"--value":u.seconds}}),"s"]}):(0,o.jsxs)("span",{className:"countdown font-mono",children:[(0,o.jsx)("span",{style:{"--value":u.days}}),"d",(0,o.jsx)("span",{style:{"--value":u.hours}}),"h",(0,o.jsx)("span",{style:{"--value":u.minutes}}),"m",(0,o.jsx)("span",{style:{"--value":u.seconds}}),"s"]})}i.defaultProps={hideDays:!1},t.Z=i},573:function(e,t,n){n.d(t,{wt:function(){return h},y0:function(){return d},Ai:function(){return x},Y0:function(){return f},Y9:function(){return u},o8:function(){return c},$N:function(){return m}});var s=n(5633),a=n(5848),r=n(8936),o=n.p+"static/media/twin-suns.d84454e56d018beabe52.png",i=n.p+"static/media/after-sunset.3ca524b5cf7de855a1dd.png",l=n.p+"static/media/after-school-special.c01962e84621c7001bab.png",c=[{name:"The Graveyard Shift",splash_text:"",description:"Alt is such a broad genre. What does any of it even mean? All I know is you love listening to me every week.",background:"#fc73e3",hosts:[(0,a.nf)("Adrien")],schedule:new r.N("0 22 * * 2",60)},{name:"Stochastic Shuffle",splash_text:"Unpredictability at its finest - every time, by design!",description:"This is a totally unplanned show, where anything can happen (within contractual obligations). There's no logic behind this show, it just is.",background:"#0f3cec",hosts:[(0,a.nf)("Mark")],schedule:new r.N("0 21 * * 1",60)},{name:"The Vibe",splash_text:"vibes~",description:"Somehow even *more* random than Mark's show, but at least 10x more chill! Ice not required.\n\n*when he feels like it",background:"#1c2dae",hosts:[(0,a.nf)("Grayson")],schedule:new r.N("0 16 * * 0",60)},{name:"The After School Special",splash_text:"Because no one else streams earlier!",description:"I play music, different vibes every week, and do some rambling (usually too much rambling)",background:"#6f69dd",hosts:[(0,a.nf)("Sophie")],logo:{transparent:l,opaque:l},schedule:new r.N("15 15 * * 4",60)},{name:"Latino Hour",splash_text:"",description:"Just vibe and listen to music from across Latin America.\n    \n[**Suggestions form!**](https://forms.gle/RuyBbKaaxmkEQ3bD9) (Requires Cornell Email! Use the Contact Form if you don't have one)",background:"#ddfe60",hosts:[(0,a.nf)("Zoe")],schedule:new r.N("0 16 * * 5",60)},{name:"Timezones",splash_text:"International Music and Good Vibes",description:"Come and listen to music from all over the world! There's no jet lag here, only Timezones.",background:"#232323",hosts:[(0,a.nf)("Trey")],schedule:new r.N("30 15 * * 3",60)},{name:"CCPR",splash_text:"Cornell College Public Radio",description:"Because we can do anything in 18 ~~days~~ minutes!",background:"#ddfe60",hosts:[(0,a.nf)("Adrien"),(0,a.nf)("Sophie")],schedule:new r.N("5 8 * * 1",18)},{name:"The Box",splash_text:"",description:"Vibe with music and the occasional conversation",background:"#ddfe60",hosts:[(0,a.nf)("Brock")],guests:"Garnett Strack",schedule:new r.N("0 20 * * 5",60)},{name:"Twin Suns",splash_text:"",description:"One of us knows a lot about Star Wars, the other... \xaf\\\\_(\u30c4)_/\xaf",background:"#ddfe60",hosts:[(0,a.nf)("Jake"),(0,a.nf)("Sami")],logo:{transparent:o,opaque:o},schedule:new r.N("30 20 * * 2",60)},{name:"Melatonin",splash_text:"",description:"WORK IN PROGRESS - Check Instagram for updates!",background:"#ddfe60",hosts:[(0,a.nf)("Mark")],schedule:new r.N("0 23 * * 6",120)},{name:"After Sunset",splash_text:"",description:"",background:"#ddfe60",hosts:[(0,a.nf)("Bruce")],logo:{transparent:i,opaque:i},schedule:new r.N("0 20 * * 6",60)},{name:"Craft Time",splash_text:"",description:"",background:"#ddfe60",hosts:[(0,a.nf)("Ronnie"),(0,a.nf)("Ori")],schedule:new r.N("30 16 * * 1",60)}];function u(e){return c.filter((function(t){return t.hosts.includes(e)||t.hosts.includes(a.O_)}))}function d(){return c.filter((function(e){return!0!==e.hidden&&!(void 0!==e.hiddenAfter&&e.hiddenAfter.getTime()<Date.now())}))}function h(e,t){return!0===t?c.find((function(t){return(0,s.l)(t.name)===(0,s.l)(e)})):c.find((function(t){return t.name===e}))}function f(){return d().filter((function(e){return void 0!==e.schedule.getNextOccurance()})).sort((function(e,t){var n=e.schedule.getNextOccurance(),s=t.schedule.getNextOccurance();return void 0===n||void 0===s?0:n.getTime()-s.getTime()}))}function x(){return d().filter((function(e){return e.schedule.isCurrent()}))}function m(e){return e.sort((function(e,t){var n=e.name.startsWith("The ")?e.name.slice(4):e.name,s=t.name.startsWith("The ")?t.name.slice(4):t.name;return n.localeCompare(s)}))}},3127:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var s=n(4165),a=n(5861),r=n(9439),o=n(4889),i=n(9806),l=n(2791),c=n(7087),u=n(4325),d=n(1425),h=n(1541),f=n(3363),x=n.p+"static/media/silence.434cb1544ca911aafbb0.mp3",m=n(573),p=n(9650),w=n(184);function v(e){var t=e.from,n=e.hideDays,s=e.pause,a=e.forceZero,o=l.useState({days:0,hours:0,minutes:0,seconds:0}),i=(0,r.Z)(o,2),c=i[0],u=i[1];return l.useEffect((function(){var e=function(){if(!s)if(a)u({days:0,hours:0,minutes:0,seconds:0});else{var e=(new Date).getTime()-t.getTime(),r=0;!1===n&&(e-=864e5*(r=Math.floor(e/864e5)));var o=Math.floor(e/36e5);e-=36e5*o;var i=Math.floor(e/6e4);e-=6e4*i;var l=Math.floor(e/1e3);u({days:(0,p.Z)(r,0,99),hours:(0,p.Z)(o,0,99),minutes:(0,p.Z)(i,0,99),seconds:(0,p.Z)(l,0,99)})}};e();var r=setInterval(e,1e3);return function(){return clearInterval(r)}}),[t,n,s,a]),n?(0,w.jsxs)("span",{className:"countdown font-mono",children:[(0,w.jsx)("span",{style:{"--value":c.hours}}),"h",(0,w.jsx)("span",{style:{"--value":c.minutes}}),"m",(0,w.jsx)("span",{style:{"--value":c.seconds}}),"s"]}):(0,w.jsxs)("span",{className:"countdown font-mono",children:[(0,w.jsx)("span",{style:{"--value":c.days}}),"d",(0,w.jsx)("span",{style:{"--value":c.hours}}),"h",(0,w.jsx)("span",{style:{"--value":c.minutes}}),"m",(0,w.jsx)("span",{style:{"--value":c.seconds}}),"s"]})}v.defaultProps={hideDays:!1,pause:!1,forceZero:!1};var y=v,j=n(9085);function b(){var e=l.useState([]),t=(0,r.Z)(e,2),n=t[0],d=t[1],x=l.useState(!0),m=(0,r.Z)(x,2),p=m[0],v=m[1],y=l.useState(""),j=(0,r.Z)(y,2),b=j[0],g=j[1],N=l.useState([]),k=(0,r.Z)(N,2),_=k[0],Z=k[1],S=l.useState(window.player.requests_core.status),C=(0,r.Z)(S,2),q=C[0],T=C[1],M=l.useState(window.player.requests_core.probable_next_request),D=(0,r.Z)(M,2),A=D[0],R=D[1];return(0,l.useEffect)((function(){window.player.requests_core.get_tracks().then((function(e){d(e),Z(e),v(!1)}))}),[]),(0,l.useEffect)((function(){Z(""===b?n:n.filter((function(e){return e.title.toLowerCase().includes(b.toLowerCase())||e.artist.toLowerCase().includes(b.toLowerCase())})))}),[b,n]),(0,l.useEffect)((function(){var e=setInterval((function(){window.player.requests_core.update_throttle_status(),T(window.player.requests_core.status),R(window.player.requests_core.probable_next_request)}),1e3);return function(){clearInterval(e)}}),[]),(0,w.jsxs)("div",{className:"flex flex-col w-full",children:[(0,w.jsx)("div",{className:"text-2xl text-white",children:"Request a Song"}),(0,w.jsx)("input",{type:"text",placeholder:"Search...",className:"input input-bordered w-full",onChange:function(e){return g(e.target.value)}}),"temporary_throttled"===q||"daily_throttled"===q?(0,w.jsxs)("div",{className:"text-xl text-white",children:["You've been throttled! Try again in about"," ",(0,w.jsx)(u.Z,{to:A,hideDays:!0})]}):(0,w.jsx)(w.Fragment,{}),(0,w.jsxs)("div",{className:"overscroll-contain overflow-auto h-96",children:[p?(0,h.z3)():_.map((function(e){var t;return(0,w.jsxs)("div",{className:"flex flex-row items-center border-t p-2 w-full",children:[(0,w.jsx)(c.LazyLoadImage,{src:null!==(t=e.artwork.url)&&void 0!==t?t:f,className:"w-16 h-16 rounded-lg",alt:"",effect:"opacity",placeholder:(0,w.jsx)(h.yM,{})}),(0,w.jsxs)("div",{className:"flex flex-col px-4",children:[(0,w.jsx)("div",{className:"text-white",children:e.title}),(0,w.jsx)("div",{className:"text-white",children:e.artist})]}),(0,w.jsx)("div",{className:"flex flex-row items-center justify-end flex-grow",children:(0,w.jsx)(i.G,{onClick:(0,a.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.player.requests_core.request(e.id);case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:T(window.player.requests_core.status),R(window.player.requests_core.probable_next_request);case 9:case"end":return t.stop()}}),t,null,[[0,5]])}))),icon:o.XS,className:"text-white text-xl p-2 cursor-pointer"})})]},e.id)})),0===_.length&&0!==n.length?(0,w.jsx)("div",{className:"text-white text-xl",children:"No results found"}):(0,w.jsx)(w.Fragment,{}),0===n.length?(0,w.jsx)("div",{className:"text-white text-xl",children:"Requests disabled!"}):(0,w.jsx)(w.Fragment,{})]})]})}var g=function(){var e=l.useState(!1),t=(0,r.Z)(e,2),n=t[0],o=t[1],i=l.useState(!1),c=(0,r.Z)(i,2),h=c[0],p=c[1],v=l.useState(!1),g=(0,r.Z)(v,2),N=g[0],k=g[1],_=l.useState("Loading..."),Z=(0,r.Z)(_,2),S=Z[0],C=Z[1],q=l.useState("Loading..."),T=(0,r.Z)(q,2),M=T[0],D=T[1],A=l.useState(f),R=(0,r.Z)(A,2),I=R[0],E=R[1],L=l.useState(null),O=(0,r.Z)(L,2),P=O[0],F=O[1],B=l.useState(new Date),G=(0,r.Z)(B,2),W=G[0],z=G[1],Y=l.useState(!1),J=(0,r.Z)(Y,2),K=J[0],V=J[1];return(0,l.useEffect)((function(){window.player.start_fast_refresh();var e=function(e){M!==e.host_string&&(D(e.host_string),"Loading..."!==e.host_string&&"Max Jr."!==e.host_string?h&&k(!0):h&&k(!1))};window.player.on("metadata",e);var t=function(e){F((0,m.Ai)()[0]||(0,m.Y0)()[0]),V((0,m.Ai)().length>0),C(e.title),E(e.album_art)};return window.player.on("current_track",t),function(){window.player.stop_refreshing(),window.player.unbind("metadata",e),window.player.unbind("current_track",t)}})),(0,l.useEffect)((function(){z(new Date),window.player.volume(1),N?window.player.play():window.player.unload()}),[N]),(0,w.jsxs)("div",{children:[(0,w.jsx)(d.Z,{}),(0,w.jsx)("h1",{className:"text-4xl text-center",children:"KRNL Dev Player"}),(0,w.jsx)("h2",{className:"text-2xl text-center",children:"For the info desk and/or totallynotmark6!"}),(0,w.jsxs)("div",{className:"flex flex-wrap justify-center p-4 w-full",children:[n?(0,w.jsx)("div",{className:"btn btn-disabled btn-primary mx-2","data-theme":"dark",children:"Primed"}):(0,w.jsx)("button",{className:"btn btn-primary mx-2",onClick:(0,a.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),t=new Audio(x),e.next=4,t.play();case 4:case"end":return e.stop()}}),e)}))),children:"Prime"}),(0,w.jsx)("label",{htmlFor:"requests-modal",className:"btn btn-secondary mx-2 cursor-pointer",id:"requests-modal-icon",children:"Open Request Menu"})]}),n?(0,w.jsxs)("div",{className:"flex flex-wrap justify-center p-4 w-full",children:[h?(0,w.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){return p(!1)},children:"Stop Monitoring"}):(0,w.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){return p(!0)},children:"Start Monitoring"}),N?(0,w.jsx)("button",{className:"btn btn-secondary mx-2",onClick:function(){return k(!1)},children:"Pause"}):(0,w.jsx)("button",{className:"btn btn-accent mx-2",onClick:function(){return k(!0)},children:"Play"})]}):(0,w.jsx)(w.Fragment,{}),(0,w.jsx)("div",{className:"text-xl text-center",children:(0,w.jsx)(y,{from:W,forceZero:!N})}),(0,w.jsxs)("div",{className:"flex flex-wrap justify-center p-4 w-full",children:[(0,w.jsx)("img",{src:I,alt:"Album Art",className:"rounded-lg object-cover place-self-center w-1/12 h-1/12 select-none pointer-events-none transition duration-500 "+(N?"":" filter grayscale")}),(0,w.jsxs)("div",{className:"flex flex-col justify-center mx-4",children:[(0,w.jsx)("div",{className:"text-2xl text-center",children:S}),(0,w.jsx)("div",{className:"text-xl text-center",children:M})]})]}),(0,w.jsx)("div",{className:"flex flex-wrap justify-center p-4 w-full",children:(0,w.jsxs)("div",{className:"flex flex-col justify-center mx-4",children:[(0,w.jsx)("div",{className:"text-3xl text-center",children:"Next Scheduled Show"}),P?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"text-2xl text-center",children:P.name}),(0,w.jsx)("div",{className:"text-xl text-center",children:P.hosts.map((function(e){return e.name})).join(" & ")}),(0,w.jsx)("div",{className:"text-xl text-center",children:K?(0,w.jsxs)("div",{className:"text-red-400",children:[(0,w.jsx)("div",{children:"Ends in:"}),(0,w.jsx)(u.Z,{to:P.schedule.endToDate()||new Date,hideDays:!1})]}):(0,w.jsx)(u.Z,{to:P.schedule.getNextOccurance()||new Date,hideDays:!1})})]}):(0,w.jsx)("div",{className:"text-xl text-center",children:"No shows scheduled"})]})}),(0,w.jsx)("div",{className:"flex flex-wrap justify-center p-4 w-full",children:(0,w.jsx)("button",{className:"btn btn-error mx-2",onClick:(0,a.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.Am.promise(new Promise((function(e,t){setTimeout(t,2760)})),{pending:"Running func setupNotifs()",success:"it worked",error:"it failed!!!!!1!1"});case 2:case"end":return e.stop()}}),e)}))),children:"Run Dev Func (DO NOT PRESS)"})}),(0,w.jsx)("input",{type:"checkbox",id:"requests-modal",className:"modal-toggle","data-theme":"luxury"}),(0,w.jsx)("div",{className:"modal modal-middle","data-theme":"luxury",children:(0,w.jsxs)("div",{className:"modal-box",children:[(0,w.jsx)("div",{className:"flex flex-row items-center",children:(0,w.jsx)(b,{})}),(0,w.jsx)("div",{className:"modal-action",children:(0,w.jsx)("label",{htmlFor:"requests-modal",className:"btn",children:"Close"})})]})})]})}},9650:function(e,t,n){function s(e,t,n){return Math.min(Math.max(e,t),n)}n.d(t,{Z:function(){return s}})},3363:function(e,t,n){e.exports=n.p+"static/media/placeholder.0f8aa0177050bfec15f4.jpg"}}]);
//# sourceMappingURL=321.c4644507.chunk.js.map