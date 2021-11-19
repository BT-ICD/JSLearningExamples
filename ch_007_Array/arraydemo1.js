let btnPrintArray= document.getElementById('btnPrintArray');
let btnPush = document.getElementById('btnPush');
let btnArrayToString = document.getElementById('btnArrayToString');
let btnPop = document.getElementById('btnPop');
let btnShift = document.getElementById('btnShift');
let btnIndexOf= document.getElementById('btnIndexOf');
let btnSplice = document.getElementById('btnSplice');
let btnSlice = document.getElementById('btnSlice');

let fruits = ['Apple', 'Banana'];

btnPrintArray.addEventListener('click',printArray);
btnPush.addEventListener('click',pushElement);
btnArrayToString.addEventListener('click',arrayTostring);
btnPop.addEventListener('click', popElement);
btnShift.addEventListener('click',shiftElement);
btnIndexOf.addEventListener('click',findWithIndexOf);
btnSplice.addEventListener('click',spliceDemo);
btnSlice.addEventListener('click',sliceDemo);

function printArray(){
    console.log(fruits.length); //length to get number of elements
    console.log(fruits);
    console.log(fruits[0]); //to get data at position 0
}
function arrayTostring(){
    //converts an array to string of comma separated values
    let result = fruits.toString();
    console.log(result);
}
function pushElement(){
    fruits.push('Orange');  //to add new element
    console.log(fruits);
}
function popElement(){
    let data = fruits.pop();
    console.log('After pop');
    console.log(fruits);
}
function shiftElement(){
    //The shift() method removes the first array element and "shifts" all other elements to a lower index.
    let result = fruits.shift();
    console.log('After shift');
    console.log('removed element', result);
    console.log(fruits);
}
function findWithIndexOf(){
    //Find the index of an item in the Array
    let position = fruits.indexOf('Orange');
    console.log('Result of index of is ',position);
}
function spliceDemo(){
    //starting position, number of elements 
    let result = fruits.splice(1,1);
    console.log('result is ', result);
    console.log(fruits);
}
function sliceDemo(){
    //To create copy of an array
    let fruitsCopy = fruits.slice();
    console.log('Actual array fruits: ')
    console.log(fruits);
    console.log('Copy of array fruitscopy: ');
    console.log(fruitsCopy);
}