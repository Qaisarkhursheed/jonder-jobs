<template>
  <!-- Avatar -->
  <div class="avatar-input">
    <input
      type="file"
      :ref="fileInputRef"
      class="d-none"
      @change="fileInputChanged"
    />

    <ImageUploadCropper
      :image="cropperImage"
      @cancel="$refs[fileInputRef].value = null"
      @save="image = $event"
    />

    <v-avatar
      :color="user ? '#0253b3' : '#E3F2FB'"
      :size="size"
      :class="{ 'hover-pointer': avatarClickable }"
      style="background-size: auto"
      @click="!avatarClickable || $refs[fileInputRef].click()"
    >
      <v-img v-if="image" :src="imageUrl" />

      <slot v-else>
        <v-img v-if="user && user.profile_img" :src="user.profile_img" />

        <span v-else-if="user && !user.profile_img" class="white--text text-h3">
          {{ user | initials }}
        </span>

        <v-img v-else :src="defaultImage" class="default-image" />
      </slot>
    </v-avatar>

    <v-icon
      v-if="withIcon && !readOnly"
      @click="$refs[fileInputRef].click()"
      color="white"
      size="20"
      style="position: relative; bottom: -30px; right: 30px; background-color: #0253B3; padding: 7px; border-radius: 50%; border: 2px solid white;"
    >
      mdi-camera
    </v-icon>
  </div>
</template>

<script>
import ImageUploadCropper from "@/components/ImageUploadCropper";

export default {
  components: { ImageUploadCropper },

  props: {
    value: {
      type: [String, File]
    },
    defaultImage: {
      type: [String, Function],
      default: () => require("@/assets/cloud.svg")
    },
    user: {
      type: Object,
      required: false
    },
    size: {
      type: String,
      default: "100"
    },
    withIcon: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      fileInputRef: null,
      cropperImage: null,
      image: null
    };
  },

  computed: {
    imageUrl() {
      return this.image ? URL.createObjectURL(this.image) : null;
    },

    avatarClickable() {
      return !this.readOnly && !this.withIcon;
    }
  },

  watch: {
    image(val) {
      this.$emit("input", val);
    }
  },

  created() {
    this.fileInputRef = "avatar_input_" + new Date().getTime();
  },

  methods: {
    fileInputChanged(e) {
      if (e.target.files.length) {
        this.cropperImage = e.target.files;
      } else {
        this.image = null;
      }

      this.$nextTick(() => {
        e.target.value = "";
      });
    }
  }
};
</script>

<style lang="scss">
.avatar-input {
  .v-image.default-image {
    .v-image__image {
      background-size: auto !important;
    }
  }
}
</style>
