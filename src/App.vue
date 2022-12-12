<template>
  <header>
    <div>
      <img alt="innspire-logo" src="./assets/images/innspire-logo.png"/>
    </div>
  </header>

  <RouterView/>

  <footer>
    <div>
      <span>Auteur</span>
      <span>Email</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>
  header{
    background-color: white;
    img {
      display: block;
      width: 10%;
      padding: 5px;
    }
  }
  footer{
    background-color: lightgray;
    position: sticky;
    top: 100%;
  }
  header, footer {
    div {
      max-width: 60rem;
      margin: auto;
    }
  }
</style>
