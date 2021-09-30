<template>
  <!--  Transforms are used to make scrollbar on top -->
  <div
    class="d-flex pr-4 selection-management-table"
    style="transform: rotateX(180deg); overflow-x: auto;"
  >
    <div
      style="min-width:300px; transform: rotateX(180deg);"
      v-for="(selection, i) in selection"
      :key="i"
      :class="[i.toLowerCase().replace(/\s/g, '')]"
    >
      <SManagementTableColumn :selection="selection" :type="i" />
    </div>
  </div>
</template>
<script>
import SManagementTableColumn from "@/components/company/selection-management/SelectionManagementTableColumn";

export default {
  order: 1,

  components: {
    SManagementTableColumn
  },

  props: {
    selection: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.selection-management-table {
  overflow: auto;
  .savedcandidates {
    order: 1;
  }
  .candidates {
    order: 2;
  }
  .qualified {
    order: 3;
  }
  .interview {
    order: 4;
  }
  .finalround {
    order: 5;
  }
  .hired {
    order: 6;
  }
}
</style>
