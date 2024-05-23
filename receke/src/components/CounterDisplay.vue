<script>
import { mapState } from 'pinia'
import {useCounterStore} from '@/stores/CounterStore.js'

export default {
    computed: {
        ...mapState(useCounterStore, ['count', 'name'])
    }
}
    
</script>

<template>
    <div>
        {{count}}
        My name is: {{name}}
    </div>
</template>