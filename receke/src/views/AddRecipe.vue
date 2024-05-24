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

      const newRecipe = {
        title: recipeName,
        instructions: steps,
        image: recipeImage,
        ingredients: [selectedIngredients]
      }

      console.log(newRecipe)
      this.postRecipe(newRecipe)
    }
  }
}
</script>

<template>
  <div class="query-nav">
    <button label="botón volver">
      <router-link to="/"><img src="../assets/img/back-arrow.png" /></router-link>
    </button>
    <div>
      <h1>Contribuye con tu receta TEST</h1>
      <p>Aporta a la comunidad recetas fáciles con ingredientes sencillos</p>
    </div>
  </div>
  <form @submit.prevent="createRecipe()">
    <div class="form-block">
      <div class="ingredients-title" for="recipe-name">Nombre de la receta</div>
      <input id="recipe-name" v-model="recipeName" />
    </div>
    <div class="form-block">
      <div class="ingredients-title" for="recipe-name">Ingredientes básicos</div>
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
    <div class="form-block recipe-steps-container">
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
    <div class="form-block">
      <div class="ingredients-title" for="recipe-img">Imagen de la receta</div>
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

<style></style>
