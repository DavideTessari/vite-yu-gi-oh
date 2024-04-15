<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CharactersList.vue';
import AppLoader from './components/AppLoader.vue';
import { store } from './store.js';

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
    getCardFromApi() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then((response) => {
          this.store.cards = response.data.data; 
          this.store.isLoading = false;
        });
    },
  },
  mounted() {
    this.getCardFromApi();
  }
};
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <CharactersList v-if="!store.isLoading" />
      <AppLoader v-else />
    </main>
  </div>
</template>

<style lang="scss">
@use './style/generic';
</style>
