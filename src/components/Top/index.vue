<template>
  <div class="top">
    <img :src="logo" alt="" class="top-logo" />
    <ul class="top-list">
      <li
        v-for="item in navList"
        :key="item.value"
        :class="[currentNav === item.value ? 'active' : '']"
        @click="clickNavHandle(item.value)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import logo from '@/assets/images/logo.png'
import SETTING_CURRENT_NAV from '@/store/modules/navInfo/method-types'

export default defineComponent({
  name: 'top',
  setup() {
    const store = useStore()
    const { navList } = store.state.navInfo
    const currentNav = ref<string>(store.state.navInfo.currentNav)

    // -- 点击导航事件
    const clickNavHandle = (nav: string) => {
      currentNav.value = nav

      // -- 修改vuex状态
      store.dispatch(`navInfo/${SETTING_CURRENT_NAV}`, nav).then(() => {
        const navDetailInfo = store.getters[`navInfo/navDetailInfo`]
        const { path } = navDetailInfo[nav][0]

        const matchPath = /^(http)s?:\/\//gi
        if (matchPath.test(path)) {
          window.open(path, '_blank')
        }
      })
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
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 10 solid white;
  display: flex;
  background: #100c2a;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  &-logo {
    width: 60px;
    height: 60px;
    margin-left: 100px;
  }

  &-list {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    display: flex;
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
