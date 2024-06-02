//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!\n");
}

// Call the function with different number of arguments to make sandwiches
make_sandwich('Ham', 'Cheese', 'Lettuce');
make_sandwich('Turkey', 'Swiss Cheese', 'Tomato', 'Mayonnaise');
make_sandwich('Peanut Butter', 'Jelly');
