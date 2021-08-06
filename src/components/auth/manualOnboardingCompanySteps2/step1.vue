<template>
  <div class="mo-step-1">
    <h1 class="text-center mb-3" style="font-size: 28px">
      Give simple details about your company.
    </h1>

    <v-form v-model="formValid">
      <label class="profile-label">Logo</label>
      <v-file-input
        placeholder="Click to upload logo photo"
        outlined
        dense
        v-model="value.profile_img_file"
      ></v-file-input>

      <label class="profile-label">About company</label>
      <v-textarea
        dense
        height="150"
        placeholder="Describe your company"
        outlined
        background-color="white"
        :rules="[validations.required]"
        v-model="value.about_company"
      ></v-textarea>

      <v-btn
        @click="nextScreen"
        :disabled="!formValid"
        color="primary"
        height="55"
        class="full-w mt-5 font-weight-medium "
      >
        {{ $t("user.onboarding.next") }}
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Step1",
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

<style lang="scss">
.mo-step-1 .v-input__prepend-outer {
  margin-top: 15px !important;
}
</style>

<style scoped lang="scss">
.mo-step-1 {
  &__btn-icon {
    position: absolute;
    left: 5px;
  }
}
</style>
