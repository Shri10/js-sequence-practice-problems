// 1. >>Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.<<
console.log("1. >>Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.<<")
let singleDigit = Math.floor(Math.random() * 10);
console.log('Single Digit: ' + singleDigit);

// 2. >>Use REPL – Use Random to get Dice Number between 1 to 6<<
console.log("\n2. >>Use REPL – Use Random to get Dice Number between 1 to 6<<")
let diceNum = Math.floor(Math.random() * 6) + 1 ;
console.log('Dice Number: ' + diceNum);

// 3. >>Use REPL – Add two Random Dice Number and Print the Result<<
console.log("\n3. >>Use REPL – Add two Random Dice Number and Print the Result<<")
let diceNumber1 = Math.floor(Math.random() * 6) + 1;
console.log('Dice Number 1: ' + diceNumber1);
let diceNumber2 = Math.floor(Math.random() * 6) + 1;
console.log('Dice Number 2: ' + diceNumber2);
let sum = diceNumber1 + diceNumber2;
console.log('Sum of Two Dice Numbers: ' + sum);

// 4. >>Use Script & Debug – Write a program that reads 5 Random 2 Digit values, then find their sum and the average<<
console.log("\n4. >>Use Script & Debug – Write a program that reads 5 Random 2 Digit values, then find their sum and the average<<")
let total = 0;
for (let i = 0; i < 5; i++)
{
  let value = Math.floor(Math.random() * 90) + 10;
  total += value;
}
console.log('Sum of 5, Random, 2 Digit Values: ' + total);
console.log('Average of 5, Random, 2 Digit Values: ' + total / 5);

// 5. >>Use Script & Debug – Unit Conversion<<
console.log("\n5. >>Use Script & Debug – Unit Conversion<<")
//    - a. Convert a length from inches to feet.
console.log("\n   - a. Convert a length from inches to feet.")
let inches = 42;
let feet = inches / 12;
console.log('42 inches = ' + feet + ' feet');

//    - b. Calculates the area of a rectangular plot with dimensions 60 feet by 40 feet in meters.
console.log("\n   - b. Calculates the area of a rectangular plot with dimensions 60 feet by 40 feet in meters.")
let length = 60;
let width = 40;
let areaInFeet = length * width;
let areaInMeters = areaInFeet * 0.092903;
console.log('Area of 60ft x 40ft plot in meters: ' + areaInMeters + ' m^2');

//    - c. Calculates the total area of 25 such plots in acres.
console.log("\n   - c. Calculates the total area of 25 such plots in acres.")
let totalAreaInFeet = areaInFeet * 25;
let totalAreaInAcres = totalAreaInFeet / 43560;
console.log('Area of 25 such plots in acres: ' + totalAreaInAcres + ' acres');