<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <img alt="movie-image" :src="movieDetails?.image"/>
          </div>
          <div class="col-8">
            <h1>{{ movieDetails?.fullTitle }}</h1>
            <strong>{{ movieDetails?.plot }}</strong>
          </div>
        </div>
      </div>
    </header>

    <Breadcrumbs class="container"></Breadcrumbs>

    <section class="container">
      <div class="row">
        <div class="col-8">
          <div class="cast-block" v-for="cast in [
          { role: 'Director', persons: movieDetails?.directors },
          { role: 'Writer', persons: movieDetails?.writers },
          { role: 'Stars', persons: movieDetails?.stars}]" :key="cast.role">
            <strong>{{ cast.role }}:</strong>&nbsp;<p>{{ cast.persons }}</p>
          </div>
        </div>
        <div class="col-4">
          <div class="rating-block">
            <div class="imdb">
              <h4>IMDb Rating</h4>
              <span class="star"></span><strong>{{ movieDetails?.imDbRating }}</strong><span>/10</span>
            </div>
            <div class="time">
              <h4>Duration</h4>
              <span class="clock"></span><span>{{ movieDetails?.runtimeStr }}</span>
            </div>
            <div class="favourite">
              <h4>Favourite</h4>
              <button @click="changeFavState()">
                <span class="star" :class="{ selected: isMovieFav }"></span>
                <span>{{ isMovieFav ? 'Marked as favourite' : 'Mark as favourite' }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-12">
          <div class="trailer">
            <h1>Trailer</h1>
            <iframe :src="`https://www.youtube.com/embed/${movieDetails?.videoId}`"></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted } from 'vue';
  import Breadcrumbs from '@/components/Breadcrumbs.vue';
  import stateManagement from '@/composables/stateManagement';
  import loadingImage from '../assets/images/loading-image.jpg';
  import type { MovieDetails, MovieId } from '@/types'
  const props = defineProps({
    id: {
      type: String,
      require: true,
    }
  });
  const { getLoadingState, 
          getMovieDetailsState, 
          loadMovieDetails, 
          addFavourite, 
          removeFavourite, 
          getFavouritesState } = stateManagement();
  const movieDetails = computed(() => {
    if (getLoadingState.value.movieDetails === 'done') {
      return getMovieDetailsState.value.find(movie => movie.id as unknown as string === props.id);
    }
    return {
      id: 'loading' as unknown as MovieId,
      image: loadingImage,
      fullTitle: 'loading',
      plot: 'loading',
      directors: 'loading',
      writers: 'loading',
      stars: 'loading',
      imDbRating: '0',
      runtimeStr: '0h 0min',
      videoId: 'VBlFHuCzPgY',
    } as MovieDetails
  });
  const isMovieFav = computed(() => {
      return getFavouritesState.value.includes(props.id as unknown as MovieId);
  });
  const changeFavState = () => {
    if(getLoadingState.value.movieDetails === 'done' && getMovieDetailsState.value){
      if(isMovieFav.value) {
        removeFavourite(props.id as unknown as MovieId);
      }
      addFavourite(props.id as unknown as MovieId);
    }
  };
  onMounted( async () => {
    await loadMovieDetails(props.id as unknown as MovieId);
  })
  defineExpose({
    getLoadingState,
    movieDetails,
    isMovieFav,
    changeFavState,
  })
</script>

<style lang="scss" scoped>
  header {
    background-color: black;
    margin: auto;
    padding: 40px;
    img {
      max-width: 100%;
    }
    h1, strong {
      color: white
    }
  }
  .cast-block {
    border-radius: 10px;
    background-color: lightgrey;
    margin: 10px 0px 10px 0px;
    padding: 0px 15px 0px 15px;
    @media only screen and (max-width: 54em) {
      strong {
        font-size: 0.75rem;
      }
      p {
        font-size: 0.75rem;
      }
    }
    strong {
      display: inline-block;
    }
    p {
      display: inline-block;
    }
  }
  .rating-block {
    text-align: center;
    h4 {
        margin-bottom: 0px;
    }
    .imdb {
      .star:after {
        margin-right: 5px;
        color: orange;
        content: "\2605";
      }
    }
    .time {
      .clock:after {
        margin-right: 5px;
        content: "\1F552"
      }
    }
    .favourite {
      button {
        border: none;
        background-color: inherit;
      }
      .star:after {
          margin-right: 5px;
          color: orange;
          content: "\2606";
        }
      .selected:after {
        margin-right: 5px;
        color: orange;
        content: "\2605";
      }
    }
  }
  .trailer {
    border-radius: 10px;
    padding: 30px;
    background-color: lightgray;
    h1 {
      margin-top: 0px;
    }
    iframe {
      width: 100%;
      height: 480px;
      @media only screen and (max-width: 51.25em) {
            height: 300px;
      }
      @media only screen and (max-width: 54em) {
            height: 200px;
      }
    }
  }
</style>
