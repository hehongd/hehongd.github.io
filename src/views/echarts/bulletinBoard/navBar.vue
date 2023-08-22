<template>
  <div class="nav-wrapper">
    <div class="bar-title" @click.stop="toHome">大数据分析系统</div>
    <div class="time">{{ date }} {{ time }}</div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { getDate, getTime } from "@/utils/date.js";

    //年月日
    const date = getDate();
    //时分秒
    const time = ref(getTime());
    onMounted(() => {
      setInterval(() => {
        time.value = getTime();
      }, 1000);
    }) 
</script>

<style lang="scss" scoped>

.nav-wrapper {
  height: 65px;
  line-height: 50px;
  width: 100%;
  background: url("@/assets/images/nav.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  position: relative;
  color: #b3efff;

  .bar-title {
    font-size: 1.23rem;
    font-family: "黑体";
    cursor: pointer;
  }

  .time {
    position: absolute;
    right: 8%;
    top: 50%;
    transform: translateY(-35%);
    font-family: "Time Number";
    font-weight: bold;
    font-size: 1.22rem;
  }
}

</style>
