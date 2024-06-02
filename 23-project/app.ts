let cars: string = 'subaru';

// test 1: Equality  comparison (true)
console.log("Is car == 'subaru'? I predict true.");
console.log(cars =='subaru'); // True

// test 2: strick equality  comparison (true)
console.log("Is car === 'subaru'? I predict true.");
console.log(cars ==='subaru'); // True



// test 3: inequality  comparison (false)
console.log("Is car != 'subaru'? I predict true.");
console.log(cars !='subaru'); // False



// test 4: strick inequality  comparison (false)
console.log("Is car !== 'subaru'? I predict true.");
console.log(cars !=='subaru'); // False


// test 5: less than comparison (false)
console.log("Is car < 'subaru'? I predict true.");
console.log(cars <'subaru'); // False (lexicographic comparison)


// test 6: greater than comparison (false)
console.log("Is car > 'subaru'? I predict true.");
console.log(cars >'subaru'); // False (lexicographic comparison)



// test 7: less than or equal comparison (True)
console.log("Is car <= 'subaru'? I predict true.");
console.log(cars <='subaru'); // True 



// test 8: greater than or equal comparison (True)
console.log("Is car >= 'subaru'? I predict true.");
console.log(cars >='subaru'); // True 
 


// test 9: checking truthines (True)
console.log("Is car ?  I predict true.");
console.log(cars); // True (not_empty string is turth  )


// test 10: checking falsiness (false)
console.log("Is car ?  I predict true.");
console.log(!cars ); // false (negation of a  turthy value )
