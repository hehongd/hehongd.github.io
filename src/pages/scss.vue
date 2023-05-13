<template>
    <div>
        <h1>new Date()</h1>
        <article class="articleContanier">
            <p>一、项目src文件下，新建styles目录，当然位置自己随意定，新建了这三个scss文件，下面我们对这三个文件进行一一解析。</p>
            <div class="contanier">
                <div class="imgs"></div>
            </div>
            <p>二、新建constant.scss：用于放置项目中的sass变量，比如主题颜色，大字体的字号，小字体的字号等等，这里只是用于测试</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass" id="but"></el-button>
                <pre class="pre preClass" id="bar">
                    <code class="code">
                        $color-red: #ff0000;
                        $large-size: 40px;
                        $font-oblique: oblique;
                    </code>
                </pre>
            </div>
            <p>三、新建index.scss：用于放置项目中自己封装的一些常用的样式，class类名，比如flex布局，定位，字体等等，这个只写了一个</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass1" id="but1"></el-button>
                <pre class="pre preClass1" id="bar">
                    <code class="code1">
                        @import "./constant.scss";
  
                        .l-size {
                           font-size: $large-size;
                        }
                    </code>
                </pre>
            </div>
            <p>四、variables.module.scss：用于scss变量的导出，大部分用于vue文件中js中使用</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass2" id="but2"></el-button>
                <pre class="pre preClass2" id="bar">
                    <code class="code2">
                        @import "./constant.scss";
  
                        :export {
                            fontOblique: $font-oblique;
                        }
                    </code>
                </pre>
            </div>
            <p>五、将我们封装的公共的css样式类名导入进main.js文件中，这样在所有的vue文件中，就可以随意使用这些样式了</p>
            <div class="contanier">
                <div class="imgs1"></div>
            </div>
            <p>六、vite.config.js配置</p>
            <p>1、主要用途是将我们的constant.scss中的scss常量加载到全局，这样我们可以在style标签中，随意使用这些scss常量</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass3" id="but3"></el-button>
                <pre class="pre preClass3" id="bar">
                    <code class="code3">
                        import {defineConfig} from 'vite'
                        import vue from '@vitejs/plugin-vue'
                        import path from 'path';
                        
                        // https://vitejs.dev/config/
                        export default defineConfig({
                            plugins: [vue()],
                            resolve: {
                                // Vite路径别名配置
                                alias: {
                                    '@': path.resolve('./src')
                                }
                            },
                            /*主要看下面这段*/
                            css: {
                                preprocessorOptions: {
                                    scss: {
                                        additionalData: '@import "@/styles/constant.scss";'
                                    }
                                }
                            }
                        })
                    </code>
                </pre>
            </div>
            <p>七、在页面中使用</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass4" id="but4"></el-button>
                <pre class="pre preClass4" id="bar">
                    <code class="code4">
                        &lt;template&gt;
                            &lt;div class="l-size content"&gt;
                                123456
                            &lt;/div&gt;
                        &lt;/template&gt;
                        
                        &lt;style lang="scss" scoped&gt;
                            .content {
                                color: $color-red;
                            }
                        &lt;/style&gt;
                    </code>
                </pre>
                <div class="imgs2"></div>
            </div>
            <p>八、新建测试文件Test.vue</p>
            <p>1、接下来，我们将 variables.module.scss中的变量导入到当前的vue文件中。</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass5" id="but5"></el-button>
                <pre class="pre preClass5" id="bar">
                    <code class="code5">
                        &lt;script setup&gt;
                            import variables from "@/styles/variables.module.scss"
                            
                            console.log(variables)
                        &lt;/script&gt;
                    </code>
                </pre>
            </div>
            <div class="imgs3"></div>
            <p>2、于是我们可以这么写</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass6" id="but6"></el-button>
                <pre class="pre preClass6" id="bar">
                    <code class="code6">
                        &lt;template&gt;
                            &lt;div class="l-size content" :style="{fontStyle:variables.fontOblique}"&gt;
                                123456
                            &lt;/div&gt;
                        &lt;/template&gt;
                        
                        &lt;script setup&gt;
                            import variables from "../styles/variables.module.scss"
                        
                            console.log(variables)
                        &lt;/script&gt;
                        
                        &lt;style lang="scss" scoped&gt;
                            .content {
                                color: $color-red;
                            }
                        &lt;/style&gt;
                    </code>
                </pre>
            </div>
            <p>3、或者利用computed</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass7" id="but7"></el-button>
                <pre class="pre preClass7" id="bar">
                    <code class="code7">
                        &lt;template&gt;
                            &lt;div&gt; class="l-size content" :style="getStyle"&gt;
                                123456
                            &lt;/div&gt;
                        &lt;/template&gt;
                        
                        &lt;script setup lang="ts"&gt;
                            import {computed} from "vue"
                            import variables from "../styles/variables.module.scss"
                        
                            const getStyle = computed(() =>; ({fontStyle: variables.fontOblique}))
                        &lt;/script&gt;
                        
                        &lt;style lang="scss" scoped&gt;
                            .content {
                                color: $color-red;
                            }
                        &lt;/style&gt;
                    </code>
                </pre>
            </div>
            <div class="imgs2"></div>
        </article>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            clipboard:null,
            clipboard1:null,
        }
    },
    mounted(){
        this.copy()
    },
    methods:{
            copy() {
                let _that = this
                document.getElementById("but").style.display="none";
                document.getElementById("but1").style.display="none";
                document.getElementById("but2").style.display="none";
                document.getElementById("but3").style.display="none";
                document.getElementById("but4").style.display="none";
                document.getElementById("but5").style.display="none";
                document.getElementById("but6").style.display="none";
                document.getElementById("but7").style.display="none";
     
                codeValue = document.getElementsByClassName('code')[0].innerHTML
                if(document.getElementsByClassName('preClass').length> 0){
                    document.getElementsByClassName('preClass')[0].onmouseenter = function (){
                        document.getElementById("but").style.display="inline";
                    }
                    document.getElementsByClassName('preClass')[0].onmouseleave  = function (){
                        document.getElementById("but").style.display="none";
                    }
                    document.getElementsByClassName('copyClass')[0].onmouseenter = function (){
                        document.getElementById("but").style.display="inline";
                    }
                }

                if(document.getElementsByClassName('preClass1').length> 0){
                    document.getElementsByClassName('preClass1')[0].onmouseenter = function (){
                        document.getElementById("but1").style.display="inline";
                    }
                    document.getElementsByClassName('preClass1')[0].onmouseleave  = function (){
                        document.getElementById("but1").style.display="none";
                    }
                    document.getElementsByClassName('copyClass1')[0].onmouseenter = function (){
                        document.getElementById("but1").style.display="inline";
                    }
                }

                if(document.getElementsByClassName('preClass2').length> 0){
                    document.getElementsByClassName('preClass2')[0].onmouseenter = function (){
                        document.getElementById("but2").style.display="inline";
                    }
                    document.getElementsByClassName('preClass2')[0].onmouseleave  = function (){
                        document.getElementById("but2").style.display="none";
                    }
                    document.getElementsByClassName('copyClass2')[0].onmouseenter = function (){
                        document.getElementById("but2").style.display="inline";
                    }
                }
                if(document.getElementsByClassName('preClass3').length> 0){
                    document.getElementsByClassName('preClass3')[0].onmouseenter = function (){
                        document.getElementById("but3").style.display="inline";
                    }
                    document.getElementsByClassName('preClass3')[0].onmouseleave  = function (){
                        document.getElementById("but3").style.display="none";
                    }
                    document.getElementsByClassName('copyClass3')[0].onmouseenter = function (){
                        document.getElementById("but3").style.display="inline";
                    }
                }
                if(document.getElementsByClassName('preClass4').length> 0){
                    document.getElementsByClassName('preClass4')[0].onmouseenter = function (){
                        document.getElementById("but4").style.display="inline";
                    }
                    document.getElementsByClassName('preClass4')[0].onmouseleave  = function (){
                        document.getElementById("but4").style.display="none";
                    }
                    document.getElementsByClassName('copyClass4')[0].onmouseenter = function (){
                        document.getElementById("but4").style.display="inline";
                    }
                }
                if(document.getElementsByClassName('preClass5').length> 0){
                    document.getElementsByClassName('preClass5')[0].onmouseenter = function (){
                        document.getElementById("but5").style.display="inline";
                    }
                    document.getElementsByClassName('preClass5')[0].onmouseleave  = function (){
                        document.getElementById("but5").style.display="none";
                    }
                    document.getElementsByClassName('copyClass5')[0].onmouseenter = function (){
                        document.getElementById("but5").style.display="inline";
                    }
                }
                if(document.getElementsByClassName('preClass6').length> 0){
                    document.getElementsByClassName('preClass6')[0].onmouseenter = function (){
                        document.getElementById("but6").style.display="inline";
                    }
                    document.getElementsByClassName('preClass6')[0].onmouseleave  = function (){
                        document.getElementById("but6").style.display="none";
                    }
                    document.getElementsByClassName('copyClass6')[0].onmouseenter = function (){
                        document.getElementById("but6").style.display="inline";
                    }
                }
                if(document.getElementsByClassName('preClass7').length> 0){
                    document.getElementsByClassName('preClass7')[0].onmouseenter = function (){
                        document.getElementById("but7").style.display="inline";
                    }
                    document.getElementsByClassName('preClass7')[0].onmouseleave  = function (){
                        document.getElementById("but7").style.display="none";
                    }
                    document.getElementsByClassName('copyClass7')[0].onmouseenter = function (){
                        document.getElementById("but7").style.display="inline";
                    }
                }


                _that.clipboard = new ClipboardJS('#but', {
                    text: function() {    // 如果想从其它DOM元素内容复制。应该是target:function(){return: };
                    codeValue = document.getElementsByClassName('code')[0].innerHTML
                    return _that.filter(codeValue);
                    }
                });
                _that.clipboard.on('success', function(e) {
                    console.log(e)
                    ELEMENT.Message({
                    message: '复制代码成功',
                    type: 'success'
                    });
                });
                
                _that.clipboard.on('error', function(e) {
                    ELEMENT.Message.error('错了哦，这是一条错误消息');
                });

                _that.clipboard1 = new ClipboardJS('#but1', {
                    text: function() {    // 如果想从其它DOM元素内容复制。应该是target:function(){return: };
                    let codeValue1 = document.getElementsByClassName('code1')[0].innerHTML
                    
                    return _that.filter(codeValue1);
                    }
                });
                _that.clipboard1.on('success', function(e) {
                    ELEMENT.Message({
                    message: '复制代码成功',
                    type: 'success'
                    });
                });
                _that.clipboard1.on('error', function(e) {
                    ELEMENT.Message.error('错了哦，这是一条错误消息');
                });

                _that.clipboard2 = new ClipboardJS('#but2', {
                    text: function() {    // 如果想从其它DOM元素内容复制。应该是target:function(){return: };
                    let codeValue2 = document.getElementsByClassName('code2')[0].innerHTML
                    
                    return _that.filter(codeValue2);
                    }
                });
                _that.clipboard2.on('success', function(e) {
                    ELEMENT.Message({
                    message: '复制代码成功',
                    type: 'success'
                    });
                });
                _that.clipboard2.on('error', function(e) {
                    ELEMENT.Message.error('错了哦，这是一条错误消息');
                });
                

                _that.clipboard3 = new ClipboardJS('#but3', {
                    text: function() {    // 如果想从其它DOM元素内容复制。应该是target:function(){return: };
                    let codeValue3 = document.getElementsByClassName('code3')[0].innerHTML
                    
                    return _that.filter(codeValue3);
                    }
                });
                _that.clipboard3.on('success', function(e) {
                    ELEMENT.Message({
                    message: '复制代码成功',
                    type: 'success'
                    });
                });
                _that.clipboard3.on('error', function(e) {
                    ELEMENT.Message.error('错了哦，这是一条错误消息');
                });

                _that.clipboard4 = new ClipboardJS('#but4', {
                    text: function() {    // 如果想从其它DOM元素内容复制。应该是target:function(){return: };
                    let codeValue4 = document.getElementsByClassName('code4')[0].innerHTML
                    
                    return _that.filter(codeValue4);
                    }
                });
                _that.clipboard4.on('success', function(e) {
                    ELEMENT.Message({
                    message: '复制代码成功',
                    type: 'success'
                    });
                });
                _that.clipboard4.on('error', function(e) {
                    ELEMENT.Message.error('错了哦，这是一条错误消息');
                });

                _that.clipboard5 = new ClipboardJS('#but5', {
                    text: function() {    // 如果想从其它DOM元素内容复制。应该是target:function(){return: };
                    let codeValue5 = document.getElementsByClassName('code5')[0].innerHTML
                    
                    return _that.filter(codeValue5);
                    }
                });
                _that.clipboard5.on('success', function(e) {
                    ELEMENT.Message({
                    message: '复制代码成功',
                    type: 'success'
                    });
                });
                _that.clipboard5.on('error', function(e) {
                    ELEMENT.Message.error('错了哦，这是一条错误消息');
                });
                
                _that.clipboard6 = new ClipboardJS('#but6', {
                    text: function() {    // 如果想从其它DOM元素内容复制。应该是target:function(){return: };
                    let codeValue6 = document.getElementsByClassName('code6')[0].innerHTML
                    
                    return _that.filter(codeValue6);
                    }
                });
                _that.clipboard6.on('success', function(e) {
                    ELEMENT.Message({
                    message: '复制代码成功',
                    type: 'success'
                    });
                });
                _that.clipboard6.on('error', function(e) {
                    ELEMENT.Message.error('错了哦，这是一条错误消息');
                });

                _that.clipboard7 = new ClipboardJS('#but7', {
                    text: function() {    // 如果想从其它DOM元素内容复制。应该是target:function(){return: };
                    let codeValue7 = document.getElementsByClassName('code7')[0].innerHTML
                    
                    return _that.filter(codeValue7);
                    }
                });
                _that.clipboard7.on('success', function(e) {
                    ELEMENT.Message({
                    message: '复制代码成功',
                    type: 'success'
                    });
                });
                _that.clipboard7.on('error', function(e) {
                    ELEMENT.Message.error('错了哦，这是一条错误消息');
                });
            },
            escape2Html(str) {
                var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
                return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){
                    return arrEntities[t];
                });
            },
            //过滤html标签
            filter(html) {
                return html
                    .replace(/<(?:.|\n)*?>/gm, '')
                    .replace(/(&rdquo;)/g, '"')
                    .replace(/&ldquo;/g, '"')
                    .replace(/&mdash;/g, '-')
                    .replace(/&nbsp;/g, '')
                    .replace(/&gt;/g, '>')
                    .replace(/&lt;/g, '<')
                    // .replace(/<[\w\s"':=\/]*/, '')
            }
        },
        destroyed(){
            this.clipboard.destroy()
            this.clipboard1.destroy()
        }
}
</script>

