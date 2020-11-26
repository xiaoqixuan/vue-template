export default {
  bind(el: any, binding) {
    function documentHandler(e):any {
      if (el.contains(e.target)) {
        return false;
      }
      if (binding.expression) {
        binding.value(false);
        return true;
      }

      return true;
    }
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  unbind(el) {
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  },
};
