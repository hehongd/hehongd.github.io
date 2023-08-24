<template>
    <z-row :gutter="15">
        <z-col :span="7">
            <div class="echartList">
                <div class="chart-item">
                    <box-container boxTitle="2023年同行业销售额度对比">
                        <line-chart />
                    </box-container>
                </div>
                <div class="chart-item">
                    <box-container boxTitle="2023公司市值">
                        <liquid-chart/>
                    </box-container>
                </div>
                <div class="chart-item">
                    <box-container boxTitle="2023年销售种类占比">
                        <type-count/>
                    </box-container>
                </div>
            </div>
        </z-col>
        <z-col :span="10">
            <count-to :value="0" suffix="万" :speed="20" />
            <div style="width:100%;height:85%">
                <scatter-map />
            </div>
        </z-col>
        <z-col :span="7">
            <div class="echartList">
                <div class="chart-item">
                    <box-container boxTitle="2003年销售品牌占比">
                        <word-chart />
                    </box-container>
                </div>
                <div class="chart-item">
                    <box-container boxTitle="2023年客户年龄分布">
                        <funnel-chart />
                    </box-container>
                </div>
                <div class="chart-item">
                    <box-container boxTitle="2023年销售额度排名">
                        <city-count />
                    </box-container>
                </div>
            </div>
        </z-col>
    </z-row>
</template>

<script setup>
import { ZRow, ZCol } from "../UI/components"
import boxContainer from "../UI/components/boxContainer"
import lineChart from "./components/lineChart.vue"
import liquidChart from "./components/liquidChart.vue"
import typeCount from "./components/typeCount.vue"
import wordChart from "./components/wordChart.vue"
import funnelChart from "./components/funnelchart.vue"
import cityCount from "./components/cityCount.vue"
import countTo from "../UI/components/countTo"
import scatterMap from "./components/scatterMap.vue"
</script>

<style lang="scss" scoped>
  .echartList {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
        .chart-item {
            height: 32.1%;
            width: 100%;
        }
    }
</style>
