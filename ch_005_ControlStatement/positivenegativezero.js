let value1=document.getElementById('value1');
let result = document.getElementById('result');
let btnCheck = document.getElementById('btnCheck');
btnCheck.addEventListener('click',displayResult);


function displayResult(){
    let num = parseInt( value1.value);
    if(num>0){
        result.value="Positive";
    }
    else if(num<0){
        result.value="Negative";
    }
    else{
        result.value="Zero";
    }
}