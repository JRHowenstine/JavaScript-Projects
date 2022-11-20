function Call_Loop() { // Define a function with a while loop
    var Digit = "";
    var X = 1;
    while (X < 11) { //have it continue to count up til it reaches 10
        Digit += "<br>The number is " + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function String_Length() { // Define a function to use .length string method
    var sentence = document.getElementById("sentence").value; // get the "sentence" from user input
    var length = sentence.length;
    document.getElementById("Sentence_Length").innerHTML = ("Your sentence is " + length + " characters long.");// display the number of characters of the sentence
}

var Instruments = ["Guitar", "Drums", "Piano", "Standing Bass", "Violin", "Trumpet", "Flute"]; //Define an array
var Content = "";
var Y;
function for_Loop() { //define a function to go through array elements using "for" loop
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;//display the array as a list
}

function cat_pics() { // define function for an array and use specific elements in output
    var Cat_Picture = []; //define variable for array
    Cat_Picture[0] = "sleeping"; //define each individual elements of the array
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";//use specific array elements in output
}

function array_Function() {// define function for an array and use specific elements in output
    var Friends = [];//define variable for array
    Friends[0] = "Abigail";//define each individual elements of the array
    Friends[1] = "Kaylee";
    Friends[2] = "Chris";
    Friends[3] = "Dennis";
    Friends[4] = "Deb";
    document.getElementById("Array").innerHTML = Friends[1] + " is one of my top five friends.";//use specific array elements in output
}

function constant_Function() { //define function to use const keyword
    const Musical_Instrument = {type:"violin", brand:"Stradivarius", color:"burgandy"};
    Musical_Instrument.color = "Mahogany";
    Musical_Instrument.price = "$11,000,000";
    document.getElementById("Constant").innerHTML = "The cost of the "+ Musical_Instrument.color+ " " + Musical_Instrument.brand+ " " + Musical_Instrument.type + " is " + Musical_Instrument.price + ".";
}

function Let_Declaration() { //define function to show difference of scope between var and let keywords
    var D = 42; //define variable with function scope
    {
        let D = 41; //redefine variable using let keyword in order to have block scope
        document.getElementById("Lettuce1").innerHTML = D + " is the value of D by let keyword in the block within the function.";
    }
    document.getElementById("Lettuce").innerHTML = D + " is the value of D by the var keyword in the function.";// show that D still has the var value rather than the let value inside the block
}

function return_Pi() { //define function to show use of return keyword
    return Math.PI;
}
 document.getElementById("PI").innerHTML = "Pi to the 15th decimal point is " + return_Pi();

 let car = { //use let to define an array
    make: "Fiat ",
    model: "500 Pop",
    year: "2013 ",
    color: "white ",
    description : function() { // define function to use elements define by 'let'
        return "The car is a " + this.year + this.color + this.make + this.model + "." ;
    }
 };
 document.getElementById("Car_Object").innerHTML = car.description();

 let text = "";
 for (let i = 0; i < 10; i++) { // use break to stop the loop at specified point
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
 }
document.getElementById("breakloop").innerHTML = text;

let blurb = "";
for (let e = 0; e < 10; e++) { //use continue to skip one of the iterations 
    if (e === 3) {continue; }
    blurb += "The number is " + e + "<br>";
}
document.getElementById("continue_skip3").innerHTML = blurb;