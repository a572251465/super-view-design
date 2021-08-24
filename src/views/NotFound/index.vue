<template>
  <div class="notFound">
    <img :src="workImg" alt="工作中" />
    <h3>沉迷学习中......</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import workImg from "@/assets/images/working.png";

export default defineComponent({
  name: "not-found",
  setup() {
    return {
      workImg,
    };
  },
});
</script>

<style lang="scss" scoped>
.notFound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #100c2a;

  img {
    width: 300px;
  }

  h3 {
    color: red;
    text-shadow: #eeeeee 5px 5px 5px;
    font-size: 40px;
  }
}
</style>
