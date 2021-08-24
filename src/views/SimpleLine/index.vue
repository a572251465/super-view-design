<template>
  <div class="full-width full-height">
    <SimpleLine></SimpleLine>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SimpleLine from "@/components/example/SimpleLine/index.vue";

export default defineComponent({
  name: "simple-line",
  components: {
    SimpleLine,
  },
});
</script>
