//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = import.meta.env.VITE_APP_BACKEND_URL
export const useIngredientsStore = defineStore('IngredientsStore', {
  state: () => ({
    ingredients: [],
    ingredientsToShow: [],
    selectedIngredients: JSON.parse(localStorage.getItem('selectedIngredients')) || [],
    categories: []
  }),
  actions: {
    async fetchIngredients() {
      const ingredients = await axios.get(`${baseUrl}/ingredients`)
      this.ingredients = ingredients
      this.ingredientsToShow = ingredients
    },
    async fetchCategories() {
      let categories = axios.get(`${baseUrl}/categories`)
      this.categories = categories
    },
    toggleIngredient(name) {
      if (this.selectedIngredients.includes(name)) {
        this.selectedIngredients = this.selectedIngredients.filter(
          (ingredient) => ingredient !== name
        )
      } else {
        this.selectedIngredients.push(name)
      }
      localStorage.setItem('selectedIngredients', JSON.stringify(this.selectedIngredients))
    },
    filterIngredients(category = 'all') {
      if (category === 'all') {
        this.ingredientsToShow = this.ingredients
      } else {
        this.ingredientsToShow = this.ingredients.filter(
          (ingredient) => ingredient.category === category
        )
      }
    }
  }
})