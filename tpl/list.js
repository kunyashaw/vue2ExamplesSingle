var List = Vue.component('list', {
    template: "<ul><li v-for='(item,index) in dishList'><button @click='jumpToDetail(index)'>{{item}}</button></li></ul>",
    data: function () {
        return {
            dishList: ['鱼香肉丝', '京酱肉丝', '肉夹馍'],
            item: 1
        }
    },
    methods: {
        jumpToDetail: function (index) {
            myRouter.push('myDetail/' + index)
        }
    }
})

//  < li v-for='(item,index) in dishList '> <button >{{item}}</li> </button>