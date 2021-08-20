<template>
    <div class="dashboard full-width full-height">
        <div class="outer">
            <div id="container"></div>
            <div class="outer-content">
                <p><b class="b">75</b><span class="span">%</span></p>
                <p><b>在用</b></p>
            </div>
        </div>
    </div>
</template>

<script lang = 'ts'>
import { defineComponent, getCurrentInstance, onMounted } from "vue";
import {getOptions} from './options'
import {generatorColor} from '@/assets/js/gradualColor'

export default defineComponent({
    name: 'dashboard',
    setup() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const {proxy} = getCurrentInstance()!
        const colorArr: string[] = generatorColor('#0394bc', '#2e51bb', 75)
        const result = Array.from({length: 75}).map((_, key) => {
            const color: string = colorArr[key]
            const ratio = (key + 1) / 100
            return [ratio, color]
        }) as [number, string][]
        if (result.length !== 100) {
            result.push([1, '#062136'])
        }

        // -- 组件挂在钩子函数
        onMounted(() => {
            const dom = document.querySelector('#container') as HTMLElement
            const myChart = proxy?.$echarts.init(dom)
            myChart?.setOption(getOptions(result))
        })
    }
})
</script>

<style lang="scss" scoped>
    $size: 400px;

    .dashboard {
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(16, 12, 42);

        .outer {
            width: $size;
            height: calc($size / 2);
            overflow: hidden;
            background: rgb(16, 12, 42);
            position: relative;

            &-content {
                position: absolute;
                left: 50%;
                top: 35%;
                transform: translate(-50%, -50%);
                font-size: 36px;

                p {
                    margin: 0px;
                }
                p:nth-child(1) {
                    margin-bottom: 3px;
                    .b {
                        color: #008ebc;
                        letter-spacing: 2px;
                        margin-right: 1px;
                    }
                    .span {
                        color: #3f6586;
                    }
                }

                p:nth-child(2) {
                    color: #3f6586;
                }
            }

            #container {
                width: $size;
                height: $size;
                background: rgb(16, 12, 42);
            }
        }
    }
</style>