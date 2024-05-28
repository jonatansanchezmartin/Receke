<script>
import { mapState, mapActions } from "pinia";
import { useIngredientsStore } from '@/stores/IngredientsStore';
import { useRecipesStore } from '@/stores/RecipesStore';
import NavComponent from '@/components/NavComponent.vue';

export default {
    data() {
        return {
            stars: '',
        }
    },
    methods: {
        ...mapActions(useRecipesStore, ['getRecipeById','editRecipe']),
        getIngredientImage(ingredient) {
            const ingredientMatch = this.ingredients.find((item) => item.name === ingredient)
            return ingredientMatch.image
        },
        selectStars(star) {
            // Paso el valor de la estrella seleccionada
            this.stars = star;
            // Paso los parámetros de id de la receta, los de la evaluación actual y el del nuevo valor de estrella
            this.sendStars(this.recipeSelected.id, this.recipeSelected.evaluation, this.stars)
        },
        sendStars(id, evaluation, stars) {
            // Función para enviar las estrellas
            // Acumulo en un array los nuevos valores a partir de los datos que ya existan
            let evaluationArray = [...evaluation];
            evaluationArray.push(stars)

            // Creo el nuevo objeto con los valores de la receta
            const edited = {...this.recipeSelected, evaluation: evaluationArray}
            console.log(edited);

            // Utilizo la función del store de editar receta
            this.editRecipe(id, edited)
        },
        showEvaluation(){
            console.log(this.recipeSelected.evaluation)
        }
    },
    computed: {
        ...mapState(useRecipesStore, ['recipeSelected']),
        ...mapState(useIngredientsStore, ['ingredients'])
    },
    mounted() {
        this.getRecipeById(this.$route.params.id)
        
    },
    components: {
        NavComponent
    }
}
</script>

<template>

    <NavComponent link="/query-recipes" :title="recipeSelected.title" />
    <div class="recipe-layout-alignment">
        <!-- Recipe image -->
        <div class="recipe-image">
            <img :src="recipeSelected.image">
        </div>
        <div class="recipe-content">
            <h3 class="ingredients-title-recipe">Ingredientes</h3>

            <!-- Ingredients list -->
            <div class="ingredients-list" v-for="(item, index) in recipeSelected.ingredients" :key="index">
                <div>
                    <img :src="getIngredientImage(item.ingredient)">
                    <h4> {{ item.ingredient }} {{ item.quantity }}</h4>
                </div>
            </div>

            <!-- Ingredients -->
            <div class="steps-menu">
                <h3 class="ingredients-title"> Pasos</h3>
                <p>Ver pasos en pictogramas</p>
            </div>

            <div class="recipe-steps">
                <ol>
                    <li v-for="(step, index) in recipeSelected.instructions" :key="index"> {{ step }} </li>
                </ol>
            </div>

            <div class="evaluation">
                <p></p>
            </div>

            <div class="stars">
                <h3>Valora esta receta</h3>
                <div class="stars-container">
                    <div class="star" 
                        v-for="star in 5" 
                        :key="star" 
                        :class="{ selected: stars === star }"
                        @click="selectStars(star)">
                        <!-- <p>{{ star }}</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<style>
.recipe-image img{
    max-width: 100%;
    height: 200px;
}

.stars .stars-container {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
}

.stars .stars-container .star {
    width: 30px;
    aspect-ratio: 1/1;
    height: 30px;
    background-position: center center;
    background-size: contain;;
    background-image: url('data:image/svg+xml,<svg width="127" height="127" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.2647 0L47.4485 47.4485H0L39.5404 79.0809L23.7243 126.529L63.2647 94.8971L102.805 126.529L86.989 79.0809L126.529 47.4485H79.0809L63.2647 0Z" fill="%23DC8A0B"/></svg>');
}


</style>