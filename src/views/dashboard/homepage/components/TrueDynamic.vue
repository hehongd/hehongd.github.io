<template>
    <el-scrollbar ref="conterRef" @mouseenter="mouseEnter" @mouseleave="mouseLeave">     
    <div
      v-for="item in dynamicData"
      :key="item.name"
      class="dynamic-item flex-row-center"
    >
      <el-avatar :size="42">{{ item.imgUrl }}</el-avatar>
      <div class="flex-auto ml20">
        <div class="flex-row-center justify-between">
          <span>{{ item.name }}</span>
          <span class="dynamic-item-time">{{ item.time }}</span>
        </div>
        <div class="mt10 dynamic-item-content">
          恭喜成功卖出<span class="dynamic-item-value">{{ item.value }}</span
          >元商品
        </div>
      </div>
    </div>
</el-scrollbar>
</template>

<script setup>
import { nextTick, onMounted, ref,computed,reactive} from "vue";
const dynamicData = ref([
  {
    name: "上海浦东分店",
    imgUrl: "浦东",
    value: "2000",
    time: "刚刚",
  },
  {
    name: "上海徐汇分店",
    imgUrl: "徐汇",
    value: "8888",
    time: "3分钟前",
  },
  {
    name: "上海松江分店",
    imgUrl: "松江",
    value: "6688",
    time: "5分钟前",
  },
  {
    name: "上海宝山分店",
    imgUrl: "宝山",
    value: "1314",
    time: "10分钟前",
  },
  {
    name: "上海杨浦分店",
    imgUrl: "杨浦",
    value: "666",
    time: "12分钟前",
  },
]);
const rolltimer = ref("");
const conterRef = ref(null);

onMounted(() => {
    nextTick(() => {
        window.clearInterval(rolltimer.value)
        autoRoll();
    })

});
// 设置自动滚动
const autoRoll = (stop) => {
  let scrollAreaRef = null
  // 获取 DOM 元素
  scrollAreaRef = conterRef.value.wrapRef
  if (stop) {
    window.clearInterval(rolltimer.value);
  } else {
    rolltimer.value = window.setInterval(() => {
      scrollAreaRef.scrollTop += 1;
      if (scrollAreaRef.clientHeight + scrollAreaRef.scrollTop + 5 == scrollAreaRef.scrollHeight) { //这里加5的原因是各种浏览器的精度可能不一致但误差小于5
        scrollAreaRef.scrollTop = 0;
      }
    }, 30);
    
  }
};
// 鼠标进入
const mouseEnter = () => {
  // 鼠标进入停止滚动和切换的定时任务
  autoRoll(true);
};
// 鼠标离开
const mouseLeave = () => {
  // 开启
  autoRoll();
};
</script>

<style lang="scss" scoped>
.flex-row-center {
  align-items: center;
  display: flex;
}
.ml20 {
  margin-left: 20px;
}
.justify-between {
  justify-content: space-between;
}
.mt10 {
  margin-top: 10px;
}
.flex-auto {
  flex: 1;
}
.dynamic-item {
  background-color: var(--el-fill-color);
  box-sizing: border-box;
  padding: 10px 15px;
  margin-bottom: 15px;
  border-radius: 6px;

  .dynamic-item-time {
    font-size: var(--el-font-size-base);
    color: rgb(140, 150, 167);
  }
  .dynamic-item-content {
    font-size: var(--el-font-size-base);
    color: rgb(140, 150, 167);
    .dynamic-item-value {
      margin: 0 2px;
      color: var(--el-text-color-primary);
    }
  }
}
-webkit-scrollbar{display:none}
</style>
