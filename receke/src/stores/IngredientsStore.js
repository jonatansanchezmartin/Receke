//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const baseUrl = import.meta.env.VITE_APP_BACKEND_URL;
console.log("Hola", baseUrl);

export const useIngredientsStore = defineStore('IngredientsStore', {
  state: () => ({
    ingredients: [],
    selectedIngredients: [],
    categories: [],
    recipes: []
    //ingredients : parseInt(localStorage.getItem('ingredients') || [])
  }),
  getters: {},
  actions: {
    async fetchIngredients() {
      let response = await fetch(`${baseUrl}/ingredients`)
      let ingredients = await response.json()
      this.ingredients = ingredients
    },

    async getIngredientById(){
      console.log(`${baseUrl}/ingredients/1`)
      let response = await fetch(`${baseUrl}/ingredients/1`)
      let ingredient = await response.json()
      return ingredient
    },

    async fetchCategories() {
      let response = await fetch(`${baseUrl}/categories`)
      let categories = await response.json()
      this.categories = categories
    },



    toggleIngredient(id) {
      if (this.selectedIngredients.includes(id)) {
          this.selectedIngredients = this.selectedIngredients.filter(ingredient => ingredient !== id)
      } else {
          this.selectedIngredients.push(id)
      } 
  }
  }

})
