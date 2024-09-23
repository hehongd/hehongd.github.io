<template>
    <el-image :src="imgUrl" fit="fill" @click="handleImage('full')" />
</template>

<script setup>
    import { ref } from "vue";
    import { signOut,exitFullscreen } from "@/utils"
    import fullScreen from "@/assets/images/full-screen.png"
    import exitFull from "@/assets/images/exit-full-screen.png"

    const imgUrl =  ref(fullScreen)
    const flag = ref(true)
    const handleImage = () => {
        if( flag.value ) {
            signOut()
            imgUrl.value = exitFull
            flag.value = false
        } else {
            exitFullscreen()
            imgUrl.value = fullScreen
            flag.value = true
        }
    }

</script>

<style>

</style>
