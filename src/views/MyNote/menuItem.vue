<template>
    <template v-if="item.meta && !item.meta.hidden">
        <el-sub-menu :index="item.path" :key="item.path" v-if="item?.children?.length > 0">
            <template #title>
                <el-icon>
                    <Aim />
                    <!-- <component :is="item.icon"/> -->
                </el-icon>
                <span>{{ item.meta.title }}</span>
            </template>
            <!-- 组件在它的模板内可以递归的调用自己，只要给组件设置 name 组件就可以了 -->
            <menuItem v-for="child in item.children" :item="child" :key="child.path" />
        </el-sub-menu>
        <el-menu-item v-else :index="item.path">
            <el-icon>
                <Aim />
            </el-icon>
            <template #title>{{ item.meta.title }}</template>
        </el-menu-item>
    </template>
</template>
<script setup name="menuItem">
import { Aim } from '@element-plus/icons-vue'
const props = defineProps({
    item: {
        type: Object,
        default: () => { },
    },
})
</script>
<style lang='scss' scoped>
.el-menu-item.is-active {
    background-color: rgba(0,0,0,0.5);
    color: #38B2FF;
}
</style>