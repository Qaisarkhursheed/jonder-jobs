<template>
  <div class="admin-dashboard">
    <PageHeader :title="$t('dashboard')" />
    <v-row class="pt-5">
      <v-col cols="6">
        <v-card flat class="pa-8">
          <v-card-title class="pa-0 pb-4">
            {{ $t('bulkUploadUsers') }}
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
      <v-col cols="6">
        <v-card flat class="pa-8">
          <v-card-title class="pa-0 pb-4">
            {{ $t('bulkUploadJobBranches') }}
          </v-card-title>
          <v-file-input
            v-model="csv_job_branches"
            :placeholder="`${$t('upload')} CSV`"
            outlined
            color="#0253B3"
            :prepend-icon="null"
            prepend-inner-icon="mdi-cloud-upload"
            class="file-input-jonder "
            accept=".csv"
            @change="e => (csv_job_branches = e)"
          >
            <template v-slot:selection="{ text }">
              <v-chip small label color="primary"> {{ text }} </v-chip>
            </template>
          </v-file-input>
          <response-alert :response="response_job"></response-alert>
          <div class="d-flex justify-end">
            <v-btn
              depressed
              color="primary"
              class="px-10"
              height="48"
              @click="importCSVJOBBranches"
              >{{ $t("save") }}
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
         <v-card flat class="pa-8">
          <div class="d-flex justify-space-between mb-3">
            <div>
              <v-card-title class="pa-0 pb-4">
                {{ $t("duplicatedUsersManagement") }}
              </v-card-title>
            </div>
            <div>
              <v-btn
                depressed
                color="primary"
                class="px-10"
                height="48"
                @click="$store.dispatch('admin/checkDuplicateUsers')"
              >
              {{ $t("refresh") }}
              </v-btn>
            </div>
          </div>
          <div>
            <v-data-table
              :headers="duplicateUsers.headers"
              :items="$store.getters['admin/duplicateUsers']"
              :server-items-length="$store.getters['admin/duplicateUsersMeta'].total"
              :items-per-page.sync="duplicateUsers.params.per_page"
              :page.sync="duplicateUsers.params.page"
              @update:page="fetchDuplicateUsers()"
              @update:items-per-page="fetchDuplicateUsers()"
              :single-select="true"
            >
            <template v-slot:item.action="{ item }">
              <v-icon
                small
                @click="$store.dispatch('admin/deleteUser', item.id)"
              >
                mdi-delete
              </v-icon>
            </template>
            </v-data-table>
          </div>
         </v-card>
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="12">
         <v-card flat class="pa-8">
          <div class="d-flex justify-space-between mb-3">
            <div>
              <v-card-title class="pa-0 pb-4">
                {{ $t("duplicatedJobBranchesManagement") }}
              </v-card-title>
            </div>
            <div>
              <v-btn
                depressed
                color="primary"
                class="px-10"
                height="48"
                @click="$store.dispatch('admin/checkDuplicateJobBranches')"
              >
              {{ $t("refresh") }}
              </v-btn>
            </div>
          </div>
          <div>
            <v-data-table
              :headers="duplicateJobBranches.headers"
              :items="$store.getters['admin/duplicateJobBranches']"
              :server-items-length="$store.getters['admin/duplicateJobBranchesMeta'].total"
              :items-per-page.sync="duplicateJobBranches.params.per_page"
              :page.sync="duplicateJobBranches.params.page"
              @update:page="fetchDuplicateJobBranches()"
              @update:items-per-page="fetchDuplicateJobBranches()"
              :single-select="true"
            >
            <template v-slot:item.action="{ item }">
              <v-icon
                small
                @click="$store.dispatch('admin/deleteJobBranche', item.id)"
              >
                mdi-delete
              </v-icon>
            </template>
            </v-data-table>
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
      csv_job_branches: null,
      response: {},
      response_job: {},
      duplicateUsers: {
         params: {
          page: 1,
          per_page: 10
        },
        headers: [
          {
            text: "ID",
            value: "id",
            width: "5%",
            sortable: false
          },
          {
            text: this.$t('firstName'),
            value: 'first_name',
            width: "25%",
            sortable: false
          },
          {
            text: this.$t('lastName'),
            value: 'last_name',
            width: "25%",
            sortable: false
          },
          {
            text: this.$t('email'),
            value: "email",
            width: "20%",
            sortable: false
          },
          {
            text: this.$t('type'),
            value: "role",
            width: "20%",
            sortable: false
          },
          {
            text: this.$t('delete'),
            value: "action",
            width: "5%",
            sortable: false
          }
        ]
      },
      duplicateJobBranches: {
         params: {
          page: 1,
          per_page: 10
        },
        headers: [
          {
            text: "ID",
            value: "id",
            width: "5%",
            sortable: false
          },
          {
            text: 'EN',
            value: 'en',
            width: "30%",
            sortable: false
          },
          {
            text: 'DE',
            value: 'de',
            width: "30%",
            sortable: false
          },
          {
            text: 'FR',
            value: "fr",
            width: "30%",
            sortable: false
          },
          {
            text: this.$t('delete'),
            value: "action",
            width: "5%",
            sortable: false
          }
        ]
      },
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
    },
    importCSVJOBBranches() {
      this.$store
        .dispatch('admin/importJobBranches', this.csv_job_branches)
        .then(res => {
          this.response_job = res.data;
          this.$store.dispatch('admin/fetchJobseekers');
          this.$store.dispatch('admin/fetchCompanies');
        })
        .catch(err => {
          this.response_job = err.data;
        });
    },
    fetchDuplicateUsers() {
      this.$store.dispatch("admin/checkDuplicateUsers", this.duplicateUsers.params);
    },
    fetchDuplicateJobBranches() {
      this.$store.dispatch("admin/checkDuplicateJobBranches", this.duplicateJobBranches.params);
    }
  }
  
};

</script>