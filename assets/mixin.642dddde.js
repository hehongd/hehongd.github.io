import{d as j,u as D,c as N,r as e,o as _,w as S,a as E,b as z,e as s,f as l,v as p,g as u,h as i,i as a,j as d,k as L,l as r}from"./index.988be59c.js";const R={id:"one"},U=s("h1",null,"Vue3.x\u4E2D\u7684Mixin\u5B9E\u73B0\u7EC4\u4EF6\u529F\u80FD\u7684\u590D\u7528 \u3001\u5168\u5C40\u914D\u7F6EMixin",-1),F={class:"articleContanier"},G=s("p",null,"\u4E00\u3001Vue3.x\u4E2D\u7684mixin\u4ECB\u7ECD\u4F7F\u7528\u6DF7\u5165 (mixin) \u63D0\u4F9B\u4E86\u4E00\u79CD\u975E\u5E38\u7075\u6D3B\u7684\u65B9\u5F0F\uFF0C\u6765\u5206\u53D1 Vue \u7EC4\u4EF6\u4E2D\u7684\u53EF\u590D\u7528\u529F\u80FD\u3002\u4E00\u4E2A\u6DF7\u5165\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u7EC4\u4EF6\u9009\u9879\u3002\u5F53\u7EC4\u4EF6\u4F7F\u7528\u6DF7\u5165\u5BF9\u8C61\u65F6\uFF0C\u6240\u6709\u6DF7\u5165\u5BF9\u8C61\u7684\u9009\u9879\u5C06\u88AB\u201C\u6DF7\u5408\u201D\u8FDB\u5165\u8BE5\u7EC4\u4EF6\u672C\u8EAB\u7684\u9009\u9879\u3002",-1),I=s("p",null,"1\u3001\u65B0\u5EFAmixin/base.js",-1),J=d(`<code>
                        <span class="keyword">const</span> baseMixin = {
                            <span class="function">data</span>() {
                                <span class="keyword">return</span>{
                                        apiDomain: <span class="string">&quot;http://www.xxxx.com&quot;</span>
                                }
                            },
                            methods: {
                                <span class="function">success</span>() {
                                    console.<span class="function">log</span>(&quot;succss&quot;)
                                },
                                <span class="function">error</span>() {
                                    console.<span class="function">error</span>(&quot;error&quot;)
                                }
                            }
                        }

                        <span class="keyword">export default</span> baseMixin;
                    </code>`,1),K=s("p",null,"2\u3001\u4F7F\u7528mixin",-1),P=d(`<code>
                        &lt;<span class="tag">template</span>&gt;
                        &lt;<span class="tag">div</span>&gt;
                            \u9996\u9875\u6A21\u677F--{{apiDomain}}
                        &lt;<span class="tag">/div</span>&gt;
                        &lt;<span class="tag">/template</span>&gt;

                        &lt;<span class="tag">script</span>&gt;                
                        import BaseMixin from &quot;../mixin/base&quot;
                        export default {
                            mixins: [BaseMixin],
                            data() {
                                return {

                                }
                            }
                        }
                        &lt;<span class="tag">/script</span>&gt; 
                    </code>`,1),Q=s("p",null,[a("\u4E8C\u3001\u5173\u4E8EMixin\u7684\u9009\u9879\u5408\u5E76"),s("br"),a("\u5F53\u7EC4\u4EF6\u548C\u6DF7\u5165\u5BF9\u8C61\u542B\u6709\u540C\u540D\u9009\u9879\u65F6\uFF0C\u8FD9\u4E9B\u9009\u9879\u5C06\u4EE5\u6070\u5F53\u7684\u65B9\u5F0F\u8FDB\u884C\u201C\u5408\u5E76\u201D\u3002")],-1),W=s("p",null,"1\u3001\u6BD4\u5982\uFF0C\u6570\u636E\u5BF9\u8C61\u5728\u5185\u90E8\u4F1A\u8FDB\u884C\u9012\u5F52\u5408\u5E76\uFF0C\u5E76\u5728\u53D1\u751F\u51B2\u7A81\u65F6\u4EE5\u7EC4\u4EF6\u6570\u636E\u4F18\u5148\u3002",-1),X=d(`<code>
                       <span class="keyword">const</span> myMixin = {
                            <span class="keyword">data</span>() {
                                <span class="keyword">return</span> {
                                message: <span class="string">&quot;hello&quot;</span>,
                                foo: <span class="string">&quot;abc&quot;</span>
                                }
                            }
                        }

                        <span class="keyword">const</span> app = Vue.createApp({
                            mixins: [myMixin],
                            <span class="keyword">data</span>() {
                                <span class="keyword">return</span> {
                                    message: <span class="string">&quot;goodbye&quot;</span>,
                                    bar: <span class="string">&quot;def&quot;</span>
                                }
                            },
                            <span class="function">created</span>() {
                                console.<span class="function">log</span>(<span class="keyword">this</span>.$<span class="keyword">data</span>) // =&gt; { message: &quot;goodbye&quot;, foo: &quot;abc&quot;, bar: &quot;def&quot; }
                            }
                        })
                    </code>`,1),Y=s("p",null,"2\u3001\u540C\u540D\u94A9\u5B50\u51FD\u6570\u5C06\u5408\u5E76\u4E3A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u56E0\u6B64\u90FD\u5C06\u88AB\u8C03\u7528\u3002\u53E6\u5916\uFF0C\u6DF7\u5165\u5BF9\u8C61\u7684\u94A9\u5B50\u5C06\u5728\u7EC4\u4EF6\u81EA\u8EAB\u94A9\u5B50\u4E4B\u524D\u8C03\u7528\u3002",-1),Z=d(`<code>
                        <span class="keyword">const</span> myMixin = {
                            <span class="function">created</span>() {
                                console.<span class="function">log</span>(<span class="string">&quot;mixin hook called&quot;</span>)
                            }
                        }

                        <span class="keyword">const</span> app = Vue.createApp({
                            mixins: [myMixin],
                            <span class="function">created</span>() {
                                console.<span class="function">log</span>(<span class="string">&quot;component hook called&quot;</span>)
                            }
                        })
                    </code>`,1),nn=s("p",null,[a('// => "\u6DF7\u5165\u5BF9\u8C61\u7684\u94A9\u5B50\u88AB\u8C03\u7528"'),s("br"),a('// => "\u7EC4\u4EF6\u94A9\u5B50\u88AB\u8C03\u7528"'),s("br"),a("3\u3001\u503C\u4E3A\u5BF9\u8C61\u7684\u9009\u9879\uFF0C\u4F8B\u5982 methods\u3001components\uFF0C\u5C06\u88AB\u5408\u5E76\u4E3A\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002\u4E24\u4E2A\u5BF9\u8C61\u952E\u540D\u51B2\u7A81\u65F6\uFF0C\u53D6\u7EC4\u4EF6\u5BF9\u8C61\u7684\u952E\u503C\u5BF9\u3002")],-1),sn=d(`<code>
                        <span class="keyword">const</span> myMixin = {
                            methods: {
                                <span class="function">foo</span>() {
                                console.<span class="function">log</span>(<span class="string">&quot;foo&quot;</span>)
                                },
                                <span class="function">conflicting</span>() {
                                console.<span class="function">log</span>(<span class="string">&quot;from mixin&quot;</span>)
                                }
                            }
                        }

                        <span class="keyword">const</span> app = Vue.<span class="function">createApp</span>({
                            mixins: [myMixin],
                            methods: {
                                <span class="function">bar</span>() {
                                console.<span class="function">log</span>(<span class="string">&quot;bar&quot;</span>)
                                },
                                <span class="function">conflicting</span>() {
                                console.<span class="function">log</span>(<span class="string">&quot;from self&quot;</span>)
                                }
                            }
                        })

                        <span class="keyword">const</span> vm = app.mount(<span class="string">&quot;#mixins-basic&quot;</span>)

                        vm.<span class="function">foo</span>() // =&gt; <span class="string">&quot;foo&quot;</span>
                        vm.<span class="function">bar</span>() // =&gt; <span class="string">&quot;bar&quot;</span>
                        vm.<span class="function">bconflictingar</span>() // =&gt; <span class="string">&quot;from self&quot;</span>
                    </code>`,1),an=s("p",null,[a("\u4E09\u3001\u5168\u5C40\u914D\u7F6EMixin(1)"),s("br"),a("\u4F60\u8FD8\u53EF\u4EE5\u4E3A Vue \u5E94\u7528\u7A0B\u5E8F\u5168\u5C40\u5E94\u7528 mixin")],-1),on=d(`<code>
                        <span class="keyword">const</span> app = Vue.<span class="function">createApp</span>({
                            myOption: <span class="string">&quot;hello!&quot;</span>
                        })

                        // \u4E3A\u81EA\u5B9A\u4E49\u7684\u9009\u9879 &#39;myOption&#39; \u6CE8\u5165\u4E00\u4E2A\u5904\u7406\u5668\u3002
                        app.<span class="function">mixin</span>({
                            <span class="function">created</span>() {
                                <span class="keyword">const</span> myOption = <span class="keyword">this</span>.$options.myOption
                                <span class="keyword">coifnst</span> (myOption) {
                                console.<span class="function">log</span>(myOption)
                                }
                            }
                        })

                        app.<span class="function">mount</span>(<span class="string">&quot;#mixins-global&quot;</span>) // =&gt; &quot;hello!&quot;
                        <span class="keyword">import</span> { createApp } <span class="keyword">form</span> <span class="string">&quot;vue&quot;</span>
                        <span class="keyword">import</span> App <span class="keyword">form</span> <span class="string">&quot;./App.vue&quot;</span>
                        <span class="keyword">import</span> BaseMixin <span class="keyword">form</span> <span class="string">&quot;./mixin/base&quot;</span>

                        //\u539F\u6765\u7684\u4EE3\u7801
                        // createApp(App).mount(&#39;#app&#39;)

                        //\u4FEE\u6539\u540E\u7684\u4EE3\u7801
                        <span class="keyword">const</span> app=<span class="function">createApp</span>(App);

                        app.<span class="function">mixin</span>(BaseMixin)

                        app.<span class="function">mount</span>(&#39;#app&#39;);
                    </code>`,1),en=s("p",null,[a("\u4E09\u3001\u5168\u5C40\u914D\u7F6EMixin(2)"),s("br"),a("\u81EA\u52A8\u8BA1\u7B97el-table\u8868\u683C\u7684\u9AD8\u5EA6\u5B9E\u4F8B")],-1),tn=s("p",null,"\uFF081\uFF09\u5728utils\u4E0B\u65B0\u5EFAautoHeight.js\u6587\u4EF6",-1),ln=d(`<code>
                        <span class="keyword">let</span> mixin = {
                            <span class="function">data</span>() {
                                <span class="keyword">return</span> {
                                    myTableHeight:0
                                }
                            },
                            <span class="function">activated</span>() {
                                <span class="keyword">if</span>(this.$refs.table) {
                                    this.<span class="function">$nextTick</span>(() =&gt; {
                                        this.setH()
                                    })
                                }
                            },
                            watch:{
                                // \u8868\u5355\u7684\u663E\u793A\u9690\u85CF
                                <span class="function">showSearch</span>(newVal,oldVal) {
                                    this.<span class="function">$nextTick</span>(() =&gt; {
                                        this.setH()
                                    })
                                }
                            },
                            <span class="function">mounted</span>() {
                            <span class="function">window.addEventListener</span>(&#39;resize&#39;,() =&gt; {
                                this.<span class="function">setH()</span>
                            })
                            <span class="keyword">if</span>(this.$refs.table) {
                                setTimeout( <span class="function">()</span> =&gt; {
                                    this.<span class="function">setH()</span>
                                },500)
                            }
                            },
                            methods:{
                                // \u81EA\u52A8\u8BA1\u7B97\u8868\u683C\u9AD8\u5EA6
                                <span class="function">setH()</span> {
                                    <span class="keyword">let</span> height = document.body.clientHeight
                                    <span class="keyword">if</span>(this.$refs.table &amp;&amp; this.$refs.table.$el) {
                                        this.myTableHeight = height - this.$refs.table.$el.<span class="function">getBoundingClientRect()</span>.top - 42 -50
                                    }
                                }
                            }
                        }

                        <span class="keyword">export default</span>  mixin
                    </code>`,1),pn=s("p",null,"\uFF082\uFF09\u5728main.js\u5BFC\u5165autoHeight.js",-1),cn=s("code",null,[a(`
                        // \u5728\u5168\u5C40main.js\u5BFC\u5165
                        `),s("span",{class:"keyword"},"import"),a(" mix "),s("span",{class:"keyword"},"form"),a(),s("span",{class:"string"},'"./utils/autoHeight"'),a(`
                        app.`),s("span",{class:"function"},"mixin"),a(`(mix)
                    `)],-1),un=s("p",null,"\uFF083\uFF09\u5728vue\u9875\u9762\u4F7F\u7528",-1),rn=d(`<code>
                        //  \u5728vue\u9875\u9762\u8C03\u7528
                        &lt;el-table <span class="keyword">:data</span>=<span class="string">&quot;tableData&quot;</span> <span class="keyword">:height</span>t=<span class="string">&quot;myTableHeight&quot;</span>&gt;
                            &lt;el-table-column prop=<span class="string">&quot;date&quot;</span> label=<span class="string">&quot;Date&quot;</span> width=<span class="string">&quot;180&quot;</span> /&gt;
                            &lt;el-table-column prop=<span class="string">&quot;name&quot;</span> label=<span class="string">&quot;Name&quot;</span> width=<span class="string">&quot;180&quot;</span> /&gt;
                            &lt;el-table-column prop=<span class="string">&quot;address&quot;</span> label=<span class="string">&quot;Address&quot;</span> /&gt;
                        &lt;/el-table&gt;
                    </code>`,1),dn=j({name:"Mixin"}),mn=Object.assign(dn,{setup(fn){const x=D(),$=N(()=>x.bottomingOut),f=e(!1),v=e(!1),m=e(!1),g=e(!1),y=e(!1),q=e(!1),k=e(!1),w=e(!1),b=e(!1),M=e(null),C=e(null),h=e(null),V=e(null),A=e(null),H=e(null),T=e(null),O=e(null),B=e(null);return _(()=>{console.log(x.bottomingOut)}),S($,(t,n)=>{console.log("count changed from",n,"to",t)}),(t,n)=>{const c=E("el-button");return L(),z("div",R,[U,s("article",F,[G,I,s("div",{class:"contanier",onMouseover:n[1]||(n[1]=o=>f.value=!0),onMouseleave:n[2]||(n[2]=o=>f.value=!1)},[l(u(c,{icon:i(r),class:"copy",onClick:n[0]||(n[0]=o=>t.copy(M.value))},null,8,["icon"]),[[p,f.value]]),s("pre",{class:"pre",ref_key:"refClone",ref:M},[a("                    "),J,a(`
                `)],512)],32),K,s("div",{class:"contanier",onMouseover:n[4]||(n[4]=o=>v.value=!0),onMouseleave:n[5]||(n[5]=o=>v.value=!1)},[l(u(c,{icon:i(r),class:"copy",onClick:n[3]||(n[3]=o=>t.copy(C.value))},null,8,["icon"]),[[p,v.value]]),s("pre",{class:"pre",ref_key:"refClone1",ref:C},[a("                    "),P,a(`
                `)],512)],32),Q,W,s("div",{class:"contanier",onMouseover:n[7]||(n[7]=o=>m.value=!0),onMouseleave:n[8]||(n[8]=o=>m.value=!1)},[l(u(c,{icon:i(r),class:"copy",onClick:n[6]||(n[6]=o=>t.copy(h.value))},null,8,["icon"]),[[p,m.value]]),s("pre",{class:"pre",ref_key:"refClone2",ref:h},[a("                    "),X,a(`
                `)],512)],32),Y,s("div",{class:"contanier",onMouseover:n[10]||(n[10]=o=>g.value=!0),onMouseleave:n[11]||(n[11]=o=>g.value=!1)},[l(u(c,{icon:i(r),class:"copy",onClick:n[9]||(n[9]=o=>t.copy(V.value))},null,8,["icon"]),[[p,g.value]]),s("pre",{class:"pre",ref_key:"refClone3",ref:V},[a("                    "),Z,a(`
                `)],512)],32),nn,s("div",{class:"contanier",onMouseover:n[13]||(n[13]=o=>y.value=!0),onMouseleave:n[14]||(n[14]=o=>y.value=!1)},[l(u(c,{icon:i(r),class:"copy",onClick:n[12]||(n[12]=o=>t.copy(A.value))},null,8,["icon"]),[[p,y.value]]),s("pre",{class:"pre",ref_key:"refClone4",ref:A},[a("                    "),sn,a(`
                `)],512)],32),an,s("div",{class:"contanier",onMouseover:n[16]||(n[16]=o=>q.value=!0),onMouseleave:n[17]||(n[17]=o=>q.value=!1)},[l(u(c,{icon:i(r),class:"copy",onClick:n[15]||(n[15]=o=>t.copy(H.value))},null,8,["icon"]),[[p,q.value]]),s("pre",{class:"pre",ref_key:"refClone5",ref:H},[a("                    "),on,a(`
                `)],512)],32),en,tn,s("div",{class:"contanier",onMouseover:n[19]||(n[19]=o=>k.value=!0),onMouseleave:n[20]||(n[20]=o=>k.value=!1)},[l(u(c,{icon:i(r),class:"copy",onClick:n[18]||(n[18]=o=>t.copy(T.value))},null,8,["icon"]),[[p,k.value]]),s("pre",{class:"pre",ref_key:"refClone6",ref:T},[a("                    "),ln,a(`
                `)],512)],32),pn,s("div",{class:"contanier",onMouseover:n[22]||(n[22]=o=>w.value=!0),onMouseleave:n[23]||(n[23]=o=>w.value=!1)},[l(u(c,{icon:i(r),class:"copy",onClick:n[21]||(n[21]=o=>t.copy(O.value))},null,8,["icon"]),[[p,w.value]]),s("pre",{class:"pre",ref_key:"refClone7",ref:O},[a("                    "),cn,a(`
                `)],512)],32),un,s("div",{class:"contanier",onMouseover:n[25]||(n[25]=o=>b.value=!0),onMouseleave:n[26]||(n[26]=o=>b.value=!1)},[l(u(c,{icon:i(r),class:"copy",onClick:n[24]||(n[24]=o=>t.copy(B.value))},null,8,["icon"]),[[p,b.value]]),s("pre",{class:"pre",ref_key:"refClone8",ref:B},[a("                    "),rn,a(`
                `)],512)],32)]),l(s("div",{href:"#one",class:"backToTop",onClick:n[27]||(n[27]=(...o)=>t.goTop&&t.goTop(...o))},"\u56DE\u5230\u9876\u90E8",512),[[p,i($)]])])}}});export{mn as default};
