let marks = document.getElementById('marks');
let result = document.getElementById('result');
let btnResult = document.getElementById('btnResult');

btnResult.addEventListener('click',displayResult);

function displayResult(){
    let mark = parseInt(marks.value);
    if(mark>=40){
        result.value="Pass";
    }
    else{
        result.value="Fail";
    }
}