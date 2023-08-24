<template>
  <div class='contentLeft' ref="appRef">
        <ul class='statis'>
            <li v-for="item in arr" :key="item" class='statis-item'>
                <div class='statis-item_img'>
                    <img :src="getImgUrl(item.img)" alt="">
                </div>
                <div class='statis-item_detail'>
                    <span class='title'>{{ item.title }}</span>
                    <span class='total' :style="'color:'+item.color" >{{ item.total }}</span>
                </div>
            </li>
        </ul>
      </div>
</template>

<script setup>
import { getImgUrl } from '@/utils/asyncJsonFile'
import responsive from '@/utils/responsive'
import { onMounted, ref } from 'vue'

const { appRef, calcRate, windowDraw } = responsive()
onMounted(() => {
  // todo 屏幕适应
  windowDraw()
  calcRate()
})

//  // * 指向最外层容器
//  const appRef = ref()
//   // * 定时函数
//   const timer = ref(0)
//   // * 默认缩放值
//   const scale = {
//     width: '1920',
//     height: '1080',
//   }
// const resize = () => {
//     clearTimeout(timer.value)
//     timer.value = setTimeout(() => {
//       calcRate()
//     }, 200)
//   }
// onMounted(() => {
//     window.addEventListener('resize', resize)
// })
// const calcRate = () => {
//     // 当前宽高比
//     const currentRate = parseFloat((window.innerWidth / window.innerHeight).toFixed(5))
//     if (appRef.value) {
//       if (currentRate > baseProportion) {
//         // 表示更宽
//         scale.width = ((window.innerHeight * baseProportion) / baseWidth).toFixed(5)
//         scale.height = (window.innerHeight / baseHeight).toFixed(5)
//         appRef.value.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
//       } else {
//         // 表示更高
//         scale.height = (window.innerWidth / baseProportion / baseHeight).toFixed(5)
//         scale.width = (window.innerWidth / baseWidth).toFixed(5)
//         appRef.value.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
//       }
//     }
//   }
     const arr = [
      {
        img: 'total-car',
        color: '#ffff3f',
        title: '实时车辆',
        total: 195,
      },
      {
        img: 'online-car',
        color: '#32eedf',
        title: '当前驾驶车辆',
        total: 225,
      },
      {
        img: 'risk-point',
        color: '#fd5968',
        title: '危险驾驶车辆',
        total: 367,
      },
      {
        img: 'parking-point',
        color: '#f6c847',
        title: '停车场车辆',
        total: 156,
      },
      {
        img: 'weather',
        color: '#ff6102',
        title: '天气情况',
        total: 851,
      },
      {
        img: 'volumn',
        color: '#00c7fe',
        title: '呼叫车辆',
        total: 741,
      },
      {
        img: 'disaster',
        color: '#ff2625',
        title: '天气警报',
        total: 321,
      },
    ]
</script>

<style lang="scss" scoped>
.contentLeft {
  position: relative;
  width: 100%;
  height: 100%;
  .statis {
    height: 100%;
    margin:0;
    box-sizing: border-box;
    padding-top: 15px;
    .statis-item {
    width: 80%;
    height: 10%;
      display: flex;
      margin-bottom: 20px;
      .statis-item_img {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        background-color: #0738c9;
      }
      .statis-item_detail {
        flex: 1;
        background-color: #02194f;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        .title {
          color: #00c7f4;
        }
        .total {

        }
      }
    }
  }
}

</style>
