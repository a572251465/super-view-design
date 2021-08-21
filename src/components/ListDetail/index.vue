<template>
    <div class="list-detail">
        <h2>{{content.title}}</h2>
        <div class="list-detail-content">
            <ul>
                <li v-for="item in content.content" :key = 'item' @click = 'copyHandle(item.detail)'>
                    <i class="el-icon-star-on" :style="{color: randomBk()}"></i>
                    <div>{{item.detail}}</div>
                    <div class="nodes" v-show="item.notes">// {{item.notes}}</div>
                    <em>单击复制哦</em>
                </li>
            </ul>
        </div>
        <!--  -->
        <input type="input" ref = 'copyInput' class="copyInput">
    </div>
</template>

<script lang = 'ts'>
import { defineComponent, getCurrentInstance, PropType } from "vue"
import {IListTemplate} from './types'
import randomBk from '@/assets/js/randomBk'
import {copyTxt} from '@/assets/js/copyTxt'

export default defineComponent({
    name: 'list-detail',
    props: {
        content: {
            type: Object as PropType<IListTemplate>,
            default: () => ({})
        }
    },
    setup() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const {proxy} = getCurrentInstance()!

        // -- 复制内容事件
        const copyHandle = (detail: string) => {
            if (detail.startsWith('$')) {
                detail = detail.replace(/^\$\s+/gi, '')
            }
            const inputDom: HTMLInputElement = proxy?.$refs['copyInput'] as HTMLInputElement
            copyTxt(inputDom, detail).then(() => {
                proxy?.$message.success('复制成功')
            }).catch(() => {
                proxy?.$message.success('复制失败,为了更好的体验请更换Chrome浏览器')
            })
        }

        return {
            randomBk,
            copyHandle
        }
    }
})
</script>

<style lang="scss" scoped>
    ul, li {
        padding: 0px;
        margin: 0px;
    }

    .copyInput {
        opacity: 0;
        height: 0;
    }

    .list-detail {
        width: 100%;
        display: flex;
        margin: 0px auto;
        flex-direction: column;

        h2 {
            font-style: italic;
            color: #47a1ff;
            text-decoration: underline;
        }

        &-content {
            padding: 10px 30px 10px 20px;
            border-radius: 4px;
            background: #f5f5f5;
            box-shadow: 3px 3px 3px #ccc;

            li:hover {
                em {
                    display: block;
                }
            }

            li {
                display: flex;
                min-height: 28px;
                align-items: center;
                cursor: pointer;

                i {
                    margin-right: 5px;
                }

                .nodes {
                    font-size: 12px;
                    margin-left: 20px;
                    font-style: italic;
                }

                em {
                    font-size: 12px;
                    color: red;
                    font-weight: bold;
                    margin-left: 20px;
                    display: none;
                }
            }
        }
    }
</style>