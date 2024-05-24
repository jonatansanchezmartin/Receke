<script>
export default {

    props:{

        recipesFiltered: Array,
    },
    
    data() {
        return {
          
        }
    },
   created() {
    
   },

   methods: {
    
   },

}
</script>

<template>
        
    <!-- Header logo, content & navigation -->

    <header class="header-logo">
      <img src="./src/assets/img/Receké.png" alt="Logo" >
    </header>

    <div class="query-nav">
        <button> <img src="./src/assets/img/back-arrow.png"> </button>
        <h1>¡Manos en la masa!</h1>
    </div>  

    <!-- Recipe cards -->

    <div class="recipes-container">      
       
            <div v-for="recipes in recipesFiltered" :key="recipeDisplayed">
                <button> 
                    <div class="recipe-card"> <img src={{ recipe.image }}  > </div>
                    <h2> Salteado de <br> champiñones</h2>
                </button>

            </div>
    </div>
               
    </template>

<style></style>