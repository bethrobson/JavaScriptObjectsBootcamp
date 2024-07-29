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

// dog gains pounds - the reference to a dog object is copied into parameter
function gainWeight(dog, pounds) {
	console.log(`Adding ${ pounds } pounds to ${ dog.name }`);
	dog.weight += pounds;
}
console.log(`${ rover.name } weighs ${ rover.weight }`);
gainWeight(rover, 2);
console.log(`${ rover.name } weighs ${ rover.weight }`);

// copy the reference to the object
let roverNickName = rover;
console.log(`Is roverNickName equal to rover? ${roverNickName === rover}`);
gainWeight(roverNickName, 3);
console.log(`${ rover.name } weighs ${ rover.weight }`);

let snuffles = new Dog();
Object.assign(snuffles, rover);
console.log(snuffles);
console.log(`Is snuffles equal to rover? ${ snuffles === rover }`); // no!
snuffles.name = "Snuffles";
snuffles.bark();
iterateDog(rover);
iterateDog(snuffles);
console.log("Rover's constructor: ", rover.constructor); // Dog
console.log("Snuffle's constructor: ", snuffles.constructor); // Dog

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


