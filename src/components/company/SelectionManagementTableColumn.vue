<template>
  <div class="selection-management-table-column">
    <div
      class="column-header d-flex justify-space-between align-center 
                pt-6 pb-6 pl-6 pr-3"
    >
      <div class="label">
        {{ type }}
      </div>
      <div class="count d-flex justify-center align-center">
        {{ selection.length }}
      </div>
    </div>
    <draggable
      class="list-group pl-6 pr-6 pt-6"
      :list="selection"
      group="people"
      @change="add($event)"
    >
      <div
        class="column-group-item d-flex pa-4 
                 mb-3 full-h align-center justify-start"
        v-for="item in selection"
        :key="item.id"
        @click="
          $router.push({
            name: 'CompanyUser',
            params: { id: item.jobseeker.id, type: 'selection' },
          })
        "
      >
        <v-avatar color="#f1f1f1" size="32" class="user-avatar mr-3">
          <v-icon class="camera-icon">
            mdi-account
          </v-icon>
        </v-avatar>
        {{ item.jobseeker.first_name }} {{ item.jobseeker.last_name }}
      </div>
    </draggable>
  </div>
</template>

<script>
import store from "@/store";
import draggable from "vuedraggable";

export default {
  name: "SelectionmManagementTableColumn",

  props: {
    selection: {
      type: [Array, Object],
    },
    type: {
      type: String,
    },
  },
  order: 1,
  components: {
    draggable,
  },
  methods: {
    add(item) {
      if (item.added) {
        store.dispatch("company/slManagementMoveCandidate", {
          id: item.added.element.id,
          data: {
            managment_status: this.type,
          },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.selection-management-table-column {
  border: 1px solid #e1e1e1;
  border-right: 0;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.01);
}
.column-header {
  background: #ffffff;
  border-bottom: 1px solid #e1e1e1;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.01);

  &:last-child {
    border-right: 1px solid #e1e1e1;
  }

  .label {
    font-weight: 500;
    font-size: 14px;
    color: #000000;
  }

  .count {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #27aae1;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
  }
}
.list-group {
  min-height: 600px;
}
.column-group-item {
  cursor: pointer;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 151px;

  &:active {
    border-color: #27aae1;
  }
}
</style>
