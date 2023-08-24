<template>
    <div id="category" ref="chartRef"></div>
</template>
<script setup>
import { onMounted, reactive, ref, watch,markRaw } from "vue";
// 引入 echarts
import * as echarts from "echarts";

const myChart = ref(null)
const chartRef = ref(null)
const dataY = ref([120, 200, 150, 80, 70, 110, 130])
const dataX = ref(['昆明市', '曲靖市', '玉溪市', '昭通市', '保山市', '丽江市', '普洱市'])
const state = reactive({
    option : {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      grid: {
        top: 20,
        left: 50,
        right: 50,
        bottom: 20,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: false,
          color: '#333',
          width: 1,
          type: 'solid',
        },
        axisLabel: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
          },
        },
        data: dataX.value,
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
            width: 1,
            type: 'dashed',
          },
        },
        axisLabel: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
          },
        },
      },
      series: [
        {
          data: dataY.value,
          type: 'bar',
          barWidth: '8%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#248ff7',
              },
              {
                offset: 1,
                color: '#6851f1',
              },
            ]),
            borderRadius: 11,
          },
        },
      ],
    }
})
setInterval(() => {
      dataY.value.shift()
      const value = Math.floor(Math.random() * 100)
      dataY.value.push(value)
      const last = dataX.value[0]
      dataX.value.shift()
      dataX.value.push(last)
    }, 2000)
const getinitChart = () => {
    myChart.value = markRaw(echarts.init(chartRef.value))
    myChart.value.setOption(state.option)
}
const resizeFn = () => {
    if(chartRef.value) {
        myChart.value?.resize()
    }
}
onMounted(() => {
    getinitChart()
    window.addEventListener('resize',resizeFn)
})
watch(state.option,(newVal,oldVal)=> {
  getinitChart()
},{ deep: true })
</script>
<style lang="scss" scoped>
    #category {
        width: 100%;
        height: 100%;
    }
</style>