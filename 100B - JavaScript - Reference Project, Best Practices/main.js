import functions from './functions.js';
import taxFunctions from "./taxes.js";
import arrayFunctions from './arrays.js'; 
import dictionaryFunc from './dictionaryFunc';


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
});

//Arrays

addArr.addEventListener('click', function(){
    let myArray = [];
});
    addArr.addEventListener('click', function () {
        // if(arrayInput === NaN || arrayInput === String){
        //     message.innerHTML = "The input is not a valid number";}
        arrayFunctions.addArray(Number(arrayInput.value));
        // messageArea.innerHTML = "The number has been added to the array";
        // console.log(arrayFunctions.addArray(Number(arrayInput.value)));
        
        myArray = arrayFunctions.addArray(myArray, Number(arrayInput.value));
        messageArea.innerHTML = "The number has been added to the array";
    
    
    });
    
    
    // try array.filter(num => num === Number) to only allow numbers into array
    
    showArr.addEventListener('click', function(){
        messageArea.innerHTML = arrayFunctions.showArray(arrayInput.value);
    });


    showArr.addEventListener('click', function () {
        messageArea.innerHTML = arrayFunctions.showArray(myArray, Number(arrayInput.value));
    });
    
    sumArr.addEventListener('click', function () {
        messageArea.innerHTML = arrayFunctions.totalArray(myArray, Number(arrayInput.value));
    });
    
    clearArr.addEventListener('click', function () {
        messageArea.innerHTML = arrayFunctions.clearArray(myArray, Number(arrayInput.value));
    });
    
    sumArr.addEventListener('click', function(){
        messageArea.innerHTML = arrayFunctions.totalArray(arrayInput.value);
    }),



        // Dictionary
lookUp.addEventListener('click', function () {
    let provinceFull = provinces.lookupProv(itemLookUp.value);
    if (provinceFull === "") dictionaryMessage.textContent = "You sure you're in Canada?"
    else dictionaryMessage.textContent = provinceFull;

});

clearArr.addEventListener('click', function(){
    messageArea.innerHTML = arrayFunctions.clearArray(arrayInput.value);
}); 