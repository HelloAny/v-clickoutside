Vue.directive('clickoutside', {
    bind: function (el, binding, vnode) {
        function documentHandler(e) {
            if (el.contains(e.target)) {
                console.log('contains');
                return false;
            }
            if (binding.expression) {
                binding.value();
                console.log('binding.expression');
            }
        }
        el._vueClickOutSide_ = documentHandler;
        console.log('listen');
        document.addEventListener('mouseover', documentHandler);
    },
    unbind: function (el, binding) {
        document.removeEventListener('click', el_vueClickOutSide_);
        delete el._vueClickOutSide_;
        console.log('2');

    }
})