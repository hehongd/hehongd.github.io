<template>
    <el-main>
        <my-note v-if="isShow == '1'"></my-note>
        <my-message v-else></my-message>
    </el-main>
</template>
<script setup>
    import { ref, watch } from "vue"
    import MyNote from "./MyNote"
    import MyMessage from "./MyMessage.vue"
    import { useUserStore } from "@/store/user"
    const isShow = ref('1')
    const user = useUserStore()
    watch(user,(newVal,oldVal) => {
        isShow.value = newVal.show
    })
</script>
<style lang="scss" scoped>
.el-main {
    padding: 10px 10px 0 10px;
}
::v-deep .el-sub-menu__title {
    color: #FFF;
}
::v-deep .el-menu-item-group__title {
    padding: 0;
}
::v-deep .el-menu-item-group>ul  {
    background: #304156;
}
::v-deep .el-menu-item {
    color:#FFF;
}
::v-deep .el-sub-menu__title:hover {
    background: rgba(0,0,0,0.5);
}
::v-deep .el-menu-item:hover {
    background: rgba(0,0,0,0.5);
}
</style>
