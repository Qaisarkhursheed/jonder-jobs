<template>
  <div class="public-profile-contact">
    <v-form v-model="formValid">
      <!-- Email -->
      <div class="section">
        <label class="section-label">
          {{ $t("emailAddress") }}
        </label>
        <v-text-field
          v-model="form.company_email"
          :rules="[validations.required]"
          type="email"
          outlined
        />
      </div>

      <!-- Phone -->
      <div class="section">
        <label class="section-label">
          {{ $t("phone") }}
        </label>
        <v-text-field
          v-model="form.company_phone"
          :rules="[validations.required, validations.phone]"
          outlined
        />
      </div>

      <!-- Address -->
      <div class="section">
        <label class="section-label">
          {{ $t("cityAndAddress") }}
        </label>
        <v-autocomplete
          v-model="form.address"
          @update:search-input="
            $store.dispatch('google/places', {
              input: $event,
              types: ['address']
            })
          "
          :items="$store.getters['google/places'].concat([form.address])"
          :loading="$store.getters['google/loadingPlaces']"
          :rules="[validations.required]"
          hide-no-data
          no-filter
          outlined
          append-icon="mdi-chevron-down"
        ></v-autocomplete>
      </div>

      <!-- Web -->
      <div class="section">
        <label class="section-label">
          {{ $t("webUrl") }}
        </label>
        <v-text-field v-model="form.web_url" outlined> </v-text-field>
      </div>

      <!-- Social links -->
      <div class="social-links mb-3">
        {{ $t("socialLinks") }}
      </div>

      <!-- Loop -->
      <div class="section mb-4" v-for="(item, i) in social" :key="i">
        <label class="section-label">
          {{ item }}
        </label>
        <v-text-field v-model="form[item]" outlined hide-details />
      </div>
    </v-form>

    <div class="text-right">
      <v-btn color="primary" height="55" :disabled="!formValid" @click="save">
        {{ $t("saveChanges") }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import { forEach } from "lodash";

export default {
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
      formValid: false,
      form: {
        company_email: "",
        company_phone: "+49",
        address: "",
        //city: '',
        web_url: "",
        facebook: "",
        instagram: "",
        youtube: "",
        linkedin: "",
        twitter: ""
      },
      social: ["facebook", "instagram", "linkedin", "youtube", "twitter"]
    };
  },
  methods: {
    populateData() {
      forEach(this.form, (item, key) => {
        this.form[key] = this.user[key];
      });
    },
    save() {
      this.$emit("update", {
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
