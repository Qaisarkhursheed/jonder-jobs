<template>
  <auth-wrap :have-width="'407'" :img="e1 + 1">
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
            {{ $t("logout") }}
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <!-- Content -->
    <div class="stepper-wrap mt-10" style="max-width: 500px">
      <v-stepper
        alt-labels
        class="elevation-0 full-w d-flex flex-column"
        v-model="e1"
      >
        <v-stepper-header class="elevation-0" v-if="this.showSteps === true">
          <v-stepper-step
            step="1"
            :complete="complete(1)"
            color="#0253B3"
          ></v-stepper-step>

          <v-divider :class="{ active: e1 >= 2 }"></v-divider>

          <v-stepper-step
            step="2"
            :complete="complete(2)"
            color="#0253B3"
          ></v-stepper-step>

          <v-divider :class="{ active: e1 >= 3 }"></v-divider>

          <v-stepper-step
            step="3"
            :complete="complete(3)"
            color="#0253B3"
          ></v-stepper-step>

          <v-divider :class="{ active: e1 >= 4 }"></v-divider>

          <v-stepper-step
            step="4"
            :complete="complete(4)"
            color="#0253B3"
          ></v-stepper-step>

          <v-divider :class="{ active: e1 >= 5 }"></v-divider>

          <v-stepper-step
            step="5"
            :complete="complete(5)"
            color="#0253B3"
          ></v-stepper-step>
        </v-stepper-header>

        <v-stepper-items class="mo-stepper-items">
          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="1"
          >
            <step-1
              :nextScreen="nextStep"
              @prevScreen="prevStep"
              v-model="formData"
            />
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
            <step-5
              :nextScreen="nextStep"
              @prevScreen="prevStep"
              v-model="formData"
            />
          </v-stepper-content>

          <v-stepper-content
            class="px-0 mo-stepper-items__step-content"
            step="6"
          >
            <step-succes
              :nextScreen="nextStep"
              @prevScreen="prevStep"
              v-model="formData"
              :formLoading="saveInProgress"
            ></step-succes>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>

      <ResponseAlert :response="formResponse" />
    </div>
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";
// Steps
import Step1 from "@/components/auth/manualOnboardingSteps/step1.vue";
import Step2 from "@/components/auth/manualOnboardingSteps/step2.vue";
import Step3 from "@/components/auth/manualOnboardingSteps/step3.vue";
import Step4 from "@/components/auth/manualOnboardingSteps/step4.vue";
import Step5 from "@/components/auth/manualOnboardingSteps/step5.vue";
// import Step6 from "@/components/auth/manualOnboardingSteps/step6.vue";
import StepSucces from "../../components/auth/manualOnboardingSteps/stepSucces.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "ManualOnboarding",
  components: {
    AuthWrap,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    StepSucces
  },
  props: {
    isBtnVisible: Boolean
  },
  data: () => ({
    showSteps: true,
    saveInProgress: false,
    e1: 1,
    formResponse: {},
    formData: {
      city: "",
      job_search_status: "",
      looking_for_position: [],
      branche: "",
      current_position: "",
      //looking_for_branche: "",
      looking_for_employment_type: "",
      address_to_work: [],
      ready_for_work: "",
      monthly_salary: {
        min: 1000,
        max: 10000
      },
      working_experience: "",
      cv: "",
      resume: null,
      qualifications: null,
      location_show: 1,
      work_remotely: false
    }
  }),
  created() {
    if (this.$store.getters["user/user"].onboarding_finished) {
      this.$router.replace({ name: "Home" });
    }

    this.populateData(this.user);
  },
  computed: {
    ...mapGetters("user", ["user", "jobseekerExperience", "jobseekerEducation"])
  },
  methods: {
    ...mapActions("user", ["postOnboardingUser"]),
    populateData(user) {
      if (user) {
        Object.keys(user).forEach(key => {
          // eslint-disable-next-line no-prototype-builtins
          if (this.formData.hasOwnProperty(key) && user[key] != null) {
            this.formData[key] = user[key];
          }
        });
      }
    },
    prevStep() {
      this.e1 !== 1 ? this.e1-- : this.e1;
    },
    nextStep() {
      if (this.saveInProgress) return;

      if (this.e1 < 5) {
        this.e1++;
      } else {
        this.saveOnboarding();
      }
    },
    complete(step) {
      return step < this.e1;
    },
    saveOnboarding() {
      this.formResponse = {};
      this.saveInProgress = true;

      this.postOnboardingUser(this.formData)
        .then(() => {
          this.showSteps = false;
          this.e1 = 6;
          // this.$router.replace("/dashboard");
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
.stepper-wrap {
  width: 450px;
}
@media (max-width: 600px) {
  .stepper-wrap {
    width: 100%;
    padding: 15px;
  }
}
</style>
