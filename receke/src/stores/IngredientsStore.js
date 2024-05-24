//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useIngredientsStore = defineStore('IngredientsStore', {  //el default
  state: () => ({   //data de default
    ingredients : [],
    //ingredients : parseInt(localStorage.getItem('ingredients') || []), //obtiene los ingredientes guardados en LocalStorage en futuro quitamos esto cuando pongamos usuarios
    // ingredientsToShow : [],
     categories: []
  }),
  getters: {

  },
  actions: {    //methods de default
    

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


})
