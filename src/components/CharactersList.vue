<script>
import { store } from '../store.js';
import CharacterCard from './CharacterCard.vue';

export default {
  name: 'CharactersList',
  components: {
    CharacterCard
  },
  data() {
    return {
      store
    };
  }
};
</script>

<template>
  <section class="characters-list">
    <div class="container">
      <div class="characters-cards">
        <CharacterCard v-for="card in store.cards" :key="card.id" :data="card" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.characters-list {
  .characters-cards {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
