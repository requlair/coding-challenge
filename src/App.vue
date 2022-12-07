<template>
  <header class="header">
    <img alt="innspire-logo" src="./assets/images/innspire-logo.png"/>
  </header>

  <RouterView />

  <footer class="footer">
    <p>Naam</p>
    <p><a>link</a></p>
  </footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style lang="scss">
  .header{
    background-color: white;
    width: 100vw;

    img {
      display: block;
      width: 10%;
      padding: 5px;
    }
  }
  .footer{
    width: 100vw; 
  }
</style>
