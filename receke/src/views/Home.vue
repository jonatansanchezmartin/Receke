<script>
export default {
    props: {
        ingredients: Array,
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
        <router-link to="/add-recipe">Añadir nueva</router-link>
        <RouterView />
    </div>
</template>

<style></style>