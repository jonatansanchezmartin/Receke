<script>
import CategoriesFilter from "../components/CategoriesFilter.vue";
import IngredientsCards from "../components/IngredientsCards.vue";

export default {
    props: {
        ingredients: Array,
        categories: Array
    },
    components: {
        CategoriesFilter,
        IngredientsCards
    }
}
</script>

<template>
        <CategoriesFilter :categories="categories"/>
        <IngredientsCards :ingredients="ingredients"/>

        <!-- Fixed Menu -->
        <div class="fixed-menu">
            <button class="search-button"> <h3> Buscar recetas</h3> </button>
            <router-link to="/add-recipe"><button class="add-button"> <h3> Añadir recetas</h3> </button></router-link>
        </div>

</template>

<style></style>