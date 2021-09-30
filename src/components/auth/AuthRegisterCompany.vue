<template>
  <div class="auth-register-wrap align-center">
    <jonder-title>
      {{ $t("createAccount") }}
    </jonder-title>

    <v-row class="mb-1">
      <v-col cols="12">
        {{ $t("createAccountSub") }}
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
        v-model="formData.first_name"
        :placeholder="$t('name')"
        :rules="[validations.required, validations.min.string(3)]"
        hide-details="auto"
        outlined
      ></v-text-field>

      <!-- Last name -->
      <v-text-field
        v-model="formData.last_name"
        :placeholder="$t('surname')"
        :rules="[validations.required, validations.min.string(3)]"
        hide-details="auto"
        outlined
      ></v-text-field>

      <!-- Company name -->
      <v-combobox
        v-model="formData.company"
        :placeholder="$t('companyName')"
        :rules="[validations.required, validations.min.string(3)]"
        hide-details="auto"
        :items="suggestedCompanies"
        :loading="$store.getters['northdata/loadingSearch']"
        @update:search-input="fetchCompanySuggestions($event)"
        class="hide-menu-icon"
        no-filter
        outlined
      ></v-combobox>

      <!-- Email -->
      <v-text-field
        v-model="formData.email"
        type="email"
        :placeholder="$t('emailAddress')"
        :rules="[validations.required, validations.email]"
        hide-details="auto"
        outlined
      ></v-text-field>

      <!-- Phone number -->
      <v-text-field
        v-model="formData.phone"
        placeholder="Telefonnummer"
        :rules="[validations.required, validations.phone]"
        hide-details="auto"
        outlined
      ></v-text-field>

      <!-- Password -->
      <v-text-field
        v-model="formData.password"
        :placeholder="$t('password')"
        :rules="[validations.required, validations.password]"
        :type="showPass ? 'text' : 'password'"
        hide-details="auto"
        outlined
      >
        <template v-slot:append>
          <div class="d-flex align-center">
            <v-icon @click="showPass = !showPass">
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
        v-model="formData.password_confirmation"
        :placeholder="$t('repeatPassword')"
        :rules="[
          validations.required,
          validations.same('Passwort', formData.password)
        ]"
        :type="showPassConfirm ? 'text' : 'password'"
        hide-details="auto"
        outlined
      >
        <template v-slot:append>
          <div class="d-flex align-center">
            <v-icon @click="showPassConfirm = !showPassConfirm">
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
        class="ma-0 pa-0"
        color="primary"
        :label="$t('agreePolicy')"
        hide-details="auto"
      ></v-checkbox>

      <v-btn
        :disabled="!isValid || !formData.accept_policy"
        type="submit"
        color="primary"
        class="mt-3"
        block
        large
        height="55"
        :loading="isLoading"
      >
        {{ $t("registerForFree") }}
      </v-btn>

      <!-- Login link -->
      <div class="login-caption mt-3 text-center">
        {{ $t("areYouMember") }}

        <router-link :to="{ name: 'Login' }" class="login-caption-bold">
          {{ $t("loginHere") }}
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
import { debounce } from "lodash";

export default {
  name: "AuthRegisterCompany",
  mixins: [Validations],
  components: {
    JonderTitle,
    ResponseAlert
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
        accept_policy: false
      },
      suggestedCompanies: [],
      formResponse: {},
      isLoading: false,
      isValid: false,
      showPass: false,
      showPassConfirm: false
    };
  },
  methods: {
    ...mapActions({
      register: "auth/registerCompany"
    }),

    async handleRegister() {
      this.isLoading = true;
      // Keep setTimeout here and don't ask why
      setTimeout(() => {
        this.formResponse = {};
        this.register(this.formData)
          .then(() => {
            this.$router.replace({
              name: "RegisterVerifyEmail",
              query: {
                email: this.formData.email
              }
            });
          })
          .catch(err => {
            this.formResponse = err.data;
            this.$emit("changeImage");
          })
          .finally(() => {
            this.isLoading = false;
          });
      }, 100);
    },

    fetchCompanySuggestions: debounce(function(val) {
      if (!val) {
        this.suggestedCompanies = [];
      }

      if (val == this.formData.company) {
        return;
      }

      this.suggestedCompanies = [];

      if (val && val.length > 2) {
        this.$store.dispatch("northdata/suggestSearch", val).then(resp => {
          this.suggestedCompanies = resp.data.results?.map(
            r => r.company.name.name
          );
        });
      }
    }, 0)
  }
};
</script>

<style lang="scss" scoped>
.login-caption {
  font-size: 14px;
}
.login-caption-bold {
  font-weight: 600;
}
.v-input:not(.error--text) {
  margin-bottom: 15px;
}
</style>
