function buttonHelloClick() {
    alert('Hello From button buttonHelloClick. Example of click event');
}
const buttonMessage = document.getElementById('buttonMessage');

function sayHello() {
    alert('Hello from addEventListener');
}
buttonMessage.addEventListener('click', sayHello);