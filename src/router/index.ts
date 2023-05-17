import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [{
    path: '/',
    name: 'Login',
    component: ()=>import('../views/sso/login/Login.vue')
  }, {
    path: '/song',
    name: 'Song',
    component: ()=>import('../views/song/Song.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
      return {top: 0}
  }
})

// router.beforeEach((to, from, next) => {
//   next()
// })

// router.afterEach((to, from, failure) => {
  
// })

export { router }