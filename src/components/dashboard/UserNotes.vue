<template>
  <v-card flat class="mt-4 pa-3">
    <v-row>
      <v-col class="pl-4">
        <span class="text-color-primary-blue-dark">
          {{ $t('notepad') }}
        </span>
        <router-link :to="{ path: 'notepad/new' }" append class="pull-right">
          <v-btn color="primary" class="pull-right" outlined small>
            {{ $t('new') }} +
          </v-btn>
        </router-link>
      </v-col>
    </v-row>

    <v-row v-for="note in notepad" :key="note.id" class="message-row">
      <v-col class="pl-4">
        <div class="d-flex overflow">
          <div class="flex-grow-1 flex-shrink-1 overflow">
            <strong>{{ note.title }}</strong>
            <div class="short-message">{{ note.content }}</div>
          </div>
          <div class="flex-grow-0 flex-shrink-0">
            <router-link
              :to="{ path: 'notepad/' + note.id }"
              append
              class="pull-right text-color-primary-blue-dark"
            >
              <v-icon>mdi-pencil-outline</v-icon>
            </router-link>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters("notepad", ["notepad"])
};
</script>

<style scoped>
.overflow {
  overflow: hidden;
}
</style>
