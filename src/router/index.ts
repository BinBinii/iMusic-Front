import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [{
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/sso/login/Login.vue')
  }, {
    path: '/register',
    name: 'Register',
    component: ()=>import('../views/sso/register/Register.vue')
  }, {
    path: '/song',
    name: 'Song',
    component: ()=>import('../views/song/Song.vue')
  }, {
    path: '/invite',
    name: 'Invite',
    component: ()=>import('../views/invite/Invite.vue')
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