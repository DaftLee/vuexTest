<template>
  <div id="app">
    <p>click {{count}} times , now is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfeven">奇数时加</button>
    <button @click="incrementAsync">隔一秒加</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {

  // data () {
  //   return {
  //     count: 0
  //   }
  // },
  computed: {
    ...mapGetters(['evenOrOdd']),
    ...mapState(['count'])
    // evenOrOdd () {
    //   return this.$store.getters.evenOrOdd
    // }
  },
  methods: {
    ...mapActions(['increment', 'decrement', 'incrementIfeven', 'incrementAsync'])
    // increment () {
    //   this.$store.dispatch('increment')
    // },
    // decrement () {
    //   this.$store.dispatch('decrement')
    // },
    // incrementIfeven () {
    //   this.$store.dispatch('incrementIfeven')
    // },
    // incrementAsync () {
    //   this.$store.dispatch('incrementAsync')
    // }
  }
}
</script>

<style>
</style>
