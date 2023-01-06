"use strict";
class Human {
    constructor(name) {
        this.name2 = "tawab";
        this.name = name;
        this.name2 = 'tawab';
        name = 'mustafa tawab of ghalegay swat';
        console.log(`Welcome ${name}`);
        // console.log(this); 
    }
    eat(food) {
        // name2 = 'sfda';
        console.log(`All human eats ${food}`);
    }
}
// const usr1 = new Human('Mustafa Tawab');
// usr1.eat("Vegitables");
let h = new Human('Human'); //this is type 
h.eat('Veg');
class Point {
    constructor() {
        this.x = 10;
        this.y = 20;
    }
    scale(n) {
        this.x *= n;
        this.y *= n;
    }
}
class C {
    constructor() {
        this._lenght = 0;
    }
    get lenght() {
        return this._lenght;
    }
    set lenght(value) {
        this.lenght = value;
    }
}
const a = new C();
console.log(a.lenght);
a.lenght = 20;
console.log(a.lenght);
