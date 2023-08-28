<template>
  <div id="category" ref="chartRef"></div>
</template>
<script setup>
import { onMounted, reactive, ref, watch, markRaw } from "vue";
// 引入 echarts
import * as echarts from "echarts";
import { debounce } from "@/utils/antiShake.js";
import "echarts-wordcloud";

const myChart = ref(null);
const chartRef = ref(null);
onMounted(() => {
  getPieData();
  window.addEventListener("resize", resizeFn);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeFn);
});
const resizeFn = debounce(() => {
  if (chartRef.value) {
    myChart.value?.resize();
  }
}, 200);
//模拟接口，获取echarts数据
const getPieData = async () => {
  // const { data } = await selectTypeData({
  //   abcode,
  //   year,
  // });
  const data = ref([
    {
      name: "小米",
      value: "21.84",
    },
    {
      name: "联想",
      value: "499.11",
    },
    {
      name: "华为",
      value: "965.26",
    },
    {
      name: "格力",
      value: "958.63",
    },
    {
      name: "海尔",
      value: "255.81",
    },
    {
      name: "华硕",
      value: "710.41",
    },
    {
      name: "法拉利",
      value: "672.77",
    },
    {
      name: "苹果",
      value: "571.46",
    },
    {
      name: "三星",
      value: "909.93",
    },
    {
      name: "索尼",
      value: "171.56",
    },
    {
      name: "劳斯莱斯",
      value: "638.39",
    },
    {
      name: "保时捷",
      value: "927.85",
    },
  ]);
  initEcharts(data);
};

// 渲染 echarts 图
const initEcharts = (data) => {
  const colorList = ["#28CAD8", "#E5A214", "#01D2D1", "#F69F73", "#39E569"];
  // markRow：作用:标记一个对象,使其永远不会再成为响应式对象,屏幕缩小放大的时候就不会报错
  myChart.value = markRaw(echarts.init(chartRef.value));
  myChart.value.setOption(
    {
      title: {
        show: data.value.length === 0,
        top: "center",
        left: "center",
        text: "暂无数据",
        textStyle: {
          color: "rgb(179, 239, 255)",
          fontSize: 12,
        },
      },
      tooltip: {
        trigger: "item",
        formatter: "销量 <br/>{b} : {c} 万",
        textStyle: {
          fontSize: 12,
        },
      },
      toolbox: {
        feature: {
          dataView: {
            show: false,
          },
          magicType: {
            show: false,
          },
          restore: {
            show: false,
          },
          saveAsImage: {
            show: true,
            name: 2023 + "销售品牌",
            pixelRatio: 2,
          },
        },
        iconStyle: {

            borderColor: "#1990DA",
        },
        top: 0,
        right: 5,
      },
      series: [
        {
          type: "wordCloud",
          sizeRange: [12, 26],
          rotationRange: [0, 0],
          textStyle: {
            color: (params) => {
              return colorList[Math.floor(Math.random() * colorList.length)];
            },
          },
          data: data.value,
        },
      ],
    },
    true
  );
  // 点击图表事件
  myChart.value.off("click");
  myChart.value.on("click", () => {
    routerChange("/more");
  });
};

// watch(
//   year,
//   (nl, ol) => {
//     getPieData();
//   },
//   { lazy: false }
// );
// watch(
//   parentInfo,
//   (nl, ol) => {
//     getPieData();
//   },
//   { lazy: false, deep: true }
// );
</script>
<style lang="scss" scoped>
#category {
  width: 100%;
  height: 100%;
}
</style>