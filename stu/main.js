// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'element-ui/lib/theme-default/index.css'
import Element from 'element-ui'
import VueRouter from 'vue-router'
import routeConfig from './router-config'
import VueResource from 'vue-resource'

Vue.use(Element)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
      routes: routeConfig
})


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
 
})
