<template>
  <v-card flat class="company">
    <v-list-item class="pl-4 pr-4">
      <v-list-item-avatar size="70" color="grey"></v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="mb-0 text-weight-bold">{{
          company.company
        }}</v-list-item-title>
        <ul>
          <li>
            <v-icon>mdi-briefcase-outline</v-icon>
            {{ company.department }}
          </li>
          <li>
            <v-icon>mdi-map-marker-outline</v-icon>
            {{ company.address }}
          </li>
        </ul>
      </v-list-item-content>
    </v-list-item>

    <div class="pl-4 pr-4">
      <ul>
        <li>
          <v-icon>mdi-shape</v-icon>
          {{ $t('user.dashboard.branch') }}: <strong>{{ company.branche }}</strong>
        </li>
        <li>
          <v-icon>mdi-domain</v-icon>
          {{ $t('user.dashboard.employee') }}: <strong>{{ company.company_employees }}</strong>
        </li>
        <li>
          <v-icon>mdi-school</v-icon>
          {{ $t('user.dashboard.education') }}: <strong>{{ company.department }}</strong>
        </li>
      </ul>
    </div>

    <div class="pa-4 mt-4 border-top-gray">{{ company.about_company }}</div>

    <v-btn @click="sendMessage" block tile color="light-blue">
      {{ $t('user.dashboard.message') }}
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    company: {
      type: Object,
      required: true
    }
  },
  methods: {
    sendMessage() {
      this.$router.push("/dashboard/chat/" + this.company.id + "/new");
    }
  }
};
</script>
