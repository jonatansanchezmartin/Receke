<script>
import { mapState, mapActions } from "pinia";
import { useIngredientsStore } from '@/stores/IngredientsStore'
export default {
    computed: {
        ...mapState(useIngredientsStore, ['categories'])
    },
    methods: {
        ...mapActions(useIngredientsStore, ['filterIngredients']),
    }
}
</script>

<template>
    <div class="button-container">
        <button class="button-style" @click="filterIngredients()">Todos</button>
        <button v-for="category in categories" :key="category.id" class="button-style"
            @click="filterIngredients(category.name)">{{ category.name }}</button>
    </div>
</template>

<style></style>