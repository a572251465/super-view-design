<template>
  <div class="commonlyAddress">
    <el-scrollbar>
      <list-template class="list-template">
        <h3>常用文章地址</h3>
        <address-detail v-for="(item, key) in componentList" :key="key" :addressInfo="item"></address-detail>
      </list-template>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListTemplate from '@/components/ListTemplate/index.vue'
import AddressDetail from '@/components/AddressDetail/index.vue'
import {
  addressData,
  addressData1,
  addressData2,
  addressData3,
  addressData4,
  addressData5,
  addressData6,
  addressData7,
  addressData8,
  addressData9
} from '@/views/CommonlyAddress/data'
import { IAddressDetail } from '@/components/AddressDetail/types'

const componentList: IAddressDetail[] = [
  addressData,
  addressData1,
  addressData2,
  addressData3,
  addressData4,
  addressData5,
  addressData6,
  addressData7,
  addressData8,
  addressData9
]

export default defineComponent({
  name: 'commonCommandGit',
  components: {
    ListTemplate,
    AddressDetail
  },
  setup() {
    return {
      componentList
    }
  }
})
</script>

<style lang="scss" scoped>
.commonlyAddress {
  width: 100%;
  height: 100%;
  background: #fff;

  .list-template {
    h3 {
      font-style: italic;
      font-weight: bold;
      text-decoration: underline;
      color: #47a1ff;
    }
    padding-bottom: 30px;
  }
}
</style>
