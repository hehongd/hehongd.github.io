import{_ as T,d as j,r as o,a as S,o as D,c as N,b as n,w as f,v as p,e as i,u as e,f as s,g as r,h as c,p as I,i as E}from"./index.8dfa9547.js";import{c as u}from"./copy.38672ff4.js";const l=v=>(I("data-v-f94f7dba"),v=v(),E(),v),z={id:"one"},L=l(()=>n("h1",null,"Vue3.x\u4E2D\u7684Mixin\u5B9E\u73B0\u7EC4\u4EF6\u529F\u80FD\u7684\u590D\u7528 \u3001\u5168\u5C40\u914D\u7F6EMixin",-1)),R={class:"articleContanier"},F=l(()=>n("p",null,"\u4E00\u3001Vue3.x\u4E2D\u7684mixin\u4ECB\u7ECD\u4F7F\u7528\u6DF7\u5165 (mixin) \u63D0\u4F9B\u4E86\u4E00\u79CD\u975E\u5E38\u7075\u6D3B\u7684\u65B9\u5F0F\uFF0C\u6765\u5206\u53D1 Vue \u7EC4\u4EF6\u4E2D\u7684\u53EF\u590D\u7528\u529F\u80FD\u3002\u4E00\u4E2A\u6DF7\u5165\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u7EC4\u4EF6\u9009\u9879\u3002\u5F53\u7EC4\u4EF6\u4F7F\u7528\u6DF7\u5165\u5BF9\u8C61\u65F6\uFF0C\u6240\u6709\u6DF7\u5165\u5BF9\u8C61\u7684\u9009\u9879\u5C06\u88AB\u201C\u6DF7\u5408\u201D\u8FDB\u5165\u8BE5\u7EC4\u4EF6\u672C\u8EAB\u7684\u9009\u9879\u3002",-1)),G=l(()=>n("p",null,"1\u3001\u65B0\u5EFAmixin/base.js",-1)),J=r(`<code class="code" data-v-f94f7dba>
                        <span class="keyword" data-v-f94f7dba>const</span> baseMixin = {
                            <span class="function" data-v-f94f7dba>data</span>() {
                                <span class="keyword" data-v-f94f7dba>return</span>{
                                        apiDomain: <span class="string" data-v-f94f7dba>&quot;http://www.xxxx.com&quot;</span>
                                }
                            },
                            methods: {
                                <span class="function" data-v-f94f7dba>success</span>() {
                                    console.<span class="function" data-v-f94f7dba>log</span>(&quot;succss&quot;)
                                },
                                <span class="function" data-v-f94f7dba>error</span>() {
                                    console.<span class="function" data-v-f94f7dba>error</span>(&quot;error&quot;)
                                }
                            }
                        }

                        <span class="keyword" data-v-f94f7dba>export default</span> baseMixin;
                    </code>`,1),K=l(()=>n("p",null,"2\u3001\u4F7F\u7528mixin",-1)),P=r(`<code class="code1" data-v-f94f7dba>
                        &lt;<span class="tag" data-v-f94f7dba>template</span>&gt;
                        &lt;<span class="tag" data-v-f94f7dba>div</span>&gt;
                            \u9996\u9875\u6A21\u677F--{{apiDomain}}
                        &lt;<span class="tag" data-v-f94f7dba>/div</span>&gt;
                        &lt;<span class="tag" data-v-f94f7dba>/template</span>&gt;

                        &lt;<span class="tag" data-v-f94f7dba>script</span>&gt;                
                        import BaseMixin from &quot;../mixin/base&quot;
                        export default {
                            mixins: [BaseMixin],
                            data() {
                                return {

                                }
                            }
                        }
                        &lt;<span class="tag" data-v-f94f7dba>/script</span>&gt; 
                    </code>`,1),Q=l(()=>n("p",null,[s("\u4E8C\u3001\u5173\u4E8EMixin\u7684\u9009\u9879\u5408\u5E76"),n("br"),s("\u5F53\u7EC4\u4EF6\u548C\u6DF7\u5165\u5BF9\u8C61\u542B\u6709\u540C\u540D\u9009\u9879\u65F6\uFF0C\u8FD9\u4E9B\u9009\u9879\u5C06\u4EE5\u6070\u5F53\u7684\u65B9\u5F0F\u8FDB\u884C\u201C\u5408\u5E76\u201D\u3002")],-1)),U=l(()=>n("p",null,"1\u3001\u6BD4\u5982\uFF0C\u6570\u636E\u5BF9\u8C61\u5728\u5185\u90E8\u4F1A\u8FDB\u884C\u9012\u5F52\u5408\u5E76\uFF0C\u5E76\u5728\u53D1\u751F\u51B2\u7A81\u65F6\u4EE5\u7EC4\u4EF6\u6570\u636E\u4F18\u5148\u3002",-1)),W=r(`<code class="code2" data-v-f94f7dba>
                       <span class="keyword" data-v-f94f7dba>const</span> myMixin = {
                            <span class="keyword" data-v-f94f7dba>data</span>() {
                                <span class="keyword" data-v-f94f7dba>return</span> {
                                message: <span class="string" data-v-f94f7dba>&quot;hello&quot;</span>,
                                foo: <span class="string" data-v-f94f7dba>&quot;abc&quot;</span>
                                }
                            }
                        }

                        <span class="keyword" data-v-f94f7dba>const</span> app = Vue.createApp({
                            mixins: [myMixin],
                            <span class="keyword" data-v-f94f7dba>data</span>() {
                                <span class="keyword" data-v-f94f7dba>return</span> {
                                    message: <span class="string" data-v-f94f7dba>&quot;goodbye&quot;</span>,
                                    bar: <span class="string" data-v-f94f7dba>&quot;def&quot;</span>
                                }
                            },
                            <span class="function" data-v-f94f7dba>created</span>() {
                                console.<span class="function" data-v-f94f7dba>log</span>(<span class="keyword" data-v-f94f7dba>this</span>.$<span class="keyword" data-v-f94f7dba>data</span>) // =&gt; { message: &quot;goodbye&quot;, foo: &quot;abc&quot;, bar: &quot;def&quot; }
                            }
                        })
                    </code>`,1),X=l(()=>n("p",null,"2\u3001\u540C\u540D\u94A9\u5B50\u51FD\u6570\u5C06\u5408\u5E76\u4E3A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u56E0\u6B64\u90FD\u5C06\u88AB\u8C03\u7528\u3002\u53E6\u5916\uFF0C\u6DF7\u5165\u5BF9\u8C61\u7684\u94A9\u5B50\u5C06\u5728\u7EC4\u4EF6\u81EA\u8EAB\u94A9\u5B50\u4E4B\u524D\u8C03\u7528\u3002",-1)),Y=r(`<code class="code3" data-v-f94f7dba>
                        <span class="keyword" data-v-f94f7dba>const</span> myMixin = {
                            <span class="function" data-v-f94f7dba>created</span>() {
                                console.<span class="function" data-v-f94f7dba>log</span>(<span class="string" data-v-f94f7dba>&quot;mixin hook called&quot;</span>)
                            }
                        }

                        <span class="keyword" data-v-f94f7dba>const</span> app = Vue.createApp({
                            mixins: [myMixin],
                            <span class="function" data-v-f94f7dba>created</span>() {
                                console.<span class="function" data-v-f94f7dba>log</span>(<span class="string" data-v-f94f7dba>&quot;component hook called&quot;</span>)
                            }
                        })
                    </code>`,1),Z=l(()=>n("p",null,[s('// => "\u6DF7\u5165\u5BF9\u8C61\u7684\u94A9\u5B50\u88AB\u8C03\u7528"'),n("br"),s('// => "\u7EC4\u4EF6\u94A9\u5B50\u88AB\u8C03\u7528"'),n("br"),s("3\u3001\u503C\u4E3A\u5BF9\u8C61\u7684\u9009\u9879\uFF0C\u4F8B\u5982 methods\u3001components\uFF0C\u5C06\u88AB\u5408\u5E76\u4E3A\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002\u4E24\u4E2A\u5BF9\u8C61\u952E\u540D\u51B2\u7A81\u65F6\uFF0C\u53D6\u7EC4\u4EF6\u5BF9\u8C61\u7684\u952E\u503C\u5BF9\u3002")],-1)),aa=r(`<code class="code4" data-v-f94f7dba>
                        <span class="keyword" data-v-f94f7dba>const</span> myMixin = {
                            methods: {
                                <span class="function" data-v-f94f7dba>foo</span>() {
                                console.<span class="function" data-v-f94f7dba>log</span>(<span class="string" data-v-f94f7dba>&quot;foo&quot;</span>)
                                },
                                <span class="function" data-v-f94f7dba>conflicting</span>() {
                                console.<span class="function" data-v-f94f7dba>log</span>(<span class="string" data-v-f94f7dba>&quot;from mixin&quot;</span>)
                                }
                            }
                        }

                        <span class="keyword" data-v-f94f7dba>const</span> app = Vue.<span class="function" data-v-f94f7dba>createApp</span>({
                            mixins: [myMixin],
                            methods: {
                                <span class="function" data-v-f94f7dba>bar</span>() {
                                console.<span class="function" data-v-f94f7dba>log</span>(<span class="string" data-v-f94f7dba>&quot;bar&quot;</span>)
                                },
                                <span class="function" data-v-f94f7dba>conflicting</span>() {
                                console.<span class="function" data-v-f94f7dba>log</span>(<span class="string" data-v-f94f7dba>&quot;from self&quot;</span>)
                                }
                            }
                        })

                        <span class="keyword" data-v-f94f7dba>const</span> vm = app.mount(<span class="string" data-v-f94f7dba>&quot;#mixins-basic&quot;</span>)

                        vm.<span class="function" data-v-f94f7dba>foo</span>() // =&gt; <span class="string" data-v-f94f7dba>&quot;foo&quot;</span>
                        vm.<span class="function" data-v-f94f7dba>bar</span>() // =&gt; <span class="string" data-v-f94f7dba>&quot;bar&quot;</span>
                        vm.<span class="function" data-v-f94f7dba>bconflictingar</span>() // =&gt; <span class="string" data-v-f94f7dba>&quot;from self&quot;</span>
                    </code>`,1),na=l(()=>n("p",null,[s("\u4E09\u3001\u5168\u5C40\u914D\u7F6EMixin(1)"),n("br"),s("\u4F60\u8FD8\u53EF\u4EE5\u4E3A Vue \u5E94\u7528\u7A0B\u5E8F\u5168\u5C40\u5E94\u7528 mixin")],-1)),sa=r(`<code class="code5" data-v-f94f7dba>
                        <span class="keyword" data-v-f94f7dba>const</span> app = Vue.<span class="function" data-v-f94f7dba>createApp</span>({
                            myOption: <span class="string" data-v-f94f7dba>&quot;hello!&quot;</span>
                        })

                        // \u4E3A\u81EA\u5B9A\u4E49\u7684\u9009\u9879 &#39;myOption&#39; \u6CE8\u5165\u4E00\u4E2A\u5904\u7406\u5668\u3002
                        app.<span class="function" data-v-f94f7dba>mixin</span>({
                            <span class="function" data-v-f94f7dba>created</span>() {
                                <span class="keyword" data-v-f94f7dba>const</span> myOption = <span class="keyword" data-v-f94f7dba>this</span>.$options.myOption
                                <span class="keyword" data-v-f94f7dba>coifnst</span> (myOption) {
                                console.<span class="function" data-v-f94f7dba>log</span>(myOption)
                                }
                            }
                        })

                        app.<span class="function" data-v-f94f7dba>mount</span>(<span class="string" data-v-f94f7dba>&quot;#mixins-global&quot;</span>) // =&gt; &quot;hello!&quot;
                        <span class="keyword" data-v-f94f7dba>import</span> { createApp } <span class="keyword" data-v-f94f7dba>form</span> <span class="string" data-v-f94f7dba>&quot;vue&quot;</span>
                        <span class="keyword" data-v-f94f7dba>import</span> App <span class="keyword" data-v-f94f7dba>form</span> <span class="string" data-v-f94f7dba>&quot;./App.vue&quot;</span>
                        <span class="keyword" data-v-f94f7dba>import</span> BaseMixin <span class="keyword" data-v-f94f7dba>form</span> <span class="string" data-v-f94f7dba>&quot;./mixin/base&quot;</span>

                        //\u539F\u6765\u7684\u4EE3\u7801
                        // createApp(App).mount(&#39;#app&#39;)

                        //\u4FEE\u6539\u540E\u7684\u4EE3\u7801
                        <span class="keyword" data-v-f94f7dba>const</span> app=<span class="function" data-v-f94f7dba>createApp</span>(App);

                        app.<span class="function" data-v-f94f7dba>mixin</span>(BaseMixin)

                        app.<span class="function" data-v-f94f7dba>mount</span>(&#39;#app&#39;);
                    </code>`,1),ta=l(()=>n("p",null,[s("\u4E09\u3001\u5168\u5C40\u914D\u7F6EMixin(2)"),n("br"),s("\u81EA\u52A8\u8BA1\u7B97el-table\u8868\u683C\u7684\u9AD8\u5EA6\u5B9E\u4F8B")],-1)),oa=l(()=>n("p",null,"\uFF081\uFF09\u5728utils\u4E0B\u65B0\u5EFAautoHeight.js\u6587\u4EF6",-1)),ea=r(`<code class="code6" data-v-f94f7dba>
                        <span class="keyword" data-v-f94f7dba>let</span> mixin = {
                            <span class="function" data-v-f94f7dba>data</span>() {
                                <span class="keyword" data-v-f94f7dba>return</span> {
                                    myTableHeight:0
                                }
                            },
                            <span class="function" data-v-f94f7dba>activated</span>() {
                                <span class="keyword" data-v-f94f7dba>if</span>(this.$refs.table) {
                                    this.<span class="function" data-v-f94f7dba>$nextTick</span>(() =&gt; {
                                        this.setH()
                                    })
                                }
                            },
                            watch:{
                                // \u8868\u5355\u7684\u663E\u793A\u9690\u85CF
                                <span class="function" data-v-f94f7dba>showSearch</span>(newVal,oldVal) {
                                    this.<span class="function" data-v-f94f7dba>$nextTick</span>(() =&gt; {
                                        this.setH()
                                    })
                                }
                            },
                            <span class="function" data-v-f94f7dba>mounted</span>() {
                            <span class="function" data-v-f94f7dba>window.addEventListener</span>(&#39;resize&#39;,() =&gt; {
                                this.<span class="function" data-v-f94f7dba>setH()</span>
                            })
                            <span class="keyword" data-v-f94f7dba>if</span>(this.$refs.table) {
                                setTimeout( <span class="function" data-v-f94f7dba>()</span> =&gt; {
                                    this.<span class="function" data-v-f94f7dba>setH()</span>
                                },500)
                            }
                            },
                            methods:{
                                // \u81EA\u52A8\u8BA1\u7B97\u8868\u683C\u9AD8\u5EA6
                                <span class="function" data-v-f94f7dba>setH()</span> {
                                    <span class="keyword" data-v-f94f7dba>let</span> height = document.body.clientHeight
                                    <span class="keyword" data-v-f94f7dba>if</span>(this.$refs.table &amp;&amp; this.$refs.table.$el) {
                                        this.myTableHeight = height - this.$refs.table.$el.<span class="function" data-v-f94f7dba>getBoundingClientRect()</span>.top - 42 -50
                                    }
                                }
                            }
                        }

                        <span class="keyword" data-v-f94f7dba>export default</span>  mixin
                    </code>`,1),la=l(()=>n("p",null,"\uFF082\uFF09\u5728main.js\u5BFC\u5165autoHeight.js",-1)),da=r(`<code class="code7" data-v-f94f7dba>
                        // \u5728\u5168\u5C40main.js\u5BFC\u5165
                        <span class="keyword" data-v-f94f7dba>import</span> mix <span class="keyword" data-v-f94f7dba>form</span> <span class="string" data-v-f94f7dba>&quot;./utils/autoHeight&quot;</span>
                        app.<span class="function" data-v-f94f7dba>mixin</span>(mix)
                    </code>`,1),fa=l(()=>n("p",null,"\uFF083\uFF09\u5728vue\u9875\u9762\u4F7F\u7528",-1)),pa=r(`<code class="code8" data-v-f94f7dba>
                        //  \u5728vue\u9875\u9762\u8C03\u7528
                        &lt;el-table <span class="keyword" data-v-f94f7dba>:data</span>=<span class="string" data-v-f94f7dba>&quot;tableData&quot;</span> <span class="keyword" data-v-f94f7dba>:height</span>t=<span class="string" data-v-f94f7dba>&quot;myTableHeight&quot;</span>&gt;
                            &lt;el-table-column prop=<span class="string" data-v-f94f7dba>&quot;date&quot;</span> label=<span class="string" data-v-f94f7dba>&quot;Date&quot;</span> width=<span class="string" data-v-f94f7dba>&quot;180&quot;</span> /&gt;
                            &lt;el-table-column prop=<span class="string" data-v-f94f7dba>&quot;name&quot;</span> label=<span class="string" data-v-f94f7dba>&quot;Name&quot;</span> width=<span class="string" data-v-f94f7dba>&quot;180&quot;</span> /&gt;
                            &lt;el-table-column prop=<span class="string" data-v-f94f7dba>&quot;address&quot;</span> label=<span class="string" data-v-f94f7dba>&quot;Address&quot;</span> /&gt;
                        &lt;/el-table&gt;
                    </code>`,1),ia=j({name:"Mixin"}),ca=Object.assign(ia,{setup(v){const b=o(!1),m=o(!1),g=o(!1),y=o(!1),q=o(!1),k=o(!1),w=o(!1),x=o(!1),C=o(!1),$=o(null),M=o(null),_=o(null),h=o(null),V=o(null),A=o(null),H=o(null),B=o(null),O=o(null);return(ua,a)=>{const d=S("el-button");return D(),N("div",z,[L,n("article",R,[F,G,n("div",{class:"contanier",onMouseover:a[1]||(a[1]=t=>b.value=!0),onMouseleave:a[2]||(a[2]=t=>b.value=!1)},[f(i(d,{icon:e(c),class:"copy",onClick:a[0]||(a[0]=t=>e(u)($.value))},null,8,["icon"]),[[p,b.value]]),n("pre",{class:"pre preClass",ref_key:"refClone",ref:$},[s("                    "),J,s(`
                `)],512)],32),K,n("div",{class:"contanier",onMouseover:a[4]||(a[4]=t=>m.value=!0),onMouseleave:a[5]||(a[5]=t=>m.value=!1)},[f(i(d,{icon:e(c),class:"copy",onClick:a[3]||(a[3]=t=>e(u)(M.value))},null,8,["icon"]),[[p,m.value]]),n("pre",{class:"pre preClass1",ref_key:"refClone1",ref:M},[s("                    "),P,s(`
                `)],512)],32),Q,U,n("div",{class:"contanier",onMouseover:a[7]||(a[7]=t=>g.value=!0),onMouseleave:a[8]||(a[8]=t=>g.value=!1)},[f(i(d,{icon:e(c),class:"copy",onClick:a[6]||(a[6]=t=>e(u)(_.value))},null,8,["icon"]),[[p,g.value]]),n("pre",{class:"pre preClass2",ref_key:"refClone2",ref:_},[s("                    "),W,s(`
                `)],512)],32),X,n("div",{class:"contanier",onMouseover:a[10]||(a[10]=t=>y.value=!0),onMouseleave:a[11]||(a[11]=t=>y.value=!1)},[f(i(d,{icon:e(c),class:"copy",onClick:a[9]||(a[9]=t=>e(u)(h.value))},null,8,["icon"]),[[p,y.value]]),n("pre",{class:"pre preClass3",ref_key:"refClone3",ref:h},[s("                    "),Y,s(`
                `)],512)],32),Z,n("div",{class:"contanier",onMouseover:a[13]||(a[13]=t=>q.value=!0),onMouseleave:a[14]||(a[14]=t=>q.value=!1)},[f(i(d,{icon:e(c),class:"copy",onClick:a[12]||(a[12]=t=>e(u)(V.value))},null,8,["icon"]),[[p,q.value]]),n("pre",{class:"pre preClass4",ref_key:"refClone4",ref:V},[s("                    "),aa,s(`
                `)],512)],32),na,n("div",{class:"contanier",onMouseover:a[16]||(a[16]=t=>k.value=!0),onMouseleave:a[17]||(a[17]=t=>k.value=!1)},[f(i(d,{icon:e(c),class:"copy",onClick:a[15]||(a[15]=t=>e(u)(A.value))},null,8,["icon"]),[[p,k.value]]),n("pre",{class:"pre preClass5",ref_key:"refClone5",ref:A},[s("                    "),sa,s(`
                `)],512)],32),ta,oa,n("div",{class:"contanier",onMouseover:a[19]||(a[19]=t=>w.value=!0),onMouseleave:a[20]||(a[20]=t=>w.value=!1)},[f(i(d,{icon:e(c),class:"copy",onClick:a[18]||(a[18]=t=>e(u)(H.value))},null,8,["icon"]),[[p,w.value]]),n("pre",{class:"pre preClass6",ref_key:"refClone6",ref:H},[s("                    "),ea,s(`
                `)],512)],32),la,n("div",{class:"contanier",onMouseover:a[22]||(a[22]=t=>x.value=!0),onMouseleave:a[23]||(a[23]=t=>x.value=!1)},[f(i(d,{icon:e(c),class:"copy",onClick:a[21]||(a[21]=t=>e(u)(B.value))},null,8,["icon"]),[[p,x.value]]),n("pre",{class:"pre preClass7",ref_key:"refClone7",ref:B},[s("                    "),da,s(`
                `)],512)],32),fa,n("div",{class:"contanier",onMouseover:a[25]||(a[25]=t=>C.value=!0),onMouseleave:a[26]||(a[26]=t=>C.value=!1)},[f(i(d,{icon:e(c),class:"copy",onClick:a[24]||(a[24]=t=>e(u)(O.value))},null,8,["icon"]),[[p,C.value]]),n("pre",{class:"pre preClass8",ref_key:"refClone8",ref:O},[s("                    "),pa,s(`
                `)],512)],32)])])}}}),ba=T(ca,[["__scopeId","data-v-f94f7dba"]]);export{ba as default};