<style>
.imgs {
    width: 500px;
    height: 180px;
    background: url('../images/scss1.png') no-repeat;
    background-size: 100%;
}
.imgs1 {
    width: 500px;
    height: 250px;
    background: url('../images/scss2.jpg') no-repeat;
    background-size: 100%;
}
.imgs2 {
    width: 500px;
    height: 250px;
    background: url('../images/scss3.png') no-repeat;
    background-size: 100%;
}
.imgs3 {
    width: 500px;
    height: 250px;
    background: url('../images/scss4.png') no-repeat;
    background-size: 100%;
}
.articleContanier {
    line-height: 1.8;
}
.articleContanier p {
    margin-bottom: 20px;
}
.contanier {
    position: relative;
}
.copy {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 32px;
    height: 24px;
    cursor: pointer;
    font-size: 14px;
    padding: 0;
    border: none;
    border-radius: 6px;
    color: #ccc;
    background-color: hsla(0,0%,90.2%,.2);
    box-shadow: 0 2px 0 0 rgba(0,0,0,.25);
}
.pre {
    word-wrap: normal;
    word-break: break-all;
    white-space: pre;
    overflow-x: scroll;
    overscroll-behavior-x: contain;
    margin-top: 0;
    margin-bottom: 20px;
    border-radius: 4px;
    z-index: 0;
    padding: 1em;
    line-height: 1.5;
    color: #ccc;
    background: #2d2d2d;
}
.keyword {
    color: #cc99cd;
}
.function {
    color: #f08d49;
}
.string {
    color: #7ec699;
}
.tag {
    color: #e2777a;
}
</style>
