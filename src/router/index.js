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
  },
  {
    path:'/csstricks',
    name:'clock',
    component:()=> import('@/views/css/clock')
  },
  {
    path:'/surrounding',
    name:'Surrounding',
    component:()=> import('@/views/css/surrounding')
  },
  {
    path:'/rotation',
    name:'Rotation',
    component:()=> import('@/views/css/rotation')
  },
  {
    path:'/htmltag',
    name:'HtmlTag',
    component:()=> import('@/views/htmlTag')
  },
  {
    path:'/distpicker',
    name:'Distpicker',
    component:() => import('@/views/select/distpicker')
  },
  {
    path:'/externalLinks',
    name:'ExternalLinks',
    component:() => import('@/views/externalLinks')
  },
  {
    path:'/carousel',
    name:'Carousel',
    component:() => import('@/views/example/carousel')
  },
  {
    path:'/fullLcreenLoading',
    name:'FullLcreenLoading',
    component:() => import('@/views/example/fullLcreenLoading')
  },
  {
    path:'/pacman',
    name:'Pacman',
    component:() => import('@/views/example/pacman')
  },
  {
    path:'/mousehover',
    name:'Mousehover',
    component:() => import('@/views/example/mousehover')
  },
  {
    path:'/list',
    name:'List',
    component:() => import('@/views/example/list')
  },
  {
    path:'/grid',
    name:'Grid',
    component:() => import('@/views/example/grid')
  },
  {
    path:'/gridTemplateColumns',
    name:'GridTemplateColumns',
    component:() => import('@/views/example/grids/gridTemplateColumns.vue')
  },
  {
    path:'/gridTemplateRows',
    name:'GridTemplateRows',
    component:() => import('@/views/example/grids/gridTemplateRows.vue')
  },
  {
    path:'/gridTemplateAreas',
    name:'GridTemplateAreas',
    component:() => import('@/views/example/grids/gridTemplateAreas.vue')
  },
  {
    path:'/gridAutoFlow',
    name:'GridAutoFlow',
    component:() => import('@/views/example/grids/gridAutoFlow.vue')
  },
  {
    path:'/justifyAlign',
    name:'JustifyAlign',
    component:() => import('@/views/example/grids/justifyAlign.vue')
  },
  {
    path:'/gridAutoxx',
    name:'GridAutoxx',
    component:() => import('@/views/example/grids/gridAutoxx.vue')
  },
  {
    path:'/secondaryMenu',
    name:'SecondaryMenu',
    component:() => import('@/views/example/secondaryMenu')
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router