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
onMounted(() => {
  getPieData()
  window.addEventListener('resize',resizeFn)
})
onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeFn);
});
const resizeFn = debounce(() => {
    if(chartRef.value) {
      console.log(myChart.value)
        myChart.value?.resize()
    }
},200)
//模拟接口，获取echarts数据
const getPieData = async () => {
  // const { data } = await selectCityData({
  //       abcode,
  //       year,
  //     });
  //     let xData = [],
  //       yData = [];
  //     data.forEach((item) => {
  //       xData.push(item.name);
  //       yData.push(item.value);
  //     });
    const xData = ref(["黑龙江省","内蒙古自治区","湖北省","上海市"])
    const yData = ref([2800,1800,2500,2200,2600,2600,1600,500,2400,1700,300])
    initEcharts(xData.value, yData.value);
  };
      
    
  // 渲染 echarts 图
  const initEcharts = (xData, yData) => {
    // markRow：作用:标记一个对象,使其永远不会再成为响应式对象,屏幕缩小放大的时候就不会报错
    myChart.value = markRaw(echarts.init(chartRef.value));
    myChart.value.setOption(
      {
          grid: {
            left: "13%",
            right: "8%",
            bottom: "25%",
            top: "10%",
          },
          title: {
            show: xData.length === 0,
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
              type: "shadow",
            },
            formatter: (params) => {
              return params[0].name + "<br>销售额度：" + params[0].value + "万";
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
                name: 2023 + "年销售额排名",
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
              endValue: 10,
            },
          ],
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
            //轴线上的字
            axisLabel: {
              show: true,
                color: "#cecece",
                fontSize: 12,
              rotate: 15,
            },
            data: xData,
          },
          yAxis: [
            {
              type: "value",
              axisTick: {
                show: false,
              },
              //轴线上的字
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
              name: "销售额度",
              type: "bar",
              data: yData,
              barWidth: "45%",
              itemStyle: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#01BDF4",
                    },
                    {
                      offset: 1,
                      color: "#083AF6 ",
                    },
                  ],
                  false
                ),
              },
            },
          ],
        },
        true
    )
    // 点击图表事件
    myChart.value.getZr().off("click");
    myChart.value.getZr().on("click", (params) => {
      console.log(params)
      // const pointInPixel = [params.offsetX, params.offsetY];
      // if (myChart.containPixel("series", pointInPixel) || data.length === 0) {
      //   routerChange("/more");
      // }
    });
  }

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