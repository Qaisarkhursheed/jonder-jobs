<template>
  <v-row class="d-flex">
    <v-col cols="6">
      <v-card class="stats-card" flat>f</v-card>
    </v-col>
    <v-col cols="6">
      <v-card class="stats-card" flat>f</v-card>
    </v-col>
  </v-row>
</template>

<script>

// Statistic component is also available on dashboard

export default {
  name: 'ProfileStatistic'
};

</script>

<style lang="scss" scoped>
  .stats-card {
    height: 346px;
    width: 100%;
  }
</style>