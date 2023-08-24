<template>
   <div id="one" ref="oneRef">
    <h1>判断滚动条是否滚动到页面底部</h1>
    <article class="articleContanier">
        <p>scrollHeight：文档内容实际高度，包括超过屏幕视口高度溢出的部分。=内容的大小+paddng</p>
        <p> scrollTop：滚动条距元素（不一定是屏幕最顶端）顶部滚动的距离。</p>
        <p>clientHeight：浏览器窗口可视范围高度（就是自己能看到的高度，如果这个盒子都在可视区，内容则是盒子的高度）。=元素的大小+padding。</p>
        <p>offsetParent：距离该子元素最近的进行过定位的父元素（position：absolute relative fixed），如果其父元素中不存在定位则offsetParent为--body元素。=元素的大小+padding+border</p>
        <div class="imgConter">
            <img src="../../assets/webp/client.webp"  style="max-width:100%; height:auto;" />
            <div class="image-caption">客户区大小</div>
        </div>
        <div class="imgConter">
            <img src="../../assets/webp/scrolling-offset.webp"  style="max-width:100%; height:auto;" />
            <div class="image-caption">滚动偏移</div>
        </div>
        <h2>滚动条是否滚到底部的判断条件是</h2>
        <div class="contanier"  @mouseover="show=true" @mouseleave="show=false">
            <el-button :icon="DocumentCopy" class="copy" v-show="show" @click="copy(refClone)"></el-button>
            <pre class="pre"  ref="refClone">
                <code>
                    scrollHeight = scrollTop + clientHeight
                </code>
            </pre>
        </div>
        <p>所以在实现时我们只要获取这三个值就可以了，而这三个值js都有对应的api获取，分别是</p>
        <div class="contanier"  @mouseover="show1=true" @mouseleave="show1=false">
            <el-button :icon="DocumentCopy" class="copy" v-show="show1" @click="copy(refClone1)"></el-button>
            <pre class="pre"  ref="refClone1">
                <code>
                    <span class="keyword">let</span> scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight
                    <span class="keyword">let</span> scrollTop = document.body.scrollTop || document.documentElement.scrollTop
                    <span class="keyword">let</span> clientHeight = document.body.clientHeight || document.documentElement.clientHeight
                </code>
            </pre>
        </div>
        <h2>h5页面上下滑动翻页</h2>
        <p>判断条件：1）触底，触发翻页，2）翻页的时候，把上一页内容保存一下，下一页拼接到上一页内容后面，这样可以上下翻。</p>
        <div class="contanier"  @mouseover="show2=true" @mouseleave="show2=false">
            <el-button :icon="DocumentCopy" class="copy" v-show="show2" @click="copy(refClone2)"></el-button>
            <pre class="pre"  ref="refClone2">
                <code>
                    <span class="function">mounted</span>(){
                    window.addEventListener('scroll', <span class="keyword">this</span>.handleScroll,true) // 监听页面滚动*/
                    },
                    methods:{
                        <span class="function">handleScroll</span> () {
                        //变量scrollTop是滚动条滚动时，距离顶部的距离
                        <span class="keyword">let</span> scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
                        //变量windowHeight是可视区的高度
                        <span class="keyword">let</span> windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                        //变量scrollHeight是滚动条的总高度
                        <span class="keyword">let</span> scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
                        <span class="keyword">let</span> dataArr = []
                        //滚动条到底部的条件
                        if(scrollTop + windowHeight === scrollHeight){
                            dataArr = <span class="keyword">this</span>.giftList //把上一页的数据赋给dataArr
                            <span class="keyword">this</span>.pageNum = <span class="keyword">this</span>.pageNum + 1
                            <span class="keyword">this</span>.<span class="function">getList</span>()//请求到新一页的数据
                            <span class="keyword">this</span>.giftList = dataArr.<span class="function">concat</span>(<span class="keyword">this</span>.giftList)//数据拼接
                        }
                        },
                    // 获取所有展示的兑好礼列表,服务端接口用 rpc
                    <span class="function">getList</span>(){
                        <span class="keyword">let</span> param = {}
                        <span class="function">接口</span>(param,function(res){
                            <span class="keyword">let</span> res = <span class="keyword">this</span>.<span class="function">response</span>(res)
                            <span class="keyword">this</span>.giftList = res.list 
                        })
                    },
                    }
                </code>
            </pre>
        </div>
    </article>
    <div href="#one" class="backToTop" v-show="bottomingOut" @click="goTop">回到顶部</div>
   </div>
</template>
<script setup name="BottomingOut">
import { ref, watch,onMounted } from 'vue'
import { DocumentCopy } from '@element-plus/icons-vue'
import { useUserStore } from "@/store/modules/user"

const user = useUserStore()

const bottomingOut = computed(() => user.bottomingOut);
const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
const refClone = ref(null)
const refClone1= ref(null)
const refClone2= ref(null)
const oneRef = ref(null)
</script>
<style lang="scss" scoped>
.imgConter {
    width: 100%;
    background: #FFF;
    padding-bottom: 20px;
    box-sizing: border-box;
}
.image-caption {
    font-size: 13px;
    color: #999;
    width: 100%;
    text-align: center;
}
</style>