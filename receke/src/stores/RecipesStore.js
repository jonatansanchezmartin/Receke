//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('RecipesStore', {  //el default
  state: () => ({   //data de default
    recipes : [],
    //ingredients : parseInt(localStorage.getItem('ingredients') || []), //obtiene los ingredientes guardados en LocalStorage en futuro quitamos esto cuando pongamos usuarios
  
     
  }),
  getters: {

  },
  actions: {    //methods de default
    // increment() {
    //   this.count++
    //   localStorage.setItem('count', this.count)
    // }, 
    // decrement() {
    //   this.count--
    //   localStorage.setItem('count', this.count)
    // }

    


    

  }


  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }
})
