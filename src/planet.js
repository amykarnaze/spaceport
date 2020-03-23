class Planet {
    constructor(diffObject) {
      this.name = diffObject.name;
      this.shop = diffObject.shop;
      this.currentShip = null;
    }
    landShip(ship) {
      this.currentShip = ship;

    }

}

module.exports = Planet;
