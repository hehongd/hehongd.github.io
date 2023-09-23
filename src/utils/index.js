
//全屏
export const signOut = () =>{
  let ele = document.documentElement;
  if (ele.requestFullscreen) {
      ele.requestFullscreen();
      } else if (ele.mozRequestFullScreen) {
          ele.mozRequestFullScreen();
      } else if (ele.webkitRequestFullscreen) {
          ele.webkitRequestFullscreen();
      } else if (ele.msRequestFullscreen) {
          ele.msRequestFullscreen();
  }
}
//退出全屏
export const exitFullscreen = () => {
  if(document.exitFullScreen) {
      document.exitFullScreen();
  } else if(document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
  } else if(document.msExitFullscreen) {
      document.msExitFullscreen();
  }
}

 // 时钟函数
export const getCanvas = (lg,ls) => {
  let clock = document.getElementById('clock');  
  clock.style.backgroundColor = "#FFFFFF";//添加背景色  
  let graph = null;  
  //1.绘制外圆  
  let outside_circle_r = 100;/*外圆半径*/  
  let inside_circle_r = 90;/*内圆半径*/  
  let small_circle_r = 40;/*最小圆半径*/  
  if (clock.getContext) {  
      drawClock();  
      // dateText(1001);  
      setInterval(drawClock, 1000);//每秒调用一次  
  }  
  function drawClock() {  
      //6.时针、分针和秒针：  
      //为了实现在当前时刻时针指向正确数字的功能实现，  
      //必须把时间和时针转过的角度之间建立一个关系，  
      //还要确定每根针的长度。以时钟圆心作为原点实现。  
      //首先获得时间，并在角度和时间之间建立数学关系  
      let hourLength = 36;//小时长度  
      let minuteLength = 52;//分钟长度  
      let secondLength = 62;//秒钟长度  
      let date = new Date();  
      let hour = date.getHours();  
      let minutes = date.getMinutes();  
      let seconds = date.getSeconds();  
      if (hour > 12) {  
          hour -= 12;  
      }  
      //弧度=角度*Math.PI/180  
      let hourAngle = (hour * 30 - 90) * Math.PI / 180;  
      let minutesAngle = (minutes * 6 - 90) * Math.PI / 180;  
      let secondsAngle = (seconds * 6 - 90) * Math.PI / 180;  
      graph = clock.getContext("2d");//选择2d画布  
      /*先清除整个图*/  
      graph.clearRect(0, 0, clock.width, clock.height);  
      graph.strokeStyle = "black";  
      graph.save();  
      graph.beginPath();//路径开始  
      graph.strokeStyle = '#1E90FF';//笔触的颜色  
      graph.moveTo(200, 100);//移动到位置 x轴600,y轴300的点开始绘制  
      graph.arc(100, 100, outside_circle_r, 0, 2 * Math.PI, false);//绘制圆,False = 顺时针，true = 逆时针  
      // 2.绘制内圆  
      graph.moveTo(190, 100);//移动到位置 x轴590,y轴300的点开始绘制  
      graph.arc(100, 100, inside_circle_r, 0, 2 * Math.PI, false);//绘制圆,False = 顺时针，true = 逆时针  
      //绘制内小圆  
      graph.moveTo(140, 100);  
      graph.arc(100, 100, small_circle_r, 0, 2 * Math.PI, false);  
      // graph.fillStyle="#0000ff";  
      // graph.fill();  
      graph.stroke();  
      //3.绘制刻度  
      // 小时刻度和分钟刻度长度不一样，但坐标计算方法是一样的，  
      // 封装函数drawHourAndMinuteLine计算过程，  
      // 然后针对小时刻度和分钟刻度用对应传参调用了两次。  
      //画三个指针的交接处   
      graph.beginPath();  
      graph.strokeStyle = "#ff0000";  
      graph.moveTo(105, 100);  
      for (let i = 0; i <= 5;) {//填充圆里面的颜色  
          graph.arc(100, 100, i, 0, 2 * Math.PI, false);  
          i += 0.5;  
      }  
      graph.stroke();  
      //画小时刻度  
      let hour_len = 12;//刻度长度  
      let hourAngleArray = [];  
      for (let i = 0; i < 4; i++) {  

          hourAngleArray.push(i * Math.PI / 6);  

      }  
      drawHourAndMinuteLine(hourAngleArray, hour_len);  

      //画分钟刻度  
      let minuteAngleArray = [];  
      let minute_len = 6;//刻度长度  
      for (let i = 0; i < 15; i++) {  
          minuteAngleArray.push(i * Math.PI / 30);  
      }  
      drawHourAndMinuteLine(minuteAngleArray, minute_len);  
      //5.文本：  
      //绘制文本的基本过程都是相同的，不同的只是样式，坐标参数，所以我也写了函数封装。  
      //画刻度文本值  
      let dates = new Date();  
      let hours = dates.getHours().toString().padStart(2, 0)  
      drawText("#1E90FF", "16px Arial", "center", "middle", "1", 135, 42);  
      drawText("#1E90FF", "16px Arial", "center", "middle", "2", 161, 68);  
      drawText("#1E90FF", "16px Arial", "center", "middle", "3", 171, 102);  
      drawText("#1E90FF", "16px Arial", "center", "middle", "4", 161, 136);  
      drawText("#1E90FF", "16px Arial", "center", "middle", "5", 134, 162);  
      drawText("#1E90FF", "16px Arial", "center", "middle", "6", 100, 171);  
      drawText("#1E90FF", "16px Arial", "center", "middle", "7", 65, 162);  
      drawText("#1E90FF", "16px Arial", "center", "middle", "8", 39, 138);  
      drawText("#1E90FF", "16px Arial", "center", "middle", "9", 27, 100);  
      drawText("#1E90FF", "16px Arial", "center", "middle", "10", 40, 68);  
      drawText("#1E90FF", "16px Arial", "center", "middle", "11", 65, 42);  
      drawText("#1E90FF", "16px Arial", "center", "middle", "12", 100, 30);  

      //显示上午还是下午  
      drawText("#FFA500", "16px Arial", "center", "middle", hours <= 12 ? "AM" : "PM", 120, 102);  
      function drawText(fillStyle, font, textAlign, textBaseline, size, x, y) {  
          graph.fillStyle = fillStyle;  
          graph.font = font;//设置或返回文本内容的当前字体属性  
          graph.textAlign = textAlign;//设置或返回文本内容的当前对齐方式  
          graph.textBaseline = textBaseline;//设置或返回在绘制文本时使用的当前文本基线  
          graph.fillText(size, x, y);//在画布上绘制“被填充的”文本  
      }  

      //绘制三根针：  
      //分针  
      graph.save();//保存当前环境的状态  
      graph.beginPath();  
      graph.translate(100, 100);  
      graph.strokeStyle = "#FFA500";  
      graph.moveTo(0, 0);  
      graph.lineTo(minuteLength * Math.cos(minutesAngle), minuteLength * Math.sin(minutesAngle));  
      graph.stroke();  
      //秒针  
      graph.save();//保存新的圆点  
      graph.beginPath();  
      graph.strokeStyle = "red";  
      graph.moveTo(0, 0);  
      graph.lineTo(secondLength * Math.cos(secondsAngle), secondLength * Math.sin(secondsAngle));  
      graph.stroke();  
      graph.stroke();  
      //时针  
      graph.beginPath();  
      graph.strokeStyle = "blue";  
      graph.moveTo(0, 0);  
      graph.lineTo(hourLength * Math.cos(hourAngle), hourLength * Math.sin(hourAngle));  
      graph.stroke();  
      graph.restore();  
      graph.restore();//返回之前保存过的路径状态和属性  

      // 上面代码我用到了两次save()和两次restore()方法，  
      // save()方法用于保存前面的各种设置，  
      // restore()方法用于退回到上一次save()所保存的设置。  
      // 因为在我的代码中，只有绘制三根针的时候原点设置才是时钟的中心，  
      // 所以我的使用主要是为了保证只有在这一部分代码中，原点的设置是时钟中心  
  }  


  /*画出时间刻度*/  
  function drawHourAndMinuteLine(timeType, len) {  
      for (let i = 0; i < timeType.length; i++) {  
          let x = outside_circle_r + inside_circle_r * Math.cos(timeType[i]);  
          let y = outside_circle_r - inside_circle_r * Math.sin(timeType[i]);  
          let toX = x - len * Math.cos(timeType[i]);  
          let toY = y + len * Math.sin(timeType[i]);  
          let toXLeftTop = outside_circle_r - inside_circle_r * Math.cos(timeType[i]) + len * Math.cos(timeType[i]);  
          let toYRightBottom = outside_circle_r + inside_circle_r * Math.sin(timeType[i]);  
          drawStraightLine("#1E90FF", x, y, toX, toY);//右上刻度  
          drawStraightLine("#1E90FF", outside_circle_r - inside_circle_r * Math.cos(timeType[i]), y, toXLeftTop, toY);//左上刻度  
          drawStraightLine("#1E90FF", x, toYRightBottom, toX, toYRightBottom - len * Math.sin(timeType[i]));//右下刻度  
          drawStraightLine("#1E90FF", outside_circle_r - inside_circle_r * Math.cos(timeType[i]), toYRightBottom, toXLeftTop, toYRightBottom - len * Math.sin(timeType[i]));//左下刻度  
      }  
  }  

  /*画一条线段的函数*/  
  function drawStraightLine(color, X, Y, toX, toY) {  
      graph.beginPath();  
      graph.strokeStyle = color;  
      graph.moveTo(X, Y);  
      graph.lineTo(toX, toY);  
      graph.stroke();  
  }  

  // <!--二. 进度条时钟 -->   
  let canvas = document.getElementById('canvas');  
  canvas.style.backgroundColor = "#FFFFFF";//添加背景色  
  let ctx = canvas.getContext('2d'); //返回对象，该对象提供画图用到的所有方法和属性三绘制路径  

  //基础圆  
  // function drawBase(){  
  //     ctx.beginPath(); //定义一天起始路径  
  //     ctx.lineWidth = 4; //设置线条的宽度  
  //     ctx.strokeStyle = '#C0FF3E'; //设置笔触颜色  
  //     // ctx.arc(x, y, r, start. end, false); //x,y为圆的圆心坐标，start为开始角度，end为结束角度，false是设置绘制圆以顺时针方向  
  //     ctx.arc(500, 100, 30, 0, Math.PI * 2, false);  
  //     ctx.stroke(); //绘制定义好的路径 (该函数是绘制图形的关键哦)  
  // }  
  // 动态圆(小时)  
  function drawHours(srcDegree, targetDegree) {  
      let date = new Date();  
      let hours = date.getHours().toString().padStart(2, 0);//小时  
      if (hours > 0) {  
          if (srcDegree > 0) {  
              srcDegree = hours * 6;  
          }  
          ctx.beginPath();  
          ctx.lineWidth = 5;  
          ctx.lineCap = 'butt'; //设置线条结束时端点的样式  
          ctx.strokeStyle = "#FFA500";  
          ctx.arc(66, 74, 13, degreeToRadian(srcDegree - 90), degreeToRadian(targetDegree - 90), true); //这里需要把度数处理为弧度，由于圆是默认从0度开始画，所以需要把角度减掉90度，从正上方的位置开始  
          ctx.stroke();  
          ctx.restore();  
      } else {  
          clearAll();  
          // drawBase();  
      }  
  }  
  // 动态圆(分钟)  
  function drawMinutes(srcDegree, targetDegree) {  
      let date = new Date();  
      let minutes = date.getMinutes().toString().padStart(2, 0);//分钟  
      if (minutes > 0) {  
          if (srcDegree > 0) {  
              srcDegree = minutes * 6;  
          }  
          ctx.beginPath();  
          ctx.lineWidth = 5;  
          ctx.lineCap = 'butt'; //设置线条结束时端点的样式  
          ctx.strokeStyle = "#1E90FF";  
          ctx.arc(100, 74, 13, degreeToRadian(srcDegree - 90), degreeToRadian(targetDegree - 90), true); //这里需要把度数处理为弧度，由于圆是默认从0度开始画，所以需要把角度减掉90度，从正上方的位置开始  
          ctx.stroke();  
          ctx.restore();  
      } else {  
          clearAll();  
          // drawBase();  
      }  
  }  

  // 动态圆(秒)  
  function drawSecond(srcDegree, targetDegree) {  
      let date = new Date();  
      let second = date.getSeconds().toString().padStart(2, 0);//秒钟  
      if (second > 0) {  
          if (srcDegree > 0) {  
              srcDegree = second * 6;  
          }  
          ctx.beginPath();  
          ctx.lineWidth = 5;  
          ctx.lineCap = 'butt'; //设置线条结束时端点的样式  
          ctx.strokeStyle = "#CDC9C9";  
          ctx.arc(133, 74, 13, degreeToRadian(srcDegree - 90), degreeToRadian(targetDegree - 90), true); //这里需要把度数处理为弧度，由于圆是默认从0度开始画，所以需要把角度减掉90度，从正上方的位置开始  
          ctx.stroke();  
          ctx.restore();  
      } else {  
          clearAll();  
          // drawBase();  
      }  
  }  

  // 处理角度  
  function degreeToRadian(degree) {  
      return degree * Math.PI / 180;  
  }  

  // 清除画布  
  function clearAll() {  
      ctx.clearRect(0, 0, 600, 200); //清楚整个画布  
  }  

  //圆形进度条  
  function draw(srcDegree, targetDegree) {  
      clearAll();  
      // drawBase();  
      drawSecond(srcDegree, targetDegree);  
      drawMinutes(srcDegree, targetDegree);  
      drawHours(srcDegree, targetDegree);  
  }  

  let targetDegree = 0; //全局变量  
  let srcDegree = 0;  
  function drawFrame() {  
      let easing = 360 / 60000;  
      let date = new Date();  
      let hours = date.getHours().toString().padStart(2, 0);//小时  
      let minutes = date.getMinutes().toString().padStart(2, 0);//分钟  
      let second = date.getSeconds().toString().padStart(2, 0);//秒钟  
      let allDate = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';  

      //当目标角度达到满圆时就可以清空计时器对象和画布  
      if (Math.round(targetDegree) >= Math.PI * 2) {  
          clearInterval(timer);  
          clearAll();  
      } else {  
          targetDegree += easing; //实现匀速  
          srcDegree += 6;  
          draw(srcDegree, targetDegree);  
      }  
      ctx.clearRect(0, 0, 600, 50); //调用之前清除日期画布  
      ctx.clearRect(178, 85, 43, 32); //调用之前清除小时画布  
      ctx.clearRect(278, 80, 43, 32); //调用之前清除分钟画布  
      ctx.clearRect(378, 85, 43, 32); //调用之前清除秒钟画布  
      //写字  
      ctx.fillStyle = '#000000';  
      ctx.font = '16px Microsoft Yahei';  
      ctx.textAlign = 'center';  
      ctx.fillText(allDate, 100, 50);//日期  
      ctx.fillText(hours, 66, 79);//分钟  
      ctx.fillText(minutes, 100, 79);//分钟  
      ctx.fillText(second, 133, 79);//秒钟  
  }  
  let timer = setInterval(drawFrame, 1000); 
}

