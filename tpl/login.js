
const login = Vue.component('login-component', {
    template: '<div><h1> Hello Login</h1> <br/>' +
    '<button @click="jumpToMain">login</button> <button @click="jumpToRegister">register</button> </div>',
    methods: {
        // 通过js的方式跳转
        jumpToMain: function () {
            router.push('myMain')
        },
        jumpToRegister: function () {
            router.push('myRegister/20')
        }
    }
})
