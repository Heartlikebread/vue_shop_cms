import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/home/Home.vue'
import Chart from '../views/chart/chart.vue'
import User from '../views/resource/user/user.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [{
        path: '/chart',
        name: 'chart',
        component: Chart,
      },
      {
        path: '/user',
        name: 'user',
        component: User,
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//掛載路由守衛
router.beforeEach((to, from, next) => {
  //to將要訪問的路徑
  //from 代表從哪個路徑而來
  //next 是一個函數，表示放行   若是寫成next('/login')則是強制跳轉

  if (to.path === '/') return next();
  //判斷token
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/')

  next()


})
export default router