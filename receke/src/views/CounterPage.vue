<script>
import CounterDisplay from '@/components/CounterDisplay.vue'
import CounterControls from '@/components/CounterControls.vue'

export default {
    components: {
        CounterDisplay,
        CounterControls
    }
}

</script>
<template>
    <div>    This is the counter page</div>
    <CounterDisplay />
    <CounterControls />

</template>