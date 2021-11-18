<template>
  <div class="vueWorld">
    <el-scrollbar>
      <list-template class="list-template">
        <h3>Vue总结文章地址</h3>
        <address-detail v-for="(item, key) in addressArr" :key="key" :addressInfo="item"></address-detail>
      </list-template>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListTemplate from '@/components/ListTemplate/index.vue'
import AddressDetail from '@/components/AddressDetail/index.vue'
import { addressData, addressData1, addressData2 } from '@/views/VueWorld/data'
import { IAddressDetail } from '@/components/AddressDetail/types'

const addressArr: IAddressDetail[] = [addressData2, addressData, addressData1]

export default defineComponent({
  name: 'vueWorld',
  components: {
    ListTemplate,
    AddressDetail
  },
  setup() {
    return {
      addressArr
    }
  }
})
</script>

<style lang="scss" scoped>
.vueWorld {
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
