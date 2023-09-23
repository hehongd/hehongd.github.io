<template>
    <div class="gridContainer">
        <h3>1.grid-template-columns 定义网格布局中的列数</h3>
        <h3>2.grid-gap 属性定义网格布局中行与列之间间隙的尺寸</h3>
        <h3>3.grid-template-rows 规定网格布局中的行数（和高度）;值是用空格分隔的列表，其中每个值指定相应行的高度。</h3>
        <pre>
            display: grid;
            grid-template-columns: auto auto auto auto;
            grid-gap: 10px;
            grid-template-rows:100px 200px;
        </pre>
        <p>注释：</p>
        <p>grid-template-columns 值如果是auto，有几个auto就会平均分为几份相等的元素，还可以填写以px为单位，如grid-template-columns：10px 20px ...;</p>
        <p>grid-template-rows 设置每一行的高度，从左到右每个值代表每一行的高度；如grid-template-rows：100px 200px ...;</p>
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
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 60%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows:100px 200px;
    grid-gap: 10px;
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

}

</style>
