<template>
  <v-container
    class="auth-register-wrap mx-auto"
    fluid
    no-gutters
    style="max-width: 450px"
  >
    <jonder-title>
      Create account
    </jonder-title>

    <div class="text-center mb-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ultricies
      felis eu libero.
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
          <v-icon size="64" color="#6a9cd4" v-else>
            mdi-cloud-upload
          </v-icon>
        </v-avatar>
        <input
          type="file"
          ref="uploadAvatarInput"
          style="display: none"
          @change="profile_img = $event.target.files[0]"
        />
        <div class="avatar-label mt-4">
          Click to upload photo
        </div>
      </div>

      <!-- First name -->
      <v-text-field
        v-model="formData.first_name"
        placeholder="Vorname"
        :rules="[validations.required, validations.min.string(3)]"
        type="text"
        dense
        outlined
        background-color="white"
      ></v-text-field>

      <!-- Last name -->
      <v-text-field
        v-model="formData.last_name"
        placeholder="Nachname"
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

      <!-- Password -->
      <v-text-field
        v-model="formData.password"
        placeholder="Passwort"
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
        placeholder="Passwort erneut eingeben"
        :rules="[
          validations.required,
          validations.same('Passwort', formData.password)
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

      <!-- Show name -->
      <v-checkbox
        class="mt-6 mb-6"
        color="#333"
        label="Ja, ich stimme der Datenschutzerklärung & AGB zu."
        hide-details="auto"
        v-model="formData.accept_policy"
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

      <div class="login-caption mt-5 text-center">
        Du bist bereits Mitglied?

        <router-link to="/login" class="login-caption-bold">
          Hier einloggen
        </router-link>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import JonderTitle from "../parts/JonderTitle.vue";

export default {
  components: {
    JonderTitle
  },
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone: "",
        // show_name: false,
        // show_location: false,
        role: "Jobseeker",
        accept_policy: false
      },
      profile_img: false,
      showPass: false,
      showPassConfirm: false,
      formLoading: false,
      formResponse: {},
      formValid: false
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
        .catch(err => {
          this.formResponse = err.data;
        })
        .finally(() => {
          this.formLoading = false;
        });
    }
  },
  computed: {
    avatar_img() {
      if (this.profile_img) {
        return URL.createObjectURL(this.profile_img);
      }
      return false;
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
.login-caption {
  font-size: 14px;
}
.login-caption-bold {
  font-weight: 600;
}
</style>
