<template>
  <div class="d-flex pr-4" v-if="selections">
    <div style="min-width:300px" 
      v-for="(selection, i) in selections" :key="i">
      <SManagementTableColumn :selection="selection" :type="i" />
    </div>
  </div>
</template>
<script>
import store from '@/store';
import SManagementTableColumn from '@/components/company/SelectionManagementTableColumn'

export default {

  name: "SelectionManagementTable",

  order: 1,

  components: {
    SManagementTableColumn
  },
  created() {
    store.dispatch('company/slManagementGetAll');
  },

  computed: {
    selections() {
      return store.getters['company/selectionManagement'];
    }
  }
};
</script>