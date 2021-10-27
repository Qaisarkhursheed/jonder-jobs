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
import i18n from "@/locales";

export default {
  computed: {
    items() {
      return [
        {
          text: i18n.t("personalInformation"),
          scrollId: "personalInfo"
        },
        {
          text: i18n.t("positionAndIndustry"),
          scrollId: "roleAndBranche"
        },
        {
          text: i18n.t("yourStatus"),
          scrollId: "status"
        },
        {
          text: i18n.t("searchingFor"),
          scrollId: "lookingFor"
        },
        {
          text: i18n.t("experienceAndEducation"),
          scrollId: "experienceAndEducation"
        },
        {
          text: i18n.t("documents"),
          scrollId: "documents"
        },
        {
          text: i18n.t("personalityTest.title"),
          scrollId: "personalityTest"
        },
        // {
        //   text: this.$t("billing"),
        //   scrollId: "paymentMethod"
        // },
        {
          text: i18n.t("billingInvoices"),
          scrollId: "invoices"
        },
        {
          text: i18n.t("changePassword"),
          scrollId: "changePassword"
        },
        {
          text: i18n.t("upgradeAccount"),
          scrollId: "upgradeAccount"
        }
      ];
    }
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
