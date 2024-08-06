export class Event {
    // @ts-ignore
    constructor(type, location, description) {
      this.type = type;
      this.location = location;
      this.description = description;
    }
  
    getDescription() {
      return `${this.type} at ${this.location}: ${this.description}`;
    }
  }