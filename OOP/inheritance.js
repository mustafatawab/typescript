"use strict";
class Base {
    constructor(k) {
        this.k = 4;
    }
}
class Derived extends Base {
    constructor() {
        super(4);
        this.name = "Mustafa ";
        this.y = () => {
            console.log(`Arrow funtion`);
        };
        console.log(this.k);
    }
}
