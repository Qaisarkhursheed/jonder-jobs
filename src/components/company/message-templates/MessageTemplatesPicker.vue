<template>
  <v-dialog
    v-model="dialog"
    width="800"
    overlay-color="#0253B3"
    overlay-opacity="0.3"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        v-bind="attrs"
        v-on="on"
        class="ml-2"
        :class="{ 'd-none': !templates.length }"
      >
        mdi-message-bulleted
      </v-icon>
    </template>

    <v-card
      class="message-templates-picker"
      v-if="!$store.getters['messageTemplates/loadingFetch']"
    >
      <h1 class="pb-4 mb-4" style="border-bottom: 1px solid #E9E9E9">
        {{ $t("messageTemplates") }}
      </h1>

      <v-row>
        <v-col
          cols="4"
          class="template-list"
          style="max-height: 370px; overflow: auto"
        >
          <template v-for="template in templates">
            <div
              :key="template.id"
              @click="selectTemplate(template)"
              class="pa-3 font-weight-bold hover-pointer"
              :class="{ active: template.id == selectedTemplate.id }"
              style="border-radius: 6px;"
            >
              {{ template.title }}
            </div>
          </template>
        </v-col>

        <v-col cols="col">
          <v-form
            ref="form"
            action="#"
            @submit.prevent="submit"
            v-model="isValid"
          >
            <label class="profile-label">
              {{ $t("templateName") }}
            </label>
            <v-text-field
              v-model="selectedTemplate.title"
              type="text"
              disabled
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

            <div class="d-flex justify-end">
              <v-btn text height="48" @click="close">
                {{ $t("cancel") }}
              </v-btn>

              <v-btn
                type="submit"
                :disabled="!isValid"
                class="ml-3 dark-blue px-10"
                color="primary"
                height="48"
              >
                {{ $t("confirm") }}
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import ResponseAlert from "@/components/ResponseAlert";

export default {
  components: { ResponseAlert },

  data() {
    return {
      selectedTemplate: {},
      templates: [],
      dialog: false,
      isValid: false,
      formData: {},
      formResponse: {}
    };
  },

  watch: {
    dialog(val) {
      if (val) {
        this.selectTemplate(this.templates[0]);
      }
    }
  },

  created() {
    this.$store
      .dispatch("messageTemplates/fetch", {
        per_page: 200
      })
      .then(resp => {
        this.templates = resp.data.data;
      });
  },

  methods: {
    selectTemplate(template) {
      this.selectedTemplate = Object.assign({}, template);
      this.formData.text = this.selectedTemplate.text;
    },
    close() {
      this.dialog = false;
      this.$refs.form.reset();
    },
    submit() {
      this.$emit("submit", this.formData.text);
      this.close();
    }
  }
};
</script>

<style lang="scss">
.message-templates-picker {
  .template-list {
    .active {
      background-color: rgba(39, 170, 225, 0.1);
    }
  }
}
</style>
