//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useIngredientsStore = defineStore('IngredientsStore', {
  state: () => ({
    ingredients: [],
    categories: []
    //ingredients : parseInt(localStorage.getItem('ingredients') || [])
  }),
  getters: {},
  actions: {
    // increment() {
    //   this.count++
    //   localStorage.setItem('count', this.count)
    // },
    // decrement() {
    //   this.count--
    //   localStorage.setItem('count', this.count)
    // }

    async fetchIngredients() {
      let response = await fetch('http://localhost:3001/ingredients')
      let ingredients = await response.json()
      this.ingredients = ingredients
    },

    async fetchCategories() {
      let response = await fetch('http://localhost:3001/categories')
      let categories = await response.json()
      this.categories = categories
    }
  }

  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }
})
