
<template>
    <div>
        <h1>new Date()</h1>
        <article class="articleContanier">
            <p>一、项目src文件下，新建styles目录，当然位置自己随意定，新建了这三个scss文件，下面我们对这三个文件进行一一解析。</p>
            <div class="contanier">
                <div class="imgs"></div>
            </div>
            <p>一、项目src文件下，新建styles目录，当然位置自己随意定，新建了这三个scss文件，下面我们对这三个文件进行一一解析。</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass" id="but"></el-button>
                <pre class="pre preClass" id="bar">
                    <code class="code">
                        // 设置周下拉框，传入年份类型如：'2023'
                        function setWeekOption(year) {
                            let dates = getDay(year || new Date().getFullYear())
                            let weeks = {}
                            for(let i=0;i&lt;dates.length;i++) {
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
                            for(let i=1;i&lt;weeksKeyLen + 1;i++) {
                                console.log(weeks[i])
                                let obj = {}
                                obj.year = year
                                obj.week = '第' + i + '周'
                                obj.start = weeks[i][0]
                                obj.end = weeks[i][weeks[i].length-1]
                                obj.text = '第' + i + '周' + '('+ weeks[i][0] + '-' + weeks[i][weeks[i].length-1] + ')'
                                option.push(obj)
                            }
                            return option
                        }

                         //  操作一年的数据
                        function getDay(year) {
                            let dates = []
                            for( let i=1;i&lt;=12;i++ ) {
                                for( let j=1;j&lt;=new Date(year,i,0).getDate();j++ ) { // 每个月的数据
                                    dates.push( formatNumber(i) + '/' + formatNumber(j) + '_' + new Date([year,formatNumber(i),formatNumber(j)].join('-')).getDay())
                                }
                            }
                            return dates
                        }
                        function formatNumber(n) {
                            return n.toString().length&gt;1? n : n.toString().padStart(2,0)
                        }
                    </code>
                </pre>
            </div>
             <p>二、设置月下拉框</p>
            <div class="contanier">
                <el-button icon="el-icon-document-copy" class="copy copyClass1" id="but1"></el-button>
                <pre class="pre preClass1" id="bar">
                    <code class="code1">
                        // 获取指定一年月份日期，传入年份字符串列如：'2023'
                        function getMonthDay(year) {
                            let option = []
                            for(let i=1;i&lt;=12;i++) {
                                let month = i.toString().padStart(2,0)
                                let endDate = new Date(year,i,0).getDate().toString().padStart(2,0)
                                let obj = {
                                    year:year,
                                    month:month,
                                    startDate:1,
                                    endDate:endDate,
                                    text:'第'+ month + '月' + '(' + '1' + '-' + endDate + ')'
                                }
                                option.push(obj)
                            }
                            return option
                        }
                        console.log(getMonthDay(2023))
                    </code>
                </pre>
            </div>
        </article>
    </div>
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

                if(document.getElementsByClassName('preClass2').length> 0){
                    document.getElementsByClassName('preClass2')[0].onmouseenter = function (){
                        document.getElementById("but2").style.display="inline";
                    }
                    document.getElementsByClassName('preClass2')[0].onmouseleave  = function (){
                        document.getElementById("but2").style.display="none";
                    }
                    document.getElementsByClassName('copyClass2')[0].onmouseenter = function (){
                        document.getElementById("but2").style.display="inline";
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

                _that.clipboard2 = new ClipboardJS('#but2', {
                    text: function() {    // 如果想从其它DOM元素内容复制。应该是target:function(){return: };
                    let codeValue2 = document.getElementsByClassName('code2')[0].innerHTML
                    
                    return _that.filter(codeValue2);
                    }
                });
                _that.clipboard2.on('success', function(e) {
                    ELEMENT.Message({
                    message: '复制代码成功',
                    type: 'success'
                    });
                });
                _that.clipboard2.on('error', function(e) {
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
.imgs {
    width: 100%;
    height: 280px;
    background: url('../images/scss.png');
    background-size: 100%;
}
.articleContanier {
    line-height: 1.8;
}
.articleContanier p {
    margin-bottom: 20px;
}
.contanier {
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
