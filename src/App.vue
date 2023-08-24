
<template>
  <div v-if="isShow">
    <my-header></my-header>
    <div class="contanier">
      <left-side v-show="isNotice"></left-side>
      <my-main></my-main>
    </div>
  </div>
  <div v-else class="echarts-contanier">
      <nav-bar></nav-bar>
      <div class="main-container">
        <router-view v-slot="{ Component }">
          <keep-alive include="bulletinBoard,monitor,datamonitor">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
  </div>
</template>

<script setup>

import { onMounted,computed, watch,ref } from "vue"
import MyHeader from "@/components/MyHeader.vue"
import LeftSide from "@/components/LeftSide.vue"
import MyMain from "@/views/MyMain"
import { getFlowers } from "@/utils"
import { useUserStore } from "@/store/modules/user"
import navBar from "@/components/navBar.vue"

const isShow = ref(true)
onMounted(() => {getFlowers()})
const user = useUserStore()
const menuPath = computed(() => user.menuPath);
const isNotice = computed(() => user.isNotice);
const istoggle = ref(true)

const whiteList = [ '/bulletinBoard','/monitor','/datamonitor']


watch(menuPath,(newVal,oldVal) => {
  if( whiteList.includes(newVal)) {
    isShow.value = false
  }else {
    isShow.value = true
  }
  
})

</script>

<style lang="scss" scoped>
.contanier {
  display: flex;
  height: calc( 100vh - 78px);
}
.echarts-contanier {
  // display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    background: url("@/assets/images/monitor/bg.png") no-repeat center center;
    background-size: cover;
  .main-container {
    width: 100%;
    height: calc(100% - 72px);
  }
}
</style>
