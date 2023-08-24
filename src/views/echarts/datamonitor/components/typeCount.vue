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
            "name": "电脑",
            "value": "412.64"
        },
        {
            "name": "手机",
            "value": "943.84"
        },
        {
            "name": "汽车",
            "value": "499.95"
        },
        {
            "name": "空调",
            "value": "833.53"
        },
        {
            "name": "冰箱",
            "value": "567.74"
        },
        {
            "name": "电视",
            "value": "1342.51"
        }
    ])
    let sum = data.value.reduce((t, c) => parseFloat(c.value) + t, 0);
        sum = parseFloat(sum.toFixed(2));;
    initEcharts(data, sum);
  };
      
    
  // 渲染 echarts 图
  const initEcharts = (data,sum) => {
    const colorList = [
      "#0278E6",
      "#6255FE",
      "#00C6FF",
      "#F0960E",
      "#34D160",
      "#87cefa",
      "#da70d6",
      "#32cd32",
      "#6495ed",
      "#9fe6b8",
      "#e7bcf3",
      "#0E7CE2",
      "#FF8352",
      "#E271DE",
      "#4AEAB0",
    ];
    // markRow：作用:标记一个对象,使其永远不会再成为响应式对象,屏幕缩小放大的时候就不会报错
    myChart.value = markRaw(echarts.init(chartRef.value));
    myChart.value.setOption(
      {
        color: colorList,
        title: [
          {
            show: data.value.length === 0,
            top: "center",
            left: "center",
            text: "暂无数据",
            textStyle: {
              color: "rgb(179, 239, 255)",
              fontSize: 12,
            },
          },
          {
            text: sum,
            left: "33%",
            top: "center",
            textStyle: {
              fontSize: 12,
              color: "rgb(179, 239, 255)",
            },
          },
        ],
        tooltip: {
          trigger: "item",
          formatter: "销量 <br/>{b} : {c} ({d}%)",
          textStyle: {
            fontSize: 12,
          },
        },
        legend: {
          orient: "vertical",
          top: "center",
          type: "scroll",
          right: "7%",
          itemWidth: 15,
          itemHeight: 13,
          pageIconColor: "#fff",
          pageIconSize: 10,
          pageTextStyle: {
            color: "#fff",
          },
          data: data.value.map((item, index) => {
            return {
              name: item.name,
              textStyle: {
                color: colorList[index],
              },
            };
          }),
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
              name: 2023 + "年销售种类",
              pixelRatio: 2,
            },
          },
          iconStyle: {
            normal: {
              borderColor: "#1990DA",
            },
          },
          top: 0,
          right: 5,
        },
        series: [
          {
            name: "销售种类",
            type: "pie",
            radius: ["45%", "75%"],
            center: ["40%", "50%"],
            roseType: "radius",
            data: data.value,
            labelLine: {
              normal: {
                length: 0.000000001,
              },
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  return colorList[params.dataIndex % colorList.length];
                },
                label: {
                  show: true,
                  formatter: "{d}%",
                },
              },
            },
          },
        ],
      }
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