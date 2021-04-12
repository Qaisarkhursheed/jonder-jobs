<template>
  <v-card flat>
    <v-list subheader class="pb-0">
      <v-list-item-group v-model="selectedItem" color="primary">
        <template v-for="(chat, index) in recent">
          <v-list-item :key="chat.title" @click="$emit('clicked')">
            <v-list-item-avatar>
              <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="chat.title"></v-list-item-title>
              <v-list-item-subtitle
                v-text="chat.content"
              ></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon class="flex-column text-right">
              <div><small>18:30</small></div>
              <v-badge color="blue" content="6" inline></v-badge>
            </v-list-item-icon>
          </v-list-item>
          <v-divider v-if="index < recent.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selectedItem: null,
    recent: [
      {
        active: true,
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Jason Oner",
        content: "Chat content"
      },
      {
        active: true,
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "Mike Carlson",
        content: "Chat content"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Cindy Baker",
        content: "Chat content"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Ali Connors",
        content: "Chat content"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Ali Connors",
        content: "Chat content"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Ali Connors",
        content: "Chat content"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Ali Connors",
        content: "Chat content"
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Ali Connors",
        content: "Chat content"
      }
    ]
  })
};
</script>
