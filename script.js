console.log("Hello!");

var x = prompt("Please enter a number");


function a(num1) {

	return num1 * 4;
}

function b(num2){
	return num2 + 2;
}

function c(num3){
	return num3 + 1;
}


x = a(b(c(x)));

console.log("After inputing into my function chain the result is " + x);

alert("Your number is now " + x);
