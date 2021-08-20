<template>
    <div class="right">
        <router-view name = 'main'></router-view>
    </div>
</template>

<script lang = 'ts'>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'right'
})
</script>

<style lang="scss" scoped>
    .right {
        width: 100%;
        height: 100%;
    }
</style>