<template>
  <v-dialog
    v-model="dialog"
    width="500"
    overlay-color="#0253B3"
    overlay-opacity="0.3"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn height="48" v-bind="attrs" v-on="on">
        {{ $t("delete") }}
      </v-btn>
    </template>

    <v-card>
      <h1 class="mb-4 text-center">
        {{ $t("areYouSure") }}
      </h1>

      <v-form ref="form" action="#" @submit.prevent="submit" v-model="isValid">
        <p class="text-center">
          {{
            $t("messageTemplatesDeleteText", {
              name: messageTemplate.title
            })
          }}
        </p>

        <ResponseAlert :response="formResponse"></ResponseAlert>

        <div class="text-center mt-3">
          <v-btn
            height="48"
            text
            @click="
              dialog = false;
              $refs.form.reset();
            "
          >
            {{ $t("cancel") }}
          </v-btn>
          <v-btn
            type="submit"
            :loading="$store.getters['messageTemplates/loadingDelete']"
            color="primary"
            height="48"
            class="ml-3"
            :disabled="!isValid"
          >
            {{ $t("confirm") }}
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import ResponseAlert from "@/components/ResponseAlert";

export default {
  components: { ResponseAlert },
  props: {
    messageTemplate: {
      type: Object,
      required: true
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
        .dispatch("messageTemplates/delete", this.messageTemplate.id)
        .then(() => {
          this.dialog = false;
          this.$emit("deleted");
        })
        .catch(err => {
          this.formResponse = err.data;
        });
    }
  }
};
</script>
