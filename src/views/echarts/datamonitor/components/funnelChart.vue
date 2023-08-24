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
        myChart.value?.resize()
    }
},200)
//模拟接口，获取echarts数据
const getPieData = async () => {
    // const { data } = await selectTypeData({
    //   abcode,
    //   year,
    // });
    const data = ref([
        {
            "name": "18岁以下",
            "value": 996
        },
        {
            "name": "18-25",
            "value": 1007
        },
        {
            "name": "25-35",
            "value": 460
        },
        {
            "name": "35-50",
            "value": 951
        },
        {
            "name": "50-65",
            "value": 34
        },
        {
            "name": "65以上",
            "value": 682
        }
    ])
    initEcharts(data);
  };
      
    
  // 渲染 echarts 图
  const initEcharts = (data,) => {
    // markRow：作用:标记一个对象,使其永远不会再成为响应式对象,屏幕缩小放大的时候就不会报错
    myChart.value = markRaw(echarts.init(chartRef.value));
    myChart.value.setOption(
      {
          color: [
            "#01E1FF",
            "#ED65A9",
            "#11AAFF",
            "#B9FFFF",
            "#3064F3",
            "#FF905A",
          ],
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
            formatter: "{a} <br/>{b} : {c} 人",
          },
          series: [
            {
              name: "客户年龄",
              type: "funnel",
              left: "10%",
              top: "5%",
              width: "70%",
              height: "85%",
              label: {
                normal: {
                  formatter: "{b}",
                },
                emphasis: {
                  position: "inside",
                },
              },
              labelLine: {
                normal: {
                  length: 10,
                  lineStyle: {
                    width: 1,
                    type: "solid",
                  },
                },
              },
              itemStyle: {
                normal: {
                  borderWidth: 0,
                },
              },
              data: data.value,
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