<template>
    <div id="one">
        <article class="articleContanier">
                <p>一、项目src文件下，新建styles目录，当然位置自己随意定，新建了这三个scss文件，下面我们对这三个文件进行一一解析。</p>
                <div class="contanier">
                    <div class="imgs"></div>
                </div>
                <p>二、新建constant.scss：用于放置项目中的sass变量，比如主题颜色，大字体的字号，小字体的字号等等，这里只是用于测试</p>
                <div class="contanier" @mouseover="show=true" @mouseleave="show=false">
                    <el-button :icon="DocumentCopy" class="copy copyClass" v-show="show" @click="copy(refClone)"></el-button>
                    <pre class="pre" ref="refClone">
                        <code>
                            $color-red: #ff0000;
                            $large-size: 40px;
                            $font-oblique: oblique;
                        </code>
                    </pre>
                </div>
                <p>三、新建index.scss：用于放置项目中自己封装的一些常用的样式，class类名，比如flex布局，定位，字体等等，这个只写了一个</p>
                <div class="contanier" @mouseover="show1=true" @mouseleave="show1=false">
                    <el-button :icon="DocumentCopy" class="copy copyClass1" v-show="show1" @click="copy(refClone1)"></el-button>
                    <pre class="pre" ref="refClone1">
                        <code class="code1">
                            @import "./constant.scss";
    
                            .l-size {
                            font-size: $large-size;
                            }
                        </code>
                    </pre>
                </div>
                <p>四、variables.module.scss：用于scss变量的导出，大部分用于vue文件中js中使用</p>
                <div class="contanier" @mouseover="show2=true" @mouseleave="show2=false">
                    <el-button :icon="DocumentCopy" class="copy copyClass2" v-show="show2" @click="copy(refClone2)"></el-button>
                    <pre class="pre">
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
                <div class="contanier" @mouseover="show3=true" @mouseleave="show3=false">
                    <el-button :icon="DocumentCopy" class="copy copyClass3" v-show="show3" @click="copy(refClone3)"></el-button>
                    <pre class="pre"  ref="refClone3">
                        <code>
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
                <div class="contanier" @mouseover="show4=true" @mouseleave="show4=false">
                    <el-button :icon="DocumentCopy" class="copy copyClass4" v-show="show4" @click="copy(refClone4)"></el-button>
                    <pre class="pre" ref="refClone4">
                        <code>
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
                <div class="contanier" @mouseover="show5=true" @mouseleave="show5=false">
                    <el-button :icon="DocumentCopy" class="copy copyClass5" v-show="show5" @click="copy(refClone5)"></el-button>
                    <pre class="pre"  ref="refClone5">
                        <code>
                            &lt;script setup&gt;
                                import variables from "@/styles/variables.module.scss"
                                
                                console.log(variables)
                            &lt;/script&gt;
                        </code>
                    </pre>
                </div>
                <div class="imgs3"></div>
                <p>2、于是我们可以这么写</p>
                <div class="contanier" @mouseover="show6=true" @mouseleave="show6=false">
                    <el-button :icon="DocumentCopy" class="copy copyClass6" v-show="show6" @click="copy(refClone6)"></el-button>
                    <pre class="pre" ref="refClone6">
                        <code>
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
                <div class="contanier" @mouseover="show7=true" @mouseleave="show7=false">
                    <el-button :icon="DocumentCopy" class="copy copyClass7" v-show="show7" @click="copy(refClone7)"></el-button>
                    <pre class="pre" ref="refClone7">
                        <code>
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
            <div href="#one" class="backToTop" v-show="bottomingOut" @click="goTop">回到顶部</div>
        </div>
</template>
<script setup name="Scss">
import { DocumentCopy } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { copy,goTop } from "@/utils/helpers.js"
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
const refClone = ref(null)
const refClone1 = ref(null)
const refClone2 = ref(null)
const refClone3 = ref(null)
const refClone4 = ref(null)
const refClone5 = ref(null)
const refClone6 = ref(null)
const refClone7 = ref(null)
</script>
<style lang="scss" scoped>
.imgs {
    width: 500px;
    height: 180px;
    background: url('@/assets/images/scss1.png') no-repeat;
    background-size: 100%;
}
.imgs1 {
    width: 500px;
    height: 250px;
    background: url('@/assets/images/scss2.jpg') no-repeat;
    background-size: 100%;
}
.imgs2 {
    width: 500px;
    height: 250px;
    background: url('@/assets/images/scss3.png') no-repeat;
    background-size: 100%;
}
.imgs3 {
    width: 500px;
    height: 250px;
    background: url('@/assets/images/scss4.png') no-repeat;
    background-size: 100%;
}
</style>