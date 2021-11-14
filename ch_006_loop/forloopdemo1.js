let data = document.getElementById('data');
let btnResult = document.getElementById('btnResult');

btnResult.addEventListener('click',printData);
function printData(){
let content = "";
let i =0;
for(i=1;i<=10;i++){
    content = content+ i + '\n';
}
data.value = content;
}