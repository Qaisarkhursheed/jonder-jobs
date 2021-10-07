<template>
  <v-row class="dashboard-user-stats">
    <v-col cols="6">
      <h5 class="text-color-primary-blue-dark mb-4">
        {{ $t('yourStatistics') }}
      </h5>
      <div class="user-info d-flex flex-row align-center">
        <v-card
          flat
          class="flex-grow-1 flex-shrink-1 border-right-gray rounded-r-0 rounded-l-lg"
        >
          <v-card-title class="pb-1"
            ><h2 class="text-color-primary-blue-dark">
              {{ userStats.search_display }}
            </h2></v-card-title
          >
          <v-card-text>
            {{ $t('searchAppearances') }}
          </v-card-text>
        </v-card>
        <v-card
          flat
          class="flex-grow-1 flex-shrink-1 border-right-gray rounded-0"
        >
          <v-card-title class="pb-1"
            ><h2 class="text-color-primary-blue-dark">
              {{ userStats.messaged_you }}
            </h2></v-card-title
          >
          <v-card-text>
            {{ $t('messagedYou') }}
          </v-card-text>
        </v-card>
        <v-card
          flat
          class="flex-grow-1 flex-shrink-1 border-right-blue-dark-thick rounded-l-0 rounded-r-lg"
        >
          <v-card-title class="pb-1"
            ><h2 class="text-color-primary-blue-dark">
              {{ userStats.profile_views }}
            </h2></v-card-title
          >
          <v-card-text>
            {{ $t('whoViewedProfile') }}
          </v-card-text>
        </v-card>
      </div>

      <template v-if="companyViewed">
        <v-card
          flat
          class="rounded-lg mt-7"
          v-for="company in companyViewed"
          :key="company.id"
        >
          <v-card-text class="d-flex flex-row align-center">
            <v-avatar
              color="primary"
              size="38"
              class="flex-grow-0 flex-shrink-0"
            ></v-avatar>

            <span class="flex-grow-1 flex-shrink-1 pl-4 pr-4 text-medium">{{
              company.company
            }}</span>

            <a class="flex-grow-0 flex-shrink-0">
              {{ $t('seeMore') }}
            </a>
          </v-card-text>
        </v-card>
      </template>
    </v-col>

    <v-col cols="6">
      <v-card
        flat
        color="#E3F2FB"
        class="text-weight-bold rounded-lg"
        rounded="10px"
      >
        <v-card-title>
          <h5 class="text-color-primary-blue-dark">
            {{ $t('beFeaturedOnSearch') }}
          </h5>
        </v-card-title>
        <v-card-text
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu imperdiet
          amet quam nec. Porta facilisi in vitae at nibh tincidunt. Gravida
          donec laoreet cras mauris, aenean et viverra. Felis.</v-card-text
        >
        <v-card-actions>
          <v-container>
            <v-row>
              <v-col cols="6">
                <button class="button dark-blue outline full-w pt-2 pb-2">
                  {{ $t('forOneDay') }}
                </button>
              </v-col>
              <v-col cols="6">
                <button class="button dark-blue fill full-w pt-2 pb-2">
                  {{ $t('forTwoDays') }}
                </button>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <button class="button dark-blue outline full-w pt-2 pb-2">
                  {{ $t('buy') }}
                </button>
              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters("stats", ["userStats", "companyViewed"])
};
</script>

<style lang="scss" scoped>
.dashboard-user-stats {
  margin-top: 20px;
}
</style>
