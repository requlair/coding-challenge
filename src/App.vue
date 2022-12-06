<template>
<v-app>

<v-toolbar border title="Application">
  <v-btn to="/">item1</v-btn>
  <v-btn to="/about">item2</v-btn>
  <v-btn>item3</v-btn>
</v-toolbar>

<RouterView />

</v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
</style>
