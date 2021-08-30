<template>
  <v-card
    :hover="true"
    class="candidate-card rounded-lg"
    :class="{ highlighted }"
    flat
  >
    <div
      @click="
        $router.push({ name: 'CompanyUser', params: { id: candidate.id } })
      "
    >
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
              {{ candidate.current_position }}
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
              {{ $t("company.search.branch") }}
            </span>
          </v-col>
          <v-col cols="6" class="text-right">
            <span class="value">{{ candidate.branche }}</span>
          </v-col>
        </v-row>

        <v-row class="no-gutters">
          <v-col cols="6">
            <v-icon class="pr-3" color="#0253B3">
              mdi-domain
            </v-icon>
            <span class="label pr-2">
              {{ $t("company.search.graduation") }}
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
              {{ $t("company.search.education") }}
            </span>
          </v-col>
          <v-col cols="6" class="text-right">
            <span class="value">{{ candidate.your_qualification }}</span>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-text class="job-info d-flex pb-0">
        <v-col cols="6" class="experience">
          <div class="label">Erfahrung</div>
          <div class="value">
            {{ candidate.working_experience }}
          </div>
        </v-col>
        <v-col cols="6" class="wage">
          <div class="label">GEHALTSERWARTUNG</div>
          <div class="value">
            {{ candidate.monthly_salary }}
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
          class="font-weight-medium pl-4 pr-4"
          @click="startConversation"
          :loading="startChatLoading"
        >
          Kontaktieren
        </v-btn>
      </v-col>
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
      startChatLoading: false
    };
  },

  computed: {
    highlighted() {
      return this.candidate.plan?.plan_slug == "higlighted";
    }
  },

  methods: {
    startConversation() {
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
            this.candidate.selection_managment = false;
          });
      } else {
        this.$store
          .dispatch("company/slManagementAddCandidate", {
            jobseeker_id: this.candidate.id,
            managment_status: "Saved candidates"
          })
          .then(() => {
            this.candidate.selection_managment = true;
          });
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
