<template>
  <v-row class="dashboard-user-stats">
    <v-col cols="6">
      <h5 class="text-color-primary-blue-dark mb-4">Your Statistics</h5>
      <div class="user-info d-flex flex-row align-center">
        <v-card flat class="flex-grow-1 flex-shrink-1 border-right-gray rounded-r-0 rounded-l-lg">
          <v-card-title class="pb-1"><h2 class="text-color-primary-blue-dark">41</h2></v-card-title>
          <v-card-text>Search<br />appearances</v-card-text>
        </v-card>
        <v-card flat class="flex-grow-1 flex-shrink-1 border-right-gray rounded-0">
          <v-card-title class="pb-1"><h2 class="text-color-primary-blue-dark">5</h2></v-card-title>
          <v-card-text>Messaged<br />you</v-card-text>
        </v-card>
        <v-card flat class="flex-grow-1 flex-shrink-1 border-right-blue-dark-thick rounded-l-0 rounded-r-lg">
          <v-card-title class="pb-1"><h2 class="text-color-primary-blue-dark">16</h2></v-card-title>
          <v-card-text>Who viewed<br />your profile</v-card-text>
        </v-card>
      </div>

      <v-card flat class="rounded-lg mt-7">
        <v-card-text class="d-flex flex-row align-center">
          <v-avatar
            color="primary"
            size="38"
            class="flex-grow-0 flex-shrink-0"
          >
            <span class="white--text headline">XY</span>
          </v-avatar>

          <span class="flex-grow-1 flex-shrink-1 pl-4 pr-4 text-medium">Company XY</span>

          <a class="flex-grow-0 flex-shrink-0">See more</a>
        </v-card-text>
      </v-card>

      <v-card flat class="rounded-lg mt-2">
        <v-card-text class="d-flex flex-row align-center">
          <v-avatar
            color="primary"
            size="38"
            class="flex-grow-0 flex-shrink-0"
          >
            <span class="white--text headline">XY</span>
          </v-avatar>

          <span class="flex-grow-1 flex-shrink-1 pl-4 pr-4 text-medium">Company XY</span>

          <a class="flex-grow-0 flex-shrink-0">See more</a>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="6">
      <v-card flat color="#E3F2FB" class="text-weight-bold rounded-lg" rounded="10px">
        <v-card-title>
          <h5 class="text-color-primary-blue-dark">Be featured on search</h5>
        </v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu imperdiet amet quam nec. Porta facilisi in vitae at nibh tincidunt. Gravida donec laoreet cras mauris, aenean et viverra. Felis.</v-card-text>
        <v-card-actions>
          <v-container>
            <v-row>
              <v-col cols="6">
                <button class="button dark-blue outline full-w pt-2 pb-2">For one day</button>
              </v-col>
              <v-col cols="6">
                <button class="button dark-blue fill full-w pt-2 pb-2">For two days</button>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <button class="button dark-blue outline full-w pt-2 pb-2">Buy</button>
              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.dashboard-user-stats {
  margin-top: 20px;
}
</style>