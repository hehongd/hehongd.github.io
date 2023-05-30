<template>
    <div>
        <article class="articleContanier">
            <p>一.main.js引入echarts</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass" id="but"></el-button>
                <pre class="pre preClass" id="bar">
                    <code class="code">
                        import Vue from 'vue'
                        import App from './App'
                        import router from './router'
                        import echarts from 'echarts'

                        Vue.prototype.$echarts = function (el) {
                            return echarts.init(el, null, {renderer: 'svg'})
                        }
                        Vue.config.productionTip = false;
                        new Vue({
                        router,
                        render: h => h(App)
                        }).$mount('#app')
                    </code>
                </pre>
            </div>
            <p>echarts自适应</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass1" id="but1"></el-button>
                <pre class="pre preClass1" id="bar">
                    <code class="code1">
                        &lt;template&gt;
                            &lt;div class="page1"&gt;
                                &lt;div&gt;
                                    &lt;div&gt;
                                        &lt;double-area :selectRangeDate="selectRangeDate" ref='chart1'&gt;&lt;/double-area&gt;
                                    &lt;/div&gt;
                                    &lt;div&gt;
                                        &lt;radar-part ref="chart2"&gt;&lt;/radar-part&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/template&gt;

                        &lt;script&gt;
                        const radarPart = () => import('./components/page1/radarPart.vue');
                        const doubleArea = () => import('./components/page1/doubleArea.vue');

                        export default {
                            name: 'page1',
                            props: {
                                selectRangeDate: Array
                            },
                            components: {
                                radarPart,// 中心
                                doubleArea, // 面积图
                            
                            },
                            data() {
                                return {
                                    resizeFn: null
                                }
                            },
                            watch: {
                                selectRangeDate: function () {
                                    for (let i = 1; i < 3; i++) {
                                        this.$refs['chart' + i].setChart();
                                    }
                                }
                            },
                            mounted() {
                                this.resizeFn = this.debounce(() => {
                                    // 通过捕获系统的onresize事件触发我们需要执行的事件
                                    for (let i = 1; i < 3; i++) {
                                        this.$refs['chart' + i].setChart();
                                    }
                                }, 500)
                                window.addEventListener('resize', this.resizeFn)

                            },
                            beforeDestroy() {
                                window.removeEventListener('resize', this.resizeFn)
                            },
                            methods:{
                                debounce( fn,delay){
                                    let timer = null //借助闭包
                                    return function() {
                                        if(timer){
                                            clearTimeout(timer) //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
                                            timer = setTimeout(fn,delay)
                                        }else{
                                            timer = setTimeout(fn,delay) // 进入该分支说明当前并没有在计时，那么就开始一个计时
                                        }
                                    }
                                }
                            }

                        }

                        &lt;/script&gt;
                    </code>
                </pre>
            </div>
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
        }
}
</script>
<style>
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
