let age = document.getElementById('age');
let result = document.getElementById('result');
let btnCheck = document.getElementById('btnCheck');

btnCheck.addEventListener('click', displayResult);

function displayResult(){
    let ageValue = parseInt(age.value);
    let answer = (ageValue>18)?"Access allowed": "Access not allowed";
    result.value= answer;
}