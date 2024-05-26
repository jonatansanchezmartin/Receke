//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const baseUrl = import.meta.env.VITE_APP_BACKEND_URL;
console.log("Hola", baseUrl);

export const useRecipesStore = defineStore('recipesStore', {  //el default
  state: () => ({   //data de default
    recipes : [],

    recipeSelected: {

    }

    // recipeName: '',

    // selectedIngredients: [],
           

    // steps: ["pasoDummy"],

    // recipeImage: '',

    // isActive: false,

    //ingredients : parseInt(localStorage.getItem('ingredients') || []), //obtiene los ingredientes guardados en LocalStorage en futuro quitamos esto cuando pongamos usuarios
  
     
  }),
  getters: {

  },
  actions: {    //methods de default
    
    async fetchRecipes() {
      let response = await fetch(`${baseUrl}/recipes`)
      let recipes = await response.json()
      this.recipes = recipes
    },

    async getRecipeById(id) {
      let response = await fetch(`${baseUrl}/recipes/${id}`)
      let recipes = await response.json()
      this.recipeSelected = recipes
    },

    async postRecipe(newRecipe){
      const url = `${baseUrl}/recipes`;
      await fetch(url, {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(newRecipe)
      })
      
      window.location.reload();
  }
}

    

  }


)
