import{_,u as m,r,s as f,b as v,t as h,a as w,w as c,o as x,c as b,x as g,y,z as k}from"./index.01d2ba27.js";import{i as z}from"./index.cb7315ae.js";const C={__name:"index",setup(V){const s=m(),{proxy:n}=g(),t=r(null),a=r(null),u=f({option:{tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:40,fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]}}),d=()=>{t.value=y(z(a.value)),t.value.setOption(u.option)},o=()=>{var e;a.value&&((e=t.value)==null||e.resize())};v(()=>{d(),window.addEventListener("resize",o)});const l=()=>{k(()=>{n.$erd.listenTo(a.value,e=>{o()})})};h(()=>{n.$erd.uninstall(a.value)});const p=w(()=>s.isCollapse);return c(p,(e,i)=>{l()}),c(()=>s.isNotice,(e,i)=>{l()}),(e,i)=>(x(),b("div",{id:"pie",ref_key:"chartRef",ref:a},null,512))}},B=_(C,[["__scopeId","data-v-9af65b92"]]);export{B as default};