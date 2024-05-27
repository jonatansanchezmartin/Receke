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
      let response = await fetch('http://localhost:3001/recipes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      let recipes = await response.json()
      this.recipes = recipes
    },
    // marca como seleccionada una receta
    async setSelectedRecipe(recipe) {
      this.selectedRecipe = recipe
    },

    //   async filterRecipesByIngredients(recipes, selectedIngredients) {
    //     console.log("recipes", recipes) //test 1
    //     console.log("selectedIngredients", selectedIngredients) //test 2

    //         let recipesFiltered =
    //         recipes.filter(recipe => {
    //           console.log("antes de función recipe.ingredient", recipe["ingredients"])
    //           recipe.ingredients == (for ingredient of selectedIngredients)
    //         })

    //       console.log("despues de la funcion" ,recipesFiltered) //test 3

  // async filterRecipesByIngredients(recipes, selectedIngredients) {
  //   const matchingRecipes = []
  //   for (const recipe of recipes) {
  //     for (const recipeIngredient of recipe.ingredients) {
  //       for (const selectedIngredient of selectedIngredients) {
  //         if (selectedIngredient === recipeIngredient.ingredient){
  //           matchingRecipes.push(recipe)
  //         }
  //       }
  //     }
  //   }
  //   console.log()

  //   this.recipesFiltered = matchingRecipes

  // }

  async filterRecipesByIngredients(recipes, selectedIngredients) {
    console.log("esto es el array recipes", recipes); //test 1
    console.log("esto es el array selectedIngredients", selectedIngredients); //test 2
  
    let recipesFiltered = [];
    
    recipes.forEach(recipe => {
      let ingredientsFiltered = [];

      
      recipe.ingredients.forEach(
        objIng => {
          ingredientsFiltered.push(objIng.ingredient)
        }
      )

      console.log(ingredientsFiltered)
    
      
    let matchCount = ingredientsFiltered.filter(ing => selectedIngredients.includes(ing)).length;
      console.log("match", matchCount);
      if (matchCount >= 1) { 
        recipesFiltered.push({...recipe, count: matchCount});
      }
    });
    
    console.log(recipesFiltered);
  
    console.log("después de la función", recipesFiltered); //test 3
  
    this.recipesFiltered = recipesFiltered;
  
    console.log("después de asignar", this.recipesFiltered); //test 3
  },
}})
