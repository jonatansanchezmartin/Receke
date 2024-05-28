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
        <h1>¡Manos en la masa!</h1>
    </div>
    <!-- Recipe cards -->

    <div class="recipes-container">


        <button class="recipe-card" 
        v-for="recipe in recipesFiltered" 
        :key="recipe.id"
        
        @click="selectRecipe(recipe)">

            <router-link :to="`/recipe-view/${recipe.id}`">

               <div :class="{ 'bg-green': recipe.matchAll === true }">
                    <div class="image-container"  > 
                    <img :src="recipe.image" :alt="`${recipe.title}`" >
                    </div>

                    <h3 style="color:var(--receke-black)"  >{{ recipe.title }}</h3>
                    <p v-if="recipe.matchAll === true">Tienes todos los Ingredientes</p>
                    <p v-else-if="recipe.count === 1">Tienes {{ recipe.count }} ingrediente</p>
                    <p v-else>Tienes {{ recipe.count }} ingredientes</p>
                </div>

                


            </router-link>

        </button>


    </div>

</template>

<style>
.bg-green p {
    color: var(--receke-green-100) ;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 4/3;
    width: 150px ;
    overflow: hidden;
}

.image-container img {
    width: auto;
    height: 100%;
    object-fit: cover;
}
.recipes-container .recipe-card {
    height: initial;
}

</style>