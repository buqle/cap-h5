import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.css'
import { Divider,Icon,Toast,Lazyload,Loading,Swipe, SwipeItem,Skeleton } from 'vant'
Vue.use(Divider)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(Lazyload)
Vue.use(Loading)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Skeleton)

//过滤器
import * as custom from './utils/filters'
Object.keys(custom).forEach(key => Vue.filter(key, custom[key]))

import api from '@/api'
Vue.prototype.$api=api


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
