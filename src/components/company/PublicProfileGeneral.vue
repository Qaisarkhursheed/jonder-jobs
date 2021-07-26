<template>
  <div class="public-profile-general d-flex flex-column">
    <div>
      <div class="image">
        <input
          type="file"
          ref="uploadAvatarInput"
          style="display: none"
          @change="handleFileChange($event.target.files[0])"
        />
        <v-avatar
          color="#f1f1f1"
          size="120"
          class="user-avatar"
          @click="activateInput"
        >
          <template v-if="display_img">
            <img
              :src="display_img"
            >
          </template>
          <template v-else>
            <v-icon class="camera-icon"
              size="60px">
            mdi-camera-plus-outline
          </v-icon>
          </template>
        </v-avatar>
          <v-icon class="camera-icon">
            mdi-camera
          </v-icon>
      </div>
    </div>
    <div class="section mb-6 mt-5">
      <label class="section-label">
        Company name
      </label>
      <v-text-field
        class="rounded-lg"
        style="height: 50px;"
        height="100%"
        type="text"
        outlined
        :hide-details="true"
        v-model="form.company"
        flat
        dense
        solo
        background-color="#fff">
      </v-text-field>
    </div>
    <div class="section mb-6">
      <label class="section-label">
        About company
      </label>
      <v-textarea
        class="rounded-lg"
        height="200px"
        type="text"
        outlined
        v-model="form.about_company"
        :hide-details="true"
        flat
        dense
        solo
        background-color="#fff">
      </v-textarea>
    </div>
    <div class="action d-flex justify-end">
      <v-btn
        color="primary"
        height="55"
        class="font-weight-medium "
        @click="save"
      >
        Save changes
      </v-btn>
    </div>
  </div>
</template>

<script>


export default {
  name: 'PublicProfileGeneral',

  props: {
    user: {
      type: Object
    }
  },

  created() {
    this.populateData();
  },

  data() {
    return {
      form: {
        profile_img: '',
        company: '',
        about_company: '',
      },
      new_img: ''
    }
  },

  methods: {
    populateData() {
      //this.form.profile_img = `https://dev.api.jonder.devla.dev/storage/avatars/${this.user.profile_img}`;
      this.form.profile_img = `${this.user.profile_img}`;
      this.form.company = this.user.company;
      this.form.about_company = this.user.about_company;
    },
    activateInput() {
      this.$refs.uploadAvatarInput.click();
    },
    handleFileChange(file) {
      this.new_img = file;
    },
    save() {
      let obj = {
        company: this.form.company,
        about_company: this.form.about_company
      };

      if (this.new_img) {
        obj['profile_img'] = this.new_img;
      }

      this.$emit('update', obj);
    }
  },
  computed: {
    display_img() {
      if (this.new_img) {
        return URL.createObjectURL(this.new_img);
      }
      return this.form.profile_img;
    },
  }
};

</script>

<style lang="scss" scoped>
label {
  font-size: 16px;
  font-weight: 400;
  color: #82858C;
}
.user-avatar {
  cursor: pointer;
}
.image {
  position: relative;
  display: inline-block;
}
.camera-icon {
  position: absolute;
  bottom: 0;
}
</style>