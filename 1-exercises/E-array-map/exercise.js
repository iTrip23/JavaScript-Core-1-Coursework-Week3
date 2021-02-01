// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let multiplyBy100 = nums => nums * 100;
let multipliedNumbers = numbers.map(multiplyBy100); //This is one solution

let numbersMultiplied = numbers.map(num => num * 100); // This is another solution

console.log(multipliedNumbers);
console.log(numbersMultiplied);