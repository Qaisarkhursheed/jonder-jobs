<template>
<div>
  <div class="heading-title mb-6">
    {{ $t('company.search.headingTitle') }}
  </div>

  <v-card class="search-form rounded-lg pa-8"
          flat>
    <v-row>
      <v-col cols="7">
        <label class="section-label">
          {{ $t('company.search.jobPosition') }}
        </label>
        <v-text-field
          class="rounded-lg"
          style="height: 50px;"
          height="100%"
          type="text"
          outlined
          :hide-details="true"
          :placeholder="$t('company.search.jobPosition')"
          flat
          dense
          solo
          background-color="#fff">
        </v-text-field>
      </v-col>
      <v-col cols="5">
         <label class="section-label">
          {{ $t('company.search.employementType') }}
        </label>
        <v-text-field
          class="rounded-lg"
          style="height: 50px;"
          height="100%"
          type="text"
          outlined
          :hide-details="true"
          :placeholder="$t('company.search.employementType')"
          flat
          dense
          solo
          background-color="#fff">
        </v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <label class="section-label">
          {{ $t('company.search.industryOfProfession') }}
        </label>
        <v-select
          :hide-details="true"
          :label="$t('company.search.industryOfProfession')"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="4">
        <label class="section-label">
          {{ $t('company.search.schoolGraduation') }}
        </label>
        <v-text-field
          class="rounded-lg"
          style="height: 50px;"
          height="100%"
          type="text"
          outlined
          :hide-details="true"
          :placeholder="$t('company.search.schoolGraduation')"
          flat
          dense
          solo
          background-color="#fff">
        </v-text-field>
      </v-col>
      <v-col cols="4">
        <label class="section-label">
          {{ $t('company.search.educationStudy') }}
        </label>
        <v-select
          :hide-details="true"
          :label="$t('company.search.educationStudy')"
          outlined
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <label class="section-label">
          {{ $t('company.search.salaryRange') }}
        </label>
        <v-row class="no-gutters justify-space-between">
          <v-col cols="6" class="pr-2">
            <v-text-field
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
          <v-col cols="6" class="pl-2">
            <v-text-field
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
      </v-col>
      <v-col cols="4">
        <label class="section-label">
          {{ $t('company.search.workExperience') }}
        </label>
        <v-select
          v-model="form.position"
          :items="positions"
          :hide-details="true"
          :label="$t('company.search.workExperience')"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="4">
        <label class="section-label">
          {{ $t('company.search.city') }}
        </label>
        <v-text-field
          class="rounded-lg"
          style="height: 50px;"
          height="100%"
          type="text"
          outlined
          :hide-details="true"
          :placeholder="$t('company.search.city')"
          flat
          dense
          solo
          background-color="#fff">
        </v-text-field>
      </v-col>
    </v-row>

    <v-card-actions class="no-gutters pa-0 ma-0 mt-3">
      <v-col cols="6"></v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="6">
            <v-btn
              height="58"
              class="full-w mt-16 font-weight-medium "
              color="#fff"
            >
              {{ $t('company.search.advancedSearch') }}
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              color="primary"
              height="58"
              class="full-w mt-16 font-weight-medium "
            >
               {{ $t('company.search.findEmployee') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'SearchForm',

  components: {
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
  .heading-title {
    font-weight: 600;
    font-size: 24px;
    color: #222222;
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