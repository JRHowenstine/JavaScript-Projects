function Vote_Function() { // name and define function
    var Age, Can_vote; //designate variables but not values
    Age = document.getElementById("Age").value; //acquire value from html input
    Can_vote = (Age < 18) ? "You are too young to":"You are allowed to"; //use ternary operator to determine result
    document.getElementById("Vote").innerHTML= Can_vote + " vote."; //depending on conditions met display appropriate result
}