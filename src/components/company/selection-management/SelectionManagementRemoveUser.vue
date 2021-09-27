<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
      overlay-color="#0253B3"
      overlay-opacity="0.3"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="primary" class="ml-3" v-bind="attrs" v-on="on">
          <v-icon>mdi-trash-can</v-icon>
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
            {{ $t("deleteText", { name }) }}
          </p>

          <ResponseAlert :response="formResponse"></ResponseAlert>

          <div class="text-center mt-3">
            <v-btn
              height="48"
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
              class="ml-3"
              :disabled="!isValid"
              :loading="loading"
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
      loading: false,
      formResponse: {}
    };
  },

  computed: {
    name() {
      return this.$options.filters.fullname(this.user);
    }
  },

  methods: {
    submit() {
      this.formResponse = {};
      this.loading = true;
      this.$store
        .dispatch("company/slManagementDeleteCandidate", this.user.id)
        .then(() => {
          this.$store.dispatch("company/slManagementGetAll");
          this.dialog = false;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>
