let firstName = document.getElementById('firstName');
let btnName = document.getElementById('btnName');
let sumOfNum = document.getElementById('sumOfNum');
let btnValues = document.getElementById('btnValues');

btnName.addEventListener('click',displayName);
btnValues.addEventListener('click',sumOfValues);
function displayName(){
    let fname = prompt("Enter First Name ");
    
    if(fname!=null){
        firstName.value = fname;
    }

}
function sumOfValues(){
    let sum =0;
    let num = prompt("Enter value");
    while(num!=null){
        sum = sum + parseInt(num);
        num = prompt("Enter value");
    }
    sumOfNum.value = sum;
}