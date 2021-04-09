<template>
  <dashboard-layout>
    <v-card class="update-note-overlay" v-if="notepadDetails">
      <div class="pa-8">
        <v-row>
          <v-col cols="6">
            <router-link to="/dashboard">
              <v-icon>mdi-arrow-left</v-icon>
            </router-link>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn
              depressed
              color="primary"
              class="pl-8 pr-8"
              @click="handleUpdate"
              >Save</v-btn
            >
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-textarea
              dense
              outlined
              solo
              flat
              hide-details
              background-color="white"
              v-model="notepadDetails.content"
            ></v-textarea>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </dashboard-layout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DashboardLayout from "@/layouts/DashboardLayout";

export default {
  components: { DashboardLayout },
  created() {
    if (this.$route.params.id) this.getNotepad(this.$route.params.id);
    else this.$router.push("/dashboard");
  },
  computed: mapGetters("notepad", ["notepadDetails"]),
  methods: {
    ...mapActions("notepad", ["getNotepad"]),
    handleUpdate() {
      console.log("Update note");
    }
  }
};
</script>

<style lang="scss"></style>
