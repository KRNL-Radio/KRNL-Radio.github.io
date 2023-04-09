"use strict";(self.webpackChunkkrnl_website=self.webpackChunkkrnl_website||[]).push([[960],{960:function(e,t,n){n.r(t);var o=n(1413),s=n(4692),i=n(3761),r=n(9739),a=n(8320),d=n(4526),u=n(184);function l(){window.api=window.api||{},window.api.fps=d.R,window.api.refresh=l,window.api.data=window.api.data||{},window.api.data.events=s.U3,window.api.data.hosts=i.E7,window.api.data.special_hosts={KRNL:i.O_,NOT_FOUND:i.Qq,AUTOMATED:i.Fj},window.api.data.shows=r.o8,window.api.data.themes=a.np,window.api.player=window.api.player||{},window.player._refresh_metadata().then((function(){window.api.player.formats={desktop:window.player.desktop_format,mobile:window.player.mobile_format},window.api.player.data=window.player.player_data})),window.api.requests=window.api.requests||{},window.api.requests.options={max_per_day:window.player.requests_core.max_requests_per_day,max_per_period:window.player.requests_core.max_requests_per_period,period_length:window.player.requests_core.period_length},window.api.requests.get_tracks=window.player.requests_core.get_tracks(),window.api.requests.request_song=window.player.requests_core.request,window.api.requests.stats={total:window.player.requests_core.total_requests,today:window.player.requests_core.requests_today,period:window.player.requests_core.requests_this_period,last_request:window.player.requests_core.last_request,next_request:window.player.requests_core.probable_next_request},window.api.requests.status=window.player.requests_core.status,window.api.options=window.api.options||{},window.api.options.player=window.player.player_options,window.api.options.setPlayerOptions=function(e){var t=(0,o.Z)((0,o.Z)({},window.player.player_options),e);localStorage.setItem("player_options",JSON.stringify(t)),window.player.player_options=t,window.api.options.player=t},window.api.options.theme=(0,a.gh)(localStorage.getItem("theme")||""),window.api.options.setTheme=function(e){localStorage.setItem("theme",e),window.dispatchEvent(new StorageEvent("storage",{key:"theme"})),window.api.options.theme=(0,a.gh)(e)}}t.default=function(){return l(),(0,u.jsx)("div",{className:"flex justify-center items-center h-screen bg-white text-black",children:"This page is intentionally left blank."})}},9739:function(e,t,n){n.d(t,{Ai:function(){return c},Y0:function(){return l},Y9:function(){return a},o8:function(){return r},wt:function(){return u},y0:function(){return d}});var o=n(5633),s=n(3761),i=n(8936),r=[{name:"The Graveyard Shift",splash_text:"",description:"Alt is such a broad genre. What does any of it even mean? All I know is you love listening to me every week.",background:"#fc73e3",hosts:[(0,s.nf)("Adrien")],scheduleString:"Every Tuesday from 10pm to 11pm",schedule:new i.N("0 22 * * 2",60)},{name:"Stochastic Shuffle",splash_text:"",description:"This is a totally unplanned show, where anything can happen (within contractual obligations). There's no logic behind this show, it just is.",background:"#0f3cec",hosts:[(0,s.nf)("Mark")],scheduleString:"Every Monday from 9 pm to 10 pm",schedule:new i.N("0 21 * * 1",60)},{name:"The Vibe",splash_text:"vibes~",description:"Somehow even *more* random than Mark's show, but at least 10x more chill! Ice not required.\n\n*when he feels like it",background:"#1c2dae",hosts:[(0,s.nf)("Grayson")],scheduleString:"Every Sunday from 4pm to 5pm*",schedule:new i.N("0 16 * * 0",60)},{name:"The After School Special",splash_text:"Because no one else streams earlier!",description:"I play music, different vibes every week, and do some rambling (usually too much rambling)",background:"#6f69dd",hosts:[(0,s.nf)("Sophie")],scheduleString:"Every Thursday from 3:30pm to 4:30pm",schedule:new i.N("30 15 * * 4",60)},{name:"Latino Hour",splash_text:":D",description:"Just vibe and listen to music from across Latin America.",background:"#ddfe60",hosts:[(0,s.nf)("Zoe")],scheduleString:"Every Friday from 4pm to 5pm",schedule:new i.N("0 16 * * 5",60)},{name:"Timezones",splash_text:"International Music and Good Vibes",description:"Come and listen to music from all over the world! There's no jet lag here, only Timezones.",background:"#232323",hosts:[(0,s.nf)("Trey"),(0,s.nf)("Zoe")],scheduleString:"Every Wednesday from 3:30pm to 4:30pm",schedule:new i.N("30 15 * * 3",60)},{name:"The Bard's Tale",splash_text:"The only show that matters",description:"",background:"#ddfe60",hosts:[(0,s.nf)("Caden")],scheduleString:"Every Sunday from 1pm to 3pm",schedule:new i.N("0 13 * * 0",120)},{name:"KRNL Tabling!",splash_text:"Come say hi!",description:"We'll be on the third floor of Thomas Commons during lunch! Come say hi! Mark (and someone else we just don't quite know who) will also be live throughout the entirety of lunch!",background:"#ddfe60",hosts:[s.O_],scheduleString:"Tuesday and Wednesday from 11am to 1pm in Thomas Commons",schedule:new i.N("0 11 24,25 1 *",120,new Date(2023,2,2)),hiddenAfter:new Date(2023,2,1)},{name:"CCPR",splash_text:"",description:"Because we can do anything in 18 ~~days~~ minutes!",background:"#ddfe60",hosts:[(0,s.nf)("Adrien"),(0,s.nf)("Sophie")],scheduleString:"Every Monday from 8am to 8:18am",schedule:new i.N("0 8 * * 1",18)},{name:"The Box",splash_text:"",description:"Vibe with music and the occasional conversation",background:"#ddfe60",hosts:[(0,s.nf)("Brock")],guests:"Garnett Strack",scheduleString:"Every Friday from 8pm to 9pm",schedule:new i.N("0 20 * * 5",60)},{name:"?????",splash_text:"It's something!",description:"What could this be??",background:"#ddfe60",hosts:[(0,s.nf)("Mark")],scheduleString:"Saturday from 2pm to 4pm",schedule:new i.N("0 14 * * 6",120,new Date(2023,3,3)),hiddenAfter:new Date(2023,3,7)}];function a(e){return r.filter((function(t){return t.hosts.includes(e)||t.hosts.includes(s.O_)}))}function d(){return r.filter((function(e){return!0!==e.hidden&&!(void 0!==e.hiddenAfter&&e.hiddenAfter.getTime()<Date.now())}))}function u(e,t){return!0===t?r.find((function(t){return(0,o.l)(t.name)===(0,o.l)(e)})):r.find((function(t){return t.name===e}))}function l(){return d().filter((function(e){return void 0!==e.schedule.getNextOccurance()})).sort((function(e,t){var n=e.schedule.getNextOccurance(),o=t.schedule.getNextOccurance();return void 0===n||void 0===o?0:n.getTime()-o.getTime()}))}function c(){return d().filter((function(e){return e.schedule.isCurrent()}))}}}]);
//# sourceMappingURL=960.257eb80d.chunk.js.map