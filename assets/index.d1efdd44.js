import{i as l}from"./index.cb7315ae.js";import{_ as r,r as n,s as c,o as d,b as _,t as p,k as u}from"./index.d61d09d6.js";const f={__name:"index",setup(m){const e=n(null),a=n(null),s=c({option:{tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:40,fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]}}),o=()=>{e.value=p(l(a.value)),e.value.setOption(s.option)},i=()=>{var t;a.value&&((t=e.value)==null||t.resize())};return d(()=>{o(),window.addEventListener("resize",i)}),(t,v)=>(u(),_("div",{id:"pie",ref_key:"chartRef",ref:a},null,512))}},x=r(f,[["__scopeId","data-v-f18f116d"]]);export{x as default};
