<template>
  <div id="one">
    <h2><a href="https://day.js.org/">链接：dayjs官网</a></h2>
    <p>1.const now = dayjs().format('YYYY-MM-DD HH:mm:ss')</p>
    <div>获取当前时间：{{now}}</div>  
    <p>2.const now1 = dayjs(1318781876406).format('YYYY-MM-DD HH:mm:ss')</p>
    <div>传入时间戳：{{now1}}</div>  
  </div>
</template>

<script setup>
import dayjs from 'dayjs'

const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
const now1 = dayjs(1318781876406).format('YYYY-MM-DD HH:mm:ss')
</script>

<style>

</style>
