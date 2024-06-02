var car = 'subaru';
var age = 25;
var numbers = [11, 2, 3, 4];
//**string Tests **
// test 1: equality (True)
console.log("Is car =='subaru'? I predict True.");
console.log(car == 'subaru'); // True (case-insensitive)
// test 2: strick equality (false)
console.log("Is car ==='subaru'? I predict false.");
console.log(car === 'subaru'); // True (case-sensitive)
// test 3:  Inequality (True)
console.log("Is car !='toyota'? I predict true.");
console.log(car != 'toyota'); // True
// test 4:  Inequality (false)
console.log("Is car !=='subaru'? I predict false.");
console.log(car !== 'subaru'); // false (case-sensitive)
//"lowercase function test"
//Test 5 : lowercase conversion (True)
console.log("Is car.tolowercase() == 'subaru'? I predict true"); // True (converted to lowercase)
console.log(car.toLowerCase() == 'subaru'); // True ()
//Test 6 : lowercase conversion (false)
console.log("Is car=== car.tolowercase()? I predict false");
console.log(car === car.toLowerCase()); // false (original value remain uppercase)
// **numerical test**
//Test 7 : Equality (True)
console.log("Is age ! == 25? I predict true");
console.log(age == 25); // True
//Test 8 : inequality (False)
console.log("Is age ! = 30? I predict true");
console.log(age != 30); // True
//Test 9 : greater than  (False)
console.log("Is age > 30? I predict false");
console.log(age > 30); // false
//Test 9 : greater than  (False)
console.log("Is age > 30? I predict false");
console.log(age > 30); // false
//Test 10 : less than or equal (True)
console.log("Is age <= 25? I predict True");
console.log(age <= 25); // True
//** logical operators**
//Test 11: AND (true)
console.log("Is age > 20 && age < 30 ? I predict True");
console.log(age > 20 && age <= 30); // True (both condition met)
//Test 12: OR (false)
console.log("Is age > 30 || age > 18? I predict false");
console.log(age > 30 || age < 18); // True ( neither condition met)
//** Array Test **
//Test 13: In array (True)
console.log("Is 3 in numbers? I predict True");
console.log(3 in numbers); // True (chacks for index exercise)
//Test 14: not In array (false)
console.log("Is 5 not in numbers? I predict true");
console.log(5 in numbers); // True (negation  for "in" operator)
