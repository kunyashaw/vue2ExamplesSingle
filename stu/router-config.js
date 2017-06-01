
import activePublic from './components/index.vue'
import step1 from './components/step1.vue'
import step2 from './components/step2.vue'
import step3 from './components/step3.vue'
import step4 from './components/step4.vue'
import step5 from './components/step4.vue'


export default [
  {
    // 配置路由，当路径为'/',使用组件
    path:'/activePublic',component:activePublic,
    // 配置子路由
    children:[
       // 路径为''，使用组件step1
      { path: ''      , component: step1  },
       // 路径为'//step1'，使用组件step1
      { path: 'step1', component: step1  },
      // 路径为'//step2'，使用组件step2
      { path: 'step2', component: step2  },
      { path: 'step3', component: step3  },
      { path: 'step4', component: step4  },
      { path: 'step5', component: step5  }
    ]
  }
]