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
        }
        // ,
        // removeStep(descriptionStep) {
        //     console.log(this.steps);
        //     this.steps.forEach( step => {
        //         if(step === descriptionStep) {
        //             let index = this.steps.indexOf(step)
        //             this.steps.splice(index, 1);
        //         }
        //     })
        //     console.log(this.steps);
        //     this.descriptionStep = '';
            
        // }
    }
}
</script>

<template>
    <li class="step">
        <input type="textarea" class="description" v-model="descriptionStep" :class="{ 'disabled' : isDisabled }"></input>
        
        <div v-if="descriptionStep != ''" @click="addStep(descriptionStep)" class="plus" :class="{ 'disabled' : isDisabled }">+</div>
        <!-- <div @click="removeStep(descriptionStep)" class="minus">-</div> -->
    </li>
</template>

<style>
.plus.disabled {
    display: none;
}

input.disabled {
    pointer-events: none;
}
ol {
  counter-reset: step-counter; /* Inicializa el counter */
}

ol {
  list-style-type: none; /* Elimina los marcadores predeterminados */
}

ol li::before {
  content: "Step "; /* Texto personalizado antes del marcador */
  color: blue; /* Color del texto personalizado */
}

ol li::before {
  content: counter(step-counter); /* Usa el counter en el contenido generado */
  counter-increment: step-counter; /* Incrementa el counter para cada elemento de la lista */
}
</style>
