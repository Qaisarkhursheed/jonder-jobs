(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["RegisterWelcome"],{"56a4":function(t,e,s){"use strict";s("a9e3"),s("d3b7"),s("25f0");var i=s("9d26"),n=s("a9ad"),r=s("3206"),o=s("5607"),a=s("58df"),c=Object(a["a"])(n["a"],Object(r["a"])("stepper","v-stepper-step","v-stepper"));e["a"]=c.extend().extend({name:"v-stepper-step",directives:{ripple:o["a"]},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(t){return!0!==t()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},genIcon:function(t){return this.$createElement(i["a"],t)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var t=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(t,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var t=[];return this.hasError?t.push(this.genIcon(this.errorIcon)):this.complete?this.editable?t.push(this.genIcon(this.editIcon)):t.push(this.genIcon(this.completeIcon)):t.push(String(this.step)),t},toggle:function(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render:function(t){return t("div",{staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},[this.genStep(),this.genLabel()])}})},"7e85":function(t,e,s){"use strict";var i=s("5530"),n=(s("0481"),s("a9e3"),s("b0c0"),s("4de4"),s("8836"),s("10d2")),r=s("3206"),o=s("a452"),a=s("58df"),c=s("d9bd"),p=Object(a["a"])(n["a"],Object(r["b"])("stepper"),o["a"]);e["a"]=p.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,flat:Boolean,vertical:Boolean},data:function(){var t={isBooted:!1,steps:[],content:[],isReverse:!1};return t.internalLazyValue=null!=this.value?this.value:(t[0]||{}).step||1,t},computed:{classes:function(){return Object(i["a"])({"v-stepper--flat":this.flat,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},n["a"].options.computed.classes.call(this))},styles:function(){return Object(i["a"])({},n["a"].options.computed.styles.call(this))}},watch:{internalValue:function(t,e){this.isReverse=Number(t)<Number(e),e&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(c["a"])("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister:function(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter((function(e){return e!==t})):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter((function(e){return e!==t})))},stepClick:function(t){var e=this;this.$nextTick((function(){return e.internalValue=t}))},updateView:function(){for(var t=this.steps.length;--t>=0;)this.steps[t].toggle(this.internalValue);for(var e=this.content.length;--e>=0;)this.content[e].toggle(this.internalValue,this.isReverse)}},render:function(t){return t(this.tag,{staticClass:"v-stepper",class:this.classes,style:this.styles},this.$slots.default)}})},"827d":function(t,e,s){},8836:function(t,e,s){},"8e368":function(t,e,s){"use strict";s("827d")},"9c54":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return c}));var i=s("80d2"),n=s("7e85"),r=s("56a4"),o=s("e516"),a=Object(i["i"])("v-stepper__header"),c=Object(i["i"])("v-stepper__items");n["a"],o["a"],r["a"]},ab69:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("auth-wrap",{attrs:{img:t.img}},[s("v-stepper",{staticStyle:{"box-shadow":"none"},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[t.$route.query.noAccount&&1==t.step?s("v-alert",{staticClass:"mt-5 mx-5",staticStyle:{"margin-bottom":"-10px"},attrs:{text:"",type:"info"}},[t._v(" "+t._s(t.$t("noAccountFound"))+" ")]):t._e(),t.$route.query.facebookError&&1==t.step?s("v-alert",{staticClass:"mt-5 mx-5",staticStyle:{"margin-bottom":"-10px",width:"450px"},attrs:{text:"",type:"error"}},[t._v(" "+t._s(t.$t("registerFacebookError"))+" ")]):t._e(),s("v-stepper-items",{staticClass:"text-center",staticStyle:{"max-width":"500px"}},[s("v-stepper-content",{attrs:{step:"1"}},[s("jonder-title",[t._v(" "+t._s(t.$t("jonderWelcome"))+" ")]),s("p",{staticStyle:{color:"#222222","font-size":"17px"}},[t._v(" "+t._s(t.$t("jonderWelcomeDescription"))+" ")]),s("v-btn",{staticClass:"dark-blue",attrs:{type:"button",large:"",block:"",height:"55"},on:{click:function(e){delete t.$route.query.noAccount,t.step=2}}},[t._v(" "+t._s(t.$t("getStartedNow"))+" ")])],1),s("v-stepper-content",{attrs:{step:"2"}},[s("jonder-title",{staticStyle:{"font-size":"28px"}},[t._v(" "+t._s(t.$t("chooseStatus"))+" ")]),s("div",{staticClass:"mx-auto mt-5",staticStyle:{"max-width":"400px"}},[s("v-btn",{staticClass:"mb-4",attrs:{block:"",color:"primary",height:"55",outlined:"jobseeker"!=t.accountType},on:{click:function(e){t.accountType="jobseeker"}}},[t._v(" "+t._s(t.$t("imJobseeker"))+" ")]),s("v-btn",{staticClass:"mb-4",attrs:{block:"",color:"primary",outlined:"employer"!=t.accountType,height:"55"},on:{click:function(e){t.accountType="employer"}}},[t._v(" "+t._s(t.$t("imEmployer"))+" ")]),s("v-btn",{staticClass:"mt-10 dark-blue",attrs:{type:"submit",block:"",disabled:!t.accountType,height:"55"},on:{click:function(e){t.step=3}}},[t._v(" "+t._s(t.$t("continue"))+" ")])],1)],1),s("v-stepper-content",{attrs:{step:"3"}},[s("jonder-title",[t._v(" "+t._s(t.$t("register"))+" ")]),s("p",{staticStyle:{color:"#222222","font-size":"17px"}},[t._v(" "+t._s(t.$t("registerSubtitleUser"))+" ")]),s("v-btn",{staticClass:"mb-3",attrs:{type:"button",color:"primary",height:"55",outlined:"",block:"",large:"",link:"",href:t.googleUrl}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-google")]),t._v(" "+t._s(t.$t("continueWithGoogle"))+" ")],1),s("v-btn",{staticClass:"mb-3",attrs:{type:"button",color:"primary",height:"55",outlined:"",block:"",large:"",link:"",href:t.facebookUrl}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-facebook")]),t._v(" "+t._s(t.$t("continueWithFacebook"))+" ")],1),s("v-btn",{attrs:{type:"button",color:"primary",height:"55",block:"",large:""},on:{click:t.submit}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-email")]),t._v(" "+t._s(t.$t("continueWithEmail"))+" ")],1)],1)],1),s("div",{staticClass:"text-center"},[s("span",{staticStyle:{color:"#222222"}},[t._v(" "+t._s(t.$t("areYouMember"))+" ")]),s("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Login"}}},[s("b",{staticClass:"tx-blue-darken-4"},[t._v(" "+t._s(t.$t("loginHere"))+" ")])])],1)],1)],1)},n=[],r=(s("99af"),s("e21d")),o=s("1bd7"),a={components:{AuthWrap:r["a"],JonderTitle:o["a"]},data:function(){return{img:1,step:1,accountType:null}},computed:{facebookUrl:function(){var t="jobseeker"===this.accountType?1:2,e="".concat("https://dev.api.jonder.devla.dev/api/v1","/auth/").concat(t,"/facebook");return e},googleUrl:function(){var t="jobseeker"===this.accountType?1:2,e="".concat("https://dev.api.jonder.devla.dev/api/v1","/auth/").concat(t,"/google");return e}},created:function(){var t=this.$route.query.type;!t||"jobseeker"!=t&&"employer"!=t||(this.accountType=t)},methods:{submit:function(){"jobseeker"===this.accountType?this.$router.push({name:"RegisterUser"}):this.$router.push({name:"RegisterCompany"})},changeImage:function(){this.img=2}}},c=a,p=(s("8e368"),s("2877")),l=s("6544"),u=s.n(l),h=s("0798"),v=s("8336"),d=s("132d"),f=s("7e85"),m=s("e516"),b=s("9c54"),g=Object(p["a"])(c,i,n,!1,null,"5ab85fc3",null);e["default"]=g.exports;u()(g,{VAlert:h["a"],VBtn:v["a"],VIcon:d["a"],VStepper:f["a"],VStepperContent:m["a"],VStepperItems:b["b"]})},e516:function(t,e,s){"use strict";s("a9e3"),s("d3b7"),s("25f0");var i=s("0789"),n=s("3206"),r=s("80d2"),o=s("58df"),a=Object(o["a"])(Object(n["a"])("stepper","v-stepper-content","v-stepper"));e["a"]=a.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){var t=this.$vuetify.rtl?!this.isReverse:this.isReverse;return t?i["g"]:i["h"]},styles:function(){return this.isVertical?{height:Object(r["g"])(this.height)}:{}}},watch:{isActive:function(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter:function(){var t=this,e=0;requestAnimationFrame((function(){e=t.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return t.isActive&&(t.height=e||"auto")}),450)},leave:function(){var t=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return t.height=0}),10)},toggle:function(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render:function(t){var e={staticClass:"v-stepper__content"},s={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);var i=t("div",s,[this.$slots.default]),n=t("div",e,[i]);return t(this.computedTransition,{on:this.$listeners},[n])}})}}]);
//# sourceMappingURL=RegisterWelcome.53f1cc11.js.map