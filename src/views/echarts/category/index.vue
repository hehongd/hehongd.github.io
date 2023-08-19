<template>
    <div id="category" ref="chartRef"></div>
</template>
<script setup>
import { onMounted, reactive, ref, watch,markRaw } from "vue";
// 引入 echarts
import * as echarts from "echarts";

const myChart = ref(null)
const chartRef = ref(null)
const state = reactive({
    option : {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
})
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
</script>
<style lang="scss" scoped>
    #category {
        width: 100%;
        height: 100%;
    }
</style>