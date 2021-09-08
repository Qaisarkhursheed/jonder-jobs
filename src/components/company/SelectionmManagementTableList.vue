<template>
  <v-container class="selection-management-table-list d-flex">
    <v-dialog
      v-model="upgradeModal"
      @click:outside="upgradeModal = false"
      persistent
      style="z-index: 2222"
      width="100%"
      height="100%"
      overlay-color="#0253B3"
      overlay-opacity="0.3"
      content-class="elevation-0"
    >
      <CompanyPlans class="pa-3" />
    </v-dialog>

    <v-row>
      <v-col
        class="list-wrapper col-12"
        :class="{ 'active-profile col-lg-4': activeProfile }"
      >
        <v-container>
          <v-row
            class="smt-list hover-pointer"
            :class="{ active: activeProfile === item.jobseeker.id }"
            :style="[!activeProfile ? { minWidth: '800px' } : null]"
            v-for="(item, index) in selection"
            :key="index"
            @click="updateActiveProfile(item.jobseeker.id)"
          >
            <v-col
              cols="auto"
              class="d-flex align-center full-h"
              @click.stop
              v-if="!activeProfile"
            >
              <v-checkbox v-model="selectionCheckers[item.id]" dense />
            </v-col>

            <v-col cols="auto" class="d-flex align-center full-h">
              <v-avatar>
                <v-img
                  :src="item.jobseeker.profile_img"
                  max-height="32"
                  max-width="32"
                ></v-img>
              </v-avatar>
            </v-col>

            <v-col
              :cols="activeProfile ? 8 : 3"
              class="d-flex align-center full-h"
            >
              <span>{{ fetFirsLastName(item.jobseeker) }}</span>
            </v-col>

            <v-col
              cols="3"
              class="d-flex align-center"
              @click.stop
              v-if="!activeProfile"
            >
              <v-select
                class="d-flex align-center"
                :items="getSelectionOptions"
                :value="item.managment_status"
                dense
                @change="updateJobseeker($event, item.id)"
                outlined
              ></v-select>
            </v-col>

            <v-col
              cols="col"
              class="d-flex align-center full-h justify-end"
              v-if="!activeProfile"
            >
              <v-btn
                @click.stop="startConversation(item.jobseeker.id)"
                :loading="startChatLoading == item.jobseeker.id"
                icon
                color="primary"
              >
                <v-icon>mdi-email</v-icon>
              </v-btn>
              <v-btn
                @click.stop="deleteCandidate(item.jobseeker.id)"
                :loading="deleteLoading == item.jobseeker.id"
                icon
                color="primary"
                class="ml-3"
              >
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col
        class="list-profile col-12 col-md-6"
        :class="{ 'active-profile col-lg-8 pt-lg-0': activeProfile }"
        v-if="activeProfile"
      >
        <UserOverview :id="activeProfile" :called-from-list="true" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import types from "../../types";
import UserOverview from "./UserOverview";
import CompanyPlans from "@/components/plans/CompanyPlans";

export default {
  name: "SelectionmManagementTableList",
  components: { UserOverview, CompanyPlans },
  props: {
    selection: {
      type: Array
    }
  },
  data() {
    return {
      selectionCheckers: {},
      activeProfile: null,
      startChatLoading: false,
      deleteLoading: false,
      upgradeModal: false
    };
  },
  methods: {
    fetFirsLastName(data) {
      return `${data.first_name} ${data.last_name}`;
    },
    updateJobseeker(change, id) {
      this.$store.dispatch("company/slManagementMoveCandidate", {
        id,
        data: {
          managment_status: change
        }
      });
    },
    updateActiveProfile(id) {
      if (this.$store.getters["user/userPlan"]) {
        this.activeProfile = this.activeProfile === id ? null : id;
      } else {
        this.upgradeModal = true;
      }
    },
    startConversation(id) {
      if (!this.$store.getters["user/userPlan"]) {
        this.upgradeModal = true;
        return;
      }

      this.startChatLoading = id;
      this.$store
        .dispatch("chat/startChat", id)
        .then(() => {
          this.$router.push({
            name: "CompanyMessages",
            params: {
              company: true
            }
          });
        })
        .finally(() => {
          this.startChatLoading = false;
        });
    },
    deleteCandidate(id) {
      this.deleteLoading = id;
      this.$store
        .dispatch("company/slManagementDeleteCandidate", id)
        .then(() => {
          this.$store.dispatch("company/slManagementGetAll");
        })
        .finally(() => {
          this.deleteLoading = false;
        });
    }
  },
  computed: {
    getSelectionOptions() {
      return types.SELECTION_MANAGEMENT_STATUS;
    }
  }
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  background: #fff;
  border: 1px solid #e6e7e9;
  border-radius: 8px;
  overflow: auto;
}

.smt-list {
  border-bottom: 1px solid #e6e7e9;
  height: 64px;
  padding: 0 24px;

  &.active {
    background-color: rgba(39, 170, 225, 0.11);
  }

  .smt-select {
    max-width: 207px;
  }
}
</style>
