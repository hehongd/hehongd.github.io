import{_ as C,k as v,b as w,D as S,a as x,x as j,y as m,g as r,e as o,h as c,p as M,q as G,J as U,K as H,L as V,r as _,w as K,o as b,M as D,H as T,t as F,N as $,G as k,C as Y,F as X,E as J,i as R,s as Z}from"./index.fc083d38.js";import{i as A}from"./index.311fffa3.js";import{b as Q,d as L}from"./echarts.77693137.js";let B=0;const q="webkit moz ms o".split(" ");let g,y;const ee=typeof window>"u";if(ee)g=function(){},y=function(){};else{g=window.requestAnimationFrame,y=window.cancelAnimationFrame;let e;for(let t=0;t<q.length&&!(g&&y);t++)e=q[t],g=g||window[e+"RequestAnimationFrame"],y=y||window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"];(!g||!y)&&(g=function(t){const a=new Date().getTime(),n=Math.max(0,16-(a-B)),l=window.setTimeout(()=>{t(a+n)},n);return B=a+n,l},y=function(t){window.clearTimeout(t)})}const te={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator(e){return e>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default(e,t,a,n){return a*(-Math.pow(2,-10*e/n)+1)*1024/1023+t}}},data(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown(){return this.startVal>this.endVal}},watch:{startVal(){this.autoplay&&this.start()},endVal(){this.autoplay&&this.start()}},mounted(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=g(this.count)},pauseResume(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause(){y(this.rAF)},resume(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,g(this.count)},reset(){this.startTime=null,y(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count(e){this.startTime||(this.startTime=e),this.timestamp=e;const t=e-this.startTime;this.remaining=this.localDuration-t,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(t,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(t,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(t/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(t/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),t<this.localDuration?this.rAF=g(this.count):this.$emit("callback")},isNumber(e){return!isNaN(parseFloat(e))},formatNumber(e){e=e.toFixed(this.decimals),e+="";const t=e.split(".");let a=t[0];const n=t.length>1?this.decimal+t[1]:"",l=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;l.test(a);)a=a.replace(l,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed(){y(this.rAF)}};function ae(e,t,a,n,l,s){return v(),w("span",null,S(l.displayValue),1)}const z=C(te,[["render",ae]]);function se(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),a.push.apply(a,n)}return a}z.unmounted=z.destroyed,Reflect.deleteProperty(z,"destroyed");var O=function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?I(Object(a),!0).forEach(function(n){se(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}({name:"CountTo",emits:["callback","mountedCallback"]},z);const N=e=>(M("data-v-a52c20ea"),e=e(),G(),e),ne={class:"card-panel-icon-wrapper icon-people"},ie={class:"card-panel-description"},le=N(()=>o("div",{class:"card-panel-text"}," \u8BBF\u5BA2 ",-1)),re={class:"card-panel-icon-wrapper icon-message"},oe={class:"card-panel-description"},ce=N(()=>o("div",{class:"card-panel-text"}," \u6D88\u606F ",-1)),de={class:"card-panel-icon-wrapper icon-money"},ue={class:"card-panel-description"},pe=N(()=>o("div",{class:"card-panel-text"}," \u91D1\u989D ",-1)),he={class:"card-panel-icon-wrapper icon-shopping"},me={class:"card-panel-description"},fe=N(()=>o("div",{class:"card-panel-text"}," \u8BA2\u5355 ",-1)),_e={__name:"PanelGroup",emits:["handleSetLineChartData"],setup(e,{emit:t}){const a=n=>{t("handleSetLineChartData",n)};return(n,l)=>{const s=x("svg-icon"),i=x("el-col"),u=x("el-row");return v(),j(u,{gutter:40,class:"panel-group"},{default:m(()=>[r(i,{xs:12,sm:12,lg:6,class:"card-panel-col"},{default:m(()=>[o("div",{class:"card-panel",onClick:l[0]||(l[0]=d=>a("newVisitis"))},[o("div",ne,[r(s,{"icon-class":"peoples","class-name":"card-panel-icon"})]),o("div",ie,[le,r(c(O),{startVal:0,endVal:102400,duration:2600,class:"card-panel-num"})])])]),_:1}),r(i,{xs:12,sm:12,lg:6,class:"card-panel-col"},{default:m(()=>[o("div",{class:"card-panel",onClick:l[1]||(l[1]=d=>a("messages"))},[o("div",re,[r(s,{"icon-class":"message","class-name":"card-panel-icon"})]),o("div",oe,[ce,r(c(O),{startVal:0,endVal:81212,duration:3e3,class:"card-panel-num"})])])]),_:1}),r(i,{xs:12,sm:12,lg:6,class:"card-panel-col"},{default:m(()=>[o("div",{class:"card-panel",onClick:l[2]||(l[2]=d=>a("purchases"))},[o("div",de,[r(s,{"icon-class":"money","class-name":"card-panel-icon"})]),o("div",ue,[pe,r(c(O),{startVal:0,endVal:9280,duration:3200,class:"card-panel-num"})])])]),_:1}),r(i,{xs:12,sm:12,lg:6,class:"card-panel-col"},{default:m(()=>[o("div",{class:"card-panel",onClick:l[3]||(l[3]=d=>a("shoppings"))},[o("div",he,[r(s,{"icon-class":"shopping","class-name":"card-panel-icon"})]),o("div",me,[fe,r(c(O),{startVal:0,endVal:13600,duration:13600,class:"card-panel-num"})])])]),_:1})]),_:1})}}},ve=C(_e,[["__scopeId","data-v-a52c20ea"]]);var ge={};const ye=U(Q);(function(e){(function(t,a){typeof e.nodeName!="string"?a(e,ye):a({},t.echarts)})(H,function(t,a){var n=function(i){typeof console<"u"&&console&&console.error&&console.error(i)};if(!a){n("ECharts is not Loaded");return}var l=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],s={color:l,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{borderColor:l[0]}},tooltip:{borderWidth:0,backgroundColor:"rgba(50,50,50,0.5)",textStyle:{color:"#FFF"},axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{color:"#008acd",borderColor:"#008acd"},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{color:"#d87a80",color0:"#2ec7c9"},lineStyle:{width:1,color:"#d87a80",color0:"#2ec7c9"},areaStyle:{color:"#2ec7c9",color0:"#b6a2de"}},scatter:{symbol:"circle",symbolSize:4},map:{itemStyle:{color:"#ddd"},areaStyle:{color:"#fe994e"},label:{color:"#d87a80"}},graph:{itemStyle:{color:"#d87a80"},linkStyle:{color:"#2ec7c9"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};a.registerTheme("macarons",s)})})(ge);const we={__name:"LineChart",props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},setup(e){const t=e,{className:a,width:n,height:l,autoResize:s,chartData:i}=V(t),u=_(null),d=_(null);K(i,(h,E)=>{f(h.actualData,h.expectedData)},{deep:!0}),b(()=>{D(()=>{f(i.value.actualData,i.value.expectedData)}),window.addEventListener("resize",p)}),T(()=>{window.removeEventListener("resize",p),u.value&&(u.value.dispose(),u.value=null)});const p=L(()=>{var h;d.value&&((h=u.value)==null||h.resize())},200),f=(h,E)=>{u.value=F(A(d.value)),u.value.setOption({xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:["expected","actual"]},series:[{name:"expected",itemStyle:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}},smooth:!0,type:"line",data:h,animationDuration:2800,animationEasing:"cubicInOut"},{name:"actual",smooth:!0,type:"line",itemStyle:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}},data:E,animationDuration:2800,animationEasing:"quadraticOut"}]})};return(h,E)=>(v(),w("div",{class:$(c(a)),style:k({height:c(l),width:c(n)}),ref_key:"chartRef",ref:d},null,6))}},xe=3e3,be={__name:"RaddarChart",props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,{className:a,width:n,height:l}=V(t),s=_(null),i=_(null);b(()=>{D(()=>{d()}),window.addEventListener("resize",u)}),T(()=>{window.removeEventListener("resize",u),s.value&&(s.value.dispose(),s.value=null)});const u=L(()=>{var p;console.log(i.value),i.value&&((p=s.value)==null||p.resize())},200),d=()=>{s.value=F(A(i.value)),s.value.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},radar:{radius:"66%",center:["50%","42%"],splitNumber:8,splitArea:{areaStyle:{color:"rgba(127,95,132,.3)",opacity:1,shadowBlur:45,shadowColor:"rgba(0,0,0,.5)",shadowOffsetX:0,shadowOffsetY:15}},indicator:[{name:"Sales"},{name:"Administration"},{name:"Information Techology"},{name:"Customer Support"},{name:"Development"},{name:"Marketing"}]},legend:{left:"center",bottom:"10",data:["Allocated Budget","Expected Spending","Actual Spending"]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:13,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[5e3,7e3,12e3,11e3,15e3,14e3],name:"Allocated Budget"},{value:[4e3,9e3,15e3,15e3,13e3,11e3],name:"Expected Spending"},{value:[5500,11e3,12e3,15e3,12e3,12e3],name:"Actual Spending"}],animationDuration:xe}]})};return(p,f)=>(v(),w("div",{class:$(c(a)),style:k({height:c(l),width:c(n)}),ref_key:"chartRef",ref:i},null,6))}},Se={__name:"PieChart",props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,{className:a,width:n,height:l}=V(t),s=_(null),i=_(null);b(()=>{D(()=>{d()}),window.addEventListener("resize",u)}),T(()=>{window.removeEventListener("resize",u),s.value&&(s.value.dispose(),s.value=null)});const u=L(()=>{var p;console.log(i.value),i.value&&((p=s.value)==null||p.resize())},200),d=()=>{s.value=F(A(i.value)),s.value.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:["Industries","Technology","Forex","Gold","Forecasts"]},series:[{name:"WEEKLY WRITE ARTICLES",type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:[{value:320,name:"Industries"},{value:240,name:"Technology"},{value:149,name:"Forex"},{value:100,name:"Gold"},{value:59,name:"Forecasts"}],animationEasing:"cubicInOut",animationDuration:2600}]})};return(p,f)=>(v(),w("div",{class:$(c(a)),style:k({height:c(l),width:c(n)}),ref_key:"chartRef",ref:i},null,6))}},P=6e3,Ve={__name:"BarChart",props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,{className:a,width:n,height:l}=V(t),s=_(null),i=_(null);b(()=>{D(()=>{d()}),window.addEventListener("resize",u)}),T(()=>{window.removeEventListener("resize",u),s.value&&(s.value.dispose(),s.value=null)});const u=L(()=>{var p;console.log(i.value),i.value&&((p=s.value)==null||p.resize())},200),d=()=>{s.value=F(A(i.value)),s.value.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"pageA",type:"bar",stack:"vistors",barWidth:"60%",data:[79,52,200,334,390,330,220],animationDuration:P},{name:"pageB",type:"bar",stack:"vistors",barWidth:"60%",data:[80,52,200,334,390,330,220],animationDuration:P},{name:"pageC",type:"bar",stack:"vistors",barWidth:"60%",data:[30,52,200,334,390,330,220],animationDuration:P}]})};return(p,f)=>(v(),w("div",{class:$(c(a)),style:k({height:c(l),width:c(n)}),ref_key:"chartRef",ref:i},null,6))}};const De={class:"base-box-container",ref:"baseBoxRef"},Ce={class:"base-box-header"},Te={class:"base-box-content"},Fe={__name:"index",props:{title:{type:String,default:""}},setup(e){return(t,a)=>(v(),w("div",De,[o("div",Ce,S(e.title),1),o("div",Te,[Y(t.$slots,"default",{},void 0,!0)])],512))}},W=C(Fe,[["__scopeId","data-v-1e17472c"]]),$e={__name:"BaseChart",props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,{className:a,width:n,height:l}=V(t),s=_(null),i=_(null);b(()=>{D(()=>{d()}),window.addEventListener("resize",u)}),T(()=>{window.removeEventListener("resize",u),s.value&&(s.value.dispose(),s.value=null)});const u=L(()=>{var p;console.log(i.value),i.value&&((p=s.value)==null||p.resize())},200),d=()=>{s.value=F(A(i.value)),s.value.setOption({xAxis:{axisTick:{show:!1},axisLine:{lineStyle:{color:"rgb(160, 150, 167)"}},type:"category",data:[...new Array(12)].map((p,f)=>`${f+1}\u6708`)},yAxis:{type:"value"},series:[{barWidth:25,itemStyle:{color:"#409eff"},data:[60,75,55,40,100,140,160,120,140,85,95,75],type:"bar"}]})};return(p,f)=>(v(),w("div",{class:$(c(a)),style:k({height:c(l),width:c(n)}),ref_key:"chartRef",ref:i},null,6))}};const ke={class:"flex-auto ml20"},Ae={class:"flex-row-center justify-between"},Le={class:"dynamic-item-time"},Oe={class:"mt10 dynamic-item-content"},ze={class:"dynamic-item-value"},Ne={__name:"TrueDynamic",setup(e){const t=_([{name:"\u4E0A\u6D77\u6D66\u4E1C\u5206\u5E97",imgUrl:"\u6D66\u4E1C",value:"2000",time:"\u521A\u521A"},{name:"\u4E0A\u6D77\u5F90\u6C47\u5206\u5E97",imgUrl:"\u5F90\u6C47",value:"8888",time:"3\u5206\u949F\u524D"},{name:"\u4E0A\u6D77\u677E\u6C5F\u5206\u5E97",imgUrl:"\u677E\u6C5F",value:"6688",time:"5\u5206\u949F\u524D"},{name:"\u4E0A\u6D77\u5B9D\u5C71\u5206\u5E97",imgUrl:"\u5B9D\u5C71",value:"1314",time:"10\u5206\u949F\u524D"},{name:"\u4E0A\u6D77\u6768\u6D66\u5206\u5E97",imgUrl:"\u6768\u6D66",value:"666",time:"12\u5206\u949F\u524D"}]),a=_(""),n=_(null);b(()=>{D(()=>{window.clearInterval(a.value),l()})});const l=u=>{let d=null;d=n.value.wrapRef,u?window.clearInterval(a.value):a.value=window.setInterval(()=>{d.scrollTop+=1,d.clientHeight+d.scrollTop+5==d.scrollHeight&&(d.scrollTop=0)},30)},s=()=>{l(!0)},i=()=>{l()};return(u,d)=>{const p=x("el-avatar"),f=x("el-scrollbar");return v(),j(f,{ref_key:"conterRef",ref:n,onMouseenter:s,onMouseleave:i},{default:m(()=>[(v(!0),w(X,null,J(t.value,h=>(v(),w("div",{key:h.name,class:"dynamic-item flex-row-center"},[r(p,{size:42},{default:m(()=>[R(S(h.imgUrl),1)]),_:2},1024),o("div",ke,[o("div",Ae,[o("span",null,S(h.name),1),o("span",Le,S(h.time),1)]),o("div",Oe,[R(" \u606D\u559C\u6210\u529F\u5356\u51FA"),o("span",ze,S(h.value),1),R("\u5143\u5546\u54C1 ")])])]))),128))]),_:1},512)}}},Ee=C(Ne,[["__scopeId","data-v-2419f1b1"]]);const Re={class:"dashboard-editor-container"},Pe={class:"chart-wrapper"},Be={class:"chart-wrapper"},qe={class:"chart-wrapper"},Ie={class:"chart-wrapper"},We={class:"chart-wrapper"},je={__name:"index",setup(e){const t=Z({newVisitis:{expectedData:[100,120,161,134,105,160,165],actualData:[120,82,91,154,162,140,145]},messages:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130]},purchases:{expectedData:[80,100,121,104,105,90,100],actualData:[120,90,100,138,142,130,130]},shoppings:{expectedData:[130,140,141,142,145,150,160],actualData:[120,82,91,154,162,140,130]},lineChartData:{}}),{newVisitis:a,messages:n,purchases:l,shoppings:s,lineChartData:i}=V(t);b(()=>{i.value=a.value});const u=d=>{i.value=t[d]};return(d,p)=>{const f=x("el-row"),h=x("el-col");return v(),w("div",Re,[r(c(ve),{onHandleSetLineChartData:u}),r(f,{style:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},{default:m(()=>[r(c(we),{"chart-data":c(i)},null,8,["chart-data"])]),_:1}),r(f,{gutter:32},{default:m(()=>[r(h,{xs:24,sm:24,lg:12},{default:m(()=>[o("div",Pe,[r(c(W),{title:"\u8425\u4E1A\u989D\u5EA6\u7EDF\u8BA1\u56FE"},{default:m(()=>[r(c($e))]),_:1})])]),_:1}),r(h,{xs:24,sm:24,lg:12},{default:m(()=>[o("div",Be,[r(c(W),{title:"\u5B9E\u65F6\u52A8\u6001"},{default:m(()=>[r(c(Ee))]),_:1})])]),_:1})]),_:1}),r(f,{gutter:32},{default:m(()=>[r(h,{xs:24,sm:24,lg:8},{default:m(()=>[o("div",qe,[r(c(be))])]),_:1}),r(h,{xs:24,sm:24,lg:8},{default:m(()=>[o("div",Ie,[r(c(Se))])]),_:1}),r(h,{xs:24,sm:24,lg:8},{default:m(()=>[o("div",We,[r(c(Ve))])]),_:1})]),_:1})])}}},He=C(je,[["__scopeId","data-v-8891be92"]]);export{He as default};