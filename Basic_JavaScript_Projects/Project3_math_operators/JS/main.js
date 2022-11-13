function addition_Function() {
    var Addition =3+5;
    document.getElementById("Add").innerHTML="3+5= "+ Addition; //returned answer of addition
}

function subtraction_Function() {
    var Subtraction = 7-5;
    document.getElementById("Sub").innerHTML= "7-5= " + Subtraction; //returned answer of subtraction
}

function multiplication() {
    var simple_Mult = 5 * 8;
    document.getElementById("Multi").innerHTML= "5*8= " + simple_Mult; //returned answer of multiplication
}

function division() {
    var simple_Div = 40 / 8;
    document.getElementById("Divi").innerHTML= "40/8= " + simple_Div; //returned answer of division
}

function more_Math() {
    var multi_Ops = (1 + 2) * 10 / 2 - 5;
    document.getElementById("FourOps").innerHTML= "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + multi_Ops;//returned value of multiple operations
}

function modulus_Operator() {
    var remainder = 25 % 6;
    document.getElementById("Modulus_remainder").innerHTML= "When you divide 25 by 6 you have a remainder of: " + remainder; //used modulus operator to produce value of remainder 
}

function negation_Operator() {
    var n= 10;
    document.getElementById("Neg").innerHTML= - n; //using negation operator to change sign of variable n
}

function increment() {
var B=2; //define variable B
B++; //increment B
document.getElementById("Inc").innerHTML= B; //Display new value of B 
}

function decrement() {
var C=3; //define variable C
C--; //Decrement C
document.getElementById("Dec").innerHTML= C; //Display new value of C 
}

window.alert(Math.random()); //alert pops with random number between 0 and 1
window.alert(Math.random()*100); //alert pops with dandom number between 0 and 100

function random() {
    var j = (Math.random()*20);
    document.getElementById("Random").innerHTML= j; //displays random number between 0 and 20
}

document.write(Math.PI);//will display pi at top since not called by function

var pie = (Math.PI);
document.write(" " + Math.ceil(pie));//will display pi rounded up to nearest integer after pi from previous step