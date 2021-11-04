<template>
  <div class="admin-dashboard">
    <PageHeader :title="$t('dashboard')" />
    <v-row class="pt-5">
      <v-col cols="6">
        <v-card flat class="pa-8">
          <v-card-title class="pa-0 pb-4">
            Bulk upload users
          </v-card-title>
          <v-file-input
            v-model="csv"
            :placeholder="`${$t('upload')} CSV`"
            outlined
            color="#0253B3"
            :prepend-icon="null"
            prepend-inner-icon="mdi-cloud-upload"
            class="file-input-jonder "
            accept=".csv"
            @change="e => (csv = e)"
          >
            <template v-slot:selection="{ text }">
              <v-chip small label color="primary"> {{ text }} </v-chip>
            </template>
          </v-file-input>
          <response-alert :response="response"></response-alert>
          <div class="d-flex justify-end">
            <v-btn
              depressed
              color="primary"
              class="px-10"
              height="48"
              @click="importCSV"
              >{{ $t("save") }}
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import PageHeader from "@/components/admin/PageHeader";
import ResponseAlert from "@/components/ResponseAlert";

export default {

  name: 'AdminDashboard',

  components: {
    PageHeader,
    ResponseAlert
  },

  data() {
    return {
      csv: null,
      response:{}
    }
  },

  methods: {
    importCSV() {
      this.$store
        .dispatch('admin/importUsers', this.csv)
        .then(res => {
          this.response = res.data;
          this.$store.dispatch('admin/fetchJobseekers');
          this.$store.dispatch('admin/fetchCompanies');
        })
        .catch(err => {
          this.response = err.data;
        });
    }
  }
  
};

</script>