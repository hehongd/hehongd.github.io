<template>
    <div id="category" ref="chartRef"></div>
</template>
<script setup>
import { onMounted, reactive, ref, watch,markRaw } from "vue";
// 引入 echarts
import * as echarts from "echarts";
import { debounce } from "@/utils/antiShake.js";

const myChart = ref(null)
const chartRef = ref(null)

const resizeFn = debounce(() => {
    if(chartRef.value) {
        myChart.value?.resize()
    }
},200)
onMounted(() => {
    getChartData()
    window.addEventListener('resize',resizeFn)
})
onBeforeUnmount(() => {
    window.removeEventListener("resize", resizeFn);
  });

  //模拟接口，获取echarts数据
  const getChartData = async () => {
    // const { data } = await selectOtherData({
    //   abcode,
    //   year,
    // });
    const data = ref([
            {
                "name": "1月",
                "value": "37.80",
                "other": "42.85"
            },
            {
                "name": "2月",
                "value": "33.31",
                "other": "48.64"
            },
            {
                "name": "3月",
                "value": "21.27",
                "other": "27.64"
            },
            {
                "name": "4月",
                "value": "73.62",
                "other": "48.50"
            },
            {
                "name": "5月",
                "value": "88.74",
                "other": "26.67"
            },
            {
                "name": "6月",
                "value": "84.55",
                "other": "30.21"
            },
            {
                "name": "7月",
                "value": "24.56",
                "other": "34.76"
            },
            {
                "name": "8月",
                "value": "48.52",
                "other": "38.64"
            },
            {
                "name": "9月",
                "value": "75.22",
                "other": "34.16"
            },
            {
                "name": "10月",
                "value": "54.64",
                "other": "0.12"
            },
            {
                "name": "11月",
                "value": "60.84",
                "other": "3.95"
            },
            {
                "name": "12月",
                "value": "88.87",
                "other": "26.34"
            }
])

    initEcharts(data);
  };

  // 渲染 echarts 图
  const initEcharts = (data) => {
    // markRow：作用:标记一个对象,使其永远不会再成为响应式对象,屏幕缩小放大的时候就不会报错
    myChart.value = markRaw(echarts.init(chartRef.value));
    myChart.value.setOption(
      {
          grid: {
            left: "13%",
            right: "8%",
            bottom: "20%",
            top: "19%",
          },
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
            trigger: "axis",
            axisPointer: {
              type: "line",
            },
          },
          toolbox: {
            feature: {
              dataView: {
                show: false,
              },
              magicType: {
                show: true,
                type: ["line", "bar"],
              },
              restore: {
                show: false,
              },
              saveAsImage: {
                show: true,
                name: 2023 + "同行业销售额对比",
                pixelRatio: 2,
              },
            },
            iconStyle: {
                borderColor: "#1990DA"
            },
            top: 0,
            right: 5,
          },
          dataZoom: [
            {
              type: "inside",
              startValue: 0,
              endValue: 12,
            },
          ],
          legend: {
            show: true,
            left: "15",
            top: "0",
            itemWidth: 15,
            itemHeight: 11,
            textStyle: {
              color: "#00a9fb",
            },
          },
          xAxis: {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#397cbc",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
                color: "#cecece",
                fontSize: 12,
              rotate: 15,
            },
            data: data.value.map((item) => item.name),
          },
          yAxis: [
            {
              type: "value",
              axisTick: {
                show: false,
              },
              axisLabel: {
                  fontSize: 12,
                  color: "#cecece",
              },
              axisLine: {
                lineStyle: {
                  color: "#397cbc",
                },
              },
              //网格线
              splitLine: {
                lineStyle: {
                  color: "#11366e",
                },
              },
            },
          ],
          series: [
            {
              name: "本公司",
              type: "line",
              data: data.value.map((item) => item.value),
              smooth: true,
              showSymbol: false,
              barWidth: "10",
              barGap: "-100%",
              itemStyle: {
                color: "#0F84CC",
              },
              lineStyle: {
                  width: 2,
                  color: "#0F84CC", // 线条颜色
                borderColor: "#f0f",
              },
              areaStyle: {
                  color: "#0F84CC",
                  shadowColor: "rgba(53,142,215, 0.9)", //阴影颜色
                  shadowBlur: 2
              },
            },
            {
              name: "同行业公司",
              type: "line",
              barWidth: "10",
              barGap: "-100%",
              data: data.value.map((item) => item.other),
              smooth: true, //是否平滑曲线显示
              showSymbol: false,
              itemStyle: {
                color: "#05D9E4",
              },
              lineStyle: {
                  width: 2,
                  color: "#05D9E4", // 线条颜色
                borderColor: "#f0f",
              },
              areaStyle: {
                  color: "#05D9E4",
                  shadowColor: "rgba(53,142,215, 0.9)", //阴影颜色
                  shadowBlur: 20,
              },
            },
          ],
        }
    )
    myChart.value.off("click");
    myChart.value.getZr().off("click");
    // 点击图表事件
    myChart.value.getZr().on("click", (params) => {
        // console.log(params)
    })
  }




</script>
<style lang="scss" scoped>
    #category {
        width: 100%;
        height: 100%;
    }
</style>