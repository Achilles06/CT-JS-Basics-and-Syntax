// Task 1: Declare variables to store two numeric values for performing arithmetic operations
let num1;
let num2;

// Task 2: Assign sample numeric values to the variables declared in Task 1
num1 = 12;
num2 = 8;

// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results
console.log("Sum:", num1 + num2);           // Addition
console.log("Difference:", num1 - num2);    // Subtraction
console.log("Product:", num1 * num2);       // Multiplication
console.log("Quotient:", num1 / num2);      // Division

// Task 4: Explore assignment operators and update the values of variables
num1 += 5;  // This is equivalent to num1 = num1 + 5;
num2 *= 2;  // This is equivalent to num2 = num2 * 2;
console.log("Updated num1 (after adding 5):", num1);
console.log("Updated num2 (after multiplying by 2):", num2);

// Task 5: Use comparison operators to compare the values of variables
console.log("Is num1 equal to num2?", num1 === num2);      // Strict equality (checks both value and type)
console.log("Is num1 greater than num2?", num1 > num2);    // Greater than comparison
console.log("Is num1 not equal to num2?", num1 !== num2);  // Not equal

// Task 6: Apply logical operators to combine conditions and display the results
let isNum1Positive = num1 > 0;
let isNum2Positive = num2 > 0;
let areBothPositive = isNum1Positive && isNum2Positive;  // Logical AND
console.log("Are both numbers positive?", areBothPositive);

let isNum1Even = num1 % 2 === 0;
let isNum2Even = num2 % 2 === 0;
let isAtLeastOneEven = isNum1Even || isNum2Even;         // Logical OR
console.log("Is at least one number even?", isAtLeastOneEven);
