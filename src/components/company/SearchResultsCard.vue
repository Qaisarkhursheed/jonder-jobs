<template>
  <v-card
    :hover="true"
    class="candidate-card pa-0"
    :class="{ highlighted }"
    flat
  >
    <div @click="proceedClick">
      <v-card-text class="d-flex align-center pa-0 pa-6 pb-5">
        <v-avatar color="primary" size="64">
          <v-img v-if="candidate.profile_img" :src="candidate.profile_img" />
          <span v-else class="white--text display-1">
            {{ candidate | initials }}
          </span>
        </v-avatar>
        <div class="pl-4 align-center">
          <div class="name font-weight-bold pb-1">
            {{ candidate.first_name }} {{ candidate.last_name }}
          </div>
          <div class="job pb-1">
            <v-icon size="18px" color="#0253B3">
              mdi-briefcase
            </v-icon>
            <span>
              {{ currentPosition }}
            </span>
          </div>
        </div>
      </v-card-text>

      <v-card-text class="candidate-details">
        <v-row class="no-gutters">
          <v-col cols="6">
            <v-icon class="pr-3" color="#0253B3">
              mdi-hexagon-multiple-outline
            </v-icon>
            <span class="label pr-2">
              {{ $t("branch") }}
            </span>
          </v-col>
          <v-col cols="6" class="text-right">
            <span class="value">{{ getBranche }}</span>
          </v-col>
        </v-row>

        <v-row class="no-gutters">
          <v-col cols="6">
            <v-icon class="pr-3" color="#0253B3">
              mdi-domain
            </v-icon>
            <span class="label pr-2">
              {{ $t("graduation") }}
            </span>
          </v-col>
          <v-col cols="6" class="text-right">
            <span class="value">{{ candidate.training_studies }}</span>
          </v-col>
        </v-row>

        <v-row class="no-gutters">
          <v-col cols="6">
            <v-icon class="pr-3" color="#0253B3">
              mdi-school
            </v-icon>
            <span class="label pr-2">
              {{ $t("education") }}
            </span>
          </v-col>
          <v-col cols="6" class="text-right">
            <span class="value">{{ candidate.your_qualification }}</span>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-text class="job-info d-flex pb-0">
        <v-col cols="6" class="experience">
          <div class="label">{{ $t("experiences") }}</div>
          <div class="value">
            {{ candidate.working_experience }} {{ $t("years") }}
          </div>
        </v-col>
        <v-col cols="6" class="wage">
          <div class="label">{{ $t("salaryExpectation") }}</div>
          <div class="value" v-if="monthly_salary.min && monthly_salary.max">
            &euro; {{ getMoney }}
          </div>
          <div v-else>
            {{ $t("didntSet") }}
          </div>
        </v-col>
      </v-card-text>
    </div>

    <v-card-actions class="pt-0">
      <v-col cols="12" class="d-flex justify-space-between">
        <div class="star-btn mr-3" @click="handleStarIconClick">
          <v-icon
            size="25"
            :color="candidate.selection_managment ? '#27AAE1' : '#000'"
          >
            {{
              candidate.selection_managment ? "mdi-star" : "mdi-star-outline"
            }}
          </v-icon>
        </div>

        <v-btn
          color="primary"
          height="48"
          width="70%"
          class="font-weight-medium pl-4 pr-4 dark-blue"
          @click="startConversation"
          :loading="startChatLoading"
        >
          {{ $t("toContact") }}
        </v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
import { find } from "lodash";
import store from "@/store";
import types from "@/types";

