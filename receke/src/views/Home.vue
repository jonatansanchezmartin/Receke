<script>
export default {
    components: {
    },
    data() {
        return {
            ingredients: [],
            categories: []
        }
    },
    created() {
        this.fetchIngredients()
        this.fetchCategories()
    },
    methods: {
        async fetchIngredients() {
            let response = await fetch('http://localhost:3001/ingredients')
            let ingredients = await response.json()
            this.ingredients = ingredients
        },
        async fetchCategories() {
            let response = await fetch('http://localhost:3001/categories')
            let categories = await response.json()
            this.categories = categories
        }
    }
}
</script>

<template>
    <div>
        <h1>
            Inicio
        </h1>
        Selecciona tus ingredientes
        <div>
            <div v-for="category in categories" :key="category.id">
                {{ category.name }}
            </div>
        </div>
        <div>
            <div v-for="ingredient in ingredients" :key="ingredient.id">
                <img :src="ingredient.image" alt="ingredient.name" width="100" height="100">
                {{ ingredient.name }}
            </div>
        </div>
        <button>Buscar recetas</button>
        o
        <button>Añadir nueva</button>
    </div>
</template>

<style>
</style>