<template>
    <div id="pie" ref="chartRef"></div>
</template>
<script setup>
import { onMounted, reactive, ref, watch,markRaw, nextTick, computed, onBeforeUnmount } from "vue";
import { useUserStore } from "@/store/modules/user"

const user = useUserStore()
// 引入 echarts
import * as echarts from "echarts";

const { proxy }= getCurrentInstance()
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


const resetWidth = () => {
    nextTick(() =>{
        proxy.$erd.listenTo(chartRef.value,(ele) => {
            // console.log('=======offsetWidth', ele.offsetWidth);
            // console.log('=======offsetHeight', ele.offsetHeight);
            // console.log('=======clientWidth', ele.clientWidth);
            resizeFn()
            // width.value =  ele.clientWidth
        })
    })
}
onBeforeUnmount(() => {
    proxy.$erd.uninstall(chartRef.value);
})
const isCollapse = computed(() => user.isCollapse)
watch(isCollapse,(newVal,oldVal) => {
    resetWidth()
})

watch(() => user.isNotice,(newVal,oldVal) => {
    resetWidth()
})
</script>
<style lang="scss" scoped>
    #pie {
        width: 100%;
        height: 100%;
    }
</style>