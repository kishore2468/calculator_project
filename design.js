var a=parseFloat(prompt("Enter the number 1"));
var b=parseFloat(prompt("Enter the number 2"));
var c=prompt("Enter the operator");
switch(c){
       case '+': document.getElementById("result").textContent=(a+b);break;
       case '-': document.getElementById("result").textContent=(a-b);break;
       case '*': document.getElementById("result").textContent=(a*b);break;
       case '/': document.getElementById("result").textContent=(a/b);break;
       default :document.getElementById("result").textContent="Enter a correct operator";break;
}