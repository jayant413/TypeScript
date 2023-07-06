"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = "Union in TypeScript";
var Jayant = { name: "Jayant", id: 413 };
Jayant = { username: "js", id: 143 };
function getDbId(id) {
    console.log("DB id is : ".concat(id));
    if (typeof id === "string") {
        id = id.toUpperCase();
        console.log(id);
    }
    if (typeof id === "number") {
        id += 2;
        console.log(id);
    }
}
getDbId(3);
getDbId("db id");
