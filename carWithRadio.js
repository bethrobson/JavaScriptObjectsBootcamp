class Car {
    // Static property to keep track of the number of vehicles produced
    static numVehicles = 0;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
        this.started = false;

        // Create a radio instance as a nested object
        this.radio = new this.Radio();

        // Increment the number of vehicles produced
        Car.numVehicles++;
    }

    // Static method to return the number of vehicles produced
    static getNumVehicles() {
        return Car.numVehicles;
    }

    start() {
        if (!this.started) {
            this.started = true;
            console.log(`The ${this.year} ${this.make} ${this.model} is starting`);
        }
    }

    stop() {
        if (this.started) {
            this.started = false;
            this.speed = 0;
            console.log(`The ${this.year} ${this.make} ${this.model} is stopped`);
        } else {
            console.log(`The ${this.year} ${this.make} ${this.model} isn't running.`);
        }
    }

    drive(amount) {
        if (this.started) {
            this.speed += amount;
            console.log(`The ${this.year} ${this.make} ${this.model} is going ${this.speed} mph`);
        } else {
            console.log(`The ${this.year} ${this.make} ${this.model} isn't started yet.`);
        }
    }

    brake(amount) {
        if (this.started && this.speed > 0) {
            this.speed -= amount;
            if (this.speed < 0) this.speed = 0;
            console.log(`The ${this.year} ${this.make} ${this.model} is going ${this.speed} mph`);
        } else if (!this.started) {
            console.log(`The ${this.year} ${this.make} ${this.model} isn't started yet.`);
        } else {
            console.log(`The ${this.year} ${this.make} ${this.model} is already stopped.`);
        }
    }

    // Define the nested Radio class
    Radio = class {
        constructor() {
            this.isOn = false;
            this.frequency = null;
        }

        turnOn() {
            if (!this.isOn) {
                this.isOn = true;
                console.log('Radio is now ON');
            } else {
                console.log('Radio is already ON');
            }
        }

        turnOff() {
            if (this.isOn) {
                this.isOn = false;
                console.log('Radio is now OFF');
            } else {
                console.log('Radio is already OFF');
            }
        }

        tune(freq) {
            if (this.isOn) {
                this.frequency = freq;
                console.log(`Radio tuned to ${freq} MHz`);
            } else {
                console.log('Radio is OFF. Turn it ON to tune.');
            }
        }
    }
}

// Define the Taxi class that extends Car
class Taxi extends Car {
    constructor(make, model, year, fare) {
        super(make, model, year);
        this.fare = fare;
        this.passenger = null; // Initially, no passenger
    }

    hail(person) {
        this.passenger = person;
        console.log(`Picked up ${person.name} who is going to ${person.destination}`);
        this.drive(50); // Start driving after picking up the passenger
    }

    dropOffPassenger() {
        if (this.passenger) {
            console.log(`Dropped off ${this.passenger.name} at ${this.passenger.destination}`);
            this.passenger = null; // Clear the passenger
        } else {
            console.log('No passenger to drop off');
        }
    }

    drive(amount) {
        super.drive(amount);
        if (this.started && this.speed > 0) {
            const interval = setInterval(() => {
                if (this.passenger) {
                    console.log(`Driving passenger ${this.passenger.name} to ${this.passenger.destination}`);
                }

                // 10% chance to drop off the passenger each second
                if (Math.random() < 0.1) {
                    this.dropOffPassenger();
                    clearInterval(interval);
                }
            }, 1000);
        }
    }
}

// Example usage
const myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();
myCar.radio.turnOn();
myCar.radio.tune(101.1);
myCar.radio.turnOff();

function iterateCar(o) {
    for (let p in o) {
        if (typeof o[p] === "object") {
            console.log(`${p}:`);
            iterateCar(o[p]);
        } else {
            console.log(`${p}: ${o[p]}`);
        }
    }
 }
 iterateCar(myCar);