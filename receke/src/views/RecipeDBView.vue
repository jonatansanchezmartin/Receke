<script>
import { mapState, mapActions } from "pinia";
import { useIngredientsStore } from '@/stores/IngredientsStore';
import { useRecipesStore } from '@/stores/RecipesStore';
export default {
    methods: {
        ...mapActions(useRecipesStore, ['getRecipeById']),
        getIngredientImage(ingredient) {
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
    <!-- <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Receké</title>
    <link rel="stylesheet" type="text/css" href="./src/assets/main.css">
    </head>


    <body>
    <div id="app"> -->

        <!-- Header logo, content & navigation -->
<!-- 
    <header class="header-logo">
        <img src="./src/assets/img/Receké.png" alt="Logo">
    </header> -->

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
            <img :src="getIngredientImage(item.ingredient)">
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