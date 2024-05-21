<script>
import newStep from '../components/form/newStep.vue'
export default {
    props: {
        ingredients: Array,
    },
    components: {
        newStep,
    },
    data() {
        return {
           // ingredients: [],


            recipeName: '',

            selectedIngredients: [],
            steps: ["pasoDummy"],
            number: null,

            isActive: false,
        }
    },
    created() {
       
    },
    methods: {
        getSelectedIngredients(ingredientName) {
         console.log(ingredientName)
            // Compruebo que el ingrediente seleccionado existe en el array
            if(this.selectedIngredients.includes(ingredientName)) {
                // Si existe, analizo cada elemento para conocer en qué índice se encuenta y borrarlo
                this.selectedIngredients.forEach(ingredient => {
                    if(ingredient === ingredientName) {
                        let index = this.selectedIngredients.indexOf(ingredient)
                        this.selectedIngredients.splice(index, 1)
                    }
                });
                console.log(this.selectedIngredients)
            }else {
                // Si no existe, lo añado al array
                this.selectedIngredients.push(ingredientName)
                console.log(this.selectedIngredients)
            }
        }
    }
}
</script>

<template>
    <div class="query-nav">
        <button><router-link to="/"><img src="./src/assets/img/back-arrow.png"></router-link>  </button>
        <div>
            <h1>Contribuye con tu receta TEST</h1>
            <p>Aporta a la comunidad recetas fáciles con ingredientes sencillos</p>
        </div>
    </div>
    <form>
        <div class="form-block">
            <label for="recipe-name">Nombre de la receta</label>
            <input id="recipe-name" v-model="recipeName">
            <p>{{  recipeName }}</p>
        </div>
        <div class="form-block">
            <label for="recipe-name">Ingredientes básicos</label>
            <div class="cards-container" >
                <div class="ingredient-card" v-for="ingredient in ingredients" > 
                    <div class="ingredient-card-wrapper" @click="getSelectedIngredients(ingredient.name)" :key="ingredient.id" :class="isActive">
                        <img  :src="ingredient.image" :alt="ingredient.name">
                        <h3>{{ ingredient.name }}</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-block steps">
            <label for="steps">Pasos</label>
            
            <ol>
                <newStep v-for="(step, index) in steps" :key="number"
                :steps = "steps"
            />
            </ol>
            
            

        </div>
    </form>
</template>

<style>
</style>