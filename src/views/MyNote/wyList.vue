<template>
    <article class="articleContanier">
        <p>一.获取一周或一月数据</p>
        <div class="contaniers" @mouseover="show=true" @mouseleave="show=false">
            <el-button :icon="DocumentCopy" class="copy copyClass" v-show="show" @click="copy(refClone)"></el-button>
            <pre class="pre preClass" ref="refClone">
                <code class="code">
                    // getDays(7) 获取一周数据
                    // getDays(30) 获取一月数据
                    getDays(day) {// 获取天数
                        let arr = [];
                        for (let i = -day; i &lt; 0; i++) { // 循环添加天数
                            let today = new Date();// 获取今天
                            let targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * i;
                            today.setTime(targetday_milliseconds); //设置i天前的时间
                            let tYear = today.getFullYear();
                            let tMonth = today.getMonth();
                            let tDate = today.getDate();
                            let date = [tYear, tMonth + 1, tDate];
                            arr.push(date);
                        }
                        return arr
                    },
                </code>
            </pre>
        </div>
        <p>二.获取开始时间和结束时间之内的所有月份</p>
        <div class="contaniers"  @mouseover="show1=true" @mouseleave="show1=false">
            <el-button :icon="DocumentCopy" class="copy copyClass1" v-show="show1" @click="copy(refClone1)"></el-button>
            <pre class="pre preClass1" ref="refClone1">
                <code class="code1">
                    // getMonthBetween('2025-01-01','2025-05-01')
                    getMonthBetween(start, end) {  // 获取开始时间和结束时间之内的所有月份
                        let selectDate = [];
                        let s = start.split("-");  // 字符串装换数组
                        let e = end.split("-");
                        let date = new Date();
                        let min = date.setFullYear(s[0], s[1] - 1); // 设置最小时间
                        let max = date.setFullYear(e[0], e[1] - 1); // 设置最大时间
                        let curr = min;
                        while (curr &lt;= max) {  // 循环添加月份
                            var month = new Date(curr).getMonth();
                            var arr = [new Date(curr).getFullYear(), month + 1];
                            selectDate.push(arr);
                            curr = new Date(new Date(curr).getFullYear(), month + 1)
                        }
                        return selectDate
                    },
                </code>
            </pre>
        </div>
    </article>
</template>
<script setup name="WyList">
import { DocumentCopy } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { copy } from "@/utils/copy.js"

const show = ref(false)
const show1 = ref(false)
const refClone = ref(null)
const refClone1 = ref(null)
</script>
<style lang="scss" scoped>
    .articleContanier p {
        margin-bottom: 20px;
    }
    .articleContanier .contaniers {
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