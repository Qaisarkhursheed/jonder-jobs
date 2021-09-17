<template>
  <div class="public-profile">
    <!-- Header -->
    <v-row class="page-heading">
      <v-col cols="col">
        <div class="title">{{ $t("publicCompanyProfile") }}</div>
        <div class="subtitle">
          {{ $t("publicProfileSub") }}
        </div>
      </v-col>

      <v-col cols="auto">
        <v-btn color="primary" height="48" @click="viewAsTab">
          <template v-if="viewAs">
            {{ $t("backToEdit") }}
          </template>
          <template v-else>
            {{ $t("viewAsJobseeker") }}
          </template>
        </v-btn>
      </v-col>
    </v-row>

    <!-- Content -->
    <v-row>
      <!-- Sidebar -->
      <v-col cols="auto">
        <v-card flat class="public-profile-sidebar">
          <v-tabs
            class="px-5"
            slider-color="#fff"
            vertical
            v-model="tabs.active"
          >
            <v-tab
              class="pl-1 py-5"
              v-for="tab in tabs.options"
              :key="tab"
              :disabled="viewAs"
              slider-color="#0253B3"
            >
              <span>{{ $t(tab) }}</span>
              <span class="arrow">&gt;</span>
            </v-tab>
          </v-tabs>
        </v-card>
      </v-col>

      <!-- Profile -->
      <v-col cols="col">
        <v-card flat class="py-8 px-5 px-md-10">
          <v-tabs-items v-model="tabs.active">
            <v-tab-item
              :transition="false"
              v-for="item in tabs.options"
              :key="item.key"
            >
              <template v-if="viewAs">
                <PublicProfileViewAs :user="user" />
              </template>
              <template v-else>
                <keep-alive>
                  <component
                    :is="tabComponents[item]"
                    @update="handleUpdate"
                    :user="user"
                  >
                  </component>
                </keep-alive>
              </template>
            </v-tab-item>
          </v-tabs-items>
        </v-card>

        <ResponseAlert class="mt-3" :response="formResponse" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PublicProfileGeneral from "@/components/company/PublicProfile/PublicProfileGeneral";
import PublicProfileDetails from "@/components/company/PublicProfile/PublicProfileDetails";
import PublicProfileContact from "@/components/company/PublicProfile/PublicProfileContact";
import PublicProfileViewAs from "@/components/company/PublicProfile/PublicProfileViewAs";

export default {
  components: {
    PublicProfileGeneral,
    PublicProfileDetails,
    PublicProfileContact,
    PublicProfileViewAs
  },

  data() {
    return {
      formResponse: {},
      tabs: {
        active: "generalInfo",
        options: ["generalInfo", "companyDetails", "contact"]
      },
      tabComponents: {
        generalInfo: PublicProfileGeneral,
        companyDetails: PublicProfileDetails,
        contact: PublicProfileContact,
        viewAs: PublicProfileViewAs
      },
      viewAs: false
    };
  },

  computed: {
    user() {
      return this.$store.getters["user/user"];
    }
  },

  methods: {
    viewAsTab() {
      this.viewAs = !this.viewAs;
    },
    handleUpdate(input) {
      this.$store
        .dispatch("user/updateCompany", input)
        .then(() => {
          this.formResponse = { success: true, message: this.$t("success") };
        })
        .catch(err => {
          this.formResponse = err.data;
        })
        .finally(() => {
          setTimeout(() => {
            this.formResponse = {};
          }, 3000);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.public-profile-sidebar {
  position: sticky;
  top: 0px;

  .v-tab {
    min-width: 300px;
    font-size: 18px;
    height: unset;
    border-bottom: 0.5px solid #cacaca;
    text-transform: unset;
    letter-spacing: unset;
    justify-content: space-between;

    // &.v-tab--active {
    //   border-color: #0253b3;
    // }

    &:last-of-type {
      border: none;
    }

    &:not(&.v-tab--active) {
      color: black;
    }
  }
}
</style>
