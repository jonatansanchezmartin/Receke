<script>
import newStep from '../components/form/newStep.vue'
import ingredientCard from '../components/form/ingredientCard.vue'
export default {
    props: {
        ingredients: Array,
    },
    components: {
        newStep,
        ingredientCard,
    },
    data() {
        return {
           // ingredients: [],


            recipeName: '',

            selectedIngredients: [],
           

            steps: ["pasoDummy"],

            recipeImage: '',

            isActive: false,

        }
    },
    created() {
       
    },
    methods: {

        addStep(descriptionStep) {
            this.steps.push(descriptionStep)
        },
        
        async sendRecipe(recipeName, steps, selectedIngredients, recipeImage) {
            console.log(recipeName, steps, selectedIngredients, recipeImage)

            const newRecipe = {
                title: recipeName,
                instructions: steps,
                image: recipeImage,
                ingredients: [selectedIngredients]
            }

            console.log(newRecipe);

            const url = "http://localhost:3001/recipes";
            await fetch(url, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRecipe)
            })
            
            window.location.reload();
        }
    }
}
</script>

<template>
   
    <button><router-link to="/"><img src="./src/assets/img/back-arrow.png"></router-link>  </button>
        
    <form class="form-recipe-name" @submit.prevent="sendRecipe()">
        <div class="form-block">
            <div class="ingredients-title" for="recipe-name">Nombre de la receta</div>
            <input id="recipe-name" v-model="recipeName">
        </div>
        <div class="form-block">
            <div class="ingredients-title" for="recipe-name">Ingredientes básicos</div>
            <div class="cards-container" >
                
                    <ingredientCard v-for="ingredient in ingredients"
                        :selectedIngredients = "selectedIngredients"
                        :ingredients = "ingredients"
                        :ingredient = "ingredient"
                        :key = "ingredient.id"
                    />
                   
            </div>
        </div>
        <div class="form-block recipe-steps-container">
            <label for="steps">Pasos</label>
            
            <ol>
                <newStep v-for="step in steps" :key="step"
                :steps = "steps"
                @add-step="(descriptionStep) => addStep(descriptionStep)"
            />
            </ol>
            
        </div>
        <div class="form-block">
            <div class="ingredients-title" for="recipe-img">Imagen de la receta</div>
            <input id="recipe-img" v-model="recipeImage">
        </div>
        <button class="send-button" type="button" @click="sendRecipe(this.recipeName, this.steps, this.selectedIngredients, this.recipeImage)">Enviar receta</button>
    </form>
</template>

<style>

</style>