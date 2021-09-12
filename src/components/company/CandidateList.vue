<template>
  <div class="candidate-list">
    <div class="title text-capitalize font-weight-bold"
         :class="`${list.type}`">
      {{ $t(list.type) }}
    </div>
    <div class="list pt-6">
      <div class="item mb-3" v-for="(user, i) in list.users" :key="i">
        <CandidateCard :candidate="user"
                       :type="list.type"/>
      </div>
    </div>
  </div>
</template>

<script>

import CandidateCard from '@/components/company/CandidateCard';

export default {
  name: 'CandidateList',

  components: {
    CandidateCard,
  },

  props: {
    list: {
      type: Object,
    },
  },
};

</script>

<style lang="scss" scoped>
  .request {
    color: $status-request;
  }
  .negotiation {
    color: $status-negotiation;
  }
  .call {
    color: $status-call;
  }
</style>
