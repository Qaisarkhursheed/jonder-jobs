(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CompanyManagementUser","chunk-e9b686fe"],{1681:function(t,e,a){},"2bfd":function(t,e,a){},"516c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"company-management-user"},[a("v-card",{staticClass:"pa-8",attrs:{flat:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"avatar"},[a("v-avatar",{attrs:{color:"primary",size:"70"}},[t.company.profile_img?a("img",{attrs:{src:t.company.profile_img}}):t._e()])],1)])],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("companyName"))+" ")]),a("v-text-field",{attrs:{outlined:"",readonly:""},model:{value:t.company.company,callback:function(e){t.$set(t.company,"company",e)},expression:"company.company"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("aboutCompany"))+" ")]),a("v-textarea",{attrs:{outlined:"",readonly:""},model:{value:t.company.about_company,callback:function(e){t.$set(t.company,"about_company",e)},expression:"company.about_company"}})],1)]),a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("branch"))+" ")]),a("v-autocomplete",{attrs:{attach:!0,items:t.types.JOB_BRANCHE,"item-value":"id","item-text":t.$i18n.locale,"cache-items":"",outlined:"",readonly:""},model:{value:t.company.branche,callback:function(e){t.$set(t.company,"branche",e)},expression:"company.branche"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("numberOfEmployees"))+" ")]),a("v-select",{attrs:{attach:!0,items:t.types.EMPLOYEE_NUMBER,outlined:"",readonly:""},scopedSlots:t._u([{key:"selection",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.$t(a)))]}},{key:"item",fn:function(e){var s=e.item;return[a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(t.$t(s))+" ")])],1)]}}]),model:{value:t.company.company_employees,callback:function(e){t.$set(t.company,"company_employees",e)},expression:"company.company_employees"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("foundingYear"))+" ")]),a("v-text-field",{attrs:{type:"number",outlined:"",readonly:""},model:{value:t.company.establishment_date,callback:function(e){t.$set(t.company,"establishment_date",e)},expression:"company.establishment_date"}})],1)])],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("emailAddress"))+" ")]),a("v-text-field",{attrs:{type:"email",outlined:"",readonly:""},model:{value:t.company.company_email,callback:function(e){t.$set(t.company,"company_email",e)},expression:"company.company_email"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("phone"))+" ")]),a("v-text-field",{attrs:{outlined:"",readonly:""},model:{value:t.company.company_phone,callback:function(e){t.$set(t.company,"company_phone",e)},expression:"company.company_phone"}})],1),a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("cityAndAddress"))+" ")]),a("v-text-field",{attrs:{outlined:"",readonly:""},model:{value:t.company.address,callback:function(e){t.$set(t.company,"address",e)},expression:"company.address"}})],1)]),a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"section"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(t.$t("webUrl"))+" ")]),a("v-text-field",{attrs:{outlined:"",readonly:""},model:{value:t.company.web_url,callback:function(e){t.$set(t.company,"web_url",e)},expression:"company.web_url"}})],1),a("div",{staticClass:"social-links mb-3"},[t._v(" "+t._s(t.$t("socialLinks"))+" ")]),t._l(t.social,(function(e,s){return a("div",{key:s,staticClass:"section mb-4"},[a("label",{staticClass:"section-label"},[t._v(" "+t._s(e)+" ")]),a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.company[e],callback:function(a){t.$set(t.company,e,a)},expression:"company[item]"}})],1)}))],2)],1)],1)],1)},n=[],i=(a("a9e3"),a("bc3a")),o=a.n(i),l=a("797d"),c={name:"CompanyManagementUser",props:{id:{type:[String,Number]}},data:function(){return{company:{},social:["facebook","instagram","linkedin","youtube","twitter"]}},created:function(){var t=this;o.a.get("/copmanies/".concat(this.id)).then((function(e){t.company=e.data.data}))},computed:{types:function(){return l["a"]}}},r=c,u=a("2877"),h=a("6544"),d=a.n(h),p=a("c6a6"),m=a("8212"),f=a("b0af"),v=a("62ad"),y=a("5d23"),b=a("0fd9"),g=a("b974"),I=a("8654"),x=a("a844"),S=Object(u["a"])(r,s,n,!1,null,null,null);e["default"]=S.exports;d()(S,{VAutocomplete:p["a"],VAvatar:m["a"],VCard:f["a"],VCol:v["a"],VListItemContent:y["a"],VListItemTitle:y["c"],VRow:b["a"],VSelect:g["a"],VTextField:I["a"],VTextarea:x["a"]})},"615b":function(t,e,a){},a844:function(t,e,a){"use strict";var s=a("5530"),n=(a("a9e3"),a("1681"),a("8654")),i=a("58df"),o=Object(i["a"])(n["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=n["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){n["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b0af:function(t,e,a){"use strict";var s=a("5530"),n=(a("a9e3"),a("0481"),a("615b"),a("10d2")),i=a("297c"),o=a("1c87"),l=a("58df");e["a"]=Object(l["a"])(i["a"],o["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},c6a6:function(t,e,a){"use strict";var s=a("5530"),n=(a("d81d"),a("4de4"),a("498a"),a("7db0"),a("caad"),a("2532"),a("2bfd"),a("b974")),i=a("8654"),o=a("d9f7"),l=a("80d2"),c=Object(s["a"])(Object(s["a"])({},n["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=n["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,a){return a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:n["a"].options.props.menuProps.type,default:function(){return c}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var a=Object(l["r"])(e,t.itemText),s=null!=a?String(a):"";return t.filter(e,String(t.internalSearch),s)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=n["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(s["a"])(Object(s["a"])({},c),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=n["a"].options.computed.listData.call(this);return t.props=Object(s["a"])(Object(s["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var a=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===t.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===l["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["y"].backspace&&t!==l["y"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var s=this.selectedItems.length,n=t!==s-1?t:t-1,i=this.selectedItems[n];i?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=n}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=null,n["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.data=Object(o["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=n["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?n["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,a=e.value;e.value&&this.activateMenu(),this.internalSearch=a,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[l["y"].home,l["y"].end].includes(e)||n["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){n["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){n["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){n["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,a;if(-1!==this.selectedIndex){var s=this.selectedItems[this.selectedIndex],n=this.getText(s);null==(e=t.clipboardData)||e.setData("text/plain",n),null==(a=t.clipboardData)||a.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}})}}]);
//# sourceMappingURL=CompanyManagementUser.7721df1f.js.map