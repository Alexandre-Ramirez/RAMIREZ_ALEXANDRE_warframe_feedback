<script setup></script>

<template>
  <nav>
    <router-link to="/">Warframe</router-link>
    <router-link to="/news">News</router-link>
    <router-link to="/:id/feedback">Avis</router-link>
  </nav>
  <router-view />
</template>

<style scoped>

</style>
