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
          Branche: <strong>{{ company.branche }}</strong>
        </li>
        <li>
          <v-icon>mdi-domain</v-icon>
          Mitarbeiter: <strong>{{ company.company_employees }}</strong>
        </li>
        <li>
          <v-icon>mdi-school</v-icon>
          Ausbildung: <strong>{{ company.department }}</strong>
        </li>
      </ul>
    </div>

    <div class="pa-4 mt-4 border-top-gray">{{ company.about_company }}</div>

    <v-btn block tile color="light-blue">
      Message
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
  }
};
</script>
