<template>
  <div>
    <img :id="`dino-${nDino}`" :title="`Dino-${nDino}`" src="../assets/dino_run1.png">
  </div>
</template>

<script>
import MediatorGameDino from "../Services/MediatorGameDino"

export default {
  name: "vue-dinosaur",
  props: ["nDino"],
  data() {
    return {
      running: false,
      runningService: -1,
      runningStatus: 1,
      keyDown: 0,
      runningStatusImg: "dino_run",
    }
  },

  methods: {
    run(){
      this.running = true;
      this.runningService = setInterval(this.dinoRunning, 200);
      console.log("Correr")
    },

    dinoRunning(){
      var dino = document.querySelector(`#dino-${this.nDino}`)
        if(this.runningStatus == 1){
          dino.src = require(`@/assets/${this.runningStatusImg}1.png`)
          this.runningStatus = 2;
        }
        else{
          dino.src = require(`@/assets/${this.runningStatusImg}2.png`)
          this.runningStatus = 1;
        }
    },

    stop(){
      console.log("Pausado")
      clearInterval(this.runningService)
      this.running = false;
    },

    up(){
      console.log("Pular")
    },

    down(){
      console.log("Abaixar")
      this.runningStatusImg = "dino_down"
      this.keyDown = this.keyDown == 0 ? this.keyDown + 4 : this.keyDown + 3;
      console.log("🦾🤖 >> this.runningStatusImg:", this.runningStatusImg)

      this.turnDown();
    },

    turnDown(){
      setTimeout(() => {
        console.log("🦾🤖 >> this.keyDown:", this.keyDown)
        if(this.keyDown < 1){
          this.runningStatusImg = "dino_run"
        }
        else{
          this.turnDown();
          this.keyDown --
        }
      }, 100);
    }

  },

  mounted() {
    console.log("Dino-" + this.nDino + " criado.")
    MediatorGameDino.notify(this, "init")
  },
}
</script>

<style scoped>

</style>