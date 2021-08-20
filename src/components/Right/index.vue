<template>
    <div class="right full-width full-height" :style="styles">
        <Suspense>
            <template #default>
                <router-view v-slot="{ Component, route }" name = 'main'>
                    <transition :name="route.meta.transition || 'fade'" mode="out-in">
                        <component
                            :is="Component"
                            :key="route.meta.usePathKey ? route.path : undefined"
                        />
                    </transition>
                </router-view>
            </template>
        </Suspense>
    </div>
</template>

<script lang = 'ts'>
import { defineComponent, reactive, toRefs } from "vue"

export default defineComponent({
    name: 'right',
    setup() {
        const state = reactive({
            styles: {
                backgroundImage: `url('${require('@/assets/images/loading.gif')}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
            }
        })
        return {
            ...toRefs(state)
        }
    }
})
</script>

<style lang="scss" scoped>
    .right {
        width: 100%;
        height: 100%;
        margin-right: 5px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .3s ease-in;
    }
    .fade-enter-from {
        opacity: 0;
        transform: translateY(-100%);
    }
    .fade-enter-to {
        opacity: 1;
        transform: translateY(0);
    }
    .fade-leave-from {
        opacity: 1;
        transform: translateY(0);
    }
    .fade-leave-to {
        opacity: 0;
        transform: translateY(100%);
    }
</style>