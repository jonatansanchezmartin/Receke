<script>
    export default{
        data(){
            return{
                // Aquí dentro meto todas las variables que solo utilice en las funciones de aquí
            }
        },
        methods: {
            // Aquí dentro meto todas las funciones que cree para usar aquí
        }, 
    }
</script>

<template>


        <header class="header-logo">
        <img src="./src/assets/img/Receké.png" alt="Logo" >
        </header>

        <div class="recipe-nav">
            <button> <img src="./src/assets/img/back-arrow.png"> </button>
            <h1>Salteado de champiñones</h1>
        </div>  

        <!-- Recipe image -->
        
        <div class="recipe-image"> <img src =""> </div>

        <h3 class="ingredients-title"> Ingredientes</h3>

        <!-- Ingredients list -->

        <div class="ingredients-list">

            <div> 
                <img src="./src/assets/media/tomate.png">
                <h4> Tomate</h4>
            </div>

            <div class="ingredients-card"> 
                <img src="./src/assets/media/berenjena.png">
                <h4> Berenjena</h4>
            </div>

        </div>

        <div class="ingredients-list">

            <div> 
                <img src="./src/assets/media/espinacas.png">
                <h4> Acelgas</h4>
            </div>

            <div class="ingredients-card"> 
                <img src="./src/assets/media/zanahoria.png">
                <h4> Zanaoria</h4>
            </div>

        </div>

        <!-- Ingredients -->


        <div class="steps-menu"> 
            <h3 class="ingredients-title"> Pasos</h3>
            <p>Ver pasos en pictogramas</p>
        </div>


        <div class="recipe-steps">
            <ol>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Batir los huevos</li>
            </ol>
        </div>






</template>
<style></style>