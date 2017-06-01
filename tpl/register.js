
const register = Vue.component('register-component', {
    template: '<h1> Hello Register</h1>',
    created: function () {
        console.log(this.$route.params);
    }
})
