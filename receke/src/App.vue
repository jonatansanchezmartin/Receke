<script>
import HeaderComponent from './components/HeaderComponent.vue';
export default {
    components: {
        HeaderComponent
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
    <HeaderComponent />
    <RouterView :ingredients="ingredients" :categories="categories"/>
</template>

<style></style>
