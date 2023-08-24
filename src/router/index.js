import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/mixin',
    name: 'Mixin',
    component: ()=> import('@/views/MyNote/mixin.vue')
  },
  {
    path: '/scss',
    name: 'Scss',
    component: ()=> import('@/views/MyNote/scss.vue')
  },
  {
    path: '/weekYear',
    name: 'WeekYear',
    component: ()=> import('@/views/MyNote/weekYear.vue')
  },
  {
    path: '/wyList',
    name: 'WyList',
    component: ()=> import('@/views/MyNote/wyList.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: ()=> import('@/views/echarts/category')
  },
  {
    path: '/pie',
    name: 'Pie',
    component: ()=> import('@/views/echarts/pie')
  },
  {
    path: '/line',
    name: 'Line',
    component: ()=> import('@/views/echarts/line')
  },
  {
    path: '/bottomingOut',
    name: 'BottomingOut',
    component: ()=> import('@/views/scroll/bottomingOut')
  },
  {
    path:'/bulletinBoard',
    name:'BulletinBoard',
    component:()=> import('@/views/echarts/bulletinBoard')
  },
  {
    path:'/monitor',
    name:'Monitor',
    component:()=> import('@/views/echarts/monitor')
  },
  {
    path:'/datamonitor',
    name:'Datamonitor',
    component:()=> import('@/views/echarts/datamonitor')
  },
  {
    path:'/homepage',
    name:'Homepage',
    component:()=> import('@/views/dashboard/homepage')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router