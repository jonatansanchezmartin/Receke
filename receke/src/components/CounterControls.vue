<script>
import { mapActions } from 'pinia'
import {useCounterStore} from '@/stores/CounterStore.js'
export default {
    methods: {
        ...mapActions(useCounterStore, ['increment', 'decrement'])
    }
}
    
</script>

<template>
    <div>
       <button @click="increment"></button>
       <button @click="decrement"></button>

    </div>
</template>