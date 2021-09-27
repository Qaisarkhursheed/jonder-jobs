<template>
  <div class="user-overview-general">
    <v-row class="no-gutters">
      <v-col cols="12" md="7" class="left px-10 pt-7 pb-10">
        <!-- status of candidate -->
        <div class="status-of-candidate" v-if="userManagementData">
          <div class="status-title">{{ $t("statusOfCandidate") }}</div>
          <div class="status-selection">
            <v-select
              class="d-flex align-center"
              :items="getSelectionOptions"
              :value="user.selection_managment"
              dense
              :height="40"
              @change="updateJobseeker($event)"
              outlined
              append-icon="mdi-chevron-down"
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
        </div>
        <!-- Experience -->
        <div class="section experience">
          <div class="title">{{ $t("experiences") }}</div>
          <div class="content">
            <div
              v-for="data in experience"
              :key="data.company"
              class="item pb-5 pt-5"
            >
              <div class="title">{{ data.company_name }}</div>
              <div class="subtitle">{{ data.position }}</div>
              <div class="subtitle">
                {{ data.start_time | moment("MMMM YYYY") }} -
                <template
                  v-if="
                    data.end_time &&
                      new Date(data.end_time).getTime() <= new Date().getTime()
                  "
                >
                  {{ data.end_time | moment("MMMM YYYY") }}
                </template>
                <template v-else>{{ $t("present") }}</template>
              </div>
              <div class="description mt-2">
                <ul>
                  <li>{{ data.description }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="section experience mt-7">
          <div class="title">{{ $t("educationStudy") }}</div>
          <div class="content">
            <div
              v-for="data in education"
              :key="data.company"
              class="item pb-5 pt-5"
            >
              <div class="title">{{ data.university_name }}</div>
              <div class="subtitle">{{ data.study }}</div>
              <div class="subtitle">
                {{ data.start_time | moment("MMMM YYYY") }} -
                <template
                  v-if="
                    data.end_time &&
                      new Date(data.end_time).getTime() <= new Date().getTime()
                  "
                >
                  {{ data.end_time | moment("MMMM YYYY") }}
                </template>
                <template v-else>{{ $t("present") }}</template>
              </div>
            </div>
          </div>
        </div>
      </v-col>

      <!-- Right col -->
      <v-col cols="12" md="5" class="right px-10 pt-8">
        <div class="d-flex justify-space-between mb-7">
          <div class="section">
            <div class="title">
              {{ $t("searchStatus") }}
            </div>
            <div class="content" v-if="!user.job_status">
              Unemployed
            </div>
            <div class="content" v-else>
              {{ user.job_status }}
            </div>
          </div>
          <div class="section">
            <div class="title">
              {{ $t("position") }}
            </div>
            <div class="content">
              {{ user.current_position }}
            </div>
          </div>
        </div>

        <div class="section mb-7 branche-section">
          <div class="title">{{ $t("currentIndustry") }}</div>
          <div class="content" v-if="user.branche">
            {{getBranche}}
          </div>
        </div>

        <div class="section mb-7" v-if="user.location_show">
          <div class="title">{{ $t("cityAndAddress") }}</div>
          <div class="content">{{ user.city }} {{ user.address }}</div>
        </div>

        <div class="section mb-7 documents-section">
          <div class="title">
            {{ $t("documents").toUpperCase() }} &amp;
            {{ $t("certificates").toUpperCase() }}
          </div>
          <div class="content mt-2">
            <v-row
              v-for="(document, index) in documents"
              class="file"
              :key="index"
            >
              <v-col cols="auto">
                <a :href="document.link" target="_blank">
                  <img :src="require('@/assets/svg/pdf.svg')" />
                </a>
              </v-col>
              <v-col cols="col" class="my-auto font-weight-bold">
                {{ $t(document.type) }}
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { filter, map, find } from "lodash";
import types from "@/types";

export default {
  props: {
    user: {
      type: Object
    }
  },

  data() {
    return {
      experience: [],
      education: [],
      userManagementData: null
    };
  },

  computed: {
    documents() {
      const docs = [];

      ["cv", "qualifications", "resume"].forEach(key => {
        if (this.user[key]) {
          docs.push({
            type: key,
            link: this.user[key]
          });
        }
      });

      return docs;
    },
    getSelectionOptions() {
      return types.SELECTION_MANAGEMENT_STATUS;
    },
    getBranche() {
      const stringToArray = map(this.user.branche, item => {
        let el =  find(types.JOB_BRANCHE, { id: parseInt(item) })
        return el[this.$i18n.locale];
      });
      return stringToArray.join();
    }
  },

  created() {
    this.getExperience();
    this.getEducation();
    this.getManagementSelection();
  },

  methods: {
    getExperience() {
      this.$http
        .get(
          `${process.env.VUE_APP_API_BASE}/jobseeker-experience?per_page=9999`
        )
        .then(res => {
          let response = res.data.data.map(obj => {
            return obj;
          });
          for (let i = 0; i < response.length; i++) {
            if (res.data.data[i].user_id === this.user.id) {
              this.experience.push(res.data.data[i]);
            }
          }
        })
        .catch(error => {
          alert(error);
        });
    },
    getEducation() {
      this.$http
        .get(
          `${process.env.VUE_APP_API_BASE}/jobseeker-education?per_page=9999`
        )
        .then(res => {
          let response = res.data.data.map(obj => {
            return obj;
          });
          for (let i = 0; i < response.length; i++) {
            if (res.data.data[i].user_id === this.user.id) {
              this.education.push(res.data.data[i]);
              console.log(this.education);
            }
          }
        })
        .catch(error => {
          alert(error);
        });
    },
    getManagementSelection() {
      const usersList = this.$store.getters["company/selectionManagement"](
        "list"
      );
      this.userManagementData = filter(
        usersList,
        user => user.jobseeker.id === this.user.id
      )[0];
    },
    updateJobseeker(change) {
      this.$store.dispatch("company/slManagementMoveCandidate", {
        id: this.userManagementData.id,
        data: {
          managment_status: change
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.section {
  & > .title {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px !important;
    color: #0253b3;
  }
  .content {
    font-weight: normal;
    font-size: 16px;
    color: #222222;
  }
}
.status-of-candidate {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 48px;
  > div:nth-child(2) {
    height: 100% !important;
    max-width: 300px;
  }
}
.description {
  color: #222;
  font-size: 14px;
  font-weight: 400;
}
.experience {
  .item {
    &:first-of-type {
      padding-top: 0 !important;
    }

    border-bottom: 0.5px solid #e9e9e9;

    .title {
      font-weight: 600;
      font-size: 14px !important;
      line-height: 1.5;
      color: #000000;
    }
    .subtitle {
      font-weight: normal;
      line-height: 1.2;
      font-size: 13px !important;
      color: rgba(0, 0, 0, 0.7);
    }
    .subtitle {
      margin-top: 3px;
    }
  }
}

.right {
  border-left: 1px solid #e9e9e9;
}

.file {
  border-bottom: 0.5px solid #e9e9e9;

  &:last-child {
    border: none;
  }
}

.branche-section .content {
  span:last-child .zarez {
    display: none;
  }
}
</style>
