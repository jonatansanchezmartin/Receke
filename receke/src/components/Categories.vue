<script>
export default {
    props: {
        categories: Array
    }
}
</script>

<template>
    <div class="button-container">
        <button class="button-style">Todos</button>
        <button v-for="category in categories" :key="category.id" class="button-style">{{ category.name }}</button>
    </div>
</template>

<style></style>