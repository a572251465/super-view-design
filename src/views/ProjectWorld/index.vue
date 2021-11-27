<template>
  <div class="cssWorld">
    <el-scrollbar>
      <list-template class="list-template">
        <h3>webpack相关的文章总结</h3>
        <address-detail v-for="(item, key) in componentList" :key="key" :addressInfo="item"></address-detail>
      </list-template>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListTemplate from '@/components/ListTemplate/index.vue'
import AddressDetail from '@/components/AddressDetail/index.vue'
import addressData from '@/views/ProjectWorld/data.ts'
import { IAddressDetail } from '@/components/AddressDetail/types'

const componentList: IAddressDetail[] = [addressData]
export default defineComponent({
  name: 'projectWord',
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
