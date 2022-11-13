document.write(typeof 7); // display data type of '7'
document.write("5" + 5); //coercion to combine string and number

function Function1() { 
    document.getElementById("Test1").innerHTML= 0/0; //Test Not a Number (NaN)
}

function Function2() {
    document.getElementById("Test2").innerHTML= isNaN("This is a string"); //Test isNaN with true response
}

function Function3() {
    document.getElementById("Test3").innerHTML= isNaN("007"); //Test isNaN with false response
}

function Function4() {
    document.getElementById("Test4").innerHTML= (2E310); //display "Infinity"
}

function Function5() {
    document.getElementById("Test5").innerHTML= (-2E310);// display '-Infinity'
}

function Function6() {
    document.getElementById("Test6").innerHTML= (10>2);// display boolean value 'true'
}

function Function7() {
    document.getElementById("Test7").innerHTML= (10<2);// display boolean value 'false'
}

console.log(2+2); //Display result of math operation in console 
console.log(10<3); //Display the boolean result 'false' in console

function Function8() {
    document.getElementById("Test8").innerHTML= (10==10);// display boolean value 'true' because comparison is equal
}

function Function9() {
    document.getElementById("Test9").innerHTML= (10==2);// display boolean value 'false' for comparison
}

function Function10() {
    var A = 8, B = 8;
    document.getElementById("Test10").innerHTML=(A===B);//compare with same value and data types should be true
}

function Function11() {
    var C = 8, D = "twelve";
    document.getElementById("Test11").innerHTML=(C===D);//compare with different values and data types should be false
}

function Function12() {
    var E = 8, F = "eight";
    document.getElementById("Test12").innerHTML=(E===F);//compare same value and different data types should be false
}

function Function13() {
    var G = 8, H = 12;
    document.getElementById("Test13").innerHTML=(G===H);//compare different values and same data types should be false
}

function Function14() {
    document.getElementById("Test14").innerHTML= (5>2 && 10>4);// use AND operator to display true result
}

function Function15() {
    document.getElementById("Test15").innerHTML= (5>10 && 10>4);// use AND operator to display false result
}

function Function16() {
    document.getElementById("Test16").innerHTML= (5>10 || 10>4);// use OR operator to display true result
}

function Function17() {
    document.getElementById("Test17").innerHTML= (5>10 || 10>20);// use OR operator to display false result
}

function Function18() {
    document.getElementById("Test18").innerHTML= !(20>10);// use NOT operator to display false result
}

function Function19() {
    document.getElementById("Test19").innerHTML= !(10>20);// use NOT operator to display true result
}