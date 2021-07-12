<template>
  <v-row class="layout-content mt-4 flex-shrink-1 flex-grow-1" v-if="user">    
    <UpgradePlanModal v-if="modals.plan.active" :active="modals.plan.active"
      :edit="modals.plan.edit"
      @close="toggleModal('plan')" />

    <v-col cols="12">
      <div class="dashboard-holder" v-if="messagesLoaded">
        <template v-if="conversations">
          <Chat />
        </template>
        <template v-else> 
          <div class="user-name"> Hello, <span  style="color:#0253B3;">{{user.first_name}} {{user.last_name}} </span></div>
          <div class="no-msg"> There is no any messages yet </div>
          <div class="upgrade-box">
            <div class="upgrade-title"> Increase account visibility by upgrading account </div>
            <v-img class="badge"
            :src="require('@/assets/icons/top-rated.svg')"></v-img>
            <div class="d-flex" style="font-size: 13px; justify-content: space-between;">
              <p> 
               Be on the top of search for 3 days
              </p>

              <div>        
                <CardActionableList type="plan"
                @edit="activateEdit('plan', $event)" />
                  <p style="color: #55F481; width: 40%; cursor: pointer;" class="text-right"  @click="toggleModal('plan')"> 
                  Upgrade now
                  </p>
              </div>

            </div>
          </div>
          <div class="image-placeholder">
            <v-img :src="require('@/assets/icons/rafiki.png')"></v-img>
          </div>          
        </template>
        <company-list />
      </div>
    </v-col>
  </v-row>
</template>

<script>
// import UserMessages from "@/components/dashboard/UserMessages";
import CompanyList from "@/components/dashboard/CompanyList";
import { mapActions, mapGetters } from "vuex";
import UpgradePlanModal from '@/views/dashboard/UpgradePlanModal';
import CardActionableList from '@/components/user/JobseekerCardActionableList';
// move chat to component
import Chat from '@/views/dashboard/Chat';

export default {
  name: "Dashboard",
  created() {
    this.getAllConversations({ limit: 2 });
  },
  computed: {
    ...mapGetters("user", ["user"]),
    ...mapGetters("chat", ["conversations", "messagesLoaded"]),
  },
  methods: {
    ...mapActions("chat", ["getAllConversations"]),
    toggleModal(type) {
      this.modals[type].edit = false;
      this.modals[type].active = !this.modals[type].active;
    },
    activateEdit(type, item) {
      this.toggleModal(type);
      this.modals[type].edit = item;
    }
  },
  components: {
    CompanyList,
    //UserMessages,
    UpgradePlanModal,
    CardActionableList,
    Chat
  },
  data: () => ({
    modals: {
      plan: {
        active: false,
        edit: false,
        component: UpgradePlanModal
      },
    },
    fileActions: {
      plan: ['edit', 'delete'],
    },
  }),
};
</script>

<style lang="scss">
.dashboard-holder {
  position: relative;
  margin-top: 20px;
  color: $dark-grey;
}

.short-message {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.message-row {
  border-bottom: 1px solid $light-grey;
  font-size: 14px;
  color: $dark-grey;

  &:last-child {
    border-bottom: none;
  }
}

.user-name {
  font-size: 32px;
  font-weight: 500;
  line-height: 39px;
}

.no-msg {
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 20px;
}

.upgrade-box {
  background-color: $primary-blue-dark;
  color: white;
  padding: 25px;
  border-radius: 10px;
  width: 400px;
  position: relative;
  cursor: default;
}

.upgrade-title {
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 7px;
}

.image-placeholder {
  margin: 50px auto 0 55px;
  max-width: 723px;
  max-height: 538px;
}

.badge {
  position: absolute;
  right: 17px;
  top: -20px;
}
</style>
