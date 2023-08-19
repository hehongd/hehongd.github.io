<template>
    <div id="pie" ref="chartRef"></div>
</template>
<script setup>
import { onMounted, reactive, ref, watch,markRaw } from "vue";
// 引入 echarts
import * as echarts from "echarts";

const myChart = ref(null)
const chartRef = ref(null)
const state = reactive({
    option : {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ]
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
    #pie {
        width: 100%;
        height: 100%;
    }
</style>