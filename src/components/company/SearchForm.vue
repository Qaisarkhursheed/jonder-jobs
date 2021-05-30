<template>
  <v-card class="search-form rounded-lg"
          flat>
    <v-card-title class="search-title pa-0 pb-3">
      {{ $t('company.search.headingTitle') }}
    </v-card-title>

    <label>
      {{ $t('company.search.lookingFor') }}
    </label>

    <v-row class="search-selection no-gutters pt-1">
      <v-col class="d-flex justify-center align-center"
             :class="{ active: item === lookingfor.selected }"
             v-for="(item, i) in lookingfor.options" :key="i"
             @click="selectLookingfor(item)">
        <div>{{item.label}}</div>
      </v-col>
    </v-row>

    <v-form ref="form"
            v-model="validForm"
            action="#"
            class="pt-2">

      <v-row class="search-form-fields no-gutters pb-5">
          <v-col v-for="(field, i) in form" :key="i"
                cols="4"
                class="pb-6"
                :class="[ (i+1)%3==0 ? 'pr-0': 'pr-5' ]"> 
            <label>{{field.label}}</label>
            <v-text-field class="rounded-lg"
                          :rules="[() => !!field.value || 'This field is required']"
                          style="height: 50px;"
                          height="100%"
                          type="text"
                          outlined
                          flat
                          dense
                          solo
                          background-color="#fff"
                          v-model="field.value">
            </v-text-field>
          </v-col>
      </v-row>
      
    </v-form>

    <SearchFormSlider @selected="(value) => {this.radius.value = value}"/>

    <v-card-actions class="no-gutters pa-0 ma-0 mt-3">
      <v-col cols="8">
        <v-btn class="font-weight-bold"
               height="54px"
               style="border-radius: 10px;"
               elevation="1"
               color="#27AAE1"
               width="30%"
               dark>
          {{ $t('company.search.saveFilter') }}
        </v-btn>
        <v-btn class="ml-8 font-weight-bold"
               height="54px"
               width="45%"
               elevation="1"
               style="border-radius: 10px;"
               color="#0253B3"
               dark
               @click="handleSearch">
            {{searchCountLabel}}
        </v-btn>
      </v-col>

      <v-col cols="4" class="align-self-end text-right">
        <span @click="$emit('toggleAdvanced')"
              class="advanced-label text-color-primary-blue-dark">
          {{ $t('company.search.advancedSearch') }}
        </span>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>

import axios from 'axios';
import SearchFormSlider from '@/components/company/SearchFormSlider';

export default {
  name: 'SearchForm',

  components: {
    SearchFormSlider
  },

  data() {
    return {
      form: {
        jobtitle: {
          label: this.$t('company.search.jobTitle'),
          value: ''
        },
        school: {
          label: this.$t('company.search.schoolGraduation'),
          value: ''
        },
        education: {
          label: this.$t('company.search.education'),
          value: '', 
        },
        branche: {
          label: this.$t('company.search.industry'),
          value: '', 
        },
        salary: {
          label: this.$t('company.search.salary'),
          value: '', 
        },
        experience: {
          label: this.$t('company.search.experience'),
          value: '', 
        },
      },
      lookingfor: {
        selected: false,
        options: [
          {
            label: 'Trainee',
            value: 'trainee'
          },
          {
            label: 'Full time',
            value: 'full time'
          },
          {
            label: 'Freelance',
            value: 'freelance'
          }
        ]
      },
      radius: {
        label: 'Radius',
        value: 1
      },
      searchCount: '',
      validForm: false
    }
  },

  methods: {
    formatData() {
      return {
        looking_for: this.lookingfor.selected.value || 'trainee',
        work_experience: this.form.experience.value,
        job_title: this.form.jobtitle.value,
        school: this.form.school.value,
        education: this.form.education.value,
        branche: this.form.branche.value,
        monthly_salary: this.form.salary.value,
        working_radius: `${this.radius.value} KM` || '20'
      }
    },
    async handleSearch() {
      await this.$refs.form.validate();
      if (this.validForm) this.search()
    },
    search() {
      axios.post('/company/search/', this.formatData())
      .then((res) => {
        this.searchCount = res.data.users.length;
        this.$emit('searchResults', res.data.users);
      })
      .catch((er) => {
        console.log(er);
      });
    },
    selectLookingfor(item) {
      this.lookingfor.selected = item;
    },
  },
  computed: {
    searchCountLabel() {
      return this.searchCount ? `Search (${this.searchCount} results)`: 'Search';
    }
  }
};

</script>

<style lang="scss" scoped>
  .search-form {
    padding: 20px 25px 25px 25px;
  }
  .search-selection {
    height: 86px;

    > div {
      cursor: pointer;
      font-size: 16px;
      font-weight: 700;
      border: 1px solid #D4D4D4;

      &.active {
        border: 1px solid #737373;
        transition: border 0.5s;
      }
    }
    > div:nth-child(1) {
      background: #FCF7CD;
      color: #9F900B;
    }
    > div:nth-child(2) {
      background: #CFFCD9;
      color: #018D28;
    }
    > div:nth-child(3) {
      background: #E3E6FB;
      color: #031594;
    }
  }
  .search-title {
    font-weight: 600;
    font-size: 24px;
    color: #3E3E47;
  }
  label {
    font-size: 16px;
    font-weight: 400;
    color: #82858C;
  }
  .advanced-label {
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
  }
</style>