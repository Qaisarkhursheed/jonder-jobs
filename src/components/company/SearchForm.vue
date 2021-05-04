<template>
  <v-card class="search-form rounded-lg"
          flat>
    <v-card-title class="search-title pa-0 pb-3">
      Finden sie Ihren Traummitarbeiter.
      Mithilfe der Jonder Mitarbeitersuche.
    </v-card-title>

    <label>Looking for</label>
    <v-row class="search-selection no-gutters pt-1">
      <v-col class="trainee d-flex justify-center align-center">
        <div>Trainee</div>
      </v-col>
      <v-col class="fulltime justify-center d-flex align-center">
        <div>Full time</div>
      </v-col>
      <v-col class="freelance justify-center d-flex align-center">
        <div>Freelance</div>
        </v-col>
    </v-row>

    <v-row class="search-form-fields no-gutters pb-5">
      <v-col v-for="(field, i) in formFields" :key="i"
             cols="4"
             class="pb-6"
             :class="[ (i+1)%3==0 ? 'pr-0': 'pr-5' ]"> 
        <label>{{field.label}}</label>
        <v-text-field class="rounded-lg"
                      style="height: 50px;"
                      height="100%"
                      type="text"
                      :label="field.label"
                      outlined
                      flat
                      dense
                      solo
                      background-color="#fff"
                      v-model="field.value">
        </v-text-field>
      </v-col>
    </v-row>

    <SearchFormSlider/>

    <v-card-actions class="no-gutters pa-0 ma-0 mt-3">
      <v-col cols="8">
        <v-btn class="font-weight-bold"
               height="54px"
               style="border-radius: 10px;"
               elevation="1"
               color="#27AAE1"
               width="30%"
               dark>
          Save filter
        </v-btn>
        <v-btn class="ml-8 font-weight-bold"
               height="54px"
               width="45%"
               elevation="1"
               style="border-radius: 10px;"
               color="#0253B3"
               dark>
          Button (155 results)
        </v-btn>
      </v-col>

      <v-col cols="4" class="align-self-end text-right">
        <span @click="$emit('toggleAdvanced')"
              class="advanced-label text-color-primary-blue-dark">
          Advanced Search
        </span>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>

import SearchFormSlider from '@/components/company/SearchFormSlider';

export default {
  name: 'SearchForm',

  components: {
    SearchFormSlider
  },

  data() {
    return {
      formFields: [
        {
          label: 'Job title',
          value: ''
        },
        {
          label: 'School graduation',
          value: ''
        },
        {
          label: 'JEducation / Study',
          value: '', 
        },
        {
          label: 'Industry of the profession',
          value: '', 
        },
        {
          label: 'Salary',
          value: '', 
        },
        {
          label: 'Work experience necessary',
          value: '', 
        }
      ],
      locationRadius: 1,
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
  }
  .search-title {
    font-weight: 600;
    font-size: 24px;
    color: #3E3E47;
  }
  .trainee {
    background: #FCF7CD;
    border: 1px solid #D4D4D4;
    font-size: 16px;
    font-weight: 700;
    color: #9F900B;
  }
  .fulltime {
    background: #CFFCD9;
    border: 1px solid #D4D4D4;
    font-size: 16px;
    font-weight: 700;
    color: #018D28;
  }
  .freelance {
    background: #E3E6FB;
    border: 1px solid #D4D4D4;
    font-size: 16px;
    font-weight: 700;
    color: #031594;
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