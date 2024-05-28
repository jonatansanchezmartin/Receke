<script>
import newStep from '../components/form/newStep.vue'
import ingredientCard from '../components/form/ingredientCard.vue'

import { mapState, mapActions } from 'pinia'

import { useIngredientsStore } from '@/stores/IngredientsStore'
import { useRecipesStore } from '@/stores/RecipesStore'

export default {
  computed: {
    ...mapState(useIngredientsStore, ['ingredients', 'categories'])
  },

  components: {
    newStep,
    ingredientCard
  },

  data() {
    return {
      recipeName: '',
      selectedIngredients: [],

      steps: ['pasoDummy'],
      recipeImage: '',

      isActive: false
    }
  },
  created() {},
  methods: {
    ...mapActions(useRecipesStore, ['postRecipe']),

    addStep(descriptionStep) {
      this.steps.push(descriptionStep)
    },

    async createRecipe(recipeName, steps, selectedIngredients, recipeImage) {
      console.log(recipeName, steps, selectedIngredients, recipeImage)

      steps.shift();
      const newRecipe = {
        title: recipeName,
        instructions: steps,
        image: recipeImage,
        ingredients: selectedIngredients
      }

      console.log(newRecipe)
      this.postRecipe(newRecipe)
    }
  }
}
</script>

<template>
  
  <form  @submit.prevent="createRecipe()">
    <div class="form-block form-recipe-name">
      <label class="ingredients-title" for="recipe-name">Nombre de la receta</label>
      <input id="recipe-name" v-model="recipeName" />
    </div>
    <div class="form-block form-recipe-name">
      <label class="ingredients-title" for="recipe-name">Ingredientes básicos</label>
      <div class="cards-container">
        <ingredientCard
          v-for="ingredient in ingredients"
          :selectedIngredients="selectedIngredients"
          :ingredients="ingredients"
          :ingredient="ingredient"
          :key="ingredient.id"
        />
        <!-- <div class="ingredient-card"  > 
                </div> -->
      </div>
    </div>
    <div class="form-block recipe-steps-container form-recipe-name">
      <label for="steps">Pasos</label>

      <ol>
        <newStep
          v-for="step in steps"
          :key="step"
          :steps="steps"
          @add-step="(descriptionStep) => addStep(descriptionStep)"
        />
      </ol>
    </div>
    <div class="form-block form-recipe-name">
      <label class="ingredients-title" for="recipe-img">Imagen de la receta</label>
      <input id="recipe-img" v-model="recipeImage" />
    </div>
    <button
      class="send-button"
      type="button"
      @click="createRecipe(this.recipeName, this.steps, this.selectedIngredients, this.recipeImage)"
    >
      Enviar receta
    </button>
  </form>
</template>

<style>
    form .form-recipe-name input {
        background-color: #FAFAFA!important;
        border-radius: 10px;
        border: 1px solid #EFEFEF;
    }
</style>
