<template>
  <v-card class="search-advanced rounded-lg"
          flat
          v-if="active">
    <v-card-title class="search-title pa-0 pb-3">
      Finden sie Ihren Traummitarbeiter.
      Mithilfe der Jonder Mitarbeitersuche.
    </v-card-title>

     <v-row class="search-form no-gutters pb-5">
      <v-col v-for="(field, i) in formFields.length" :key="i"
             cols="4"
             class="pb-6"
             :class="[ (i+1)%3==0 ? 'pr-0': 'pr-5' ]"> 
        <label>{{formFields.label}}</label>
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

    <v-card-actions class="no-gutters pa-0 ma-0">
      <v-col cols="8">
        <v-btn class="font-weight-bold"
               height="54px"
               style="border-radius: 10px;"
               elevation="1"
               color="#27AAE1"
               width="30%"
               dark>
          Add filter
        </v-btn>
        <v-btn class="ml-8 font-weight-bold"
               height="54px"
               elevation="1"
               style="border-radius: 10px;"
               color="#0253B3"
               width="45%"
               dark>
          Button (155 results)
        </v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'SearchFormAdvanced',

  props: {
    active: {
      type: Boolean
    }
  },

  data() {
    return {
      formFields: {
        label: 'Lorem Ipsum',
        length: 15
      }
    }
  }
};

</script>

<style lang="scss" scoped>
  .search-advanced {
    padding: 20px 25px 25px 25px;
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
</style>