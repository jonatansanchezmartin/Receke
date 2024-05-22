<script>
export default {
    props: {
        ingredients: Array
    }
}
</script>

<template>
        <div class="cards-container">
            <button class="ingredient-card" v-for="ingredient in ingredients" :key="ingredient.id">
                <img :src="ingredient.image" alt="ingredient.name">
                <h3>{{ ingredient.name }}</h3>
            </button>
        </div>
</template>

<style></style>