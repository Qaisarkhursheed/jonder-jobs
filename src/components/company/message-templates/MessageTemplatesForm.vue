<template>
  <v-dialog
    v-model="dialog"
    width="700"
    overlay-color="#0253B3"
    overlay-opacity="0.3"
  >
    <template v-if="!isEdit" v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        height="48"
        class="full-w font-weight-medium dark-blue"
        v-bind="attrs"
        v-on="on"
      >
        {{ $t("createNew") }}
      </v-btn>
    </template>

    <v-card>
      <h1 class="mb-4">
        <template v-if="isEdit">
          {{ $t("editHeading") }}
        </template>
        <template v-else>
          {{ $t("createHeading") }}
        </template>
      </h1>

      <v-form ref="form" action="#" @submit.prevent="submit" v-model="isValid">
        <label class="profile-label">
          {{ $t("templateName") }}
        </label>
        <v-text-field
          v-model="formData.title"
          type="text"
          :rules="[validations.required]"
          dense
          solo
          outlined
          flat
          background-color="white"
        ></v-text-field>

        <label class="profile-label">
          {{ $t("templateContent") }}
        </label>
        <v-textarea
          v-model="formData.text"
          type="text"
          :rules="[validations.required]"
          dense
          outlined
          flat
          background-color="white"
        ></v-textarea>

        <ResponseAlert :response="formResponse"></ResponseAlert>

        <div class="d-flex justify-space-between">
          <div>
            <MessageTemplatesDelete
              v-if="isEdit"
              :message-template="messageTemplate"
              @deleted="close"
            />
          </div>

          <div>
            <v-btn text height="48" @click="close">
              {{ $t("cancel") }}
            </v-btn>

            <v-btn
              type="submit"
              :loading="isLoading"
              :disabled="!isValid"
              class="ml-3 dark-blue px-10"
              color="primary"
              height="48"
            >
              {{ $t("save") }}
            </v-btn>
          </div>
        </div>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import ResponseAlert from "@/components/ResponseAlert";
import MessageTemplatesDelete from "./MessageTemplatesDelete";

export default {
  components: { ResponseAlert, MessageTemplatesDelete },

  props: {
    messageTemplate: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      dialog: false,
      isValid: false,
      formData: {},
      formResponse: {}
    };
  },

  computed: {
    isEdit() {
      return !!this.messageTemplate;
    },
    isLoading() {
      return (
        this.$store.getters["messageTemplates/loadingCreate"] ||
        this.$store.getters["messageTemplates/loadingUpdate"]
      );
    }
  },

  watch: {
    dialog(val) {
      this.$emit(val ? "open" : "close");
    }
  },

  created() {
    if (this.messageTemplate) {
      this.formData.id = this.messageTemplate.id;
      this.formData.title = this.messageTemplate.title;
      this.formData.text = this.messageTemplate.text;
      this.dialog = true;
    }
  },

  methods: {
    close() {
      this.dialog = false;
      this.$refs.form.reset();
    },
    submit() {
      this.formResponse = {};
      const action = this.isEdit ? "update" : "create";

      this.$store
        .dispatch(`messageTemplates/${action}`, this.formData)
        .then(() => {
          this.close();
        })
        .catch(err => {
          this.formResponse = err.data;
        });
    }
  }
};
</script>
