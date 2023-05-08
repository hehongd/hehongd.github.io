
<template>
    <div id="one">
        <h1>Vue3.x中的Mixin实现组件功能的复用 、全局配置Mixin</h1>
        <article class="articleContanier">
            <p>一、Vue3.x中的mixin介绍使用混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。</p>
            <p>1、新建mixin/base.js</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass" id="but"></el-button>
                <pre class="pre preClass" id="bar">
                    <code class="code">
                        <span class="keyword">const</span> baseMixin = {
                            <span class="function">data</span>() {
                                <span class="keyword">return</span>{
                                        apiDomain: <span class="string">"http://www.xxxx.com"</span>
                                }
                            },
                            methods: {
                                <span class="function">success</span>() {
                                    console.<span class="function">log</span>("succss")
                                },
                                <span class="function">error</span>() {
                                    console.<span class="function">error</span>("error")
                                }
                            }
                        }

                        <span class="keyword">export default</span> baseMixin;
                    </code>
                </pre>
            </div>
            <p>2、使用mixin</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass1" id="but1"></el-button>
                <pre class="pre preClass1" id="bar">
                    <code class="code1">
                        &lt;<span class="tag">template</span>&gt;
                        &lt;<span class="tag">div</span>&gt;
                            首页模板--{{'\u007B'}}{{'\u007B'}}apiDomain{{'\u007d'}}{{'\u007d'}}
                        &lt;<span class="tag">/div</span>&gt;
                        &lt;<span class="tag">/template</span>&gt;

                        &lt;<span class="tag">script</span>&gt;                
                        import BaseMixin from "../mixin/base"
                        export default {
                            mixins: [BaseMixin],
                            data() {
                                return {

                                }
                            }
                        }
                        &lt;<span class="tag">/script</span>&gt; 
                    </code>
                </pre>
            </div>
            <p>二、关于Mixin的选项合并<br/>当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。</p>
            <p>1、比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass2" id="but2"></el-button>
                <pre class="pre preClass2" id="bar">
                    <code class="code2">
                       <span class="keyword">const</span> myMixin = {
                            <span class="keyword">data</span>() {
                                <span class="keyword">return</span> {
                                message: <span class="string">"hello"</span>,
                                foo: <span class="string">"abc"</span>
                                }
                            }
                        }

                        <span class="keyword">const</span> app = Vue.createApp({
                            mixins: [myMixin],
                            <span class="keyword">data</span>() {
                                <span class="keyword">return</span> {
                                    message: <span class="string">"goodbye"</span>,
                                    bar: <span class="string">"def"</span>
                                }
                            },
                            <span class="function">created</span>() {
                                console.<span class="function">log</span>(<span class="keyword">this</span>.$<span class="keyword">data</span>) // => { message: "goodbye", foo: "abc", bar: "def" }
                            }
                        })
                    </code>
                </pre>
            </div>
            <p>2、同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass3" id="but3"></el-button>
                <pre class="pre preClass3" id="bar">
                    <code class="code3">
                        <span class="keyword">const</span> myMixin = {
                            <span class="function">created</span>() {
                                console.<span class="function">log</span>(<span class="string">"mixin hook called"</span>)
                            }
                        }

                        <span class="keyword">const</span> app = Vue.createApp({
                            mixins: [myMixin],
                            <span class="function">created</span>() {
                                console.<span class="function">log</span>(<span class="string">"component hook called"</span>)
                            }
                        })
                    </code>
                </pre>
            </div>

            <p>// => "混入对象的钩子被调用"<br/>// => "组件钩子被调用"<br/>3、值为对象的选项，例如 methods、components，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass4" id="but4"></el-button>
                <pre class="pre preClass4" id="bar">
                    <code class="code4">
                        <span class="keyword">const</span> myMixin = {
                            methods: {
                                <span class="function">foo</span>() {
                                console.<span class="function">log</span>(<span class="string">"foo"</span>)
                                },
                                <span class="function">conflicting</span>() {
                                console.<span class="function">log</span>(<span class="string">"from mixin"</span>)
                                }
                            }
                        }

                        <span class="keyword">const</span> app = Vue.<span class="function">createApp</span>({
                            mixins: [myMixin],
                            methods: {
                                <span class="function">bar</span>() {
                                console.<span class="function">log</span>(<span class="string">"bar"</span>)
                                },
                                <span class="function">conflicting</span>() {
                                console.<span class="function">log</span>(<span class="string">"from self"</span>)
                                }
                            }
                        })

                        <span class="keyword">const</span> vm = app.mount(<span class="string">"#mixins-basic"</span>)

                        vm.<span class="function">foo</span>() // => <span class="string">"foo"</span>
                        vm.<span class="function">bar</span>() // => <span class="string">"bar"</span>
                        vm.<span class="function">bconflictingar</span>() // => <span class="string">"from self"</span>
                    </code>
                </pre>
            </div>
            
            <p>三、全局配置Mixin(1)<br/>你还可以为 Vue 应用程序全局应用 mixin</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass5" id="but5"></el-button>
                <pre class="pre preClass5" id="bar">
                    <code class="code5">
                        <span class="keyword">const</span> app = Vue.<span class="function">createApp</span>({
                            myOption: <span class="string">"hello!"</span>
                        })

                        // 为自定义的选项 'myOption' 注入一个处理器。
                        app.<span class="function">mixin</span>({
                            <span class="function">created</span>() {
                                <span class="keyword">const</span> myOption = <span class="keyword">this</span>.$options.myOption
                                <span class="keyword">coifnst</span> (myOption) {
                                console.<span class="function">log</span>(myOption)
                                }
                            }
                        })

                        app.<span class="function">mount</span>(<span class="string">"#mixins-global"</span>) // => "hello!"
                        <span class="keyword">import</span> { createApp } <span class="keyword">form</span> <span class="string">"vue"</span>
                        <span class="keyword">import</span> App <span class="keyword">form</span> <span class="string">"./App.vue"</span>
                        <span class="keyword">import</span> BaseMixin <span class="keyword">form</span> <span class="string">"./mixin/base"</span>

                        //原来的代码
                        // createApp(App).mount('#app')

                        //修改后的代码
                        <span class="keyword">const</span> app=<span class="function">createApp</span>(App);

                        app.<span class="function">mixin</span>(BaseMixin)

                        app.<span class="function">mount</span>('#app');
                    </code>
                </pre>
            </div>

            <p>三、全局配置Mixin(2)<br/>自动计算el-table表格的高度实例</p>
            <p>（1）在utils下新建autoHeight.js文件</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass6" id="but6"></el-button>
                <pre class="pre preClass6" id="bar">
                    <code class="code6">
                        <span class="keyword">let</span> mixin = {
                            <span class="function">data</span>() {
                                <span class="keyword">return</span> {
                                    myTableHeight:0
                                }
                            },
                            <span class="function">activated</span>() {
                                <span class="keyword">if</span>(this.$refs.table) {
                                    this.<span class="function">$nextTick</span>(() => {
                                        this.setH()
                                    })
                                }
                            },
                            watch:{
                                // 表单的显示隐藏
                                <span class="function">showSearch</span>(newVal,oldVal) {
                                    this.<span class="function">$nextTick</span>(() => {
                                        this.setH()
                                    })
                                }
                            },
                            <span class="function">mounted</span>() {
                            <span class="function">window.addEventListener</span>('resize',() => {
                                this.<span class="function">setH()</span>
                            })
                            <span class="keyword">if</span>(this.$refs.table) {
                                setTimeout( <span class="function">()</span> => {
                                    this.<span class="function">setH()</span>
                                },500)
                            }
                            },
                            methods:{
                                // 自动计算表格高度
                                <span class="function">setH()</span> {
                                    <span class="keyword">let</span> height = document.body.clientHeight
                                    <span class="keyword">if</span>(this.$refs.table && this.$refs.table.$el) {
                                        this.myTableHeight = height - this.$refs.table.$el.<span class="function">getBoundingClientRect()</span>.top - 42 -50
                                    }
                                }
                            }
                        }

                        <span class="keyword">export default</span>  mixin
                    </code>
                </pre>
            </div>
            <p>（2）在main.js导入autoHeight.js</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass7" id="but7"></el-button>
                <pre class="pre preClass7" id="bar">
                    <code class="code7">
                        // 在全局main.js导入
                        <span class="keyword">import</span> mix <span class="keyword">form</span> <span class="string">"./utils/autoHeight"</span>
                        app.<span class="function">mixin</span>(mix)
                    </code>
                </pre>
            </div>
            <p>（3）在vue页面使用</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass8" id="but8"></el-button>
                <pre class="pre preClass8" id="bar">
                    <code class="code8">
                        //  在vue页面调用
                        &lt;el-table <span class="keyword">:data</span>=<span class="string">"tableData"</span> <span class="keyword">:height</span>t=<span class="string">"myTableHeight"</span>&gt;
                            &lt;el-table-column prop=<span class="string">"date"</span> label=<span class="string">"Date"</span> width=<span class="string">"180"</span> /&gt;
                            &lt;el-table-column prop=<span class="string">"name"</span> label=<span class="string">"Name"</span> width=<span class="string">"180"</span> /&gt;
                            &lt;el-table-column prop=<span class="string">"address"</span> label=<span class="string">"Address"</span> /&gt;
                        &lt;/el-table&gt;
                    </code>
                </pre>
            </div>
        </article>
    </div>
