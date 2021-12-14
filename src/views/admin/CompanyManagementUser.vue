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
              item-value="id"
              :item-text="$i18n.locale"
              cache-items
              outlined
              readonly
            >
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
      <div class="section" v-if="company.plan">
            <label class="section-label">
              {{ $t("subscriptionPlan") }}
            </label>
        <div class="d-flex justify-space-between">
              <v-chip
                v-if="company.plan"
                class="pl-5 pr-5 font-weight-bold"
                style="font-size: 16px;"
                :color="'#ffffff'"
                :text-color="'#000000'"
              >
                {{ company && company.plan && company.plan.name ? company.plan.name : '-'}}
              </v-chip>
              <p class="mt-1 mx-5"> 
                {{ $t("price") }}:
                {{ company && company.plan && company.plan.price }} €
              </p>
              <p class="mt-1 mx-5"> 
                {{ $t("validUntil") }}:
                {{ company && company.plan && company.plan.end_timestamp | moment("DD MMM, YYYY") }}
              </p>
              <v-btn
                :loading="formLoading"
                depressed
                color="primary"
                class="px-5 mt-1"
                height="28"
                @click="handlePlanRemove(company && company.plan && company.plan.id)"
              >
                {{ $t("cancelSubscription") }}
              </v-btn>
        </div>
      </div>
          <div class="mt-5">
          <h3>{{ $t("selectNewPlan") }}</h3>
          <div>
            <v-select
              v-model="selectedNewPlan"
              :items="plans"
              :item-text="'name'"
              :item-value="'id'"
              v-on:change="changePlan"
              :label="$t('selectNewPlan')"
              outlined
              class="mt-1"
            >
            </v-select>
          </div>
          <div>
            <v-btn
                :loading="formLoading"
                depressed
                color="primary"
                class="px-10"
                height="48"
                @click="handlePlanChange"
                >{{ $t("save") }}
              </v-btn>
          </div>
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
import { mapActions } from "vuex";
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
      social: ["facebook", "instagram", "linkedin", "youtube", "twitter"],
      selectedNewPlan: null,
      user: {},
      formLoading: false,
      formResponse: {},
      plans: [],
      planColors: {
        basic: {
          color: "#F2E7FC",
          text: "#8C18E2"
        },
        highlighted: {
          color: "#F2E7FC",
          text: "#8C18E2"
        },
        "all-inclusive": {
          color: "#E1F5FD",
          text: "#4A4DE6",
        },
        premium: {
          color: "#FBEDE7",
          text: "#FF6422",
        }
      }

    };
  },
  created() {
    axios.get(`/copmanies/${this.id}`).then(res => {
      this.company = res.data.data;
      console.log("THis company", this.company)
      // console.log("THis company id", this.company.plan.id)
      // console.log("THis company name", this.company.plan.name)
    axios.get(`/plan-packages`, {
        params: {
          per_page: 999,
          plan_type:
            this.user.role == "Jobseeker" ? "jobseeker_plan" : "employer_plan"
        }}).then(resPlans => {
        this.plans = resPlans.data.data;
      });

    });
  },
  methods: {
    ...mapActions("user", ["updateUserPlan"]),
   changePlan(){
      //console.log("changed plan", this.selectedNewPlan);
    },
    handlePlanRemove(planId) {
      if (confirm('Are you sure you want to remove this subscription?')) {
        this.formResponse = {};
      let formData = {
        user_id: parseInt(this.id),
        plan_id: planId,
        remove_plan: 1
      }

      
      this.formLoading = true;
      this.updateUserPlan(formData)
        .then(resp => {
          this.user = resp.data.data;
        })
        .catch(err => {
          this.formResponse = err.data;
        })
        .finally(() => {
          this.formLoading = false;
        });
        
      }
    },
    handlePlanChange() {
      if(!(this.selectedNewPlan > 0)){
        alert("Please select the new plan for user!");
      }else{
        let blnActivePlan = false;
        console.log(this.user);
        if(this.user.plan){
          let index = this.user.plan.findIndex((item) => {
            return item.id === this.selectedNewPlan
          });
          if(index === -1){
            blnActivePlan = false;
          }else{
            blnActivePlan = true;
          }
          console.log(index + " index");
        }


        if(blnActivePlan){
          alert("Selected user is already using this plan!");
        }else{
      this.formResponse = {};
      let formData = {
        user_id: parseInt(this.id),
        plan_id: this.selectedNewPlan
      }

      
      this.formLoading = true;
      this.updateUserPlan(formData)
        .then(resp => {
          this.user = resp.data.data;
        })
        .catch(err => {
          this.formResponse = err.data;
        })
        .finally(() => {
          this.formLoading = false;
        });
        
      }
      }
    },
  },

  computed: {
    types() {
      return types;
    }
  }
};
</script>
