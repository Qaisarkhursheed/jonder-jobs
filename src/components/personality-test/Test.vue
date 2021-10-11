<template>
  <v-card
    class="pa-8"
    flat
  >
    <div class="personality-test">
      <h2 class="text-center">
        {{ $t("personalityTest.title") }}
      </h2>

      <v-row class="pt-6">
        <v-col
          cols="10"
          class="pa-0"
        >
        </v-col>
        <v-col>
          <Timer @timer-tick="(val) => elapsedTime = val" />
        </v-col>
      </v-row>

      <v-progress-linear
        :value="GET_PROGRESS"
        height="25"
        reactive
        rounded
        background-opacity="0.1"
        class="mb-6"
        :style="GET_PROGRESS > 49 && { color: 'white' }"
      >
        {{ GET_PROGRESS }}%
      </v-progress-linear>

      <!-- Question with choices  -->
      <div
        v-for="question in GET_CURRENT_QUESTIONS"
        :key="question.id"
      >
        <h2>{{ $t(`personalityTest.${question.text}`)}}</h2>
        <v-radio-group
          :value="GET_CURRENT_ANSWER(question.id)"
          @change="answer => SET_ANSWER({ id: question.id, answer } )"
        >
          <v-radio
            v-for="(choice, i) in question.choices"
            :key="i"
            :name="question.id"
            :value="choice.score"
            color="secondary"
            :label="$t(`personalityTest.${choice.text}`)"
          />
        </v-radio-group>
      </div>

      <!-- Prev, next toolbar-->
      <v-row class="justify-center pt-4">
        <div v-if="!test.done">
          <v-btn
            large
            color="primary"
            :disabled="BACK_BUTTON_STATE"
            class="mr-2"
            @click="PREVIOUS_QUESTIONS"
          >
            {{ $t("personalityTest.back") }}
          </v-btn>

          <v-btn
            large
            color="primary"
            :disabled="NEXT_BUTTON_STATE"
            @click="nextQ"
          >
            {{ $t("personalityTest.next") }}
          </v-btn>
        </div>

        <div
          v-else-if="loading"
          class="text-center"
        >
          <v-progress-circular
            indeterminate
            color="secondary"
            size="128"
          />
        </div>

        <div v-else>
          <v-btn
            large
            color="secondary"
            @click="SUBMIT_TEST"
          >
            {{ $t("personalityTest.submit") }}
          </v-btn>
        </div>
      </v-row>

    </div>
  </v-card>
</template>

<script>

import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import Timer from "@/components/Timer";

export default {

  name: "PersonalityTest",

  components: {
    Timer
  },
  data() {
    return {
      elapsedTime: null,
    }
  },
  created() {
    this.INIT_TEST();
  },
  beforeDestroy() {
    this.RESET_TEST();
  },
  methods: {
    ...mapMutations('personalityTest', ['INIT_TEST', 'SET_ANSWER', 'NEXT_QUESTIONS', 'PREVIOUS_QUESTIONS', 'SET_ITEMS_PER_PAGE', 'RESET_TEST', 'SET_ELAPSED_TIME']),
    ...mapActions('personalityTest', ['SUBMIT_TEST']),
    submitTest() {
      this.SET_ELAPSED_TIME(this.elapsedTime);
      this.SUBMIT_TEST();
    },
    nextQ() {
      this.NEXT_QUESTIONS(this.elapsedTime);
    }
  },

  computed: {
    ...mapState('personalityTest', ['test', 'development', 'form', 'loading']),
    ...mapGetters('personalityTest', ['GET_CURRENT_QUESTIONS', 'GET_PROGRESS', 'NEXT_BUTTON_STATE', 'BACK_BUTTON_STATE', 'GET_CURRENT_ANSWER'])
  },
};

</script>