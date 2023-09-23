<template>
    <div class="gridContainer">
        <h3>1.grid-template-columns定义网格布局中的列数</h3>
        <h3>2.grid-gap 属性定义网格布局中行与列之间间隙的尺寸</h3>
        <pre>
            display: grid;
            grid-template-columns: auto auto auto auto;
            grid-gap: 10px;
        </pre>
        <p>注释：</p>
        <p>grid-template-columns 值如果是auto，有几个auto就会平均分为几份相等的元素，还可以填写以px为单位，如grid-template-columns：10px 20px ...;</p>
        <p>grid-template-columns:100px 100px 100px; // 显示为三列每一列宽度100px </p>
        <p>grid-template-columns:repeat(3,100px);  //同上</p>
        <p>1、你想要多少行或者列，就填写相应属性值的个数，不填写，自动分配</p>
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
        <p>2、auto-fill，有时，单元格的大小是固定的，但是容器的大小不确定，这个属性就会自动填充;grid-template-columns: repeat(auto-fill,100px);</p>
        <div class="container1">
            <div class="item1">1</div>
            <div class="item2">2</div>
            <div class="item3">3</div>
            <div class="item4">4</div>
            <div class="item5">5</div>
            <div class="item6">6</div>
            <div class="item7">7</div>
            <div class="item8">8</div>
        </div>
        <p>3、fr，为了方便表示比例关系，网格布局提供了fr关键字(fraction 的缩写，意为"片段”);grid-template-columns:1fr 2fr 3fr;   // 列宽这样是分成6份各占 1 2 3 份 效果如下图 </p>
        <div class="container2">
            <div class="item1">1</div>
            <div class="item2">2</div>
            <div class="item3">3</div>
            <div class="item4">4</div>
            <div class="item5">5</div>
            <div class="item6">6</div>
            <div class="item7">7</div>
            <div class="item8">8</div>
        </div>
        <p>4、minmax()，函数产生一个长度范围，表示长度就在这个范围之中，它接受两个参数，分别为最小值和最大值;grid-template-columns: 1fr minmax(500px,1fr);  // 第一个参数最小值,第二个最大值</p>
        <div class="container3">
            <div class="item1">1</div>
            <div class="item2">2</div>
            <div class="item3">3</div>
            <div class="item4">4</div>
            <div class="item5">5</div>
            <div class="item6">6</div>
            <div class="item7">7</div>
            <div class="item8">8</div>
        </div>
        <p>5、auto，表示由浏览器自己决定长度;grid-template-columns: 100px auto 200px;表示中间宽度由浏览器决定。</p>
        <div class="container4">
            <div class="item1">1</div>
            <div class="item2">2</div>
            <div class="item3">3</div>
            <div class="item4">4</div>
            <div class="item5">5</div>
            <div class="item6">6</div>
            <div class="item7">7</div>
            <div class="item8">8</div>
        </div>
        <p>6、网格线．可以用方括号定义网格线名称，方便以后给盒子定位使用;grid-template-columns: [c1] 100px [c2] 100px [c3] 100px [c4]; </p>
        <div class="container5">
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
    height: 30%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
}
.container1 {
    width: 100%;
    height: 15%;
    display: grid;
    grid-template-columns: repeat(auto-fill,100px);
    // grid-gap: 10px;
}
.container2 {
    width: 100%;
    height: 15%;
    display: grid;
    // grid-template-columns:repeat(4,1fr); // 宽度平均分成四等份 
    grid-template-columns:1fr 2fr 3fr;   // 列宽这样是分成6份各占 1 2 3 份 效果如下图 
}
.container3 {
    width: 100%;
    height: 15%;
    display: grid;
    grid-template-columns: 1fr minmax(500px,1fr);  // 第一个参数最小值,第二个最大值
}
.container4 {
    width: 100%;
    height: 15%;
    display: grid;
    grid-template-columns: 100px auto 200px; //中间的宽度由浏览器决定
}
.container5 {
    width: 100%;
    height: 15%;
    display: grid;
    grid-template-columns: [c1] 100px [c2] 100px [c3] 100px [c4]; 
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

</style>
