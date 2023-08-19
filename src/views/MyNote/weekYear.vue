<template>
<div>
        <h1>new Date()</h1>
        <article class="articleContanier">
            <p>一、设置周下拉框</p>
            <div class="contanier" @mouseover="show=true" @mouseleave="show=false">
                <el-button :icon="DocumentCopy" class="copy copyClass" v-show="show"  @click="copy(refClone)"></el-button>
                <pre class="pre preClass" ref="refClone">
                    <code class="code">
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
                <pre class="pre preClass1" ref="refClone1">
                    <code class="code1">
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
    </div>
</template>
<script setup name="WeekYear">
import { DocumentCopy } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import { copy } from "@/utils/copy.js"
const show = ref(false)
const show1 = ref(false)
const refClone = ref(null)
const refClone1 = ref(null)
</script>
<style lang="scss" scoped>
.articleContanier {
    line-height: 1.8;
}
.articleContanier p {
    margin-bottom: 20px;
}
.contanier {
    position: relative;
}
.copy {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 32px;
    height: 24px;
    cursor: pointer;
    font-size: 14px;
    padding: 0;
    border: none;
    border-radius: 6px;
    color: #ccc;
    background-color: hsla(0,0%,90.2%,.2);
    box-shadow: 0 2px 0 0 rgba(0,0,0,.25);
}
.pre {
    word-wrap: normal;
    word-break: break-all;
    white-space: pre;
    overflow-x: scroll;
    overscroll-behavior-x: contain;
    margin-top: 0;
    margin-bottom: 20px;
    border-radius: 4px;
    z-index: 0;
    padding: 1em;
    line-height: 1.5;
    color: #ccc;
    background: #2d2d2d;
}
.keyword {
    color: #cc99cd;
}
.function {
    color: #f08d49;
}
.string {
    color: #7ec699;
}
.tag {
    color: #e2777a;
}
</style>