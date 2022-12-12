<template>
  <div>
    <header>
        <img alt="steven-and-hank" src="../assets/images/steven-and-hank.jpg"/>
    </header>

    <section class="container">
        <h1>The Steven Spielberg and Tom Hanks Movie App</h1>
        <h3>Find all the movies in which they worked together.</h3>
    </section>

    <section class="container">
        <LoadContainer class="row" :status="getLoadingState.movies" variant="card">
          <div v-for="movie in getMoviesState" :key="(movie.id as unknown as string)" class="col-4">
            <Card
            :id="(movie.id as unknown as string)"
            :title="movie.title"
            :year="movie.description"
            :image="movie.image"
            />
          </div>
        </LoadContainer>
    </section>

  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import Card from '@/components/Card.vue';
  import LoadContainer from '@/components/LoadContainer.vue';
  import stateManagement from '@/composables/stateManagement';
  const { getLoadingState, loadMovies, getMoviesState } = stateManagement();
  onMounted( async () => {
    await loadMovies();
  })
  defineExpose({
    getLoadingState,
    getMoviesState,
  })
</script>

<style lang="scss" scoped>
  header {
    background-color: black;
    margin: auto;
    img {
        display: block;
        max-width: 60%;
        margin: auto;
      }
    }
</style>
