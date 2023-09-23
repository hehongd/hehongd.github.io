<template>
    <div class="gridContainer">
        <h3>1.grid-auto-flow 属性控制自动放置的项目如何插入网格中</h3>
        <p>划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列".即先填满第一行，再开始放入第二行(就是子元素的排放顺序)</p>
        <pre>
            grid-auto-flow:row;
            grid-auto-flow:colum;
            grid-auto-flow:row dense;
            row dense属性值表示换行时留下的空间可以由下面的元素填补上去
        </pre>
         <a href="https://blog.csdn.net/leilei__66/article/details/122360901">点击获取更多属性</a>
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
        <p>1.grid-auto-flow:colum(先填满列)</p>
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
        <p>1.grid-auto-flow:row dense</p>
        <div class="container2">
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
    grid-template-rows:50px 100px 50px;
    grid-auto-flow: row;
    grid-gap: 10px;
}
.container1 {
    width: 100%;
    height: 40%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows:50px 100px 50px;
    grid-auto-flow: column;
    grid-gap: 10px;
}
.container2 {
    width: 100%;
    height: 20%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows:50px 100px 50px;
    grid-auto-flow: row dense;
    grid-gap: 10px;
}
.item1{
    background-color: rgb(224, 145, 145);
}
.item2{
    background-color: rgb(73, 63, 63);
}
.item3{
    background-color: rgb(70, 25, 25);
}
.item4{
    background-color: rgb(145, 192, 76);
}
.item5{
    background-color: rgb(34, 163, 34);
}
.item6{
    background-color: rgb(160, 172, 144);
}
.item7{
    background-color: rgb(178, 221, 178);
}
.item8{
    background-color: #56eaf5;
}
.item9{
    background-color: #6672df;
}

</style>
