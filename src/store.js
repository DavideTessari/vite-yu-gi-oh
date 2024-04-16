import { reactive } from "vue";

export const store = reactive({
    archetypes: [],
    isLoading: true,
    searchedArchetype: ''
});