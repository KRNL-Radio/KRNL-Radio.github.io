"use strict";(self.webpackChunkkrnl_website=self.webpackChunkkrnl_website||[]).push([[431],{6300:function(t){t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,s,i;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(s=n;0!==s--;)if(!t(e[s],r[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(i=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(s=n;0!==s--;)if(!Object.prototype.hasOwnProperty.call(r,i[s]))return!1;for(s=n;0!==s--;){var a=i[s];if(("_owner"!==a||!e.$$typeof)&&!t(e[a],r[a]))return!1}return!0}return e!==e&&r!==r}},2431:function(t,e,r){r.r(e),r.d(e,{Particles:function(){return y},default:function(){return k}});var n=r(4165),s=r(5861),i=r(5671),a=r(3144),o=r(1752),u=r(1120),c=r(136),p=r(7277),f=r(2791),l=r(4099),h=r(6300),d=r.n(h),v="tsparticles",y=function(t){(0,c.Z)(r,t);var e=(0,p.Z)(r);function r(t){var n;return(0,i.Z)(this,r),(n=e.call(this,t)).state={init:!1,library:void 0},n}return(0,a.Z)(r,[{key:"destroy",value:function(){this.state.library&&(this.state.library.destroy(),this.setState({library:void 0}))}},{key:"shouldComponentUpdate",value:function(t){return!d()(t,this.props)}},{key:"componentDidUpdate",value:function(){this.refresh()}},{key:"forceUpdate",value:function(){var t=this;this.refresh().then((function(){(0,o.Z)((0,u.Z)(r.prototype),"forceUpdate",t).call(t)}))}},{key:"componentDidMount",value:function(){var t=this;(0,s.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.props.init){e.next=3;break}return e.next=3,t.props.init(l.S6);case 3:t.setState({init:!0},(0,s.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadParticles();case 2:case"end":return e.stop()}}),e)}))));case 4:case"end":return e.stop()}}),e)})))()}},{key:"componentWillUnmount",value:function(){this.destroy()}},{key:"render",value:function(){var t=this.props,e=t.width,r=t.height,n=t.className,s=t.canvasClassName,i=t.id;return f.createElement("div",{className:n,id:i},f.createElement("canvas",{className:s,style:Object.assign(Object.assign({},this.props.style),{width:e,height:r})}))}},{key:"refresh",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.destroy(),t.next=3,this.loadParticles();case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"loadParticles",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(){var e,i,a,o,u,c,p=this;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.init){t.next=2;break}return t.abrupt("return");case 2:if(o=function(){var t=(0,s.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(p.props.container&&(p.props.container.current=e),p.setState({library:e}),!p.props.loaded){t.next=5;break}return t.next=5,p.props.loaded(e);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=null!==(i=null!==(e=this.props.id)&&void 0!==e?e:r.defaultProps.id)&&void 0!==i?i:v,!this.props.url){t.next=10;break}return t.next=7,l.S6.loadJSON(u,this.props.url);case 7:t.t0=t.sent,t.next=13;break;case 10:return t.next=12,l.S6.load(u,null!==(a=this.props.params)&&void 0!==a?a:this.props.options);case 12:t.t0=t.sent;case 13:return c=t.t0,t.next=16,o(c);case 16:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),r}(f.Component);y.defaultProps={width:"100%",height:"100%",options:{},style:{},url:void 0,id:v};var k=y}}]);
//# sourceMappingURL=431.5a4ca365.chunk.js.map