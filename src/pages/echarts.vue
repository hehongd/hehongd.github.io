<template>
    <div>
        <article class="articleContanier">
            <p>echarts自适应</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass" id="but"></el-button>
                <pre class="pre preClass" id="bar">
                    <code class="code">
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
        }
    },
    mounted(){
        this.copy()
    },
    methods:{
            copy() {
                let _that = this
                document.getElementById("but").style.display="none";
     
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
