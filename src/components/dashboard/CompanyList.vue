<template>
  <v-row class="mt-2 company-list">
    <v-col cols="4" v-for="company in companyViewed" :key="company.id">
      <company-list-item :company="company" />
    </v-col>
  </v-row>
</template>

<script>
import CompanyListItem from "@/components/dashboard/CompanyListItem";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters("stats", ["companyViewed"]),
  components: { CompanyListItem }
};
</script>

<style lang="scss">
.company-list {
  font-size: 14px;

  .v-icon {
    float: left;
    color: $medium-grey;
    font-size: 18px;
    line-height: 19px;
    margin-right: 6px;
  }

  .company {
    overflow: hidden;
  }

  ul {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;

    li {
      padding: 2px 0;
      color: $medium-grey;
      @include clearfix;
    }
  }
}
</style>
