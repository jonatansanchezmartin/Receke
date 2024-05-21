<script>
export default {
    components: {
    },
    data() {
        return {
            ingredients: [],
            recipeName: '',
            descriptionStep: ''
        }
    },
    created() {
        this.fetchIngredients()
    },
    methods: {
        async fetchIngredients() {
            let response = await fetch('http://localhost:3001/ingredients')
            let ingredients = await response.json()
            this.ingredients = ingredients
        }
    }
}
</script>

<template>
    <div class="query-nav">
        <button><router-link to="/"><img src="./src/assets/img/back-arrow.png"></router-link>  </button>
        <div>
            <h1>Contribuye con tu receta</h1>
            <p>Aporta a la comunidad recetas fáciles con ingredientes sencillos</p>
        </div>
    </div>
    <form>
        <div class="form-block">
            <label for="recipe-name">Nombre de la receta</label>
            <input id="recipe-name" v-model="recipeName">
            <p>{{  recipeName }}</p>
        </div>
        <div class="form-block">
            <label for="recipe-name">Ingredientes básicos</label>
            <div class="cards-container" >
                <div class="ingredient-card" v-for="ingredient in ingredients" :key="ingredient.id"> 
                    <img :src="ingredient.image" alt="ingredient.name" >
                    <h3>{{ ingredient.name }}</h3>
                </div>
            </div>
        </div>
        <div class="form-block">
            <label for="steps">Pasos</label>
            <div class="step">
                <div class="number">1</div>
                <input type="textarea" class="description" v-model="descriptionStep"></input>
                <div class="plus">+</div>
                {{ descriptionStep }}
            </div>
            <div class="step">
                <div class="number">1</div>
                <input type="textarea" class="description" v-model="descriptionStep"></input>
                <div class="plus">+</div>
                {{ descriptionStep }}
            </div>
        </div>
    </form>
</template>

<style>
</style>