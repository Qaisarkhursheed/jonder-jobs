<template>
  <div class="mo-step-3">
    <v-sheet class="px-12">
      <p class="text-center font-weight-bold text-h6">
        Welche Ausbildung hast Du genossen?
      </p>

      <div class="mt-10">
        <p class="text-left font-weight-bold">
          Was ist Dein höchster bisher erreichter Schulabschluss?
        </p>
        <v-row>
          <v-col cols="12" md="6">
            <v-card>
              <v-btn
                block
                class="pa-6"
                @click="value.your_qualification = 'Kein Schulabschluss'"
                v-bind="{
                  outlined: value.your_qualification !== 'Kein Schulabschluss'
                }"
                color="primary"
              >
                Kein Schulabschluss
              </v-btn>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <v-btn
                block
                class="pa-6"
                @click="value.your_qualification = 'Hauptschulabschluss'"
                v-bind="{
                  outlined: value.your_qualification !== 'Hauptschulabschluss'
                }"
                color="primary"
              >
                Hauptschulabschluss
              </v-btn></v-card
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-card>
              <v-btn
                block
                class="pa-6"
                @click="value.your_qualification = 'Mittlere Reife'"
                v-bind="{
                  outlined: value.your_qualification !== 'Mittlere Reife'
                }"
                color="primary"
                >Mittlere Reife
              </v-btn>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <v-btn
                block
                class="pa-6"
                @click="value.your_qualification = 'Fachhochschulreife'"
                v-bind="{
                  outlined: value.your_qualification !== 'Fachhochschulreife'
                }"
                color="primary"
              >
                Fachhochschulreife
              </v-btn></v-card
            >
          </v-col>
        </v-row>
        <v-row class="mb-2">
          <v-col cols="12" md="6">
            <v-card>
              <v-btn
                block
                class="pa-6"
                @click="value.your_qualification = 'Abitur'"
                v-bind="{
                  outlined: value.your_qualification !== 'Abitur'
                }"
                color="primary"
              >
                Abitur
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
        <p class="text-left font-weight-bold">
          Was ist Dein höchster bisher erreichter Schulabschluss?
        </p>
        <v-row>
          <v-col cols="12" md="6">
            <v-card>
              <v-btn
                block
                class="pa-6"
                @click="value.training_studies = 'Kein Studium'"
                v-bind="{
                  outlined: value.training_studies !== 'Kein Studium'
                }"
                color="primary"
              >
                Kein Studium
              </v-btn>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <v-btn
                block
                class="pa-6"
                @click="value.training_studies = 'Aktuell Student'"
                v-bind="{
                  outlined: value.training_studies !== 'Aktuell Student'
                }"
                color="primary"
              >
                Aktuell Student
              </v-btn></v-card
            >
          </v-col>
        </v-row>
        <v-row class="mb-2">
          <v-col cols="12" md="6">
            <v-card>
              <v-btn
                block
                class="pa-6"
                @click="value.training_studies = 'Bachelor Abschluss'"
                v-bind="{
                  outlined: value.training_studies !== 'Bachelor Abschluss'
                }"
                color="primary"
                >Bachelor Abschluss
              </v-btn>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <v-btn
                block
                class="pa-6"
                @click="value.training_studies = 'Master Abschluss'"
                v-bind="{
                  outlined: value.training_studies !== 'Master Abschluss'
                }"
                color="primary"
                >Master Abschluss
              </v-btn></v-card
            >
          </v-col>
        </v-row>
        <p class="text-left font-weight-bold">
          Deine Hochschule oder Universität?
        </p>
        <v-text-field
          dense
          placeholder="Lorem Ipsum"
          type="text"
          outlined
          background-color="white"
          :rules="rules"
          v-model="value.additional_training"
        ></v-text-field>
      </div>
      <v-btn
        @click="nextScreen"
        color="primary"
        class="full-w mt-4 font-weight-medium "
      >
        Weiter
      </v-btn>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Step3",
  props: {
    value: {
      type: Object,
      required: true
    },
    nextScreen: Function
  },
  data: () => ({
    rules: [value => !!value || "Required."]
  })
};
</script>

<style scoped lang="scss">
.mo-step-3 {
  &__salary {
    border: solid 1px $primary-blue;
    border-radius: 4px;
    color: $primary-blue;
  }
}
</style>
