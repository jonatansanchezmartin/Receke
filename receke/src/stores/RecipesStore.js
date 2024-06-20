//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useIngredientsStore } from '@/stores/IngredientsStore'
import { mapState } from 'pinia'
import axios from 'axios'
const baseUrl = import.meta.env.VITE_APP_BACKEND_URL
//console.log("Hola", baseUrl);

export const useRecipesStore = defineStore('recipesStore', {
  //el default
  state: () => ({
    //data de default
    recipes: JSON.parse(localStorage.getItem('recipes')) || [],
    recipesFiltered: JSON.parse(localStorage.getItem('recipesFiltered')) || [],
    recipeSelected: {}
    // recipeName: '',

    // selectedIngredients: [],

    // steps: ["pasoDummy"],

    // recipeImage: '',

    // isActive: false,

    //ingredients : parseInt(localStorage.getItem('ingredients') || []), //obtiene los ingredientes guardados en LocalStorage en futuro quitamos esto cuando pongamos usuarios
  }),
  getters: {
    ...mapState(useIngredientsStore, ['ingredients'])
  },
  actions: {
    //methods de default

    async fetchRecipes() {
      let recipes = await axios.get(`${baseUrl}/recipes`)
      localStorage.setItem('recipes', JSON.stringify(recipes))
      this.recipes = recipes
    },

    async getRecipeById(id) {
      let recipe = await axios.get(`${baseUrl}/recipes/${id}`)

      //Get the image of the ingredient from the ingredients store
      const recipeIngredientsWithImage = await Promise.all(
        recipe.ingredients.map(async (ingredient) => {
          return {
            ...ingredient,
            image: await this.getIngredientImage(ingredient.ingredient)
          }
        })
      )

      recipe.ingredients = recipeIngredientsWithImage

      this.recipeSelected = await recipe
    },

    async getIngredientImage(ingredient) {
      try {
        const ingredientMatch = await this.ingredients.find((item) => item.name === ingredient)
        return ingredientMatch.image
      } catch (error) {
        console.error(error)
      }
    },

    async postRecipe(newRecipe) {
      await axios.post(`${baseUrl}/recipes`, newRecipe)
    },

    async editRecipe(id, evaluation){
      await axios.put(`${baseUrl}/recipes/${id}`, evaluation)
    },

    async deleteRecipe(id) {
      await axios.delete(`${baseUrl}/recipes/${id}`)
    },

    //obtiene un listado de recetas de la base de datos

    // marca como seleccionada una receta
    // async setSelectedRecipe(recipe) {
    //   this.selectedRecipe = recipe
    // },

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
      //console.log('inside filterRecipesByIngredients')
      //console.log("esto es el array recipes", recipes);
      //console.log("esto es el array selectedIngredients", selectedIngredients);

      let recipesFiltered = []

      recipes.forEach((recipe) => {
        let ingredientsFiltered = []

        recipe.ingredients.forEach((objIng) => {
          ingredientsFiltered.push(objIng.ingredient)
        })

        let matchCount = ingredientsFiltered.filter((ing) =>
          selectedIngredients.includes(ing)
        ).length
        //console.log("match", matchCount);
        if (matchCount === ingredientsFiltered.length) {
          recipesFiltered.push({ ...recipe, count: matchCount, matchAll: true })
        } else if (matchCount >= 1) {
          recipesFiltered.push({ ...recipe, count: matchCount, matchAll: false })
        }
      })

      recipesFiltered.sort((a, b) => b.count - a.count)

      //console.log('después de la función', recipesFiltered) //test 3

      localStorage.setItem('recipesFiltered', JSON.stringify(recipesFiltered))
      this.recipesFiltered = recipesFiltered

      //console.log("después de asignar", this.recipesFiltered); //test 3
    }
  }
})
