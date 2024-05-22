<script>
export default {
    props: {
        ingredients: Array,
        categories: Array
    }
}
</script>

<template>
    <div>
        <div class="button-container" v-for="category in categories" :key="category.id">
            <button class="button-style">{{ category.name }}</button>
        </div>
        <div>
            <div v-for="ingredient in ingredients" :key="ingredient.id">
                <img :src="ingredient.image" alt="ingredient.name" width="100" height="100">
                {{ ingredient.name }}
            </div>
        </div>
        <button>Buscar recetas</button>
        o
        <router-link to="/add-recipe">Añadir nueva</router-link>
        <RouterView />
    </div>
</template>

<style></style>