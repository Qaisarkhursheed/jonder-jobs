<template @click="fetchPlans()">
  <div class="packages">
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="(item, i) in packages" :key="i">
        <PackagesPackage :plan="item" :color="packagesBranding[i]" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <UserPlan :border-plan="true" :payment-info="false"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PackagesPackage from "@/components/PackagesPlan";
import UserPlan from './user/UserPlan';

export default {
  name: "Packages",

  components: {
    UserPlan,
    PackagesPackage,
  },

  data() {
    return {
      packages: [],
      packagesBranding: [
        "#F3B10E",
        "#1DABF2",
        "#0253B3"
      ]
    };
  },
  methods: {
    fetchPlans() {
      const baseURI = `${process.env.VUE_APP_API_BASE}/plan-packages?per_page=10&page=1&plan_type=employer_paln`;
      this.$http.get(baseURI).then((res) => {
        let plansObj = res.data.data.map((obj) => {
          return obj;
        });
        for (let i = 0; i < plansObj.length; i++) {
          if (res.data.data[i].plan_type === "employer_paln") {
            this.packages.push(res.data.data[i]);
          }
        }
      });
    },
  },
  beforeMount() {
    this.fetchPlans();
  },
};
</script>


