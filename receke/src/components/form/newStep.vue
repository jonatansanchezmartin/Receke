<script>
export default {
    props: {
        steps: Array,
        number: Number,
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
        },
        removeStep(descriptionStep) {
            console.log(this.steps);
            this.steps.forEach( step => {
                if(step === descriptionStep) {
                    let index = this.steps.indexOf(step)
                    this.steps.splice(index, 1);
                }
            })
            console.log(this.steps);
            this.descriptionStep = '';
            this.isDisabled = false;
        }
    }
}
</script>

<template>
    <li class="step">
        <div class="number">{{ number }}</div>
        <input type="textarea" class="description" v-model="descriptionStep" :class="{ 'disabled' : isDisabled }"></input>
        <div @click="addStep(descriptionStep)" class="plus" :class="{ 'disabled' : isDisabled }">+</div>
        <div @click="removeStep(descriptionStep)" class="minus">-</div>
    </li>
</template>

<style>
.plus.disabled {
    display: none;
}

input.disabled {
    pointer-events: none;
}
</style>
