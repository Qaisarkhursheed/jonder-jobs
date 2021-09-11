<template>
  <v-container
    class="auth-register-wrap mx-auto"
    fluid
    no-gutters
    style="max-width: 450px"
  >
    <jonder-title>
      {{ $t("general.createAccount") }}
    </jonder-title>

    <div class="text-center mb-2 text-decoration text-xl">
      {{ $t("general.createAccountSubCompany") }}
    </div>

    <v-form
      ref="form"
      class="auth-form"
      v-model="formValid"
      @submit.prevent="handleRegister"
    >
      <!-- Avatar upload -->
      <div class="d-flex align-center flex-column mt-8 mb-6">
        <v-avatar
          color="#E3F2FB"
          size="120"
          class="flex-grow-0 flex-shrink-0"
          style="cursor: pointer"
          @click="$refs.uploadAvatarInput.click()"
        >
          <v-img v-if="avatar_img" :src="avatar_img"></v-img>
          <v-img
            v-else
            class="profile_img"
            src="../../assets/cloud.svg"
          ></v-img>
        </v-avatar>
        <input
          type="file"
          ref="uploadAvatarInput"
          style="display: none"
          @change="profile_img = $event.target.files[0]"
        />
        <div class="avatar-label mt-4">
          {{ $t("company.register.uploadPhoto") }}
        </div>
      </div>

      <!-- First name -->
      <v-text-field
        v-model="formData.first_name"
        :placeholder="$t('general.name')"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        dense
        outlined
        background-color="white"
      ></v-text-field>

      <!-- Last name -->
      <v-text-field
        v-model="formData.last_name"
        :placeholder="$t('general.surname')"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        dense
        outlined
        background-color="white"
      ></v-text-field>

      <!-- Email -->
      <v-text-field
        v-model="formData.email"
        :placeholder="$t('company.profile.email')"
        :rules="[validations.required, validations.email]"
        type="email"
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
        dense
        outlined
        background-color="white"
      ></v-text-field>

      <!-- Password -->
      <v-text-field
        v-model="formData.password"
        :placeholder="$t('general.password')"
        :rules="[validations.required, validations.min.string(6)]"
        :type="showPass ? 'text' : 'password'"
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
        :placeholder="$t('general.repeatPassword')"
        :rules="[
          validations.required,
          validations.same('Passwort', formData.password),
        ]"
        :type="showPassConfirm ? 'text' : 'password'"
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
        color="#333"
        :label="$t('general.agreePolicy')"
        hide-details="auto"
      ></v-checkbox>

      <!-- <v-checkbox
        class="mt-0"
        label="Möchten Sie, dass wir Ihren Namen anzeigen?"
        hide-details="auto"
        v-model="formData.show_name"
      ></v-checkbox> -->

      <!-- Show location -->
      <!-- <v-checkbox
        class="mb-3"
        label="Möchten Sie, dass wir Ihren Standort anzeigen?"
        hide-details="auto"
        v-model="formData.show_location"
      ></v-checkbox> -->

      <!-- ResponseAlert -->
      <ResponseAlert :response="formResponse" />

      <!-- Submit button -->
      <v-btn
        type="submit"
        class="full-w mt-3 dark-blue"
        :disabled="!formValid"
        :loading="formLoading"
        large
        height="56"
      >
        Kostenlos registrieren
      </v-btn>

      <div class="text-medium mt-5 text-center">
        {{ $t("company.register.areYouMember") }}

        <router-link to="/login" class="login-caption-bold">
          {{ $t("company.register.loginHere") }}
        </router-link>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import JonderTitle from "../parts/JonderTitle.vue";

export default {
  components: {
    JonderTitle,
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
        // show_name: false,
        // show_location: false,
        role: "Jobseeker",
        accept_policy: false,
      },
      profile_img: false,
      showPass: false,
      showPassConfirm: false,
      formLoading: false,
      formResponse: {},
      formValid: false,
    };
  },
  methods: {
    async handleRegister() {
      this.formResponse = {};
      this.formLoading = true;
      if (this.profile_img) {
        this.formData["profile_img"] = this.profile_img;
      }
      this.$store
        .dispatch("auth/register", this.formData)
        .then(() => {
          localStorage.setItem("user-email", this.formData.email);
          this.$router.replace({ name: "RegisterVerifyEmail" });
        })
        .catch((err) => {
          this.formResponse = err.data;
        })
        .finally(() => {
          this.formLoading = false;
        });
    },
  },
  computed: {
    avatar_img() {
      if (this.profile_img) {
        return URL.createObjectURL(this.profile_img);
      }
      return false;
    },
  },
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
.profile_img {
  position: absolute;
  width: 66px !important;
  height: 48px !important;
  border-radius: 0 !important;
}
</style>
