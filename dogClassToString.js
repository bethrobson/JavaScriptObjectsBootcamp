
class Dog {
	constructor(name, breed, weight) {
		this.name = name;
		this.breed = breed;
		this.weight = weight;
		this.age = undefined;
	}
	bark() {
		if (this.weight > 20) {
			console.log(`${this.name} says Woof woof!`);
		}
	}
	play(toy) {
		console.log(`${this.name} plays with the ${toy}`);
	}
	toString() { // override toString from Object
		console.log(`--- ${ this.name } ---`);
		for (let p in this) {
			console.log(`${p}: ${this[p]}`);
		}
	}
}
let rover = new Dog("Rover", "Mixed", 27);
let fido = new Dog("Fido", "Mixed", 25);

// Printing rover in a string invokes the toString() method automatically
console.log(`${ rover }`);


