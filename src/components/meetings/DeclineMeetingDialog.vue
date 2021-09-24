<template>
  <v-dialog
    v-model="dialog"
    width="550"
    overlay-color="#0253B3"
    overlay-opacity="0.3"
    content-class="meeting-form text-center"
  >
    <!-- Button -->
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on" class="d-inline">
        <slot>
          <a class="mx-2" style="color: #EE0000">{{ $t("decline") }}</a>
        </slot>
      </div>
    </template>

    <v-card class="pa-7">
      <!-- Heading -->
      <h1 class="mb-4" style="font-size: 28px;">
        {{ $t("meetingDecline") }}
      </h1>

      <!-- Text -->
      <p v-html="$t('meetingDeclineText')"></p>

      <!-- Buttons -->
      <div>
        <v-btn text height="48" @click="cancel">
          {{ $t("cancel") }}
        </v-btn>
        <v-btn color="primary" height="48" class="mx-3" @click="changeDate">
          {{ $t("meetingProposeDate") }}
        </v-btn>
        <v-btn color="error" height="48" @click="decline">
          {{ $t("decline") }}
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },

  methods: {
    cancel() {
      this.dialog = false;
    },
    decline() {
      this.$emit("decline");
      this.dialog = false;
    },
    changeDate() {
      this.$emit("changedate");
      this.dialog = false;
    }
  }
};
</script>

<style lang="scss"></style>
