<template>
  <div class="search-saved-filter" @click="filterAction(actions[1])">
    <v-card flat class="pb-3">
      <!-- Menu -->
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            style="position: absolute; top: 10px; right: 10px;"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in actions"
            :key="i"
            @click="filterAction(item)"
          >
            {{ item.label }}
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Header -->
      <v-row class="no-gutters mb-3">
        <v-col cols="col">
          <div class="title">
            {{ idToString("JOB_POSITION", filter.job_position) }}
          </div>
          <div class="subtitle">
            {{ filter.created_at | moment("DD/MM/YYYY") }}
          </div>
        </v-col>
      </v-row>

      <!-- Main -->
      <v-row class="no-gutters">
        <!-- Info columns -->
        <v-col cols="col">
          <v-row class="no-gutters">
            <!-- Employment type -->
            <v-col sm="4" md="3" cols="6" class="infobar">
              <div class="label">
                {{ $t("typeOfEnployment") }}
              </div>
              <div class="value">
                {{ idToString("EMPLOYEMENT_TYPE", filter.employment_type) }}
              </div>
            </v-col>

            <!-- Branche -->
            <v-col sm="4" md="3" cols="6" v-if="filter.branche" class="infobar">
              <div class="label">
                {{ $t("branch") }}
              </div>
              <div class="value">
                {{ idToString("JOB_BRANCHE", filter.branche) }}
              </div>
            </v-col>

            <!-- Salary -->
            <v-col
              sm="4"
              md="3"
              cols="6"
              v-if="filter.min_salary || filter.max_salary"
              class="infobar"
            >
              <div class="label">
                {{ $t("salaryRange") }}
              </div>
              <div class="value">
                <template v-if="filter.min_salary">
                  {{ filter.min_salary }}&euro;
                </template>
                <template v-if="filter.max_salary">
                  - {{ filter.max_salary }}&euro;
                </template>
              </div>
            </v-col>

            <!-- City -->
            <v-col sm="4" md="3" cols="6" v-if="filter.city" class="infobar">
              <div class="label">{{ $t("city") }}</div>
              <div class="value">{{ filter.city }}</div>
            </v-col>

            <!-- Working experience -->
            <v-col
              sm="4"
              md="3"
              cols="6"
              v-if="
                filter.working_experience_min != null ||
                  filter.working_experience_max != null
              "
              class="infobar"
            >
              <div class="label">{{ $t("workExperience") }}</div>
              <div class="value">
                {{ filter.working_experience_min }} -
                {{ filter.working_experience_max }} {{ $t("years") }}
              </div>
            </v-col>

            <!-- University -->
            <v-col
              sm="4"
              md="3"
              cols="6"
              v-if="filter.university_name"
              class="infobar"
            >
              <div class="label">{{ $t("schoolGraduation") }}</div>
              <div class="value">{{ filter.university_name }}</div>
            </v-col>

            <!-- Study -->
            <v-col sm="4" md="3" cols="6" v-if="filter.study" class="infobar">
              <div class="label">{{ $t("educationStudy") }}</div>
              <div class="value">{{ filter.study }}</div>
            </v-col>
          </v-row>
        </v-col>

        <!-- New results -->
        <!-- d-none: no backend support -->
        <v-col cols="auto" class="d-none result justify-items-center">
          <div class="value">142</div>
          <div class="label">Results</div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { forEach } from "lodash";

export default {
  props: {
    filter: {
      type: Object
    }
  },

  data() {
    return {
      actions: [
        {
          type: "delete",
          label: "Delete"
        },
        {
          type: "use",
          label: "Use filter"
        }
      ]
    };
  },

  methods: {
    filterAction(action) {
      if (action.type === "use") {
        this.$emit("use-filter", Object.assign({}, this.filter));

        // this.$store.dispatch("company/searchJobseekers", this.prepareData());
        // this.$emit("filter-search");
      }

      if (action.type === "delete") {
        this.$store.dispatch("company/searchFilterDelete", this.filter.id);
      }
    },
    prepareData() {
      let activatedFields = {};

      forEach(this.filter, (item, key) => {
        if (item) {
          activatedFields[key] = item;
        }
      });

      return activatedFields;
    }
  }
};
</script>

<style lang="scss">
.search-saved-filter {
  cursor: pointer;

  .title {
    font-weight: bold;
    font-size: 18px;
    color: rgba(34, 34, 34, 1);
  }

  .subtitle {
    color: rgba(34, 34, 34, 0.6);
    font-weight: normal;
    font-size: 14px;
  }

  .infobar {
    font-size: 13px;
    margin-bottom: 15px;

    .label {
      color: rgba(34, 34, 34, 0.6);
      padding-right: 5px;
    }

    .value {
      color: rgba(34, 34, 34, 1);
      font-weight: 500;
    }
  }

  .result {
    color: #0253b3;

    .value {
      font-weight: bold;
      font-size: 32px;
      line-height: 1;
    }

    .label {
      font-size: 15px;
      text-transform: uppercase;
    }
  }
}
</style>
