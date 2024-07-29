
const rover = {
	name: "Rover",
	breed: "Mixed",
	weight: 23
};
// What is an object?
let x = 3; // primitive value
let isDog = true; // primitive value
let dogName = "Rover"; // primitive value (for now)


// Access an object's properties
console.log(`${rover.name} is a ${rover.breed} breed dog who weighs ${rover.weight} pounds`);

// modify a property
rover.weight = 25;
console.log(`${rover.name} is a ${rover.breed} breed dog who weighs ${rover.weight} pounds`);
if (rover.weight > 20) {
	console.log(`${rover.name} says Woof woof!`);
}

// access a property with the name using array syntax
console.log(`We can access object properties like this: ${rover["weight"]}`);

// add a property
rover.age = 6;
console.log(`${rover.name} is ${rover.age} years old.`);

// delete a property
delete rover.breed;

// Object is the supertype of all JavaScript Objects, and it has
// useful properties, methods, and static methods we can use to
// get information about and manipulate objects.
console.log("---- Iterate with keys ----");
let keys = Object.keys(rover);
keys.forEach(function(key) {
	console.log(`${key}: ${rover[key]}`);
});
// or for...in which iterates over enumerable string properties of an obj
console.log("---- for in on objects ----");
for (p in rover) {
	console.log(`${p}: ${rover[p]}`);
}
// destructuring and iteration together
console.log("---- Destructuring and iteration together ----");
let roverEntries = Object.entries(rover);
for (const [key, value] of Object.entries(rover)) {
  console.log(`${key}: ${value}`);
}

if (Object.keys(rover).includes("breed")) {
	console.log(`${rover.name} has a breed! ${rover.breed}`);
} else {
	console.log(`${rover.name} has no breed.`);
}

// Object destructuring
rover.breed = "Mixed";
let { name, breed, weight } = rover;
console.log("Variables destructured from rover:", name, breed, weight);

// JavaScript is pass-by-value (copy of the object reference)
function foster(dog) {
	console.log(`I'm fostering a dog named ${dog.name}`);
	// dog gains weight
	dog.weight += 2;
	console.log(`${dog.name} now weighs ${dog.weight}`);
}
foster(rover);
console.log(rover);


// object behaviors
function bark(dog) {
	console.log(`${dog.name} says Woof Woof!`);
}
bark(rover);

// better to add methods
const fido = {
	name: "Fido",
	breed: "Mixed",
	weight: 27,
	bark: function() {
		if (this.weight > 20) {
			console.log(`${this.name} says Woof woof!`);
		}
	},
	play: function(toy) {
		console.log(`${this.name} plays with the ${toy}`);
	}
};

fido.bark();
fido.play("frisbee");

// Question: is rover a dog? is fido a dog? How are they the same/different?

console.log(rover);
console.log(fido);

// How would we add bark and play to rover?
// Edit the original dog... or, add dynamically, like this:
// (Note these are slightly different methods!)

rover.bark = function() {
	if (this.weight > 20) {
		console.log(`${this.name} says WOOF WOOF!`);
	}
};
rover.bark();

rover.play = function(toy) {
	console.log(`${this.name} runs and plays with the ${toy}`);
};
rover.play("ball");

// If you're used to classical inheritance, this might be weird!

console.log(rover);
console.log(fido);


