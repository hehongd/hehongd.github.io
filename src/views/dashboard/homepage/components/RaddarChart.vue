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

const animationDuration = 3000;

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
  console.log(chartRef.value);
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
    radar: {
      radius: "66%",
      center: ["50%", "42%"],
      splitNumber: 8,
      splitArea: {
        areaStyle: {
          color: "rgba(127,95,132,.3)",
          opacity: 1,
          shadowBlur: 45,
          shadowColor: "rgba(0,0,0,.5)",
          shadowOffsetX: 0,
          shadowOffsetY: 15,
        },
      },
      indicator: [
        { name: "Sales" },
        { name: "Administration" },
        { name: "Information Techology" },
        { name: "Customer Support" },
        { name: "Development" },
        { name: "Marketing" },
      ],
    },
    legend: {
      left: "center",
      bottom: "10",
      data: ["Allocated Budget", "Expected Spending", "Actual Spending"],
    },
    series: [
      {
        type: "radar",
        symbolSize: 0,
        areaStyle: {
          shadowBlur: 13,
          shadowColor: "rgba(0,0,0,.2)",
          shadowOffsetX: 0,
          shadowOffsetY: 10,
          opacity: 1,
        },
        data: [
          {
            value: [5000, 7000, 12000, 11000, 15000, 14000],
            name: "Allocated Budget",
          },
          {
            value: [4000, 9000, 15000, 15000, 13000, 11000],
            name: "Expected Spending",
          },
          {
            value: [5500, 11000, 12000, 15000, 12000, 12000],
            name: "Actual Spending",
          },
        ],
        animationDuration: animationDuration,
      },
    ],
  });
};
</script>
