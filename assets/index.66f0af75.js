import{_ as i,b as s,e as d,l as m}from"./index.9267fcd0.js";const c={id:"one"},n=m('<h2 data-v-193744b7>\u4F7F\u7528\u65B0\u7684 CSS sin() \u548C cos() \u4E09\u89D2\u51FD\u6570\u521B\u5EFA\u65F6\u949F</h2><div style="padding:10px;box-sizing:border-box;" data-v-193744b7>\u6765\u6E90\u5730\u5740\uFF1Ahttps://css-tricks.com/creating-a-clock-with-the-new-css-sin-and-cos-trigonometry-functions/</div><div class="clock" data-v-193744b7><div class="clock-face" id="app" data-v-193744b7><time datetime="12:00" data-v-193744b7>12</time><time datetime="1:00" data-v-193744b7>1</time><time datetime="2:00" data-v-193744b7>2</time><time datetime="3:00" data-v-193744b7>3</time><time datetime="4:00" data-v-193744b7>4</time><time datetime="5:00" data-v-193744b7>5</time><time datetime="6:00" data-v-193744b7>6</time><time datetime="7:00" data-v-193744b7>7</time><time datetime="8:00" data-v-193744b7>8</time><time datetime="9:00" data-v-193744b7>9</time><time datetime="10:00" data-v-193744b7>10</time><time datetime="11:00" data-v-193744b7>11</time><span class="arm seconds" data-v-193744b7></span><span class="arm minutes" data-v-193744b7></span><span class="arm hours" data-v-193744b7></span></div></div>',3),o=[n],_={__name:"index",setup(v){const t=new Date,a=-3600*(t.getHours()%12),e=-60*t.getMinutes();return app.style.setProperty("--_dm",`${e}s`),app.style.setProperty("--_dh",`${a+e}s`),(p,r)=>(s(),d("div",c,o))}},l=i(_,[["__scopeId","data-v-193744b7"]]);export{l as default};