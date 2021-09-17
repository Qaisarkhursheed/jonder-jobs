<template>
  <v-card
    flat
    class="messages-holder full-h d-flex flex-column"
    style="background: white; border-radius: 10px"
  >
    <v-row
      class="pt-8 px-5 pb-4 mx-0"
      style="flex: unset; border-bottom: 1px solid #E3E3E4"
    >
      <v-col cols="auto" class="d-flex my-auto">
        <v-icon color="black" @click="$emit('back')">
          mdi-arrow-left
        </v-icon>
      </v-col>

      <v-col class="d-flex my-auto">
        <h2 style="font-weight: 600;font-size: 17px;">Profile</h2>
      </v-col>

      <v-col cols="auto" class="d-flex my-auto">
        <v-icon
          color="black"
          @click="
            $store.commit('chat/CLEAR_SINGLE_CONVERSATION');
            $emit('chat-full', false);
          "
        >
          mdi-close
        </v-icon>
      </v-col>
    </v-row>

    <div class="pa-8">
      <PublicProfileViewAs
        :user="$store.getters['chat/conversationDetails'].user"
      />
    </div>
  </v-card>
</template>

<script>
import PublicProfileViewAs from "@/components/company/PublicProfile/PublicProfileViewAs";

export default {
  components: { PublicProfileViewAs }
};
</script>

<style></style>
