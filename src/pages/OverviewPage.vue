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
        <load-container class="row" :status="getLoadingState.movies" variant="card">
          <div v-for="movie in getMoviesState" class="col-4">
            <card
            :id="(movie.id as unknown as string)"
            :title="movie.title"
            :year="movie.description"
            :image="movie.image"
            />
          </div>
        </load-container>
    </section>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Card from '@/components/Card.vue';
import LoadContainer from '@/components/LoadContainer.vue';
import stateManagement from '@/composables/stateManagement';

export default defineComponent({
  name: 'overview-page',
  components: {
    Card,
    LoadContainer,
  },
  setup () {
    const { getLoadingState, loadMovies, getMoviesState } = stateManagement();
    onMounted( async () => {
      // await loadMovies();
    })
    return {
      getLoadingState,
      getMoviesState,
    }
  }
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
