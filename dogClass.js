
class Dog {
	constructor(name, breed, weight) {
		this.name = name;
		this.breed = breed;
		this.weight = weight;
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
let rover = new Dog("Rover", "Mixed", 27);
let fido = new Dog("Fido", "Mixed", 25);

console.log(rover, fido);

rover.bark();
fido.play("frisbee");

rover.age = 10;
console.log(rover);

console.log(`Is rover a dog? ${rover instanceof Dog}`);
console.log(`Is fido a dog? ${fido instanceof Dog}`);

console.log(fido.constructor);
if (fido.constructor === Dog) {
	console.log("Fido was made from the Dog class");
}

let fidoLiteral = {
	name: "Fido",
	breed: "Mixed",
	weight: 25,
	bark() {
		if (this.weight > 20) {
			console.log(`${this.name} says Woof woof!`);
		}
	 },
	 play(toy) {
		console.log(`${this.name} plays with the ${toy}`);
	 }
};
console.log(fidoLiteral);
console.log(fidoLiteral.constructor);
