<script setup>

import { onMounted } from "vue"
import MyHeader from "@/components/MyHeader.vue"
import LeftSide from "@/components/LeftSide.vue"
import MyMain from "@/views/MyMain"
import { getFlowers } from "@/utils"

onMounted(() => {getFlowers()})

</script>

<template>
  <my-header></my-header>
  <div class="contanier">
    <left-side></left-side>
    <my-main></my-main>
  </div>
</template>

<style lang="scss" scoped>
.contanier {
  display: flex;
  height: calc( 100vh - 78px);
}
</style>
