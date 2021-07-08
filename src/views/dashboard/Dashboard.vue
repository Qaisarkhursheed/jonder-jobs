<template>
  <v-row class="layout-content mt-4 flex-shrink-1 flex-grow-1" v-if="user">
    <v-col cols="12">
      <div class="dashboard-holder">
        <user-messages v-if="conversations" :messages="conversations" />
        <div v-else> 
          <div class="user-name"> Hello, <span  style="color:#0253B3;">{{user.first_name}} {{user.last_name}} </span></div>
          <div class="no-msg"> There is no any messages yet </div>
          <div class="upgrade-box">
            <div class="upgrade-title"> Increase account visibility by upgrading account </div>
            <div>
              <p> 
               Be on the top of search for 3 days
              </p>
            </div>
          </div>
          <div class="image-placeholder">
            <v-img :src="require('@/assets/icons/rafiki.png')"></v-img>
          </div>          
        </div>
        <company-list />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import UserMessages from "@/components/dashboard/UserMessages";
import CompanyList from "@/components/dashboard/CompanyList";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Dashboard",
  created() {
    this.getAllConversations({ limit: 2 });
  },
  computed: {
    ...mapGetters("user", ["user"]),
    ...mapGetters("chat", ["conversations"]),
  },
  methods: {
    ...mapActions("chat", ["getAllConversations"]),
  },
  components: {
    CompanyList,
    UserMessages,
  }
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
</style>
