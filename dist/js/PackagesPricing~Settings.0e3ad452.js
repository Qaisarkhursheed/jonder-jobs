(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PackagesPricing~Settings"],{"2b9f":function(t,a,e){},"331d":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user-plan"},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("h2",[t._v(t._s(t.$t("subscriptionPlan")))])])],1),e("v-row",{staticClass:"mb-8"},[e("v-col",{attrs:{cols:"12"}},[e("p",[t._v(t._s(t.$t("yourCurrentPlanDescription")))])])],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("UserPlanDescription",{attrs:{plan:t.userPlan[0],"border-plan":t.borderPlan,"payment-info":t.paymentInfo,"payment-action":t.paymentAction}})],1)],1)],1)],1)},s=[],r=e("5530"),o=e("2f62"),i=e("cf81"),c={name:"UserPlan",components:{UserPlanDescription:i["a"]},props:{paymentInfo:{type:Boolean},paymentAction:{type:Boolean,default:!1},borderPlan:{type:Boolean,default:!1}},computed:Object(r["a"])({},Object(o["c"])({userPlan:"user/userPlan"}))},l=c,p=(e("595a"),e("2877")),d=e("6544"),u=e.n(d),m=e("62ad"),v=e("a523"),f=e("0fd9"),b=Object(p["a"])(l,n,s,!1,null,"1311007e",null);a["a"]=b.exports;u()(b,{VCol:m["a"],VContainer:v["a"],VRow:f["a"]})},3600:function(t,a,e){"use strict";e("90ac")},"595a":function(t,a,e){"use strict";e("2b9f")},"615b":function(t,a,e){},"90ac":function(t,a,e){},b0af:function(t,a,e){"use strict";var n=e("5530"),s=(e("a9e3"),e("0481"),e("615b"),e("10d2")),r=e("297c"),o=e("1c87"),i=e("58df");a["a"]=Object(i["a"])(r["a"],o["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var a=this.generateRouteLink(),e=a.tag,n=a.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},cf81:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"plan-description",class:{"border-plan":t.borderPlan}},[e("h3",[t._v(t._s(t.plan.name))]),e("div",[t._v(" "+t._s(t.plan.price)+"€ / "+t._s(t.plan.days_valid)+" "+t._s(t.$t("daysValid"))+" ")]),e("div",[t._v(" "+t._s(t.$t("renewsOn"))+" "+t._s(t._f("moment")(t.plan.start_timestamp,"DD MMM, YYYY"))+" ")]),e("div",[t._v(" "+t._s(t.$t("validUntil"))+" "+t._s(t._f("moment")(t.plan.end_timestamp,"DD MMM, YYYY"))+" ")]),t.paymentInfo||t.paymentAction?e("div",{staticClass:"payment-info mt-6 pt-4"},[t.paymentInfo&&"CompanyPackagesPricing"!==t.$route.name?e("span",{staticClass:"carten-abenden",on:{click:function(a){return t.$router.push({name:"CompanyPackagesPricing"})}}},[t._v(" "+t._s(t.$t("changePackage"))+" ")]):t._e(),e("span",{staticClass:"payment-action",on:{click:function(a){return t.$store.dispatch("user/cancelSubscription",t.plan.id)}}},[t._v(" "+t._s(t.$t("cancelSubscription"))+" ")])]):t._e()])},s=[],r={name:"UserPlanDescription",props:{paymentInfo:{type:Boolean},paymentAction:{type:Boolean,default:!1},borderPlan:{type:Boolean,default:!1},plan:{type:Object,required:!0}}},o=r,i=(e("3600"),e("2877")),c=Object(i["a"])(o,n,s,!1,null,"e6012984",null);a["a"]=c.exports}}]);
//# sourceMappingURL=PackagesPricing~Settings.0e3ad452.js.map