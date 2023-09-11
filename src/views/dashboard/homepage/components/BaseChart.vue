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
    xAxis: {
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "rgb(160, 150, 167)",
        },
      },
      type: "category",
      data: [...new Array(12)].map((_item, index) => `${index + 1}月`),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        barWidth: 25,
        itemStyle: {
          color: "#409eff",
        },
        data: [60, 75, 55, 40, 100, 140, 160, 120, 140, 85, 95, 75],
        type: "bar",
      },
    ],
  });
};
</script>
  