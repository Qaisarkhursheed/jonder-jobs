<template>
  <div class="jobseeker-management-user">
    <v-card flat class="pa-8">
      <v-row>
        <v-col cols="12">
          <div class="avatar">
            <v-avatar color="primary" size="70">
              <img v-if="user.profile_img" :src="user.profile_img" />
            </v-avatar>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-row>
            <v-col>
              <div class="section">
                <label class="section-label">
                  {{ $t("firstName") }}
                </label>
                <v-text-field
                  v-model="user.first_name"
                  type="text"
                  outlined
                  readonly
                />
              </div>
            </v-col>
            <v-col>
              <div class="section">
                <label class="section-label">
                  {{ $t("lastName") }}
                </label>
                <v-text-field
                  v-model="user.last_name"
                  type="text"
                  outlined
                  readonly
                />
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="section">
                <label class="section-label">
                  {{ $t("aboutMe") }}
                </label>
                <v-textarea v-model="user.about_me" outlined readonly />
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <div class="section">
            <label class="section-label">
              {{ $t("address") }}
            </label>
            <v-text-field
              v-model="user.address"
              type="text"
              outlined
              readonly
            />
          </div>
          <div class="section">
            <label class="section-label">
              {{ $t("emailAddress") }}
            </label>
            <v-text-field v-model="user.email" type="email" outlined readonly />
          </div>
          <div class="section">
            <label class="section-label">
              {{ $t("phone") }}
            </label>
            <v-text-field v-model="user.phone" type="text" outlined readonly />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <div class="section">
            <label class="section-label">
              {{ $t("currentPosition") }}
            </label>
            <v-autocomplete
              v-model="user.current_position"
              :items="types.JOB_POSITION"
              item-value="id"
              :item-text="$i18n.locale"
              type="text"
              outlined
              readonly
            />
          </div>
          <div class="section">
            <label class="section-label">
              {{ $t("detailsAboutYouBranchesPlace") }}
            </label>
            <v-autocomplete
              :attach="true"
              v-model="user.branche"
              item-value="id"
              :item-text="$i18n.locale"
              :items="types.JOB_BRANCHE"
              outlined
              flat
              multiple
              :placeholder="$t('detailsAboutYouBranchesPlace')"
              class="mt-1"
              readonly
            >
            </v-autocomplete>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="section">
            <label class="section-label">
              {{ $t("detailsAboutYouRolePlace") }}
            </label>
            <v-autocomplete
              :attach="true"
              v-model="user.looking_for_position"
              :items="types.JOB_POSITION"
              item-value="id"
              :item-text="$i18n.locale"
              :placeholder="$t('detailsAboutYouRolePlace')"
              multiple
              outlined
              flat
              class="mt-1"
              readonly
            >
            </v-autocomplete>
          </div>
          <div class="section">
            <label class="section-label">
              {{ $t("lookingForEmployementPlace") }}
            </label>
            <v-select
              :attach="true"
              v-model="user.looking_for_employment_type"
              :items="types.EMPLOYEMENT_TYPE"
              :item-text="$i18n.locale"
              item-value="id"
              :placeholder="$t('lookingForEmployementPlace')"
              outlined
              multiple
              readonly
              class="mt-1"
            >
            </v-select>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3>{{ $t("subscriptionPlan") }}</h3>
          <h4>{{ $t("activePlans") }}</h4>
          <div class="mt-5 d-flex justify-space-between" 
            v-for='plan in user.plan'
            :key='plan.id'
          >
              <v-chip
                v-if="plan"
                class="pl-5 pr-5 font-weight-bold"
                style="font-size: 16px;"
                :color="'#ffffff'"
                :text-color="'#000000'"
              >
            {{ plan && plan.name ? plan.name : '-'}}
          </v-chip>
          <p class="mt-1 mx-5"> {{ $t("price") }}:
          {{ plan.price }} €</p>
          <p class="mt-1 mx-5"> {{ $t("validUntil") }}
          {{ plan.end_timestamp | moment("DD MMM, YYYY") }}</p>
          <v-btn
                :loading="formLoading"
                depressed
                color="primary"
                class="px-5 mt-1"
                height="28"
                @click="handlePlanRemove(plan.id)"
                >{{ $t("cancelSubscription") }}
              </v-btn>
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
      </v-row>

    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import types from "@/types";
import { mapActions } from "vuex";
export default {
  name: "JobseekerManagementUser",

  props: {
    id: {
      type: [String, Number]
    }
  },

  data() {
    return {
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
    axios.get(`/users/${this.id}`).then(res => {
      this.user = res.data.data;


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
