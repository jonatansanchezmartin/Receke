<script>
//importamos el componente header de la carpeta components para usarlo en el template
import HeaderComponent from './components/HeaderComponent.vue';
// importamos de pinia los metodos de mapeo de states y actions y la funcion useblablabla desde la carpeta stores.
import { mapState } from 'pinia';
import { mapActions } from 'pinia';
import { useIngredientsStore } from '@/stores/IngredientsStore.js'

export default {

//declaramos los componentes que hemos importado para poder usarlos
    components: {
        HeaderComponent
    },
// mapeamos como computed  las variables con mapstate con los dos parametros, de callback Use blablabla y entre corchetes las variables a importar 
    computed: {
        ...mapState(useIngredientsStore, ['ingredients','categories'])
    },
    data() {
        return {
            //ingredients: [],
            //categories: []
        }
    },

//invocamos las variables o funciones que necesitamos cuando cargue la página
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
    <RouterView :ingredients="ingredients" :categories="categories"/>
</template>

<style></style>
