<template>
  <v-card flat class="mt-4 pa-3">
    <v-row>
      <v-col cols="6" class="pl-4"
        ><span class="text-color-primary-blue-dark font-weight-bold"
          >Replies</span
        ></v-col
      >
      <v-col cols="5" class="text-right"
        ><span class="text-color-primary-blue-dark font-weight-bold"
          >Message</span
        ></v-col
      >
      <v-col cols="1"></v-col>
    </v-row>

    <div class="message-rows">
      <v-row
        v-for="msg in messages"
        :key="msg.user_id"
        class="message-row"
        @click="navigateTo(msg.user_id)"
      >
        <v-col cols="6" class="pl-4">{{ msg.user_name }}</v-col>
        <v-col cols="5" class="short-message">{{ getShortMessage(msg) }}</v-col>
        <v-col cols="1"
          ><a>
            <v-icon>mdi-chevron-right</v-icon>
          </a></v-col
        >
      </v-row>
    </div>

    <v-row>
      <v-col class="text-center pt-6">
        <router-link to="/dashboard/chat" class="text-color-primary-blue-dark"
          >See more</router-link
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  methods: {
    getShortMessage(msg) {
      return msg.messages[0].message.substring(0, 200);
    },
    navigateTo(id) {
      this.$router.push("/dashboard/chat/" + id + "/view");
    }
  }
};
</script>
