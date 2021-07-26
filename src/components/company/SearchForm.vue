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
        <v-select
          v-model="formFields.job_position"
          :items="types.JOB_POSITION"
          :hide-details="true"
          :placeholder="$t('company.search.jobPosition')"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="5">
         <label class="section-label">
          {{ $t('company.search.employementType') }}
        </label>
        <v-select
          v-model="formFields.employment_type"
          :items="types.EMPLOYEMENT_TYPE"
          hide-details
          :placeholder="$t('company.search.employementType')"
          outlined
        ></v-select>
      </v-col>
    </v-row>

    <template v-if="advancedSearch">
      <v-row>
        <v-col cols="4">
          <label class="section-label">
            {{ $t('company.search.industryOfProfession') }}
          </label>
          <v-select
            v-model="formFields.branche"
            :items="types.JOB_BRANCHE"
            :hide-details="true"
            :placeholder="$t('company.search.industryOfProfession')"
            outlined
          ></v-select>
        </v-col>
        <v-col cols="4">
          <label class="section-label">
            {{ $t('company.search.schoolGraduation') }}
          </label>
          <v-text-field
            v-model="formFields.school"
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
            v-model="formFields.education"
            :items="types.EDUCATION"
            :hide-details="true"
            :placeholder="$t('company.search.educationStudy')"
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
                v-model="formFields.min_salary"
                placeholder="Min"
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
                v-model="formFields.max_salary"
                placeholder="Max"
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
            v-model="formFields.work_experience"
            :items="types.WORK_EXPERIENCE"
            :hide-details="true"
            :placeholder="$t('company.search.workExperience')"
            outlined
          ></v-select>
        </v-col>
        <v-col cols="4">
          <label class="section-label">
            {{ $t('company.search.city') }}
          </label>
          <v-text-field
            v-model="formFields.city"
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
    </template>

    <v-card-actions class="no-gutters pa-0 ma-0 mt-3">
      <v-col cols="6">
        <v-row>
          <v-col cols="6">
            <v-btn
              color="#fff"
              height="58"
              elevation="0"
              class="full-w mt-16 font-weight-medium white"
              @click="searchSave"
            >
                Save search
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="6">
            <v-btn
              height="58"
              elevation="0"
              :class="['advanced-search-btn full-w mt-16 white font-weight-medium', 
                { active: advancedSearch}
              ]"
              color="#fff"
              @click="advancedSearch = !advancedSearch"
            >
              {{ $t('company.search.advancedSearch') }}
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              :loading="searchLoading"
              color="primary"
              height="58"
              class="full-w mt-16 font-weight-medium"
              @click="search"
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
import { forEach } from 'lodash';
import store from '@/store';
import types from '@/types';

export default {
  name: 'SearchForm',

  components: {
  },

  data() {
    return {
      formFields: {
        employment_type: '',
        job_position: '',
        work_experience: '',
        branche: '',
        school: '',
        education: '',
        min_salary: '',
        max_salary: ''
      },
      advancedSearch: false
    }
  },

  created() {
  },

  methods: {
    search() {
      store.dispatch('company/searchJobseekers', this.prepareData());
      this.$emit('search');
    },
    searchSave() {
      store.dispatch('company/searchFilterSave', this.prepareData());
    },
    filterData(){
      let searchMeta = store.getters['company/searchMeta'] ? store.getters['company/searchMeta'].searchInput : null;
      console.log("meta", searchMeta);
      if(searchMeta){
        if(searchMeta.employment_type) this.formFields.employment_type = searchMeta.employment_type;
        if(searchMeta.job_position) this.formFields.job_position = searchMeta.job_position;
        if(searchMeta.work_experience) this.formFields.work_experience = searchMeta.work_experience;
        if(searchMeta.branche) this.formFields.branche = searchMeta.branche;
        if(searchMeta.school) this.formFields.school = searchMeta.school;
        if(searchMeta.education) this.formFields.education = searchMeta.education;
        if(searchMeta.min_salary) this.formFields.min_salary = searchMeta.min_salary;
        if(searchMeta.max_salary) this.formFields.max_salary = searchMeta.max_salary;
        if(searchMeta.city) this.formFields.city = searchMeta.city;
      }
    },
    prepareData() {
      let activatedFields = {};

      forEach(this.formFields, (item, key) => {
        if (item) {
          activatedFields[key] = item;
        }
      });
      return activatedFields;
    },
  },
  computed: {
    searchCountLabel() {
      return this.searchCount ? `Search (${this.searchCount} results)`: 'Search';
    },
    searchLoading() {
      this.filterData();
      return store.getters['company/searchInProgress'];
    },
    types() {
      return types;
    }
  },
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