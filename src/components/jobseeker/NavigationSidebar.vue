<template>
  <v-card flat class="navigation-sidebar" tag="nav">
    <div class="settings-title">
      {{ $t("profileSettings") }}
    </div>

    <div>
      <div
        v-for="item in items"
        :key="item.scrollId"
        @click="scrollToSection(item.scrollId)"
        class="nav-item"
      >
        {{ item.text }}
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: this.$t("personalInformation"),
          scrollId: "personalInfo"
        },
        {
          text: this.$t("positionAndIndustry"),
          scrollId: "roleAndBranche"
        },
        {
          text: this.$t("yourStatus"),
          scrollId: "status"
        },
        {
          text: this.$t("searchingFor"),
          scrollId: "lookingFor"
        },
        {
          text: this.$t("experienceAndEducation"),
          scrollId: "experienceAndEducation"
        },
        {
          text: this.$t("documents"),
          scrollId: "documents"
        },
        {
          text: this.$t("personalityTest.title"),
          scrollId: "personalityTest"
        },
        // {
        //   text: this.$t("billing"),
        //   scrollId: "paymentMethod"
        // },
        {
          text: this.$t("billingInvoices"),
          scrollId: "invoices"
        },
        {
          text: this.$t("changePassword"),
          scrollId: "changePassword"
        },
        {
          text: this.$t("upgradeAccount"),
          scrollId: "upgradeAccount"
        }
      ]
    };
  },
  methods: {
    scrollToSection(id) {
      document
        .getElementById(id)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
};
</script>

<style lang="scss">
.navigation-sidebar {
  position: sticky;
  top: 2rem;

  .settings-title {
    font-size: 32px;
    font-weight: 600;
    width: 100%;
    line-height: 38px;
    margin-bottom: 26px;
    color: #222;
    word-break: break-all;
  }

  .nav-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 0.5px solid #cacaca;
    font-weight: 500;
    font-size: 18px;
    height: auto;
    max-height: 90px;
    padding: 15px 0;
    cursor: pointer;
    color: #000;
    transition: 0.3s color, 0.3s border-color;

    &:hover {
      color: #0253b3;
      border-color: #0253b3;

      .v-icon {
        color: #0253b3 !important;
      }
    }
  }
}
</style>
