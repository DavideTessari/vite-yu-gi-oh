<script>
import { store } from '../store.js';

export default {
    name: 'AppSearch',
    data() {
        return {
            store,
        };
    }
}
</script>

<template>
    <section class="app-search">
        <div class="container">
            
            <select v-model="store.archetype">
                <option value="">All Archetype</option>
                <!-- Scelte disponibili -->
                <option @click="$emit('searchPerfomed')"></option>
            </select>
        </div>
    </section>
</template>

<style scoped lang="scss">

.app-search {
    padding: 20px 0;

    input,
    select {
        padding: 10px 12px;
        font-size: 22px;
        margin-right: 10px;
    }
}
</style>