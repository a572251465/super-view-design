<template>
  <div class="commonCommandGit">
    <el-scrollbar>
      <list-template class="list-template">
        <list-detail :content="gitContent"></list-detail>
        <list-detail :content="gitContent1"></list-detail>
        <list-detail :content="gitContent2"></list-detail>
        <list-detail :content="gitContent3"></list-detail>
        <list-detail :content="gitContent4"></list-detail>
      </list-template>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from "vue";
import ListTemplate from "@/components/ListTemplate/index.vue";
import ListDetail from "@/components/ListDetail/index.vue";
import {
  gitContent,
  gitContent1,
  gitContent2,
  gitContent3,
  gitContent4,
} from "@/views/CommonCommandGit/data";

export default defineComponent({
  name: "commonCommandGit",
  components: {
    ListTemplate,
    ListDetail,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { proxy } = getCurrentInstance()!;

    // -- 组件被创建钩子函数
    onMounted(() => {
      // eslint-disable-next-line no-unused-expressions
      proxy?.$notify({
        type: "success",
        message: "单击可以复制哦",
      });
    });
    return {
      gitContent,
      gitContent1,
      gitContent2,
      gitContent3,
      gitContent4,
    };
  },
});
</script>

<style lang="scss" scoped>
.commonCommandGit {
  width: 100%;
  height: 100%;
  background: #fff;

  .list-template {
    padding-bottom: 30px;
  }
}
</style>
