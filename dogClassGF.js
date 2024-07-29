
class Dog {
	constructor(name, breed, weight, age) {
		this.name = name;
		this.breed = breed;
		this.weight = weight;
		this.age = age;
	}
	get ageInHumanYears() { 
		return this.age * 7; 
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
let rover = new Dog("Rover", "Mixed", 27, 3);
let fido = new Dog("Fido", "Mixed", 25, 4);

console.log(`Rover's age: ${ rover.age }`);
console.log(`Rover's age in human years: ${ rover.ageInHumanYears }`);

