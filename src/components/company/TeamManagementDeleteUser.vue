<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#F12727"
          class="full-w font-weight-medium"
          style="color: #fff"
          v-bind="attrs"
          v-on="on"
        >
          Entfernen
        </v-btn>
      </template>

      <v-card class="pa-7" style="border-radius: 16px;">
        <h1 class="mb-4 text-center" style="font-size: 28px;">Are you sure?</h1>

        <v-form
          ref="form"
          action="#"
          @submit.prevent="submit"
          v-model="isValid"
        >
          <p>
            Are you sure that you want to delete user "{{ user.name }}"? This
            action cannot be undo.
          </p>

          <ResponseAlert :response="formResponse"></ResponseAlert>

          <div class="text-center mt-3">
            <v-btn
              height="48"
              class="font-weight-medium "
              @click="
                dialog = false;
                $refs.form.reset();
              "
            >
              Cancel
            </v-btn>
            <v-btn
              type="submit"
              color="primary"
              height="48"
              class="ml-3 font-weight-medium "
              :disabled="!isValid"
            >
              Confirm
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ResponseAlert from "@/components/ResponseAlert";

export default {
  components: { ResponseAlert },
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
      dialog: false,
      isValid: false,
      formResponse: {},
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
        .catch((err) => {
          this.formResponse = err.data;
        });
    },
  },
};
</script>
