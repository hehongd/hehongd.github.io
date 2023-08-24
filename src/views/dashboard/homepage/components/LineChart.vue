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
import { nextTick, onMounted, ref, watch, markRaw,reactive,defineProps } from "vue";
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
    default: "350px",
  },
  autoResize: {
    type: Boolean,
    default: true,
  },
  chartData: {
    type: Object,
    required: true,
  },
});
const { className, width,height,autoResize,chartData } = toRefs(props);
const chart = ref(null);
const chartRef = ref(null);
watch(
  chartData,
  (newVal, oldVal) => {
    initChart(newVal.actualData,newVal.expectedData);
  },
  { deep: true }
);
onMounted(() => {
  nextTick(() => {
    initChart(chartData.value.actualData,chartData.value.expectedData);
  });
  window.addEventListener('resize',resizeFn)
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeFn);
  if (!chart.value) {
      return
    }
    chart.value.dispose()
    chart.value = null
});
const resizeFn = debounce(() => {
    if(chartRef.value) {
      chart.value?.resize()
    }
},200)

const initChart = (expectedData, actualData) => {
  chart.value = markRaw(echarts.init(chartRef.value));
  chart.value.setOption({
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      boundaryGap: false,
      axisTick: {
        show: false,
      },
    },
    grid: {
      left: 10,
      right: 10,
      bottom: 20,
      top: 30,
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      padding: [5, 10],
    },
    yAxis: {
      axisTick: {
        show: false,
      },
    },
    legend: {
      data: ["expected", "actual"],
    },
    series: [
      {
        name: "expected",
        itemStyle: {
          color: "#FF005A",
          lineStyle: {
            color: "#FF005A",
            width: 2,
          },
        },
        smooth: true,
        type: "line",
        data: expectedData,
        animationDuration: 2800,
        animationEasing: "cubicInOut",
      },
      {
        name: "actual",
        smooth: true,
        type: "line",
        itemStyle: {
          color: "#3888fa",
          lineStyle: {
            color: "#3888fa",
            width: 2,
          },
          areaStyle: {
            color: "#f3f8ff",
          },
        },
        data: actualData,
        animationDuration: 2800,
        animationEasing: "quadraticOut",
      },
    ],
  });
};
</script>
