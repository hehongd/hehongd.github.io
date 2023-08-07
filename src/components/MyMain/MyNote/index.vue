<template>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <div class="contanier">
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
      <router-view />
    </div>
</template>
<script setup>
import { ref,shallowRef,getCurrentInstance, watch } from "vue";
import {
  Document,
  Menu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import {useRouter} from "vue-router"
let { proxy } = getCurrentInstance();
const router = useRouter()
const menuList = ref([
  {title:'VUE3',path:'1',icon:shallowRef(Location),children:[{title:'Mixin组件复用',path:'/mixin',icon:shallowRef(Location),}]},
  {
    title:'new Date',path:'2',icon:shallowRef(Menu),
    children:[
      {title:'设置周下拉框/月下拉框',path:'/weekYear',icon:shallowRef(Menu)},
      {title:'设置前一周(前一月)数据',path:'/wyList',icon:shallowRef(Menu)}
    ]},
])
const defaultActive = ref('/mixin')
const isCollapse = ref(false)
const handleOpen = (key, keyPath) =>{
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) =>{
  console.log(key, keyPath)
}

</script>
<style lang="scss" scoped>
.contanier {
  height: calc(100% - 53px);
  display: flex;
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