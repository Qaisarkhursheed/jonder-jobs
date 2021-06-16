<template>
  <div class="mo-step-2">
    <v-sheet class="px-12">
      <p class="text-center font-weight-bold text-h6">
        Erzahl uns etwas uber dich!
      </p>

      <div class="mt-6">
        <p class="text-left font-weight-bold">Wie alt bist Du?</p>
        <v-text-field
          dense
          placeholder="TT / MM / JJJ"
          type="text"
          outlined
          background-color="white"
          :rules="rules"
          v-model="value.working_in"
        ></v-text-field>
        <p class="text-left font-weight-bold">
          Welches Geschlecht beschreibt Dich am besten?
        </p>
        <v-row class="pb-5">
          <v-col>
            <v-card>
              <v-btn
                class="pa-6"
                block
                @click="value.describe_yourself = 'Weiblich'"
                v-bind="{ outlined: value.describe_yourself !== 'Weiblich' }"
                color="primary"
              >
                Weiblich
              </v-btn>
            </v-card>
          </v-col>

          <v-col>
            <v-card>
              <v-btn
                block
                class="pa-6"
                @click="value.describe_yourself = 'Männlich'"
                v-bind="{ outlined: value.describe_yourself !== 'Männlich' }"
                color="primary"
                >Männlich
              </v-btn>
            </v-card>
          </v-col>

          <v-col>
            <v-card>
              <v-btn
                block
                class="pa-6"
                @click="value.describe_yourself = 'Divers'"
                v-bind="{ outlined: value.describe_yourself !== 'Divers' }"
                color="primary"
                >Divers
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
        <p class="text-left font-weight-bold">Hast Du eine Behinderung?</p>
        <v-text-field
          dense
          placeholder="Lorem ipsum"
          type="text"
          outlined
          background-color="white"
          :rules="rules"
          v-model="value.current_position"
        ></v-text-field>
        <p class="text-left font-weight-bold">Wo wohnst Du aktuell? *</p>
        <v-text-field
          dense
          placeholder="Lorem Ipsum (Maps city selection)"
          type="text"
          outlined
          background-color="white"
          :rules="rules"
          v-model="value.branche"
        ></v-text-field>
        <p class="text-left font-weight-bold">
          Erzähle uns von Deinen Hobbies!
        </p>
        <v-textarea
          outlined
          type="text"
          placeholder="Lorem ipsum"
          background-color="white"
          :rules="rules"
          v-model="value.address"
          height="80"
        ></v-textarea>

        <p class="text-left font-weight-bold">Erzähle uns etwas über Dich! *</p>
        <v-textarea
          height="80"
          placeholder="Lorem ipsum"
          type="text"
          outlined
          background-color="white"
          :rules="rules"
          v-model="value.address_to_work"
        ></v-textarea>
        <v-btn
          @click="nextScreen"
          color="primary"
          class="full-w mt-4 font-weight-medium "
        >
          Weiter
        </v-btn>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Step2",
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

<style scoped lang="scss"></style>
