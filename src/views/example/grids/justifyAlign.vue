<template>
    <div class="gridContainer">
        <h3>一. 容器属性 justify-items(水平方向)/ align-items(垂直方向)</h3>
        <pre>
            justify-items：start | end | center | stretch;
            align-items：start | end | center | stretch;
            place-items : start end； 这是两个属性的简写

            justify-content: start | end | center | stretch | space-around | space-between | space-evenly;   //水平方向
            align-content: start | end | center | stretch | space-around | space-between | space-evenly;     // 垂直方向
        </pre>
        <p>1.justify-items:center;align-items:center;</p>
        <p>1.grid-auto-flow:row(先填满行)</p>
        <div class="container">
            <div class="item1">1</div>
            <div class="item2">2</div>
            <div class="item3">3</div>
            <div class="item4">4</div>
            <div class="item5">5</div>
            <div class="item6">6</div>
            <div class="item7">7</div>
            <div class="item8">8</div>
            <div class="item9">9</div>
        </div>
        <h3>二. 容器属性 justify-content (水平方向)/ align-content(垂直方向)</h3>
        <p>2.justify-content:center;align-content:center;</p>
        <div class="container1">
            <div class="item1">1</div>
            <div class="item2">2</div>
            <div class="item3">3</div>
            <div class="item4">4</div>
            <div class="item5">5</div>
            <div class="item6">6</div>
            <div class="item7">7</div>
            <div class="item8">8</div>
            <div class="item9">9</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 40%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows:100px 100px 100px;
    // justify-items: center;
    // align-items: center;
    place-items:center; // 这是两个属性的简写
    grid-gap: 10px;
    border: 1px solid #000;
}
.container1 {
    width: 100%;
    height: 40%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows:100px 100px 100px;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    border: 1px solid #000;
}

.item1{
    background-color: rgb(224, 145, 145);
    width: 50px;
    height: 50px;
}
.item2{
    background-color: rgb(73, 63, 63);
    width: 50px;
    height: 50px;
}
.item3{
    background-color: rgb(70, 25, 25);
    width: 50px;
    height: 50px;
}
.item4{
    background-color: rgb(145, 192, 76);
    width: 50px;
    height: 50px;
}
.item5{
    background-color: rgb(34, 163, 34);
    width: 50px;
    height: 50px;
}
.item6{
    background-color: rgb(160, 172, 144);
    width: 50px;
    height: 50px;
}
.item7{
    background-color: rgb(178, 221, 178);
    width: 50px;
    height: 50px;
}
.item8{
    background-color: #56eaf5;
    width: 50px;
    height: 50px;
}
.item9{
    background-color: #6672df;
    width: 50px;
    height: 50px;
}

</style>
