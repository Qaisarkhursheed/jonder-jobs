<template>
  <v-card flat class="mt-4 pa-3">
    <v-row>
      <v-col cols="6" class="pl-4"
        ><span class="text-color-primary-blue-dark">Replies</span></v-col
      >
      <v-col cols="5" class="text-right"
        ><span class="text-color-primary-blue-dark">Message</span></v-col
      >
      <v-col cols="1"></v-col>
    </v-row>

    <div class="message-rows">
      <v-row v-for="reply in replies" :key="reply.id" class="message-row">
        <v-col cols="6" class="pl-4">{{ reply.user }}</v-col>
        <v-col cols="5" class="short-message">{{ reply.message }}</v-col>
        <v-col cols="1"
          ><a><v-icon>mdi-chevron-right</v-icon></a></v-col
        >
      </v-row>
    </div>

    <v-row>
      <v-col class="text-center pt-6"
        ><a class="text-color-primary-blue-dark">See more</a></v-col
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    replies: [
      {
        id: 1,
        user: "Darlen. O",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur velit porta nisi pharetra, vitae suscipit turpis laoreet. Suspendisse tristique, ex at pretium placerat, risus est scelerisque magna, at pellentesque libero libero sed quam"
      },
      {
        id: 2,
        user: "Darlen. O",
        message:
          "Quisque consectetur velit porta nisi pharetra, vitae suscipit turpis laoreet. Suspendisse tristique, ex at pretium placerat, risus est scelerisque magna, at pellentesque libero libero sed quam"
      }
    ]
  })
};
</script>
