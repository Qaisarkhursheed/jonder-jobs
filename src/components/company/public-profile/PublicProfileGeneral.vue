<template>
  <div class="public-profile-general">
    <v-form v-model="formValid">
      <AvatarInput
        v-model="formData.profile_img"
        size="120"
        with-icon
        :user="user"
      />

      <div class="section mt-5">
        <label class="section-label">
          {{ $t("companyName") }}
        </label>
        <v-text-field
          v-model="formData.company"
          :rules="[validations.required]"
          outlined
          solo
        />
      </div>

      <div class="section">
        <label class="section-label">
          {{ $t("aboutCompany") }}
        </label>
        <v-textarea
          v-model="formData.about_company"
          :rules="[validations.required, validations.max.words(250)]"
          outlined
          counter="250"
          :counter-value="s => countWords(s)"
        />
      </div>
    </v-form>

    <div class="text-right">
      <v-btn color="primary" :disabled="!formValid" height="55" @click="save">
        {{ $t("saveChanges") }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import AvatarInput from "@/components/controls/AvatarInput";

export default {
  components: { AvatarInput },

  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      formValid: false,
      formData: {}
    };
  },

  created() {
    this.populateData();
  },

  methods: {
    populateData() {
      this.formData.profile_img = this.user.profile_img;
      this.formData.company = this.user.company;
      this.formData.about_company = this.user.about_company;
    },
    save() {
      let obj = {
        company: this.formData.company,
        about_company: this.formData.about_company
      };

      if (this.formData.profile_img instanceof File) {
        obj["profile_img"] = this.formData.profile_img;
      }

      this.$emit("update", obj);
    }
  }
};
</script>

<style lang="scss" scoped></style>
