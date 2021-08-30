
export default {
  componentUpdated(el, binding, node) {
    node.componentInstance.lazySearch = '';
  }
};