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
const { className,width,height} = toRefs(props)
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
  console.log(chartRef.value);
  if (chartRef.value) {
    chart.value?.resize();
  }
}, 200);
const initChart = () => {
  chart.value = markRaw(echarts.init(chartRef.value));
  chart.value.setOption({
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      left: "center",
      bottom: "10",
      data: ["Industries", "Technology", "Forex", "Gold", "Forecasts"],
    },
    series: [
      {
        name: "WEEKLY WRITE ARTICLES",
        type: "pie",
        roseType: "radius",
        radius: [15, 95],
        center: ["50%", "38%"],
        data: [
          { value: 320, name: "Industries" },
          { value: 240, name: "Technology" },
          { value: 149, name: "Forex" },
          { value: 100, name: "Gold" },
          { value: 59, name: "Forecasts" },
        ],
        animationEasing: "cubicInOut",
        animationDuration: 2600,
      },
    ],
  });
};
</script>
