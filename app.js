"use strict";
class Person {
    weight;
    height;
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    calculateIMC() {
        return this.weight / (this.height * this.height);
    }
}
const button = document.getElementById("calculate_button");
//exemple arrow function ()=>{}
button.addEventListener("click", () => {
    //get the html inputs
    const entry_weight = document.getElementById("weight");
    const entry_height = document.getElementById("height");
    //casting(coverte de tipos de variaveis)
    const weight = Number(entry_weight.value);
    const height = Number(entry_height.value);
    //create an person object
    const person = new Person(weight, height);
    //summon calculateIMC metod
    const imc = person.calculateIMC();
    //show resut on screen
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Your imc: " + imc.toFixed(2);
});
