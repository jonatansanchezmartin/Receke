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

            // Añado objeto de ingrediente al array
            
            const ingredient = {
                ingredient: ingredientName,
                quantity: ingredientQuantity,
            }
            this.selectedIngredients.push(ingredient)
            console.log(this.selectedIngredients)
            this.isActive = true;

        },
        deleteIngredients(ingredientName) {
            this.ingredientQuantity = '';
            this.isActive = false;

            // Hago un foreach por todos los elementos de la lista, y le paso la posición para que si está repetido, haga splice
            this.selectedIngredients.forEach((ingredient, index) => {
                console.log(index)
                if(ingredientName === ingredient.ingredient) {
                    this.selectedIngredients.splice(index, 1)
                    
                }
            });
            console.log(this.selectedIngredients)
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
        <div class="ingredient-add" @click="getSelectedIngredients(ingredient.name, ingredientQuantity)">Añadir</div>
        <div class="ingredient-delete" @click="deleteIngredients(ingredient.name, ingredientQuantity)">Borrar</div>
        <input class="ingredient-quantity" placeholder="Cantidad" v-model="ingredientQuantity">
    </div> 
</template>

<style>
.ingredient-card-wrapper.active .ingredient-card{
    border: 1px solid green;
    pointer-events: none;
}
.ingredient-card-wrapper.active .ingredient-quantity {
    display: none;
}
.ingredient-card-wrapper.active .ingredient-delete {
    display: block;
}
.ingredient-card-wrapper.active .ingredient-add {
    display: none;
}
.ingredient-delete {
    display: none;
}
.ingredient-quantity {
    width: 100%;
}
</style>
