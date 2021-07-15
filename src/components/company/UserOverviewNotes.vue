<template>
  <div class="user-overview-notes pl-10 pr-10 pt-7 pb-7" >
    <v-row>
      <v-col cols="6" v-for="(note, i) in notes" :key="i">
        <v-card flat
          style="border: 1px solid #E9E9E9">
          <v-card-text class="note">
            {{ note.value }}
          </v-card-text>
          <v-divider class="mt-5 ml-4 mr-4"></v-divider>
          <v-card-actions class="pt-5 pb-5 pl-4 pr-4">
            <v-row class="no-gutters">
              <v-col cols="8">
                <v-avatar
                  color="primary"
                  size="40"
                ></v-avatar>
                {{ note.user }}
              </v-col>
              <v-col cols="4" class="d-flex justify-end">
                <v-icon
                  size="20"
                  @click="editNote(item)"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  size="20"
                  @click="deleteNote(item)"
                >
                  mdi-delete
                </v-icon>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'UserOverviewNotes',

  data() {
    return {
      notes: [
        {
          value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.`,
          user: 'Marko Kraemer'
        },
        {
          value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.`,
          user: 'Marko Kraemer'
        }
      ]
    }
  },
  methods: {
    editNote() {},
    deleteNote() {}
  }
};
</script>
<style lang="scss" scoped>
.note {
  font-weight: normal;
  font-size: 16px;
  color: #222222 !important;
}
</style>