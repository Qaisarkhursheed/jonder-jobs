<template>
  <div class="mo-step-1">
    <h1 class="text-center mb-3" style="font-size: 28px">
      {{ $t("giveUsDetails") }}
    </h1>

    <v-form v-model="formValid">
      <div class="d-flex align-center flex-column mt-8 mb-6">
        <AvatarInput v-model="value.profile_img_file" size="120" />

        <div class="avatar-label mt-4">
          {{ $t("uploadPhotoEmployer") }}
        </div>
      </div>

      <label class="profile-label">
        {{ $t("aboutCompanyText") }}
        <span style="color: red;">*</span>
      </label>
      <v-textarea
        class="mt-3"
        dense
        height="150"
        :placeholder="$t('aboutCompanyPlaceholder')"
        outlined
        background-color="white"
        counter="250"
        :counter-value="s => countWords(s)"
        maxlength="250"
        :rules="[validations.required, validations.max.words(250)]"
        v-model="value.about_company"
      ></v-textarea>

      <v-btn
        @click="nextScreen"
        :disabled="!formValid"
        height="55"
        color="primary"
        block
        class="mt-5"
      >
        {{ $t("next") }}
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import AvatarInput from "@/components/controls/AvatarInput";

export default {
  name: "Step1",
  components: { AvatarInput },
  props: {
    value: {
      type: Object,
      required: true
    },
    nextScreen: Function
  },
  data() {
    return {
      formValid: false
    };
  }
};
</script>

<style scoped lang="scss">
.avatar-label {
  font-weight: normal;
  font-size: 17px;
  color: rgba(43, 43, 43, 0.5);
}
</style>
