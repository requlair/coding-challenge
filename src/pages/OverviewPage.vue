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
        <div v-for="movie in getOverview" class="col-4">
          <card
          :id="(movie.id as unknown as string)"
          :title="movie.title"
          :year="movie.year"
        />
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from 'vue';
import Card from '@/components/Card.vue';
import stateManagement from '@/composables/stateManagement';

export default defineComponent({
  name: 'overview-page',
  components: {
    Card,
  },
  setup () {
    const { loadingState, loadOverview, getOverview } = stateManagement();
    const { proxy } = getCurrentInstance();
    console.log(proxy.$route);
    onMounted( async () => {
      await loadOverview();
    })
    return {
      loadingState,
      getOverview,
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
