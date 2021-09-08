<template>
  <div class="auth-register-wrap align-center">
    <jonder-title>
      {{ $t("general.createAccount") }}
    </jonder-title>

    <v-row class="mb-1">
      <v-col cols="12">
        {{ $t("general.createAccountSub") }}
      </v-col>
    </v-row>

    <v-form
      ref="form"
      class="auth-form"
      action="#"
      @submit.prevent="handleRegister"
      v-model="isValid"
    >
      <!-- First name -->
      <v-text-field
        dense
        :placeholder="$t('general.name')"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        hide-details
        outlined
        background-color="white"
        v-model="formData.first_name"
        solo
        flat
        class="mb-4"
      ></v-text-field>

      <!-- Last name -->
      <v-text-field
        dense
        :placeholder="$t('general.surname')"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        hide-details
        outlined
        background-color="white"
        v-model="formData.last_name"
        solo
        flat
        class="mb-4"
      ></v-text-field>

      <!-- Company name -->
      <v-text-field
        dense
        :placeholder="$t('user.onboarding.companyName')"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        hide-details
        outlined
        background-color="white"
        v-model="formData.company"
        solo
        flat
        class="mb-4"
      ></v-text-field>

      <!-- Email -->
      <v-text-field
        dense
        :placeholder="$t('company.profile.email')"
        :rules="[validations.required, validations.email]"
        type="email"
        hide-details
        outlined
        background-color="white"
        v-model="formData.email"
        solo
        flat
        class="mb-4"
      ></v-text-field>

      <!-- Phone number -->
      <v-text-field
        dense
        placeholder="Telefonnummer"
        type="text"
        :rules="[validations.required, validations.phone]"
        hide-details
        outlined
        background-color="white"
        v-model="formData.phone"
        solo
        flat
        class="mb-4"
      ></v-text-field>

      <!-- Password -->
      <v-text-field
        dense
        :placeholder="$t('general.password')"
        :rules="[validations.required, validations.min.string(6)]"
        :type="showPass ? 'text' : 'password'"
        hide-details=""
        outlined
        background-color="white"
        v-model="formData.password"
        solo
        flat
        class="mb-4"
      >
        <template v-slot:append>
          <div class="d-flex align-center">
            <v-icon style="line-height: 1.5" @click="showPass = !showPass">
              <template v-if="showPass">
                mdi-eye
              </template>
              <template v-else>
                mdi-eye-off
              </template>
            </v-icon>
          </div>
        </template>
      </v-text-field>

      <!-- Password confirmation -->
      <v-text-field
        dense
        :placeholder="$t('user.onboarding.repeatPassword')"
        :rules="[
          validations.required,
          validations.same('Passwort', formData.password),
        ]"
        :type="showPassConfirm ? 'text' : 'password'"
        outlined
        hide-details
        background-color="white"
        v-model="formData.password_confirmation"
        solo
        flat
        class="mb-4"
      >
        <template v-slot:append>
          <div class="d-flex align-center">
            <v-icon
              style="line-height: 1.5"
              @click="showPassConfirm = !showPassConfirm"
            >
              <template v-if="showPassConfirm">
                mdi-eye
              </template>
              <template v-else>
                mdi-eye-off
              </template>
            </v-icon>
          </div>
        </template>
      </v-text-field>

      <!-- Response alert -->
      <response-alert :response="formResponse"></response-alert>

      <!-- Policy accept -->
      <v-checkbox
        v-model="formData.accept_policy"
        :rules="[validations.required]"
        class="ma-0"
        color="#333"
        :label="$t('general.agreePolicy')"
        hide-details="auto"
      ></v-checkbox>

      <v-btn
        :disabled="!isValid"
        type="submit"
        class="dark-blue mt-3"
        block
        large
        height="56"
        :loading="isLoading"
      >
        Kostenlos registrieren
      </v-btn>

      <!-- Login link -->
      <div class="login-caption mt-5 text-center">
        {{ $t("company.register.areYouMember") }}

        <router-link to="/login" class="login-caption-bold">
          {{ $t("company.register.loginHere") }}
        </router-link>
      </div>
    </v-form>
  </div>
</template>

<script>
import Validations from "@/mixins/validations";
import JonderTitle from "../parts/JonderTitle.vue";
import { mapActions } from "vuex";
import ResponseAlert from "@/components/ResponseAlert";

export default {
  name: "AuthRegisterCompany",
  mixins: [Validations],
  components: {
    JonderTitle,
    ResponseAlert,
  },
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone: "+49",
        company: "",
        role: "company",
        accept_policy: false,
      },
      formResponse: {},
      isLoading: false,
      isValid: false,
      showPass: false,
      showPassConfirm: false,
    };
  },
  methods: {
    ...mapActions({
      register: "auth/registerCompany",
    }),

    async handleRegister() {
      this.formResponse = {};
      this.isLoading = true;
      this.register(this.formData)
        .then(() => {
          this.$router.replace({ name: "RegisterVerifyEmail" });
        })
        .catch((err) => {
          this.formResponse = err.data;
          this.$emit("changeImage");
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-caption {
  font-size: 14px;
}
.login-caption-bold {
  font-weight: 600;
}
</style>
