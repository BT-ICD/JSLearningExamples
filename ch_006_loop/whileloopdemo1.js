let data = document.getElementById('data');
let btnResult = document.getElementById('btnResult');

btnResult.addEventListener('click',printData);
function printData(){
let content = "";
let i =1;
while(i<=10){
    content = content+ i + '\n';
    i++;
}
data.value = content;
}