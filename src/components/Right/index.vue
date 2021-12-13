<template>
  <div class="right full-width full-height" :style="styles">
    <Suspense>
      <template #default>
        <router-view v-slot="{ Component, route }" name="main">
          <transition :name="route.meta.transition || 'fade'" mode="out-in">
            <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
          </transition>
        </router-view>
      </template>
    </Suspense>

    <!-- 表示时时滚动进度条 -->
    <div class="processBar">
      <div class="processBar-inner" :style="{ width: percentage + '%' }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import loadingPng from '@/assets/images/loading.gif'

const throttle = require('single-throttle')

export default defineComponent({
  name: 'right',
  setup() {
    // 当前窗口的高度
    const clientH = document.body.clientHeight
    const route = useRoute()
    // 表示滚动条的百分比
    const percentage = ref<number>(0)
    // 窗口的总体高度(包括待滚动区域)
    const scrollHeight = ref<number>(0)
    const state = reactive({
      styles: {
        backgroundImage: `url('${loadingPng}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }
    })

    // 设置滚动高度的处理
    const scrollTopHandle = () => {
      // 滚动高度
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

      // 判断是否需要滚动
      if (scrollHeight.value < clientH) {
        percentage.value = 0
        return false
      }
      // 待滚动高度
      const stayTop = scrollHeight.value - clientH
      percentage.value = ((scrollTop / stayTop) * 100) | 0
      return true
    }

    // 获取滚动高度处理
    const getScrollHeight = throttle({
      func: () => {
        let timer: number | null = setTimeout(() => {
          clearTimeout(timer as number)
          timer = null

          scrollHeight.value = document.body.scrollHeight
          scrollTopHandle()
        }, 2000)
      },
      wait: 20,
      isFast: true
    })

    // 监听path 路径变化
    watch(() => route.path, getScrollHeight)

    // 组件挂载钩子事件
    onMounted(getScrollHeight)

    // 监听滚动条的变化
    window.addEventListener('scroll', () => {
      if (scrollHeight.value <= 0) return
      scrollTopHandle()
    })
    return {
      ...toRefs(state),
      percentage
    }
  }
})
</script>

<style lang="scss" scoped>
.processBar {
  position: fixed;
  height: 10px;
  border-radius: 6px;
  background: transparent;
  left: 10px;
  right: 10px;
  bottom: 2px;

  &-inner {
    position: absolute;
    left: 0;
    transition: width 0.1s linear;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(to right, #00cc99, #cc3366);
    border-radius: 6px;
  }
}

.right {
  width: 100%;
  height: 100%;
  margin-right: 5px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in;
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
