var app = new Vue({
    el: '#app',
    data: {
        show: false
    },
    methods: {
        handleClose: function () {
            this.show = false;
            console.log('handleClose');

        },
        handleEnter: function () {
            this.show = true;
        }
    },
})