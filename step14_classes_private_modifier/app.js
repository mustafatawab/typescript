"use strict";
//In TypeScript, each member is public by default.
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(meters) {
        // alert(this.name + " moved " + meters + "m.");
        console.log(this.name + " moved " + meters + "m.");
    }
}
// var a = new Animal("cat").name;
// console.log(a);
let a = new Animal("Cat");
a.move(20);
