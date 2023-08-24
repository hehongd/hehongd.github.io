<template>
    <div class="top-contanier">
        <z-row :gutter="15">
            <z-col :span="5">
                <div class="echartList">
                    <box-container boxTitle="大数据实时统计">
                        <vehicle></vehicle>
                    </box-container>
                </div>
            </z-col>
            <z-col :span="14">
                <div class="echartList">
                    <box-container boxTitle="标题2"></box-container>
                </div>
            </z-col>
            <z-col :span="5">
                <div class="echartList">
                    <div class="chart-item">
                        <box-container boxTitle="大数据监控">
                            <water-polo></water-polo>
                        </box-container>
                    </div>
                    <div class="chart-item">
                        <box-container boxTitle="标题3"></box-container>
                    </div>
                </div>
            </z-col>
        </z-row>
    </div>
    <div class="bottom-contanier">
        <z-row :gutter="15">
            <z-col>
               <box-container boxTitle="标题3">
                <histogram></histogram>
               </box-container>  
            </z-col>
           
        </z-row>
    </div>
</template>

<script setup>
import { ZRow, ZCol } from "../UI/components"
import boxContainer from "../UI/components/boxContainer"
import vehicle from "./components/vehicle.vue"
import waterPolo from "./components/waterPolo.vue"
import histogram from "./components/histogram.vue"
</script>

<style lang="scss" scoped>
.top-contanier {
    width: 100%;
    height: 60%;
   .echartList {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
        .chart-item {
            height: 49%;
            width: 100%;
        }
    } 
}
.bottom-contanier {
    width: 100%;
    height: 40%;
    padding-top: 10px;
    box-sizing: border-box;
}
  
</style>
