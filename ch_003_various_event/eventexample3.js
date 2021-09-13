const button = document.getElementById("btn1");
const txt = document.getElementById("txt1");

button.addEventListener('click', function(){
    alert('Button Clicked')
});

txt.addEventListener('keydown', keyDownDetail);

function keyDownDetail(event){
    console.log(event);
    console.log(event.keyCode);
}

