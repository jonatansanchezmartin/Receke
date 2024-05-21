<script>
import { RouterView } from 'vue-router';
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
            console.log(this.ingredients)
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
  <RouterView :ingredients = "ingredients"/>
</template>

<style scoped>

</style>
