//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useIngredientsStore = defineStore('IngredientsStore', {
  state: () => ({
    ingredients : []
    //ingredients : parseInt(localStorage.getItem('ingredients') || []), //obtiene los ingredientes guardados en LocalStorage en futuro quitamos esto cuando pongamos usuarios
    // ingredientsToShow : [],
    // category: []
  }),
  getters: {

  },
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

  }


  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }
})
