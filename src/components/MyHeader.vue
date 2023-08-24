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
                <full-screens></full-screens>
            </el-col>
        </el-row>
    </el-header>
</template>
<script setup>
    import { ref } from "vue";
    import { useUserStore } from "@/store/modules/user"
    import fullScreens from "./fullScreen.vue"

    const activeIndex = ref('1')
    const user = useUserStore()
    const menuSelect = (e) => { user.show = e }

</script>
<style lang="scss" scoped>
.el-menu--horizontal {
    border-bottom:0;
}
.el-header {
    --el-header-padding:0;
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