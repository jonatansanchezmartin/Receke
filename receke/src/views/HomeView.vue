<script>
import CategoriesFilter from "../components/CategoriesFilter.vue";
import IngredientsCards from "../components/IngredientsCards.vue";
import { mapState, mapActions } from "pinia";
import { useIngredientsStore } from '@/stores/IngredientsStore'

export default {
    computed: {
        ...mapState(useIngredientsStore, ['ingredients', 'ingredientsToShow', 'categories', 'filterByCategory']),
    },
    components: {
        CategoriesFilter,
        IngredientsCards
    },
    methods: {
        ...mapActions(useIngredientsStore, ['filterIngredients']),
    }
}
</script>

<template>
    <CategoriesFilter :categories="categories" />
    <IngredientsCards :ingredients="ingredientsToShow" />
    <!-- Fixed Menu -->
    <div class="fixed-menu">
        <router-link to="/query-recipes">
            <button class="search-button">
                <h3> Buscar recetas</h3>
            </button>
        </router-link>
        <router-link to="/add-recipe">
            <button class="add-button">
                <h3> Añadir recetas</h3>
            </button>
        </router-link>
    </div>

</template>

<style></style>