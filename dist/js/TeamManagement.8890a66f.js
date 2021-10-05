(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TeamManagement"],{"169a":function(t,e,i){"use strict";var a=i("5530"),n=i("2909"),s=i("ade3"),o=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),l=i("b848"),c=i("75eb"),u=i("e707"),d=i("e4d3"),h=i("21be"),v=i("f2e7"),f=i("a293"),m=i("58df"),p=i("d9bd"),g=i("80d2"),y=Object(m["a"])(r["a"],l["a"],c["a"],u["a"],d["a"],h["a"],v["a"]);e["a"]=y.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),a=Object(n["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));a&&a.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(a["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(a["a"])(Object(a["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(g["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(g["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1abc":function(t,e,i){"use strict";var a=i("a797");e["a"]=a["a"]},"269a":function(t,e){t.exports=function(t,e){var i="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var a in"function"===typeof t.exports&&(i.directives=t.exports.options.directives),i.directives=i.directives||{},e)i.directives[a]=i.directives[a]||e[a]}},"368e":function(t,e,i){},3748:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"team-management"},[i("v-row",{staticClass:"page-heading mb-3"},[i("v-col",{attrs:{cols:"col"}},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("teamManagement")))]),i("div",{staticClass:"subtitle"},[t._v(" "+t._s(t.$t("inviteHelp"))+" ")])]),i("v-col",{attrs:{cols:"auto"}},[i("TeamManagementInviteUser")],1)],1),i("div",{staticClass:"table"},[i("TeamManagementTable")],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-data-table",{staticClass:"team-management-table",attrs:{loading:t.$store.getters["teamManagement/loading"],headers:t.headers,items:t.$store.getters["teamManagement/users"],"server-items-length":t.$store.getters["teamManagement/totalUsers"],"items-per-page":t.params.per_page,page:t.params.page,"single-select":!0,"item-key":"name","show-select":"",flat:""},on:{"update:itemsPerPage":function(e){return t.$set(t.params,"per_page",e)},"update:items-per-page":[function(e){return t.$set(t.params,"per_page",e)},function(e){return t.fetchData()}],"update:page":[function(e){return t.$set(t.params,"page",e)},function(e){return t.fetchData()}]},scopedSlots:t._u([{key:"item.data-table-select",fn:function(e){var a=e.item,n=e.isSelected,s=e.select;return["Owner"!==a.type?i("v-simple-checkbox",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],attrs:{value:n,color:"primary"},on:{input:function(t){return s(t)}}}):t._e()]}},{key:"item.actions",fn:function(e){var a=e.item;return["Owner"!==a.type?i("TeamManagementDeleteUser",{attrs:{user:a}}):t._e()]}},{key:"item.created_at",fn:function(e){var i=e.item;return[t._v(" "+t._s(t._f("moment")(i.created_at,"MMM DD, HH:mm"))+" ")]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},o=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-center"},[i("v-dialog",{attrs:{width:"500","overlay-color":"#0253B3","overlay-opacity":"0.3"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"full-w font-weight-medium",staticStyle:{color:"#fff"},attrs:{color:"#F12727"}},"v-btn",n,!1),a),[t._v(" "+t._s(t.$t("removed"))+" ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("h1",{staticClass:"mb-4 text-center"},[t._v(" "+t._s(t.$t("areYouSure"))+" ")]),i("v-form",{ref:"form",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}},model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[i("p",{staticClass:"text-center"},[t._v(" "+t._s(t.$t("areYouSureQuestion"))+" ")]),i("ResponseAlert",{attrs:{response:t.formResponse}}),i("div",{staticClass:"text-center mt-3"},[i("v-btn",{staticClass:"font-weight-medium ",attrs:{text:"",height:"48"},on:{click:function(e){t.dialog=!1,t.$refs.form.reset()}}},[t._v(" "+t._s(t.$t("cancelOption"))+" ")]),i("v-btn",{staticClass:"ml-3 font-weight-medium ",attrs:{type:"submit",color:"primary",height:"48",disabled:!t.isValid}},[t._v(" "+t._s(t.$t("confirmOption"))+" ")])],1)],1)],1)],1)],1)},l=[],c={props:{user:{type:Object}},data:function(){return{dialog:!1,isValid:!1,formResponse:{}}},methods:{submit:function(){var t=this;this.formResponse={},this.$store.dispatch("teamManagement/deleteUser",this.user.id).then((function(){t.dialog=!1})).catch((function(e){t.formResponse=e.data}))}}},u=c,d=i("2877"),h=i("6544"),v=i.n(h),f=i("8336"),m=i("b0af"),p=i("169a"),g=i("4bd4"),y=Object(d["a"])(u,r,l,!1,null,null,null),b=y.exports;v()(y,{VBtn:f["a"],VCard:m["a"],VDialog:p["a"],VForm:g["a"]});var w={components:{TeamManagementDeleteUser:b},data:function(){return{params:{page:1,per_page:15},selected:null,headers:[{text:"Nutzer",value:"name",width:"25%"},{text:"E-mail",value:"email",width:"25%"},{text:"Status",value:"status",width:"15%"},{text:"Eingeladen am:",value:"created_at",width:"15%"},{text:"",value:"actions",width:"10%"}]}},created:function(){this.fetchData()},methods:{fetchData:function(){this.$store.dispatch("teamManagement/fetchUsers",this.params)}}},_=w,$=(i("e121"),i("8fea")),x=i("9e88"),C=i("269a"),k=i.n(C),O=i("5607"),S=Object(d["a"])(_,s,o,!1,null,null,null),E=S.exports;v()(S,{VDataTable:$["a"],VSimpleCheckbox:x["a"]}),k()(S,{Ripple:O["a"]});var A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-center"},[i("v-dialog",{attrs:{width:"500","overlay-color":"#0253B3","overlay-opacity":"0.3"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",height:"48"}},"v-btn",n,!1),a),[t._v(" "+t._s(t.$t("inviteUser"))+" ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("h1",{staticClass:"mb-4"},[t._v(" "+t._s(t.$t("inviteUser"))+" ")]),i("v-form",{ref:"form",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}},model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[i("label",{staticClass:"profile-label"},[t._v(" "+t._s(t.$t("nickname"))+" ")]),i("v-text-field",{attrs:{dense:"",placeholder:t.$t("nickname"),rules:[t.validations.required],type:"text",outlined:"",flat:"",solo:"","background-color":"white"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),i("label",{staticClass:"profile-label"},[t._v(" "+t._s(t.$t("email"))+" ")]),i("v-text-field",{attrs:{dense:"",placeholder:t.$t("emailAddress"),rules:[t.validations.required,t.validations.email],type:"email",outlined:"",flat:"",solo:"","background-color":"white"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),i("ResponseAlert",{attrs:{response:t.formResponse}}),i("div",{staticClass:"text-right mt-3"},[i("v-btn",{attrs:{text:"",height:"48"},on:{click:function(e){t.dialog=!1,t.$refs.form.reset()}}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),i("v-btn",{staticClass:"ml-3",attrs:{type:"submit",color:"primary",height:"48",disabled:!t.isValid,loading:t.formLoading}},[t._v(" "+t._s(t.$t("inviteNewUser"))+" ")])],1)],1)],1)],1)],1)},B=[],T=(i("d3b7"),{data:function(){return{dialog:!1,isValid:!1,formData:{name:"",email:""},formLoading:!1,formResponse:{}}},methods:{submit:function(){var t=this;this.formLoading=!0,this.formResponse={},this.$store.dispatch("teamManagement/inviteUser",this.formData).then((function(){t.dialog=!1})).catch((function(e){t.formResponse=e.data})).finally((function(){t.formLoading=!1}))}}}),j=T,V=i("8654"),D=Object(d["a"])(j,A,B,!1,null,null,null),I=D.exports;v()(D,{VBtn:f["a"],VCard:m["a"],VDialog:p["a"],VForm:g["a"],VTextField:V["a"]});var M={components:{TeamManagementTable:E,TeamManagementInviteUser:I}},L=M,N=i("62ad"),F=i("0fd9"),P=Object(d["a"])(L,a,n,!1,null,"55f6aea6",null);e["default"]=P.exports;v()(P,{VCol:N["a"],VRow:F["a"]})},"3c93":function(t,e,i){},"4bd4":function(t,e,i){"use strict";var a=i("5530"),n=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),s=i("7e2b"),o=i("3206");e["a"]=Object(n["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"615b":function(t,e,i){},a797:function(t,e,i){"use strict";var a=i("5530"),n=(i("a9e3"),i("3c93"),i("a9ad")),s=i("7560"),o=i("f2e7"),r=i("58df");e["a"]=Object(r["a"])(n["a"],s["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(a["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},b0af:function(t,e,i){"use strict";var a=i("5530"),n=(i("a9e3"),i("0481"),i("615b"),i("10d2")),s=i("297c"),o=i("1c87"),r=i("58df");e["a"]=Object(r["a"])(s["a"],o["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},e121:function(t,e,i){"use strict";i("ee99")},e707:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("2532");var a=i("1abc"),n=i("80d2"),s=i("2b0e");e["a"]=s["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new a["a"]({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(n["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(n["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[n["y"].up,n["y"].pageup],i=[n["y"].down,n["y"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i=0===t.scrollTop,a=t.scrollTop+t.clientHeight===t.scrollHeight,n=e<0,s=e>0;return!(i||!n)||(!(a||!s)||!(!i&&!a)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var a=this.$refs.dialog,n=window.getSelection().anchorNode;return!(a&&this.hasScrollbar(a)&&this.isInside(n,a))||!this.shouldScroll(a,i)}for(var s=0;s<e.length;s++){var o=e[s];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(n["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},ee99:function(t,e,i){}}]);
//# sourceMappingURL=TeamManagement.8890a66f.js.map