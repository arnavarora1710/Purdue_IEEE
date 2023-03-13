// Defines a basic JavaScript variable
var varVar = 10;

// Also defines a basic JavaScript variable
let letVar = "Hmm...";

// Prints stuff we just made onto the console and not the WEB PAGE!
console.log(varVar);
console.log(letVar);

console.log("--------------");

// Demonstrates JavaScript comparisons and strictness!
console.log(5 < 6);
console.log(5 <= 5);
console.log(-2 > -10);
console.log(4 >= 7);
console.log(10 == 3);
console.log("Hello World" != "hello world"); // Not only numbers
console.log("Strictness: ")
console.log( 1 == '1' );
console.log( 1 === '1' );
console.log( 1 != '2' );
console.log( 1 !== '2' );

console.log("--------------");

// Demonstrates basic JavaScript math
let mathVar = 0;
mathVar = 5 + 45;
mathVar = mathVar - 10;
mathVar = mathVar * 2;
mathVar = mathVar / 8;
mathVar = mathVar % 7;
mathVar = mathVar ** 3;
console.log(mathVar);

console.log("--------------");

let varTest = 27;

// Demonstrates a basic if/else statement
if(mathVar == varTest) {
    console.log(true);
} else {
    console.log(false);
}

// Demonstrates a basic while loop
let i = 0;
while(i < 4) {
    console.log(i);
    i++;
}

for(i=0;i<4;i++) {
    console.log(i);
}