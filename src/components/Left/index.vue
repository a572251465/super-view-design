<template>
    <div class="left">
        <ul>
            <li v-for="item in currentNavInfo" :key="item.path" @click="skipRouter(item.path)" class="left-detail">
                <i :class="[item.path === currentPath ? 'el-icon-star-on' : 'el-icon-star-off']"
                    :style="{color: randomBk()}"></i>
                <span>{{item.label}}</span>
            </li>
        </ul>
    </div>
</template>

<script lang = 'ts'>
import { defineComponent, reactive, ref, toRefs, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import randomBk from '@/assets/js/randomBk'
import { useRouter } from "vue-router";
import { IRouteDetail } from "@/store/modules/navInfo";

export default defineComponent({
    name: 'left',
    setup() {
        const store = useStore()
        const {navDetailInfo} = store.state.navInfo
        const state = reactive<{currentNavInfo: IRouteDetail[]}>({currentNavInfo: []})
        const currentPath = ref<string>('')
        const router = useRouter()
        
        // -- 跳转路由
        const skipRouter = (path: string) => {
            currentPath.value = path

            // -- 转换路由
            router.push({path: `/${path}`})
        }

        // -- 监听当前的导航信息
        watch(() => store.state.navInfo.currentNav, (nav: string) => {
            const currentNavInfo = navDetailInfo[nav] as (IRouteDetail[])
            if (!currentNavInfo) {
                return false
            }
            state.currentNavInfo = currentNavInfo

            // -- 默认选中第一个
            if (currentNavInfo.length > 0) {
                skipRouter(currentNavInfo[0].path)
            }
        }, {immediate: true})

        return {
            ...toRefs(state),
            currentPath,
            randomBk,
            skipRouter
        }
    }
})
</script>

<style lang="scss" scoped>
    .left {
        width: 200px;
        height: 100%;
        margin-left: 5px;
        box-sizing: border-box;
        background: #100c2a;
        overflow: hidden;
        margin-right: 10px;

        ul {
            width: 100%;
            padding: 0px;
            margin: 0px;
        }

        &-detail {
            height: 60px;
            line-height: 60px;
            padding: 0px 20px 0px 40px;
            cursor: pointer;
            span {
                font-size: 14px;
                color: #47a1ff;
                font-weight: bold;
                font-style: oblique;
                margin-left: 6px;
            }

            &:hover {
                opacity: .5;
                
                span {
                    text-decoration: underline;
                }
            }
        }
    }
</style>