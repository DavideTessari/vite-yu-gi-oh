<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CharactersList.vue';
import AppLoader from './components/AppLoader.vue';

export default {
  components: {
    AppHeader,
    CharactersList,
    AppLoader
  },
  data() {
    return {
      store
    };
  },
  methods: {
    getCharactersFromApi() {
      // Prende i personaggi dall'api e popola lo store
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
      .then((response) => {
        store.characters = response.data.results;
        store.isLoading = false;
      });
    }
  },
  mounted() {
    this.getCharactersFromApi();
  }
}
</script>

<template>
  <AppHeader></AppHeader>

  <main>
    <CharactersList v-if="!store.isLoading"></CharactersList>
    <AppLoader v-else></AppLoader>
  </main>
</template>

<style lang="scss">
@use './style/generic';
</style>