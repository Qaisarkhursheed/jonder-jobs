<template>
  <auth-wrap :img="img">
    <v-stepper v-model="step" style="box-shadow: none">
      <v-alert
        v-if="$route.query.noAccount && step == 1"
        text
        type="info"
        class="mt-5 mx-5"
        style="margin-bottom: -10px"
      >
        No account found, please register first.
      </v-alert>

      <v-stepper-items class="text-center" style="max-width: 500px">
        <!-- Step 1 - Welcome -->
        <v-stepper-content step="1">
          <jonder-title>
            Welcome to Jonder
          </jonder-title>
          <p style="color: #222222; font-size: 17px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            ultricies felis eu libero.
          </p>
          <v-btn
            class="dark-blue"
            @click="
              delete $route.query.noAccount;
              step = 2;
            "
            type="button"
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
            {{ $t("company.register.chooseStatus") }}
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
              {{ $t("company.register.ImJobseeker") }}
            </v-btn>

            <v-btn
              block
              color="primary"
              class="mb-4"
              @click="accountType = 'company'"
              :outlined="accountType != 'company'"
              height="55"
            >
              {{ $t("company.register.ImEmployer") }}
            </v-btn>

            <v-btn
              type="submit"
              block
              class="mt-10 dark-blue"
              :disabled="!accountType"
              @click="step = 3"
              height="55"
            >
              {{ $t("company.register.continue") }}
            </v-btn>
          </div>
        </v-stepper-content>

        <!-- Step 3 - Register type -->
        <v-stepper-content step="3">
          <jonder-title>
            {{ $t("company.register.register") }}
          </jonder-title>
          <p style="color: #222222; font-size: 17px">
            {{ $t("company.register.registerSubtitleUser") }}
          </p>

          <v-btn
            class="mb-3"
            type="button"
            color="primary"
            height="55"
            outlined
            block
            large
            link
            :href="googleUrl"
          >
            <v-icon left>mdi-google</v-icon>
            {{ $t("company.register.continueWithGoogle") }}
          </v-btn>

          <v-btn
            class="mb-3"
            type="button"
            color="primary"
            height="55"
            outlined
            block
            large
            link
            :href="facebookUrl"
          >
            <v-icon left>mdi-facebook</v-icon>
            {{ $t("company.register.continueWithFacebook") }}
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
            {{ $t("company.register.continueWithEmail") }}
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>

      <div class="text-center">
        <span style="color: #222222">
          Du bist bereits Mitglied?
        </span>
        <router-link to="/login" style="text-decoration: none">
          <b class="tx-blue-darken-4">Hier einloggen</b>
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
    JonderTitle,
  },
  data: () => ({
    img: 1,
    step: 1,
    accountType: null,
  }),
  computed: {
    facebookUrl() {
      const urlNumber = this.accountType == "user" ? 1 : 2;
      const url = `${process.env.VUE_APP_API_BASE}/auth/${urlNumber}/facebook`;

      return url;
    },
    googleUrl() {
      const urlNumber = this.accountType == "user" ? 1 : 2;
      const url = `${process.env.VUE_APP_API_BASE}/auth/${urlNumber}/google`;

      return url;
    },
  },
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
  },
};
</script>

<style lang="scss" scoped>
.v-stepper__wrapper {
  p {
    color: #222222 !important;
    font-size: 17px !important;
  }
}
</style>
