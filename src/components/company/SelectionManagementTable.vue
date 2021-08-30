<template>
  <div class="d-flex pr-4 selection-management-table">
    <div style="min-width:300px"
      v-for="(selection, i) in selection" :key="i"
         :class="[i.toLowerCase().replace(/\s/g, '')]" >
      <SManagementTableColumn :selection="selection" :type="i" />
    </div>
  </div>
</template>
<script>
import SManagementTableColumn from '@/components/company/SelectionManagementTableColumn'

export default {

  name: "SelectionManagementTable",
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
