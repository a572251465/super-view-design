<template>
  <div id="container">11111</div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue'
import getOptions from '@/components/example/ScalePie/options'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const { proxy } = getCurrentInstance()!

// -- 组件挂载钩子函数
onMounted(() => {
  const el = document.querySelector('#container') as HTMLDivElement
  const myChart = proxy?.$echarts.init(el)
  if (myChart) {
    myChart.setOption(getOptions())
  }
})
</script>

<style lang="scss" scoped>
#container {
  width: 800px;
  height: 400px;
}
</style>
