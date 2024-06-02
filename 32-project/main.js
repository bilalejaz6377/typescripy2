// List of current usernames
var current_users = ['john', 'alice', 'bob', 'emma', 'alex'];
// List of new usernames
var new_users = ['julie', 'bob', 'EMMA', 'mike', 'sarah'];
// Convert current usernames to lowercase for case-insensitive comparison
var current_users_lower = current_users.map(function (username) { return username.toLowerCase(); });
// Check if each new username is available
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    var new_username_lower = new_username.toLowerCase();
    if (current_users_lower.includes(new_username_lower)) {
        console.log("Sorry, the username '".concat(new_username, "' is already taken. Please choose a different one."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_username, "' is available."));
    }
}
