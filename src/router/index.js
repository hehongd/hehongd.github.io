import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //   path:'/404',
  //   component:() => import('@/views/404'),
  //   hidden:true
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router