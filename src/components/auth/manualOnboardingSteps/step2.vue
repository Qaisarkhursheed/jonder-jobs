<template>
  <div class="mo-step-2">
    <p class="text-center">Erzahl uns etwas uber dich!</p>

    <div class="mt-6">
      <v-text-field
          dense
          label="Wo iarbeitest du aktuell?"
          type="text"
          outlined
          background-color="white"
          :rules="rules"
          v-model="value.working_in"
      ></v-text-field>

      <v-text-field
          dense
          label="Was ist deine aktuelle Position?"
          type="text"
          outlined
          background-color="white"
          :rules="rules"
          v-model="value.current_position"
      ></v-text-field>

      <v-text-field
          dense
          label="I welchen Branchen arbeitest du?"
          type="text"
          outlined
          background-color="white"
          :rules="rules"
          v-model="value.branche"
      ></v-text-field>

      <v-text-field
          dense
          label="Wo wohnst du?"
          type="text"
          outlined
          background-color="white"
          :rules="rules"
          v-model="value.address"
      ></v-text-field>

      <v-text-field
          dense
          label="In welchem Radius warst du bereit Deinen neuen Job auszuuben?"
          type="text"
          outlined
          background-color="white"
          :rules="rules"
          v-model="value.address_to_work"
      ></v-text-field>

      <p class="text-left">Was beschreibt dich am besten?</p>
      <v-row>
        <v-col>
          <div class="text-center">
            <v-btn
                @click="value.describe_yourself = 'Beginner'"
                v-bind="{ outlined: value.describe_yourself !== 'Beginner' }"
                color="primary"
                class="stars-btn"
            >
              <v-icon>
                mdi-star
              </v-icon>
            </v-btn>
          </div>

          <p class="text-center caption mt-1">Beginner</p>
        </v-col>

        <v-col>
          <div class="text-center">
            <v-btn
                @click="value.describe_yourself = 'Junior'"
                v-bind="{ outlined: value.describe_yourself !== 'Junior' }"
                color="primary"
                class="stars-btn"
            >
              <v-icon>
                mdi-star
              </v-icon>
              <v-icon>
                mdi-star
              </v-icon>
            </v-btn>
          </div>

          <p class="text-center caption mt-1">Junior</p>
        </v-col>

        <v-col>
          <div class="text-center">
            <v-btn
                @click="value.describe_yourself = 'Senior'"
                v-bind="{ outlined: value.describe_yourself !== 'Senior' }"
                color="primary"
                class="stars-btn senior"
            >
              <v-icon>
                mdi-star
              </v-icon>
              <v-icon>
                mdi-star
              </v-icon>
              <v-icon>
                mdi-star
              </v-icon>
            </v-btn>
          </div>

          <p class="text-center caption mt-1">Senior</p>
        </v-col>

        <v-col>
          <div class="text-center">
            <v-btn
                @click="value.describe_yourself = 'Advanced'"
                v-bind="{ outlined: value.describe_yourself !== 'Advanced' }"
                color="primary"
                class="stars-btn advanced"
            >
              <v-icon>
                mdi-star
              </v-icon>
              <v-icon>
                mdi-star
              </v-icon>
              <v-icon>
                mdi-star
              </v-icon>
              <v-icon>
                mdi-star
              </v-icon>
            </v-btn>
          </div>

          <p class="text-center caption mt-1">Advanced</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step2",
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    rules: [value => !!value || "Required."]
  })
};
</script>

<style scoped lang="scss"></style>
