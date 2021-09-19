import Vue from 'vue';
import types from "@/types";
import calculateResult from "@/types/calculations";

const getTestData = () => {
  let questions = types.PERSONALITY_QUESTIONS;
  let choices = types.PERSONALITY_QUESTION_CHOICES;

  const inventory = questions;
  return inventory.map((question, i) => Object.assign(question, { num: ++i, choices: choices[question.keyed] }));
};


export default {
  namespaced: true,

  state: {
    development: process.env.NODE_ENV === 'development',
    slide: 0,
    loading: false,
    result: false,
    compareResult: false,
    snackbar: {
      active: false,
      message: false,
      type: false
    },
    test: {
      testStart: 0,
      itemsPerPage: 3,
      answers: [],
      inventory: [],
      position: 0,
      done: false,
      invalid: false,
      inProgress: false
    }
  },

  getters: {
    GET_CURRENT_QUESTIONS: ({ test }) => {
      return test.inventory.slice(test.position, test.position + test.itemsPerPage);
    },
    GET_CURRENT_ANSWER: ({ test }) => id => {
      return test.answers[id] ? test.answers[id].score : '';
    },
    GET_PROGRESS: state => {
      return Math.round(Object.keys(state.test.answers).length / state.test.inventory.length * 100);
    },
    NEXT_BUTTON_STATE: ({ test }) => {
      if (test.inProgress) return true;
      const currentQuestions = test.inventory.slice(test.position, test.position + test.itemsPerPage);
      return currentQuestions.filter(item => !test.answers[item.id]).length !== 0;
    },
    BACK_BUTTON_STATE: ({ test }) => {
      return test.position < test.itemsPerPage;
    },
    GET_RESULTS: state => {
      return state.result;
    }
  },

  mutations: {
    // RESET_STATE: state => {
    //   Object.assign(state, getDefaultState());
    // },
    INIT_TEST: state => {
      state.test.inventory = getTestData();
      state.test.testStart = Date.now();
    },
    SET_SLIDE: (state, slide) => {
      state.slide = slide;
    },
    NEXT_SLIDE: state => {
      state.slide++;
    },
    PREV_SLIDE: state => {
      state.slide--;
    },
    SET_ITEMS_PER_PAGE: (state, itemsPerPage) => {
      state.test.itemsPerPage = itemsPerPage;
    },
    SET_ANSWER: async (state, { id, answer }) => {
      const { domain, facet } = state.test.inventory.find(q => q.id === id);
      const lastAnswerId = Object.keys(state.test.answers).slice(-1)[0];
      Vue.set(state.test.answers, id, { questionID: id, score: parseInt(answer), domain, facet });
  
      if (state.test.itemsPerPage === 1) {
        // Avoids skipping question if user changes answer within 700 ms on
        // 1 itemsPerPage
        if (lastAnswerId !== id && state.test.position <= Object.keys(state.test.answers).length) {
          state.test.inProgress = true;
          // await sleep(700);
          state.test.position += state.test.itemsPerPage;
          state.test.inProgress = false;
        }
  
        window.scrollTo(0, 0);
      }

      if (Object.keys(state.test.answers).length >= state.test.inventory.length) {
        state.test.done = true;
      }
    },
    NEXT_QUESTIONS: ({ test }) => {
      window.scrollTo(0, 0)
      if (test.position + test.itemsPerPage <= Object.keys(test.answers).length) {
        test.position += test.itemsPerPage;
      }
    },
    PREVIOUS_QUESTIONS: ({ test }) => {
      test.position -= test.itemsPerPage;
    },
    SET_RESULT: (state, payload) => {
      state.result = payload;
    },
    SET_COMPARE_RESULT: (state, payload) => {
      state.compareResult = payload;
    },
    SET_LOADING: (state, payload) => {
      state.loading = payload;
    },
  },

  actions: {
    async SUBMIT_TEST (context) {
      try {
        context.commit('SET_LOADING', true);
        const answers = context.state.test.answers;
  
        const result = {
          // testId: getInfo.shortId,
          invalid: context.state.test.invalid,
          answers: Object.keys(answers).map(key => answers[key]),
          timeElapsed: 532,// elapsedTimeInSeconds(context.state.test.testStart),
          dateStamp: Date.now()
        };

        let parsed = calculateResult(result);
        context.commit('SET_RESULT', parsed);
        // localStorage.setItem('resultId', id);
  
        // context.commit('RESET_STATE')
        // context.commit('SET_LOADING', false)
      } catch (error) {
        // context.commit('SET_SNACKBAR', { msg: error.message, type: 'error' })
        context.commit('SET_LOADING', false);
      }
    }
  },
};