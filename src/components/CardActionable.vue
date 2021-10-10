<template>
  <v-card
    class="card-actionable pl-4 pr-4 pt-3 pb-3"
    :class="{ 'view-only': viewOnly }"
    flat
    outlined
  >
    <v-menu bottom left attach>
      <template v-slot:activator="{ on, attrs }" v-if="!viewOnly">
        <v-btn icon v-bind="attrs" v-on="on" class="menu-button">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in actions"
          :key="i"
          @click="handleAction(item)"
        >
          <v-list-item-title class="list-item">
            {{ item }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <slot :value="data"> </slot>
  </v-card>
</template>

<script>
export default {
  name: "CardActionable",

  props: {
    actions: {
      type: [Array, Object]
    },
    data: {
      type: Object
    },
    viewOnly: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleAction(item) {
      this.$emit("click", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.card-actionable {
  position: relative;
  border-radius: 10px;
}
.menu-button {
  position: absolute;
  right: 0;
  top: 5px;
}
.list-item {
  text-transform: capitalize;
}
.title {
  font-weight: 600;
  font-size: 14px;
  color: #000000;
}
.subtitle {
  font-weight: normal;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.7);
}
</style>
