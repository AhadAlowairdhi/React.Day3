// // Variables
// let name1 = "Ahad";
// let age1 = 23;
// let name = "Ahad",
//   age = 23,
//   isMarried = false;

// // Constants
// const weekdays = 7,
//   DateOfBirth = "17/05/2022";

// console.log("my name is " + name + " I'm " + age);
// console.log("the week is ", weekdays + " days", ", to day is", DateOfBirth);
// console.log(typeof age);
// console.log();

// ///////////////
// //Lab1

// /*
// The Age Calculator
// Store the current year in a variable.
// Store your birth year in a variable.
// Calculate the age based on the stored values.
// Output to the screen like so: "Your age is NN".
// */
// let CurntYear = 2022;
// let thisYear = new Date().getFullYear();
// const BirthYear = 1998;
// let myAge = thisYear - BirthYear;
// console.log(myAge);

// // if else statement
// let userAge = 13;
// if (userAge >= 18) {
//   console.log("you can drive");
// } else {
//   console.log("your age under 18 years");
// }

// //Lab2

// /*
// Grade is 90 and above is an A
// Grade of 80 to 89 is a B
// Grade of 70 to 79 is a C
// Grade of 60 to 69 is a D
// Grade of 59 or below is a F
//  */

// let grade = 69;

// if (grade >= 90) {
//   console.log("Your grade is an A");
// } else if (grade >= 80) {
//   console.log("Your grade is a B");
// } else if (grade >= 70) {
//   console.log("Your grade is a C");
// } else if (grade >= 60 || 69) {
//   console.log("Your grade is a D");
// } else {
//   console.log("Your grade is a F");
// }


function sum(num1, num2) {
  let res = num1 + num2;
  for (i = num1 + 1; i < num2; i++) {
    res += i;
  }
  console.log(res);
}

sum(1, 20);
