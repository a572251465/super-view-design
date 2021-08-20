<template>
    <div class="full-width full-height full-bk simple-bar">
        <div id="container"></div>
    </div>
</template>

<script lang = 'ts'>
import { defineComponent, getCurrentInstance, onMounted } from "vue"
import {getSimpleBarOptions} from './options'

export default defineComponent({
    name: 'simplebar-example',
    setup() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const {proxy} = getCurrentInstance()!

        // -- 组件加载钩子函数
        onMounted(() => {
            const dom = document.querySelector('#container') as HTMLElement
            const myChart = proxy?.$echarts.init(dom)
            myChart?.setOption(getSimpleBarOptions())
        })
    }
})
</script>

<style lang="scss" scoped>
    .simple-bar {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #container {
        width: 600px;
        height: 500px;
    }
</style>