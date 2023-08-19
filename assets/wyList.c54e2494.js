import{_ as w,d as g,r as a,a as D,o as h,c as C,b as t,w as _,v,e as f,u as o,f as l,h as y,p as M,i as x}from"./index.8dfa9547.js";import{c as m}from"./copy.38672ff4.js";const r=s=>(M("data-v-8147df4d"),s=s(),x(),s),Y={class:"articleContanier"},k=r(()=>t("p",null,"\u4E00.\u83B7\u53D6\u4E00\u5468\u6216\u4E00\u6708\u6570\u636E",-1)),$=r(()=>t("code",{class:"code"},`
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
                `,-1)),B=r(()=>t("p",null,"\u4E8C.\u83B7\u53D6\u5F00\u59CB\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4\u4E4B\u5185\u7684\u6240\u6709\u6708\u4EFD",-1)),F=r(()=>t("code",{class:"code1"},`
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
                `,-1)),b=g({name:"WyList"}),I=Object.assign(b,{setup(s){const c=a(!1),d=a(!1),u=a(null),i=a(null);return(S,e)=>{const p=D("el-button");return h(),C("article",Y,[k,t("div",{class:"contaniers",onMouseover:e[1]||(e[1]=n=>c.value=!0),onMouseleave:e[2]||(e[2]=n=>c.value=!1)},[_(f(p,{icon:o(y),class:"copy copyClass",onClick:e[0]||(e[0]=n=>o(m)(u.value))},null,8,["icon"]),[[v,c.value]]),t("pre",{class:"pre preClass",ref_key:"refClone",ref:u},[l("                "),$,l(`
            `)],512)],32),B,t("div",{class:"contaniers",onMouseover:e[4]||(e[4]=n=>d.value=!0),onMouseleave:e[5]||(e[5]=n=>d.value=!1)},[_(f(p,{icon:o(y),class:"copy copyClass1",onClick:e[3]||(e[3]=n=>o(m)(i.value))},null,8,["icon"]),[[v,d.value]]),t("pre",{class:"pre preClass1",ref_key:"refClone1",ref:i},[l("                "),F,l(`
            `)],512)],32)])}}}),T=w(I,[["__scopeId","data-v-8147df4d"]]);export{T as default};
