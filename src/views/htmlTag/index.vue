<template>
  <div id="one">
        
        <article class="articleContanier">
            <h1>一、label标签的使用场景及意义。</h1>
            <p>一、label标签的作用是为鼠标用户改进了可用性，当用户点击【】标签中的文本时，浏览器就会自动将焦点转到和该标签相关联的控件上。通常是写在表单（form）内。</p>
            <h1>二、属性及用法。</h1>
            <h2>1、属性</h2>
            <p>label有两个属性for和accesskey。</p>
            <p>for功能：表示这个Lable是为哪个控件服务的，Label标签要绑定了for指定HTML元素的ID或name属性，你点击这个标签的时候，所绑定的元素将获取焦点 ，点击label所包裹内容，自动指向for指定的id或name</p>
            <p>accesskey则定义了访问这个控件的热键( 所设置的快捷键不能与浏览器的快捷键冲突，否则将优先激活浏览器的快捷键)</p>
            <h2>2、用法</h2>
            <div class="contanier" @mouseover="show=true" @mouseleave="show=false">
                <el-button :icon="DocumentCopy" class="copy copyClass" v-show="show" @click="copy(refClone)"></el-button>
                <pre class="pre" ref="refClone">
                    <code>
                        &lt;!DOCTYPE html&gt;
                            &lt;html&gt; lang="en"&gt;
                            &lt;head&gt;
                                &lt;meta charset="UTF-8" /&gt;
                                &lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;
                                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
                                &lt;title&gt;Document&lt;/title&gt;
                            &lt;/head&gt;
                            &lt;body&gt;
                                &lt;h1&gt;label标签&lt;/h1&gt;
                                &lt;h3&gt;一、for的用法&lt;/h3&gt;
                                &lt;h4&gt;不使用label的效果&lt;/h4&gt;
                                &lt;div&gt;
                                &lt;span&gt;性别&lt;/span&gt;
                                &lt;input type="radio" name="sex" value="man" /&gt;男
                                &lt;input type="radio" name="sex" value="woman" /&gt;女
                                &lt;/div&gt;
                                &lt;hr /&gt;
                                &lt;h4&gt;使用label的效果&lt;/h4&gt;
                                &lt;div&gt;
                                &lt;span&gt;性别&lt;/span&gt;
                                &lt;!-- 以下两种写法效果一致 --&gt;
                                &lt;!-- 使用label直接包裹目标标签，默认for自动绑定该元素 --&gt;
                                &lt;label&gt;&lt;input type="radio" name="sex" value="man" /&gt;男&lt;/label&gt;
                                &lt;!-- 通过for关联目标元素id --&gt;
                                &lt;input type="radio" name="sex" value="woman" id="w" /&gt;&lt;label for="w"
                                    &gt;女&lt;/label
                                &gt;
                                &lt;/div&gt;
                                &lt;hr /&gt;
                                &lt;h3&gt;二、accesskey的用法&lt;/h3&gt;
                                &lt;div&gt;
                                    &lt;!-- 体验时需要使用alt加accesskey指定的键才可以生效 --&gt;
                                &lt;label accesskey="N"&gt;身高：&lt;input type="text" /&gt;&lt;/label&gt;
                                &lt;label for="W" accesskey="O"&gt;体重：&lt;/label&gt;&lt;input type="text" id="W" /&gt;
                                &lt;/div&gt;
                            &lt;/body&gt;
                        &lt;/html&gt;
                    </code>
                </pre>
            </div>
            <p>如图</p>
            <div class="contanier">
                <div class="imgs"></div>
            </div>
        </article>
        <div href="#one" class="backToTop" v-show="bottomingOut"  @click="goTop">回到顶部</div>
    </div>
</template>

<script setup name="htmlTag">
import { ref } from 'vue'
import { DocumentCopy } from '@element-plus/icons-vue'
import { useUserStore } from "@/store/modules/user"

const user = useUserStore()

const bottomingOut = computed(() => user.bottomingOut);
const show = ref(false)
const refClone = ref(null)
</script>

<style lang="scss" scoped>
.imgs {
    width: 100%;
    height: 900px;
    background: url('@/assets/images/lable.png') no-repeat;
    background-size: 100%;
}
</style>
