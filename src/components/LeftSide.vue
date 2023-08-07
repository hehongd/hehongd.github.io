<template>
    <el-container>
        <el-aside width="225px">
            <div class="canvasContainer">  
                <h3>公告</h3>  
                <canvas id="clock" width="200" height="200"></canvas>  
                <canvas id="canvas" width="200" height="150"></canvas>
            </div> 
            <div>邮箱：<span>635418133@qq.com</span></div>
        </el-aside>
    </el-container>

</template>
<script setup>
    import { onMounted } from "vue";
    import { getCanvas } from "@/utils"
    onMounted(() => {
        getCanvas()
    })
  
</script>
<style lang="scss" scoped>
.canvasContainer {  
    width: 200px;  
    height: 400px;  
    display: flex;  
    flex-direction: column;  
    margin: auto;  
    align-items: center;  
    justify-content: center;  
    border: 1px solid #ddd;  
    border-radius: 5px;  
    padding: 10px;  
}  
.canvasContainer h3 {  
    width: 100%;  
    font-weight: normal;  
    text-align: center;  
    border-bottom: 1px solid #ddd;  
    padding-bottom: 5px;  
} 
.el-container {
    flex:0;
    flex-basis: auto;
}
.el-aside{
    background: #ffeeee;
    height: 500px;
    height:100%;
}
</style>