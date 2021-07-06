<template>
  <div class="pa-8">
    <v-row>
      <p class="profile-title">
        Change personal info
      </p>
      <p class="profile-subtitle">
        Explanation goes here
      </p>
      <v-col cols="6">
        <div class="d-flex align-center">
          <v-avatar color="primary" size="58" class="flex-grow-0 flex-shrink-0">
            <v-img :src="user.profile_img" v-if="user.profile_img"></v-img>
            <span class="white--text headline" v-else>{{
              getUserInitials
            }}</span>
          </v-avatar>
      <!--<div class="flex-grow-1 flex-shrink-1 pl-2">
            <div
              class="heading text-color-primary-blue-dark font-weight-bold ml-2 mb-2"
            >
              {{ getUserFullName }}
            </div>
            <div v-if="user.address">
              <v-icon>mdi-map-marker</v-icon>
              <span>{{ user.address }}</span>
            </div>
          </div>-->
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
        <label class="profile-label">{{ $t('user.profile.firstName') }}</label>
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
        <label class="profile-label">{{ $t('user.profile.lastName') }}</label>
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
        <label class="profile-label">Email</label>
        <v-text-field
          dense
          disabled
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="user.email"
        ></v-text-field>
      </v-col>
    </v-row>
    
    <v-row>
      <p class="profile-title branche">
        Rolle & Branche
      </p>
      <p class="profile-subtitle">
        Explanation goes here
      </p>
      <v-col cols="12">
        <label class="profile-label">In which branches do you work?</label>
        <v-select
          outlined
          dense
          :rules="rules"
          :items="currentPosition"
          background-color="white"
          v-model="formData.current_position"
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label class="profile-label">What type of role are you looking for?</label>
        <v-select 
          outlined
          dense
          :rules="rules"
          :items="lookingForRole"
          background-color="white"
          v-model="formData.looking_for"
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <p class="profile-title branche">
        Your experience and education
      </p>
      <p class="profile-subtitle">
        Explanation goes here
      </p>
      <v-col cols="12">
        <label class="profile-label">What type of branches are you looking for?</label>
        <v-select
          outlined
          dense
          :items="lookingForBranches"
          background-color="white"
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label class="profile-label">What type of employment are you looking for?</label>
        <v-select 
          outlined
          dense
          :items="employment"
          background-color="white"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <label class="profile-label">Where would you like to work?</label>
        <v-text-field
          dense
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label class="profile-label">When can you start?</label>
        <v-text-field
          dense
          type="text"
          outlined
          solo
          flat
          hide-details
          background-color="white"
          v-model="formData.ready_for_work"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="10">
        <label class="profile-label">Monatliche Netto Gehaltsvorstellung? (€) </label>
        <v-col>
            <div class="monthly-salary">
              {{ formData.monthly_salary }}k
            </div>
          </v-col>
        <v-slider
          v-model="formData.monthly_salary"
          track-color="grey"
          color="primary"
          always-dirty
          min="0"
          max="100"
        ></v-slider>
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
      describe_yourself: "",
      ready_for_work: "",
      monthly_salary: "",
    },
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 3) || "Min 3 characters"
    ],
    currentPosition: ['Entwickler/in', 'Projektmanager/in', 'Bauleiter/in', 'Praktikant/in', 'Auszubildende/r',  'Geschäftsführer/in'],
    lookingForRole: ['Product Designer', 'Graphic Designer', 'Project Manager', 'Software developer', 'Game developer'],
    lookingForBranches: ['Entwickler/in', 'Projektmanager/in', 'Bauleiter/in', 'Praktikant/in', 'Auszubildende/r',  'Geschäftsführer/in'],
    employment: ['Part - time', 'Full-time'],

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
      this.formData.ready_for_work = user.ready_for_work;
      this.formData.monthly_salary = user.monthly_salary;
console.log(user)
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

<style lang="scss">
.profile-title {
  font-size: 20px;
  width: 100%;
  line-height: 24px;
  font-weight: 600;
  margin: 15px 0 0 15px;
}

.profile-subtitle {
  width: 100%;
  margin-left: 15px;  
}

.profile-label {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
}

.branche {
  margin-top: 70px;
}

.monthly-salary {
    border: 1px solid $primary-blue-dark;
    border-radius: 10px;
    width: 80px;
    text-align: center;
    padding: 25px 0;
    color: $primary-blue-dark;
}
</style>