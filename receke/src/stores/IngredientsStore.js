//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useIngredientsStore = defineStore('IngredientsStore', {
  state: () => ({
    ingredients: [],
    selectedIngredients: [],
    categories: []
    //ingredients : parseInt(localStorage.getItem('ingredients') || [])
  }),
  getters: {},
  actions: {
    async fetchIngredients() {
      let response = await fetch('http://localhost:3001/ingredients')
      let ingredients = await response.json()
      this.ingredients = ingredients
    },

    async fetchCategories() {
      let response = await fetch('http://localhost:3001/categories')
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
