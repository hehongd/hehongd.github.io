<template>
  <!-- 中国地图 -->
  <div class="map-ball"></div>
  <div id="mapChart" class="echarts" ref="chartRef"></div>
</template>
<script setup>
import { onMounted, reactive, ref, watch,markRaw } from "vue";
// 引入 echarts
import * as echarts from "echarts";
import { debounce } from "@/utils/antiShake.js";
import { getCinatMap } from "@/api/china.js"

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
let {data:res} = await getCinatMap()
  initEcharts([],res);
};
    
  
// 渲染 echarts 图
const initEcharts = (data = [],mapJson) => {
  let planePath =
  "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  echarts.registerMap("china",mapJson);
  // markRow：作用:标记一个对象,使其永远不会再成为响应式对象,屏幕缩小放大的时候就不会报错
  myChart.value = markRaw(echarts.init(chartRef.value));
  myChart.value.setOption(
    {
    // 悬浮窗
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        return `${params.name}: ${params.value || "-"}`;
      }
    },
    // echarts大小位置
    grid: {
      left: "0",
      right: "80px",
      top: "10px",
      bottom: "10px"
    },
    geo: {
      map: "china",
      zoom: 1.2, // 地图大小
      center: [102.848234, 32.82333],
      scaleLimit: {
        min: 0.8
      },
      label: {
        color: "#fff",
        show: true
      },
      emphasis: {
        label: {
          color: "#fff",
          show: true
        },
        itemStyle: {
          areaColor: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#073684" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#2B91B7" // 100% 处的颜色
              }
            ]
          }
        }
      },
      roam: false,
      itemStyle: {
        areaColor: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#073684" // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#061E3D" // 100% 处的颜色
            }
          ]
        },
        borderColor: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: "#00F6FF"
            },
            {
              offset: 1,
              color: "#87ADCB"
            }
          ],
          false
        ),
        shadowColor: "rgba(10,76,139,1)",
        shadowOffsetY: 0,
        shadowBlur: 60,
        borderWidth: 1
      },
      tooltip: {
        show: false
      }
    },
    // 要显示的散点数据
    series: [
      {
        name: "",
        type: "lines",
        coordinateSystem: "geo",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", // arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          color: "#fff",
          width: 0,
          curveness: 0.2
        },
        data
      },
      {
        name: "",
        type: "lines",
        coordinateSystem: "geo",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          color: "#fff",
          width: 1,
          opacity: 0.6,
          curveness: 0.2
        },
        data
      }
    ]
    });
  // 点击图表事件
  myChart.value.getZr().off("click");
  myChart.value.getZr().on("click", (params) => {
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
.echarts {
  width: 100%;
  height: 100%;
}
.map-ball {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 900px;
  height: 900px;
  transform: translate(-50%, -50%);
  img {
    width: 500px;
    height: 500px;
  }
}
</style>