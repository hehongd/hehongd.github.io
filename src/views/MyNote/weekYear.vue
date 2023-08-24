<template>
<div id="one">
        <h1>new Date()</h1>
        <article class="articleContanier">
            <p>一、设置周下拉框</p>
            <div class="contanier" @mouseover="show=true" @mouseleave="show=false">
                <el-button :icon="DocumentCopy" class="copy copyClass" v-show="show"  @click="copy(refClone)"></el-button>
                <pre class="pre" ref="refClone">
                    <code>
                        // 设置周下拉框，传入年份类型如：'2023'
                        function setWeekOption(year) {
                            let dates = getDay(year || new Date().getFullYear())
                            let weeks = {}
                            for(let i=0;i&lt;dates.length;i++) {
                                let weeksLen = Object.keys(weeks).length
                                let splitDay = dates[i].split('_')
                                if(weeks[weeksLen] === undefined) {
                                    weeks[weeksLen + 1] = [splitDay[0]]
                                } else {
                                    if( splitDay[1] == '1' ) {
                                        weeks[weeksLen + 1] = [splitDay[0]]
                                    } else {
                                        weeks[weeksLen].push(splitDay[0])
                                    }
                                }
                            }
                            let weeksKeyLen = Object.keys(weeks).length
                            let option = []
                            for(let i=1;i&lt;weeksKeyLen + 1;i++) {
                                console.log(weeks[i])
                                let obj = {}
                                obj.year = year
                                obj.week = '第' + i + '周'
                                obj.start = weeks[i][0]
                                obj.end = weeks[i][weeks[i].length-1]
                                obj.text = '第' + i + '周' + '('+ weeks[i][0] + '-' + weeks[i][weeks[i].length-1] + ')'
                                option.push(obj)
                            }
                            return option
                        }

                         //  操作一年的数据
                        function getDay(year) {
                            let dates = []
                            for( let i=1;i&lt;=12;i++ ) {
                                for( let j=1;j&lt;=new Date(year,i,0).getDate();j++ ) { // 每个月的数据
                                    dates.push( formatNumber(i) + '/' + formatNumber(j) + '_' + new Date([year,formatNumber(i),formatNumber(j)].join('-')).getDay())
                                }
                            }
                            return dates
                        }
                        function formatNumber(n) {
                            return n.toString().length&gt;1? n : n.toString().padStart(2,0)
                        }
                    </code>
                </pre>
            </div>
             <p>二、设置月下拉框</p>
            <div class="contanier" @mouseover="show1=true" @mouseleave="show1=false">
                <el-button :icon="DocumentCopy" class="copy copyClass1" v-show="show1" @click="copy(refClone1)"></el-button>
                <pre class="pre" ref="refClone1">
                    <code>
                        // 获取指定一年月份日期，传入年份字符串列如：'2023'
                        function getMonthDay(year) {
                            let option = []
                            for(let i=1;i&lt;=12;i++) {
                                let month = i.toString().padStart(2,0)
                                let endDate = new Date(year,i,0).getDate().toString().padStart(2,0)
                                let obj = {
                                    year:year,
                                    month:month,
                                    startDate:1,
                                    endDate:endDate,
                                    text:'第'+ month + '月' + '(' + '1' + '-' + endDate + ')'
                                }
                                option.push(obj)
                            }
                            return option
                        }
                        console.log(getMonthDay(2023))
                    </code>
                </pre>
            </div>
        </article> 
        <div href="#one" class="backToTop" v-show="bottomingOut"  @click="goTop">回到顶部</div>
    </div>
</template>
<script setup name="WeekYear">
import { DocumentCopy } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import { useUserStore } from "@/store/modules/user"

const user = useUserStore()

const bottomingOut = computed(() => user.bottomingOut);
const show = ref(false)
const show1 = ref(false)
const refClone = ref(null)
const refClone1 = ref(null)
</script>
<style lang="scss" scoped>

</style>