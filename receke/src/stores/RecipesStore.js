//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('RecipesStore', {
  //el default
  state: () => ({
    //data de default
    recipes: [],
    selectedRecipe: null,
    recipesFiltered: []
  }),
  getters: {},
  actions: {
    //methods de default

    // sube una receta a la base de datos
    async postRecipe(newRecipe) {
      const url = 'http://localhost:3001/recipes'
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRecipe)
      })

      window.location.reload()
    },

    //obtiene un listado de recetas de la base de datos
    async fetchRecipes() {
      let response = await fetch('http://localhost:3001/recipes')
      let recipes = await response.json()
      this.recipes = recipes
    },
    // marca como seleccionada una receta
    async setSelectedRecipe(recipe) {
      this.selectedRecipe = recipe
    },
    // filtra recetas por ingredientes seleccionados
    async filterRecipesByIngredients(recipes, selectedIngredients) {
      let recipesFiltered = recipes.filter((recipe) =>
        recipe.ingredients.some((ing) => selectedIngredients.includes(ing.ingredient))
      )
      return recipesFiltered
    }
  }
})
