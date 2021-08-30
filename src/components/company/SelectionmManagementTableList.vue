<template>
  <div class="selection-management-table-list d-flex">
    <div class="list-wrapper" :class="{ 'active-profile': activeProfile }">
      <v-container >
        <v-row
          class="smt-list"
          :class="{ active: activeProfile === item.jobseeker.id }"
          :style="[!activeProfile ? { minWidth: '800px' } : null]"
          v-for="(item, index) in selection"
          :key="index"
          @click="updateActiveProfile(item.jobseeker.id)"
        >
          <v-col
            cols="1"
            class="d-flex align-center full-h"
            @click.stop
            v-if="!activeProfile"
          >
            <v-checkbox v-model="selectionCheckers[item.id]" dense />
          </v-col>
          <v-col
            :cols="activeProfile ? 4 : 1"
            class="d-flex align-center full-h"
          >
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
          <v-col cols="2" v-show="!activeProfile"></v-col>
          <v-col
            cols="1"
            class="d-flex align-center full-h justify-end"
            v-if="!activeProfile"
          >
            <em class="letter d-inline-block"></em>
          </v-col>
          <v-col
            cols="1"
            class="d-flex align-center full-h justify-end"
            @click.stop
            v-if="!activeProfile"
          >
            <em
              class="trash d-inline-block"
              @click="deleteCandidate(item.jobseeker.id)"
            ></em>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="list-profile" v-if="activeProfile">
      <UserOverview :id="activeProfile" :called-from-list="true" />
    </div>
  </div>
</template>

<script>
import types from "../../types";
import UserOverview from "./UserOverview";

export default {
  name: "SelectionmManagementTableList",
  components: { UserOverview },
  props: {
    selection: {
      type: Array
    }
  },
  data() {
    return {
      selectionCheckers: {},
      activeProfile: null
    };
  },
  methods: {
    fetFirsLastName(data) {
      return `${data.first_name} ${data.last_name}`;
    },
    updateJobseeker(change, id) {
      console.log("updateJobseeker", change, id);
      this.$store.dispatch("company/slManagementMoveCandidate", {
        id,
        data: {
          managment_status: change
        }
      });
    },
    updateActiveProfile(id) {
      this.activeProfile = this.activeProfile === id ? null : id;
    },
    deleteCandidate(id) {
      this.$store
        .dispatch("company/slManagementDeleteCandidate", id)
        .then(() => {
          this.$store.dispatch("company/slManagementGetAll");
        });
    }
  },
  computed: {
    getSelectionOptions() {
      console.log(
        "SELECTION_MANAGEMENT_STATUS",
        types.SELECTION_MANAGEMENT_STATUS
      );
      return types.SELECTION_MANAGEMENT_STATUS;
    }
  }
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  border: 1px solid #e6e7e9;
  border-radius: 8px;
  overflow: auto;
  width: 100%;
  &.active-profile {
    margin-right: 24px;
    width: 329px;
  }
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
  .letter {
    background-image: url("../../assets/letter.png");
    cursor: pointer;
    height: 12px;
    width: 16px;
  }
  .trash {
    background-image: url("../../assets/trash.png");
    cursor: pointer;
    height: 16px;
    margin-left: 24px;
    width: 14px;
  }
}
.list-profile {
  width: calc(100% - 353px);
}
</style>
