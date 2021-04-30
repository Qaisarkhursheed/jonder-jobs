<template>
  <v-card flat
          class="candidate-card pa-6 pb-5 rounded-lg"
          :class="`${type}-border`">
    <v-card-text class="d-flex pa-0">
      <v-img
        :lazy-src="require('@/assets/candidate.png')"
        height="70px"
        width="70px"
        max-width="70px"
        :src="require('@/assets/candidate.png')"
        class="image">
      </v-img>
      <div class="pl-4">
        <div class="name font-weight-bold pb-1">
          {{candidate.name}}
        </div>
        <div class="job pb-1">
          <v-icon size="18px"
                  color="#C4C6C9">
            mdi-briefcase-outline
          </v-icon>
          <span class="text-color-primary-blue-dark">
            {{candidate.job}}
          </span>
        </div>
        <div class="location">
          <v-icon size="18px"
                  color="#C4C6C9">
            mdi-map-marker-outline
          </v-icon>
          {{candidate.location}}
        </div>
      </div>
    </v-card-text>
    <v-card-actions class="d-flex justify-end pa-0 pt-7 text-color-primary-blue-dark">
      <v-icon class="text-color-primary-blue-dark">mdi-pencil-outline</v-icon>
      <span>Hinweis</span>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'CandidateCard',

  props: {
    candidate: {
      type: Object
    },
    type: {
      type: String,
    }
  }
};

</script>

<style lang="scss" scoped>
  .candidate-card {
    font-family: $open-sans;
  }
  .name {
    font-size: 18px;
    color: #3E3E47;
  }
  .job, .location {
    font-size: 14px;
  }
  .image {
    border-radius: 50%;
  }
  .negotiation-border {
    border: 1px solid $status-negotiation;
  }
  .request-border {
    border: 1px solid $status-request;
  }
  .call-border {
    border: 1px solid $status-call;
  }
</style>