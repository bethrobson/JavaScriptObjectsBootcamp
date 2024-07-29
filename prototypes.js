class Person {
	constructor(name, yardSize) {
		this.name = name;
		this.yardSize = yardSize; // in square feet
	}
}
let eric = new Person("Eric Freeman", 800);
let elisabeth = new Person("Elisabeth Robson", 400);

class Handler {
	constructor(name, years, awards) {
		this.name = name;
		this.years = years; // years of experience handling show dogs
		this.awards = awards; // number of awards winning dog shows
	}
}
let cookie = new Handler("Cookie Fleck", 10, 15);
let trevor = new Handler("Trevor Beckwith", 5, 12);

class Dog {
	static family = "Canidae";
	constructor(name, breed, weight, person) {
		this.name = name;
		this.breed = breed;
		this.weight = weight;
		this.person = person;
	}
	bark() {
		if (this.weight > 20) {
			console.log(`${this.name} says WOOF WOOF!`);
		} else {
			console.log(`${this.name} says woof woof!`);
		}
	}
	play(toy) {
		console.log(`${this.name} plays with the ${toy}`);
	}
	// NOTE: we removed toString here
}
class ShowDog extends Dog {
	static league = "Webville";
	constructor(name, breed, weight, person, handler) {
		super(name, breed, weight, person);
		this.handler = handler;
	}
	gait(kind) {
		console.log(`${this.name} is ${kind}ing`);
	}
	groom() {
		console.log(`Groom ${this.name}`);
	}
	bark() {
		console.log("Show dogs don't bark!");
	}
}

let rover = new Dog("Rover", "Mixed", 27, eric);
let fido = new Dog("Fido", "Mixed", 25, elisabeth);

let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, eric, cookie);
let beatrice = new ShowDog("Beatrice", "Pomeranian", 5, elisabeth, trevor);

console.log(scotty.toString()); // toString() from the Object prototype
console.log(scotty.constructor); // the ShowDog class
console.log(ShowDog.prototype); // the prototype object associated with ShowDog


