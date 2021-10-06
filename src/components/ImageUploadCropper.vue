<template>
  <v-dialog
    v-model="active"
    @click:outside="cancel"
    content-class="cropper-dialog"
  >
    <Cropper
      ref="cropper"
      style="max-height: 80vh;"
      :src="img"
      :stencil-component="$options.components.Stencil"
    />

    <v-row class="buttons mx-0">
      <!-- Cancel -->
      <v-col class="px-0">
        <v-btn color="secondary" height="55" block @click="cancel">
          {{ $t("cancel") }}
        </v-btn>
      </v-col>

      <!-- Submit -->
      <v-col class="px-0">
        <v-btn
          type="submit"
          color="primary"
          height="55"
          block
          @click="cropImage"
        >
          {{ $t("save") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-dialog>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import Stencil from "@/components/ImageUploadCropperStencil";

export default {
  name: "ImageUploadCropper",

  props: {
    image: {
      type: [File, Image, FileList]
    }
  },

  components: { Cropper, Stencil },

  data() {
    return {
      img: null,
      active: false
    };
  },

  watch: {
    image() {
      if (this.image && this.image.length) {
        this.active = true;
        this.setFile();
      }
    }
  },

  methods: {
    cancel() {
      this.img = null;
      this.$emit("cancel");
      this.active = false;
    },
    cropImage() {
      const result = this.$refs.cropper.getResult();
      let parsed = this.convertImage(
        result.canvas.toDataURL("image/jpeg"),
        "image.png"
      );
      this.$emit("save", parsed);
      this.active = false;
    },
    uploadImage(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.image = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
    setFile() {
      // Reference to the DOM input element
      // var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (this.image && this.image[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.img = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(this.image[0]);
      }
    },
    convertImage(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    }
  }
};
</script>

<style lang="scss">
.cropper-dialog {
  overflow: hidden;
  width: unset !important;
  min-width: 350px;

  .buttons {
    .v-btn {
      border-radius: 0;
    }
  }
}
</style>
