class Person {
	constructor(name, yardSize) {
		this.name = name;
		this.yardSize = yardSize; // in square feet
	}
}
let eric = new Person("Eric Freeman", 800);
let elisabeth = new Person("Elisabeth Robson", 400);

class Dog {
	constructor(name, breed, weight, person) {
		this.name = name;
		this.breed = breed;
		this.weight = weight;
		this.person = person;
	}
	bark() {
		if (this.weight > 20) {
			console.log(`${this.name} says Woof woof!`);
		}
	}
	play(toy) {
		console.log(`${this.name} plays with the ${toy}`);
	}
}
let rover = new Dog("Rover", "Mixed", 27, eric);
let fido = new Dog("Fido", "Mixed", 25, elisabeth);

console.log(`Rover's person is ${ rover.person.name }`);

function iterateDog(o) {
	console.log(`--- ${ o["name"] } ---`);
	for (let p in o) {
		if (typeof o[p] === "object") {
			console.log(`${p}:`);
			iterateDog(o[p]);
		} else {
			console.log(`${p}: ${o[p]}`);
		}
	}
}
iterateDog(rover);


