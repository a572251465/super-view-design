<template>
  <div class="cssWorld">
    <el-scrollbar>
      <list-template class="list-template">
        <h3>Css总结文章地址</h3>
        <address-detail :addressInfo="addressData"></address-detail>
        <address-detail :addressInfo="addressData1"></address-detail>
        <address-detail :addressInfo="addressData2"></address-detail>
        <address-detail :addressInfo="addressData3"></address-detail>
        <address-detail :addressInfo="addressData4"></address-detail>
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
  addressData4
} from '@/views/CssWorld/data'

export default defineComponent({
  name: 'commonCommandGit',
  components: {
    ListTemplate,
    AddressDetail
  },
  setup() {
    return {
      addressData,
      addressData1,
      addressData2,
      addressData3,
      addressData4
    }
  }
})
</script>

<style lang="scss" scoped>
.cssWorld {
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
