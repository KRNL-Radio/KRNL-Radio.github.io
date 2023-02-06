"use strict";(self.webpackChunkkrnl_website=self.webpackChunkkrnl_website||[]).push([[570],{272:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(9806),i=n(184);var s=function(e){var t=e.title,n=e.subtitle,s=e.background,o=e.badge,a=e.onClick;return void 0===a&&(a=function(){}),void 0===s?s="linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 100%)":s.startsWith("http")||s.startsWith("/")?s="linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 100%), url(".concat(s,")"):s.startsWith("#")?s="linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 100%), ".concat(s):(console.error("Invalid background type!"),s="linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 100%), url(".concat(s,")")),(0,i.jsx)("div",{className:"card m-1 overflow-hidden",onMouseMove:function(e){for(var t=0,n=Array.from(document.getElementsByClassName("card"));t<n.length;t++){var r=n[t],i=r.getBoundingClientRect(),s=e.clientX-i.left,o=e.clientY-i.top;r.style.setProperty("--mouse-x","".concat(s,"px")),r.style.setProperty("--mouse-y","".concat(o,"px"))}},onClick:a,children:(0,i.jsxs)("div",{className:"card-content",style:{background:s,backgroundSize:"cover",backgroundPosition:"center"},children:[(0,i.jsx)("div",{className:"card-badge-wrapper h-[140px]",children:void 0!==o&&(0,i.jsxs)("div",{className:"origin-top p-2 float-right mt-9 mr-9 w-72 text-center translate-x-[50%] rotate-45 z-4 ".concat(o.background||"bg-purple-500"),children:[void 0!==o.icon&&(0,i.jsx)(r.G,{icon:o.icon,className:"text-white text-lg"}),(0,i.jsx)("p",{className:"text-white text-md font-bold",children:o.text})]})}),(0,i.jsx)("div",{className:"card-info-wrapper",children:(0,i.jsx)("div",{className:"card-info",children:(0,i.jsxs)("div",{className:"card-info-title",children:[(0,i.jsx)("h3",{children:t}),(0,i.jsx)("h4",{children:n})]})})})]})})}},5885:function(e,t,n){var r=n(7689),i=n(5633),s=n(272),o=n(184);t.Z=function(e){var t,n=e.show,a=(0,r.s0)(),c=(null===(t=n.logo)||void 0===t?void 0:t.opaque)||n.background;return(0,o.jsx)(s.Z,{title:n.name,subtitle:n.scheduleString,background:c,onClick:function(){a("/schedule/shows/".concat((0,i.l)(n.name)))}})}},8936:function(e,t,n){n.d(t,{N:function(){return c}});var r=n(5671),i=n(3144),s=n(9483),o=n.n(s),a={tz:"America/Chicago"},c=function(){function e(t,n,i){(0,r.Z)(this,e),this.start=t,this.end=n,this.invalidAfter=i,this.start=t,this.end=n,this.invalidAfter=i}return(0,i.Z)(e,[{key:"isCurrent",value:function(){var e=new Date;if(this.invalidAfter&&e>this.invalidAfter)return!1;var t=this.start,n=this.end;if("string"===typeof t){var r=o().parseExpression(t,a),i=r.prev().toDate(),s=r.next().toDate();if("number"===typeof n){var c=new Date(i.getTime()+6e4*n),d=new Date(s.getTime()+6e4*n);Math.abs(c.getTime()-e.getTime())<Math.abs(d.getTime()-e.getTime())?(n=c,t=i):(n=d,t=s)}}else t instanceof Date&&"number"===typeof n&&(n=new Date(t.getTime()+6e4*n));return e>=t&&e<=n}},{key:"getNextOccurance",value:function(){var e=new Date;if(!(this.invalidAfter&&e>this.invalidAfter)){var t=this.start;return"string"===typeof t?o().parseExpression(t,a).next().toDate():e<t?t:void 0}}},{key:"endToDate",value:function(){var e=new Date,t=this.end;if("number"===typeof t){var n=this.start;if("string"===typeof n){var r=o().parseExpression(n,a),i=r.prev().toDate(),s=r.next().toDate();t=Math.abs(i.getTime()-e.getTime())<Math.abs(s.getTime()-e.getTime())?new Date(i.getTime()+6e4*t):new Date(s.getTime()+6e4*t)}else t=new Date(n.getTime()+6e4*t)}return t}}],[{key:"getParser",value:function(){return o()}},{key:"getParserOptions",value:function(){return a}},{key:"getParserFields",value:function(){return JSON.parse(JSON.stringify(o().parseExpression("0 0 0 * * *",a).fields))}}]),e}()},9739:function(e,t,n){n.d(t,{Ai:function(){return l},Y0:function(){return u},Y9:function(){return a},o8:function(){return o},wt:function(){return d},y0:function(){return c}});var r=n(5633),i=n(3770),s=n(8936),o=[{name:"The Graveyard Shift",splash_text:"",description:"Alt is such a broad genre. What does any of it even mean? All I know is you love listening to me every week.",background:"#fc73e3",hosts:[(0,i.nf)("Adrien")],scheduleString:"Every Tuesday from 10pm to 11pm",schedule:new s.N("0 22 * * 2",60)},{name:"Stochastic Shuffle",splash_text:"",description:"This is a totally unplanned show, where anything can happen (within contractual obligations). There's no logic behind this show, it just is.",background:"#0f3cec",hosts:[(0,i.nf)("Mark")],scheduleString:"Every Monday from 9 pm to 10 pm",schedule:new s.N("0 21 * * 1",60)},{name:"The Vibe",splash_text:"vibes~",description:"Somehow even *more* random than Mark's show, but at least 10x more chill! Ice not required.\n\n*when he feels like it",background:"#1c2dae",hosts:[(0,i.nf)("Grayson")],scheduleString:"Every Sunday from 9pm to 10pm*",schedule:new s.N("0 21 * * 0",60)},{name:"The After School Special",splash_text:"Because no one else streams earlier!",description:"I play music, different vibes every week, and do some rambling (usually too much rambling)",background:"#6f69dd",hosts:[(0,i.nf)("Sophie")],scheduleString:"Every Thursday from 3:30pm to 4:30pm",schedule:new s.N("30 15 * * 4",60)},{name:"Latino Hour",splash_text:":D",description:"Just vibe and listen to music from across Latin America.",background:"#ddfe60",hosts:[(0,i.nf)("Zoe")],scheduleString:"Every Friday from 4pm to 5pm",schedule:new s.N("0 16 * * 5",60)},{name:"Timezones",splash_text:"International Music and Good Vibes",description:"Come and listen to music from all over the world! There's no jet lag here, only Timezones.",background:"#232323",hosts:[(0,i.nf)("Trey"),(0,i.nf)("Zoe")],scheduleString:"Every Wednesday from 3:30pm to 4:30pm",schedule:new s.N("30 15 * * 3",60)},{name:"The Bard's Tale",splash_text:"The only show that matters",description:"",background:"#ddfe60",hosts:[(0,i.nf)("Caden")],scheduleString:"Every Sunday from 1pm to 3pm",schedule:new s.N("0 13 * * 0",120)},{name:"KRNL Tabling!",splash_text:"Come say hi!",description:"We'll be on the third floor of Thomas Commons during lunch! Come say hi! Mark (and someone else we just don't quite know who) will also be live throughout the entirety of lunch!",background:"#ddfe60",hosts:[i.O_],scheduleString:"Tuesday and Wednesday from 11am to 1pm in Thomas Commons",schedule:new s.N("0 11 24,25 1 *",120,new Date(2023,2,2)),hiddenAfter:new Date(2023,2,1)},{name:"CCPR",splash_text:"",description:"Because we can do anything in 18 ~~days~~ minutes!",background:"#ddfe60",hosts:[(0,i.nf)("Adrien"),(0,i.nf)("Sophie")],scheduleString:"Every Monday from 8am to 8:18am",schedule:new s.N("0 8 * * 1",18)},{name:"The Box",splash_text:"",description:"Vibe with music and the occasional conversation",background:"#ddfe60",hosts:[(0,i.nf)("Brock")],guests:"Garnett Strack",scheduleString:"Every Friday from 8pm to 9pm",schedule:new s.N("0 20 * * 5",60)}];function a(e){return o.filter((function(t){return t.hosts.includes(e)||t.hosts.includes(i.O_)}))}function c(){return o.filter((function(e){return!0!==e.hidden&&!(void 0!==e.hiddenAfter&&e.hiddenAfter.getTime()<Date.now())}))}function d(e,t){return!0===t?o.find((function(t){return(0,r.l)(t.name)===(0,r.l)(e)})):o.find((function(t){return t.name===e}))}function u(){return c().filter((function(e){return void 0!==e.schedule.getNextOccurance()})).sort((function(e,t){var n=e.schedule.getNextOccurance(),r=t.schedule.getNextOccurance();return void 0===n||void 0===r?0:n.getTime()-r.getTime()}))}function l(){return c().filter((function(e){return e.schedule.isCurrent()}))}},570:function(e,t,n){n.r(t);var r=n(5563),i=n(5885),s=n(9739),o=n(184);t.default=function(){return(0,o.jsxs)("div",{className:"text-white",children:[(0,o.jsx)(r.Z,{}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"flex flex-col items-center justify-center p-4",children:(0,o.jsx)("h1",{className:"text-4xl font-bold",children:"Shows"})}),(0,o.jsx)("div",{className:"flex flex-wrap justify-center p-4 w-full",children:(0,s.y0)().map((function(e){return(0,o.jsx)(i.Z,{show:e},e.name)}))})]})]})}}}]);
//# sourceMappingURL=570.438e4543.chunk.js.map