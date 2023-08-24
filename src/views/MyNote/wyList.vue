<template>
    <div id="one">
        <article class="articleContanier">
            <p>一.获取一周或一月数据</p>
            <div class="contanier" @mouseover="show=true" @mouseleave="show=false">
                <el-button :icon="DocumentCopy" class="copy" v-show="show" @click="copy(refClone)"></el-button>
                <pre class="pre" ref="refClone">
                    <code>
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
            <div class="contanier"  @mouseover="show1=true" @mouseleave="show1=false">
                <el-button :icon="DocumentCopy" class="copy" v-show="show1" @click="copy(refClone1)"></el-button>
                <pre class="pre" ref="refClone1">
                    <code>
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
        <div href="#one" class="backToTop" v-show="bottomingOut" @click="goTop">回到顶部</div>
    </div>
</template>
<script setup name="WyList">
import { DocumentCopy } from '@element-plus/icons-vue'
import { ref } from 'vue'
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