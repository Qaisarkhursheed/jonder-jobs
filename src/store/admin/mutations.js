export default {
  SET_CMS_LISTS(state, value) {
    state.cms = {...state.cms, ...value};
  },

  SET_CMS_LIST_TYPE(state, value) {
    state.cms[value.type] = value.data;
  },
};