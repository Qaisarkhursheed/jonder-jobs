<template>
  <div class="pa-8">
    <v-card-title class="pl-0 pt-0">Personliche Daten</v-card-title>
    <v-row>
      <v-col cols="6">
        <label>E-mail Adresse</label>
        <v-text-field
          dense
          type="email"
          label="E-mail Adresse"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <label>Telefonnummer</label>
        <v-text-field
          dense
          type="text"
          label="Telefonnummer"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <label>Adresse</label>
        <v-text-field
          dense
          type="address"
          label="Adresse"
          outlined
          solo
          flat
          hide-details
          background-color="white"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <label>Geburtsdatum</label>
        <div class="form-group d-flex">
          <div class="flex-grow-0 flex-shrink-0" style="width: 110px">
            <v-text-field
              dense
              type="number"
              label="Tag"
              outlined
              solo
              flat
              hide-details
              background-color="white"
            ></v-text-field>
          </div>
          <div class="flex-grow-1 flex-shrink-1 pl-4 pr-4">
            <v-text-field
              dense
              type="text"
              label="Monat"
              outlined
              solo
              flat
              hide-details
              background-color="white"
            ></v-text-field>
          </div>
          <div class="flex-grow-0 flex-shrink-0" style="width: 110px">
            <v-text-field
              dense
              type="number"
              label="Jahre"
              outlined
              solo
              flat
              hide-details
              background-color="white"
            ></v-text-field>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-btn
          depressed
          block
          outlined
          color="primary"
          large
        >
          Cancel
        </v-btn>
      </v-col>
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <v-btn
          depressed
          block
          color="dark-blue"
          large
          @click="$emit('confirm')"
        >
          Confirm
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>