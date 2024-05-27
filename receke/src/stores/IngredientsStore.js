//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useIngredientsStore = defineStore('IngredientsStore', {
  state: () => ({
    ingredients: [],
    ingredientsToShow: [],
    selectedIngredients: [],
    categories: []
    //ingredients : parseInt(localStorage.getItem('ingredients') || [])
  }),
  actions: {
    async fetchIngredients() {
      let response = await fetch('http://localhost:3001/ingredients')
      let ingredients = await response.json()
      this.ingredients = ingredients
      this.ingredientsToShow = ingredients
    },
    async fetchCategories() {
      let response = await fetch('http://localhost:3001/categories')
      let categories = await response.json()
      this.categories = categories
    },
    toggleIngredient(id) {
      if (this.selectedIngredients.includes(id)) {
        this.selectedIngredients = this.selectedIngredients.filter(
          (ingredient) => ingredient !== id
        )
      } else {
        this.selectedIngredients.push(id)
      }
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