export default {
  name: "SearchResultsCard",

  props: {
    candidate: {
      type: Object
    }
  },

  data() {
    return {
      startChatLoading: false,
      monthly_salary: {
        min: "",
        max: ""
      }
    };
  },

  computed: {
    highlighted() {
      return this.candidate.plan?.plan_slug === "higlighted";
    },
    getBranche() {
      const branches = [];

      if (this.candidate.branche) {
        this.candidate.branche.forEach(branchId => {
          const branchObj = types.JOB_POSITION.find(b => b.id == branchId);

          if (branchObj) {
            branches.push(branchObj[this.$i18n.locale]);
          }
        });
      }

      return branches.join();
    },
    getMoney() {
      return +this.monthly_salary.min !== +this.monthly_salary.max
        ? `${this.monthly_salary.min} - ${this.monthly_salary.max}`
        : this.monthly_salary.min;
    },
    currentPosition() {
      let obj = find(types.JOB_POSITION, (el) => {
        return el.id == parseInt(this.candidate.current_position);
      });
      return obj[this.$i18n.locale];
    }
  },

  methods: {
    startConversation() {
      if (!store.getters["user/userPlan"].length) return;
      this.startChatLoading = true;
      this.$store
        .dispatch("chat/startChat", this.candidate.id)
        .then(() => {
          this.$router.push({
            name: "CompanyMessages",
            params: {
              company: true
            }
          });
        })
        .finally(() => {
          this.startChatLoading = false;
        });
    },
    handleStarIconClick() {
      if (this.candidate.selection_managment) {
        this.$store
          .dispatch("company/slManagementDeleteCandidate", this.candidate.id)
          .then(() => {
            this.candidate.selection_managment = null;
          });
      } else {
        this.$store
          .dispatch("company/slManagementAddCandidate", {
            jobseeker_id: this.candidate.id,
            managment_status: "Saved candidates"
          })
          .then(() => {
            this.candidate.selection_managment = "Saved candidates";
          });
      }
    },
    proceedClick() {
      if (store.getters["user/userPlan"].length) {
        this.$router.push({
          name: "CompanyUserOverview",
          params: { id: this.candidate.id }
        });
      } else {
        this.$emit("block", true);
      }
    },
    getMinMax() {
      try {
        if (typeof this.candidate.monthly_salary === "string") {
          this.monthly_salary = JSON.parse(this.candidate.monthly_salary);
        } else if (
          "min" in this.candidate.monthly_salary &&
          "max" in this.candidate.monthly_salary
        ) {
          this.monthly_salary = {
            min: (+this.candidate.monthly_salary.min * 1000).toString(),
            max: (+this.candidate.monthly_salary.max * 1000).toString()
          };
        } else {
          this.monthly_salary = {
            min: "1000",
            max: (this.candidate.monthly_salary * 1000).toString()
          };
        }
      } catch (e) {
        this.monthly_salary = {
          min: "1000",
          max: (this.candidate.monthly_salary * 1000).toString()
        };
      }
    }
  },
  mounted() {
    this.getMinMax();
  }
};
</script>

<style lang="scss" scoped>
.candidate-card:not(.highlighted):hover {
  background: white !important;
}

.candidate-card.highlighted {
  border: 1px solid #27aae1;
  background: linear-gradient(
      0deg,
      rgba(39, 170, 225, 0.04),
      rgba(39, 170, 225, 0.04)
    ),
    #ffffff;
}

.candidate-details {
  .label {
    font-weight: 400;
    color: #82858c;
  }
  .value {
    font-weight: 600;
    font-size: 14px;
    color: #222222;
  }
}
.job-info {
  border-top: 1px solid #eaeaec;
}
.name {
  font-weight: bold;
  font-size: 18px;
  color: #222222;
}
.job {
  span {
    font-weight: 500;
    font-size: 14px;
    color: #222222;
  }
}
.experience {
  .value {
    font-weight: normal;
    font-size: 16px;
    color: #222222;
  }
  .label {
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    color: #0253b3;
  }
}
.actions {
  transition: background 0.3s;

  &:hover {
    background: #b2d6ec !important;
  }
}
.wage {
  .value {
    font-weight: normal;
    font-size: 16px;
    color: #222222;
  }
  .label {
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    color: #0253b3;
  }
}
.star-btn {
  width: 70px;
  min-width: 70px;
  height: 50px;
  display: flex;
  align-items: center;
  background: #e3f2fb;
  border-radius: 10px;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s background;

  &:hover {
    background: #add0e4;
  }
}
</style>
