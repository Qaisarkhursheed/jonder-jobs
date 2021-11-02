(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"4bd4":function(t,e,a){"use strict";var r=a("5530"),i=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),n=a("7e2b"),o=a("3206");e["a"]=Object(i["a"])(n["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(r.valid=a(t)))})):r.valid=a(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5326:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("auth-wrap",{attrs:{img:"1"}},[a("auth-login")],1)},i=[],n=a("e21d"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"auth-login-wrap mx-auto",attrs:{fluid:"","no-gutters":""}},[a("jonder-title",[t._v(" "+t._s(t.$t("loginAccount"))+" ")]),t.$route.query.resetPassword?a("v-alert",{attrs:{text:"",type:"success"}},[t._v(" "+t._s(t.$t("alertPasswordReset"))+" ")]):t._e(),t.$route.query.setPassword?a("v-alert",{attrs:{text:"",type:"success"}},[t._v(" "+t._s(t.$t("alertPasswordSet"))+" ")]):t._e(),t.$route.query.changePassword?a("v-alert",{attrs:{text:"",type:"success"}},[t._v(" "+t._s(t.$t("alertPasswordChanged"))+" ")]):t._e(),t.$route.query.emailVerified?a("v-alert",{attrs:{text:"",type:"success"}},[t._v(" "+t._s(t.$t("alertEmailVerified"))+" ")]):t._e(),a("div",{staticClass:"mt-5"},[a("v-form",{staticClass:"auth-form",on:{submit:function(e){return e.preventDefault(),t.handleLogin(e)}},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[a("p",{staticClass:"login-by-email text-medium"},[t._v(" "+t._s(t.$t("loginByEmail"))+" ")]),a("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("email")))]),a("v-text-field",{attrs:{dense:"",rules:[t.validations.required,t.validations.email],type:"email",outlined:"",solo:"","background-color":"white"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),a("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("password")))]),a("v-text-field",{attrs:{dense:"",rules:[t.validations.required],type:"password",outlined:"",solo:"","hide-details":"auto","background-color":"white"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),a("p",{staticClass:"text-caption text-left mt-2",staticStyle:{"font-size":"14px"}},[a("router-link",{staticClass:"text-color-primary-blue-dark",staticStyle:{"text-decoration":"none"},attrs:{to:{name:"ForgotPassword"}}},[t._v(" "+t._s(t.$t("forgotPassowrd"))+" ")])],1),a("response-alert",{attrs:{response:t.formResponse}}),a("v-btn",{staticClass:"full-w mt-2",attrs:{link:"",href:"https://dev.api.jonder.devla.dev/api/v1/auth/google",outlined:"",color:"primary",disabled:!t.captchaValid}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-google")]),t._v(" "+t._s(t.$t("continueWithGoogle"))+" ")],1),a("v-btn",{staticClass:"full-w mt-4",attrs:{link:"",href:"https://dev.api.jonder.devla.dev/api/v1/auth/facebook",outlined:"",color:"primary",disabled:!t.captchaValid}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-facebook")]),t._v(" "+t._s(t.$t("continueWithFacebook"))+" ")],1),a("v-btn",{staticClass:"full-w mt-5 dark-blue",attrs:{type:"submit",disabled:!t.formValid,loading:t.formLoading}},[t._v(" "+t._s(t.$t("login"))+" ")]),a("v-text-field",{staticClass:"d-none",attrs:{rules:[function(){return t.captchaValid}]},model:{value:t.captchaValid,callback:function(e){t.captchaValid=e},expression:"captchaValid"}})],1)],1),a("p",{staticClass:"text-center mt-2",staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t.$t("dontHaveAccount"))+" "),a("router-link",{staticClass:"text-color-primary-blue-dark",staticStyle:{"text-decoration":"none"},attrs:{to:{name:"Register"}}},[t._v(" "+t._s(t.$t("register"))+" ")])],1),a("div",{class:{"d-none":t.captchaValid}},[a("vue-recaptcha",{class:["d-flex justify-center"],attrs:{sitekey:t.getCaptchaKey()},on:{verify:function(e){t.captchaValid=!0},expired:function(e){t.captchaValid=!1},render:function(e){t.captchaValid=!1}}})],1),a("div",[a("LanguageDropdown",{staticClass:"mt-5 mx-auto",staticStyle:{"max-width":"260px"},attrs:{attach:!0}})],1)],1)},s=[],c=a("1da1"),l=(a("96cf"),a("d3b7"),a("5319"),a("ac1f"),a("1bd7")),u=a("6461"),d=a("2185"),f=a("e096"),h={name:"AuthLogin",components:{JonderTitle:l["a"],ResponseAlert:u["a"],LanguageDropdown:d["a"],VueRecaptcha:f["a"]},data:function(){return{message:{show:!1,text:""},formData:{email:"",password:"",privacy:!1},formLoading:!1,formResponse:{},formValid:!1,captchaValid:!1}},methods:{handleLogin:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.formLoading=!0,t.formResponse={},t.$store.dispatch("auth/login",t.formData).then((function(){localStorage.removeItem("verificationTime"),t.$route.query.redirect?t.$router.replace(t.$route.query.redirect):t.$router.replace({name:"Home"}),t.$store.dispatch("user/fetchPlans")})).catch((function(e){var a;null!==(a=e.data.data)&&void 0!==a&&a.email_not_verified?t.$router.replace({name:"RegisterVerifyEmail",query:{email:t.formData.email}}):t.formResponse={message:t.$t("loginFailed")}})).finally((function(){t.formLoading=!1}));case 3:case"end":return e.stop()}}),e)})))()}}},p=h,m=(a("544c"),a("2877")),v=a("6544"),g=a.n(v),w=a("0798"),y=a("8336"),b=a("a523"),_=a("4bd4"),$=a("132d"),x=a("8654"),V=Object(m["a"])(p,o,s,!1,null,"35697024",null),k=V.exports;g()(V,{VAlert:w["a"],VBtn:y["a"],VContainer:b["a"],VForm:_["a"],VIcon:$["a"],VTextField:x["a"]});var C={name:"Login",components:{AuthWrap:n["a"],AuthLogin:k}},S=C,R=Object(m["a"])(S,r,i,!1,null,null,null);e["default"]=R.exports},"544c":function(t,e,a){"use strict";a("b0d7")},b0d7:function(t,e,a){},e096:function(t,e,a){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},r.apply(this,arguments)}var i=function(){var t=!1,e=[],a=function(a){if(!t){t=!0;for(var r=0,i=e.length;r<i;r++)e[r](a)}},r=function(a){t?a():e.push(a)},i={resolved:function(){return t},resolve:a,promise:{then:r}};return i},n=Object.prototype.hasOwnProperty;function o(){var t=i();return{notify:function(){t.resolve()},wait:function(){return t.promise},render:function(t,e,a){this.wait().then((function(){a(window.grecaptcha.render(t,e))}))},reset:function(t){"undefined"!==typeof t&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.reset(t)})))},execute:function(t){"undefined"!==typeof t&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.execute(t)})))},checkRecaptchaLoad:function(){n.call(window,"grecaptcha")&&n.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!t.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}var s=o();"undefined"!==typeof window&&(window.vueRecaptchaApiLoaded=s.notify);var c={name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},beforeMount:function(){if(this.loadRecaptchaScript&&!document.getElementById(this.recaptchaScriptId)){var t=document.createElement("script");t.id=this.recaptchaScriptId,t.src="https://"+this.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+this.language,t.async=!0,t.defer=!0,document.head.appendChild(t)}},mounted:function(){var t=this;s.checkRecaptchaLoad();var e=r({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired,"error-callback":this.emitError}),a=this.$slots["default"]?this.$el.children[0]:this.$el;s.render(a,e,(function(e){t.$widgetId=e,t.$emit("render",e)}))},methods:{reset:function(){s.reset(this.$widgetId)},execute:function(){s.execute(this.$widgetId)},emitVerify:function(t){this.$emit("verify",t)},emitExpired:function(){this.$emit("expired")},emitError:function(){this.$emit("error")}},render:function(t){return t("div",{},this.$slots["default"])}};e["a"]=c}}]);
//# sourceMappingURL=Login.1544b097.js.map