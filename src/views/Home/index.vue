<template>
    <div class="home">
        <div class="home-top">
            <Top></Top>
        </div>
        <div class="home-bottom">
            <Left></Left>
            <Right></Right>
        </div>
    </div>
</template>

<script lang = 'ts'>
import { defineComponent, getCurrentInstance, onMounted } from "vue"
import Top from '@/components/Top/index.vue'
import Left from '@/components/Left/index.vue'
import Right from '@/components/Right/index.vue'

export default defineComponent({
    name: 'home',
    components: {
        Top,
        Left,
        Right
    },
    setup() {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const {proxy} = getCurrentInstance()!

        // -- 组件加载完成
        onMounted(() => {
            proxy?.$notify({
                type: 'success',
                title: '友情提示',
                position: 'bottom-right',
                message: '可以点击导航每个模块进行学习(例如：可视化)',
                showClose: true
            })
        })
    }
})
</script>

<style lang="scss" scoped>
    .home {
        width: 100%;
        height: 100%;
        &-top {
            margin-bottom: 10px;
        }
        &-bottom {
            width: 100%;
            height: calc(100% - 70px);
            display: flex;
            flex-direction: row;
        }
    }
</style>