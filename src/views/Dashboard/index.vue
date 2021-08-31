<template>
  <div class="full-width full-height">
    <DashboardInstance></DashboardInstance>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DashboardInstance from '@/components/example/dashboard/index.vue'

export default defineComponent({
  name: 'dashboard',
  components: {
    DashboardInstance
  }
})
</script>
