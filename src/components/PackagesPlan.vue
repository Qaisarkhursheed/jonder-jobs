<template>
  <v-card flat class="packages-plan pl-8 pr-8 pt-14 pb-14">
    <div class="price d-flex align-end">
      <div>{{ plan.price }}</div>
      <div>/month</div>
    </div>
    <div class="type mt-3">
      <div class="name" :style="`color: ${plan.color}`">
        {{ plan.type }}
      </div>
      <div class="description">
        {{ plan.description }}
      </div>
    </div>

    <v-divider class="mb-10 mt-10"></v-divider>

    <div class="features">
      <div class="feature pb-5" v-for="(feature, i) in plan.features" :key="i">
        <v-icon
          size="25"
          :color="plan.color"
        >
          mdi-check
        </v-icon>
        <span class="text">
          {{ feature }}
        </span>
        
      </div>
    </div>

    <div class="action mt-6">
       <v-btn
        color="primary"
        height="48"
        width="70%"
        :elevation="false"
        class="font-weight-medium full-w"
      >
        Upgrade
      </v-btn>
</div>
  </v-card>
</template>

<script>

export default {

  name: 'PackagesPlan',

  props: {
    plan: {
      type: Object
    }
  }
};

</script>

<style lang="scss" scoped>
.packages-plan {
  border-radius: 16px !important;
}
.price {
  line-height: 1;
  > div:first-child {
    font-weight: 600;
    font-size: 50px;
    color: #081F32;
  }

  > div:last-child {
    font-weight: normal;
    font-size: 16px;
    color: #A5ADBB;
  }
}

.type {
  .name {
    font-weight: 600;
    font-size: 28px;
  }
  .description {
    font-weight: normal;
    font-size: 16px;
    color: #92969D;
  }
}

.features {
  .feature {
    .text {
      font-weight: normal;
      font-size: 16px;
      color: #6E798C;
    }
  }
}
</style>