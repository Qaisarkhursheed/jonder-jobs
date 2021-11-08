(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AdminDashboard","chunk-e9b686fe"],{"0a6e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin-dashboard"},[i("PageHeader",{attrs:{title:t.$t("dashboard")}}),i("v-row",{staticClass:"pt-5"},[i("v-col",{attrs:{cols:"6"}},[i("v-card",{staticClass:"pa-8",attrs:{flat:""}},[i("v-card-title",{staticClass:"pa-0 pb-4"},[t._v(" "+t._s(t.$t("bulkUploadUsers"))+" ")]),i("v-file-input",{staticClass:"file-input-jonder ",attrs:{placeholder:t.$t("upload")+" CSV",outlined:"",color:"#0253B3","prepend-icon":null,"prepend-inner-icon":"mdi-cloud-upload",accept:".csv"},on:{change:function(e){return t.csv=e}},scopedSlots:t._u([{key:"selection",fn:function(e){var a=e.text;return[i("v-chip",{attrs:{small:"",label:"",color:"primary"}},[t._v(" "+t._s(a)+" ")])]}}]),model:{value:t.csv,callback:function(e){t.csv=e},expression:"csv"}}),i("response-alert",{attrs:{response:t.response}}),i("div",{staticClass:"d-flex justify-end"},[i("v-btn",{staticClass:"px-10",attrs:{depressed:"",color:"primary",height:"48"},on:{click:t.importCSV}},[t._v(t._s(t.$t("save"))+" ")])],1)],1)],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-card",{staticClass:"pa-8",attrs:{flat:""}},[i("div",{staticClass:"d-flex justify-space-between mb-3"},[i("div",[i("v-card-title",{staticClass:"pa-0 pb-4"},[t._v(" "+t._s(t.$t("duplicatedUsersManagement"))+" ")])],1),i("div",[i("v-btn",{staticClass:"px-10",attrs:{depressed:"",color:"primary",height:"48"},on:{click:function(e){return t.$store.dispatch("admin/checkDuplicateUsers")}}},[t._v(" "+t._s(t.$t("refresh"))+" ")])],1)]),i("div",[i("v-data-table",{attrs:{headers:t.duplicateUsers.headers,items:t.$store.getters["admin/duplicateUsers"],"single-select":!0},scopedSlots:t._u([{key:"item.action",fn:function(e){var a=e.item;return[i("v-icon",{attrs:{small:""},on:{click:function(e){return t.$store.dispatch("admin/deleteUser",a.id)}}},[t._v(" mdi-delete ")])]}}])})],1)])],1)],1)],1)},n=[],s=i("f5e3"),r=i("6461"),l={name:"AdminDashboard",components:{PageHeader:s["a"],ResponseAlert:r["a"]},data:function(){return{csv:null,response:{},duplicateUsers:{headers:[{text:"ID",value:"id",width:"10%"},{text:this.$t("email"),value:"email",width:"30%"},{text:this.$t("createdAt"),value:"created_at",width:"30%"},{text:this.$t("type"),value:"role",width:"20%"},{text:this.$t("delete"),value:"action",width:"10%"}]}}},methods:{importCSV:function(){var t=this;this.$store.dispatch("admin/importUsers",this.csv).then((function(e){t.response=e.data,t.$store.dispatch("admin/fetchJobseekers"),t.$store.dispatch("admin/fetchCompanies")})).catch((function(e){t.response=e.data}))}}},c=l,o=i("2877"),u=i("6544"),d=i.n(u),h=i("8336"),p=i("b0af"),f=i("99d9"),v=i("cc20"),m=i("62ad"),b=i("8fea"),g=i("23a7"),y=i("132d"),S=i("0fd9"),C=Object(o["a"])(c,a,n,!1,null,null,null);e["default"]=C.exports;d()(C,{VBtn:h["a"],VCard:p["a"],VCardTitle:f["c"],VChip:v["a"],VCol:m["a"],VDataTable:b["a"],VFileInput:g["a"],VIcon:y["a"],VRow:S["a"]})},"23a7":function(t,e,i){"use strict";var a=i("2909"),n=i("5530"),s=i("53ca"),r=(i("a9e3"),i("caad"),i("13d5"),i("d81d"),i("b0c0"),i("99af"),i("a434"),i("159b"),i("fb6a"),i("5803"),i("2677")),l=i("cc20"),c=i("80d2"),o=i("d9bd"),u=i("d9f7");e["a"]=r["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(c["I"])(t).every((function(t){return null!=t&&"object"===Object(s["a"])(t)}))}}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,a=void 0===i?0:i;return t+a}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(c["w"])(e,1024===this.base))},internalArrayValue:function(){return Object(c["I"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var i=e.name,a=void 0===i?"":i,n=e.size,s=void 0===n?0:n,r=t.truncateText(a);return t.showSize?"".concat(r," (").concat(Object(c["w"])(s,1024===t.base),")"):r})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(o["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(c["j"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(l["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=r["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(u["d"])(t.data.style,{display:"none"})),t},genInput:function(){var t=r["a"].options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,a){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[a],file:i,index:a}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=r["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(n["a"])(Object(n["a"])({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(a["a"])(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,i){"use strict";var a=i("8654");e["a"]=a["a"]},5803:function(t,e,i){},"5ec4":function(t,e,i){"use strict";i("df1c")},"615b":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return c}));var a=i("b0af"),n=i("80d2"),s=Object(n["i"])("v-card__actions"),r=Object(n["i"])("v-card__subtitle"),l=Object(n["i"])("v-card__text"),c=Object(n["i"])("v-card__title");a["a"]},b0af:function(t,e,i){"use strict";var a=i("5530"),n=(i("a9e3"),i("0481"),i("615b"),i("10d2")),s=i("297c"),r=i("1c87"),l=i("58df");e["a"]=Object(l["a"])(s["a"],r["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},r["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},df1c:function(t,e,i){},f5e3:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin-page-header"},[i("div",{staticClass:"page-title"},[t._v(" "+t._s(t.title)+" ")])])},n=[],s={name:"PageHeader",props:{title:{type:String}}},r=s,l=(i("5ec4"),i("2877")),c=Object(l["a"])(r,a,n,!1,null,"62fbdc50",null);e["a"]=c.exports}}]);
//# sourceMappingURL=AdminDashboard.ff4b9867.js.map