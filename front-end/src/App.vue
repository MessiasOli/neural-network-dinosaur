<template>
  <div>
    <Dinosaur :nDino="'01'"/>
  </div>
</template>

<script>
// https://github.com/CodingWith-Adam/dino-game/tree/main
import Dinosaur from './components/Dinosaur.vue'
import MediatorGameDino from './Services/MediatorGameDino'

export default {
  name: 'App',
  components: {
    Dinosaur
  },

  data() {
    return {
      up: -9999,
      down: -9999,
    }
  },

  methods: {
    moveDino(event){
      if (event.code === 'ArrowUp' || event.code === 'ArrowDown' || event.code === 'Space')
        MediatorGameDino.notify({nDino: "01" }, event.code)
    }
  },

  mounted() {
    document.addEventListener('keydown', this.moveDino)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
