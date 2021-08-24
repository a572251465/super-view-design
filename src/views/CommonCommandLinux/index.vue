<template>
  <div class="commonCommandLinux">
    <el-scrollbar>
      <list-template class="list-template">
        <list-detail :content="linuxContent"></list-detail>
        <list-detail :content="linuxContent1"></list-detail>
        <list-detail :content="linuxContent2"></list-detail>
        <list-detail :content="linuxContent3"></list-detail>
        <list-detail :content="linuxContent4"></list-detail>
        <list-detail :content="linuxContent5"></list-detail>
        <list-detail :content="linuxContent6"></list-detail>
      </list-template>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListTemplate from "@/components/ListTemplate/index.vue";
import ListDetail from "@/components/ListDetail/index.vue";
import {
  linuxContent,
  linuxContent1,
  linuxContent2,
  linuxContent3,
  linuxContent4,
  linuxContent5,
  linuxContent6,
} from "./data";

export default defineComponent({
  name: "commonCommandLinux",
  components: {
    ListTemplate,
    ListDetail,
  },
  setup() {
    return {
      linuxContent,
      linuxContent1,
      linuxContent2,
      linuxContent3,
      linuxContent4,
      linuxContent5,
      linuxContent6,
    };
  },
});
</script>

<style lang="scss" scoped>
.commonCommandLinux {
  width: 100%;
  height: 100%;
  background: #fff;

  .list-template {
    padding-bottom: 30px;
  }
}
</style>
