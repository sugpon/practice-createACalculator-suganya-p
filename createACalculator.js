/*
Scenario: You are building a calculator for an online math game. The
calculator must include functionality to perform the following:

● Absolute Value Calculation: Given any number, return its absolute
value.
● Power Calculation: Calculate and return the value of a base raised to
a specific power.
● Square Root Finder: Calculate the square root of a number.
● Maximum and Minimum Finder: From a given set of numbers,
determine the largest and smallest values.
● Random Number Generator: Generate a random integer within a
specified range.
● Custom Rounding: Round a number to a specified number of decimal
places.


Step-by-Step Tasks:
1. Write a function for each operation listed above using the Math
module.
2. Test each function with sample inputs to ensure it works as intended.
3. Combine the individual functions into a single "calculator" program
where the user can select an operation and input the required values.
4. Test the calculator by performing the following:
● Find the absolute value of -45.67.
● Raise 5 to the power of 3.
● Calculate the square root of 144.
● Determine the largest and smallest values from [3, 78, -12,
0.5, 27].
● Generate a random number between 1 and 50.
*/

// 1. Absolute Value Calculation: Given any number, return its absolute value.
let num;
function absoluteValue(num) {
    return Math.abs(num);
}
// Test Absolute Value Function
console.log(`The Absolute Value of ${num} is: ${absoluteValue(-45.67)}`);
// Output: 45.67

//Power Calculation: Calculate and return the value of a base raised to a specific power.
function powerCalculation(base, exponent) {
    return Math.pow(base, exponent);
}

// Test Power Calculation Function
console.log(`The Power of 5 to the power of 3 is: ${powerCalculation(5, 3)}`);
// Output: 125

// 3. Square Root Finder: Calculate the square root of a number.
function squareRootFinder(num) {
    return Math.sqrt(num);
}
// Test Square Root Function
console.log(`The Square Root Of ${num} is: ${squareRootFinder(144)}`);
// Output: 12

// 4. Maximum and Minimum Finder: From a given set of numbers, determine the largest and smallest values.
function maxMinFinder(arr) {
        let max= Math.max(...arr);
        let min= Math.min(...arr);
        let maxMin= [max, min];
        return maxMin;
}
// Test Max Min Function
let numbers = [3, 78, -12, 0.5, 27];
let maxMin = maxMinFinder(numbers);
console.log(`The Maximum Value is: ${maxMin[0]}`); // Output: 78
console.log(`The Minimum Value is: ${maxMin[1]}`); // Output: -12

// 5. Random Number Generator: Generate a random integer within a specified range.
function randomNumberGenerator(min, max) {
    return Math.random() * (max - min) + min;
}

// Test Random Number Function
console.log(`The Random Number is: ${randomNumberGenerator(1,50)}`);



