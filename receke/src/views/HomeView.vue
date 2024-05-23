<script>
import CategoriesFilter from "../components/CategoriesFilter.vue";
import IngredientsCards from "../components/IngredientsCards.vue";
import { mapState } from "pinia";
import { useIngredientsStore } from '@/stores/IngredientsStore'

export default {
    computed: {
        ...mapState(useIngredientsStore, ['ingredients', 'categories']),
    },
    components: {
        CategoriesFilter,
        IngredientsCards
    },
    methods: {
        filterIngredients(category) {
            if (category === 'all') {
                this.ingredientsToShow = this.ingredients
                return
            }
            this.ingredientsToShow = this.ingredients.filter((ingredient) => ingredient.category === category)
        }
    },
    data() {
        return {
            ingredientsToShow: []
        }
    },
    //When ingredients is created, populate filteredIngredients
    watch: {
        ingredients: {
            handler() {
                this.ingredientsToShow = this.ingredients
            },
            immediate: true
        }
    }
}
</script>

<template>
    <CategoriesFilter :categories="categories" @filter-ingredients="filterIngredients" />
    <IngredientsCards :ingredients="ingredientsToShow" />
    <!-- Fixed Menu -->
    <div class="fixed-menu">
        <button class="search-button">
            <h3> Buscar recetas</h3>
        </button>
        <router-link to="/add-recipe"><button class="add-button">
                <h3> Añadir recetas</h3>
            </button></router-link>
    </div>

</template>

<style></style>