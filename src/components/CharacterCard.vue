<script>
export default {
    name: 'CharacterCard',
    props: {
        characterInfo: Object
    }
}
</script>

<template>
    <div class="character-card">
        <div class="image">
            <img :src="characterInfo.image" :alt="characterInfo.name">
        </div>

        <h2>{{ characterInfo.name }}</h2>
        <div>{{ characterInfo.status }}</div>
        <div>{{ characterInfo.species }}</div>
    </div>
</template>

<style scoped lang="scss">
.character-card {
    width: calc((100% / 4) - 10px);
    text-align: center;
    margin: 10px 5px;

    .image {
        img {
            width: 100%;
            border-radius: 50%;
        }
    }
}
</style>