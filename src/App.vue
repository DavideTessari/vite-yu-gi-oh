<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CharactersList.vue';
import CharacterCard from './CharacterCard.vue';
import AppLoader from './components/AppLoader.vue';
import { store } from './store.js';

export default {
  name: 'CharactersList',
  components: {
    CharacterCard
  },
  data() {
    return {
      store,
      archetypes: [],
      selectedArchetype: '',
    };
  },
  computed: {
    filteredCards() {
      // Filtra le carte in base all'archetipo selezionato
      if (!this.selectedArchetype) {
        return this.store.cards;
      } else {
        return this.store.cards.filter(card => card.archetype === this.selectedArchetype);
      }
    }
  },
  methods: {
    fetchArchetypes() {
      // Ottieni la lista degli archetipi dall'API
      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then(response => {
          this.archetypes = response.data.data;
        });
    },
    filterByArchetype() {
      // Chiamata API per filtrare le carte per archetipo selezionato
      if (this.selectedArchetype) {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${this.selectedArchetype}&num=20&offset=0`)
          .then(response => {
            this.store.cards = response.data.data;
          });
      } else {
        // Se non è selezionato un archetipo, ripristina tutte le carte
        this.getCardFromApi();
      }
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
    this.fetchArchetypes();
    this.getCardFromApi(); 
  }
};
</script>

<template>
  <section class="characters-list">
    <div class="filter-container">
      <label for="archetypeSelect">Filtra per Archetipo:</label>
      <select id="archetypeSelect" v-model="selectedArchetype" @change="filterByArchetype">
        <option value="">Tutti gli Archetipi</option>
        <option v-for="archetype in archetypes" :key="archetype" :value="archetype">{{ archetype }}</option>
      </select>
    </div>
    <div class="container">
      <div class="characters-cards">
        <CharacterCard v-for="card in filteredCards" :key="card.id" :data="card" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.characters-list {
  .filter-container {
    margin-bottom: 20px;
  }
  .characters-cards {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
