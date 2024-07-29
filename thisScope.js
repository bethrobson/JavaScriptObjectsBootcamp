// The value of "this"

let o = {
	x: 1,
	aMethod() {
		console.log("This in o.aMethod() is:", this); // o
	}
};
o.aMethod();

let oWithInner = {
	y: 2,
	aMethod() {
		function inner() {
			console.log("This in inner in oWithInner.aMethod() is:", this); // window
		}
		console.log("This in oWithInner.aMethod() is:", this); // oWithInner
		inner();
	}
};
oWithInner.aMethod();
