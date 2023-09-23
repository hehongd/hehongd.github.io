<template>
  <div class="container">
    <div class="item"><img src="@/assets/images/monitor/seed9.jpg" alt="" /></div>
    <div class="item"><img src="@/assets/images/monitor/seed9.jpg" alt="" /></div>
    <div class="item"><img src="@/assets/images/monitor/seed9.jpg" alt="" /></div>
    <div class="item"><img src="@/assets/images/monitor/seed9.jpg" alt="" /></div>
    <div class="item"><img src="@/assets/images/monitor/seed9.jpg" alt="" /></div>
    <div class="item"></div>
    <div class="item"><img src="@/assets/images/monitor/seed9.jpg" alt="" /></div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  /* height: 700px; */
  /* background-color: aquamarine; */
  margin-top: 100px;
  display: grid;
  /* 行高 */
  // grid-template-rows: 207px 155px 259px;
  // grid-template-columns: 420px 365px 299px 118px 296px;
  // grid-template-columns:repeat(auto-fill,200px);
  /* 网格居中显示 */
  justify-content: center;
  /* 合并单元网格 */
  grid-template-areas:
    "a b d d f"
    "a b e h h"
    "a c e h h";
  /* 行间隙 列间隙 */
  gap: 3px 3px;
}
.item {
    img{
        width: 100%;
        height: 100%;
    }
}
.item:nth-child(1) {
  grid-area: a;
}
.item:nth-child(2) {
  grid-area: b;
}
.item:nth-child(3) {
  grid-area: c;
}
.item:nth-child(4) {
  grid-area: d;
}
.item:nth-child(5) {
  grid-area: e;
}
.item:nth-child(6) {
  grid-area: f;
  background-color: pink;
}
.item:nth-child(7) {
  grid-area: h;
}
</style>
