var MediatorGameDino = {
  instance: function () {
    if (!MediatorGameDino.instance) {
      MediatorGameDino.instance = this;
    }
    return MediatorGameDino.instance;
  },

  dinos: new Map(),

  notify(sender, event) {
    switch (event) {
      case "init":
        this.dinos.set(sender.nDino, sender)
        break;

      case "Space":
        var dino = this.dinos.get(sender.nDino)
        if(dino.running)
          dino.stop()
        else
          dino.run()
        break;

      case "ArrowUp":
        this.dinos.get(sender.nDino).up()
        break;

      case "ArrowDown":
        this.dinos.get(sender.nDino).down()
        break;
    }
  }
}


export default MediatorGameDino