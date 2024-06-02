//Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    // Modifying the magicians array by adding "the Great" to each magician's name
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    return magicians;
}

// Array of magician's names
let magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Call the function to make the magicians great
magicians = make_great(magicians);

// Call the function to show the names of magicians
show_magicians(magicians);
