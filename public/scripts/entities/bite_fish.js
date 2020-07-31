class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/bite-fish.gif';
    //this.maxSurge = 4.0;
  }

  updateOneTick() {

    super.updateOneTick();
    const nearbyFish = this.tank.getProximateDenizens(this.position, this.height);

    for (let i of nearbyFish) {
      if (i !== this && i.isTasty)
        i.kill(1);
    }

  }

  onClick(event) {
    this.surgeSecondsLeft = this.maxSurge;
  }

}
