<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          height="48"
          class="full-w font-weight-medium "
          v-bind="attrs"
          v-on="on"
        >
          Neue Nutzer einladen
        </v-btn>
      </template>

      <v-card class="pa-7" style="border-radius: 16px;">
        <h1 class="mb-4" style="font-size: 28px;">Neue Nutzer einladen</h1>

        <v-form
          ref="form"
          action="#"
          @submit.prevent="submit"
          v-model="isValid"
        >
          <label class="profile-label">User Name</label>
          <v-text-field
            dense
            placeholder="Enter first name"
            :rules="[validations.required]"
            type="text"
            outlined
            flat
            background-color="white"
            v-model="formData.name"
          ></v-text-field>

          <label class="profile-label">Email</label>
          <v-text-field
            dense
            placeholder="User's email"
            :rules="[validations.required, validations.email]"
            type="email"
            outlined
            flat
            background-color="white"
            v-model="formData.email"
          ></v-text-field>

          <ResponseAlert :response="formResponse"></ResponseAlert>

          <div class="text-right mt-3">
            <v-btn
              height="48"
              class="font-weight-medium "
              @click="
                dialog = false;
                $refs.form.reset();
              "
            >
              {{ $t('general.cancelOption') }}
            </v-btn>
            <v-btn
              type="submit"
              color="primary"
              height="48"
              class="ml-3 font-weight-medium "
              :disabled="!isValid"
              :loading="formLoading"
            >
              Neue Nutzer einladen
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Validations from "@/mixins/validations";
import ResponseAlert from "@/components/ResponseAlert";

export default {
  mixins: [Validations],
  components: { ResponseAlert },
  data() {
    return {
      dialog: false,
      isValid: false,
      formData: {
        name: "",
        email: "",
      },
      formLoading: false,
      formResponse: {},
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
        .catch((err) => {
          this.formResponse = err.data;
        })
        .finally(() => {
          this.formLoading = false;
        });
    },
  },
};
</script>
