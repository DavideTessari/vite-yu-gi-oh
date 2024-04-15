<script>
export default {
  name: 'CharacterCard',
  props: {
    data: Object // Cambia il tipo di prop a Object anziché Array
  }
};
</script>

<template>
    <div class="character-card">
        <div class="image">
        <img :src="data.card_images[0].image_url_small" :alt="data.name" /></div>
        <h2>{{ data.name }}</h2>
        <div>{{ data.archetype }}</div>
    </div>
</template>

<style scoped lang="scss">
.character-card {
  width: calc((100% / 5) - 10px);
  text-align: center;
  margin: 10px 5px;

  .image {
    img {
      width: 100%;
    }
  }
}
</style>
