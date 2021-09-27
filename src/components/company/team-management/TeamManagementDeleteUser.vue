<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
      overlay-color="#0253B3"
      overlay-opacity="0.3"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#F12727"
          class="full-w font-weight-medium"
          style="color: #fff"
          v-bind="attrs"
          v-on="on"
        >
          {{ $t("removed") }}
        </v-btn>
      </template>

      <v-card>
        <h1 class="mb-4 text-center">
          {{ $t("areYouSure") }}
        </h1>

        <v-form
          ref="form"
          action="#"
          @submit.prevent="submit"
          v-model="isValid"
        >
          <p class="text-center">
            {{ $t("areYouSureQuestion") }}
          </p>

          <ResponseAlert :response="formResponse"></ResponseAlert>

          <div class="text-center mt-3">
            <v-btn
              text
              height="48"
              class="font-weight-medium "
              @click="
                dialog = false;
                $refs.form.reset();
              "
            >
              {{ $t("cancelOption") }}
            </v-btn>
            <v-btn
              type="submit"
              color="primary"
              height="48"
              class="ml-3 font-weight-medium "
              :disabled="!isValid"
            >
              {{ $t("confirmOption") }}
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object
    }
  },

  data() {
    return {
      dialog: false,
      isValid: false,
      formResponse: {}
    };
  },

  methods: {
    submit() {
      this.formResponse = {};
      this.$store
        .dispatch("teamManagement/deleteUser", this.user.id)
        .then(() => {
          this.dialog = false;
        })
        .catch(err => {
          this.formResponse = err.data;
        });
    }
  }
};
</script>
