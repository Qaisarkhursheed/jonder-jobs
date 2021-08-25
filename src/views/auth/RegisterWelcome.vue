<template>
  <auth-wrap :img="img">
    <v-stepper v-model="step" style="box-shadow: none">
      <v-stepper-items class="text-center" style="max-width: 500px">
        <!-- Step 1 - Welcome -->
        <v-stepper-content step="1">
          <jonder-title>
            Welcome to Jonder
          </jonder-title>
          <p style="color: #222222">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            ultricies felis eu libero.
          </p>
          <v-btn
            @click="step = 2"
            type="button"
            color="primary"
            large
            block
            height="55"
          >
            Jetzt durchstarten
          </v-btn>
        </v-stepper-content>

        <!-- Step 2 - Account type -->
        <v-stepper-content step="2">
          <jonder-title style="font-size: 28px">
            Are you a Jobseeker or Employer
          </jonder-title>

          <div class="mx-auto mt-5" style="max-width: 400px">
            <v-btn
              block
              color="primary"
              class="mb-4"
              height="55"
              @click="accountType = 'user'"
              :outlined="accountType != 'user'"
            >
              I'm looking for a Job
            </v-btn>

            <v-btn
              block
              color="primary"
              class="mb-4"
              @click="accountType = 'company'"
              :outlined="accountType != 'company'"
              height="55"
            >
              I'm looking for employee
            </v-btn>

            <v-btn
              type="submit"
              block
              class="mt-10 dark-blue"
              :disabled="!accountType"
              @click="step = 3"
              height="55"
            >
              Weiter
            </v-btn>
          </div>
        </v-stepper-content>

        <!-- Step 3 - Register type -->
        <v-stepper-content step="3">
          <jonder-title>
            Register
          </jonder-title>
          <p style="color: #222222">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            ultricies felis eu libero.
          </p>

          <v-btn
            class="mb-3"
            type="button"
            color="primary"
            height="55"
            outlined
            block
            large
            @click="google"
          >
            <v-icon left>mdi-google</v-icon>
            Continue with Google
          </v-btn>

          <v-btn
            class="mb-3"
            type="button"
            color="primary"
            height="55"
            outlined
            block
            large
            @click="facebook"
          >
            <v-icon left>mdi-facebook</v-icon>
            Continue with Facebook
          </v-btn>

          <v-btn
            @click="submit"
            type="button"
            color="primary"
            height="55"
            block
            large
          >
            <v-icon left>mdi-email</v-icon>
            Continue with Email
          </v-btn>
        </v-stepper-content>

        
      </v-stepper-items>

      <div class="text-center">
        <span style="color: #222222">
          Du bist bereits Mitglied?
        </span>
        <router-link to="/login" style="text-decoration: none">
          <b>Hier einloggen</b>
        </router-link>
      </div>
    </v-stepper>
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";
import JonderTitle from "@/components/parts/JonderTitle.vue";

export default {
  components: {
    AuthWrap,
    JonderTitle
  },
  data: () => ({
    img: 1,
    step: 1,
    accountType: null
  }),
  methods: {
    submit() {
      if (this.accountType == "user") {
        this.$router.push({ name: "RegisterUser" });
      } else {
        this.$router.push({ name: "RegisterCompany" });
      }
    },
    changeImage() {
      this.img = 2;
    },
    facebook() {
      const url = `${process.env.VUE_APP_API_BASE}/auth/facebook`;

      window.open(url, "_blank").focus();
    },
    google() {
      const url = `${process.env.VUE_APP_API_BASE}/auth/google`;

      window.open(url, "_blank").focus();
    } 
  }
};
</script>

<style></style>
