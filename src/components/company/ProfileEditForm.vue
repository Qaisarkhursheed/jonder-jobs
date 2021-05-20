<template>
  <v-card class="profile-edit-form rounded-lg pl-10 pr-10 pt-10 pb-10" flat>
    <ProfileEditDialog :active="dialog.active"
                       :type="dialog.type"
                       @close="dialogAction">
    </ProfileEditDialog>
    <v-card-title class="header pa-0 pb-7">
      Edit Profile
    </v-card-title>
    <v-row class="d-flex no-gutters">
      <v-col cols="6">
        <div class="d-flex pa-0 pb-5">
          <v-img
            :lazy-src="require('@/assets/company_placeholder.png')"
            height="100px"
            width="100px"
            max-width="100px"
            :src="require('@/assets/company_placeholder.png')"
            class="image">
          </v-img>
          <div class="pl-4 d-flex align-self-center">
            <div class="company-name pb-1 d-flex align-center">
              My Company
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="pb-5">
          <label>{{form.about.label}}</label>
          <v-text-field
            class="rounded-lg mt-3"
            style="height: 50px;"
            height="100%"
            type="text"
            :label="form.about.label"
            outlined
            flat
            dense
            solo
            background-color="#fff"
            v-model="form.about.value">
          </v-text-field>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex no-gutters">
      <v-col cols="6 pr-4">
        <div class="pb-5">
          <label>{{form.employees.label}}</label>
          <v-text-field
            class="rounded-lg mt-3"
            style="height: 50px;"
            height="100%"
            type="text"
            :label="form.employees.label"
            outlined
            flat
            dense
            solo
            background-color="#fff"
            v-model="form.employees.value">
          </v-text-field>
        </div>
        <div class="pb-5">
          <label>{{form.industry.label}}</label>
          <v-text-field
            class="rounded-lg mt-3"
            style="height: 50px;"
            height="100%"
            type="text"
            :label="form.industry.label"
            outlined
            flat
            dense
            solo
            background-color="#fff"
            v-model="form.industry.value">
          </v-text-field>
        </div>
        <div class="pb-5">
          <label class="d-block">{{form.lookingfor.label}}</label>
            <div class="chip-group">
              <v-chip v-for="(chip, i) in form.lookingfor.value" :key="i" 
                      @click:close="chipRemove(chip)"
                      class="ma-2"
                      color="#E3F2FB"
                      text-color="#0253B3"
                      close
                      close-icon="mdi-close">
                {{chip}}
              </v-chip>
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="pb-5">
          <label>{{form.email.label}}</label>
          <v-text-field
            class="rounded-lg mt-3"
            style="height: 50px;"
            height="100%"
            type="text"
            :label="form.email.label"
            outlined
            flat
            dense
            solo
            background-color="#fff"
            v-model="form.email.value">
          </v-text-field>
        </div>
        <div class="pb-5">
          <label>{{form.address.label}}</label>
          <v-text-field
            class="rounded-lg mt-3"
            style="height: 50px;"
            height="100%"
            type="text"
            :label="form.address.label"
            outlined
            flat
            dense
            solo
            background-color="#fff"
            v-model="form.address.value">
          </v-text-field>
        </div>
        <div class="pb-5">
          <label>{{form.radius.label}}</label>
          <v-text-field
            class="rounded-lg mt-3"
            style="height: 50px;"
            height="100%"
            type="text"
            :label="form.radius.label"
            outlined
            flat
            dense
            solo
            background-color="#fff"
            v-model="form.radius.value">
          </v-text-field>
        </div>
      </v-col>
    </v-row>

    <v-card-actions class="no-gutters pa-0 ma-0 mt-3">
      <v-col cols="6">
        <v-btn class="font-weight-bold"
          height="54px"
          width="50%"
          style="border-radius: 10px;"
          elevation="1"
          color="#0253B3"
          dark
          @click="cancel">
          Cancel
        </v-btn>
      </v-col>
      <v-col cols="6" class="d-flex justify-end">
        <v-btn class="font-weight-bold"
          height="54px"
          width="50%"
          style="border-radius: 10px;"
          elevation="1"
          color="#0253B3"
          dark
          @click="confirm">
          Confirm
        </v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import ProfileEditDialog from '@/components/company/ProfileEditDialog';

export default {
  name: 'ProfileEditForm',

  components: {
    ProfileEditDialog
  },

  data() {
    return {
      dialog: {
        type: '',
        active: false,
      },
      form: {
        employees: {
          label: 'How many employees your company have ?',
          value: ''
        },
        industry: {
          label: 'Which industry are you in?',
          value: ''
        },
        lookingfor: {
          label: 'Looking for',
          value: []
        },
        about: {
          label: 'About company',
          value: ''
        },
        email: {
          label: 'E-mail Adresse',
          value: ''
        },
        address: {
          label: 'City and Address',
          value: ''
        },
        radius: {
          label: 'Work Radius',
          value: ''
        }
      }
    }
  },
  mounted() {
    this.form.employees.value = this.user.company_employees;
    this.form.industry.value = this.user.department;
    this.form.about.value = this.user.about_company;
    this.form.email.value = this.user.email;
    this.form.address.value = this.user.address;
    this.form.radius.value = this.user.work_radius;
    this.form.lookingfor.value = this.user.looking_for ? this.user.looking_for.split(',') : false;
  },
  methods: {
    ...mapActions('user', ['updateCompanyUser']),
    chipRemove(chip) {
      const index = this.form.lookingfor.value.indexOf(chip);
      this.form.lookingfor.value.splice(index, 1);
    },
    chipAdd() {
      // if it's needed
    },
    confirm() {
      this.updateCompanyUser({
        email: this.form.email.value,
        address: this.form.address.value,
        about_company: this.form.about.value,
        company_employees: this.form.employees.value,
        work_radius: this.form.radius.value,
        department: this.form.industry.value,
        looking_for: this.form.lookingfor.value ? this.form.lookingfor.value.join(", ") : ''
      }).then(() => {
        this.dialog.type = 'ok';
        this.dialog.active = true;
        this.$router.push({name: 'CompanyProfile'});
      });
    },
    cancel() {
      this.dialog.type = 'warning';
      this.dialog.active = true;
    },
    dialogAction(type) {
      if(type === 'save') {
        this.confirm();
      } else {
        this.dialog.active = false;
        setTimeout(() => {
          this.dialog.type = '';
        }, 500);
      }
    }
  },

  computed: {
    ...mapGetters('user', ['user']),
  }
};

</script>

<style lang="scss">
  .profile-edit-form {
    label { 
      padding-bottom: 12px;
      color: #222222;
      font-weight: 600;
    }
  }
  .company-name {
    font-size: 24px;
    font-weight: 600;
  }
  .chip-group {
    border: 1px solid #D4D4D4;
    border-radius: 10px;
    font-weight: 600;
    font-family: $open-sans;
    min-height: 50px;

    .button {
      font-weight: 600 !important;
    }
  }
  .header {
    font-weight: 400;
    font-size: 20px;
  }
  
</style>