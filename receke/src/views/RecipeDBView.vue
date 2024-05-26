<script>
import { mapState, mapActions } from "pinia";
import { useIngredientsStore } from '@/stores/IngredientsStore';
import { useRecipesStore } from '@/stores/RecipesStore';
export default {
    methods: {
        ...mapActions(useRecipesStore, ['getRecipeById']),
        getImage(ingredient) {
            console.log('received', ingredient)
            const ingredientMatch = this.ingredients.find((item) => item.name === ingredient)
            return ingredientMatch.image
        }
    },
    computed: {
        ...mapState(useRecipesStore, ['recipeSelected']),
        ...mapState(useIngredientsStore, ['ingredients'])
    },
    mounted() {
        this.getRecipeById(this.$route.params.id)
    }
}
</script>

<template>

    <header class="header-logo">
        <img src="./src/assets/img/Receké.png" alt="Logo">
    </header>

    <!-- Recipe title -->
    <div class="recipe-nav">
        <button> <img src="./src/assets/img/back-arrow.png"> </button>
        <h1>{{ recipeSelected.title }}</h1>
    </div>

    <!-- Recipe image -->
    <div class="recipe-image"> <img :src="recipeSelected.image" width="250"> </div>
    <h3 class="ingredients-title"> Ingredientes</h3>

    <!-- Ingredients list -->
    <div class="ingredients-list" v-for="(item, index) in recipeSelected.ingredients" :key="index">
        <div>
            <img :src="getImage(item.ingredient)">
            <h4> {{ item.ingredient }} {{ item.quantity }}</h4>
        </div>
    </div>

    <!-- Ingredients -->
    <div class="steps-menu">
        <h3 class="ingredients-title"> Pasos</h3>
        <p>Ver pasos en pictogramas</p>
    </div>

    <div class="recipe-steps">
        <ol>
            <li v-for="(step, index) in recipeSelected.instructions" :key="index"> {{ step }} </li>
        </ol>
    </div>

</template>
<style></style>