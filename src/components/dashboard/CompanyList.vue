<template>
  <v-row class="mt-2 company-list">
    <v-col
      cols="4"
      v-for="company in [1, 2, 3]"
      :key="company"
    >
      <v-card
        flat
        class="company"
      >
        <v-list-item class="pl-4 pr-4">
          <v-list-item-avatar
            size="70"
            color="grey"
          ></v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="mb-0 text-weight-bold">Plutus GmbH</v-list-item-title>
            <ul>
              <li>
                <v-icon>mdi-briefcase-outline</v-icon>
                Bauunternehmen
              </li>
              <li>
                <v-icon>mdi-map-marker-outline</v-icon>
                Berlin
              </li>
            </ul>
          </v-list-item-content>
        </v-list-item>

        <div class="pl-4 pr-4">
          <ul>
            <li>
              <v-icon>mdi-shape</v-icon>
              Branche: <strong>Bauwesen</strong>
            </li>
            <li>
              <v-icon>mdi-domain</v-icon>
              Mitarbeiter: <strong>15</strong>
            </li>
            <li>
              <v-icon>mdi-school</v-icon>
              Ausbildung: <strong>Kaufmann für Bürokommunikation</strong>
            </li>
          </ul>
        </div>

        <div class="pa-4 mt-4 border-top-gray">
          Wir sind ein Familiengeführtes Unternehmen in der dritten Generation. Wir freuen uns auf `den Kontakt mit Ihnen
        </div>

        <v-btn block tile color="light-blue">
          Message
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.company-list {
  font-size: 14px;

  .v-icon {
    float: left;
    color: $medium-grey;
    font-size: 18px;
    line-height: 19px;
    margin-right: 6px;
  }

  .company {
    overflow: hidden;
  }

  ul {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;

    li {
      padding: 2px 0;
      color: $medium-grey;
      @include clearfix;
    }
  }
}
</style>