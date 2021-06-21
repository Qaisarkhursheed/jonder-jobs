<template>
  <div class="pa-8">
    <v-row>
      <v-col cols="6">
        <div class="d-flex align-center">
          <v-avatar color="primary" size="58" class="flex-grow-0 flex-shrink-0">
            <v-img :src="user.profile_img" v-if="user.profile_img"></v-img>
            <span class="white--text headline" v-else>{{
              getUserInitials
            }}</span>
          </v-avatar>
          <div class="flex-grow-1 flex-shrink-1 pl-2">
            <div
              class="heading text-color-primary-blue-dark font-weight-bold ml-2 mb-2"
            >
              {{ getUserFullName }}
            </div>
            <div v-if="user.address">
              <v-icon>mdi-map-marker</v-icon>
              <span>{{ user.address }}</span>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" class="text-right">
        <v-btn depressed color="primary" class="pl-8 pr-8" @click="handleUpdate"
          >{{ $t('general.save') }}
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <label>{{ $t('user.profile.firstName') }}</label>
        <v-text-field
          dense
          :label="$t('user.profile.firstName')"
          :rules="rules"
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.first_name"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <label>{{ $t('user.profile.lastName') }}</label>
        <v-text-field
          dense
          :label="$t('user.profile.lastName')"
          :rules="rules"
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.last_name"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <label>{{ $t('user.profile.jobTitle') }}</label>
        <v-text-field
          dense
          :label="$t('user.profile.jobTitle')"
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.current_position"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <label>{{ $t('user.profile.workExperience') }}</label>
        <v-text-field
          dense
          :label="$t('user.profile.workExperience')"
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.work_radius"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <label>{{ $t('user.profile.lookingFor') }}</label>
        <v-text-field
          dense
          :label="$t('user.profile.lookingFor')"
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.looking_for"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <label>{{ $t('user.profile.education') }}</label>
        <v-text-field
          dense
          :label="$t('user.profile.education')"
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.your_qualification"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label>{{ $t('user.profile.aboutMe') }}</label>
        <v-textarea
          dense
          :label="$t('user.profile.aboutMe')"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.describe_yourself"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card outlined flat class="border-blue-dark card-link">
          <a class="card-link-btn">
            <v-icon>mdi-link</v-icon>
          </a>
          <v-card-title class="pb-0 font-weight-bold">Lorem ipsum</v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, lorem
            ipsum dolor sit amet, consetetur sadipscing elitr..</v-card-text
          >
          <v-card-actions class="border-top-blue-dark pa-4 pt-1 pb-1">
            <strong class="text-color-primary-blue-dark">$9.99</strong>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Profile",
  data: () => ({
    formData: {
      email: "",
      first_name: "",
      last_name: "",
      current_position: "",
      work_radius: "",
      looking_for: "",
      your_qualification: "",
      describe_yourself: ""
    },
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 3) || "Min 3 characters"
    ]
  }),
  created() {
    this.resetFormData(this.user);
  },
  computed: {
    ...mapGetters("user", ["user", "getUserFullName", "getUserInitials"])
  },
  methods: {
    ...mapActions("user", ["updateUser"]),
    resetFormData(user) {
      if (!user) return;
      this.formData.email = user.email;
      this.formData.first_name = user.first_name;
      this.formData.last_name = user.last_name;
      this.formData.current_position = user.current_position;
      this.formData.work_radius = user.work_radius;
      this.formData.looking_for = user.looking_for;
      this.formData.your_qualification = user.your_qualification;
      this.formData.describe_yourself = user.describe_yourself;
    },
    handleUpdate() {
      this.updateUser(this.formData);
    }
  },
  watch: {
    user(newVal) {
      this.resetFormData(newVal);
    }
  }
};
</script>
