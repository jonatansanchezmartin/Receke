<script>
import { mapState, mapActions } from 'pinia'
import { useIngredientsStore } from '@/stores/IngredientsStore'

export default {
    computed: {
        ...mapState(useIngredientsStore, ['ingredientsToShow', 'selectedIngredients'])
    },
    methods: {
        ...mapActions(useIngredientsStore, ['toggleIngredient'])
    }
}
</script>

<template>
    <div class="cards-container">

        <button 
            @click='toggleIngredient(ingredient.id)'
            class="ingredient-card"
            v-for="ingredient in ingredientsToShow"
            :key="ingredient.id"
            :class="{ 'active': selectedIngredients.includes(ingredient.id) }"
            >
            <img :src="ingredient.image" alt="ingredient.name">
            <h3>{{ ingredient.name }}</h3>
        </button>
    </div>
</template>

<style>
.ingredient-card.active{
  border: 1px solid green;
}
</style>