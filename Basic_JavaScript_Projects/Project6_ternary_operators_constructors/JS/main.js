function Vote_Function() { // name and define function
    var Age, Can_vote; //designate variables but not values
    Age = document.getElementById("Age").value; //acquire value from html input
    Can_vote = (Age < 18) ? "You are too young to":"You are allowed to"; //use ternary operator to determine result
    document.getElementById("Vote").innerHTML= Can_vote + " vote."; //depending on conditions met display appropriate result
}

function Vehicle (Make, Model,Year, Color) { //Define the constructor and default parameters
    this.Vehicle_Make = Make;  //Use of the "this" keyword
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Justin = new Vehicle("Fiat","500 Pop",2013,"White"); // Create new instance "Justin" of class
var Abi = new Vehicle("Honda","Civic", 2022,"Silver");//Create new instance "Abi" of class
function myCar() {
    document.getElementById("New_and_This").innerHTML = //Print the string using values from specified instance
    "Justin drives a " + Justin.Vehicle_Color + "-colored " + Justin.Vehicle_Make + " " + Justin.Vehicle_Model +
    " manufactured in " + Justin.Vehicle_Year + ".";
}

function count_Function() { //Define and name function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var starting_point = 7; //define variable to be manipulated by nested function
        function Plus_One() {starting_point += 1;} //define and name nested function
        Plus_One(); //Use nested function
        return starting_point;
    }
}