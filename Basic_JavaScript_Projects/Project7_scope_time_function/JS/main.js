var X = 10;  // Define a global variable
function Add_numbers_1() {
    document.write(20 + X + "<br>"); // use global variable in function
}
function Add_numbers_2() {
    document.write(X+100+"<br>"); // use global variable in function
}
Add_numbers_1(); //Perform function
Add_numbers_2(); //Perform function

function Add_numbers_3() { // define function
    var Y = 10; //define local variable
    document.write(20 + Y + "<br>"); //use local variable
    console.log(20 + Y + "<br>"); // show in concole log
}
function Add_numbers_4() { 
    document.write(Y + 100 +"<br>"); // try to use local variable from previous function
    console.log(Y + 100 +"<br>"); // have error show in console log
}
Add_numbers_3(); //perform function
Add_numbers_4(); // attempt to perform function

function get_Date() { //Define and name function
    if (new Date().getHours() < 18) { // if time of day is before 6 pm run function
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function if_Function() { //define a standard if function to display if true
    var T=10, S=6;
    if (T>S) {
        document.getElementById("MyIf").innerHTML = "T is greater than S"
    }
}

function Age_Function() { //define function that uses input for if/else
    Age = document.getElementById("Age").value;
    if (Age >= 18) { //if statement is true from input 'Age' then display
        Vote = "You are allowed to vote!"; 
    }
    else { //if statement is false from input 'Age' then display
        Vote = "You are too young to vote!";
    }
    document.getElementById("Your_Age").innerHTML = Vote;
}

function Time_function() { //define and name function
    var Time = new Date().getHours(); //get current time to use in if statement
    var Reply; //define variable that will be assigned a value dependent upon if statement
    if (Time < 12 == Time > 0) { //if time is between 0 and 12
        Reply = "It is morning.";
    }
    else if (Time >= 12 == Time < 18) { //if time is between 12 and 18
        Reply = "It is afternoon.";
    }
    else { //if time is between 18 and 24(0)
        Reply = "It is evening."
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //display what time of day it is based on if statement
}