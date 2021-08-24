<template>
  <div class="full-width full-height full-bk simple-line">
    <div id="container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from "vue";
import getSimpleLineOptions from "./options";

export default defineComponent({
  name: "simple-line-example",
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { proxy } = getCurrentInstance()!;

    // -- 组件挂载钩子函数
    onMounted(() => {
      const dom = document.querySelector("#container") as HTMLElement;
      const myChart = proxy?.$echarts.init(dom);
      if (myChart) {
        myChart.setOption(getSimpleLineOptions());
      }
    });
  },
});
</script>

<style lang="scss" scoped>
.simple-line {
  display: flex;
  justify-content: center;
  align-items: center;

  #container {
    height: 350px;
    width: 500px;
  }
}
</style>
