<template>
  <div class="selection-management-table-list full-h">
    <v-dialog
      v-model="upgradeModal"
      style="z-index: 2222"
      width="100%"
      height="100%"
      overlay-color="#0253B3"
      overlay-opacity="0.3"
      content-class="elevation-0"
    >
      <CompanyPlans class="pa-3" />
    </v-dialog>

    <div class="list-wrapper full-h">
      <v-row
        class="smt-list hover-pointer ma-0 pa-3"
        :style="{ minWidth: '800px' }"
        v-for="(item, index) in selection"
        :key="index"
        @click="updateActiveProfile(item.jobseeker.id)"
      >
        <!-- <v-col cols="auto" class="d-flex align-center full-h" @click.stop>
          <v-checkbox
            v-model="selectionCheckers[item.id]"
            dense
            hide-details
            class="ma-0 pa-0"
          />
        </v-col> -->

        <v-col cols="auto" class="d-flex align-center full-h">
          <v-avatar color="primary" size="35">
            <v-img
              v-if="item.jobseeker.profile_img"
              :src="item.jobseeker.profile_img"
            ></v-img>
            <small v-else class="white--text">
              {{ item.jobseeker | initials }}
            </small>
          </v-avatar>
        </v-col>

        <v-col class="d-flex align-center full-h">
          <span>{{ item.jobseeker | fullname }}</span>
        </v-col>

        <v-col cols="4" class="d-flex align-center pa-0" @click.stop>
          <v-select
            :attach="true"
            :items="getSelectionOptions"
            :value="item.managment_status"
            dense
            @change="updateJobseeker($event, item.id)"
            outlined
            append-icon="mdi-chevron-down"
            hide-details
          >
            <template v-slot:selection="{ item }"> {{ $t(item) }}</template>
            <template v-slot:item="{ item }">
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t(item) }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
          </v-select>
        </v-col>

        <v-col cols="col" class="d-flex align-center full-h justify-end">
          <v-btn
            @click.stop="startConversation(item.jobseeker.id)"
            :loading="startChatLoading == item.jobseeker.id"
            icon
            color="primary"
          >
            <v-icon>mdi-email</v-icon>
          </v-btn>

          <SelectionManagementRemoveUser :user="item.jobseeker" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import types from "@/types";
import CompanyPlans from "@/components/plans/CompanyPlans";
import SelectionManagementRemoveUser from "@/components/company/selection-management/SelectionManagementRemoveUser";

export default {
  components: { CompanyPlans, SelectionManagementRemoveUser },

  props: {
    selection: {
      type: Array
    }
  },

  data() {
    return {
      selectionCheckers: {},
      startChatLoading: false,
      deleteLoading: false,
      upgradeModal: false
    };
  },

  computed: {
    getSelectionOptions() {
      return types.SELECTION_MANAGEMENT_STATUS;
    }
  },

  methods: {
    updateJobseeker(change, id) {
      this.$store.dispatch("company/slManagementMoveCandidate", {
        id,
        data: {
          managment_status: change
        }
      });
    },
    updateActiveProfile(id) {
      if (!this.$store.getters["user/userPlan"].length) {
        this.upgradeModal = true;
        return;
      } else {
        this.$router.push({
          name: "EmployerUserOverview",
          params: { id, type: "selection" }
        });
      }
    },
    startConversation(id) {
      if (!this.$store.getters["user/userPlan"].length) {
        this.upgradeModal = true;
        return;
      }

      this.startChatLoading = id;
      this.$store
        .dispatch("chat/startChat", id)
        .then(() => {
          this.$router.push({
            name: "EmployerMessages",
            params: {
              company: true
            }
          });
        })
        .finally(() => {
          this.startChatLoading = false;
        });
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

  &:last-of-type {
    border-bottom: none;
  }

  &.active {
    background-color: rgba(39, 170, 225, 0.11);
  }

  .smt-select {
    max-width: 207px;
  }
}
</style>
