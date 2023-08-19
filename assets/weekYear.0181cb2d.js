import{_ as v,d as m,r as a,a as D,o as g,c as b,b as n,w as f,v as w,e as y,u as l,f as r,h as k,p as h,i as j}from"./index.8dfa9547.js";import{c as _}from"./copy.38672ff4.js";const o=s=>(h("data-v-17af73a7"),s=s(),j(),s),C=o(()=>n("h1",null,"new Date()",-1)),S={class:"articleContanier"},N=o(()=>n("p",null,"\u4E00\u3001\u8BBE\u7F6E\u5468\u4E0B\u62C9\u6846",-1)),x=o(()=>n("code",{class:"code"},`
                        // \u8BBE\u7F6E\u5468\u4E0B\u62C9\u6846\uFF0C\u4F20\u5165\u5E74\u4EFD\u7C7B\u578B\u5982\uFF1A'2023'
                        function setWeekOption(year) {
                            let dates = getDay(year || new Date().getFullYear())
                            let weeks = {}
                            for(let i=0;i<dates.length;i++) {
                                let weeksLen = Object.keys(weeks).length
                                let splitDay = dates[i].split('_')
                                if(weeks[weeksLen] === undefined) {
                                    weeks[weeksLen + 1] = [splitDay[0]]
                                } else {
                                    if( splitDay[1] == '1' ) {
                                        weeks[weeksLen + 1] = [splitDay[0]]
                                    } else {
                                        weeks[weeksLen].push(splitDay[0])
                                    }
                                }
                            }
                            let weeksKeyLen = Object.keys(weeks).length
                            let option = []
                            for(let i=1;i<weeksKeyLen + 1;i++) {
                                console.log(weeks[i])
                                let obj = {}
                                obj.year = year
                                obj.week = '\u7B2C' + i + '\u5468'
                                obj.start = weeks[i][0]
                                obj.end = weeks[i][weeks[i].length-1]
                                obj.text = '\u7B2C' + i + '\u5468' + '('+ weeks[i][0] + '-' + weeks[i][weeks[i].length-1] + ')'
                                option.push(obj)
                            }
                            return option
                        }

                         //  \u64CD\u4F5C\u4E00\u5E74\u7684\u6570\u636E
                        function getDay(year) {
                            let dates = []
                            for( let i=1;i<=12;i++ ) {
                                for( let j=1;j<=new Date(year,i,0).getDate();j++ ) { // \u6BCF\u4E2A\u6708\u7684\u6570\u636E
                                    dates.push( formatNumber(i) + '/' + formatNumber(j) + '_' + new Date([year,formatNumber(i),formatNumber(j)].join('-')).getDay())
                                }
                            }
                            return dates
                        }
                        function formatNumber(n) {
                            return n.toString().length>1? n : n.toString().padStart(2,0)
                        }
                    `,-1)),L=o(()=>n("p",null,"\u4E8C\u3001\u8BBE\u7F6E\u6708\u4E0B\u62C9\u6846",-1)),M=o(()=>n("code",{class:"code1"},`
                        // \u83B7\u53D6\u6307\u5B9A\u4E00\u5E74\u6708\u4EFD\u65E5\u671F\uFF0C\u4F20\u5165\u5E74\u4EFD\u5B57\u7B26\u4E32\u5217\u5982\uFF1A'2023'
                        function getMonthDay(year) {
                            let option = []
                            for(let i=1;i<=12;i++) {
                                let month = i.toString().padStart(2,0)
                                let endDate = new Date(year,i,0).getDate().toString().padStart(2,0)
                                let obj = {
                                    year:year,
                                    month:month,
                                    startDate:1,
                                    endDate:endDate,
                                    text:'\u7B2C'+ month + '\u6708' + '(' + '1' + '-' + endDate + ')'
                                }
                                option.push(obj)
                            }
                            return option
                        }
                        console.log(getMonthDay(2023))
                    `,-1)),$=m({name:"WeekYear"}),I=Object.assign($,{setup(s){const i=a(!1),p=a(!1),u=a(null),c=a(null);return(O,e)=>{const d=D("el-button");return g(),b("div",null,[C,n("article",S,[N,n("div",{class:"contanier",onMouseover:e[1]||(e[1]=t=>i.value=!0),onMouseleave:e[2]||(e[2]=t=>i.value=!1)},[f(y(d,{icon:l(k),class:"copy copyClass",onClick:e[0]||(e[0]=t=>l(_)(u.value))},null,8,["icon"]),[[w,i.value]]),n("pre",{class:"pre preClass",ref_key:"refClone",ref:u},[r("                    "),x,r(`
                `)],512)],32),L,n("div",{class:"contanier",onMouseover:e[4]||(e[4]=t=>p.value=!0),onMouseleave:e[5]||(e[5]=t=>p.value=!1)},[f(y(d,{icon:l(k),class:"copy copyClass1",onClick:e[3]||(e[3]=t=>l(_)(c.value))},null,8,["icon"]),[[w,p.value]]),n("pre",{class:"pre preClass1",ref_key:"refClone1",ref:c},[r("                    "),M,r(`
                `)],512)],32)])])}}}),V=v(I,[["__scopeId","data-v-17af73a7"]]);export{V as default};
