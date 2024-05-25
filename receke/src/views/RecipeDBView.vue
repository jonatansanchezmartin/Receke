<script>
    import { useRecipesStore } from '@/stores/RecipesStore';
    export default{
        data(){
            return{
                // Aquí dentro meto todas las variables que solo utilice en las funciones de aquí
                recipesStore : useRecipesStore(),
            }
        },
        methods: {
            // Aquí dentro meto todas las funciones que cree para usar aquí
            getRecipesById(){
                this.recipesStore.getRecipeById(this.$route.params.id)
            }
        }, 

        mounted() {
            this.getRecipesById()
        }, 
    }
</script>

<template>


        <header class="header-logo">
        <img src="./src/assets/img/Receké.png" alt="Logo" >
        </header>

        <!-- Recipe title -->


        <div class="recipe-nav">
            <button> <img src="./src/assets/img/back-arrow.png"> </button>
            <h1>{{ recipesStore.recipeSelected.title }}</h1>
        </div>  

        <!-- Recipe image -->
        
        <div class="recipe-image"> <img :src="recipesStore.recipeSelected.image" width="200"> </div>

        <h3 class="ingredients-title"> Ingredientes</h3>

        <!-- Ingredients list -->

        <div class="ingredients-list" v-for="(item, index) in recipesStore.recipeSelected.ingredients" :key="index">

            <div> 
                <!-- <img src="./src/assets/media/tomate.png"> -->
                <h4> {{ item.ingredient }}</h4>
            </div>

        </div>



        <!-- Ingredients -->


        <div class="steps-menu"> 
            <h3 class="ingredients-title"> Pasos</h3>
            <p>Ver pasos en pictogramas</p>
        </div>


        <div class="recipe-steps">
            <ol>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Batir los huevos</li>
            </ol>
        </div>






</template>
<style></style>