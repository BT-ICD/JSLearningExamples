let data = document.getElementById('data');
let btnResult = document.getElementById('btnResult');

btnResult.addEventListener('click',printData);
function printData(){
let content = "";
let i =1;
do {
    content = content+ i + '\n';
    i++;
}while(i<=10);
data.value = content;
}