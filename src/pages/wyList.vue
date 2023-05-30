
<template>
    <article class="articleContanier">
            <p>一.获取一周或一月数据</p>
            <div class="contaniers">
                <el-button icon="el-icon-document-copy" class="copy copyClass" id="but"></el-button>
                <pre class="pre preClass" id="bar">
                    <code class="code">
                        // getDays(7) 获取一周数据
                        // getDays(30) 获取一月数据
                        getDays(day) {// 获取天数
                            let arr = [];
                            for (let i = -day; i < 0; i++) { // 循环添加天数
                                let today = new Date();// 获取今天
                                let targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * i;
                                today.setTime(targetday_milliseconds); //设置i天前的时间
                                let tYear = today.getFullYear();
                                let tMonth = today.getMonth();
                                let tDate = today.getDate();
                                let date = [tYear, tMonth + 1, tDate];
                                arr.push(date);
                            }
                            return arr
                        },
                    </code>
                </pre>
            </div>
            <p>二.获取开始时间和结束时间之内的所有月份</p>
            <div class="contaniers">
                <el-button icon="el-icon-document-copy" class="copy copyClass1" id="but1"></el-button>
                <pre class="pre preClass1" id="bar">
                    <code class="code1">
                        // getMonthBetween('2025-01-01','2025-05-01')
                        getMonthBetween(start, end) {  // 获取开始时间和结束时间之内的所有月份
                            let selectDate = [];
                            let s = start.split("-");  // 字符串装换数组
                            let e = end.split("-");
                            let date = new Date();
                            let min = date.setFullYear(s[0], s[1] - 1); // 设置最小时间
                            let max = date.setFullYear(e[0], e[1] - 1); // 设置最大时间
                            let curr = min;
                            while (curr <= max) {  // 循环添加月份
                                var month = new Date(curr).getMonth();
                                var arr = [new Date(curr).getFullYear(), month + 1];
                                selectDate.push(arr);
                                curr = new Date(new Date(curr).getFullYear(), month + 1)
                            }
                            return selectDate
                        },
                    </code>
                </pre>
            </div>
        </article>
</template>

<script>
module.exports = {
    data: function() {
        return {
            clipboard:null,
            clipboard1:null,
        }
    },
    mounted(){
        this.copy()
    },
    methods:{
            copy() {
                let _that = this
                document.getElementById("but").style.display="none";
                document.getElementById("but1").style.display="none";
     
                codeValue = document.getElementsByClassName('code')[0].innerHTML
                if(document.getElementsByClassName('preClass').length> 0){
                    document.getElementsByClassName('preClass')[0].onmouseenter = function (){
                        document.getElementById("but").style.display="inline";
                    }
                    document.getElementsByClassName('preClass')[0].onmouseleave  = function (){
                        document.getElementById("but").style.display="none";
                    }
                    document.getElementsByClassName('copyClass')[0].onmouseenter = function (){
                        document.getElementById("but").style.display="inline";
                    }
                }

                if(document.getElementsByClassName('preClass1').length> 0){
                    document.getElementsByClassName('preClass1')[0].onmouseenter = function (){
                        document.getElementById("but1").style.display="inline";
                    }
                    document.getElementsByClassName('preClass1')[0].onmouseleave  = function (){
                        document.getElementById("but1").style.display="none";
                    }
                    document.getElementsByClassName('copyClass1')[0].onmouseenter = function (){
                        document.getElementById("but1").style.display="inline";
                    }
                }

                _that.clipboard = new ClipboardJS('#but', {
                    text: function() {    // 如果想从其它DOM元素内容复制。应该是target:function(){return: };
                    codeValue = document.getElementsByClassName('code')[0].innerHTML
                    return _that.filter(codeValue);
                    }
                });
                _that.clipboard.on('success', function(e) {
                    console.log(e)
                    ELEMENT.Message({
                    message: '复制代码成功',
                    type: 'success'
                    });
                });
                
                _that.clipboard.on('error', function(e) {
                    ELEMENT.Message.error('错了哦，这是一条错误消息');
                });

                _that.clipboard1 = new ClipboardJS('#but1', {
                    text: function() {    // 如果想从其它DOM元素内容复制。应该是target:function(){return: };
                    let codeValue1 = document.getElementsByClassName('code1')[0].innerHTML
                    
                    return _that.filter(codeValue1);
                    }
                });
                _that.clipboard1.on('success', function(e) {
                    ELEMENT.Message({
                    message: '复制代码成功',
                    type: 'success'
                    });
                });
                _that.clipboard1.on('error', function(e) {
                    ELEMENT.Message.error('错了哦，这是一条错误消息');
                });
            },
            escape2Html(str) {
                var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
                return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){
                    return arrEntities[t];
                });
            },
            //过滤html标签
            filter(html) {
                return html
                    .replace(/<(?:.|\n)*?>/gm, '')
                    .replace(/(&rdquo;)/g, '"')
                    .replace(/&ldquo;/g, '"')
                    .replace(/&mdash;/g, '-')
                    .replace(/&nbsp;/g, '')
                    .replace(/&gt;/g, '>')
                    .replace(/&lt;/g, '<')
                    // .replace(/<[\w\s"':=\/]*/, '')
            }
        },
        destroyed(){
            this.clipboard.destroy()
            this.clipboard1.destroy()
        }
}
</script>

<style>
    .articleContanier p {
        margin-bottom: 20px;
    }
    .articleContanier .contaniers {
        position: relative;
    }
    .copy {
        position: absolute;
        top: 6px;
        right: 6px;
        width: 32px;
        height: 24px;
        cursor: pointer;
        font-size: 14px;
        padding: 0;
        border: none;
        border-radius: 6px;
        color: #ccc;
        background-color: hsla(0,0%,90.2%,.2);
        box-shadow: 0 2px 0 0 rgba(0,0,0,.25);
    }
    .pre {
        word-wrap: normal;
        word-break: break-all;
        white-space: pre;
        overflow-x: scroll;
        overscroll-behavior-x: contain;
        margin-top: 0;
        margin-bottom: 20px;
        border-radius: 4px;
        z-index: 0;
        padding: 1em;
        line-height: 1.5;
        color: #ccc;
        background: #2d2d2d;
    }
    .keyword {
        color: #cc99cd;
    }
    .function {
        color: #f08d49;
    }
    .string {
        color: #7ec699;
    }
    .tag {
        color: #e2777a;
    }
</style>
