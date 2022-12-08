<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <img alt="movie-image" src="https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg"/>
          </div>
          <div class="col-8">
            <h1>Saving Private Ryan (1998)</h1>
            <strong>Here is a description about the Saving Private Ryan Movie</strong>
          </div>
        </div>

      </div>
    </header>

    <section class="container">
      <breadcrumbs></breadcrumbs>
      <h1>This is an Details page</h1>
    </section>
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
</style>
