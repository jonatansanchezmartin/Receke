<script>
export default {
    props: {
        ingredients: Array,
       ingredient: Object,
       selectedIngredients: Array,
       
       
    },
    data() {
        return {
            ingredientQuantity: '',
            isActive : false,
        }; 
    },
    methods: {
        getSelectedIngredients(ingredientName, ingredientQuantity) {
            console.log(ingredientName, ingredientQuantity)

            // Si no existe, lo añado al array
            
            const ingredient = {
                ingredient: ingredientName,
                quantity: ingredientQuantity,
            }
            this.selectedIngredients.push(ingredient)
            console.log(this.selectedIngredients)
            this.isActive = true;

        }
    },
    emits: []
}
</script>

<template>
    <div class="ingredient-card-wrapper"  :key="ingredient.id" :class="{ 'active' : isActive }">
        <div class="ingredient-card" @click="getSelectedIngredients(ingredient.name, ingredientQuantity)"> 
            <img  :src="ingredient.image" :alt="ingredient.name">
            <h3>{{ ingredient.name }}</h3>
        </div>
        <input class="ingredient-quantity" v-model="ingredientQuantity">
        
    </div> 
</template>

<style>
.ingredient-card-wrapper.active .ingredient-card{
    border: 1px solid green;
}
.ingredient-quantity {
    width: 100%;
}
</style>
