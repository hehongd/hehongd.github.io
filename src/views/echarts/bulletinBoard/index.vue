<template>
  <div class="home-container">
    <nav-bar></nav-bar>
    <z-row :gutter="15">
        <z-col :span="8">
            <div class="echartList">
                <div class="chart-item">
                    <box-container boxTitle="标题1"></box-container>
                </div>
                <div class="chart-item">
                    <box-container boxTitle="标题1"></box-container>
                </div>
                <div class="chart-item">
                    <box-container boxTitle="标题1"></box-container>
                </div>
            </div>
        </z-col>
        <z-col :span="8">
            <div class="echartList">
                <div class="chart-item">
                    <box-container boxTitle="标题2"></box-container>
                </div>
                <div class="chart-item">
                    <box-container boxTitle="标题2"></box-container>
                </div>
                <div class="chart-item">
                    <box-container boxTitle="标题2"></box-container>
                </div>
            </div>
        </z-col>
        <z-col :span="8">
            <div class="echartList">
                <div class="chart-item">
                    <box-container boxTitle="标题3"></box-container>
                </div>
                <div class="chart-item">
                    <box-container boxTitle="标题3"></box-container>
                </div>
                <div class="chart-item">
                    <box-container boxTitle="标题3"></box-container>
                </div>
            </div>
        </z-col>
    </z-row>
  </div>
</template>

<script setup>
import navBar from "./navBar.vue"
import { ZRow, ZCol } from "./UI/components"
import boxContainer from "./UI/components/boxContainer"
</script>

<style lang="scss" scoped>

.home-container {
  width: 100%;
  height: 100%;
  position: relative;

  background: url("@/assets/images/newBg.jpg") no-repeat center center;
  background-size: cover;
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
}
</style>
