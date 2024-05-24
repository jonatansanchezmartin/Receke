//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('RecipesStore', {  //el default
  state: () => ({   //data de default
    recipes : [],

    recipeName: '',

    selectedIngredients: [],
           

    steps: ["pasoDummy"],

    recipeImage: '',

    isActive: false,

    //ingredients : parseInt(localStorage.getItem('ingredients') || []), //obtiene los ingredientes guardados en LocalStorage en futuro quitamos esto cuando pongamos usuarios
  
     
  }),
  getters: {

  },
  actions: {    //methods de default
    

    
    async sendRecipe(recipeName, steps, selectedIngredients, recipeImage) {
      console.log(recipeName, steps, selectedIngredients, recipeImage)

      const newRecipe = {
          title: recipeName,
          instructions: steps,
          image: recipeImage,
          ingredients: [selectedIngredients]
      }

      console.log(newRecipe);

      const url = "http://localhost:3001/recipes";
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


})
