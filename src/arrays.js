// Declaring an empty array
let empty = [];

// Initializing array with default values
let defaults = [1,2,"3"]; // some programming languages do not allow mixed type.
console.log("defaults", defaults);

// Retrieve the first element in array
console.log("first element value is", defaults[0]);

// Looping an array
for(let i=0 ;i<defaults.length; i++){
    console.log("value of i is", i, "and the value is", defaults[i]);
}

/*Class discussion
Array methods:
Break out into groups and research how each of the array methods can be used and give an example.
    1. push
    2. pop
    3. shift
    4. unshift
    5. splice
    6. slice
*/

//Exercise:
/*
Question 1:
1. Create an array called "grades" with 5 numeric values
2. Use a for loop to loop through the array to get the average of the values.

Question 2:
1. Use array methods to combine the two arrays and remove all even-indexed values
const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];
*/

// Question 1
console.log("---Q1 Average grade is 85---")
const grades = [80, 90, 75, 88, 92];
let sum = 0;

for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}

const average = sum / grades.length;
console.log("Average grade is", average); //Average grade is 85

// Question 2
console.log("---Q2---")
const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];

// Step 1: Combine both arrays
let combinedArr = arr1.concat(arr2); // or [...arr1, ...arr2]
console.log("Combined array:", combinedArr);

// Step 2: Filter out even-indexed values
let resultArr = combinedArr.filter((_, index) => index % 2 !== 0);
console.log("Array with even-indexed values removed:", resultArr);