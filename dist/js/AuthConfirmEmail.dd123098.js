(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AuthConfirmEmail"],{"0c76":function(n,t,e){"use strict";e("6ada")},"0ca1":function(n,t,e){n.exports=e.p+"img/1.2fcb1a7c.png"},1105:function(n,t,e){n.exports=e.p+"img/4.f17160f2.png"},"15f8":function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFqSURBVHgBnVI7TsNAEN21ozSJg5QoPymRorSp6KCDBtFBkeQCER0N5hB0wAV8ACQuABcIVSrCAUhk2S5sxR8J/3kj/nYIEiO93dl9+2ZmZ5ezd6tWq5VisXgCdwBUgMcgCBTTNBdsjYk0tFqtgSiKt3AP0zT1Oecv8I8LhcKkXC4vXdedZ4UCMnUxK7RIkmSo6/qBpmkjQRB2EOQe25eNRmM3J0R5tNnFwZFhGNMPQlXVRRiGZ3AdcHJOCIxR2pwOZklJklaYbsAPckKUs2K/GDIxiGz21qyfHAjK1KWuZsk4jjkCj+HO1wQVqDES7npdq9W2er0eIzSbTe77vozAHYiVrFB0HMculUo2DkzwJEdRFHWAPaxPwY+ABYI/1ev1mWVZX0IaPM+b4b3u4G4D+xBRp5+BK+ABuECHOZ5l+l280fr9Pmu32zKwxEc5p/Vnxk1GGSgTyqcOy5QZP2n6pzArhg0hVNh/7RVspouL3jolQAAAAABJRU5ErkJggg=="},2175:function(n,t,e){n.exports=e.p+"img/6.0b2facc8.png"},"34bf":function(n,t,e){n.exports=e.p+"img/7.e65d634f.png"},4537:function(n,t,e){n.exports=e.p+"img/searchnoresults.40050517.png"},"6ada":function(n,t,e){},"6c0b":function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("auth-wrap",{attrs:{img:"1"}},[i("div",{staticClass:"mt-4 text-center",staticStyle:{"max-width":"400px"}},[i("img",{attrs:{src:e("f27d"),width:"230"}}),i("h1",{staticClass:"mt-5",staticStyle:{"font-size":"24px"}},[n._v(" "+n._s(n.$t("confirmYourAccount"))+" ")]),i("p",{staticClass:"mt-2 mb-5"},[n._v(" "+n._s(n.$t("confirmYourAccountSub"))+" ")]),i("router-link",{attrs:{to:{name:"Login"}}},[i("v-btn",{attrs:{type:"button",color:"primary",height:"55"}},[n._v(" "+n._s(n.$t("backToLogin"))+" ")])],1),i("br"),n.successBox?i("div",{staticClass:"mt-3 d-block",staticStyle:{color:"#4caf50"}},[n._v(" "+n._s(n.$t("emailSentSuccess"))+"! ")]):i("v-btn",{staticClass:"mt-3",attrs:{text:"",loading:n.loading,height:"55"},on:{click:n.verificationEmail}},[n._v(" "+n._s(n.$t("resendEmail"))+" ")])],1)])},s=[],o=(e("d3b7"),e("25f0"),e("e21d")),a={data:function(){return{resendValid:!1,interval:null,successBox:!1,loading:!1}},components:{AuthWrap:o["a"]},methods:{setInterval:function(n){function t(){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(){var n=this;this.interval=setInterval((function(){n.canResend()}),1e3)})),canResend:function(){var n=(new Date).getTime(),t=+localStorage.getItem("verificationTime")||n;this.resendValid=(n-t)/1e3>=60,this.resendValid&&clearInterval(this.interval)},verificationEmail:function(){var n=this;this.loading=!0,this.$store.dispatch("auth/sendVerificationEmail",this.$route.query.email).then((function(){n.successBox=!0,setInterval((function(){return n.successBox=!1}),5e3)})).finally((function(){return n.loading=!1}));var t=(new Date).getTime().toString();localStorage.setItem("verificationTime",t),this.setInterval()}},mounted:function(){this.setInterval()}},c=a,p=e("2877"),l=e("6544"),r=e.n(l),g=e("8336"),f=Object(p["a"])(c,i,s,!1,null,null,null);t["default"]=f.exports;r()(f,{VBtn:g["a"]})},"6e2f":function(n,t,e){n.exports=e.p+"img/profile-placeholder.1225968c.png"},"7d19":function(n,t,e){n.exports=e.p+"img/selection_management_empty.915d0172.png"},"7eb7":function(n,t,e){n.exports=e.p+"img/candidate.d1bbc769.png"},9310:function(n,t,e){n.exports=e.p+"img/5.06ae7ab3.png"},"9e01":function(n,t,e){var i={"./1.png":"0ca1","./2.png":"b9af","./3.png":"c2e4","./4.png":"1105","./5.png":"9310","./6.png":"2175","./7.png":"34bf","./8.png":"f8bf","./candidate.png":"7eb7","./company_placeholder.png":"d496","./file-icons/_blank.png":"cb6b","./file-icons/_page.png":"6aba","./file-icons/aac.png":"b0bb","./file-icons/aiff.png":"a468","./file-icons/avi.png":"4fd8","./file-icons/bmp.png":"2d89","./file-icons/csv.png":"f9d3","./file-icons/dat.png":"753b","./file-icons/dmg.png":"df1f","./file-icons/doc.png":"1301","./file-icons/dotx.png":"3102","./file-icons/eps.png":"e9bd","./file-icons/flv.png":"f9f3","./file-icons/gif.png":"3738","./file-icons/ics.png":"b517","./file-icons/iso.png":"63c6","./file-icons/jpg.png":"07b9","./file-icons/mid.png":"9c61","./file-icons/mp3.png":"3843","./file-icons/mp4.png":"24eb","./file-icons/mpg.png":"df26","./file-icons/odf.png":"fbcb","./file-icons/ods.png":"3bec","./file-icons/odt.png":"6577","./file-icons/otp.png":"062c","./file-icons/ots.png":"07f6","./file-icons/ott.png":"30df","./file-icons/pdf.png":"fb42","./file-icons/png.png":"fd4f","./file-icons/ppt.png":"a8dc","./file-icons/rar.png":"0c15","./file-icons/rtf.png":"4cb5","./file-icons/tga.png":"0324","./file-icons/tgz.png":"d2ce","./file-icons/tiff.png":"5c5c","./file-icons/txt.png":"76dd","./file-icons/wav.png":"4937","./file-icons/xls.png":"0430","./file-icons/xlsx.png":"9b0e","./file-icons/xml.png":"1326","./file-icons/yml.png":"339a","./file-icons/zip.png":"387b","./icons/profile-placeholder.png":"6e2f","./images/messages_empty.png":"e755","./images/selection_management_empty.png":"7d19","./jonder_blue.png":"89ce","./jonder_white.png":"da8a","./landing/company.png":"59e3","./landing/employee.png":"8f49","./landing/hero.png":"d336","./landing/laptop.png":"757d","./landing/phones.png":"1b454","./logo.png":"cf05","./loop.png":"15f8","./searchnoresults.png":"4537"};function s(n){var t=o(n);return e(t)}function o(n){if(!e.o(i,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return i[n]}s.keys=function(){return Object.keys(i)},s.resolve=o,n.exports=s,s.id="9e01"},b9af:function(n,t,e){n.exports=e.p+"img/2.e9c401ef.png"},c2e4:function(n,t,e){n.exports=e.p+"img/3.f9b4140b.png"},cf05:function(n,t,e){n.exports=e.p+"img/logo.82b9c7a5.png"},d496:function(n,t,e){n.exports=e.p+"img/company_placeholder.7e66aff7.png"},da8a:function(n,t,e){n.exports=e.p+"img/jonder_white.c93b3106.png"},e21d:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-container",{staticClass:"main-wrap fill-height pa-0",attrs:{fluid:"","no-gutters":""}},[i("v-row",{staticClass:"full-h",attrs:{"no-gutters":""}},[i("v-col",{staticClass:"full-h",staticStyle:{position:"relative"},attrs:{cols:"12",md:"6",order:"2","order-md":"1"}},[i("div",{staticClass:"hero-image d-flex justify-content-center align-center",style:{backgroundImage:"url("+e("9e01")("./"+n.img+".png")+")"}}),i("v-overlay",{attrs:{absolute:!0,value:!0}},[i("v-img",{attrs:{src:e("da8a"),"max-width":"212"}})],1)],1),i("v-col",{staticClass:"full-h",staticStyle:{position:"relative"},attrs:{cols:"12",md:"6",order:"1","order-md":"2"}},[i("div",{staticClass:"auth-wrap d-flex"},[i("div",{staticClass:"my-auto mx-auto",style:{width:n.haveWidth?n.haveWidth+"px":"auto"}},[i("v-img",{staticClass:"mx-auto",attrs:{src:e("89ce"),"max-width":"128px"}}),n._t("default")],2)])])],1)],1)},s=[],o={name:"AuthWrap",props:["img","haveWidth"]},a=o,c=(e("0c76"),e("2877")),p=e("6544"),l=e.n(p),r=e("62ad"),g=e("a523"),f=e("adda"),d=e("a797"),u=e("0fd9"),m=Object(c["a"])(a,i,s,!1,null,"36ec0c68",null);t["a"]=m.exports;l()(m,{VCol:r["a"],VContainer:g["a"],VImg:f["a"],VOverlay:d["a"],VRow:u["a"]})},e755:function(n,t,e){n.exports=e.p+"img/messages_empty.9c541638.png"},f27d:function(n,t,e){n.exports=e.p+"img/email_sent.7853682f.svg"},f8bf:function(n,t,e){n.exports=e.p+"img/8.7ee74a02.png"}}]);
//# sourceMappingURL=AuthConfirmEmail.dd123098.js.map