</template>
<script>
// http-vue-loader的示例中，单文件子组件中写的是module.exports = {}，而不是export default {}
	module.exports = {
		// 一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝
	    data: function() {
	        return {
	            clipboard:null,
	            clipboard1:null,
	            clipboard2:null,
	            clipboard3:null,
	            clipboard4:null,
	            clipboard5:null,
	            clipboard6:null,
	            clipboard7:null,
	            clipboard8:null,
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
                document.getElementById("but8").style.display="none";
     
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

                if(document.getElementsByClassName('preClass8').length> 0){
                    document.getElementsByClassName('preClass8')[0].onmouseenter = function (){
                        document.getElementById("but8").style.display="inline";
                    }
                    document.getElementsByClassName('preClass8')[0].onmouseleave  = function (){
                        document.getElementById("but8").style.display="none";
                    }
                    document.getElementsByClassName('copyClass8')[0].onmouseenter = function (){
                        document.getElementById("but8").style.display="inline";
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

                _that.clipboard8 = new ClipboardJS('#but8', {
                    text: function() {    // 如果想从其它DOM元素内容复制。应该是target:function(){return: };
                    let codeValue8 = document.getElementsByClassName('code8')[0].innerHTML
                    
                    return _that.filter(codeValue8);
                    }
                });
                _that.clipboard8.on('success', function(e) {
                    ELEMENT.Message({
                    message: '复制代码成功',
                    type: 'success'
                    });
                });
                _that.clipboard8.on('error', function(e) {
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
            this.clipboard2.destroy()
            this.clipboard3.destroy()
            this.clipboard4.destroy()
            this.clipboard5.destroy()
            this.clipboard6.destroy()
            this.clipboard7.destroy()
            this.clipboard8.destroy()
        }
	}
</script>

<style scoped>
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
