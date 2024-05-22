<script>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
export default {
    components: {
        Header
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
    <Header>
    </Header>
    <RouterView :ingredients="ingredients" :categories="categories"/>
</template>

<style></style>
