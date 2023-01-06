class Human{
    name!: string; //this has to be initialized while creating first variable
    readonly name2 = "tawab"
    constructor(name: string){
        this.name = name;
        this.name2 = 'tawab';
        name = 'mustafa tawab of ghalegay swat'
        console.log(`Welcome ${name}`);
        // console.log(this); 

        
        

    }


    eat(food : string){
        // name2 = 'sfda';
        console.log(`All human eats ${food}`);
        
    }
}


// const usr1 = new Human('Mustafa Tawab');

// usr1.eat("Vegitables");


let h : Human = new Human('Human');//this is type 
h.eat('Veg') 




class Point{
    x =10;
    y = 20;

    scale(n: number): void{
        this.x *= n;
        this.y *= n;
    }
}




class C{
    private _lenght = 0;

    get lenght (){
        return this._lenght;
    }

    set lenght(value){
        this.lenght  = value;

    }
}


const a = new C();

console.log(a.lenght);

a.lenght = 20;
console.log(a.lenght);




