<script>
import { mapState, mapActions } from 'pinia';
import { useIngredientsStore } from '@/stores/IngredientsStore.js'
import { useRecipesStore } from '@/stores/RecipesStore';

export default {
    computed: {
        ...mapState(useIngredientsStore, ['ingredients', 'categories', 'selectedIngredients']),
        ...mapState(useRecipesStore, ['recipes', 'selectedRecipe', 'recipesFiltered'])
    },
    

    data() {
        return {
            //recipesFiltered: []
    }
},
    created() {
        this.test()
        this.fetchRecipes().then(() => {
            this.filterRecipesByIngredients(this.recipes, this.selectedIngredients)
        })
        //this.filterRecipesByIngredients(this.recipes,this.selectedIngredients)
    },
    // watch: {
    //     recipes: {
    //         handler() {
    //             this.filterRecipesByIngredients(this.recipes,this.selectedIngredients)
    //         },
    //         immediate: true
    //     },
        
    // },

    methods: {
        // ...mapActions(useIngredientsStore,)
        ...mapActions(useRecipesStore, ['fetchRecipes', 'filterRecipesByIngredients']),

        //testeo de que funciona
        async test() {
            // console.log("estoy aqui")
            // console.log("ingredientes Seleccionados" , this.selectedIngredients)
            // console.log("todas las recetas" , this.recipes)
            // console.log("resultado del filtrado" , this.recipesFiltered)
        },



        //Función para filtrar recetas por ingredientes seleccionados
        // async filterRecipesByIngredients(recipes, selectedIngredients) {
        //     let recipesFiltered =
        //     recipes.filter(recipe =>
        //         recipe.ingredients.some(ing =>
        //             selectedIngredients.includes(ing.ingredient)
        //         )
        //     );
        //     console.log(recipesFiltered) //test 1 

        // },

        // async getImagePath(recipe) {

        //     return `http://localhost:3001/recipes/${recipe.id}`;
        // },

        selectRecipe(recipe) {
            this.$store.recipes.setSelectedRecipe(recipe);


       
    } 

    }
}


</script>

<template>

    <div class="query-nav">
        <button><router-link to="/"><img src="../assets/img/back-arrow.png"></router-link> </button>
        <h1>Aquí tienes algunas sugerencias</h1>
    </div>

    <!-- Recipe cards -->

    <div class="recipes-container">

        <div class="recipes-container">
            <div v-for="recipe in recipesFiltered" :key="recipe.id" class="recipe-card" :class="{ 'bg-green': recipe.matchAll === true }">
                <router-link :to="`/recipe-view/${recipe.id}`">
                <button @click="selectRecipe(recipe)">
                  
                    <img :src="recipe.image" :alt="`${recipe.title}`" width="50">
                    <h2>{{ recipe.title }}</h2>
                    <p v-if="recipe.matchAll === true">Tienes todo</p>
                    <p v-else-if="recipe.count === 1">Tienes {{ recipe.count }} ingrediente</p>
                    <p v-else >Tienes {{ recipe.count }} ingredientes</p>
                </button>
            </router-link>
            </div>
        </div>

    </div>

</template>

<style>
    .bg-green {
        background-color: green;
    }
</style>