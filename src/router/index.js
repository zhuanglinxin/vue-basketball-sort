import Vue from 'vue'
import VueRouter from 'vue-router'

// import Result from 'components/result/result'

Vue.use(VueRouter)

  const routes = [
  //  {
  //    path: '/result',
  //    component: Result
  //  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
