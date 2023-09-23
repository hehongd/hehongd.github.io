<template>
    <div class="gridContainer">
        <h3>一. 容器属性grid-auto-columns / grid-auto-rows 用来设置多出来的项目宽和高</h3>
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
            <div class="item10">10</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 50%;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows:100px 100px;
    grid-gap: 10px;
    grid-auto-rows:20px;
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
.item10{
    background-color: #9c5a99;
    width: 50px;
    height: 50px;
}


</style>
