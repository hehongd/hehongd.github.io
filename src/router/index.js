import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/mixin',
    name: 'Mixin',
    component: ()=> import('../components/MyMain/MyNote/mixin.vue')
  },
  {
    path: '/weekYear',
    name: 'WeekYear',
    component: ()=> import('../components/MyMain/MyNote/weekYear.vue')
  },
  {
    path: '/wyList',
    name: 'WyList',
    component: ()=> import('../components/MyMain/MyNote/wyList.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router