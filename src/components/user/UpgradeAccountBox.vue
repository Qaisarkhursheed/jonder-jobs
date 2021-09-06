<template>
  <div>
    <UpgradePlanModal
      v-if="modals.UpgradePlan.active"
      :active="modals.UpgradePlan.active"
      :edit="modals.UpgradePlan.edit"
      @close="toggleModal('UpgradePlan')"
    />

    <!-- Upgrade box -->
    <div class="upgrade-box">
      <v-img
        class="badge"
        :src="require('@/assets/icons/top-rated.svg')"
        :width="small ? '40' : null"
      ></v-img>
      <div class="title-description-wrapper"
        :class="{ 'd-flex': !small }"
        style="font-size: 13px; justify-content: space-between;"
      >
        <div class="upgrade-title">
          {{ $t("user.dashboard.premiumSuggestion") }}
        </div>
        <div>
          {{ $t("general.beOnTheTop") }}
        </div>
      </div>
      <div class="link-upgrade-wrapper"
           :class="{ 'mt-2': small }">
        <CardActionableList
            type="UpgradePlan"
            @edit="activateEdit('UpgradePlan', $event)"
        />
        <span
            class="link-upgrade"
            style="color: #55F481; width: 100%; cursor: pointer;"
            @click="toggleModal('UpgradePlan')"
        >
          {{ $t("user.dashboard.upgrade") }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import UpgradePlanModal from "@/views/dashboard/UpgradePlanModal";
import CardActionableList from "@/components/user/JobseekerCardActionableList";

export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleModal(type) {
      this.modals[type].edit = false;
      this.modals[type].active = !this.modals[type].active;
    },
    activateEdit(type, item) {
      this.toggleModal(type);
      this.modals[type].edit = item;
    },
  },
  components: {
    UpgradePlanModal,
    CardActionableList,
  },
  mounted() {
    if (this.$store.getters["user/userPlans"] == null) {
      this.$store.dispatch("user/fetchPlans");
    }
  },
  data: () => ({
    modals: {
      UpgradePlan: {
        active: false,
        edit: false,
        component: UpgradePlanModal,
      },
    },
    fileActions: {
      UpgradePlan: ["edit", "delete"],
    },
  }),
};
</script>

<style lang="scss">
.dashboard-upgrade-account-box {
  .upgrade-box {
    display: flex;
    justify-content: space-between;
    max-width: 412px;
  }
  .title-description-wrapper {
    display: flex;
    flex-direction: column;
    width: 275px;
  }
  .link-upgrade-wrapper {
    display: flex;
    align-items: flex-end;
  }
  .badge {
    top: -16px;
  }

}
.upgrade-box {
  background-color: $primary-blue-dark;
  color: white;
  padding: 25px;
  border-radius: 10px;
  max-width: 400px;
  position: relative;
  cursor: default;
}

.upgrade-title {
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 7px;
}

.badge {
  position: absolute;
  right: 17px;
  top: -11px;
}
.link-upgrade {
  border-bottom: 2px solid;
  font-size: 13px;
  font-weight: 700;
}
</style>
