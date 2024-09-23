<template>
    <div :style="container" class="content">
        <el-carousel :interval="4000" type="card" height="100px">
            <el-carousel-item v-for="(item,index) in images" :key="item" @click="handleChange(index)">
            <img :src="item" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import heilt from "@/assets/city/mini/黑龙潭.jfif"
import guizhou from "@/assets/city/mini/中国，贵州.jfif"
import huangshan from "@/assets/city/mini/中国，黄山.jfif"
import jslcc from "@/assets/city/mini/中国，金山岭长城.jfif"
import leshan from "@/assets/city/mini/中国，乐山.jfif"
import liboxian from "@/assets/city/mini/中国，荔波县.jfif"
import zydzgg from "@/assets/city/mini/中国，张掖地质公园.jfif"
import chongqing from "@/assets/city/mini/中国，重庆1.jfif"
// import sanxi from "@/assets/city/mini/中国陕西省.jfif"
import shuoyangxian from "@/assets/city/mini/中国朔阳县.jfif"

import heiltMax from "@/assets/city/中国，丽江黑龙潭.jfif"
import guizhouMax from "@/assets/city/中国，贵州鸭池河大桥.jfif"
import huangshanMax from "@/assets/city/中国，安徽省的黄山.jfif"
import jslccMax from "@/assets/city/中国金山岭长城.jfif"
import leshanMax from "@/assets/city/中国，乐山的濠上大桥.jfif"
import liboxianMax from "@/assets/city/中国，荔波县樟江风景名胜区.jfif"
import zydzggMax from "@/assets/city/中国，甘肃省张掖地质公园的群山.jfif"
import chongqingMax from "@/assets/city/中国重庆石宝寨宝塔.jfif"
import shuoyangxianMax from "@/assets/city/中国，阳朔县喀斯特山峦之上的云雾.jfif"
const images = ref([heilt,guizhou,huangshan,jslcc,leshan,liboxian,zydzgg,chongqing,shuoyangxian]);
const backgroundColor = ref(heiltMax);
function handleChange(index) {
  if(index == 0) {
    backgroundColor.value = heiltMax;
  }else if(index == 1){
    backgroundColor.value = guizhouMax;
  }else if(index == 2) {
    backgroundColor.value = huangshanMax;
  } else if(index == 3) {
    backgroundColor.value = jslccMax;
  } else if(index == 4) {
    backgroundColor.value = leshanMax;
  } else if(index == 5) {
    backgroundColor.value = liboxianMax;
  } else if(index == 6) {
    backgroundColor.value = zydzggMax;
  } else if(index == 7) {
    backgroundColor.value = chongqingMax;
  } else if(index == 8) {
    backgroundColor.value = shuoyangxianMax;
  }
}
const container = computed(() =>({
    background:'url('+backgroundColor.value+')' + 'no-repeat center center',
}))
</script>

<style lang="scss" scoped>
.content {
    height: 100%;
    width: 100%;
}
.el-carousel--horizontal {
    width: 363px !important;
    margin: auto;

}
::v-deep .el-carousel__indicator--horizontal {
    width: 10px !important;
    display: none;
}

.el-carousel__item--card {
    width: 180px !important;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 100px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

