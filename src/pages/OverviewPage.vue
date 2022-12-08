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
        <card
        image="https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg"
        title="Saving Private Ryan"
        :year=1998
        description="Here is a description about the Saving Private Ryan Movie"
      ></card>
      <card
        image="https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg"
        title="Saving Private Ryan"
        :year=1998
        description="Here is a description about the Saving Private Ryan Movie"
      ></card>
      <card
        image="https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg"
        title="Saving Private Ryan"
        :year=1998
        description="Here is a description about the Saving Private Ryan Movie"
      ></card>
    </section>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/Card.vue';

export default defineComponent({
  name: 'overview-page',
  components: {
    Card,
  },
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
