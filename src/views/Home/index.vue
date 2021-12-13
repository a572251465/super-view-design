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

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
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
    const { proxy } = getCurrentInstance()!

    // -- 组件加载完成
    onMounted(() => {
      // eslint-disable-next-line no-unused-expressions
      proxy?.$notify({
        type: 'success',
        title: '友情提示',
        position: 'bottom-right',
        message: '首先点击每个单元模块，如果没有对应的文章可以到【知识文章】中寻找',
        showClose: true
      })
    })
  }
})
</script>

<style lang="scss" scoped>
.home {
  height: 100%;

  &-bottom {
    height: auto;
    display: flex;
    flex-direction: row;
    border-top: 70px solid transparent;
    min-height: calc(100% - 70px);
  }
}
</style>
