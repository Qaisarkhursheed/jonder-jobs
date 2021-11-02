<template>
  <v-container
    class="auth-register-wrap mx-auto"
    fluid
    no-gutters
    style="max-width: 450px"
  >
    <jonder-title>
      {{ $t("createAccount") }}
    </jonder-title>

    <div class="text-center mb-2 text-decoration text-xl">
      {{ $t("createAccountSubCompany") }}
    </div>

    <v-form
      ref="form"
      class="auth-form"
      v-model="formValid"
      @submit.prevent="handleRegister"
    >
      <!-- Avatar upload -->
      <div class="d-flex align-center flex-column mt-8 mb-6">
        <AvatarInput v-model="formData.profile_img" size="120" />

        <div class="avatar-label mt-4">
          {{ $t("uploadPhoto") }}
        </div>
      </div>

      <!-- First name -->
      <v-text-field
        v-model="formData.first_name"
        :placeholder="$t('name')"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        solo
        dense
        outlined
        background-color="white"
      ></v-text-field>

      <!-- Last name -->
      <v-text-field
        v-model="formData.last_name"
        :placeholder="$t('surname')"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        solo
        dense
        outlined
        background-color="white"
      ></v-text-field>

      <!-- Email -->
      <v-text-field
        v-model="formData.email"
        :placeholder="$t('emailAddress')"
        :rules="[validations.required, validations.email]"
        type="email"
        solo
        dense
        outlined
        background-color="white"
      ></v-text-field>

      <!-- Phone : TO BE REMOVED -->
      <v-text-field
        v-model="formData.phone"
        placeholder="Telefonnummer"
        :rules="[validations.required, validations.phone]"
        type="text"
        solo
        dense
        outlined
        background-color="white"
      ></v-text-field>

      <!-- Password -->
      <v-text-field
        v-model="formData.password"
        :placeholder="$t('password')"
        :rules="[validations.required, validations.password]"
        :type="showPass ? 'text' : 'password'"
        solo
        dense
        outlined
        background-color="white"
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

      <!-- Password confirm -->
      <v-text-field
        v-model="formData.password_confirmation"
        :placeholder="$t('repeatPassword')"
        :rules="[
          validations.required,
          validations.same('Passwort', formData.password)
        ]"
        :type="showPassConfirm ? 'text' : 'password'"
        solo
        dense
        outlined
        background-color="white"
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

      <!-- Policy accept -->
      <v-checkbox
        v-model="formData.accept_policy"
        :rules="[validations.required]"
        class="checkbox-abn ma-0"
        color="primary"
        :label="$t('agreePolicy')"
        hide-details="auto"
      ></v-checkbox>

      <!-- ResponseAlert -->
      <ResponseAlert :response="formResponse" />
      <v-text-field 
        v-model="captchaValid" 
        class="d-none"
        :rules="[()=> captchaValid]"
      >
      </v-text-field>

      <!-- Submit button -->
      <v-btn
        type="submit"
        class="full-w mt-3 dark-blue"
        :disabled="!formValid || !formData.accept_policy"
        :loading="formLoading"
        large
        height="56"
      >
        {{ $t("registerForFree") }}
      </v-btn>

      <div :class="{ 'd-none': captchaValid }">
        <vue-recaptcha 
          :class="['d-flex justify-center mt-4']"
          :sitekey="getCaptchaKey()"
          @verify="captchaValid = true"
          @expired="captchaValid = false"
          @render="captchaValid = false"
        >
        </vue-recaptcha>
      </div>
      <div class="text-medium mt-5 text-center">
        {{ $t("areYouMember") }}

        <router-link :to="{ name: 'Login' }" class="login-caption-bold">
          {{ $t("loginHere") }}
        </router-link>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import JonderTitle from "../parts/JonderTitle.vue";
import AvatarInput from "@/components/controls/AvatarInput";
import VueRecaptcha from 'vue-recaptcha';

export default {
  components: { JonderTitle, AvatarInput, VueRecaptcha },
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone: "+49",
        role: "Jobseeker",
        accept_policy: false,
        profile_img: null
      },
      showPass: false,
      showPassConfirm: false,
      formLoading: false,
      formResponse: {},
      formValid: false,
      captchaValid: false
    };
  },
  methods: {
    async handleRegister() {
      this.formResponse = {};
      this.formLoading = true;

      this.$store
        .dispatch("auth/register", this.formData)
        .then(() => {
          console.log("sending", this.formData.email);
          this.$router.replace({
            name: "RegisterVerifyEmail",
            query: {
              email: this.formData.email
            }
          });
        })
        .catch(err => {
          this.formResponse = err.data;
        })
        .finally(() => {
          this.formLoading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar-label {
  font-weight: normal;
  font-size: 17px;
  color: rgba(43, 43, 43, 0.5);
}
.text-decoration {
  color: #222 !important;
  font-weight: 400 !important;
}
.login-caption {
  font-size: 14px;
}
.login-caption-bold {
  font-weight: 600;
}
.checkbox-abn .v-input--selection-controls__input {
  order: 1 !important;
}
</style>
