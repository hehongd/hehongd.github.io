<template>
  <div style="height: 100%;width: 100%;"> 
  <el-row :gutter="20">
    <el-col :span="1.5">
      <el-radio-group v-model="user.isNotice" style="margin-bottom: 20px">
        <el-tooltip effect="dark" content="显示公告栏" placement="bottom-start">
          <el-radio-button :label="true"><el-icon> <Bell/></el-icon></el-radio-button>
        </el-tooltip>
        <el-tooltip effect="dark" content="隐藏公告栏" placement="bottom-start">
          <el-radio-button :label="false"><el-icon> <MuteNotification/></el-icon></el-radio-button>
        </el-tooltip>
      </el-radio-group>
    </el-col>
    <el-col :span="1.5">
      <el-radio-group v-model="user.isCollapse" style="margin-bottom: 20px">
        <el-tooltip effect="dark" content="显示菜单栏" placement="bottom-start">
          <el-radio-button :label="false"><el-icon> <DArrowRight/></el-icon></el-radio-button>
        </el-tooltip>
        <el-tooltip effect="dark" content="隐藏菜单栏" placement="bottom-start">
          <el-radio-button :label="true"><el-icon> <DArrowLeft/></el-icon></el-radio-button>
        </el-tooltip>
      </el-radio-group>
    </el-col>
  </el-row>
  <div class="contanier">
    <div class="menu-contanier">
        <el-menu
        class="el-menu-vertical-demo"
        router 
        :default-active="route.path" 
        :collapse="user.isCollapse"
        @select="handleMenu"
        >
            <menuItem v-for="item in menuList" :item="item" :key="item.path" />
        </el-menu>
    </div>
    <div class="routerView" ref="refRouter" @scroll="addScroll">
      <router-view />
    </div>
  </div>
</div>
</template>
<script setup>
import { ref, watch, onMounted,computed} from "vue";
import {useRouter} from "vue-router"
// import axios from 'axios'
import { useUserStore } from "@/store/modules/user"
import { getMenuInfo } from '@/api/menu.js'
import menuItem from './menuItem.vue'
import { useRoute } from "vue-router"
import {getMenuData} from "@/utils/menu.js"

const route = useRoute()



const router = useRouter()
const menuList = ref([])
const defaultActive = ref('/mixin')
const isCollapse = ref(false)
const refRouter = ref(null)
const user = useUserStore()
const isNotice = ref(true)

watch(isNotice,(newVal,oldVal) => {
  user.isNotice = newVal
})
watch(isCollapse,(newVal,oldVal) => {
  user.isCollapse = newVal
})

watch(() =>router.currentRoute.value.path,(newValue,oldValue)=> {
  defaultActive.value = newValue
},{ immediate: true })
onMounted( async() => {
  // console.log(router,'8')
  // let {data:res} = await axios.get('src/JSON/menu.json')
  // let {data:res} = await getMenuInfo()
  
  menuList.value = getMenuData
  window.addEventListener('scroll',addScroll)
})

const handleMenu = (e) => {
  user.menuPath = e
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
<style lang="scss" scoped>
        
.contanier {
  height: calc(100% - 54px);
  display: flex;
  overflow: hidden;
  .menu-contanier {
    overflow-y: auto;
    overflow-x: hidden;
    width: 300px;
    &::-webkit-scrollbar {  
        width: 4px;  
        height: 4px;  
    }  
    &::-webkit-scrollbar-track {  
        border-radius: 5px;  
        -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);  
        background-color: #fbfbfb;  
    }  
    &::-webkit-scrollbar-thumb {  
        border-radius: 5px;  
        -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);  
        background-color: #d3dce6;  
    } 
  }
  
  .routerView {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
}
.el-menu-vertical-demo {
    background: #304156;
    height: 100%;
}
::v-deep .el-sub-menu .el-menu {
    background: #304156;
}

</style>