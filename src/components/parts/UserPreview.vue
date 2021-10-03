<template>
  <div class="user-preview" v-if="userData">
    <v-card flat class="messages-holder full-h d-flex flex-column pa-0">
      <v-card-title class="flex-grow-0 flex-shrink-0 pb-2">
        <v-list-item class="grow">
          <v-list-item-avatar @click="$emit('show-profile')">
            <v-img :src="userData.profile_img"></v-img>
          </v-list-item-avatar>

          <v-list-item-content @click="$emit('show-profile')">
            <v-list-item-title
              >{{ userData.first_name }}
              {{ userData.last_name }}</v-list-item-title
            >
            <!--<v-list-item-subtitle>Online now</v-list-item-subtitle>-->
          </v-list-item-content>
        </v-list-item>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    userData: null
  }),
  created() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      const resp = await this.$store.dispatch("user/getUser", this.userId);
      if (resp.data) this.userData = resp.data;
      else this.$emit("close");
    }
  }
};
</script>

<style lang="scss">
.user-preview {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  min-width: 300px;
  background: white;
}
</style>
