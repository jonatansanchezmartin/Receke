

<script>
import CategoriesFilter from "../components/CategoriesFilter.vue";
import IngredientsCards from "../components/IngredientsCards.vue";

export default {
    components: {
        CategoriesFilter,
        IngredientsCards
    }
}
</script>

<template>
    <CategoriesFilter />
    <IngredientsCards />
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