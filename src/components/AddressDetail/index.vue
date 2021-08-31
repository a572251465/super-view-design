<template>
  <div class="address-detail">
    <div class="title">
      <div class="title-left">
        <span class="title-left-content">
          {{ addressInfo.title }}
        </span>
        <span class="title-left-flags"
          >重要程度:
          <i
            class="el-icon-star-on"
            v-for="item in addressInfo.grade"
            :key="item"
            :style="{ color: randomBk() }"
          ></i>
        </span>
      </div>
      <div class="title-right">展开</div>
    </div>
    <ul>
      <li v-for="item in addressInfo.children" :key="item.address">
        <i class="el-icon-star-on" :style="{ color: randomBk() }"></i>
        <a :href="item.address" target="_blank">{{ item.address }}</a>
        <span
          class="content"
          :class="[item.isImportant ? 'active' : '']"
          v-show="item.notes"
          >{{ item.notes }}</span
        >
        <button @click="copyText(item.address)">复制链接</button>
      </li>
    </ul>
    <input type="text" class="copyText" ref="copy-text" />
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, PropType } from 'vue'
import { ElMessage } from 'element-plus'
import { IAddressDetail } from '@/components/AddressDetail/types'
import randomBk from '@/assets/js/randomBk'
import copyTxt from '@/assets/js/copyTxt'

export default defineComponent({
  name: 'address-detail',
  props: {
    addressInfo: {
      type: Object as PropType<IAddressDetail>,
      required: true
    }
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { proxy } = getCurrentInstance()!
    // -- 复制文本处理
    const copyText = (text: string): void => {
      // 获取dom元素
      const el = proxy?.$refs['copy-text'] as HTMLInputElement
      copyTxt(el, text)
      ElMessage.success('复制成功')
    }

    return {
      randomBk,
      copyText
    }
  }
})
</script>

<style lang="scss" scoped>
.address-detail {
  padding: 0px 30px 10px 20px;
  border-radius: 4px;
  background: #f5f5f5;
  box-shadow: 3px 3px 3px #ccc;
  width: 100%;
  margin-top: 30px;

  .copyText {
    opacity: 0;
  }

  .title {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &-left {
      &-content {
        font-weight: bold;
        font-size: 17px;
        color: #100c2a;
      }

      &-flags {
        margin-left: 15px;
        font-size: 13px;
      }
    }

    &-right {
      font-size: 13px;
      cursor: pointer;
    }
  }

  ul {
    background: #fff;
    margin: 0px;
    padding: 0px 15px;
    width: 100%;

    li {
      height: 45px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;

      i {
        margin-right: 15px;
      }

      .content {
        font-size: 12px;
        color: #666666;
        margin-left: 20px;
      }

      .active {
        color: red;
        font-weight: bold;
        font-size: 14px;
        text-shadow: 3px 3px 3px #ccc;
        font-style: initial;
      }

      button {
        border: 1px solid #eeeeee;
        outline: none;
        background: #fff;
        color: #47a1ff;
        font-size: 12px;
        padding: 5px 10px;
        cursor: pointer;
        margin-left: 30px;
      }
    }
  }
}
</style>
