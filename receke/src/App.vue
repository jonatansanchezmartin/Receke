<script>
import HeaderComponent from './components/HeaderComponent.vue';
import { mapState } from 'pinia';
import { mapActions } from 'pinia';
import { useIngredientsStore } from '@/stores/IngredientsStore.js'

export default {

    components: {
        HeaderComponent
    },
    computed: {
        ...mapState(useIngredientsStore, ['ingredients','categories'])
    },
    data() {
        return {
            //ingredients: [],
            //categories: []
        }
    },
    created() {
        this.fetchIngredients()
        this.fetchCategories()
    },
    methods: {
        ...mapActions(useIngredientsStore, ['fetchIngredients','fetchCategories']),
        // async fetchIngredients() {
        //     let response = await fetch('http://localhost:3001/ingredients')
        //     let ingredients = await response.json()
        //     this.ingredients = ingredients
        // },

        // async fetchCategories() {
        //     let response = await fetch('http://localhost:3001/categories')
        //     let categories = await response.json()
        //     this.categories = categories
        // }
    }
}
</script>

<template>
    <HeaderComponent />
    <RouterView />
</template>

<style></style>
