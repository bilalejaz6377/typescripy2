// List of current usernames
const current_users: string[] = ['john', 'alice', 'bob', 'emma', 'alex'];

// List of new usernames
const new_users: string[] = ['julie', 'bob', 'EMMA', 'mike', 'sarah'];

// Convert current usernames to lowercase for case-insensitive comparison
const current_users_lower: string[] = current_users.map(username => username.toLowerCase());

// Check if each new username is available
for (const new_username of new_users) {
    const new_username_lower = new_username.toLowerCase();
    if (current_users_lower.includes(new_username_lower)) {
        console.log(`Sorry, the username '${new_username}' is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
    }
}
