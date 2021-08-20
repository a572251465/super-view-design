<template>
    <div class="top">
        <img :src="logo" alt="" class="top-logo" />
        <ul class="top-list">
            <li v-for="item in navList"
                :key = 'item.value' :class="[currentNav === item.value ? 'active' : '']"  @click="clickNavHandle(item.value)" >
                {{item.label}}
            </li>
        </ul>
    </div>
</template>

<script lang = 'ts'>
import { defineComponent, ref } from "@vue/runtime-core";
import logo from '@/assets/images/logo.png'
import { useStore } from "vuex";
import { SETTING_CURRENT_NAV } from "@/store/modules/navInfo/method-types";

export default defineComponent({
    name: 'top',
    setup() {
        const store = useStore()
        const navList = store.state.navInfo.navList
        const currentNav = ref<string>(store.state.navInfo.currentNav)

        // -- 点击导航事件
        const clickNavHandle = (nav: string) => {
            currentNav.value = nav

            // -- 修改vuex状态
            store.dispatch(`navInfo/${SETTING_CURRENT_NAV}`, nav)
        }

        return {
            logo,
            navList,
            currentNav,
            clickNavHandle
        }
    }
})
</script>

<style lang="scss" scoped>
    .top {
        width: 100%;
        height: 60px;
        display: flex;
        background: #100c2a;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &-logo {
            width: 50px;
            height: 50px;
            margin-left: 50px;
        }

        &-list {
            font-size: 16px;
            color: #fff;
            font-weight: bold;
            margin-right: 150px;
            font-style: oblique;
            li {
                display: inline-block;
                width: 100px;
                text-align: center;
                cursor: pointer;

                &:hover {
                    color: #47a1ff;
                    text-decoration: underline;
                }
            }

            .active {
                color: #47a1ff;
                text-decoration: underline;
            }
        }
    }
</style>