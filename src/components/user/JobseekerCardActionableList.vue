<template>
  <div>
    <div v-for="(item, i) in items" :key="i" style="margin-bottom: 10px">
      <CardActionable
        :actions="actions"
        :data="item"
        @click="select($event, item)"
        :view-only="viewOnly"
        :class="{
          'view-only': viewOnly,
          'border-none': viewOnly && i == items.length - 1
        }"
      >
        <template v-if="type === 'Experience'" #default="{ value }">
          <div class="title">{{ value.company_name }}</div>
          <div class="subtitle">{{ value.position }}</div>
          <div class="subtitle">
            {{ value.start_time | moment("MMMM YYYY") }} -
            <template v-if="value.end_time">
              {{ value.end_time | moment("MMMM YYYY") }}
            </template>
            <template v-else>Present</template>
          </div>
        </template>
        <template v-else #default="{ value }">
          <div class="title">{{ value.university_name }}</div>
          <div class="subtitle">{{ value.study }}</div>
          <div class="subtitle">
            {{ value.start_time | moment("MMMM YYYY") }} -
            <template v-if="value.end_time">
              {{ value.end_time | moment("MMMM YYYY") }}
            </template>
            <template v-else>Present</template>
          </div>
        </template>
      </CardActionable>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import CardActionable from "@/components/CardActionable";

export default {
  name: "JobseekerCardActionableList",

  props: {
    type: {
      type: String
    },
    viewOnly: {
      type: Boolean,
      default: false
    }
  },

  components: {
    CardActionable
  },

  data() {
    return {
      actions: ["edit", "delete"]
    };
  },
  created() {
    if (this.type !== "UpgradePlan") {
      store.dispatch(`user/getAllJobseeker${this.type}`);
    }
  },

  methods: {
    select(type, item) {
      if (type === "delete") {
        store.dispatch(`user/deleteJobseeker${this.type}`, item.id);
      } else if (type === "edit") {
        this.$emit("edit", item);
      }
    }
  },
  computed: {
    items() {
      return store.getters[`user/jobseeker${this.type}`];
    }
  }
};
</script>

<style lang="scss" scoped>
.border-none {
  border: none !important;
}

.view-only {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  padding: 0 !important;
  padding-bottom: 10px !important;

  .title {
    font-size: 16px !important;
    line-height: unset !important;
  }

  .subtitle {
    line-height: unset !important;
    font-weight: 400;
  }
}

.subtitle {
  color: rgba(0, 0, 0, 0.7);
}
</style>
