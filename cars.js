class Car {
    // Static property to keep track of the number of vehicles produced
    static numVehicles = 0;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
        this.started = false;

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

// Test case demonstrating polymorphism
const testPolymorphism = () => {
    // Create an array of Car objects including Car and Taxi instances
    const vehicles = [
        new Car('Toyota', 'Camry', 2021),
        new Car('Honda', 'Accord', 2022),
        new Taxi('Toyota', 'Camry', 2021, 0),
        new Taxi('Honda', 'Civic', 2022, 0)
    ];

    // Iterate through the array and call methods on each object
    vehicles.forEach(vehicle => {
        vehicle.start();
        vehicle.drive(20);
        vehicle.brake(5);
        vehicle.stop();

        // Check if the vehicle is a Taxi and call Taxi-specific methods
        if (vehicle instanceof Taxi) {
            const person = { name: 'Jane Doe', destination: 'Downtown' };
            vehicle.hail(person);
            vehicle.dropOffPassenger();
        }
    });

    // Check the number of vehicles produced
    console.log(`Number of vehicles produced: ${Car.getNumVehicles()}`); // Should output 4
};

// Run the test case
testPolymorphism();



const operateVehicle = (vehicle, distance) => {
    vehicle.start();
    vehicle.drive(distance);
    vehicle.brake(distance / 2); // Decelerate to half the speed
    vehicle.stop();

    // If the vehicle is a Taxi, handle passenger
    if (vehicle instanceof Taxi) {
        const person = { name: 'John Doe', destination: 'Airport' };
        vehicle.hail(person);
        vehicle.dropOffPassenger();
    }
};


const vehicles = [
    new Car('Toyota', 'Camry', 2021),
    new Car('Honda', 'Accord', 2022),
    new Taxi('Toyota', 'Camry', 2021, 0),
    new Taxi('Honda', 'Civic', 2022, 0)
];

// Operate each vehicle using the polymorphic function
vehicles.forEach(vehicle => operateVehicle(vehicle, 30));



// Test case demonstrating polymorphism
const testPolymorphism = () => {
    // Create an array of Car objects including Car and Taxi instances
    const vehicles = [
        new Car('Toyota', 'Camry', 2021),
        new Car('Honda', 'Accord', 2022),
        new Taxi('Toyota', 'Camry', 2021, 0),
        new Taxi('Honda', 'Civic', 2022, 0)
    ];

    // Iterate through the array and call methods on each object
    vehicles.forEach(vehicle => {
        vehicle.start();
        vehicle.drive(20);
        vehicle.brake(5);
        vehicle.stop();

        // Check if the vehicle is a Taxi and call Taxi-specific methods
        if (vehicle instanceof Taxi) {
            const person = { name: 'Jane Doe', destination: 'Downtown' };
            vehicle.hail(person);
            vehicle.dropOffPassenger();
        }
    });

    // Check the number of vehicles produced
    console.log(`Number of vehicles produced: ${Car.getNumVehicles()}`); // Should output 4
};

// Run the test case
testPolymorphism();






// Create two car instances
const car1 = new Car('Toyota', 'Corolla', 2021);
const car2 = new Car('Tesla', 'Model 3', 2023);

// Test run with car1
car1.start(); // The 2021 Toyota Corolla is starting
car1.drive(60); // I'm driving 60 mph!
car1.stop(); // The 2021 Toyota Corolla is stopped

// Test run with car2
car2.start(); // The 2023 Tesla Model 3 is starting
car2.drive(75); // I'm driving 75 mph!
car2.stop(); // The 2023 Tesla Model 3 is stopped



