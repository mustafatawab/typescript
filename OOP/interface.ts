// interface Sunn{
//     dead() : void;
// }


// class Isb implements Sunn{
//     dead(): void {
//         console.log("Isb class is dead");
        
//     }
// }

// class vadairaClass implements Sunn{
//     dead(): void {
//         console.log("Vadaira class is dead");
        
//     }
// }

// let obj : Sunn = new Isb();
// // obj.dead()
// obj = new vadairaClass();
// // obj.dead()

// function doSomething(person: Sunn){
//     person.dead();
    
// }

// class AmericanKids implements Sunn{
//     dead(): void {
//         console.log("American kids after doing drugs!!!");
        
//     }
// }

// doSomething(new AmericanKids);




class Emp {

    static counter:number = 0;
    id : number = 0;
    name: string;

    constructor(name: string){
        this.name = name;
        this.id = ++Emp.counter;

    }
}


let obj1 = new Emp("mustafa");
console.log(obj1.id);



let obj2 = new Emp(" tawab");
console.log(obj2.id);