import axios from "axios";
import fileDownload from "js-file-download";

export default {
  namespaced: true,

  state: {},

  getters: {},

  mutations: {},

  actions: {
    async fetchInvoices() {
      try {
        const resp = await axios.get("/transactions");
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      }
    },

    async downloadInvoice(context, { id, number }) {
      try {
        const resp = await axios.get("/download-invoice/" + id, {
          responseType: "blob"
        });
        fileDownload(resp.data, `invoice-${number || id}.pdf`);
        return resp;
      } catch (err) {
        return Promise.reject(err.response);
      }
    }
  }
};
