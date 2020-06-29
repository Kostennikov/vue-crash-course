import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

import Main from '@/components/Main'
import About from '@/components/About'


//alsdfjsal;jfslfj








const routes = [

  { path: '/', component: Main},
  { path: '/About', component: About}
]
const router = new VueRouter({
    routes:routes

})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')


