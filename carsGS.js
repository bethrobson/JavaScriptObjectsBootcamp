// Cars with getters/setters

class Car {
    static numVehicles = 0;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
        this.started = false;
		this.mileage = 0;

        // Increment the number of vehicles produced
        Car.numVehicles++;
    }
	get km() { return this.mileage * 1.609; }
	set km(k) { this.mileage = k / 1.609; }

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

	distance(amount) {
		this.mileage += amount;
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
}

// Create two car instances
const car1 = new Car('Toyota', 'Corolla', 2021);
const car2 = new Car('Tesla', 'Model 3', 2023);

// Test run with car1
car1.start(); // The 2021 Toyota Corolla is starting
car1.drive(60); // I'm driving 60 mph!
car1.distance(20); // I drove 20 miles!
car1.stop(); // The 2021 Toyota Corolla is stopped

// How many kms did I drive?
console.log(`The car has ${ car1.mileage } miles on it.`);
console.log(`The car has ${ car1.km } km on it.`);

// set the KM
car1.km = 120;
console.log("After setting the km distance to 120km:");
console.log(`The car has ${ car1.mileage } miles on it.`);
console.log(`The car has ${ car1.km } km on it.`);

