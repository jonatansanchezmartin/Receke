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
    }
}
</script>

<template>
    <li class="step">
        <input type="textarea" class="description" v-model="descriptionStep" :class="{ 'disabled' : isDisabled }"></input>
        
        <div v-if="descriptionStep != ''" @click="addStep(descriptionStep)" class="plus" :class="{ 'disabled' : isDisabled }">+</div>
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
ol {
  counter-reset: step-counter;
}

ol {
  list-style-type: none; /* Elimina los marcadores predeterminados */
}

ol li::before {
    color: black;
    content: counter(step-counter);
    counter-increment: step-counter;
}

ol li {
    display: flex;
}
</style>
