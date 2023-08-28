import{d as m,u as v,c as b,r as s,a as D,b as j,e as n,f as i,v as u,g as k,h as p,i as a,k as h,l as y}from"./index.988be59c.js";const _={id:"one"},C=n("h1",null,"new Date()",-1),S={class:"articleContanier"},N=n("p",null,"\u4E00\u3001\u8BBE\u7F6E\u5468\u4E0B\u62C9\u6846",-1),L=n("code",null,`
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
                    `,-1),M=n("p",null,"\u4E8C\u3001\u8BBE\u7F6E\u6708\u4E0B\u62C9\u6846",-1),O=n("code",null,`
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
                    `,-1),$=m({name:"WeekYear"}),V=Object.assign($,{setup(T){const w=v(),g=b(()=>w.bottomingOut),l=s(!1),r=s(!1),d=s(null),f=s(null);return(o,e)=>{const c=D("el-button");return h(),j("div",_,[C,n("article",S,[N,n("div",{class:"contanier",onMouseover:e[1]||(e[1]=t=>l.value=!0),onMouseleave:e[2]||(e[2]=t=>l.value=!1)},[i(k(c,{icon:p(y),class:"copy copyClass",onClick:e[0]||(e[0]=t=>o.copy(d.value))},null,8,["icon"]),[[u,l.value]]),n("pre",{class:"pre",ref_key:"refClone",ref:d},[a("                    "),L,a(`
                `)],512)],32),M,n("div",{class:"contanier",onMouseover:e[4]||(e[4]=t=>r.value=!0),onMouseleave:e[5]||(e[5]=t=>r.value=!1)},[i(k(c,{icon:p(y),class:"copy copyClass1",onClick:e[3]||(e[3]=t=>o.copy(f.value))},null,8,["icon"]),[[u,r.value]]),n("pre",{class:"pre",ref_key:"refClone1",ref:f},[a("                    "),O,a(`
                `)],512)],32)]),i(n("div",{href:"#one",class:"backToTop",onClick:e[6]||(e[6]=(...t)=>o.goTop&&o.goTop(...t))},"\u56DE\u5230\u9876\u90E8",512),[[u,p(g)]])])}}});export{V as default};
