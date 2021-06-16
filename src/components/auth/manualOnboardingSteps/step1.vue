<template>
  <div class="mo-step-1">
    <v-container>
      <v-sheet class="pa-12 ">
        <v-card
          class="d-flex align-center justify-center mb-6"
          flat
          height="45vh"
          tile
        >
          <v-sheet width="330">
            <p class="text-center font-weight-bold text-h6">
              Starte mit dem Onboarding und erzähle uns etwas über Dich!
            </p>

            <v-btn @click="nextScreen" block color="primary" class="mb-4">
              <v-icon left>
                mdi-linkedin
              </v-icon>

              LinkedIn Informationen übernehmen
            </v-btn>

            <v-btn
              @click="nextScreen"
              block
              color="primary"
              outlined
              class="mb-4"
            >
              <v-icon left class="pr-8">
                mdi-xing
              </v-icon>
              Xing Informationen übernehmen
            </v-btn>
            <v-btn
              @click="nextScreen"
              block
              color="primary"
              outlined
              class="mb-4"
            >
              <v-icon left class="pr-15">
                mdi-cog-box
              </v-icon>
              Information selbst eintragen
            </v-btn>

            <div class="text-right mt-2">
              <v-menu offset-y max-width="250" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="primary" v-bind="attrs" v-on="on">
                    mdi-help-circle-outline
                  </v-icon>
                </template>
                <p class="text-body-2 pa-4 font-weight-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
                  dolor leo bibendum nisl. Ac ac id cras facilisi.
                </p>
              </v-menu>
            </div>
          </v-sheet>
        </v-card>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Step1",
  props: {
    nextScreen: Function
  }
};
</script>

<style scoped lang="scss">
.mo-step-1 {
  &__btn-icon {
    position: absolute;
    left: 5px;
  }
}
</style>
