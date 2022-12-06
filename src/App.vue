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
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import getMovieDetails from './services/getMovieDetails';
import getMoviesByIdAndRole from './services/getMoviesByIdAndRole';
import getPersonIdByName from './services/getPersonIdByName';
import type { MovieId } from './types';
import { getDuplicateById } from './utils/utilities';
onMounted( async () => {
  const id1 = await getPersonIdByName('Tom Hanks');
  const id2 = await getPersonIdByName('Steven Spielberg');
  const movies1 = await getMoviesByIdAndRole(id1, 'Actor');
  const movies2 = await getMoviesByIdAndRole(id2, 'Director');
  const movies = getDuplicateById(movies2, movies1);
  const detail = await getMovieDetails('tt0120815' as unknown as MovieId);

  console.log(movies);
  console.log(detail);
})
</script>

<style scoped>
</style>
