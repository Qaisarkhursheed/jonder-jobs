<template>
  <v-card
    :hover="true"
    class="candidate-card full-h pa-0 d-flex flex-column"
    :class="{ highlighted }"
    flat
  >
    <div @click="proceedClick" class="flex-grow-1 d-flex flex-column">
      <v-card-text class="d-flex align-center pa-6 pb-5">
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
              {{ idToString("JOB_POSITION", candidate.current_position) }}
            </span>
          </div>
        </div>
      </v-card-text>

      <v-card-text class="candidate-details flex-grow-1">
        <v-row class="no-gutters">
          <v-col cols="5">
            <v-icon class="pr-1" color="#0253B3">
              mdi-hexagon-multiple-outline
            </v-icon>
            <span class="label pr-1">
              {{ $t("branch") }}
            </span>
          </v-col>
          <v-col cols="col" class="text-right">
            <span class="value">
              {{ idsToArray("JOB_BRANCHE", candidate.branche).join(", ") }}
            </span>
          </v-col>
        </v-row>

        <v-row class="no-gutters">
          <v-col cols="5">
            <v-icon class="pr-1" color="#0253B3">
              mdi-domain
            </v-icon>
            <span class="label pr-1">
              {{ $t("graduation") }}
            </span>
          </v-col>
          <v-col cols="col" class="text-right">
            <span class="value">{{ candidate.training_studies }}</span>
          </v-col>
        </v-row>

        <v-row class="no-gutters">
          <v-col cols="5">
            <v-icon class="pr-1" color="#0253B3">
              mdi-school
            </v-icon>
            <span class="label pr-1">
              {{ $t("education") }}
            </span>
          </v-col>
          <v-col cols="col" class="text-right">
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
          <div class="value" v-if="candidate.monthly_salary">
            &euro;
            {{
              `${this.candidate.monthly_salary.min} - ${this.candidate.monthly_salary.max}`
            }}
          </div>
          <div v-else>
            {{ $t("didntSet") }}
          </div>
        </v-col>
      </v-card-text>
    </div>

    <v-card-actions class="pa-6 pt-2 ma-0">
      <v-row>
        <v-col cols="auto">
          <div class="star-btn" @click="handleStarIconClick">
            <v-icon
              size="25"
              :color="candidate.selection_managment ? '#27AAE1' : '#000'"
            >
              {{
                candidate.selection_managment ? "mdi-star" : "mdi-star-outline"
              }}
            </v-icon>
          </div>
        </v-col>

        <v-col cols="col">
          <v-btn
            color="primary"
            height="48"
            block
            @click="proceedClick('contact')"
            :loading="startChatLoading"
          >
            {{ $t("toContact") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
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
      return this.candidate.plan[0]?.plan_slug === "highlighted";
    }
  },

  methods: {
    startConversation() {
      if (!this.$store.getters["user/userPlan"].length) return;

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
    proceedClick(type) {
      if (this.$store.getters["user/userPlan"].length) {
        if (type == "contact") {
          this.startConversation();
        } else {
          this.$router.push({
            name: "CompanyUserOverview",
            params: { id: this.candidate.id }
          });
        }
      } else {
        this.$emit("block", true);
      }
    }
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
