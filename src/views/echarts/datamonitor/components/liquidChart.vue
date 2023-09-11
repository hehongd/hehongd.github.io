<template>
  <div id="category" ref="chartRef"></div>
</template>
<script setup>
import { onMounted, reactive, ref, watch, markRaw } from "vue";
// 引入 echarts
import * as echarts from "echarts";
// 引入 liquidFill 系列所需的文件
import "echarts-liquidfill";
import { debounce } from "@/utils/antiShake.js";

const myChart = ref(null);
const chartRef = ref(null);
// const data = ref([{"value":"5258.6"}])
const resizeFn = debounce(() => {
  if (chartRef.value) {
    myChart.value?.resize();
  }
}, 200);
onMounted(() => {
  getChartData();
  window.addEventListener("resize", resizeFn);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeFn);
});

//模拟接口，获取echarts数据
const getChartData = async () => {
  // const { data } = await selectYearValue({
  //   year,
  // });
  const data = ref([{ value: 5258.6 }]);

  initEcharts(data.value);
};
// 渲染 echarts 图
const initEcharts = (data) => {
  // markRow：作用:标记一个对象,使其永远不会再成为响应式对象,屏幕缩小放大的时候就不会报错
  myChart.value = markRaw(echarts.init(chartRef.value));
  myChart.value.setOption({
    series: [
      {
        type: "liquidFill",
        radius: "85%",
        center: ["50%", "45%"],
        data: [0.48, 0.48, 0.48, 0.48],
        backgroundStyle: {
          color: {
            type: "linear",
            x: 1,
            y: 0,
            x2: 0.5,
            y2: 1,
            colorStops: [
              {
                offset: 1,
                color: "rgba(68, 145, 253, 0.55)",
              },
              {
                offset: 0.5,
                color: "rgba(68, 145, 253, 0.65)",
              },
              {
                offset: 0,
                color: "rgba(68, 145, 253, 1)",
              },
            ],
            globalCoord: false,
          },
        },
        outline: {
          borderDistance: 0,
          itemStyle: {
            borderWidth: 5,
            borderColor: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(53,142,215, 0)",
                },
                {
                  offset: 0.5,
                  color: "rgba(53,142,215, 0.45)",
                },
                {
                  offset: 1,
                  color: "rgba(53,142,215, 0.9)",
                },
              ],
              globalCoord: false,
            },
            shadowBlur: 10,
            shadowColor: "rgba(53,142,215, 0.9)",
          },
        },
        label: {
            formatter: data[0].value + "万",
            textStyle: {
              fontSize: 18,
            },
        },
      },
    ],
  });
  myChart.value.off("click");
  myChart.value.getZr().off("click");
  // 点击图表事件
  myChart.value.getZr().on("click", (params) => {
    // console.log(params);
  });
};

// watch(
//       year,
//       (nl, ol) => {
//         getChartData();
//       },
//       { lazy: false }
//     );

//     watch(
//       parentInfo,
//       (nl, ol) => {
//         getChartData();
//       },
//       { lazy: false, deep: true }
//     );
</script>
<style lang="scss" scoped>
#category {
  width: 100%;
  height: 100%;
}
</style>