(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Chat"],{2351:function(t,e,a){"use strict";a("845e")},6657:function(t,e,a){},"740d":function(t,e,a){"use strict";a("a205")},"845e":function(t,e,a){},"98f8":function(t,e,a){},a205:function(t,e,a){},a3fb:function(t,e,a){"use strict";a("ecb6")},bcd3:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.chatLoading?a("v-row",{staticClass:"full-h"},[a("spinner")],1):t.isCompany&&t.isChatEmpty?a("v-row",[a("v-col",[a("ChatEmpty")],1)],1):a("v-row",{staticStyle:{height:"calc(100vh - 150px)","min-height":"500px"}},[t.chatFull?t._e():a("v-col",{staticClass:"full-h",attrs:{cols:"col"}},[a("chat-asside",{staticClass:"full-h flex-grow-1 flex-shrink-1 overflow-list",on:{"item-click":function(e){t.showProfile=!1}}})],1),t.selectedConversation&&t.conversationDetails?a("v-col",{staticClass:"full-h",attrs:{cols:"col"}},[t.showProfile?a("PublicProfile",{staticStyle:{"overflow-y":"auto"},on:{back:function(e){t.showProfile=!1}}}):a("chat-messages",{attrs:{messages:t.selectedConversation,"conversation-details":t.conversationDetails},on:{"chat-full":function(e){t.chatFull=e},"show-profile":function(e){t.showProfile=!0}}})],1):t._e()],1)},i=[],n=a("1da1"),o=a("5530"),r=(a("4de4"),a("96cf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"chat-conversations",attrs:{flat:""}},[a("v-card-title",{staticClass:"chat-conversations-title pl-7 pr-7"},[t._v(" "+t._s(t.$t("messages"))+" ")]),a("v-divider"),a("v-list",{staticClass:"pb-0",attrs:{subheader:""}},[a("v-list-item-group",{attrs:{color:"primary"}},t._l(t.conversations,(function(e,s){return a("div",{key:e.id},[t.showConversation(e)?a("chat-asside-item",{attrs:{conversation:e},on:{loading:function(e){t.loading=e},reload:t.refreshConversations,"item-click":function(e){return t.$emit("item-click")}}}):t._e(),s<t.conversations.length-1&&t.showConversation(e)?a("v-divider"):t._e()],1)})),0)],1),t.loading?a("div",{staticClass:"overlay"}):t._e()],1)}),l=[],c=a("2f62"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.getParticipian(t.conversation)?a("v-list-item",{key:"id-"+t.conversation.id,staticClass:"pt-3 pb-3 pl-7 pr-7",class:{"v-list-item--active":t.conversation.id==t.$store.getters["chat/conversationDetails"].id},on:{click:t.open}},[a("v-list-item-avatar",{staticClass:"text-center",attrs:{color:"primary"}},[t.getProfileImage(t.conversation)?a("v-img",{attrs:{src:t.getProfileImage(t.conversation)}}):a("span",{staticClass:"white--text full-w text-center d-block"},[t._v(" "+t._s(t._f("initials")(t.getParticipian(t.conversation)))+" ")])],1),a("v-list-item-content",[a("v-list-item-title",{staticStyle:{color:"#222222","font-weight":"600"},domProps:{textContent:t._s(t.getFullName(t.conversation))}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(t.getShortMessage(t.conversation))}})],1),a("v-list-item-icon",{staticClass:"flex-column text-right"},[t.getUnreadCount>0?a("v-badge",{staticClass:"ml-auto",attrs:{color:"blue",content:t.getUnreadCount,inline:""}}):t._e(),a("div",{staticClass:"time-label",attrs:{title:t.$options.filters.moment(t.lastMessage,"DD.MM.YYYY HH:mm")}},[t.lastMessage?[t._v(" "+t._s(t._f("moment")(t.lastMessage,"from","now"))+" ")]:t._e()],2)],1)],1):t._e()},d=[],m=a("b85c"),f=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("99af"),a("ac1f"),a("5319"),{props:{conversation:{type:Object,required:!0}},created:function(){this.checkUrl()},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])("chat",["unreadMessages"])),{},{getUnreadCount:function(){return this.conversation.unread_messages},lastMessage:function(){return this.conversation.conversation.last_message?this.conversation.conversation.last_message.updated_at:""}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["b"])("chat",["getAllConversations","getSingleConversation","seenMessage"])),Object(c["d"])("chat",["SET_CONVERSATION_DETAILS"])),{},{getParticipian:function(t){var e,a=this.$store.getters["user/user"].id,s=Object(m["a"])(t.conversation.participants);try{for(s.s();!(e=s.n()).done;){var i=e.value;if(i.messageable_id!=a)return i.messageable}}catch(n){s.e(n)}finally{s.f()}return null},getProfileImage:function(t){var e=this.getParticipian(t).profile_img;if(!e)return null;try{var a=new URL(e);return a.href}catch(i){var s=new URL("https://dev.api.jonder.devla.dev/api/v1").origin;return"".concat(s,"/storage/avatars/").concat(e)}},getFullName:function(t){var e=this.getParticipian(t);return e.company||e.first_name+" "+e.last_name},getShortMessage:function(t){return t.conversation.last_message?"upload"==t.conversation.last_message.type?"File":t.conversation.last_message?t.conversation.last_message.body.substr(0,50):"-":""},checkUrl:function(){this.$route.params.id&&parseInt(this.$route.params.id)===parseInt(this.conversation.user_id)&&(this.open(),this.$route.params.company||this.$router.replace("/dashboard/chat"))},open:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$emit("loading",!0),t.$emit("item-click"),a=t.getParticipian(t.conversation),t.SET_CONVERSATION_DETAILS({id:t.conversation.id,user_id:a.id,user_name:t.getFullName(t.conversation),unread_messages:t.conversation.unread_messages,profile_img:a.profile_img,starred:!!t.conversation.selection_managment.length,user:a}),e.next=6,t.getSingleConversation({id:t.conversation.id});case 6:t.getAllConversations(),t.$emit("refresh",!1),t.$emit("loading",!1);case 9:case"end":return e.stop()}}),e)})))()}})}),h=f,v=(a("2351"),a("2877")),p=a("6544"),g=a.n(p),b=a("15fd"),_=(a("a9e3"),a("ff44"),a("132d")),C=a("a9ad"),w=a("7560"),x=a("f2e7"),y=a("f40d"),$=a("fe6c"),k=a("58df"),O=a("80d2"),D=["aria-atomic","aria-label","aria-live","role","title"],V=Object(k["a"])(C["a"],Object($["b"])(["left","bottom"]),w["a"],x["a"],y["a"]).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return Object(o["a"])({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(O["g"])(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),a=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),s=this.$createElement("span",a,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[s]):s},genBadgeContent:function(){if(!this.dot){var t=Object(O["s"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(_["a"],this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],a=[Object(O["s"])(this)],s=this.$attrs,i=(s["aria-atomic"],s["aria-label"],s["aria-live"],s.role,s.title,Object(b["a"])(s,D));return this.inline&&this.left?a.unshift(e):a.push(e),t("span",{staticClass:"v-badge",attrs:i,class:this.classes},a)}}),j=a("adda"),T=a("da13"),S=a("8270"),I=a("5d23"),E=a("34c3"),P=Object(v["a"])(h,u,d,!1,null,null,null),F=P.exports;g()(P,{VBadge:V,VImg:j["a"],VListItem:T["a"],VListItemAvatar:S["a"],VListItemContent:I["a"],VListItemIcon:E["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"]});var L={components:{ChatAssideItem:F},data:function(){return{loading:!1}},computed:Object(c["c"])("chat",["conversations"]),methods:{refreshConversations:function(){this.$store.dispatch("chat/getAllConversations")},showConversation:function(t){var e=this.$store.getters["chat/conversationDetails"].id;return t.id==e||t.ids.length&&t.conversation.last_message}}},R=L,M=(a("ec01"),a("b0af")),A=a("99d9"),B=a("ce7e"),N=a("8860"),Y=a("1baa"),U=Object(v["a"])(R,r,l,!1,null,null,null),X=U.exports;g()(U,{VCard:M["a"],VCardTitle:A["d"],VDivider:B["a"],VList:N["a"],VListItemGroup:Y["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"messages-holder full-h d-flex flex-column",staticStyle:{"border-radius":"10px"},attrs:{flat:""}},[a("v-card-title",{staticClass:"flex-grow-0 flex-shrink-0 pb-5 pt-5"},[a("v-list-item",{staticClass:"grow"},[a("v-list-item-avatar",{attrs:{color:"primary"}},[t.conversationDetails.profile_img?a("v-img",{attrs:{alt:t.conversationDetails.user_name+" avatar",src:t.getProfileImage(t.conversationDetails)}}):a("span",{staticClass:"white--text full-w text-center d-block"},[t._v(" "+t._s(t._f("initials")(t.conversationDetails.user))+" ")])],1),a("v-list-item-content",[a("v-list-item-title",{staticStyle:{"font-weight":"600"}},[t._v(" "+t._s(t.conversationDetails.user_name)+" ")])],1),a("v-row",{attrs:{align:"center",justify:"end"}},["Jobseeker"==t.conversationDetails.user.role?a("v-icon",{staticClass:"chat-icon mr-3",attrs:{color:t.conversationDetails.starred?"#0253B3":null},on:{click:t.handleStarIconClick}},[t._v(" "+t._s(t.conversationDetails.starred?"mdi-star":"mdi-star-outline")+" ")]):t._e(),a("v-icon",{staticClass:"chat-icon mr-3",on:{click:function(e){return t.$emit("show-profile")}}},[t._v(" mdi-information-outline ")]),a("v-icon",{staticClass:"chat-icon mr-3",on:{click:function(e){t.chatFull=!t.chatFull,t.$emit("chat-full",t.chatFull)}}},[t._v(" "+t._s(t.chatFull?"mdi-arrow-collapse":"mdi-arrow-expand")+" ")]),a("v-icon",{staticClass:"chat-icon",on:{click:function(e){t.$store.commit("chat/CLEAR_SINGLE_CONVERSATION"),t.$emit("chat-full",!1)}}},[t._v(" mdi-close ")])],1)],1)],1),a("div",{staticClass:"pl-5 pr-5 flex-grow-1 flex-shrink-1 overflow-list"},[a("v-card-text",{staticClass:"messages-content pa-5 full-h flex-grow-1 flex-shrink-1 overflow-list",attrs:{id:"messageList"}},t._l(t.messages,(function(e,s){return a("div",{key:e.id,class:{"text-right":e.is_sender}},[0===s||e.created_at.substr(0,10)!=t.messages[s-1].created_at.substr(0,10)?a("div",{staticClass:"day-in-chat"},[a("span",[t._v(t._s(t._f("moment")(e.created_at,"ddd, DD/MM")))])]):t._e(),a("v-card",{staticClass:"message rounded-lg",class:[{"my-message":e.is_sender},[e.is_sender?"rounded-tr-0":"rounded-tl-0"]],attrs:{flat:""}},[a("v-card-text",["text"==e.type?a("div",{staticStyle:{"text-align":"left","white-space":"pre-wrap"},domProps:{textContent:t._s(e.body)}}):t._e(),"upload"==e.type?a("div",[t.isImage(e)?a("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.getFileData(e).url}}):a("a",{attrs:{href:t.getFileData(e).url,target:"_blank"}},[t._v(" "+t._s(t.getFileData(e).name)+" ")])]):t._e(),a("small",{attrs:{title:t.$options.filters.moment(e.created_at,"DD.MM.YYYY HH:mm")}},[t._v(" "+t._s(t._f("moment")(e.created_at,"from","now"))+" ")])])],1)],1)})),0)],1),a("v-card-actions",{staticClass:"flex-grow-0 flex-shrink-0 pa-5 message-type-new"},[a("v-file-input",{staticClass:"pa-0",class:{"file-set":t.newFile},attrs:{"hide-input":""},model:{value:t.newFile,callback:function(e){t.newFile=e},expression:"newFile"}}),a("v-textarea",{staticStyle:{width:"100%","border-radius":"30px"},attrs:{label:t.$t("messageNow"),outlined:"",solo:"",flat:"","hide-details":"","background-color":"white",rows:"1","auto-grow":""},on:{drop:function(e){return e.preventDefault(),t.handleTextareaDrop.apply(null,arguments)}},model:{value:t.newMessage,callback:function(e){t.newMessage=e},expression:"newMessage"}},[t._v(t._s(t.$t("message"))+" ")]),a("MessageTemplatesPicker",{on:{submit:function(e){return t.send(e)}}}),a("v-icon",{staticClass:"message-send-btn ml-2",attrs:{disabled:t.sending,size:"30"},on:{click:function(e){return t.send(null)}}},[t._v(" mdi-send-circle ")])],1)],1)},J=[],H=(a("466d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"800","overlay-color":"#0253B3","overlay-opacity":"0.3"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-icon",t._g(t._b({staticClass:"ml-2",class:{"d-none":!t.templates.length}},"v-icon",i,!1),s),[t._v(" mdi-message-bulleted ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.$store.getters["messageTemplates/loadingFetch"]?t._e():a("v-card",{staticClass:"message-templates-picker pa-7"},[a("h1",{staticClass:"pb-4 mb-4",staticStyle:{"font-size":"28px","border-bottom":"1px solid #E9E9E9"}},[t._v(" "+t._s(t.$t("messageTemplates"))+" ")]),a("v-row",[a("v-col",{staticClass:"template-list",staticStyle:{"max-height":"370px",overflow:"auto"},attrs:{cols:"4"}},[t._l(t.templates,(function(e){return[a("div",{key:e.id,staticClass:"pa-3 font-weight-bold hover-pointer",class:{active:e.id==t.selectedTemplate.id},staticStyle:{"border-radius":"6px"},on:{click:function(a){return t.selectTemplate(e)}}},[t._v(" "+t._s(e.title)+" ")])]}))],2),a("v-col",{attrs:{cols:"col"}},[a("v-form",{ref:"form",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}},model:{value:t.isValid,callback:function(e){t.isValid=e},expression:"isValid"}},[a("label",{staticClass:"profile-label"},[t._v(" "+t._s(t.$t("templateName"))+" ")]),a("v-text-field",{attrs:{type:"text",disabled:"",dense:"",solo:"",outlined:"",flat:"","background-color":"white"},model:{value:t.selectedTemplate.title,callback:function(e){t.$set(t.selectedTemplate,"title",e)},expression:"selectedTemplate.title"}}),a("label",{staticClass:"profile-label"},[t._v(" "+t._s(t.$t("templateContent"))+" ")]),a("v-textarea",{attrs:{type:"text",rules:[t.validations.required],dense:"",outlined:"",flat:"","background-color":"white"},model:{value:t.formData.text,callback:function(e){t.$set(t.formData,"text",e)},expression:"formData.text"}}),a("ResponseAlert",{attrs:{response:t.formResponse}}),a("div",{staticClass:"d-flex justify-end"},[a("v-btn",{attrs:{height:"48"},on:{click:t.close}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),a("v-btn",{staticClass:"ml-3 dark-blue px-10",attrs:{type:"submit",disabled:!t.isValid,color:"primary",height:"48"}},[t._v(" "+t._s(t.$t("send"))+" ")])],1)],1)],1)],1)],1)],1)}),z=[],G=a("6461"),W={components:{ResponseAlert:G["a"]},data:function(){return{selectedTemplate:{},templates:[],dialog:!1,isValid:!1,formData:{},formResponse:{}}},watch:{dialog:function(t){t&&this.selectTemplate(this.templates[0])}},created:function(){var t=this;this.$store.dispatch("messageTemplates/fetch",{per_page:200}).then((function(e){t.templates=e.data.data}))},methods:{selectTemplate:function(t){this.selectedTemplate=Object.assign({},t),this.formData.text=this.selectedTemplate.text},close:function(){this.dialog=!1,this.$refs.form.reset()},submit:function(){this.$emit("submit",this.formData.text),this.close()}}},K=W,Q=(a("a3fb"),a("8336")),Z=a("62ad"),tt=a("169a"),et=a("4bd4"),at=a("0fd9"),st=a("8654"),it=a("a844"),nt=Object(v["a"])(K,H,z,!1,null,null,null),ot=nt.exports;g()(nt,{VBtn:Q["a"],VCard:M["a"],VCol:Z["a"],VDialog:tt["a"],VForm:et["a"],VIcon:_["a"],VRow:at["a"],VTextField:st["a"],VTextarea:it["a"]});var rt={components:{MessageTemplatesPicker:ot},props:{messages:{type:Array,required:!0},conversationDetails:{type:Object,required:!0}},data:function(){return{newMessage:"",newFile:null,sending:!1,chatFull:!1}},mounted:function(){this.scrollToBottom()},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["b"])("chat",["sendMessage","getSingleConversation"])),Object(c["b"])("stats",["updateMessageYou"])),{},{scrollToBottom:function(){var t=document.getElementById("messageList");setTimeout((function(){t.scrollTo(t.scrollLeft,999999999)}),100)},send:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=e||this.newMessage;(a||this.newFile)&&(this.sending=!0,this.sendMessage({id:this.conversationDetails.id,file:this.newFile,message:a}).then((function(){t.newMessage="",t.newFile=null,setTimeout(t.scrollToBottom,1e3)})).finally((function(){t.sending=!1})))},getProfileImage:function(t){var e=t.profile_img;if(!e)return null;try{var a=new URL(e);return a.href}catch(i){var s=new URL("https://dev.api.jonder.devla.dev/api/v1").origin;return"".concat(s,"/storage/avatars/").concat(e)}},isImage:function(t){return"upload"==t.type&&this.getFileData(t).path.match(/.(jpg|jpeg|png|gif)$/i)},getFileData:function(t){return JSON.parse(t.body)},handleStarIconClick:function(){var t=this;this.conversationDetails.starred?this.$store.dispatch("company/slManagementDeleteCandidate",this.conversationDetails.user_id).then((function(){t.conversationDetails.starred=!1})):this.$store.dispatch("company/slManagementAddCandidate",{jobseeker_id:this.conversationDetails.user_id,managment_status:"Saved candidates"}).then((function(){t.conversationDetails.starred=!0}))},handleTextareaDrop:function(t){if(t.dataTransfer.items){for(var e=0;e<t.dataTransfer.items.length;e++)if("file"===t.dataTransfer.items[e].kind){this.newFile=t.dataTransfer.items[e].getAsFile();break}}else for(var a=0;a<t.dataTransfer.files.length;a++){this.newFile=t.dataTransfer.files[a];break}}}),watch:{conversationDetails:function(){var t=this;setTimeout((function(){t.scrollToBottom()}),500)}}},lt=rt,ct=(a("eb2f"),a("23a7")),ut=Object(v["a"])(lt,q,J,!1,null,null,null),dt=ut.exports;g()(ut,{VCard:M["a"],VCardActions:A["a"],VCardText:A["c"],VCardTitle:A["d"],VFileInput:ct["a"],VIcon:_["a"],VImg:j["a"],VListItem:T["a"],VListItemAvatar:S["a"],VListItemContent:I["a"],VListItemTitle:I["c"],VRow:at["a"],VTextarea:it["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"messages-holder full-h d-flex flex-column",staticStyle:{background:"white","border-radius":"10px"},attrs:{flat:""}},[a("v-row",{staticClass:"pt-8 px-5 pb-4 mx-0",staticStyle:{flex:"unset","border-bottom":"1px solid #E3E3E4"}},[a("v-col",{staticClass:"d-flex my-auto",attrs:{cols:"auto"}},[a("v-icon",{attrs:{color:"black"},on:{click:function(e){return t.$emit("back")}}},[t._v(" mdi-arrow-left ")])],1),a("v-col",{staticClass:"d-flex my-auto"},[a("h2",{staticStyle:{"font-weight":"600","font-size":"17px"}},[t._v("Profile")])]),a("v-col",{staticClass:"d-flex my-auto",attrs:{cols:"auto"}},[a("v-icon",{attrs:{color:"black"},on:{click:function(e){t.$store.commit("chat/CLEAR_SINGLE_CONVERSATION"),t.$emit("chat-full",!1)}}},[t._v(" mdi-close ")])],1)],1),a("div",{staticClass:"pa-8"},[a("PublicProfileViewAs",{attrs:{user:t.$store.getters["chat/conversationDetails"].user}})],1)],1)},ft=[],ht=a("f872"),vt={components:{PublicProfileViewAs:ht["a"]}},pt=vt,gt=Object(v["a"])(pt,mt,ft,!1,null,null,null),bt=gt.exports;g()(gt,{VCard:M["a"],VCol:Z["a"],VIcon:_["a"],VRow:at["a"]});var _t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat-empty"},[s("h1",[s("span",{staticClass:"greeting"},[t._v(t._s(t.$t("hello"))+", ")]),s("span",{staticClass:"name"},[t._v(t._s(t._f("fullname")(t.$store.getters["user/user"])))])]),s("p",[t._v(t._s(t.$t("messagesEmpty")))]),s("v-btn",{staticClass:"px-10 mt-3",attrs:{color:"primary",height:"48"},on:{click:function(e){return t.$router.push({name:"CompanySearch"})}}},[t._v(" "+t._s(t.$t("toJonderSearch"))+" ")]),s("v-img",{staticClass:"mx-auto mt-10",attrs:{width:"377",src:a("e755")}})],1)},Ct=[],wt={},xt=wt,yt=(a("740d"),Object(v["a"])(xt,_t,Ct,!1,null,null,null)),$t=yt.exports;g()(yt,{VBtn:Q["a"],VImg:j["a"]});var kt=a("6f96"),Ot={created:function(){this.init(),this.pollData()},beforeDestroy:function(){clearInterval(this.polling)},props:{isCompany:{type:Boolean,default:!1}},data:function(){return{messages:null,showProfile:!1,polling:null,chatFull:!1,chatLoading:!1}},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])("chat",["getAllConversations","addPlaceholderMessage","getSingleConversation","startChat","seenMessage"])),{},{init:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.chatLoading=!0,e.next=3,t.getAllConversations();case 3:t.chatLoading=!1,"new"===t.$route.params.type&&t.$route.params.id&&t.startChat(t.$route.params.id);case 5:case"end":return e.stop()}}),e)})))()},pollData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.polling=setInterval(Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.conversationDetails&&t.conversationDetails.user_id&&t.getSingleConversation({id:t.conversationDetails.id}),t.getAllConversations();case 2:case"end":return e.stop()}}),e)}))),5e3);case 1:case"end":return e.stop()}}),e)})))()}}),computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])("chat",["conversations","selectedConversation","conversationDetails"])),{},{isChatEmpty:function(){var t=this.$store.getters["chat/conversationDetails"].id;return this.conversations&&0==this.conversations.filter((function(e){return e.conversation.last_message||e.conversation.id==t})).length}}),components:{ChatMessages:dt,ChatAsside:X,PublicProfile:bt,Spinner:kt["a"],ChatEmpty:$t}},Dt=Ot,Vt=Object(v["a"])(Dt,s,i,!1,null,null,null);e["default"]=Vt.exports;g()(Vt,{VCol:Z["a"],VRow:at["a"]})},e755:function(t,e,a){t.exports=a.p+"img/messages_empty.9c541638.png"},eb2f:function(t,e,a){"use strict";a("6657")},ec01:function(t,e,a){"use strict";a("98f8")},ecb6:function(t,e,a){},ff44:function(t,e,a){}}]);
//# sourceMappingURL=Chat.86189720.js.map