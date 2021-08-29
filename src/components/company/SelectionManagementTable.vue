<template>
  <div class="d-flex pr-4 selection-management-table">
    <div style="min-width:300px"
      v-for="(selection, i) in selection" :key="i">
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
<style scoped>
.selection-management-table {
  overflow: auto;
}
</style>
