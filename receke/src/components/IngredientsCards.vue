<script>
import { mapState, mapActions } from 'pinia'
import { useIngredientsStore } from '@/stores/IngredientsStore'

export default {
    computed: {
        ...mapState(useIngredientsStore, ['selectedIngredients'])
    },
    props: {
        ingredients: Array
    },
    methods: {
        ...mapActions(useIngredientsStore, ['toggleIngredient'])
    }
}
</script>

<template>
    <div class="cards-container">

        <button 
            @click='toggleIngredient(ingredient.name)'
            class="ingredient-card"
            v-for="ingredient in ingredients"
            :key="ingredient.id"
            :class="{ 'active': selectedIngredients.includes(ingredient.name) }"
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