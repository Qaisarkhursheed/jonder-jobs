<template>
  <div class="search-saved" @click="filterAction(actions[1])">
    <v-card class="rounded-lg pt-6 pl-6 pr-6 pb-7" flat>
      <v-row class="no-gutters">
        <v-col cols="10" md="11" xl="10" lg="9">
          <v-row class="no-gutters">
            <v-col cols="12">
              <div class="title">
                {{ filter.job_position }}
              </div>
              <div class="subtitle">
                02/07/2021
              </div>
            </v-col>
          </v-row>

          <v-row class="no-gutters">
            <v-col cols="12">
              <div class="infobar mt-3">
                <v-row>
                  <v-col cols="12" md="3">
                    <div class="section">
                      <span class="label">
                        Art der Anstellung;
                      </span>
                      <span class="value">
                        {{ filter.employment_type }}
                      </span>
                    </div>
                  </v-col>
                  <v-col cols="12" md="3">
                    <div class="section">
                      <span class="label">
                        Branche:
                      </span>
                      <span class="value">
                        {{ filter.branche }}
                      </span>
                    </div>
                  </v-col>
                  <v-col cols="12" md="3">
                    <div class="section">
                      <span class="label">
                        Gehaltsspanne
                      </span>
                      <span class="value">
                        {{ filter.min_salary }} - {{ filter.max_salary }}
                      </span>
                    </div>
                  </v-col>
                  <v-col cols="12" md="3">
                    <div class="section">
                      <span class="label">Stadt</span>
                      <span class="value">{{ filter.city }}</span>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" md="1" xl="2" lg="3">
          <v-row class="no-gutters">
            <v-col cols="4"></v-col>
            <v-col cols="5" class="result">
              <!--
                no backend support
                <div class="value">142</div>
                <div class="label">Results</div>
              -->
            </v-col>
            <v-col cols="3">
              <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on" class="menu-button">
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
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import store from "@/store";
import { forEach } from "lodash";

export default {
  name: "SearchSavedFiltersFilter",

  props: {
    filter: {
      type: Object,
    },
  },

  data() {
    return {
      actions: [
        {
          type: "delete",
          label: "Delete",
        },
        {
          type: "use",
          label: "Use filter",
        },
      ],
    };
  },

  methods: {
    filterAction(action) {
      if (action.type === "use") {
        store.dispatch("company/searchJobseekers", this.prepareData());
        this.$emit("filter-search");
      }
      if (action.type === "delete") {
        store.dispatch("company/searchFilterDelete", this.filter.id);
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
    },
  },
};
</script>

<style lang="scss" scoped>
.search-saved {
  cursor: pointer;
}
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
  display: flex;
  font-size: 13px;
  .section {
    margin-right: 2%;
  }
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
  }
  .label {
    font-weight: normal;
    //font-size: 18px;
    font-size: 15px;
    text-transform: uppercase;
  }
}
</style>
