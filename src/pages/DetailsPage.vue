<template>
  <div>
    <h1>This is an Details page</h1>
    <breadcrumbs></breadcrumbs>
  </div>
</template>

<script lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'details-page',
  components: {
  Breadcrumbs,
  }
})
</script>

<style>
</style>
