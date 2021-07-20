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
            style="width: 350px"
            large
          >
            Jetzt durchstarten
          </v-btn>
          <div class="mt-4">
            <span style="color: #222222">
              Du bist bereits Mitglied?
            </span>
            <router-link to="/login" style="text-decoration: none">
              <b>Hier einloggen</b>
            </router-link>
          </div>
        </v-stepper-content>

        <!-- Step 2 - Register type -->
        <v-stepper-content step="2">
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
            outlined
            style="width: 350px"
            large
          >
            <v-icon left>mdi-google</v-icon>
            Continue with Google
          </v-btn>

          <v-btn
            class="mb-3"
            type="button"
            color="primary"
            outlined
            style="width: 350px"
            large
          >
            <v-icon left>mdi-facebook</v-icon>
            Continue with Facebook
          </v-btn>

          <v-btn
            @click="step = 3"
            type="button"
            color="primary"
            style="width: 350px"
            large
          >
            <v-icon left>mdi-email</v-icon>
            Continue with Email
          </v-btn>

          <div class="mt-4">
            <span style="color: #222222">
              Du bist bereits Mitglied?
            </span>
            <router-link to="/login" style="text-decoration: none">
              <b>Hier einloggen</b>
            </router-link>
          </div>
        </v-stepper-content>

        <!-- Step 3 - Registration form -->
        <v-stepper-content step="3">
          <auth-register-company @changeImage="changeImage" />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </auth-wrap>
</template>

<script>
import AuthWrap from "@/components/auth/AuthWrap.vue";
import AuthRegisterCompany from "@/components/auth/AuthRegisterCompany";
import JonderTitle from "@/components/parts/JonderTitle.vue";

export default {
  components: {
    AuthWrap,
    AuthRegisterCompany,
    JonderTitle
  },
  data: () => ({
    img: 1,
    step: 1
  }),
  methods: {
    changeImage() {
      this.img = 2;
    }
  }
};
</script>

<style></style>
