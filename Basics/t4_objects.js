"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Jayant",
    email: "jayantsawarkar4103@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
var newUser = { name: User.name, isActive: User.isActive };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 400 };
}
function createUsers(user) {
    return { name: "", email: " ", isActive: true };
}
createUsers({ name: "", email: " ", isActive: true });
var myUser = {
    _id: "12344",
    name: "h",
    email: "h@h.com",
    isActive: false
};
