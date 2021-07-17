<template>
  <div class="public-profile-contact d-flex flex-column">
    <div class="section mb-6">
      <label class="section-label">
        Email address
      </label>
      <v-text-field
        v-model="form.company_email"
        class="rounded-lg"
        style="height: 50px;"
        height="100%"
        type="text"
        outlined
        :hide-details="true"
        flat
        dense
        solo
        background-color="#fff">
      </v-text-field>
    </div>
    <div class="section mb-6">
      <label class="section-label">
        Phone number
      </label>
      <v-text-field
        v-model="form.company_phone"
        class="rounded-lg"
        style="height: 50px;"
        height="100%"
        type="text"
        outlined
        :hide-details="true"
        flat
        dense
        solo
        background-color="#fff">
      </v-text-field>
    </div>

    <div class="section d-flex mb-6">
      <v-row>
        <v-col cols="6">
          <label class="section-label">
            Address
          </label>
          <v-text-field
            v-model="form.address"
            class="rounded-lg"
            style="height: 50px;"
            height="100%"
            type="text"
            outlined
            :hide-details="true"
            flat
            dense
            solo
            background-color="#fff">
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <label class="section-label">
            City
          </label>
          <v-text-field
            v-model="form.city"
            class="rounded-lg"
            style="height: 50px;"
            height="100%"
            type="text"
            outlined
            :hide-details="true"
            flat
            dense
            solo
            background-color="#fff">
          </v-text-field>
        </v-col>
      </v-row>
    </div>

    <div class="section mb-6 ">
      <label class="section-label">
        Web URL
      </label>
      <v-text-field
        v-model="form.web_url"
        class="rounded-lg"
        style="height: 50px;"
        height="100%"
        type="text"
        outlined
        :hide-details="true"
        flat
        dense
        solo
        background-color="#fff">
      </v-text-field>
    </div>
    <div class="social-links mb-4"> 
      Social links
    </div>
    <div class="section mb-6" v-for="(item, i) in social" :key="i">
      <label class="section-label">
        {{ item }}
      </label>
      <v-text-field
        v-model="form[item]"
        class="rounded-lg"
        style="height: 50px;"
        height="100%"
        type="text"
        outlined
        :hide-details="true"
        flat
        dense
        solo
        background-color="#fff">
      </v-text-field>
    </div>

    <div class="action d-flex justify-end">
      <v-btn
        color="primary"
        height="55"
        @click="save"
        class="font-weight-medium "
      >
        Save changes
      </v-btn>
    </div>
  </div>
</template>

<script>

import { forEach } from 'lodash';

export default {
  name: 'PublicProfileContact',

  props: {
    user: {
      type: Object
    }
  },

  created() {
    this.populateData()
  },

  data() {
    return {
      form: {
        company_email: '',
        company_phone: '',
        address: '',
        city: '',
        web_url: '',
        facebook: '',
        instagram: '',
        linkedin: '',
        twitter: ''
      },
      social: [
        'facebook',
        'instagram',  
        'linkedin',  
        'youtube',  
        'twitter', 
      ]
    }
  },
  methods: {
    populateData() {
      forEach(this.form, (item, key) => {
        this.form[key] = this.user[key];
      });
    },
    save() {
      this.$emit('update', {
        ...this.form
      });
    }
  }
};

</script>

<style lang="scss" scoped>
.section-label {
  text-transform: capitalize;
}
.social-links {
  font-weight: 600;
  font-size: 24px;
  color: #000000;
}
</style>