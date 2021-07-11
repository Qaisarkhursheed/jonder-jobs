<template>
  <div>
    <div v-for="(item, i) in items" :key="i" style="margin-bottom: 10px">
      <CardActionable :actions="actions"
        :data="item"
        @click="select($event, item)">
        <template v-if="type === 'Experience'" #default="{ value }">
          <div class="title">{{ value.company_name }}</div>
          <div class="subtitle">{{ value.position }}</div>
          <div class="subtitle">
            {{ Date.parse(value.start_time) }} - {{ Date.parse(value.end_time) }}
          </div>
        </template>
        <template v-else #default="{ value }"> 
          <div class="title">{{ value.university_name }}</div>
          <div class="subtitle">{{ value.study }}</div>
          <div class="subtitle">
            {{ Date.parse(value.start_time) }} - {{ Date.parse(value.end_time) }}
          </div>
        </template>
      </CardActionable>
    </div>
  </div>
</template>

<script>

import store from '@/store';
import CardActionable from '@/components/CardActionable';

export default {
  name: 'JobseekerCardActionableList',

  props: {
    type: {
      type: String
    }
  },
  
  components: {
    CardActionable,
  },

  data() {
    return {
      actions: ['edit', 'delete']
    };
  },
  created() {
    store.dispatch(`user/getAllJobseeker${this.type}`);
  },

  methods: {
    select(type, item) {
      if (type === 'delete') {
        store.dispatch(`user/deleteJobseeker${this.type}`, item.id);
      } else if (type === 'edit') {
        this.$emit('edit', item);
      }
    },
  },
  computed: {
    items() {
      return store.getters[`user/jobseeker${this.type}`];
    }
  }
};
</script>