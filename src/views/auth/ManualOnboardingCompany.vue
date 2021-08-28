<template>
  <auth-wrap :img="2">
    <!-- Menu options - Logout -->
    <div style="position: absolute; top: 1rem; right: 1rem;">
      <v-menu top right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" class="menu-button">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="$router.replace({ name: 'Logout' })">
            {{ $t("general.logout") }}
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <!-- Content -->
    <div class="stepper-wrap mt-10">
      <v-stepper
        alt-labels
        class="elevation-0 full-w d-flex flex-column"
        v-model="e1"
      >
        <v-stepper-header class="elevation-0" v-if="showSteps === true">
          <v-stepper-step step="1" :complete="complete(1)"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2" :complete="complete(2)"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3" :complete="complete(3)"></v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="4" :complete="complete(4)"></v-stepper-step>
        </v-stepper-header>

        <v-stepper-items class="mo-stepper-items">
          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="1"
          >
            <step-1 :nextScreen="nextStep" v-model="formData" />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="2"
          >
            <step-2
              :nextScreen="nextStep"
              @prevScreen="prevStep"
              v-model="formData"
            />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="3"
          >
            <step-3
              :nextScreen="nextStep"
              @prevScreen="prevStep"
              v-model="formData"
            />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="4"
          >
            <step-4
              :nextScreen="nextStep"
              @prevScreen="prevStep"
              v-model="formData"
            />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="5"
          >
            <step-succes
              :nextScreen="nextStep"
              @prevScreen="prevStep"
              v-model="formData"
              :loading="saveInProgress"
            />
          </v-stepper-content>
          <ResponseAlert :response="formResponse"></ResponseAlert>
        </v-stepper-items>
      </v-stepper>
    </div>
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";
// Steps
import Step1 from "@/components/auth/manualOnboardingCompanySteps2/step1.vue";
import Step2 from "@/components/auth/manualOnboardingCompanySteps2/step2.vue";
import Step3 from "@/components/auth/manualOnboardingCompanySteps2/step3.vue";
import Step4 from "@/components/auth/manualOnboardingCompanySteps2/step4.vue";
import StepSucces from "../../components/auth/manualOnboardingCompanySteps2/stepSucces.vue";

export default {
  components: {
    AuthWrap,
    Step1,
    Step2,
    Step3,
    Step4,
    StepSucces
  },
  data: () => ({
    showSteps: true,

    saveInProgress: false,
    e1: 1,
    formData: {
      profile_img: "",
      about_company: "",
      branche: "",
      company_employees: "",
      company_email: "",
      company_phone: "",
      address: "",
      //city: "",
      web_url: "",
      facebook: "",
      instagram: "",
      twitter: "",
      linkedin: "",
      youtube: ""
    },
    formResponse: {}
  }),
  created() {
    if (this.$store.getters["user/user"].onboarding_finished) {
      this.$router.replace({ name: "Home" });
    }

    this.populateData();
  },
  methods: {
    populateData() {
      const user = this.$store.getters["user/user"];
      if (user) {
        Object.keys(user).forEach(key => {
          // eslint-disable-next-line no-prototype-builtins
          if (this.formData.hasOwnProperty(key)) this.formData[key] = user[key];
        });
      }
      console.log("populated-form", this.formData);
    },
    prevStep() {
      this.e1 !== 1 ? this.e1-- : this.e1;
    },
    nextStep() {
      if (this.saveInProgress) return;

      if (this.e1 < 4) {
        this.e1++;
      } else {
        this.saveOnboarding();
      }
    },
    complete(step) {
      return step < this.e1;
    },
    async saveOnboarding() {
      const data = Object.assign({}, this.formData);
      if (data.profile_img_file) {
        data.profile_img = data.profile_img_file;
      } else {
        delete data.profile_img;
      }
      delete data.profile_img_file;

      this.saveInProgress = true;
      this.formResponse = {};
      this.$store
        .dispatch("user/postOnboardingCompany", data)
        .then(() => {
          this.showSteps = false;
          this.e1 = 5;
          // this.$router.replace("/company-dashboard");
        })
        .catch(err => {
          this.formResponse = err.data;
        })
        .finally(() => {
          this.saveInProgress = false;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.mo-stepper-items {
  overflow: auto;
}
@media (max-width: 600px) {
  .stepper-wrap {
    width: 100%;
    padding: 15px;
  }
}
</style>
