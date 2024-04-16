<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CharactersList.vue';
import AppSearch from './components/AppSearch.vue';
import AppLoader from './components/AppLoader.vue';
import { store } from './store.js';

export default {
  components: {
    AppHeader,
    CharactersList,
    AppLoader,
    AppSearch
  },
  data() {
    return {
      store,
      archetypes: []
    };
  },
  methods: {
    getArchetypeFromApi() {
      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then(response => {
          this.archetypes = response.data.data;
        });
    },
    getCardFromApi() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then(response => {
          this.store.cards = response.data.data; 
          this.store.isLoading = false;
        });
    }
  },
  mounted() {
    this.getCardFromApi();
    this.getArchetypeFromApi();
  }
};
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <AppSearch @searchPerformed="getArchetypeFromApi"></AppSearch>
      <CharactersList v-if="!store.isLoading" />
      <AppLoader v-else />
    </main>
  </div>
</template>

<style lang="scss">
@use './style/generic';
</style>
