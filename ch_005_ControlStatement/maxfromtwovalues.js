let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let result = document.getElementById('result');
let btnCheck = document.getElementById('btnCheck');
btnCheck.addEventListener('click',findMax);

function findMax(){
    let a =  parseInt( value1.value);
    let b = parseInt( value2.value);
    if(a>b){
        result.value=a;
    }
    else{
        result.value= b;
    }
}