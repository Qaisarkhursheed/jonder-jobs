<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
      overlay-color="#0253B3"
      overlay-opacity="0.3"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" height="48" v-bind="attrs" v-on="on">
          {{ $t("inviteUser") }}
        </v-btn>
      </template>

      <v-card>
        <h1 class="mb-4">
          {{ $t("inviteUser") }}
        </h1>

        <v-form
          ref="form"
          action="#"
          @submit.prevent="submit"
          v-model="isValid"
        >
          <label class="profile-label">
            {{ $t("nickname") }}
          </label>
          <v-text-field
            v-model="formData.name"
            dense
            :placeholder="$t('nickname')"
            :rules="[validations.required]"
            type="text"
            outlined
            flat
            solo
            background-color="white"
          ></v-text-field>

          <label class="profile-label">
            {{ $t("email") }}
          </label>
          <v-text-field
            v-model="formData.email"
            dense
            :placeholder="$t('emailAddress')"
            :rules="[validations.required, validations.email]"
            type="email"
            outlined
            flat
            solo
            background-color="white"
          ></v-text-field>

          <ResponseAlert :response="formResponse"></ResponseAlert>

          <div class="text-right mt-3">
            <v-btn
              text
              height="48"
              @click="
                dialog = false;
                $refs.form.reset();
              "
            >
              {{ $t("cancel") }}
            </v-btn>
            <v-btn
              type="submit"
              color="primary"
              height="48"
              class="ml-3"
              :disabled="!isValid"
              :loading="formLoading"
            >
              {{ $t("inviteNewUser") }}
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      isValid: false,
      formData: {
        name: "",
        email: ""
      },
      formLoading: false,
      formResponse: {}
    };
  },

  methods: {
    submit() {
      this.formLoading = true;
      this.formResponse = {};
      this.$store
        .dispatch("teamManagement/inviteUser", this.formData)
        .then(() => {
          this.dialog = false;
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
