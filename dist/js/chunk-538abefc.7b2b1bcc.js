(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-538abefc"],{"0789":function(e,t,i){"use strict";i.d(t,"g",(function(){return u})),i.d(t,"f",(function(){return d})),i.d(t,"c",(function(){return h})),i.d(t,"d",(function(){return f})),i.d(t,"e",(function(){return p})),i.d(t,"a",(function(){return g})),i.d(t,"b",(function(){return v}));i("99af");var n=i("d9f7");function r(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return(e=Array()).concat.apply(e,[t].concat(n))}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",i=arguments.length>2?arguments[2]:void 0;return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:t}},render:function(t,i){var a="transition".concat(i.props.group?"-group":""),s={props:{name:e,mode:i.props.mode},on:{beforeEnter:function(e){e.style.transformOrigin=i.props.origin,e.style.webkitTransformOrigin=i.props.origin}}};return i.props.leaveAbsolute&&(s.on.leave=r(s.on.leave,(function(e){var t=e.offsetTop,i=e.offsetLeft,n=e.offsetWidth,r=e.offsetHeight;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=t+"px",e.style.left=i+"px",e.style.width=n+"px",e.style.height=r+"px"})),s.on.afterLeave=r(s.on.afterLeave,(function(e){if(e&&e._transitionInitialStyles){var t=e._transitionInitialStyles,i=t.position,n=t.top,r=t.left,a=t.width,s=t.height;delete e._transitionInitialStyles,e.style.position=i||"",e.style.top=n||"",e.style.left=r||"",e.style.width=a||"",e.style.height=s||""}}))),i.props.hideOnLeave&&(s.on.leave=r(s.on.leave,(function(e){e._initialDisplay=e.style.display,e.style.display="none"})),s.on.afterLeave=r(s.on.afterLeave,(function(e){e&&(e.style.display=e._initialDisplay||"")}))),t(a,Object(n["a"])(i.data,s),i.children)}}}function s(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:e,functional:!0,props:{mode:{type:String,default:i}},render:function(i,r){return i("transition",Object(n["a"])(r.data,{props:{name:e},on:t}),r.children)}}}var o=i("ade3"),l=i("80d2"),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t?"width":"height",n="offset".concat(Object(l["H"])(i));return{beforeEnter:function(e){e._parent=e.parentNode,e._initialStyle=Object(o["a"])({transition:e.style.transition,overflow:e.style.overflow},i,e.style[i])},enter:function(t){var r=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";var a="".concat(t[n],"px");t.style[i]="0",t.offsetHeight,t.style.transition=r.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((function(){t.style[i]=a}))},afterEnter:a,enterCancelled:a,leave:function(e){e._initialStyle=Object(o["a"])({transition:"",overflow:e.style.overflow},i,e.style[i]),e.style.overflow="hidden",e.style[i]="".concat(e[n],"px"),e.offsetHeight,requestAnimationFrame((function(){return e.style[i]="0"}))},afterLeave:r,leaveCancelled:r};function r(t){e&&t._parent&&t._parent.classList.remove(e),a(t)}function a(e){var t=e._initialStyle[i];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[i]=t),delete e._initialStyle}},u=(a("carousel-transition"),a("carousel-reverse-transition"),a("tab-transition")),d=a("tab-reverse-transition"),h=(a("menu-transition"),a("fab-transition","center center","out-in"),a("dialog-transition"),a("dialog-bottom-transition"),a("dialog-top-transition"),a("fade-transition")),f=a("scale-transition"),p=(a("scroll-x-transition"),a("scroll-x-reverse-transition"),a("scroll-y-transition"),a("scroll-y-reverse-transition"),a("slide-x-transition")),g=(a("slide-x-reverse-transition"),a("slide-y-transition"),a("slide-y-reverse-transition"),s("expand-transition",c())),v=s("expand-x-transition",c("",!0))},"297c":function(e,t,i){"use strict";i("a9e3");var n=i("2b0e"),r=i("37c6");t["a"]=n["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(r["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"37c6":function(e,t,i){"use strict";var n=i("8e36");t["a"]=n["a"]},"415b":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("jobseeker-layout",[i("div",{staticClass:"d-flex full-h justify-center align-center text-center"},[e.initializing?i("v-progress-circular",{attrs:{indeterminate:"",size:"150",color:"primary"}}):e._e(),e.error?i("div",{staticClass:"text-h4"},[e._v(" "+e._s(e.error.text)+" "),"left-meeting"==e.error.type?i("div",{staticClass:"mt-5"},[i("v-btn",{attrs:{text:"",height:"48"},on:{click:e.attemptJoin}},[e._v(" "+e._s(e.$t("rejoin"))+" ")]),i("v-btn",{staticClass:"ml-3",attrs:{color:"primary",height:"48"},on:{click:function(t){return e.$router.push("/")}}},[e._v(" "+e._s(e.$t("backToHome"))+" ")])],1):e._e()]):e._e(),i("v-card",{staticClass:"full-h full-w",class:{"d-none":e.initializing||e.error},attrs:{id:"jitsi-container",flat:""}})],1)])},r=[],a=(i("d3b7"),i("ec9b")),s={components:{JobseekerLayout:a["default"]},data:function(){return{meeting:null,jitsiApi:null,initializing:!0,error:null}},computed:{user:function(){return this.$store.getters["user/user"]}},created:function(){var e=this;this.$store.dispatch("meetings/fetchByMeetId",this.$route.params.meet_id).then((function(t){var i;e.meeting=null===(i=t.data)||void 0===i?void 0:i.meeting})).finally((function(){e.attemptJoin()}))},methods:{attemptJoin:function(){this.error=null,this.validateMeeting(),this.initJitsi()},validateMeeting:function(){this.meeting?this.meeting.jobseeker_id==this.user.id||this.meeting.employer_id==this.user.id||(this.error={type:"not-allowed",text:this.$t("meetingNotAllowed")}):this.error={type:"not-found",text:this.$t("meetingNotFound")}},initJitsi:function(){var e=this;this.error?this.initializing=!1:(this.initializing=!0,this.jitsiApi=new JitsiMeetExternalAPI("jitsi.jonder.jobs",{roomName:this.meeting.meet_id,width:"100%",height:"100%",parentNode:document.querySelector("#jitsi-container"),userInfo:{id:this.user.id,displayName:this.$options.filters.fullname(this.user),email:this.user.email},configOverwrite:{defaultLanguage:this.user.locale||"de",toolbarButtons:["camera","chat","closedcaptions","desktop","download","etherpad","feedback","filmstrip","fullscreen","hangup","help","microphone","participants-pane","profile","raisehand","select-background","settings","shareaudio","sharedvideo","shortcuts","stats","tileview","toggle-camera","videoquality","__end"]},interfaceConfigOverwrite:{SHOW_JITSI_WATERMARK:!1},onload:function(){e.initializing=!1}}),this.jitsiApi.executeCommand("avatarUrl",this.user.profile_img),this.jitsiApi.executeCommand("toggleTileView"),this.jitsiApi.addEventListener("readyToClose",(function(){e.error={type:"left-meeting",text:e.$t("meetingLeft")},document.querySelector("#jitsi-container").innerHTML=""})))}}},o=s,l=i("2877"),c=i("6544"),u=i.n(c),d=i("8336"),h=i("b0af"),f=i("490a"),p=Object(l["a"])(o,n,r,!1,null,null,null);t["default"]=p.exports;u()(p,{VBtn:d["a"],VCard:h["a"],VProgressCircular:f["a"]})},"615b":function(e,t,i){},"6ece":function(e,t,i){},"8e36":function(e,t,i){"use strict";var n=i("5530"),r=i("ade3"),a=(i("a9e3"),i("c7cd"),i("6ece"),i("0789")),s=i("90a2"),o=i("a9ad"),l=i("fe6c"),c=i("a452"),u=i("7560"),d=i("80d2"),h=i("58df"),f=Object(h["a"])(o["a"],Object(l["b"])(["absolute","fixed","top","bottom"]),c["a"],u["a"]);t["a"]=f.extend({name:"v-progress-linear",directives:{intersect:s["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(r["a"])(e,this.isReversed?"right":"left",Object(d["g"])(this.normalizedValue,"%")),Object(r["a"])(e,"width",Object(d["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return Object(n["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?a["c"]:a["e"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(d["g"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(d["s"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(r["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),i=t.width;this.internalValue=e.offsetX/i*100}},onObserve:function(e,t,i){this.isVisible=i},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},a452:function(e,t,i){"use strict";var n=i("ade3"),r=i("2b0e");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return r["a"].extend({name:"proxyable",model:{prop:e,event:t},props:Object(n["a"])({},e,{required:!1}),data:function(){return{internalLazyValue:this[e]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:Object(n["a"])({},e,(function(e){this.internalLazyValue=e}))})}var s=a();t["a"]=s},b0af:function(e,t,i){"use strict";var n=i("5530"),r=(i("a9e3"),i("0481"),i("615b"),i("10d2")),a=i("297c"),s=i("1c87"),o=i("58df");t["a"]=Object(o["a"])(a["a"],s["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},s["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var e=Object(n["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=a["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),i=t.tag,n=t.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),e(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-538abefc.7b2b1bcc.js.map