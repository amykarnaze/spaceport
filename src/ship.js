class Ship {
  constructor(props) {
    // new ship is props
    this.name = props.name;
    this.captain = props.captain;
    this.parts = props.parts;
    this.maxCrew = props.maxCrew;
    this.odometer = props.odometer || 0;
    this.type =
     props.type === 'wooden' ||
     props.type === 'tin' ||
     props.type === 'plastic' ? undefined : props.type;
    this.fuelCapacity = props.fuelCapacity || 10;
    this.fuel = 0;
    this.crew = [];
  }
  addCrew(crew) {
    var crewFriends = (this.maxCrew - this.crew.length);

  }
}

module.exports = Ship;
