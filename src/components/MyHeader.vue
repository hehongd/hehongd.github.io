<template>
    <el-header>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-menu :default-active="activeIndex" mode="horizontal" @select="menuSelect">
                    <el-menu-item index="1">笔记</el-menu-item>
                    <el-menu-item index="2">消息中心</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="12" class="right-menu">
                <el-image :src="imgUrl" fit="fill" @click="handleImage('full')" />
            </el-col>
        </el-row>
    </el-header>
</template>
<script setup>
    import { ref, watch } from "vue";
    import { signOut,exitFullscreen } from "@/utils"
    import { useUserStore } from "@/store/user"

    const activeIndex = ref('1')
    const imgUrl =  ref("src/assets/images/full-screen.png")
    const user = useUserStore()

    const flag = ref(true)
    const handleImage = () => {
        if( flag.value ) {
            signOut()
            imgUrl.value = "src/assets/images/full-screen.png"  
            flag.value = false
        } else {
            exitFullscreen()
            imgUrl.value = "src/assets/images/exit-full-screen.png"  
            flag.value = true
        }
    }
    const menuSelect = (e) => {
        user.show = e
    }

</script>
<style lang="scss" scoped>
.el-menu--horizontal {
    border-bottom:0;
}
.el-header {
    --el-header-padding:0;
}
.el-header[data-v-577b919c] {
    background-color: var(--el-menu-bg-color);
}
.right-menu {
    display: flex !important;
    justify-content: end;
    align-items: center;
    .el-image {
        height: 40px;
        width: 40px;
    }
}
</style>