import{_ as O,d as I,r as l,a as V,o as B,c as N,b as e,w as i,v as c,e as u,u as t,f as a,h as v,p as D,i as T}from"./index.8dfa9547.js";import{c as p}from"./copy.38672ff4.js";const n=d=>(D("data-v-5d78ef3e"),d=d(),T(),d),E={class:"articleContanier"},A=n(()=>e("p",null,"\u4E00\u3001\u9879\u76EEsrc\u6587\u4EF6\u4E0B\uFF0C\u65B0\u5EFAstyles\u76EE\u5F55\uFF0C\u5F53\u7136\u4F4D\u7F6E\u81EA\u5DF1\u968F\u610F\u5B9A\uFF0C\u65B0\u5EFA\u4E86\u8FD9\u4E09\u4E2Ascss\u6587\u4EF6\uFF0C\u4E0B\u9762\u6211\u4EEC\u5BF9\u8FD9\u4E09\u4E2A\u6587\u4EF6\u8FDB\u884C\u4E00\u4E00\u89E3\u6790\u3002",-1)),F=n(()=>e("div",{class:"contanier"},[e("div",{class:"imgs"})],-1)),G=n(()=>e("p",null,"\u4E8C\u3001\u65B0\u5EFAconstant.scss\uFF1A\u7528\u4E8E\u653E\u7F6E\u9879\u76EE\u4E2D\u7684sass\u53D8\u91CF\uFF0C\u6BD4\u5982\u4E3B\u9898\u989C\u8272\uFF0C\u5927\u5B57\u4F53\u7684\u5B57\u53F7\uFF0C\u5C0F\u5B57\u4F53\u7684\u5B57\u53F7\u7B49\u7B49\uFF0C\u8FD9\u91CC\u53EA\u662F\u7528\u4E8E\u6D4B\u8BD5",-1)),H=n(()=>e("code",{class:"code"},`
                        $color-red: #ff0000;
                        $large-size: 40px;
                        $font-oblique: oblique;
                    `,-1)),J=n(()=>e("p",null,"\u4E09\u3001\u65B0\u5EFAindex.scss\uFF1A\u7528\u4E8E\u653E\u7F6E\u9879\u76EE\u4E2D\u81EA\u5DF1\u5C01\u88C5\u7684\u4E00\u4E9B\u5E38\u7528\u7684\u6837\u5F0F\uFF0Cclass\u7C7B\u540D\uFF0C\u6BD4\u5982flex\u5E03\u5C40\uFF0C\u5B9A\u4F4D\uFF0C\u5B57\u4F53\u7B49\u7B49\uFF0C\u8FD9\u4E2A\u53EA\u5199\u4E86\u4E00\u4E2A",-1)),K=n(()=>e("code",{class:"code1"},`
                        @import "./constant.scss";
  
                        .l-size {
                           font-size: $large-size;
                        }
                    `,-1)),L=n(()=>e("p",null,"\u56DB\u3001variables.module.scss\uFF1A\u7528\u4E8Escss\u53D8\u91CF\u7684\u5BFC\u51FA\uFF0C\u5927\u90E8\u5206\u7528\u4E8Evue\u6587\u4EF6\u4E2Djs\u4E2D\u4F7F\u7528",-1)),P=n(()=>e("code",{class:"code2"},`
                        @import "./constant.scss";
  
                        :export {
                            fontOblique: $font-oblique;
                        }
                    `,-1)),Q=n(()=>e("p",null,"\u4E94\u3001\u5C06\u6211\u4EEC\u5C01\u88C5\u7684\u516C\u5171\u7684css\u6837\u5F0F\u7C7B\u540D\u5BFC\u5165\u8FDBmain.js\u6587\u4EF6\u4E2D\uFF0C\u8FD9\u6837\u5728\u6240\u6709\u7684vue\u6587\u4EF6\u4E2D\uFF0C\u5C31\u53EF\u4EE5\u968F\u610F\u4F7F\u7528\u8FD9\u4E9B\u6837\u5F0F\u4E86",-1)),R=n(()=>e("div",{class:"contanier"},[e("div",{class:"imgs1"})],-1)),U=n(()=>e("p",null,"\u516D\u3001vite.config.js\u914D\u7F6E",-1)),W=n(()=>e("p",null,"1\u3001\u4E3B\u8981\u7528\u9014\u662F\u5C06\u6211\u4EEC\u7684constant.scss\u4E2D\u7684scss\u5E38\u91CF\u52A0\u8F7D\u5230\u5168\u5C40\uFF0C\u8FD9\u6837\u6211\u4EEC\u53EF\u4EE5\u5728style\u6807\u7B7E\u4E2D\uFF0C\u968F\u610F\u4F7F\u7528\u8FD9\u4E9Bscss\u5E38\u91CF",-1)),X=n(()=>e("code",{class:"code3"},`
                        import {defineConfig} from 'vite'
                        import vue from '@vitejs/plugin-vue'
                        import path from 'path';
                        
                        // https://vitejs.dev/config/
                        export default defineConfig({
                            plugins: [vue()],
                            resolve: {
                                // Vite\u8DEF\u5F84\u522B\u540D\u914D\u7F6E
                                alias: {
                                    '@': path.resolve('./src')
                                }
                            },
                            /*\u4E3B\u8981\u770B\u4E0B\u9762\u8FD9\u6BB5*/
                            css: {
                                preprocessorOptions: {
                                    scss: {
                                        additionalData: '@import "@/styles/constant.scss";'
                                    }
                                }
                            }
                        })
                    `,-1)),Y=n(()=>e("p",null,"\u4E03\u3001\u5728\u9875\u9762\u4E2D\u4F7F\u7528",-1)),Z=n(()=>e("code",{class:"code4"},`
                        <template>
                            <div class="l-size content">
                                123456
                            </div>
                        </template>
                        
                        <style lang="scss" scoped>
                            .content {
                                color: $color-red;
                            }
                        </style>
                    `,-1)),h=n(()=>e("div",{class:"imgs2"},null,-1)),ss=n(()=>e("p",null,"\u516B\u3001\u65B0\u5EFA\u6D4B\u8BD5\u6587\u4EF6Test.vue",-1)),es=n(()=>e("p",null,"1\u3001\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06 variables.module.scss\u4E2D\u7684\u53D8\u91CF\u5BFC\u5165\u5230\u5F53\u524D\u7684vue\u6587\u4EF6\u4E2D\u3002",-1)),ns=n(()=>e("code",{class:"code5"},`
                        <script setup>
                            import variables from "@/styles/variables.module.scss"
                            
                            console.log(variables)
                        <\/script>
                    `,-1)),os=n(()=>e("div",{class:"imgs3"},null,-1)),ls=n(()=>e("p",null,"2\u3001\u4E8E\u662F\u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u5199",-1)),ts=n(()=>e("code",{class:"code6"},`
                        <template>
                            <div class="l-size content" :style="{fontStyle:variables.fontOblique}">
                                123456
                            </div>
                        </template>
                        
                        <script setup>
                            import variables from "../styles/variables.module.scss"
                        
                            console.log(variables)
                        <\/script>
                        
                        <style lang="scss" scoped>
                            .content {
                                color: $color-red;
                            }
                        </style>
                    `,-1)),as=n(()=>e("p",null,"3\u3001\u6216\u8005\u5229\u7528computed",-1)),rs=n(()=>e("code",{class:"code7"},`
                        <template>
                            <div> class="l-size content" :style="getStyle">
                                123456
                            </div>
                        </template>
                        
                        <script setup lang="ts">
                            import {computed} from "vue"
                            import variables from "../styles/variables.module.scss"
                        
                            const getStyle = computed(() =>; ({fontStyle: variables.fontOblique}))
                        <\/script>
                        
                        <style lang="scss" scoped>
                            .content {
                                color: $color-red;
                            }
                        </style>
                    `,-1)),is=n(()=>e("div",{class:"imgs2"},null,-1)),cs=I({name:"Scss"}),us=Object.assign(cs,{setup(d){const f=l(!1),m=l(!1),y=l(!1),C=l(!1),_=l(!1),$=l(!1),g=l(!1),b=l(!1),k=l(null),M=l(null),w=l(null),x=l(null),S=l(null),z=l(null),j=l(null),q=l(null);return(vs,s)=>{const r=V("el-button");return B(),N("article",E,[A,F,G,e("div",{class:"contanier",onMouseover:s[1]||(s[1]=o=>f.value=!0),onMouseleave:s[2]||(s[2]=o=>f.value=!1)},[i(u(r,{icon:t(v),class:"copy copyClass",onClick:s[0]||(s[0]=o=>t(p)(k.value))},null,8,["icon"]),[[c,f.value]]),e("pre",{class:"pre preClass",ref_key:"refClone",ref:k},[a("                    "),H,a(`
                `)],512)],32),J,e("div",{class:"contanier",onMouseover:s[4]||(s[4]=o=>m.value=!0),onMouseleave:s[5]||(s[5]=o=>m.value=!1)},[i(u(r,{icon:t(v),class:"copy copyClass1",onClick:s[3]||(s[3]=o=>t(p)(M.value))},null,8,["icon"]),[[c,m.value]]),e("pre",{class:"pre preClass1",ref_key:"refClone1",ref:M},[a("                    "),K,a(`
                `)],512)],32),L,e("div",{class:"contanier",onMouseover:s[7]||(s[7]=o=>y.value=!0),onMouseleave:s[8]||(s[8]=o=>y.value=!1)},[i(u(r,{icon:t(v),class:"copy copyClass2",onClick:s[6]||(s[6]=o=>t(p)(w.value))},null,8,["icon"]),[[c,y.value]]),e("pre",{class:"pre preClass2",ref_key:"refClone2",ref:w},[a("                    "),P,a(`
                `)],512)],32),Q,R,U,W,e("div",{class:"contanier",onMouseover:s[10]||(s[10]=o=>C.value=!0),onMouseleave:s[11]||(s[11]=o=>C.value=!1)},[i(u(r,{icon:t(v),class:"copy copyClass3",onClick:s[9]||(s[9]=o=>t(p)(x.value))},null,8,["icon"]),[[c,C.value]]),e("pre",{class:"pre preClass3",ref_key:"refClone3",ref:x},[a("                    "),X,a(`
                `)],512)],32),Y,e("div",{class:"contanier",onMouseover:s[13]||(s[13]=o=>_.value=!0),onMouseleave:s[14]||(s[14]=o=>_.value=!1)},[i(u(r,{icon:t(v),class:"copy copyClass4",onClick:s[12]||(s[12]=o=>t(p)(S.value))},null,8,["icon"]),[[c,_.value]]),e("pre",{class:"pre preClass4",ref_key:"refClone4",ref:S},[a("                    "),Z,a(`
                `)],512),h],32),ss,es,e("div",{class:"contanier",onMouseover:s[16]||(s[16]=o=>$.value=!0),onMouseleave:s[17]||(s[17]=o=>$.value=!1)},[i(u(r,{icon:t(v),class:"copy copyClass5",onClick:s[15]||(s[15]=o=>t(p)(z.value))},null,8,["icon"]),[[c,$.value]]),e("pre",{class:"pre preClass5",ref_key:"refClone5",ref:z},[a("                    "),ns,a(`
                `)],512)],32),os,ls,e("div",{class:"contanier",onMouseover:s[19]||(s[19]=o=>g.value=!0),onMouseleave:s[20]||(s[20]=o=>g.value=!1)},[i(u(r,{icon:t(v),class:"copy copyClass6",onClick:s[18]||(s[18]=o=>t(p)(j.value))},null,8,["icon"]),[[c,g.value]]),e("pre",{class:"pre preClass6",ref_key:"refClone6",ref:j},[a("                    "),ts,a(`
                `)],512)],32),as,e("div",{class:"contanier",onMouseover:s[22]||(s[22]=o=>b.value=!0),onMouseleave:s[23]||(s[23]=o=>b.value=!1)},[i(u(r,{icon:t(v),class:"copy copyClass7",onClick:s[21]||(s[21]=o=>t(p)(q.value))},null,8,["icon"]),[[c,b.value]]),e("pre",{class:"pre preClass7",ref_key:"refClone7",ref:q},[a("                    "),rs,a(`
                `)],512)],32),is])}}}),fs=O(us,[["__scopeId","data-v-5d78ef3e"]]);export{fs as default};
