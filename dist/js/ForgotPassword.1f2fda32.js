(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ForgotPassword"],{"0c25":function(t,e,n){"use strict";n("581b")},"0c76":function(t,e,n){"use strict";n("6ada")},"0ca1":function(t,e,n){t.exports=n.p+"img/1.2fcb1a7c.png"},1105:function(t,e,n){t.exports=n.p+"img/4.f17160f2.png"},"15f8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFqSURBVHgBnVI7TsNAEN21ozSJg5QoPymRorSp6KCDBtFBkeQCER0N5hB0wAV8ACQuABcIVSrCAUhk2S5sxR8J/3kj/nYIEiO93dl9+2ZmZ5ezd6tWq5VisXgCdwBUgMcgCBTTNBdsjYk0tFqtgSiKt3AP0zT1Oecv8I8LhcKkXC4vXdedZ4UCMnUxK7RIkmSo6/qBpmkjQRB2EOQe25eNRmM3J0R5tNnFwZFhGNMPQlXVRRiGZ3AdcHJOCIxR2pwOZklJklaYbsAPckKUs2K/GDIxiGz21qyfHAjK1KWuZsk4jjkCj+HO1wQVqDES7npdq9W2er0eIzSbTe77vozAHYiVrFB0HMculUo2DkzwJEdRFHWAPaxPwY+ABYI/1ev1mWVZX0IaPM+b4b3u4G4D+xBRp5+BK+ABuECHOZ5l+l280fr9Pmu32zKwxEc5p/Vnxk1GGSgTyqcOy5QZP2n6pzArhg0hVNh/7RVspouL3jolQAAAAABJRU5ErkJggg=="},"1bd7":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"jonder-title mb-3"},[t._t("default")],2)},i=[],s=(n("64b5"),n("2877")),r={},o=Object(s["a"])(r,a,i,!1,null,"4875390c",null);e["a"]=o.exports},2175:function(t,e,n){t.exports=n.p+"img/6.0b2facc8.png"},"34bf":function(t,e,n){t.exports=n.p+"img/7.e65d634f.png"},"3c93":function(t,e,n){},4537:function(t,e,n){t.exports=n.p+"img/searchnoresults.40050517.png"},"4bd4":function(t,e,n){"use strict";var a=n("5530"),i=(n("caad"),n("2532"),n("07ac"),n("4de4"),n("159b"),n("7db0"),n("58df")),s=n("7e2b"),r=n("3206");e["a"]=Object(i["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=n(t)))})):a.valid=n(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"581b":function(t,e,n){},"64b5":function(t,e,n){"use strict";n("ee50")},"6ada":function(t,e,n){},"6e2f":function(t,e,n){t.exports=n.p+"img/profile-placeholder.1225968c.png"},"7d19":function(t,e,n){t.exports=n.p+"img/selection_management_empty.915d0172.png"},"7eb7":function(t,e,n){t.exports=n.p+"img/candidate.d1bbc769.png"},9310:function(t,e,n){t.exports=n.p+"img/5.06ae7ab3.png"},"9e01":function(t,e,n){var a={"./1.png":"0ca1","./2.png":"b9af","./3.png":"c2e4","./4.png":"1105","./5.png":"9310","./6.png":"2175","./7.png":"34bf","./8.png":"f8bf","./candidate.png":"7eb7","./company_placeholder.png":"d496","./icons/profile-placeholder.png":"6e2f","./images/messages_empty.png":"e755","./images/selection_management_empty.png":"7d19","./jonder_blue.png":"89ce","./jonder_white.png":"da8a","./landing/company.png":"59e3","./landing/employee.png":"8f49","./landing/hero.png":"d336","./landing/laptop.png":"757d","./landing/phones.png":"1b454","./logo.png":"cf05","./loop.png":"15f8","./searchnoresults.png":"4537"};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=s,t.exports=i,i.id="9e01"},a797:function(t,e,n){"use strict";var a=n("5530"),i=(n("a9e3"),n("3c93"),n("a9ad")),s=n("7560"),r=n("f2e7"),o=n("58df");e["a"]=Object(o["a"])(i["a"],s["a"],r["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(a["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},b9af:function(t,e,n){t.exports=n.p+"img/2.e9c401ef.png"},c2e4:function(t,e,n){t.exports=n.p+"img/3.f9b4140b.png"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d496:function(t,e,n){t.exports=n.p+"img/company_placeholder.7e66aff7.png"},da8a:function(t,e,n){t.exports=n.p+"img/jonder_white.c93b3106.png"},e21d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"main-wrap fill-height pa-0",attrs:{fluid:"","no-gutters":""}},[a("v-row",{staticClass:"full-h",attrs:{"no-gutters":""}},[a("v-col",{staticClass:"full-h",staticStyle:{position:"relative"},attrs:{cols:"12",md:"6",order:"2","order-md":"1"}},[a("div",{staticClass:"hero-image d-flex justify-content-center align-center",style:{backgroundImage:"url("+n("9e01")("./"+t.img+".png")+")"}}),a("v-overlay",{attrs:{absolute:!0,value:!0}},[a("v-img",{attrs:{src:n("da8a"),"max-width":"212"}})],1)],1),a("v-col",{staticClass:"full-h",staticStyle:{position:"relative"},attrs:{cols:"12",md:"6",order:"1","order-md":"2"}},[a("div",{staticClass:"auth-wrap d-flex"},[a("div",{staticClass:"my-auto mx-auto",style:{width:t.haveWidth?t.haveWidth+"px":"auto"}},[a("v-img",{staticClass:"mx-auto",attrs:{src:n("89ce"),"max-width":"128px"}}),t._t("default")],2)])])],1)],1)},i=[],s={name:"AuthWrap",props:["img","haveWidth"]},r=s,o=(n("0c76"),n("2877")),c=n("6544"),l=n.n(c),u=n("62ad"),d=n("a523"),p=n("adda"),f=n("a797"),m=n("0fd9"),h=Object(o["a"])(r,a,i,!1,null,"36ec0c68",null);e["a"]=h.exports;l()(h,{VCol:u["a"],VContainer:d["a"],VImg:p["a"],VOverlay:f["a"],VRow:m["a"]})},e755:function(t,e,n){t.exports=n.p+"img/messages_empty.9c541638.png"},ee50:function(t,e,n){},f27d:function(t,e,n){t.exports=n.p+"img/email_sent.8cfa214b.svg"},f8bf:function(t,e,n){t.exports=n.p+"img/8.7ee74a02.png"},fa67:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("auth-wrap",{attrs:{img:"1"}},[1==t.step?a("AuthForgotPassword",{on:{success:function(e){t.step=2}}}):t._e(),2==t.step?a("div",{staticClass:"mt-4 text-center",staticStyle:{"max-width":"400px"}},[a("img",{attrs:{src:n("f27d"),width:"230"}}),a("h1",{staticClass:"mt-5",staticStyle:{"font-size":"24px"}},[t._v(" "+t._s(t.$t("emailSentSuccess"))+" ")]),a("p",{staticClass:"mt-2"},[t._v(" "+t._s(t.$t("emailSentSuccessMessage"))+" ")])]):t._e()],1)},i=[],s=n("e21d"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"auth-login-wrap mx-auto",staticStyle:{"max-width":"500px"},attrs:{fluid:"","no-gutters":""}},[n("jonder-title",[t._v(" "+t._s(t.$t("forgotPassowrd"))+" ")]),n("p",{staticClass:"p-text mb-7"},[t._v(" "+t._s(t.$t("forgotPassowrdDescription"))+" ")]),n("v-form",{staticClass:"auth-form",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[n("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("enterYourEmail")))]),n("v-text-field",{attrs:{dense:"",placeholder:"Email",rules:[t.validations.required,t.validations.email],type:"email",outlined:"","background-color":"white"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),n("ResponseAlert",{attrs:{response:t.formResponse}}),n("v-btn",{staticClass:"full-w",attrs:{type:"submit",color:"primary",disabled:!t.formValid}},[t._v(" "+t._s(t.$t("sendEmail"))+" ")])],1)],1)},o=[],c=n("1bd7"),l={components:{JonderTitle:c["a"]},data:function(){return{formData:{email:""},formResponse:{},formValid:!1}},methods:{submit:function(){var t=this;this.$store.dispatch("auth/forgotPassword",this.formData).then((function(){t.$emit("success")})).catch((function(e){t.formResponse=e.data}))}}},u=l,d=(n("0c25"),n("2877")),p=n("6544"),f=n.n(p),m=n("8336"),h=n("a523"),g=n("4bd4"),v=n("8654"),b=Object(d["a"])(u,r,o,!1,null,"4df8a788",null),A=b.exports;f()(b,{VBtn:m["a"],VContainer:h["a"],VForm:g["a"],VTextField:v["a"]});var _={data:function(){return{step:1}},components:{AuthWrap:s["a"],AuthForgotPassword:A}},x=_,w=Object(d["a"])(x,a,i,!1,null,null,null);e["default"]=w.exports}}]);
//# sourceMappingURL=ForgotPassword.1f2fda32.js.map