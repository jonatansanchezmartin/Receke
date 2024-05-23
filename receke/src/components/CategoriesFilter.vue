<script>
export default {
    props: {
        categories: Array
    },
    data() {
        return {
            selectedCategory: ''
        }
    },
    methods: {
        filterIngredients(category) {
            // Unnecessary to store to data?
            this.selectedCategory = category
            this.$emit('filter-ingredients', category)
        }
    },
    emits: ['filter-ingredients']
}
</script>

<template>
    <div class="button-container">
        <button class="button-style"  @click="filterIngredients('all')">Todos</button>
        <button v-for="category in categories" :key="category.id" class="button-style" @click="filterIngredients(category.name)">{{ category.name }}</button>
    </div>
</template>

<style></style>