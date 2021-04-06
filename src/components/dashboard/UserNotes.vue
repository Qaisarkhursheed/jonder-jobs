<template>
  <v-card flat class="mt-4 pa-3">
    <v-row>
      <v-col class="pl-4">
        <span class="text-color-primary-blue-dark">Notepad</span>
        <v-btn color="primary" class="pull-right" outlined small>New +</v-btn>
      </v-col>
    </v-row>

    <v-row
      v-for="note in notes"
      :key="note.id"
      class="message-row"
    >
      <v-col class="pl-4">
        <div class="d-flex overflow">
          <div class="flex-grow-1 flex-shrink-1 overflow">
            <strong>{{ note.title }}</strong>
            <div class="short-message">{{ note.content }}</div>
          </div>
          <div class="flex-grow-0 flex-shrink-0">
            <a class="pull-right"><v-icon>mdi-pencil-outline</v-icon></a>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    notes: [
      {
        id: 1,
        title: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur velit porta nisi pharetra, vitae suscipit turpis laoreet. Suspendisse tristique, ex at pretium placerat, risus est scelerisque magna, at pellentesque libero libero sed quam"
      },
      {
        id: 2,
        title: "Quisque consectetur",
        content: "Vitae suscipit turpis laoreet. Suspendisse tristique, ex at pretium placerat, risus est scelerisque magna, at pellentesque libero libero sed quam"
      }
    ]
  })
};
</script>

<style scoped>
.overflow {
  overflow: hidden;
}
</style>