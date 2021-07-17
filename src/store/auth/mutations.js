export default {
  SET_AUTHENTICATED(state, value) {
    state.authenticated = value;
  },
  SET_ONBOARDING_STATUS(state, value) {
    state.onBoardingCompleted = value;
  },

  SET_MESSAGE(state, value) {
    state.message = value;
  }
};