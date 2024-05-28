<script>
export default {
    name: 'NavComponent',
    props: {
        link: String,
        title: String,
    },
}
</script>

<template>
    <div class="recipe-nav">
        <router-link :to="link">
            <button><img src="../assets/img/back-arrow.png" alt="flecha" /></button>
        </router-link>
        <h1>{{ title }}</h1>
    </div>
</template>

<style></style>