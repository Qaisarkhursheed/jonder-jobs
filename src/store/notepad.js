import axios from "axios";

export default {
  namespaced: true,

  state: {
    notepad: null,
    notepadDetails: null
  },

  getters: {
    notepad(state) {
      return state.notepad;
    },

    notepadDetails(state) {
      return state.notepadDetails;
    }
  },

  mutations: {
    SET_NOTEPAD(state, value) {
      state.notepad = value;
    },

    SET_NOTEPAD_DETAILS(state, value) {
      state.notepadDetails = value;
    }
  },

  actions: {
    getAllNotepads({ commit }, params) {
      if (!params) params = { offset: 0, limit: 2 };
      return axios
        .get("/notepad/" + params.offset + "/" + params.limit)
        .then(response => {
          commit("SET_NOTEPAD", response.data);
        })
        .catch(() => {
          commit("SET_NOTEPAD", null);
        });
    },

    async getNotepad({ commit }, notepadId) {
      return axios
        .get("/notepad/" + notepadId)
        .then(response => {
          if (response.data.success)
            commit("SET_NOTEPAD_DETAILS", response.data.notepad);
        })
        .catch(() => {
          commit("SET_NOTEPAD_DETAILS", null);
        });
    },

    createNotepad(context, notepadData) {
      return axios.post("/notepad/", notepadData);
    },

    updateNotepad({ state }, notepadData) {
      axios.put("/notepad/" + state.notepadDetails.id, notepadData);
    },

    deleteNotepad(context, notepadId) {
      return axios.delete("/notepad/" + notepadId);
    }
  }
};
