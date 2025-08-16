const display = document.getElementById('display');
const buttons = document.querySelectorAll('.keys button'); //queryselectorAll finds all the elemnts that match the css selector 
//.keys button lets js to find all "buttons" that come under the class keys
//buttons - hold a list of all number and sign buttons
const calculateBtn = document.getElementById('calculate-btn');

let currentInput=""; // this stores whatever the user types - like 2*3+4 etc

buttons.forEach(button => {  //forEach lets us go through the buttons list
    button.addEventListener('click',() => {  // ()=> is an arrow function that tells us after clicking here's what js should do
        const value= button.textContent;
        if(value === "="){
            calculateResult();
        }
        else{
            currentInput += value;
            display.value = currentInput; //If the value entered is a number or an operator , add that value to currentInput and the next line , updates the computer screen with the latest exp
        }
    });
});
calculateBtn.addEventListener('click',calculateResult);
function calculateResult() {
    try{
        currentInput = eval(currentInput) || "";
        display.value = currentInput;
    } catch {
        display.value = "Error";
        currentInput = "";
    }
}
