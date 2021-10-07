<template>
  <v-row class="dashboard-user-headline">
    <v-col cols="6">
      <div class="user-info d-flex flex-row align-center">
        <div class="user-details flex-grow-1 flex-shrink-1">
          {{ $t('hello') }},
          <strong>{{ getUserFullName }}</strong>
        </div>
        <div class="image flex-grow-0 flex-shrink-0">
          <v-img :src="require('@/assets/icons/equal-rights.svg')"></v-img>
        </div>
      </div>
    </v-col>
    <v-col cols="6">
      <v-card elevation="0" class="text-weight-bold">
        <v-card-text>
          <span class="text-weight-bold">
            {{ $t('myStatus') }}
          </span>
          <span
            class="text-weight-bold text-color-primary-blue-dark float-right"
          >
            {{ isUserEmployed ? "Employed" : "Unemployed" }}
          </span>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("user", ["getUserFullName", "isUserEmployed"])
  }
};
</script>

<style lang="scss" scoped>
.dashboard-user-headline {
  .user-details {
    font-size: 15px;
    line-height: 20px;

    strong {
      display: block;
      font-size: 16px;
      line-height: 21px;
      font-weight: 700;
      color: $primary-blue-dark;
    }
  }
}
</style>
