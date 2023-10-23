import{d as D,u as w,a as _,r as s,e as h,o as C,c as M,f as t,g as u,v as i,h as f,i as d,j as m,k as a}from"./index.01d2ba27.js";const k={id:"one"},T={class:"articleContanier"},Y=t("p",null,"\u4E00.\u83B7\u53D6\u4E00\u5468\u6216\u4E00\u6708\u6570\u636E",-1),b=t("code",null,`
                        // getDays(7) \u83B7\u53D6\u4E00\u5468\u6570\u636E
                        // getDays(30) \u83B7\u53D6\u4E00\u6708\u6570\u636E
                        getDays(day) {// \u83B7\u53D6\u5929\u6570
                            let arr = [];
                            for (let i = -day; i < 0; i++) { // \u5FAA\u73AF\u6DFB\u52A0\u5929\u6570
                                let today = new Date();// \u83B7\u53D6\u4ECA\u5929
                                let targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * i;
                                today.setTime(targetday_milliseconds); //\u8BBE\u7F6Ei\u5929\u524D\u7684\u65F6\u95F4
                                let tYear = today.getFullYear();
                                let tMonth = today.getMonth();
                                let tDate = today.getDate();
                                let date = [tYear, tMonth + 1, tDate];
                                arr.push(date);
                            }
                            return arr
                        },
                    `,-1),$=t("p",null,"\u4E8C.\u83B7\u53D6\u5F00\u59CB\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4\u4E4B\u5185\u7684\u6240\u6709\u6708\u4EFD",-1),B=t("code",null,`
                        // getMonthBetween('2025-01-01','2025-05-01')
                        getMonthBetween(start, end) {  // \u83B7\u53D6\u5F00\u59CB\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4\u4E4B\u5185\u7684\u6240\u6709\u6708\u4EFD
                            let selectDate = [];
                            let s = start.split("-");  // \u5B57\u7B26\u4E32\u88C5\u6362\u6570\u7EC4
                            let e = end.split("-");
                            let date = new Date();
                            let min = date.setFullYear(s[0], s[1] - 1); // \u8BBE\u7F6E\u6700\u5C0F\u65F6\u95F4
                            let max = date.setFullYear(e[0], e[1] - 1); // \u8BBE\u7F6E\u6700\u5927\u65F6\u95F4
                            let curr = min;
                            while (curr <= max) {  // \u5FAA\u73AF\u6DFB\u52A0\u6708\u4EFD
                                var month = new Date(curr).getMonth();
                                var arr = [new Date(curr).getFullYear(), month + 1];
                                selectDate.push(arr);
                                curr = new Date(new Date(curr).getFullYear(), month + 1)
                            }
                            return selectDate
                        },
                    `,-1),F=D({name:"WyList"}),V=Object.assign(F,{setup(N){const y=w(),g=_(()=>y.bottomingOut),l=s(!1),r=s(!1),c=s(null),p=s(null);return(o,e)=>{const v=h("el-button");return C(),M("div",k,[t("article",T,[Y,t("div",{class:"contanier",onMouseover:e[1]||(e[1]=n=>l.value=!0),onMouseleave:e[2]||(e[2]=n=>l.value=!1)},[u(f(v,{icon:d(m),class:"copy",onClick:e[0]||(e[0]=n=>o.copy(c.value))},null,8,["icon"]),[[i,l.value]]),t("pre",{class:"pre",ref_key:"refClone",ref:c},[a("                    "),b,a(`
                `)],512)],32),$,t("div",{class:"contanier",onMouseover:e[4]||(e[4]=n=>r.value=!0),onMouseleave:e[5]||(e[5]=n=>r.value=!1)},[u(f(v,{icon:d(m),class:"copy",onClick:e[3]||(e[3]=n=>o.copy(p.value))},null,8,["icon"]),[[i,r.value]]),t("pre",{class:"pre",ref_key:"refClone1",ref:p},[a("                    "),B,a(`
                `)],512)],32)]),u(t("div",{href:"#one",class:"backToTop",onClick:e[6]||(e[6]=(...n)=>o.goTop&&o.goTop(...n))},"\u56DE\u5230\u9876\u90E8",512),[[i,d(g)]])])}}});export{V as default};
