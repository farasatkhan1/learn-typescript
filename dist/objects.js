"use strict";
const User = {
    name: "ben",
    email: "ben@gmail.com",
    isActive: true
};
function createUser(User) {
    return User;
}
console.log(createUser(User));
