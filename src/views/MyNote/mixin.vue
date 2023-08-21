<template>
    <div id="one">
        <h1>Vue3.x中的Mixin实现组件功能的复用 、全局配置Mixin</h1>
        <article class="articleContanier">
            <p>一、Vue3.x中的mixin介绍使用混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。</p>
            <p>1、新建mixin/base.js</p>
            <div class="contanier" @mouseover="show=true" @mouseleave="show=false">
                <el-button :icon="DocumentCopy" class="copy" v-show="show" @click="copy(refClone)"></el-button>
                <pre class="pre" ref="refClone">
                    <code>
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
            <div class="contanier"  @mouseover="show1=true" @mouseleave="show1=false">
                <el-button :icon="DocumentCopy" class="copy" v-show="show1" @click="copy(refClone1)"></el-button>
                <pre class="pre"  ref="refClone1">
                    <code>
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
            <div class="contanier" @mouseover="show2=true" @mouseleave="show2=false">
                <el-button :icon="DocumentCopy" class="copy" v-show="show2" @click="copy(refClone2)"></el-button>
                <pre class="pre" ref="refClone2">
                    <code>
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
            <div class="contanier" @mouseover="show3=true" @mouseleave="show3=false">
                <el-button :icon="DocumentCopy" class="copy" v-show="show3" @click="copy(refClone3)"></el-button>
                <pre class="pre" ref="refClone3" >
                    <code>
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
            <div class="contanier" @mouseover="show4=true" @mouseleave="show4=false">
                <el-button :icon="DocumentCopy" class="copy" v-show="show4"  @click="copy(refClone4)"></el-button>
                <pre class="pre" ref="refClone4">
                    <code>
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
            <div class="contanier" @mouseover="show5=true" @mouseleave="show5=false">
                <el-button :icon="DocumentCopy" class="copy" v-show="show5" @click="copy(refClone5)"></el-button>
                <pre class="pre" ref="refClone5">
                    <code>
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
            <div class="contanier" @mouseover="show6=true" @mouseleave="show6=false">
                <el-button :icon="DocumentCopy" class="copy" v-show="show6" @click="copy(refClone6)"></el-button>
                <pre class="pre" ref="refClone6">
                    <code>
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
            <div class="contanier" @mouseover="show7=true" @mouseleave="show7=false">
                <el-button :icon="DocumentCopy" class="copy" v-show="show7" @click="copy(refClone7)"></el-button>
                <pre class="pre" ref="refClone7">
                    <code>
                        // 在全局main.js导入
                        <span class="keyword">import</span> mix <span class="keyword">form</span> <span class="string">"./utils/autoHeight"</span>
                        app.<span class="function">mixin</span>(mix)
                    </code>
                </pre>
            </div>
            <p>（3）在vue页面使用</p>
            <div class="contanier" @mouseover="show8=true" @mouseleave="show8=false">
                <el-button :icon="DocumentCopy" class="copy" v-show="show8" @click="copy(refClone8)"></el-button>
                <pre class="pre" ref="refClone8">
                    <code>
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
        <div href="#one" class="backToTop" v-show="bottomingOut"  @click="goTop">回到顶部</div>
    </div>
</template>
<script setup name="Mixin">
import { DocumentCopy } from '@element-plus/icons-vue'
import { ref, watch,onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/store/user"

const user = useUserStore()

const bottomingOut = computed(() => user.bottomingOut);
const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)
const show7 = ref(false)
const show8 = ref(false)
const refClone = ref(null)
const refClone1 = ref(null)
const refClone2 = ref(null)
const refClone3 = ref(null)
const refClone4 = ref(null)
const refClone5 = ref(null)
const refClone6 = ref(null)
const refClone7 = ref(null)
const refClone8 = ref(null)
onMounted(()=> {console.log(user.bottomingOut)})
watch(bottomingOut, (newValue, oldValue) => {
    console.log('count changed from', oldValue, 'to', newValue);
});
</script>

<style lang="scss" scoped>

</style>