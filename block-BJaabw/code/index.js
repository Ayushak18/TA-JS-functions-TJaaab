// Use default parameter where ever you can

/* 1. minToSec

Write a function named minToSec that takes an integer minutes and converts it to seconds.


minToSec(50) ➞ 3000
minToSec(13) ➞ 780
minToSec(2) ➞ 120
*/

function minToSec(minutes) {
  return minutes * 60;
}

// - Write a Function Decleration for above problem
let minToSec = function (minutes) {
  // Your code
  return minutes * 60;
};
// - Execute the function with required parameter
minToSec();

/* 2. 
Create a function named isInRange which validates whether a number n is exclusively within the bounds of lower and upper.
Return true and false based on that.

The function accepts three parameter lower, upper and the number.
isInRange(1, 20, 9); // true
isInRange(1, 10, 19); // false
*/

function isInRange(number, lower, upper) {
  return lower < number && number < upper ? `True` : "False";
}

// - Write a Function Decleration for above problem
// Your code
let isInRange = function (number, lower, upper) {
  return lower < number && number < upper ? `True` : "False";
};

// - Execute the function with required parameter
isInRange(20, 10, 30);

/* 2. calculateBMI


Take two arguments weight and height and return `Underweight`, `Normal` etc based on data.

Body mass index(BMI) is calculated as follows: bmi = weight / (height x height). Write a function which calculates bmi.
BMI is used to broadly define different weight groups.
Check if a person is underweight, normal, overweight or obese based the information given below.

These are the conditions:

Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more

*/

function calculateBMI(weight, height) {
  // Your code
  let bmi = 0;
  bmi = weight / (height * height);
  if (bmi < 18.5) {
    return `underweight`;
  } else if (bmi > 18.5 && bmi < 24.9) {
    return `normal`;
  } else if (bmi > 24.9 && bmi < 29.9) {
    return `overweight`;
  } else {
    return `obese`;
  }
}

/* 3. appropiateDrinks

Create a function that take the age are return the appropiate drink based on these conditions:

- Under 14 years old — return "drink fruit juice"
- Under 18 years old — return "drink soda"
- Under 21 — return "drink fruit-flavored beer"
- 21 years or older — return "drink throat-piercing vodka"

*/

function appropiateDrinks(age) {
  // Your code
  if (age <= 14) {
    return `drink fruit juice`;
  } else if (age > 14 && age <= 18) {
    return `drink soda`;
  } else if (age > 18 && age <= 21) {
    return `fruit flavoured bear`;
  } else if (age > 21) {
    return `drink throat piercing vodka`;
  }
}

/* 4. Add two numers or string

Write a function that accepts two numbers or string and returns the sum of the numbers and concatenation of the strings.
Twist is when user passes anything other than number, or string value you should be able to handle that.

- If both values are number add them
- If both values are string concat theme
- Anything other than that alert "Enter valid values"

*/

function sum(one, two) {
  // Your code
  if (typeof one === "number" && typeof two === "number") {
    return one + two;
  } else if (typeof one === "string" && typeof two === "string") {
    return one + two;
  } else {
    return `Not Valid`;
  }
}

// Function Test
sum(2, 4); // 4
sum("Arya", "Stark"); // "Arya Stark"
sum("Arya", 2); // Enter valid Values
sum(null, 2); // Enter valid Values
sum(undefined, 2); // Enter valid Values
