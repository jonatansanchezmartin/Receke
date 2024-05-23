//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('CounterStore', {
  state: () => ({
    count : parseInt(localStorage.getItem('count') || '0'),
    name : 'pepito'
  }),
  getters: {

  },
  actions: {
    increment() {
      this.count++
      localStorage.setItem('count', this.count)
    }, 
    decrement() {
      this.count--
      localStorage.setItem('count', this.count)
    }

  }


  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }
})
