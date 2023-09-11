<template>
  <div
    :class="className"
    :style="{ height: height, width: width }"
    ref="chartRef"
  ></div>
</template>

<script setup>
import * as echarts from "echarts";
import "echarts/theme/macarons"; // echarts theme
import { onMounted, nextTick, defineProps, ref, toRefs } from "vue";
import { debounce } from "@/utils/antiShake.js";

const animationDuration = 6000;

const props = defineProps({
  className: {
    type: String,
    default: "chart",
  },
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "300px",
  },
});
const { className, width, height } = toRefs(props);
const chart = ref(null);
const chartRef = ref(null);
onMounted(() => {
  nextTick(() => {
    initChart();
  });
  window.addEventListener("resize", resizeFn);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeFn);
  if (!chart.value) {
    return;
  }
  chart.value.dispose();
  chart.value = null;
});
const resizeFn = debounce(() => {
  if (chartRef.value) {
    chart.value?.resize();
  }
}, 200);
const initChart = () => {
  chart.value = markRaw(echarts.init(chartRef.value));
  chart.value.setOption({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      top: 10,
      left: "2%",
      right: "2%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "pageA",
        type: "bar",
        stack: "vistors",
        barWidth: "60%",
        data: [79, 52, 200, 334, 390, 330, 220],
        animationDuration,
      },
      {
        name: "pageB",
        type: "bar",
        stack: "vistors",
        barWidth: "60%",
        data: [80, 52, 200, 334, 390, 330, 220],
        animationDuration,
      },
      {
        name: "pageC",
        type: "bar",
        stack: "vistors",
        barWidth: "60%",
        data: [30, 52, 200, 334, 390, 330, 220],
        animationDuration,
      },
    ],
  });
};
</script>
