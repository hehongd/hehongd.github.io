import{i as r}from"./index.294642b6.js";import{_,r as n,s as c,o as l,b as u,t as d,k as p}from"./index.f2f6e407.js";const v={__name:"index",setup(f){const e=n(null),t=n(null),s=c({option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",smooth:!0}]}}),o=()=>{e.value=d(r(t.value)),e.value.setOption(s.option)},i=()=>{var a;t.value&&((a=e.value)==null||a.resize())};return l(()=>{o(),window.addEventListener("resize",i)}),(a,m)=>(p(),u("div",{id:"line",ref_key:"chartRef",ref:t},null,512))}},h=_(v,[["__scopeId","data-v-499b2b9a"]]);export{h as default};
