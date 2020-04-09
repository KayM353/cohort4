import cards from './cards.js';

window.addEventListener("click", function(event){
console.log (event.target); 
});

addBeforeBtn.addEventListener("click", function(){
    console.log ("push button"); 
    cards.addBefore (event.target.parentElement, "New Stuff"); 
    });

addAfterBtn.addEventListener("click", function(){
    console.log ("push button"); 
    cards.addAfter (event.target.parentElement, "New Stuff"); 
    });


deleteFun.addEventListener("click", function(){
    console.log ("push button");
    cards.deleteFunc (event.target.parentElement, "Delete Me");
}); 