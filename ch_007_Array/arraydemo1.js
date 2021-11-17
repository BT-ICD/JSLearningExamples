let btnPrintArray= document.getElementById('btnPrintArray');
let btnPush = document.getElementById('btnPush');

let fruits = ['Apple', 'Banana'];
btnPrintArray.addEventListener('click',printArray);
btnPush.addEventListener('click',pushElement);
function printArray(){
    
    console.log(fruits.length); //length to get number of elements
    console.log(fruits);
    console.log(fruits[0]); //to get data at position 0
}
function pushElement(){
    fruits.push('Orange');  //to add new element
}