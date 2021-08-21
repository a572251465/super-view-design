<template>
    <div class="list-template">
        <slot></slot>
    </div>
</template>

<script lang = 'ts'>
import { defineComponent } from "vue"

export default defineComponent({
    name: 'list-template'
})
</script>

<style lang="scss" scoped>
    ul, li {
        padding: 0px;
        margin: 0px;
    }

    .list-template {
        height: 100%;
        max-width: 900px;
        min-width: 400px;
        margin: 0px auto;
    }
</style>