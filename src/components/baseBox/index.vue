<template>
  <div class="base-box-container" ref="baseBoxRef">
        <div class="base-box-header">{{ title }}</div>
        <div class="base-box-content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    title: {
        type: String,
        default: ""
    }
});

</script>

<style lang="scss" scoped>
.base-box-container {
    border-radius: 4px;
    overflow: hidden;
    .base-box-header {
        padding: 16px 24px;
        color: var(--el-text-color-primary);
        font-weight: 500;
        font-size: 16px;
        border-bottom: 1px solid rgba(175, 175, 175, 0.3);
    }
    .base-box-content {
        padding: 10px;
        height: 300px;
        box-sizing: border-box;
    }
}
</style>