var Detail = Vue.component('detail', {
    template: "<div> <h1>详情数据为：{{id}}</h1> </div>",
    data: function () {
        return {
            id: 0
        }
    },
    created: function () {
        this.id = this.$route.params.id
    }
})