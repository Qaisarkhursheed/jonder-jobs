(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ManualOnboardingCompany"],{1681:function(e,t,a){},"267f":function(e,t,a){"use strict";a("2cea")},"281e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("auth-wrap",{attrs:{"have-width":"407",img:2}},[a("div",{staticStyle:{position:"absolute",top:"1rem",right:"1rem"}},[a("v-menu",{attrs:{top:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,o=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"menu-button",attrs:{icon:""}},"v-btn",o,!1),s),[a("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",[a("v-list-item",{on:{click:function(t){return e.$router.replace({name:"Logout"})}}},[e._v(" "+e._s(e.$t("logout"))+" ")])],1)],1)],1),a("div",{staticClass:"stepper-wrap mt-10",staticStyle:{"max-width":"500px"}},[a("v-stepper",{staticClass:"elevation-0 full-w d-flex flex-column",attrs:{"alt-labels":""},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[!0===e.showSteps?a("v-stepper-header",{staticClass:"elevation-0"},[a("v-stepper-step",{attrs:{step:"1",complete:e.complete(1),color:"#0253B3"}}),a("v-divider",{class:{active:e.e1>=2}}),a("v-stepper-step",{attrs:{step:"2",complete:e.complete(2),color:"#0253B3"}}),a("v-divider",{class:{active:e.e1>=3}}),a("v-stepper-step",{attrs:{step:"3",complete:e.complete(3),color:"#0253B3"}}),a("v-divider",{class:{active:e.e1>=4}}),a("v-stepper-step",{attrs:{step:"4",complete:e.complete(4),color:"#0253B3"}})],1):e._e(),a("v-stepper-items",{staticClass:"mo-stepper-items"},[a("v-stepper-content",{staticClass:"px-0 mo-stepper-items__step-content",attrs:{step:"1"}},[a("step-1",{attrs:{nextScreen:e.nextStep},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}})],1),a("v-stepper-content",{staticClass:"px-0 mo-stepper-items__step-content",attrs:{step:"2"}},[a("step-2",{attrs:{nextScreen:e.nextStep},on:{prevScreen:e.prevStep},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}})],1),a("v-stepper-content",{staticClass:"px-0 mo-stepper-items__step-content",attrs:{step:"3"}},[a("step-3",{attrs:{nextScreen:e.nextStep},on:{prevScreen:e.prevStep},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}})],1),a("v-stepper-content",{staticClass:"px-0 mo-stepper-items__step-content",attrs:{step:"4"}},[a("step-4",{attrs:{nextScreen:e.nextStep},on:{prevScreen:e.prevStep},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}})],1),a("v-stepper-content",{staticClass:"px-0 mo-stepper-items__step-content",attrs:{step:"5"}},[a("step-succes",{attrs:{nextScreen:e.nextStep,loading:e.saveInProgress},on:{prevScreen:e.prevStep},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}})],1),a("ResponseAlert",{attrs:{response:e.formResponse}})],1)],1)],1)])},o=[],l=a("1da1"),n=(a("96cf"),a("ac1f"),a("5319"),a("159b"),a("b64b"),a("d3b7"),a("e21d")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mo-step-1"},[a("h1",{staticClass:"text-center mb-3",staticStyle:{"font-size":"28px"}},[e._v(" "+e._s(e.$t("giveUsDetails"))+" ")]),a("v-form",{model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[a("div",{staticClass:"d-flex align-center flex-column mt-8 mb-6"},[a("AvatarInput",{attrs:{size:"120"},model:{value:e.value.profile_img_file,callback:function(t){e.$set(e.value,"profile_img_file",t)},expression:"value.profile_img_file"}}),a("div",{staticClass:"avatar-label mt-4"},[e._v(" "+e._s(e.$t("uploadPhotoEmployer"))+" ")])],1),a("label",{staticClass:"profile-label"},[e._v(" "+e._s(e.$t("aboutCompanyText"))+" "),a("span",{staticStyle:{color:"red"}},[e._v("*")])]),a("v-textarea",{staticClass:"mt-3",attrs:{dense:"",height:"150",placeholder:e.$t("aboutCompanyPlaceholder"),outlined:"","background-color":"white",counter:"250",maxlength:"250",rules:[e.validations.required,e.validations.max.string(250)]},model:{value:e.value.about_company,callback:function(t){e.$set(e.value,"about_company",t)},expression:"value.about_company"}}),a("v-btn",{staticClass:"mt-5",attrs:{disabled:!e.formValid,height:"55",color:"primary",block:""},on:{click:e.nextScreen}},[e._v(" "+e._s(e.$t("next"))+" ")])],1)],1)},i=[],c=a("2db1"),u={name:"Step1",components:{AvatarInput:c["a"]},props:{value:{type:Object,required:!0},nextScreen:Function},data:function(){return{formValid:!1}}},p=u,d=(a("267f"),a("2877")),m=a("6544"),v=a.n(m),f=a("8336"),h=a("4bd4"),b=a("a844"),_=Object(d["a"])(p,r,i,!1,null,"6dbfb2c0",null),g=_.exports;v()(_,{VBtn:f["a"],VForm:h["a"],VTextarea:b["a"]});var x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mo-step-2"},[a("h1",{staticClass:"text-center mb-3",staticStyle:{"font-size":"28px"}},[e._v(" "+e._s(e.$t("companyInfo"))+" ")]),a("v-form",{model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[a("label",{staticClass:"profile-label"},[e._v(" "+e._s(e.$t("industry"))+" "),a("span",{staticStyle:{color:"red"}},[e._v("*")])]),a("v-autocomplete",{staticClass:"mt-1",attrs:{attach:!0,items:e.types.JOB_BRANCHE,rules:[e.validations.required],"item-value":"id","item-text":e.$i18n.locale,outlined:"",flat:"","hide-no-data":"","append-icon":"mdi-chevron-down",placeholder:e.$t("choose")},model:{value:e.value.branche,callback:function(t){e.$set(e.value,"branche",t)},expression:"value.branche"}}),a("label",{staticClass:"profile-label"},[e._v(" "+e._s(e.$t("numberOfEmployees"))+" "),a("span",{staticStyle:{color:"red"}},[e._v("*")])]),a("v-select",{staticClass:"mt-1",attrs:{attach:!0,items:e.types.EMPLOYEE_NUMBER,"item-value":"id","item-text":e.$i18n.locale,rules:[e.validations.required],placeholder:e.$t("choose"),"append-icon":"mdi-chevron-down",outlined:""},model:{value:e.value.company_employees,callback:function(t){e.$set(e.value,"company_employees",t)},expression:"value.company_employees"}}),a("label",{staticClass:"profile-label"},[e._v(" "+e._s(e.$t("dateOfEstablishment"))+" "),a("span",{staticStyle:{color:"red"}},[e._v("*")])]),a("v-text-field",{attrs:{rules:[e.validations.required],type:"number",outlined:"",solo:""},model:{value:e.value.establishment_date,callback:function(t){e.$set(e.value,"establishment_date",t)},expression:"value.establishment_date"}}),a("v-row",{staticClass:"mt-1"},[a("v-col",{attrs:{cols:"3"}},[a("v-btn",{staticClass:"full-w font-weight-medium ",attrs:{height:"55"},on:{click:function(t){return e.$emit("prevScreen")}}},[e._v(" "+e._s(e.$t("back"))+" ")])],1),a("v-col",[a("v-btn",{staticClass:"full-w font-weight-medium dark-blue",attrs:{disabled:!e.formValid,color:"primary",height:"55"},on:{click:e.nextScreen}},[e._v(" "+e._s(e.$t("next"))+" ")])],1)],1)],1)],1)},y=[],w=a("797d"),k={name:"Step2",props:{value:{type:Object,required:!0},nextScreen:Function},data:function(){return{formValid:!1}},computed:{types:function(){return w["a"]}}},C=k,S=a("c6a6"),$=a("62ad"),V=a("0fd9"),O=a("b974"),D=a("8654"),I=Object(d["a"])(C,x,y,!1,null,"21e239f4",null),B=I.exports;v()(I,{VAutocomplete:S["a"],VBtn:f["a"],VCol:$["a"],VForm:h["a"],VRow:V["a"],VSelect:O["a"],VTextField:D["a"]});var j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mo-step-3"},[a("h1",{staticClass:"text-center mb-3",staticStyle:{"font-size":"28px"}},[e._v(" "+e._s(e.$t("companyContact"))+" ")]),a("v-form",{ref:"form",staticClass:"auth-form",model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[a("label",{staticClass:"profile-label"},[e._v(" "+e._s(e.$t("companyEmail"))+" "),a("span",{staticStyle:{color:"red"}},[e._v("*")])]),a("v-text-field",{staticClass:"mt-1",attrs:{rules:[e.validations.required,e.validations.email],dense:"",solo:"",type:"email",placeholder:e.$t("companyEmailPlaceholder"),outlined:"",flat:"","background-color":"white"},model:{value:e.value.company_email,callback:function(t){e.$set(e.value,"company_email",t)},expression:"value.company_email"}}),a("label",{staticClass:"profile-label"},[e._v(" "+e._s(e.$t("companyPhone"))+" "),a("span",{staticStyle:{color:"red"}},[e._v("*")])]),a("v-text-field",{staticClass:"mt-1",attrs:{rules:[e.validations.required,e.validations.phone],dense:"",outlined:"",solo:"",flat:"","background-color":"white"},model:{value:e.value.company_phone,callback:function(t){e.$set(e.value,"company_phone",t)},expression:"value.company_phone"}}),a("label",{staticClass:"profile-label"},[e._v(" "+e._s(e.$t("companyCityandAdress"))+" "),a("span",{staticStyle:{color:"red"}},[e._v("*")])]),a("GooglePlacesAutocomplete",{attrs:{type:"geocode","full-address":!0,placeholder:e.$t("companyCityandAdressPlaceholder"),required:!0},on:{select:function(t){return e.value.address=t}}}),a("v-row",{staticClass:"mt-1"},[a("v-col",{attrs:{cols:"3"}},[a("v-btn",{staticClass:"full-w font-weight-medium ",attrs:{height:"55"},on:{click:function(t){return e.$emit("prevScreen")}}},[e._v(" "+e._s(e.$t("back"))+" ")])],1),a("v-col",[a("v-btn",{staticClass:"full-w font-weight-medium dark-blue",attrs:{disabled:!e.formValid,color:"primary",height:"55"},on:{click:e.nextScreen}},[e._v(" "+e._s(e.$t("next"))+" ")])],1)],1)],1)],1)},E=[],P=a("bf53"),F={name:"Step3",components:{GooglePlacesAutocomplete:P["a"]},props:{value:{type:Object,required:!0},nextScreen:Function},data:function(){return{formValid:!1}},methods:{phonePrefix:function(){if(""===this.value.company_phone)return this.value.company_phone="+49"}},beforeMount:function(){this.phonePrefix()}},R=F,H=Object(d["a"])(R,j,E,!1,null,"08d29f04",null),q=H.exports;v()(H,{VBtn:f["a"],VCol:$["a"],VForm:h["a"],VRow:V["a"],VTextField:D["a"]});var z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mo-step-3"},[a("h1",{staticClass:"text-center mb-3",staticStyle:{"font-size":"28px"}},[e._v(" "+e._s(e.$t("linksForWebsites"))+" ")]),a("v-form",{model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[a("label",{staticClass:"profile-label"},[e._v("Web URL")]),a("v-text-field",{attrs:{dense:"",solo:"",placeholder:"meinunternehmen.de",outlined:"",flat:"","background-color":"white"},model:{value:e.value.web_url,callback:function(t){e.$set(e.value,"web_url",t)},expression:"value.web_url"}}),a("label",{staticClass:"profile-label"},[e._v("Facebook")]),a("v-text-field",{attrs:{dense:"",solo:"",placeholder:"www.facebook.com/unternehmen",outlined:"",flat:"","background-color":"white"},model:{value:e.value.facebook,callback:function(t){e.$set(e.value,"facebook",t)},expression:"value.facebook"}}),a("label",{staticClass:"profile-label"},[e._v("Instagram")]),a("v-text-field",{attrs:{dense:"",solo:"",placeholder:"www.instagram.com/unternehmen",outlined:"",flat:"","background-color":"white"},model:{value:e.value.instagram,callback:function(t){e.$set(e.value,"instagram",t)},expression:"value.instagram"}}),a("label",{staticClass:"profile-label"},[e._v("Twitter")]),a("v-text-field",{attrs:{dense:"",solo:"",placeholder:"www.twitter.com/unternehmen",outlined:"",flat:"","background-color":"white"},model:{value:e.value.twitter,callback:function(t){e.$set(e.value,"twitter",t)},expression:"value.twitter"}}),a("label",{staticClass:"profile-label"},[e._v("Linkedin")]),a("v-text-field",{attrs:{dense:"",solo:"",placeholder:"www.linkedin.com/company/unternehmen",outlined:"",flat:"","background-color":"white"},model:{value:e.value.linkedin,callback:function(t){e.$set(e.value,"linkedin",t)},expression:"value.linkedin"}}),a("label",{staticClass:"profile-label"},[e._v("Youtube")]),a("v-text-field",{attrs:{dense:"",solo:"",placeholder:"www.youtube.com/user/unternehmen",outlined:"",flat:"","background-color":"white"},model:{value:e.value.youtube,callback:function(t){e.$set(e.value,"youtube",t)},expression:"value.youtube"}}),a("v-row",{staticClass:"mt-1"},[a("v-col",{attrs:{cols:"3"}},[a("v-btn",{staticClass:"full-w font-weight-medium ",attrs:{loading:e.loading,height:"55"},on:{click:function(t){return e.$emit("prevScreen")}}},[e._v(" "+e._s(e.$t("back"))+" ")])],1),a("v-col",[a("v-btn",{staticClass:"full-w font-weight-medium ",attrs:{disabled:!e.formValid,loading:e.loading,color:"primary",height:"55"},on:{click:e.nextScreen}},[e._v(" "+e._s(e.$t("next"))+" ")])],1)],1)],1)],1)},A=[],G={name:"Step4",props:{value:{type:Object,required:!0},loading:Boolean,nextScreen:Function},data:function(){return{formValid:!1}}},N=G,T=Object(d["a"])(N,z,A,!1,null,"1675247a",null),M=T.exports;v()(T,{VBtn:f["a"],VCol:$["a"],VForm:h["a"],VRow:V["a"],VTextField:D["a"]});var L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-sheet",{staticClass:"px-12"},[s("v-card",{staticClass:"d-flex align-center justify-center",attrs:{flat:"",tile:""}},[s("v-sheet",[s("v-sheet",{staticClass:"d-flex align-center justify-center mb-16"},[s("v-img",{staticClass:"checked",attrs:{src:a("43e7")}})],1),s("p",{staticClass:"text-center font-weight-bold mb-7 primary--text text-h6"},[e._v(" "+e._s(e.$t("successMessageEmployer"))+" ")]),s("p",{staticClass:"text-center text-body-2"},[e._v(" "+e._s(e.$t("successMessageEmployerSub"))+" ")]),s("v-btn",{staticClass:"full-w font-weight-medium dark-blue",attrs:{type:"submit",color:"primary",height:"58",to:{name:"CompanySearch"}}},[e._v(" "+e._s(e.$t("finish"))+" ")])],1)],1)],1)},J=[],U={props:{loading:Boolean,nextScreen:Function},name:"StepSucces"},W=U,Y=(a("b687"),a("b0af")),K=a("adda"),Q=a("8dd9"),X=Object(d["a"])(W,L,J,!1,null,"5834fb49",null),Z=X.exports;v()(X,{VBtn:f["a"],VCard:Y["a"],VImg:K["a"],VSheet:Q["a"]});var ee={components:{AuthWrap:n["a"],Step1:g,Step2:B,Step3:q,Step4:M,StepSucces:Z},data:function(){return{showSteps:!0,saveInProgress:!1,e1:1,formData:{profile_img:"",about_company:"",branche:"",company_employees:"",company_email:"",company_phone:"",address:"",establishment_date:(new Date).getFullYear(),web_url:"",facebook:"",instagram:"",twitter:"",linkedin:"",youtube:""},formResponse:{}}},created:function(){this.$store.getters["user/user"].onboarding_finished&&this.$router.replace({name:"Home"}),this.populateData()},methods:{populateData:function(){var e=this,t=this.$store.getters["user/user"];t&&Object.keys(t).forEach((function(a){e.formData.hasOwnProperty(a)&&(e.formData[a]=t[a]||e.formData[a])})),console.log("populated-form",this.formData)},prevStep:function(){1!==this.e1?this.e1--:this.e1},nextStep:function(){this.saveInProgress||(this.e1<4?this.e1++:this.saveOnboarding())},complete:function(e){return e<this.e1},saveOnboarding:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=Object.assign({},e.formData),a.profile_img_file?a.profile_img=a.profile_img_file:delete a.profile_img,delete a.profile_img_file,e.saveInProgress=!0,e.formResponse={},e.$store.dispatch("user/postOnboardingCompany",a).then((function(){e.showSteps=!1,e.e1=5})).catch((function(t){e.formResponse=t.data})).finally((function(){e.saveInProgress=!1}));case 6:case"end":return t.stop()}}),t)})))()}}},te=ee,ae=(a("6b95"),a("ce7e")),se=a("132d"),oe=a("8860"),le=a("da13"),ne=a("e449"),re=a("7e85"),ie=a("e516"),ce=a("9c54"),ue=a("56a4"),pe=Object(d["a"])(te,s,o,!1,null,"8aaaefce",null);t["default"]=pe.exports;v()(pe,{VBtn:f["a"],VDivider:ae["a"],VIcon:se["a"],VList:oe["a"],VListItem:le["a"],VMenu:ne["a"],VStepper:re["a"],VStepperContent:ie["a"],VStepperHeader:ce["a"],VStepperItems:ce["b"],VStepperStep:ue["a"]})},"2cea":function(e,t,a){},"615b":function(e,t,a){},"6b95":function(e,t,a){"use strict";a("d4c6")},"7f1f":function(e,t,a){},a844:function(e,t,a){"use strict";var s=a("5530"),o=(a("a9e3"),a("1681"),a("8654")),l=a("58df"),n=Object(l["a"])(o["a"]);t["a"]=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(a,t)+"px"}},genInput:function(){var e=o["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){o["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},b0af:function(e,t,a){"use strict";var s=a("5530"),o=(a("a9e3"),a("0481"),a("615b"),a("10d2")),l=a("297c"),n=a("1c87"),r=a("58df");t["a"]=Object(r["a"])(l["a"],n["a"],o["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o["a"].options.computed.classes.call(this))},styles:function(){var e=Object(s["a"])({},o["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=l["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),a=t.tag,s=t.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),e(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},b687:function(e,t,a){"use strict";a("7f1f")},d4c6:function(e,t,a){}}]);
//# sourceMappingURL=ManualOnboardingCompany.547bab68.js.map