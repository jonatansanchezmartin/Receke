<script>
export default {
    props: {
        steps: Array,
    },
    data() {
        return {
            descriptionStep: '',
            isDisabled: false,
        }; 
    },
    methods: {
        addStep(descriptionStep) {
            console.log(descriptionStep);
            this.steps.push(descriptionStep);
            console.log(this.steps);
            this.isDisabled = true;
            
            setTimeout(() => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            }, 10);
        }
        
    },
    emits: ['add-step']
}
</script>

<template>
    <li class="step">
        <textarea class="description" placeholder="Comienza a escribir un paso para añadirlo" v-model="descriptionStep" :class="{ 'disabled' : isDisabled }" @keyup.enter="$emit('add-step', descriptionStep)"></textarea>
        
        <div v-if="descriptionStep != ''" @click="addStep(descriptionStep)" class="plus" :class="{ 'disabled' : isDisabled } ">+</div>
    </li>
</template>

<style>
.plus {
    color: black;
}
.plus.disabled {
    display: none;
}

input.disabled {
    pointer-events: none;
}
</style>
