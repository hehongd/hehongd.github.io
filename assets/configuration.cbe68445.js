import{_ as V,d as B,u as N,c as D,r as t,a as E,b as U,e as A,f as e,g as a,v as r,h as c,i as l,j as v,m as p,k as i,n as z,p as F,q as G}from"./index.e30a5f23.js";const o=d=>(F("data-v-5d4a3f0f"),d=d(),G(),d),H={id:"one"},J={class:"articleContanier"},K=o(()=>e("p",null,"\u4E00\u3001\u9879\u76EEsrc\u6587\u4EF6\u4E0B\uFF0C\u65B0\u5EFAstyles\u76EE\u5F55\uFF0C\u5F53\u7136\u4F4D\u7F6E\u81EA\u5DF1\u968F\u610F\u5B9A\uFF0C\u65B0\u5EFA\u4E86\u8FD9\u4E09\u4E2Ascss\u6587\u4EF6\uFF0C\u4E0B\u9762\u6211\u4EEC\u5BF9\u8FD9\u4E09\u4E2A\u6587\u4EF6\u8FDB\u884C\u4E00\u4E00\u89E3\u6790\u3002",-1)),L=o(()=>e("div",{class:"contanier"},[e("div",{class:"imgs"})],-1)),P=o(()=>e("p",null,"\u4E8C\u3001\u65B0\u5EFAconstant.scss\uFF1A\u7528\u4E8E\u653E\u7F6E\u9879\u76EE\u4E2D\u7684sass\u53D8\u91CF\uFF0C\u6BD4\u5982\u4E3B\u9898\u989C\u8272\uFF0C\u5927\u5B57\u4F53\u7684\u5B57\u53F7\uFF0C\u5C0F\u5B57\u4F53\u7684\u5B57\u53F7\u7B49\u7B49\uFF0C\u8FD9\u91CC\u53EA\u662F\u7528\u4E8E\u6D4B\u8BD5",-1)),Q=o(()=>e("code",null,`
                        $color-red: #ff0000;
                        $large-size: 40px;
                        $font-oblique: oblique;
                    `,-1)),R=o(()=>e("p",null,"\u4E09\u3001\u65B0\u5EFAindex.scss\uFF1A\u7528\u4E8E\u653E\u7F6E\u9879\u76EE\u4E2D\u81EA\u5DF1\u5C01\u88C5\u7684\u4E00\u4E9B\u5E38\u7528\u7684\u6837\u5F0F\uFF0Cclass\u7C7B\u540D\uFF0C\u6BD4\u5982flex\u5E03\u5C40\uFF0C\u5B9A\u4F4D\uFF0C\u5B57\u4F53\u7B49\u7B49\uFF0C\u8FD9\u4E2A\u53EA\u5199\u4E86\u4E00\u4E2A",-1)),W=o(()=>e("code",{class:"code1"},`
                        @import "./constant.scss";

                        .l-size {
                        font-size: $large-size;
                        }
                    `,-1)),X=o(()=>e("p",null,"\u56DB\u3001variables.module.scss\uFF1A\u7528\u4E8Escss\u53D8\u91CF\u7684\u5BFC\u51FA\uFF0C\u5927\u90E8\u5206\u7528\u4E8Evue\u6587\u4EF6\u4E2Djs\u4E2D\u4F7F\u7528",-1)),Y=o(()=>e("pre",{class:"pre"},[i("                    "),e("code",{class:"code2"},`
                        @import "./constant.scss";

                        :export {
                            fontOblique: $font-oblique;
                        }
                    `),i(`
                `)],-1)),Z=o(()=>e("p",null,"\u4E94\u3001\u5C06\u6211\u4EEC\u5C01\u88C5\u7684\u516C\u5171\u7684css\u6837\u5F0F\u7C7B\u540D\u5BFC\u5165\u8FDBmain.js\u6587\u4EF6\u4E2D\uFF0C\u8FD9\u6837\u5728\u6240\u6709\u7684vue\u6587\u4EF6\u4E2D\uFF0C\u5C31\u53EF\u4EE5\u968F\u610F\u4F7F\u7528\u8FD9\u4E9B\u6837\u5F0F\u4E86",-1)),h=o(()=>e("div",{class:"contanier"},[e("div",{class:"imgs1"})],-1)),ss=o(()=>e("p",null,"\u516D\u3001vite.config.js\u914D\u7F6E",-1)),es=o(()=>e("p",null,"1\u3001\u4E3B\u8981\u7528\u9014\u662F\u5C06\u6211\u4EEC\u7684constant.scss\u4E2D\u7684scss\u5E38\u91CF\u52A0\u8F7D\u5230\u5168\u5C40\uFF0C\u8FD9\u6837\u6211\u4EEC\u53EF\u4EE5\u5728style\u6807\u7B7E\u4E2D\uFF0C\u968F\u610F\u4F7F\u7528\u8FD9\u4E9Bscss\u5E38\u91CF",-1)),ns=o(()=>e("code",null,`
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
                    `,-1)),os=o(()=>e("p",null,"\u4E03\u3001\u5728\u9875\u9762\u4E2D\u4F7F\u7528",-1)),ls=o(()=>e("code",null,`
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
                    `,-1)),ts=o(()=>e("div",{class:"imgs2"},null,-1)),is=o(()=>e("p",null,"\u516B\u3001\u65B0\u5EFA\u6D4B\u8BD5\u6587\u4EF6Test.vue",-1)),as=o(()=>e("p",null,"1\u3001\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06 variables.module.scss\u4E2D\u7684\u53D8\u91CF\u5BFC\u5165\u5230\u5F53\u524D\u7684vue\u6587\u4EF6\u4E2D\u3002",-1)),rs=o(()=>e("code",null,`
                        <script setup>
                            import variables from "@/styles/variables.module.scss"
                            
                            console.log(variables)
                        <\/script>
                    `,-1)),us=o(()=>e("div",{class:"imgs3"},null,-1)),cs=o(()=>e("p",null,"2\u3001\u4E8E\u662F\u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u5199",-1)),vs=o(()=>e("code",null,`
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
                    `,-1)),ps=o(()=>e("p",null,"3\u3001\u6216\u8005\u5229\u7528computed",-1)),ds=o(()=>e("code",null,`
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
                    `,-1)),fs=o(()=>e("div",{class:"imgs2"},null,-1)),ms=B({name:"Scss"}),ys=Object.assign(ms,{setup(d){const O=N(),T=D(()=>O.bottomingOut),f=t(!1),m=t(!1),y=t(!1),_=t(!1),C=t(!1),$=t(!1),g=t(!1),b=t(!1),k=t(null),M=t(null),I=t(null),w=t(null),x=t(null),S=t(null),j=t(null),q=t(null);return(_s,s)=>{const u=E("el-button");return U(),A("div",H,[e("article",J,[K,L,P,e("div",{class:"contanier",onMouseover:s[1]||(s[1]=n=>f.value=!0),onMouseleave:s[2]||(s[2]=n=>f.value=!1)},[a(c(u,{icon:l(v),class:"copy copyClass",onClick:s[0]||(s[0]=n=>l(p)(k.value))},null,8,["icon"]),[[r,f.value]]),e("pre",{class:"pre",ref_key:"refClone",ref:k},[i("                    "),Q,i(`
                `)],512)],32),R,e("div",{class:"contanier",onMouseover:s[4]||(s[4]=n=>m.value=!0),onMouseleave:s[5]||(s[5]=n=>m.value=!1)},[a(c(u,{icon:l(v),class:"copy copyClass1",onClick:s[3]||(s[3]=n=>l(p)(M.value))},null,8,["icon"]),[[r,m.value]]),e("pre",{class:"pre",ref_key:"refClone1",ref:M},[i("                    "),W,i(`
                `)],512)],32),X,e("div",{class:"contanier",onMouseover:s[7]||(s[7]=n=>y.value=!0),onMouseleave:s[8]||(s[8]=n=>y.value=!1)},[a(c(u,{icon:l(v),class:"copy copyClass2",onClick:s[6]||(s[6]=n=>l(p)(I.value))},null,8,["icon"]),[[r,y.value]]),Y],32),Z,h,ss,es,e("div",{class:"contanier",onMouseover:s[10]||(s[10]=n=>_.value=!0),onMouseleave:s[11]||(s[11]=n=>_.value=!1)},[a(c(u,{icon:l(v),class:"copy copyClass3",onClick:s[9]||(s[9]=n=>l(p)(w.value))},null,8,["icon"]),[[r,_.value]]),e("pre",{class:"pre",ref_key:"refClone3",ref:w},[i("                    "),ns,i(`
                `)],512)],32),os,e("div",{class:"contanier",onMouseover:s[13]||(s[13]=n=>C.value=!0),onMouseleave:s[14]||(s[14]=n=>C.value=!1)},[a(c(u,{icon:l(v),class:"copy copyClass4",onClick:s[12]||(s[12]=n=>l(p)(x.value))},null,8,["icon"]),[[r,C.value]]),e("pre",{class:"pre",ref_key:"refClone4",ref:x},[i("                    "),ls,i(`
                `)],512),ts],32),is,as,e("div",{class:"contanier",onMouseover:s[16]||(s[16]=n=>$.value=!0),onMouseleave:s[17]||(s[17]=n=>$.value=!1)},[a(c(u,{icon:l(v),class:"copy copyClass5",onClick:s[15]||(s[15]=n=>l(p)(S.value))},null,8,["icon"]),[[r,$.value]]),e("pre",{class:"pre",ref_key:"refClone5",ref:S},[i("                    "),rs,i(`
                `)],512)],32),us,cs,e("div",{class:"contanier",onMouseover:s[19]||(s[19]=n=>g.value=!0),onMouseleave:s[20]||(s[20]=n=>g.value=!1)},[a(c(u,{icon:l(v),class:"copy copyClass6",onClick:s[18]||(s[18]=n=>l(p)(j.value))},null,8,["icon"]),[[r,g.value]]),e("pre",{class:"pre",ref_key:"refClone6",ref:j},[i("                    "),vs,i(`
                `)],512)],32),ps,e("div",{class:"contanier",onMouseover:s[22]||(s[22]=n=>b.value=!0),onMouseleave:s[23]||(s[23]=n=>b.value=!1)},[a(c(u,{icon:l(v),class:"copy copyClass7",onClick:s[21]||(s[21]=n=>l(p)(q.value))},null,8,["icon"]),[[r,b.value]]),e("pre",{class:"pre",ref_key:"refClone7",ref:q},[i("                    "),ds,i(`
                `)],512)],32),fs]),a(e("div",{href:"#one",class:"backToTop",onClick:s[24]||(s[24]=(...n)=>l(z)&&l(z)(...n))},"\u56DE\u5230\u9876\u90E8",512),[[r,l(T)]])])}}}),$s=V(ys,[["__scopeId","data-v-5d4a3f0f"]]);export{$s as default};
