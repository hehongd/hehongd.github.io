<template>
     <h1>Rotation Around a Point</h1>
    <div class="main">
        <img class="theSmiley" src="@/assets/icons/svg/1.svg">
        <div class="item" style="animation-delay: -1.5s;">
        <img src="@/assets/icons/svg/2.svg">
        </div>
        <div class="item" style="animation-delay: -3s;">
        <img src="@/assets/icons/svg/3.svg">
        </div>
        <div class="item" style="animation-delay: -4.5s;">
        <img src="@/assets/icons/svg/4.svg">
        </div>
        <div class="item" style="animation-delay: -6s;">
        <img src="@/assets/icons/svg/5.svg">
        </div>
        <div class="item" style="animation-delay: -7.5s;">
        <img src="@/assets/icons/svg/6.svg">
        </div>
        <div class="item" style="animation-delay: -9s;">
        <img src="@/assets/icons/svg/7.svg">
        </div>
        <div class="item" style="animation-delay: -10.5s;">
        <img src="@/assets/icons/svg/8.svg">
        </div>
        <div class="item" style="animation-delay: -12s;">
        <img src="@/assets/icons/svg/9.svg">
        </div>
        <div class="item" style="animation-delay: -13.5s;">
        <img src="@/assets/icons/svg/10.svg">
        </div>
        <div class="item" style="animation-delay: -15s;">
        <img src="@/assets/icons/svg/11.svg">
        </div>
    </div>
    <a class="orange" href="https://www.kirupa.com/animations/rotating_items_around_a_point.htm">
        <img src="@/assets/icons/svg/12.webp"><span>动画效果地址</span>
    </a>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    body {
      display: grid;
      justify-content: center;
      width: 100vw;
    }

    h1 {
      font-family: sans-serif;
      background: linear-gradient(180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(0, 0, 0, 0) 50%,
          rgba(255, 204, 77, .5) 50%,
          rgba(255, 204, 77, .5) 100%);
      padding: 2px;
      width: fit-content;
      margin: auto;
    }

    .main {
      width: 500px;
      height: 350px;
      background-color: #1e2231;
      border-color: #EEE;
      border-radius: 10px;
      border-width: 2px;

      display: grid;
      justify-content: center;
      align-content: center;
      margin: auto;
      margin-top: 30px;
    }

    .main > * {
      grid-column: 1;
      grid-row: 1;
    }

    .theSmiley {
      width: 50px;
      height: 50px;
    }

    .orange {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center ;
        img {
            width: 50px;
            display: block;
            margin: 0 auto;
            margin-top: 50px;
        }
    }

    .item {
      animation: spinAround 15s linear infinite;
    }

    .main > * > img {
      animation: rotate 5s linear infinite;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes spinAround {
      from {
        transform: rotate(0deg) translate(140px) scale(.7);
      }
      to {
        transform: rotate(360deg) translate(140px) scale(.7);
      }
    }
  </style>