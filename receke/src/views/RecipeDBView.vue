<script>
import { mapState, mapActions } from "pinia";
import { useIngredientsStore } from '@/stores/IngredientsStore';
import { useRecipesStore } from '@/stores/RecipesStore';
import NavComponent from '@/components/NavComponent.vue';

export default {
    methods: {
        ...mapActions(useRecipesStore, ['getRecipeById']),
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
                    <img :src="item.image">
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
        </div>
    </div>

</template>
