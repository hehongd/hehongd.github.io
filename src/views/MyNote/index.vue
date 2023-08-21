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
        @select="handleMenu"
      >
        <el-sub-menu v-for="item in menuList" :key="item.path" :index="item.path">
          <template #title>
            <el-icon><component :is="item.icon"/></el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group v-for="n in item.children" :key="n.path">
            <el-menu-item :index="n.path">
              <!-- <svg-icon icon-class="user" /> -->
              {{ n.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="routerView" ref="refRouter" @scroll="addScroll">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted,computed} from "vue";
import {useRouter} from "vue-router"
// import axios from 'axios'
import { useUserStore } from "@/store/user"
import { getMenuInfo } from '@/api/menu.js'


const router = useRouter()
const menuList = ref([])
const defaultActive = ref('/mixin')
const isCollapse = ref(false)
const refRouter = ref(null)
const user = useUserStore()

const handleOpen = (key, keyPath) =>{console.log(key, keyPath)}
const handleClose = (key, keyPath) =>{console.log(key, keyPath)}
watch(() =>router.currentRoute.value.path,(newValue,oldValue)=> {
  defaultActive.value = newValue
},{ immediate: true })
onMounted( async() => {
  // let {data:res} = await axios.get('src/JSON/menu.json')
  let {data:res} = await getMenuInfo()
  menuList.value = res
  window.addEventListener('scroll',addScroll)
})

const handleMenu = (e) => {
  defaultActive.value= e
  refRouter.value.scrollTop = 0
}
const routerScrollTop = computed(() => user.routerScrollTop);
const addScroll = () => {
  user.scrollTop = refRouter.value.scrollTop
  // scrollTop 滚动的高度 + clientHeigh 可见区域的高度 = scrollHeight 文档内容实际高度 
  refRouter.value.scrollTop >100 ? user.bottomingOut = true : user.bottomingOut = false
}
watch(routerScrollTop, (newVal,oldVal) =>{
  refRouter.value.scrollTop = newVal
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