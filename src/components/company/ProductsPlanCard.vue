<template>
  <v-card class="products-plan-card rounded-lg select-cursor no-gutters" flat>
    <div class="card-icon pt-3 pr-3">
      <v-icon size="38px" :color="details.color">
        {{ `mdi-${details.icon}` }}
      </v-icon>
    </div>
    <v-card-text class="no-gutters pa-6">
      <div class="header pb-2">
        {{ details.title }}
      </div>
      <div class="text">
        {{ details.desc }}
      </div>
    </v-card-text>
    <v-card-actions class="no-gutters pl-6 pr-6 footer">
      {{ details.price }}
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductsPlanCard",

  props: {
    details: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.products-plan-card {
  position: relative;
}
.card-icon {
  position: absolute;
  right: 0;
}
.header {
  font-weight: 600;
  font-size: 24px;
  color: #3e3e47;
}
.body {
  font-weight: normal;
  font-size: 14px;
  color: #3e3e47;
}
.footer {
  background: #e3f2fb;
  font-weight: bold;
  font-size: 20px;
  color: #0253b3;
}
</style>
