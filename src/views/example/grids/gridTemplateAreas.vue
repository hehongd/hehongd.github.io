<template>
    <div class="gridContainer">
        <h3>1.容器属性 grid-template-areas 属性在网格布局中规定区域</h3>
        <p>一个区域由单个或多个单元格组成，由自己决定（具体使用，需要在项目属性里设置）</p>
        <pre>
            grid-template-areas:'a b c'
                                'd e f'
                                'g h i';
            grid-template-areas:'a a a'
                                'b b b'
                                'c c c';
            grid-template-areas:'a . c'
                                'd . f'
                                'g . i';
            区域不需要利用，则使用“点”（.）表示，区域的命名会影响到网格线。
            每个区域的起始网格线，会自动命名为区域名-start，终止网格线自动命名为区域名-end
        </pre>
        <p>注释：</p>
        <p>名字相同表示在一个区域，定位或者写项目属性的时候会用到</p>
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
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 60%;
    display: grid;
    // grid-template-columns: auto auto auto auto;
    // grid-template-rows:100px 200px;
    grid-template-areas:'a b c'
                        'd e f'
                        'g h i';
    grid-gap: 10px;
    .item1{
        background-color: rgb(224, 145, 145);
        grid-area: a;
    }
    .item2{
        background-color: rgb(73, 63, 63);
        grid-area: b;
    }
    .item3{
        background-color: rgb(70, 25, 25);
        grid-area: c;
    }
    .item4{
        background-color: rgb(145, 192, 76);
        grid-area: d;
    }
    .item5{
        background-color: rgb(34, 163, 34);
        grid-area: e;
    }
    .item6{
        background-color: rgb(160, 172, 144);
        grid-area: f;
    }
    .item7{
        background-color: rgb(178, 221, 178);
        grid-area: g;
    }
    .item8{
        background-color: #56eaf5;
        grid-area: h;
    }
    .item9{
        background-color: #6672df;
        grid-area: i;
    }

}

</style>
