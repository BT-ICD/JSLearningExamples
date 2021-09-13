const button = document.getElementById("btn1");
const txt = document.getElementById("txt1");

button.onclick = function(){
    alert('Button Clicked');
}
txt.onkeydown = function(event){
    console.log(event);
    console.log(event.keyCode);
}

