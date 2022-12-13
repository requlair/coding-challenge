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
        <div class="row">
          <div class="col-12">
            <div class="selection-bar">
              <button
                :class="{ selected: selectedMovies === 'all' }"
                @click="setSelection('all')"
                value="all">All Movies
              </button>
              <button
                :class="{ selected: selectedMovies === 'fav' }"
                @click="setSelection('fav')"
                value="fav">Favourites
              </button>
            </div>
          </div>
        </div>
        <LoadContainer class="row" :status="getLoadingState.movies" variant="card">
          <div v-for="movie in movies" :key="(movie.id as unknown as string)" class="col-4">
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
  import { onMounted, ref, computed } from 'vue';
  import Card from '@/components/Card.vue';
  import LoadContainer from '@/components/LoadContainer.vue';
  import stateManagement from '@/composables/stateManagement';
  const { getLoadingState, loadMovies, getMoviesState, getFavouritesState } = stateManagement();

  const selectedMovies = ref('all');
  const setSelection = (value: 'all' | 'fav') => {
    selectedMovies.value = value;
  };
  const movies = computed(() => {
    if(selectedMovies.value === 'fav') {
      return getMoviesState.value.filter(movie => getFavouritesState.value.includes(movie.id));
    }
    return getMoviesState.value;
  });

  onMounted( async () => {
    await loadMovies();
  })
  defineExpose({
    selectedMovies,
    setSelection,
    getLoadingState,
    movies,
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
    .selection-bar {
      margin-bottom: 20px;
      :nth-child(1) {
        margin-right: 15px;
      }
      button {
        border: 1px solid lightgray;
        background-color: white;
        border-radius: 5px;
        padding: 10px;
      }
      .selected {
          border: 2px solid black;
          font-weight: bold;
      }
    }
</style>
