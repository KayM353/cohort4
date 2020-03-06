import functions from './functions.js';
import taxFunctions from "./taxes.js"

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));




function add1 (){
   let num1=Number(document.getElementById("value1").value);
   let num2=Number(document.getElementById("value2").value);

    // console.log(num1)

    document.getElementById("result").innerHTML= functions.add(num1,num2);
    // return functions.add (num1,num2)
    
};

function subtract1 (){
    let num1=Number(document.getElementById("value1").value);
    let num2=Number(document.getElementById("value2").value);
 
    //  console.log(num1)
 
     document.getElementById("result").innerHTML= functions.subtract (num1,num2);
     // return functions.add (num1,num2)
     
 };

 function multiply1 (){
    let num1=Number(document.getElementById("value1").value);
    let num2=Number(document.getElementById("value2").value);
 
    //  console.log(num1)
 
     document.getElementById("result").innerHTML= functions.multiply (num1,num2);
     // return functions.add (num1,num2)
     
 };
 function divide1 (){
    let num1=Number(document.getElementById("value1").value);
    let num2=Number(document.getElementById("value2").value);
 
    //  console.log(num1)
 
     document.getElementById("result").innerHTML= functions.divide (num1,num2);
     // return functions.add (num1,num2)
     
 };


add.addEventListener("click",add1)
subtract.addEventListener("click",subtract1)
multiply.addEventListener("click",multiply1)
divide.addEventListener("click",divide1)


// taxes
document.getElementById('taxButton').onclick = (function () {
    let grossIncome = parseInt(document.getElementById("incomeTax").value);
    taxFunctions.taxCalc(grossIncome);
}









)
