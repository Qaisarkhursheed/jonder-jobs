<template>
  <div class="public-profile-general">
    <v-form v-model="formValid">
      <div class="avatar-input">
        <input
          type="file"
          ref="uploadAvatarInput"
          class="d-none"
          @change="cropperImage = $event.target.files"
        />
        <ImageUploadCropper
          :image="cropperImage"
          @cancel="$refs.uploadAvatarInput.value = null"
          @save="newProfileImg = $event"
        />
        <v-avatar color="primary" size="120">
          <img v-if="avatarImage" :src="avatarImage" />
          <span v-else class="white--text text-h3">
            {{ user | initials }}
          </span>
        </v-avatar>
        <v-icon
          @click="$refs.uploadAvatarInput.click()"
          color="white"
          size="20"
          style="position: relative; bottom: -30px; right: 30px; background-color: #0253B3; padding: 7px; border-radius: 50%; border: 2px solid white;"
        >
          mdi-camera
        </v-icon>
      </div>

      <div class="section mt-5">
        <label class="section-label">
          {{ $t("companyName") }}
        </label>
        <v-text-field
          v-model="formData.company"
          :rules="[validations.required]"
          outlined
        />
      </div>

      <div class="section">
        <label class="section-label">
          {{ $t("aboutCompany") }}
        </label>
        <v-textarea
          v-model="formData.about_company"
          :rules="[validations.required]"
          outlined
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
import ImageUploadCropper from "@/components/ImageUploadCropper";

export default {
  components: { ImageUploadCropper },

  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      formValid: false,
      formData: {},
      newProfileImg: null,
      cropperImage: null
    };
  },

  computed: {
    avatarImage() {
      return this.newProfileImg
        ? URL.createObjectURL(this.newProfileImg)
        : this.formData.profile_img;
    }
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

      if (this.newProfileImg) {
        obj["profile_img"] = this.newProfileImg;
      }

      this.$emit("update", obj);
    }
  }
};
</script>

<style lang="scss" scoped></style>
