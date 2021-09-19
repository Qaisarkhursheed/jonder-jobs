<template>
  <div class="company-selection-management">
    <div class="selection-mgmt-header">
      <div class="search-bar-wrapper">
        <em class="icon"></em>
        <input type="text" v-model="searchValue" :placeholder="$t('search')" />
      </div>

      <div class="view-wrapper hover-pointer">
        <div
          class="list-view"
          :class="{ active: activeView === 'list' }"
          @click="toggleView('list')"
        >
          <ListView :color="activeView === 'list' ? '#fff' : '#000'" />
        </div>
        <div
          class="col-view"
          :class="{ active: activeView === 'col' }"
          @click="toggleView('col')"
        >
          <ColView :color="activeView === 'col' ? '#fff' : '#000'" />
        </div>
      </div>
    </div>

    <div class="selection-mgmt-body">
      <component
        v-if="$store.getters['company/selectionManagement']"
        :is="component"
        :selection="getSelection"
      ></component>
    </div>
  </div>
</template>

<script>
import SelectionManagementTable from "@/components/company/selection-management/SelectionManagementTable";
import SelectionManagementTableList from "@/components/company/selection-management/SelectionManagementTableList";
import ColView from "@/svgs/ColView";
import ListView from "@/svgs/ListView";

export default {
  components: {
    ListView,
    ColView,
    SelectionManagementTable,
    SelectionManagementTableList
  },

  data() {
    return {
      component: "SelectionManagementTableList",
      activeView: "list",
      searchValue: ""
    };
  },

  computed: {
    getSelection() {
      return this.$store.getters["company/selectionManagement"](
        this.activeView
      );
    }
  },

  created() {
    this.$store.dispatch("company/slManagementGetAll");
  },

  methods: {
    toggleView(view) {
      if (this.activeView !== view) {
        this.activeView = view;
        this.component =
          view === "list"
            ? "SelectionManagementTableList"
            : "SelectionManagementTable";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.company-selection-management {
  overflow: auto;
  height: 98%;
}
.selection-mgmt-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 23px;
}
.selection-mgmt-body {
  height: calc(100% - 71px);
}
.search-bar-wrapper {
  align-items: center;
  background: #fff;
  border: 1px solid #e6e7e9;
  border-radius: 8px;
  display: flex;
  height: 48px;
  position: relative;
  width: 329px;
  .icon {
    background: url("../../assets/loop.png") no-repeat;
    display: inline-block;
    height: 14px;
    margin-left: 18px;
    position: relative;
    width: 14px;
  }
  input {
    color: #181819;
    height: 100%;
    outline: 0;
    padding-left: 11px;
    width: calc(100% - 32px);
  }
}
.view-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  .col-view {
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
  }
  .list-view {
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }
  > div {
    align-items: center;
    background-color: #fff;
    display: flex;
    height: 46px;
    justify-content: center;
    width: 56px;
    &.active {
      background-color: #0253b3;
    }
  }
}
</style>
