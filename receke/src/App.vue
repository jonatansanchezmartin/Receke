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
    created() {
        this.fetchIngredients()
        this.fetchCategories()
    },
    methods: {
        ...mapActions(useIngredientsStore, ['fetchIngredients','fetchCategories']),
    }
}
</script>

<template>
    <HeaderComponent />
    <RouterView />
</template>

<style></style>
