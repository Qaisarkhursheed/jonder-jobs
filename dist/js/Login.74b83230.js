(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"3f5b":function(t,e,a){"use strict";a("6e32")},"4bd4":function(t,e,a){"use strict";var r=a("5530"),i=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),s=a("7e2b"),o=a("3206");e["a"]=Object(i["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(r.valid=a(t)))})):r.valid=a(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5326:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("auth-wrap",{attrs:{img:"1"}},[a("auth-login")],1)},i=[],s=a("e21d"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"auth-login-wrap mx-auto",attrs:{fluid:"","no-gutters":""}},[a("jonder-title",[t._v(" "+t._s(t.$t("loginAccount"))+" ")]),t.$route.query.resetPassword?a("v-alert",{attrs:{text:"",type:"success"}},[t._v(" "+t._s(t.$t("alertPasswordReset"))+" ")]):t._e(),t.$route.query.setPassword?a("v-alert",{attrs:{text:"",type:"success"}},[t._v(" "+t._s(t.$t("alertPasswordSet"))+" ")]):t._e(),t.$route.query.changePassword?a("v-alert",{attrs:{text:"",type:"success"}},[t._v(" "+t._s(t.$t("alertPasswordChanged"))+" ")]):t._e(),t.$route.query.emailVerified?a("v-alert",{attrs:{text:"",type:"success"}},[t._v(" "+t._s(t.$t("alertEmailVerified"))+" ")]):t._e(),a("div",{staticClass:"mt-5"},[a("v-form",{staticClass:"auth-form",on:{submit:function(e){return e.preventDefault(),t.handleLogin(e)}},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[a("p",{staticClass:"login-by-email text-medium"},[t._v(" "+t._s(t.$t("loginByEmail"))+" ")]),a("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("email")))]),a("v-text-field",{attrs:{dense:"",rules:[t.validations.required,t.validations.email],type:"email",outlined:"",solo:"","background-color":"white"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),a("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("password")))]),a("v-text-field",{attrs:{dense:"",rules:[t.validations.required],type:"password",outlined:"",solo:"","hide-details":"auto","background-color":"white"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),a("p",{staticClass:"text-caption text-left mt-2",staticStyle:{"font-size":"14px"}},[a("router-link",{staticClass:"text-color-primary-blue-dark",staticStyle:{"text-decoration":"none"},attrs:{to:"/forgot-password"}},[t._v(" "+t._s(t.$t("forgotPassowrd"))+" ")])],1),a("response-alert",{attrs:{response:t.formResponse}}),a("v-btn",{staticClass:"full-w mt-2",attrs:{link:"",href:"https://dev.api.jonder.devla.dev/api/v1/auth/google",outlined:"",color:"primary"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-google")]),t._v(" "+t._s(t.$t("continueWithGoogle"))+" ")],1),a("v-btn",{staticClass:"full-w mt-4",attrs:{link:"",href:"https://dev.api.jonder.devla.dev/api/v1/auth/facebook",outlined:"",color:"primary"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-facebook")]),t._v(" "+t._s(t.$t("continueWithFacebook"))+" ")],1),a("v-btn",{staticClass:"full-w mt-5 dark-blue",attrs:{type:"submit",disabled:!t.formValid,loading:t.formLoading}},[t._v(" "+t._s(t.$t("login"))+" ")])],1)],1),a("p",{staticClass:"text-center mt-2",staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t.$t("dontHaveAccount"))+" "),a("router-link",{staticClass:"text-color-primary-blue-dark",staticStyle:{"text-decoration":"none"},attrs:{to:"/register"}},[t._v(" "+t._s(t.$t("register"))+" ")])],1)],1)},n=[],l=a("1da1"),u=(a("96cf"),a("d3b7"),a("5319"),a("ac1f"),a("1bd7")),c=a("6461"),d={name:"AuthLogin",components:{JonderTitle:u["a"],ResponseAlert:c["a"]},data:function(){return{message:{show:!1,text:""},formData:{email:"",password:"",privacy:!1},formLoading:!1,formResponse:{},formValid:!1}},methods:{handleLogin:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.formLoading=!0,t.formResponse={},localStorage.setItem("user-email",t.formData.email),t.$store.dispatch("auth/login",t.formData).then((function(){localStorage.removeItem("user-email"),localStorage.removeItem("verificationTime"),t.$route.query.redirect?t.$router.replace(t.$route.query.redirect):t.$router.replace({name:"Home"}),t.$store.dispatch("user/fetchPlans")})).catch((function(e){var a;null!==(a=e.data.data)&&void 0!==a&&a.email_not_verified?t.$router.push({name:"RegisterVerifyEmail"}):t.formResponse=e.data})).finally((function(){t.formLoading=!1}));case 4:case"end":return e.stop()}}),e)})))()}}},f=d,m=(a("3f5b"),a("2877")),h=a("6544"),p=a.n(h),v=a("0798"),_=a("8336"),g=a("a523"),b=a("4bd4"),w=a("132d"),$=a("8654"),y=Object(m["a"])(f,o,n,!1,null,"25abf112",null),x=y.exports;p()(y,{VAlert:v["a"],VBtn:_["a"],VContainer:g["a"],VForm:b["a"],VIcon:w["a"],VTextField:$["a"]});var V={name:"Login",components:{AuthWrap:s["a"],AuthLogin:x}},k=V,C=Object(m["a"])(k,r,i,!1,null,null,null);e["default"]=C.exports},"6e32":function(t,e,a){}}]);
//# sourceMappingURL=Login.74b83230.js.map