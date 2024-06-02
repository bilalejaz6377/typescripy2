//Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    // Modifying the magicians array by adding "the Great" to each magician's name
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    return magicians;
}
// Array of magician's names
var magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Call the function to make the magicians great
magicians = make_great(magicians);
// Call the function to show the names of magicians
show_magicians(magicians);
