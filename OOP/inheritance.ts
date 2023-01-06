class Base {
    k = 4;
    constructor(k: number){

    }
}


class Derived extends Base{

    name: string = "Mustafa "
    constructor(){
        super(4);
        console.log(this.k);
        


    }


    y = () =>{
        console.log(`Arrow funtion`);
        
    }


}