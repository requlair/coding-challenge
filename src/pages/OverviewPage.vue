<template>
  <div>
    <section class="image-container">
      <img alt="steven-and-hank" src="../assets/images/steven-and-hank.jpg"/>
    </section>

    <section>
      <h1>The Steven Spielberg and Tom Hanks Movie App</h1>
      <h3>Find all the movies in which they worked together.</h3>
    </section>

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

    <div>

    </div>
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
.image-container{
  background-color: black;
  width: 100vw;
  img {
    display: block;
    width: 60%;
    margin: auto;
  }
}
</style>
