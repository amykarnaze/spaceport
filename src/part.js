class Part {
    constructor(diffObject) {
    this.name = diffObject.name;
    this.type =
    diffObject.type === 'shell' ||
    diffObject.type === 'hyperdrive' ||
    diffObject.type === 'computer' ||
    diffObject.type === 'life support' ||
    diffObject.type === 'landing gear' ?
    diffObject.type: undefined;
    this.value = diffObject.value;
    this.broken = false;
  }
isValid() {
    if (this.name === undefined || this.type === undefined || this.value === undefined) {
      return false;
  } else {
    return true;
  }
  }
}

module.exports = Part;
