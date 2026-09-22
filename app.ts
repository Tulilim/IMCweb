class Person{
    weight:number;
    height:number;

    constructor(weight:number,height:number){
        this.weight=weight;
        this.height=height;
    }
    calculateIMC():number{
        return this.weight/(this.height*this.height)
    }
}
const button = document.getElementById("calculate_button") as HTMLButtonElement;
//exemple arrow function ()=>{}
button.addEventListener("click",()=>{
    //get the html inputs
    const entry_weight = document.getElementById("weight") as HTMLInputElement;
    const entry_height = document.getElementById("height") as HTMLInputElement;
    //casting(coverte de tipos de variaveis)
    const weight = Number(entry_weight.value); 
    const height = Number(entry_height.value);
    //create an person object
    const person = new Person(weight,height)
    //summon calculateIMC metod
    const imc = person.calculateIMC();
    //show resut on screen
    const = resultado = document.getElementById("resultado") as HTMLDivElement
    resultado.innerHTML = "Your imc: " +imc.toFixed(2)
});