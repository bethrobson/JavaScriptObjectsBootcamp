
class Dog {
	#toys = [];
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
	set toys(toy) {
		this.#toys.push(toy);
	}
	get toys() {
		let toysString = "";
		this.#toys.forEach((toy) => toysString += `${ toy } `);
		return toysString;
	}
	play() {
		this.#toys.forEach((toy) => 
			console.log(`${this.name} plays with the ${toy}`));
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

rover.toys = "ball";
rover.toys = "frisbee";
console.log(rover.toys);
rover.play();

//console.log(`Private toys property of rover: ${ rover.#toys }`);

