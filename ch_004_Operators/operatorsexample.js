let operatorButton = document.getElementById('operatorButton');
operatorButton.addEventListener('click',operatorDemo());
function operatorDemo(){
let a=10;
let b = a;
console.log("a is ",a);
console.log("b is ",b);
console.log("Example of +=");
a=10;
b=5;
console.log("a is ",a);
console.log("b is ",b);
a+=b; // a = a + b (a = 10 + 5) result: a = 15 and b = 5;
console.log("Result of operation a+=b")
console.log("a is ",a);
console.log("b is ",b);

console.log("Example of -=");
a=10;
b=2;
console.log("a is ",a);
console.log("b is ",b);
a-=b; // a = a + b (a = 10 - 2) result: a = 8 and b = 2;
console.log("Result of operation a-=b")
console.log("a is ",a);
console.log("b is ",b);

console.log("Example of /=");
a=10;
b=2;
console.log("a is ",a);
console.log("b is ",b);
a/=b; // a = a + b (a = 10 / 2) result: a = 5 and b = 2;
console.log("Result of operation a/=b")
console.log("a is ",a);
console.log("b is ",b);

}