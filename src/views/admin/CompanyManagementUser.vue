<template>
  <div class="company-management-user">
    <v-card flat class="pa-8">
      <v-row>
        <v-col cols="12">
          <div class="avatar">
            <v-avatar color="primary" size="70">
              <img v-if="company.profile_img" :src="company.profile_img" />
            </v-avatar>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <div class="section">
            <label class="section-label">
              {{ $t("companyName") }}
            </label>
            <v-text-field v-model="company.company" outlined readonly />
          </div>

          <div class="section">
            <label class="section-label">
              {{ $t("aboutCompany") }}
            </label>
            <v-textarea v-model="company.about_company" outlined readonly />
          </div>
        </v-col>
        <v-col cols="6">
          <div class="section">
            <label class="section-label">
              {{ $t("branch") }}
            </label>
            <v-autocomplete
              :attach="true"
              v-model="company.branche"
              :items="types.JOB_BRANCHE"
              cache-items
              outlined
              readonly
            >
              <template v-slot:selection="{ item }"> {{ $t(item) }} </template>
              <template v-slot:item="{ item }">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ $t(item) }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
            </v-autocomplete>
          </div>
          <div class="section">
            <label class="section-label">
              {{ $t("numberOfEmployees") }}
            </label>
            <v-select
              :attach="true"
              v-model="company.company_employees"
              :items="types.EMPLOYEE_NUMBER"
              outlined
              readonly
            >
              <template v-slot:selection="{ item }"> {{ $t(item) }}</template>
              <template v-slot:item="{ item }">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ $t(item) }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
            </v-select>
          </div>
          <div class="section">
            <label class="section-label">
              {{ $t("foundingYear") }}
            </label>
            <v-text-field
              v-model="company.establishment_date"
              type="number"
              outlined
              readonly
            />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <!-- Email -->
          <div class="section">
            <label class="section-label">
              {{ $t("emailAddress") }}
            </label>
            <v-text-field
              v-model="company.company_email"
              type="email"
              outlined
              readonly
            />
          </div>

          <!-- Phone -->
          <div class="section">
            <label class="section-label">
              {{ $t("phone") }}
            </label>
            <v-text-field v-model="company.company_phone" outlined readonly />
          </div>

          <!-- Address -->
          <div class="section">
            <label class="section-label">
              {{ $t("cityAndAddress") }}
            </label>
            <v-text-field v-model="company.address" outlined readonly>
            </v-text-field>
          </div>
        </v-col>
        <v-col cols="6">
          <!-- Web -->
          <div class="section">
            <label class="section-label">
              {{ $t("webUrl") }}
            </label>
            <v-text-field v-model="company.web_url" outlined readonly>
            </v-text-field>
          </div>

          <!-- Social links -->
          <div class="social-links mb-3">
            {{ $t("socialLinks") }}
          </div>

          <!-- Loop -->
          <div class="section mb-4" v-for="(item, i) in social" :key="i">
            <label class="section-label">
              {{ item }}
            </label>
            <v-text-field
              v-model="company[item]"
              outlined
              hide-details
              readonly
            />
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import types from "@/types";

export default {
  name: "CompanyManagementUser",

  props: {
    id: {
      type: [String, Number]
    }
  },

  data() {
    return {
      company: {},
      social: ["facebook", "instagram", "linkedin", "youtube", "twitter"]
    };
  },
  created() {
    axios.get(`/copmanies/${this.id}`).then(res => {
      this.company = res.data.data;
    });
  },
  computed: {
    types() {
      return types;
    }
  }
};
</script>
