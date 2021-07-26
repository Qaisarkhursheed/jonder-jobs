<template>
  <div class="public-profile">
    <!-- <UserNoteAdd /> -->
    <v-row class="heading mb-5">
      <v-col cols="9">
        <div class="title">Public Company Profile</div>
        <div class="subtitle">Explanation what is team managment</div>
      </v-col>
      <v-col cols="3">
        <v-btn
          color="primary"
          height="48"
          class="full-w font-weight-medium "
          @click="viewAsTab"
        >
          <template v-if="viewAs">
            Back to Edit
          </template>
          <template v-else>
            View as Jobseeker
          </template>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-card flat class="rounded-lg pt-5 pb-5" style="height: 450px">
          <v-tabs
            class="pl-8 pr-8"
            slider-color="#fff"
            vertical
            v-model="tabs.active"
          >
            <v-tab
              class="pt-7 pb-7"
              v-for="tab in tabs.options"
              :key="tab"
              slider-color="#0253B3"
            >
              {{ tab }}
            </v-tab>
          </v-tabs>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card flat class="rounded-lg">
          <v-tabs-items v-model="tabs.active">
            <v-tab-item
              :transition="false"
              v-for="item in tabs.options"
              :key="item"
            >
              <v-card flat class="pa-10">
                <template v-if="viewAs">
                  <PublicProfileViewAs :user="user" />
                </template>
                <template v-else>
                  <keep-alive>
                    <component
                      :is="tabComponents[item]"
                      @update="updateCompany"
                      :user="user"
                    >
                    </component>
                  </keep-alive>
                </template>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import store from "@/store";
import PublicProfileGeneral from "@/components/company/PublicProfileGeneral";
import PublicProfileDetails from "@/components/company/PublicProfileDetails";
import PublicProfileContact from "@/components/company/PublicProfileContact";
import PublicProfileViewAs from "@/components/company/PublicProfileViewAs";
// import UserNoteAdd from "@/components/modals/UserNoteAdd";

export default {
  name: "CompanyPublicProfile",

  components: {
    PublicProfileGeneral,
    PublicProfileDetails,
    PublicProfileContact,
    PublicProfileViewAs
    // UserNoteAdd
  },

  data() {
    return {
      tabs: {
        active: "details",
        options: ["general", "details", "contact"]
      },
      tabComponents: {
        general: PublicProfileGeneral,
        details: PublicProfileDetails,
        contact: PublicProfileContact,
        viewAs: PublicProfileViewAs
      },
      viewAs: false
    };
  },
  methods: {
    updateCompany(input) {
      store.dispatch("user/updateCompanyUser", {
        id: this.user.id,
        data: {
          ...input,
          _method: "PATCH"
        }
      });
    },
    viewAsTab() {
      this.viewAs = !this.viewAs;
    }
  },
  computed: {
    user() {
      return store.getters["user/user"];
    }
  }
};
</script>

<style lang="scss" scoped>
.heading {
  font-weight: 600;
  font-size: 32px;
  color: #222222;

  .title {
    font-weight: 600;
    font-size: 32px !important;
    color: #222222;
  }
  .subtitle {
    font-weight: normal;
    font-size: 18px;
    color: #7a7a7a;
  }
}
</style>
