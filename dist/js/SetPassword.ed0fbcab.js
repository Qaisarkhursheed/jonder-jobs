(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SetPassword"],{"4bd4":function(t,a,i){"use strict";var r=i("5530"),s=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),e=i("7e2b"),n=i("3206");a["a"]=Object(s["a"])(e["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,i=function(t){return t.$watch("hasError",(function(i){a.$set(a.errorBag,t._uid,i)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(a.errorBag.hasOwnProperty(t._uid)||(r.valid=i(t)))})):r.valid=i(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var i=this.watchers.find((function(t){return t._uid===a._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},"588d":function(t,a,i){},a3ae:function(t,a,i){"use strict";i.r(a);var r=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("auth-wrap",{attrs:{img:"1"}},[i("v-container",{staticClass:"auth-login-wrap mx-auto",staticStyle:{"max-width":"500px"},attrs:{fluid:"","no-gutters":""}},[i("jonder-title",[t._v(" "+t._s(t.$t("setPassword"))+" ")]),i("p",{staticClass:"p-text mb-7"},[t._v(" "+t._s(t.$t("setPasswordDescription"))+" ")]),i("v-form",{staticClass:"auth-form",on:{submit:function(a){return a.preventDefault(),t.submit(a)}},model:{value:t.formValid,callback:function(a){t.formValid=a},expression:"formValid"}},[i("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("password")))]),i("v-text-field",{attrs:{dense:"",rules:[t.validations.required,t.validations.min.string(6)],type:"password",outlined:"","background-color":"white"},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}}),i("label",{staticClass:"profile-label"},[t._v(t._s(t.$t("confirmPassword")))]),i("v-text-field",{attrs:{dense:"",rules:[t.validations.required,t.validations.same("Passwort",t.formData.password)],type:"password",outlined:"","background-color":"white"},model:{value:t.formData.password_confirmation,callback:function(a){t.$set(t.formData,"password_confirmation",a)},expression:"formData.password_confirmation"}}),i("ResponseAlert",{attrs:{response:t.formResponse}}),i("v-btn",{staticClass:"full-w",attrs:{type:"submit",color:"primary",height:"55",disabled:!t.formValid,loading:t.formLoading}},[t._v(" "+t._s(t.$t("send"))+" ")])],1)],1)],1)},s=[],e=(i("d3b7"),i("1bd7")),n=i("e21d"),o={data:function(){return{formData:{},formLoading:!1,formResponse:{},formValid:!1}},components:{AuthWrap:n["a"],JonderTitle:e["a"]},methods:{submit:function(){var t=this;this.formLoading=!0,this.formResponse={},this.formData.expires=this.$route.params.expires,this.formData.token=this.$route.params.token,this.formData.signature=this.$route.params.signature,this.$store.dispatch("auth/setPassword",this.formData).then((function(){t.$router.push({name:"Login",query:{setPassword:1}})})).catch((function(a){t.formResponse=a.data})).finally((function(){t.formLoading=!1}))}}},u=o,d=(i("c74b"),i("2877")),l=i("6544"),c=i.n(l),f=i("8336"),h=i("a523"),m=i("4bd4"),p=i("8654"),v=Object(d["a"])(u,r,s,!1,null,"62d901f9",null);a["default"]=v.exports;c()(v,{VBtn:f["a"],VContainer:h["a"],VForm:m["a"],VTextField:p["a"]})},c74b:function(t,a,i){"use strict";i("588d")}}]);
//# sourceMappingURL=SetPassword.ed0fbcab.js.map