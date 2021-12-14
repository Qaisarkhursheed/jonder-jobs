(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CompanyManagementUser","chunk-e9b686fe"],{1681:function(t,e,a){},"2bfd":function(t,e,a){},"516c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"company-management-user"},[a("v-card",{staticClass:"pa-8",attrs:{flat:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"avatar"},[a("v-avatar",{attrs:{color:"primary",size:"70"}},[t.company.profile_img?a("img",{attrs:{src:t.company.profile_img}}):t._e()])],1)])],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("companyName"))+" ")]),a("v-text-field",{attrs:{outlined:"",readonly:""},model:{value:t.company.company,callback:function(e){t.$set(t.company,"company",e)},expression:"company.company"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("aboutCompany"))+" ")]),a("v-textarea",{attrs:{outlined:"",readonly:""},model:{value:t.company.about_company,callback:function(e){t.$set(t.company,"about_company",e)},expression:"company.about_company"}})],1)]),a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("branch"))+" ")]),a("v-autocomplete",{attrs:{attach:!0,items:t.types.JOB_BRANCHE,"item-value":"id","item-text":t.$i18n.locale,"cache-items":"",outlined:"",readonly:""},model:{value:t.company.branche,callback:function(e){t.$set(t.company,"branche",e)},expression:"company.branche"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("numberOfEmployees"))+" ")]),a("v-select",{attrs:{attach:!0,items:t.types.EMPLOYEE_NUMBER,outlined:"",readonly:""},scopedSlots:t._u([{key:"selection",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.$t(a)))]}},{key:"item",fn:function(e){var n=e.item;return[a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(t.$t(n))+" ")])],1)]}}]),model:{value:t.company.company_employees,callback:function(e){t.$set(t.company,"company_employees",e)},expression:"company.company_employees"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("foundingYear"))+" ")]),a("v-text-field",{attrs:{type:"number",outlined:"",readonly:""},model:{value:t.company.establishment_date,callback:function(e){t.$set(t.company,"establishment_date",e)},expression:"company.establishment_date"}})],1)])],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("emailAddress"))+" ")]),a("v-text-field",{attrs:{type:"email",outlined:"",readonly:""},model:{value:t.company.company_email,callback:function(e){t.$set(t.company,"company_email",e)},expression:"company.company_email"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("phone"))+" ")]),a("v-text-field",{attrs:{outlined:"",readonly:""},model:{value:t.company.company_phone,callback:function(e){t.$set(t.company,"company_phone",e)},expression:"company.company_phone"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("cityAndAddress"))+" ")]),a("v-text-field",{attrs:{outlined:"",readonly:""},model:{value:t.company.address,callback:function(e){t.$set(t.company,"address",e)},expression:"company.address"}})],1),t.company.plan?a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("subscriptionPlan"))+" ")]),a("div",{staticClass:"d-flex justify-space-between"},[t.company.plan?a("v-chip",{staticClass:"pl-5 pr-5 font-weight-bold",staticStyle:{"font-size":"16px"},attrs:{color:"#ffffff","text-color":"#000000"}},[t._v(" "+t._s(t.company&&t.company.plan&&t.company.plan.name?t.company.plan.name:"-")+" ")]):t._e(),a("p",{staticClass:"mt-1 mx-5"},[t._v(" "+t._s(t.$t("price"))+": "+t._s(t.company&&t.company.plan&&t.company.plan.price)+" € ")]),a("p",{staticClass:"mt-1 mx-5"},[t._v(" "+t._s(t.$t("validUntil"))+": "+t._s(t._f("moment")(t.company&&t.company.plan&&t.company.plan.end_timestamp,"DD MMM, YYYY"))+" ")]),a("v-btn",{staticClass:"px-5 mt-1",attrs:{loading:t.formLoading,depressed:"",color:"primary",height:"28"},on:{click:function(e){return t.handlePlanRemove(t.company&&t.company.plan&&t.company.plan.id)}}},[t._v(" "+t._s(t.$t("cancelSubscription"))+" ")])],1)]):t._e(),a("div",{staticClass:"mt-5"},[a("h3",[t._v(t._s(t.$t("selectNewPlan")))]),a("div",[a("v-select",{staticClass:"mt-1",attrs:{items:t.plans,"item-text":"name","item-value":"id",label:t.$t("selectNewPlan"),outlined:""},on:{change:t.changePlan},model:{value:t.selectedNewPlan,callback:function(e){t.selectedNewPlan=e},expression:"selectedNewPlan"}})],1),a("div",[a("v-btn",{staticClass:"px-10",attrs:{loading:t.formLoading,depressed:"",color:"primary",height:"48"},on:{click:t.handlePlanChange}},[t._v(t._s(t.$t("save"))+" ")])],1)])]),a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("webUrl"))+" ")]),a("v-text-field",{attrs:{outlined:"",readonly:""},model:{value:t.company.web_url,callback:function(e){t.$set(t.company,"web_url",e)},expression:"company.web_url"}})],1),a("div",{staticClass:"social-links mb-3"},[t._v(" "+t._s(t.$t("socialLinks"))+" ")]),t._l(t.social,(function(e,n){return a("div",{key:n,staticClass:"section mb-4"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(e)+" ")]),a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.company[e],callback:function(a){t.$set(t.company,e,a)},expression:"company[item]"}})],1)}))],2)],1)],1)],1)},s=[],i=a("5530"),l=(a("a9e3"),a("d3b7"),a("c740"),a("bc3a")),o=a.n(l),c=a("797d"),r=a("2f62"),u={name:"CompanyManagementUser",props:{id:{type:[String,Number]}},data:function(){return{company:{},social:["facebook","instagram","linkedin","youtube","twitter"],selectedNewPlan:null,user:{},formLoading:!1,formResponse:{},plans:[],planColors:{basic:{color:"#F2E7FC",text:"#8C18E2"},highlighted:{color:"#F2E7FC",text:"#8C18E2"},"all-inclusive":{color:"#E1F5FD",text:"#4A4DE6"},premium:{color:"#FBEDE7",text:"#FF6422"}}}},created:function(){var t=this;o.a.get("/copmanies/".concat(this.id)).then((function(e){t.company=e.data.data,console.log("THis company",t.company),o.a.get("/plan-packages",{params:{per_page:999,plan_type:"Jobseeker"==t.user.role?"jobseeker_plan":"employer_plan"}}).then((function(e){t.plans=e.data.data}))}))},methods:Object(i["a"])(Object(i["a"])({},Object(r["b"])("user",["updateUserPlan"])),{},{changePlan:function(){},handlePlanRemove:function(t){var e=this;if(confirm("Are you sure you want to remove this subscription?")){this.formResponse={};var a={user_id:parseInt(this.id),plan_id:t,remove_plan:1};this.formLoading=!0,this.updateUserPlan(a).then((function(t){e.user=t.data.data})).catch((function(t){e.formResponse=t.data})).finally((function(){e.formLoading=!1}))}},handlePlanChange:function(){var t=this;if(this.selectedNewPlan>0){var e=!1;if(console.log(this.user),this.user.plan){var a=this.user.plan.findIndex((function(e){return e.id===t.selectedNewPlan}));e=-1!==a,console.log(a+" index")}if(e)alert("Selected user is already using this plan!");else{this.formResponse={};var n={user_id:parseInt(this.id),plan_id:this.selectedNewPlan};this.formLoading=!0,this.updateUserPlan(n).then((function(e){t.user=e.data.data})).catch((function(e){t.formResponse=e.data})).finally((function(){t.formLoading=!1}))}}else alert("Please select the new plan for user!")}}),computed:{types:function(){return c["a"]}}},d=u,h=a("2877"),p=a("6544"),m=a.n(p),f=a("c6a6"),v=a("8212"),y=a("8336"),b=a("b0af"),g=a("cc20"),I=a("62ad"),_=a("5d23"),x=a("0fd9"),C=a("b974"),S=a("8654"),w=a("a844"),$=Object(h["a"])(d,n,s,!1,null,null,null);e["default"]=$.exports;m()($,{VAutocomplete:f["a"],VAvatar:v["a"],VBtn:y["a"],VCard:b["a"],VChip:g["a"],VCol:I["a"],VListItemContent:_["a"],VListItemTitle:_["c"],VRow:x["a"],VSelect:C["a"],VTextField:S["a"],VTextarea:w["a"]})},"615b":function(t,e,a){},a844:function(t,e,a){"use strict";var n=a("5530"),s=(a("a9e3"),a("1681"),a("8654")),i=a("58df"),l=Object(i["a"])(s["a"]);e["a"]=l.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},s["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b0af:function(t,e,a){"use strict";var n=a("5530"),s=(a("a9e3"),a("0481"),a("615b"),a("10d2")),i=a("297c"),l=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(i["a"],l["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},l["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},c6a6:function(t,e,a){"use strict";var n=a("5530"),s=(a("d81d"),a("4de4"),a("498a"),a("7db0"),a("caad"),a("2532"),a("2bfd"),a("b974")),i=a("8654"),l=a("d9f7"),o=a("80d2"),c=Object(n["a"])(Object(n["a"])({},s["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=s["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,a){return a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:function(){return c}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var a=Object(o["r"])(e,t.itemText),n=null!=a?String(a):"";return t.filter(e,String(t.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=s["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(n["a"])(Object(n["a"])({},c),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=s["a"].options.computed.listData.call(this);return t.props=Object(n["a"])(Object(n["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var a=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===t.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===o["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===o["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==o["y"].backspace&&t!==o["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var n=this.selectedItems.length,s=t!==n-1?t:t-1,i=this.selectedItems[s];i?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=s}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=null,s["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.data=Object(l["a"])(t.data,{attrs:{"aria-activedescendant":Object(o["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(o["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=s["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[o["y"].home,o["y"].end].includes(e)||s["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){s["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){s["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,a;if(-1!==this.selectedIndex){var n=this.selectedItems[this.selectedIndex],s=this.getText(n);null==(e=t.clipboardData)||e.setData("text/plain",s),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",s),t.preventDefault()}}}})}}]);
//# sourceMappingURL=CompanyManagementUser.e140d275.js.map