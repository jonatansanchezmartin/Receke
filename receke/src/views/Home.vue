<script>
export default {
    props: {
        ingredients: Array,
        categories: Array
    }
}
</script>

<template>

        <!-- Filter buttons -->
        <div class="button-container">
            <button class="button-style">Todos</button>
            <button v-for="category in categories" :key="category.id" class="button-style">{{ category.name }}</button>
        </div>

        <!-- Ingredient cards -->
        <div class="cards-container">
            <button class="ingredient-card" v-for="ingredient in ingredients" :key="ingredient.id">
                <img :src="ingredient.image" alt="ingredient.name">
                <h3>{{ ingredient.name }}</h3>
            </button>
        </div>

        <!-- Fixed Menu -->
        <div class="fixed-menu">
            <button class="search-button"> <h3> Buscar recetas</h3> </button>
            <router-link to="/add-recipe"><button class="add-button"> <h3> Añadir recetas</h3> </button></router-link>
        </div>
    
        <RouterView />

</template>

<style></style>