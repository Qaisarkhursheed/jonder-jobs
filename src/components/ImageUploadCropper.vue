<template>
  <v-dialog v-model="active" @click:outside="active = false">
    <div class="upload-example">
      <Cropper
        ref="cropper"
        class="upload-example-cropper"
        :src="img"
        :stencil-component="$options.components.Stencil"
      />
      <div class="button-wrapper">
        <v-btn
          type="submit"
          color="primary"
          height="58"
          class="full-w mt-5 font-weight-medium dark-blue"
          @click="cropImage"
        >
          {{ $t("save") }}
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';
import Stencil from "@/components/ImageUploadCropperStencil";

export default {

  name: 'ImageUploadCropper',

  props: {
    image: {
      type: [String, Object, File, Image, Array, FileList],
    },
  },

  components: {
    Cropper,
    Stencil
  },

  data() {
    return {
      img: null,
      active: false
    }
  },
  methods: {
    cropImage() {
      const result = this.$refs.cropper.getResult();
      let parsed = this.convertImage(result.canvas.toDataURL(
        "image/jpeg"
      ), 'image.png');
      this.$emit('save', parsed);
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
        reader.onload = (e) => {
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
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.img = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(this.image[0]);
      }
    },
    convertImage(dataurl, filename) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }
  },
  watch: {
    image() {
      this.active = true;
      console.log('image');
      this.setFile();
    }
  }
};
</script>

<style>
.upload-example-cropper {
  border: solid 1px #EEE;
  min-height: 300px;
  width: 100%;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 17px;
}

.button {
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  background: #3fb37f;
  cursor: pointer;
  transition: background 0.5s;
  font-family: Open Sans, Arial;
  margin: 0 10px;
}

.button:hover {
  background: #38d890;
}

.button input {
  display: none;
}
</style>
