<script>
import { mapState } from 'pinia';
import { useIngredientsStore } from '@/stores/IngredientsStore.js'

export default {
    computed: {
        ...mapState(useIngredientsStore, ['ingredients','categories'])
    },
    

    data() {
        return {
          
        }
    },
   created() {
     this.test()
   },

   methods: {
    async test (){
        console.log("estoy aqui")
     }
   },

}
</script>

<template>
        
    <!-- Header logo, content & navigation -->

    <header class="header-logo">
      <img src="../assets/img/Receke.png" alt="Logo" >
    </header>

    <div class="query-nav">
        <button><router-link to="/"><img src="../assets/img/back-arrow.png"></router-link>  </button>
        <h1>¡Manos en la masa!</h1>
    </div>  

    <!-- Recipe cards -->

    <div class="recipes-container">      
       
            <!-- <div v-for="recipes in recipesFiltered" :key="recipeDisplayed"> -->
                <button> 
                    <div class="recipe-card"> <img src=''> </div>
                    <h2> Salteado de <br> champiñones</h2>
                </button>

            <!-- </div> -->
    </div>
               
    </template>

<styles>
</styles>