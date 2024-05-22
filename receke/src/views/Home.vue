<script>
import Categories from "../components/Categories.vue";
import Ingredients from "../components/Ingredients.vue";

export default {
    props: {
        ingredients: Array,
        categories: Array
    },
    components: {
        Categories,
        Ingredients
    }
}
</script>

<template>
        <Categories :categories="categories"/>
        <Ingredients :ingredients="ingredients"/>

        <!-- Fixed Menu -->
        <div class="fixed-menu">
            <button class="search-button"> <h3> Buscar recetas</h3> </button>
            <router-link to="/add-recipe"><button class="add-button"> <h3> Añadir recetas</h3> </button></router-link>
        </div>

</template>

<style></style>