(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ResetPassword"],{"0bff":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("auth-wrap",{attrs:{img:"1"}},[e("v-container",{staticClass:"auth-login-wrap mx-auto",staticStyle:{"max-width":"500px"},attrs:{fluid:"","no-gutters":""}},[e("jonder-title",[t._v(" "+t._s(t.$t("resetPassword"))+" ")]),e("p",{staticClass:"p-text mb-7"},[t._v(" "+t._s(t.$t("resetPasswordDescription"))+" ")]),e("v-form",{staticClass:"auth-form",on:{submit:function(a){return a.preventDefault(),t.submit(a)}},model:{value:t.formValid,callback:function(a){t.formValid=a},expression:"formValid"}},[e("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("newPassword")))]),e("v-text-field",{attrs:{dense:"",solo:"",rules:[t.validations.required,t.validations.min.string(6)],type:"password",outlined:"","background-color":"white"},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}}),e("label",{staticClass:"profile-label"},[t._v(" "+t._s(t.$("confirmNewPassword"))+" ")]),e("v-text-field",{attrs:{dense:"",solo:"",rules:[t.validations.required,t.validations.same("Neues Passwort",t.formData.password)],type:"password",outlined:"","background-color":"white"},model:{value:t.formData.password_confirmation,callback:function(a){t.$set(t.formData,"password_confirmation",a)},expression:"formData.password_confirmation"}}),e("ResponseAlert",{attrs:{response:t.formResponse}}),e("v-btn",{staticClass:"full-w",attrs:{type:"submit",color:"primary",height:"55",disabled:!t.formValid}},[t._v(" "+t._s(t.$("send"))+" ")])],1)],1)],1)},s=[],i=e("1bd7"),o=e("e21d"),n={data:function(){return{formData:{},formResponse:{},formValid:!1}},components:{AuthWrap:o["a"],JonderTitle:i["a"]},methods:{submit:function(){var t=this;this.formResponse={},this.formData.email=this.$route.params.email,this.formData.expires=this.$route.params.expires,this.formData.token=this.$route.params.token,this.formData.signature=this.$route.params.signature,this.$store.dispatch("auth/resetPassword",this.formData).then((function(){t.$router.push({name:"Login",query:{resetPassword:1}})})).catch((function(a){t.formResponse=a.data}))}}},u=n,d=(e("b105"),e("2877")),l=e("6544"),c=e.n(l),f=e("8336"),h=e("a523"),m=e("4bd4"),p=e("8654"),w=Object(d["a"])(u,r,s,!1,null,"068da33b",null);a["default"]=w.exports;c()(w,{VBtn:f["a"],VContainer:h["a"],VForm:m["a"],VTextField:p["a"]})},"4bd4":function(t,a,e){"use strict";var r=e("5530"),s=(e("caad"),e("2532"),e("07ac"),e("4de4"),e("159b"),e("7db0"),e("58df")),i=e("7e2b"),o=e("3206");a["a"]=Object(s["a"])(i["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,e=function(t){return t.$watch("hasError",(function(e){a.$set(a.errorBag,t._uid,e)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(a.errorBag.hasOwnProperty(t._uid)||(r.valid=e(t)))})):r.valid=e(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var e=this.watchers.find((function(t){return t._uid===a._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},b105:function(t,a,e){"use strict";e("de3f")},de3f:function(t,a,e){}}]);
//# sourceMappingURL=ResetPassword.1f98f0e0.js.map