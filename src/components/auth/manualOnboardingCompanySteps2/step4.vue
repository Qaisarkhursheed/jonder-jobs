<template>
  <div class="mo-step-3">
    <h1 class="text-center mb-3" style="font-size: 28px">
      {{ $t("linksForWebsites") }}
    </h1>

    <v-form v-model="formValid">
      <label class="profile-label">Web URL</label>
      <v-text-field
        v-model="value.web_url"
        dense
        solo
        placeholder="meinunternehmen.de"
        outlined
        flat
        background-color="white"
      ></v-text-field>

      <label class="profile-label">Facebook</label>
      <v-text-field
        v-model="value.facebook"
        dense
        solo
        placeholder="www.facebook.com/unternehmen"
        outlined
        flat
        background-color="white"
      ></v-text-field>

      <label class="profile-label">Instagram</label>
      <v-text-field
        v-model="value.instagram"
        dense
        solo
        placeholder="www.instagram.com/unternehmen"
        outlined
        flat
        background-color="white"
      ></v-text-field>

      <label class="profile-label">Twitter</label>
      <v-text-field
        v-model="value.twitter"
        dense
        solo
        placeholder="www.twitter.com/unternehmen"
        outlined
        flat
        background-color="white"
      ></v-text-field>

      <label class="profile-label">Linkedin</label>
      <v-text-field
        v-model="value.linkedin"
        dense
        solo
        placeholder="www.linkedin.com/company/unternehmen"
        outlined
        flat
        background-color="white"
      ></v-text-field>

      <label class="profile-label">Youtube</label>
      <v-text-field
        v-model="value.youtube"
        dense
        solo
        placeholder="www.youtube.com/user/unternehmen"
        outlined
        flat
        background-color="white"
      ></v-text-field>

      <v-row class="mt-1">
        <v-col cols="3">
          <v-btn
            @click="$emit('prevScreen')"
            :loading="loading"
            height="55"
            class="full-w font-weight-medium "
          >
            {{ $t("back") }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            @click="nextScreen"
            :disabled="!formValid"
            :loading="loading"
            color="primary"
            height="55"
            class="full-w font-weight-medium "
          >
            {{ $t("next") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Step4",

  props: {
    value: {
      type: Object,
      required: true,
    },
    loading: Boolean,
    nextScreen: Function,
  },
  data() {
    return {
      formValid: false,
    };
  },
};
</script>

<style scoped lang="scss"></style>
