<template>
    <div class="simpleBar full-width full-height">
        <SimpleBar></SimpleBar>
    </div>
</template>

<script lang = 'ts'>
import { defineComponent } from "vue"
import SimpleBar from '@/components/example/SimpleBar/index.vue'

export default defineComponent({
    name: 'simpleBar',
    components: {
        SimpleBar
    }
})
</script>