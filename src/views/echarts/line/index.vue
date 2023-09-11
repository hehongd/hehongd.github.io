<template>
    <div id="line" ref="chartRef"></div>
</template>
<script setup>
import { onMounted, reactive, ref, watch,markRaw, nextTick, computed, onBeforeUnmount } from "vue";
// 引入 echarts
import * as echarts from "echarts";
import { useUserStore } from "@/store/modules/user"

const user = useUserStore()
const myChart = ref(null)
const chartRef = ref(null)
const { proxy }= getCurrentInstance()
const state = reactive({
    option : {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
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
#line {
    width: 100%;
    height: 100%;
}
</style>