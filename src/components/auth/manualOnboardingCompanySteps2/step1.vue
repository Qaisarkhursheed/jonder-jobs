<template>
  <div class="mo-step-1">
    <h1 class="text-center mb-3" style="font-size: 28px">
      {{ $t("company.register.giveUsDetails") }}
    </h1>

    <v-form v-model="formValid">
      <!-- Avatar upload: Move to component  -->
      <div class="d-flex align-center flex-column mt-8 mb-6">
        <v-avatar
          color="#E3F2FB"
          size="120"
          class="flex-grow-0 flex-shrink-0"
          style="cursor: pointer"
          @click="$refs.uploadAvatarInput.click()"
        >
          <v-img v-if="avatar_img" :src="avatar_img"></v-img>
          <v-img class="profile_img" src="../../../assets/cloud.svg"></v-img>
        </v-avatar>
        <input
          type="file"
          ref="uploadAvatarInput"
          style="display: none"
          @change="change"
        />
        <div class="avatar-label mt-4">
          {{ $t("company.register.uploadPhotoEmployer") }}
        </div>
      </div>

      <label class="profile-label">
        {{ $t("company.register.aboutCompanyText") }}
        <span style="color: red;">*</span>
      </label>
      <v-textarea
        class="mt-3"
        dense
        height="150"
        :placeholder="$t('company.register.aboutCompanyPlaceholder')"
        outlined
        background-color="white"
        counter="250"
        :rules="[validations.required, validations.max.string(250)]"
        v-model="value.about_company"
      ></v-textarea>

      <v-btn
        @click="nextScreen"
        :disabled="!formValid"
        height="55"
        class="full-w mt-5 font-weight-medium dark-blue"
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
      required: true,
    },
    nextScreen: Function,
  },
  data() {
    return {
      formValid: false,
      profile_img: false,
    };
  },
  methods: {
    change(e) {
      this.profile_img = this.value.profile_img_file = e.target.files[0];
      // this.value.profile_img_file = e.target.files[0];
      console.log(e);
    },
  },
  computed: {
    avatar_img() {
      if (this.profile_img) {
        return URL.createObjectURL(this.profile_img);
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
.mo-step-1 .v-input__prepend-outer {
  margin-top: 15px !important;
}
</style>

<style scoped lang="scss">
.avatar-label {
  font-weight: normal;
  font-size: 17px;
  color: rgba(43, 43, 43, 0.5);
}
.mo-step-1 {
  &__btn-icon {
    position: absolute;
    left: 5px;
  }
}
.profile_img {
  position: absolute;
  width: 66px;
  height: 46px;
  border-radius: 0;
}
</style>
