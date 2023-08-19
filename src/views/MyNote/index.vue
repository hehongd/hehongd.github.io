<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
  <div class="contanier">
    <div class="menu-contanier">
      <el-menu
        router
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        @select="(e)=>defaultActive= e"
      >
        <el-sub-menu v-for="item in menuList" :key="item.path" :index="item.path">
          <template #title>
            <el-icon><component :is="item.icon"/></el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group v-for="n in item.children" :key="n.path">
            <el-menu-item :index="n.path">{{ n.title }}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="routerView">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { ref,shallowRef,getCurrentInstance, watch, onMounted } from "vue";
import {
  Document,
  Menu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import {useRouter} from "vue-router"
import { getMenu } from '@/api/menu.js'
import axios from 'axios'
let { proxy } = getCurrentInstance();
const router = useRouter()
const menuList = ref([
  { 
    title:'VUE3',path:'1',icon:shallowRef(Location),
    children:[
      {title:'Mixin组件复用',path:'/mixin',icon:shallowRef(Location)},
      {title:'SCSS使用',path:'/scss',icon:shallowRef(Location)},
    ] 
  },
  {
    title:'new Date',path:'2',icon:shallowRef(Menu),
    children:[
      { title:'设置周下拉框/月下拉框',path:'/weekYear',icon:shallowRef(Menu) },
      { title:'设置前一周(前一月)数据',path:'/wyList',icon:shallowRef(Menu) }
    ]
  },
  { title:'ECHARTS',path:'3',icon:shallowRef(Location),
    children:[
      { title:'柱状图',path:'/category',icon:shallowRef(Location) },
      { title:'扁图',path:'/pie',icon:shallowRef(Location) },
      { title:'线性图',path:'/line',icon:shallowRef(Location) },
    ] 
  },
  // { title:'截图软件',path:'4',icon:shallowRef(Location),
  //   children:[
  //     { title:'柱状图',path:'/category',icon:shallowRef(Location) },
  //   ] 
  // },
])
// const menuList = ref([])
const defaultActive = ref('/mixin')
const isCollapse = ref(false)
const handleOpen = (key, keyPath) =>{
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) =>{
  console.log(key, keyPath)
}
// const request =axios.post('@/views/JSON/menu.json').then(res => {console.log(res)})
watch(() =>router.currentRoute.value.path,(newValue,oldValue)=> {
  defaultActive.value = newValue
},{ immediate: true })
onMounted( async() => {
  // let data1 = await fetch('../../JSON/menu.json')
  // console.log(data1)
  // let data = await getMenu()
  // console.log(data)
  let {data,res} = await axios.get('src/JSON/menu.json')
  console.log(res)
})
</script>
<style lang="scss" scoped>.contanier {
  height: calc(100% - 53px);
  display: flex;
  .menu-contanie {
    width: 100%;
    height: 100%;
  }
  .routerView {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-vertical-demo {
    background: #304156;
    height: 100%;
}
.el-menu-vertical-demo .el-menu-item.is-active {
  background-color: rgba(0,0,0,0.5);
  color: #38B2FF;
}

</style>