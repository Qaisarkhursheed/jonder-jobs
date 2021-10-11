import Vue from 'vue';
import axios from "axios";
import types from "@/types";
import router from "@/router";
import results from "@/types/calculations";
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
    test: {
      testStart: 0,
      itemsPerPage: 3,
      answers: [],
      inventory: [],
      position: 0,
      done: false,
      invalid: false,
      inProgress: false
    },
    userTests: [],
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
    },
    USER_TESTS: state => {
      return state.userTests;
    }
  },

  mutations: {
    RESET_TEST: state => {
      state.test = {
        testStart: 0,
        itemsPerPage: 3,
        answers: [],
        inventory: [],
        position: 0,
        done: false,
        invalid: false,
        inProgress: false
      };
    },
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
    SET_ELAPSED_TIME: ({ state, time }) => {
      state.test.elapsedTime = time;
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
    SET_USER_TESTS: (state, payload) =>  {
      state.userTests = [payload[payload.length - 1]];
    }
  },

  actions: {
    async SUBMIT_TEST (context) {
      try {
        context.commit('SET_LOADING', true);
        const answers = context.state.test.answers;
  
        const result = {
          invalid: context.state.test.invalid,
          answers: Object.keys(answers).map(key => answers[key]),
          timeElapsed: context.state.test.elapsedTime,// elapsedTimeInSeconds(context.state.test.testStart),
          dateStamp: Date.now()
        };

        let parsed = results.calculateResultScore(result);
        axios
          .post("/personality-test", {
            results: parsed
          })
          .then(res => {
            router.push({
              name: "PersonalityTestJobseekerResult",
              params: {
                id: res.data.data.id
              }
            });
            // context.commit('SET_RESULT', parsed);
            context.commit('SET_LOADING', false)
          });
  
        // context.commit('RESET_STATE')
      } catch (error) {
        context.commit('SET_LOADING', false);
      }
    },
    async FETCH_USER_TESTS ({ commit }, id) {
      axios
        .get(`/personality-test?user_id=${id}`)
        .then(res => {
          console.log('tests', res.data.data);
          commit('SET_USER_TESTS', res.data.data);
        })
    },
    FETCH_RESULT (context, id) {
      return axios
        .get(`/personality-test/${id}`);
    }
  },
};