// 撒花函数
export const getFlowers = ()=> {
  class Circle {  
      constructor({ origin, speed, color, angle, context }) {  
          this.origin = origin  
          this.position = { ...this.origin }  
          this.color = color  
          this.speed = speed  
          this.angle = angle  
          this.context = context  
          this.renderCount = 0  
      }  
      draw() {  
          this.context.fillStyle = this.color  
          this.context.beginPath()  
          this.context.arc(this.position.x, this.position.y, 2, 0, Math.PI * 2)  
          this.context.fill()  
      }  
      move() {  
          this.position.x = (Math.sin(this.angle) * this.speed) + this.position.x  
          this.position.y = (Math.cos(this.angle) * this.speed) + this.position.y + (this.renderCount * 0.3)  
          this.renderCount++  
      }  
  }  
  class Boom {  
      constructor ({ origin, context, circleCount = 10, area }) {  
          this.origin = origin  
          this.context = context  
          this.circleCount = circleCount  
          this.area = area  
          this.stop = false  
          this.circles = []  
      }  
      randomArray(range) {  
          const length = range.length  
          const randomIndex = Math.floor(length * Math.random())  
          return range[randomIndex]  
      }  
      randomColor() {  
          const range = ['8', '9', 'A', 'B', 'C', 'D', 'E', 'F']  
          return '#' + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range)  
      }  
      randomRange(start, end) {  
          return (end - start) * Math.random() + start  
      }  
      init() {  
          for(let i = 0; i < this.circleCount; i++) {  
              const circle = new Circle({  
              context: this.context,  
              origin: this.origin,  
              color: this.randomColor(),  
              angle: this.randomRange(Math.PI - 1, Math.PI + 1),  
              speed: this.randomRange(1, 6)  
              })  
              this.circles.push(circle)  
          }  
      }  
      move() {  
          this.circles.forEach((circle, index) => {  
              if (circle.position.x > this.area.width || circle.position.y > this.area.height) {  
              return this.circles.splice(index, 1)  
              }  
              circle.move()  
          })  
          if (this.circles.length == 0) {  
              this.stop = true  
          }  
      }  
      draw() {  
          this.circles.forEach(circle => circle.draw())  
      }  
  }  
  class CursorSpecialEffects {  
      constructor() {  
          this.computerCanvas = document.createElement('canvas')  
          this.renderCanvas = document.createElement('canvas')  
          this.computerContext = this.computerCanvas.getContext('2d')  
          this.renderContext = this.renderCanvas.getContext('2d')  
          this.globalWidth = window.innerWidth  
          this.globalHeight = window.innerHeight  
          this.booms = []  
          this.running = false  
      }  
      handleMouseDown(e) {  
          const boom = new Boom({  
              origin: { x: e.clientX, y: e.clientY },  
              context: this.computerContext,  
              area: {  
              width: this.globalWidth,  
              height: this.globalHeight  
              }  
          })  
          boom.init()  
          this.booms.push(boom)  
          this.running || this.run()  
      }  
      handlePageHide() {  
          this.booms = []  
          this.running = false  
      }  
      init() {  
          const style = this.renderCanvas.style  
          style.position = 'fixed'  
          style.top = style.left = 0  
          style.zIndex = '999999999999999999999999999999999999999999'  
          style.pointerEvents = 'none'  
          style.width = this.renderCanvas.width = this.computerCanvas.width = this.globalWidth  
          style.height = this.renderCanvas.height = this.computerCanvas.height = this.globalHeight  
          document.body.append(this.renderCanvas)  
          window.addEventListener('mousedown', this.handleMouseDown.bind(this))  
          window.addEventListener('pagehide', this.handlePageHide.bind(this))  
      }  
      run() {  
          this.running = true  
          if (this.booms.length == 0) {  
              return this.running = false  
          }  
          requestAnimationFrame(this.run.bind(this))  
          this.computerContext.clearRect(0, 0, this.globalWidth, this.globalHeight)  
          this.renderContext.clearRect(0, 0, this.globalWidth, this.globalHeight)  
          this.booms.forEach((boom, index) => {  
              if (boom.stop) {  
              return this.booms.splice(index, 1)  
              }  
              boom.move()  
              boom.draw()  
          })  
          this.renderContext.drawImage(this.computerCanvas, 0, 0, this.globalWidth, this.globalHeight)  
      }  
  }  
  const cursorSpecialEffects = new CursorSpecialEffects()  
  cursorSpecialEffects.init()  

  //单击显示随机文字  
  // var a_idx = 0;   
  // jQuery(document).ready(function($) {   
  //     $("#app").click(function(e) {   
  //         //rgb颜色随机  
  //         var r = Math.floor(Math.random()*256);  
  //         var g = Math.floor(Math.random()*256);  
  //         var b = Math.floor(Math.random()*256);  
  //         var color =  'rgb'+'('+r+','+g+','+b+')';  
  //         var a = new Array("富强","❤","民主","❤", "文明","❤", "和谐","❤", "自由","❤", "平等","❤", "公正","❤", "法治","❤" ,"爱国","❤", "敬业","❤", "诚信","❤", "友善","❤");  
  //         var $i = $("<span/>").text(a[a_idx]);   
  //         a_idx = (a_idx+1)%a.length;   
  //         var x = e.pageX,   
  //         y = e.pageY;   
  //         $i.css({   
  //             "z-index":5,   
  //             "top": y - 20,   
  //             "left": x,   
  //             "position": "absolute",   
  //             "font-weight": "bold",   
  //             "color":  color  
  //         });   
  //         $("body").append($i);   
  //         $i.animate({   
  //             "top": y - 180,   
  //             "opacity": 0   
  //         },   
  //         3000,   
  //         function() {   
  //             $i.remove();   
  //         });  
  //     });   
  // });  
}