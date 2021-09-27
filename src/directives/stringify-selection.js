export default {
  componentUpdated(el, binding, node) {
      node.data.model.value.forEach(element => {
        if (typeof element == "string") {
          let ind = node.data.model.value.indexOf(element);
          node.data.model.value[ind] = parseInt(element);
        }
      });
  }
};
