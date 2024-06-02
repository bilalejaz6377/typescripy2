// exercise no 18
// 18-Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order
let place : string [] = ['cape town','delhi','karachi','lahore','faisalabad']
// console.log('original :' + place);

//print your array in alphabetical order without modifying the actual list .
console.log('copy' +  [...place].sort());

//show that your array is still in its original order by printing it.
// console.log('original :' + place);

//print your array in reverse alphabetical order without changing the order of the original list
// console.log('copy' + [...place].sort().reverse())
 
//show that your array is still in its original order by printing it again .
// console.log('copy' + [...place].sort().reverse());

//• Reverse the order of your list. Print the array to show that its order has change
console.log('original:'+ place.sort());

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('original:'+ place.sort().reverse());
