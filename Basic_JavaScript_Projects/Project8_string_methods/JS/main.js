function full_Sentence() { //define a function using the concat() method
    var part_1 = "This should "; //Define the parts of the sentence to be concatenated
    var part_2 = "make a ";
    var part_3 = "complete and ";
    var part_4 = "uninterrupted sentence.";
    var whole_sentence = part_1.concat(part_2,part_3,part_4); // concatenate all the parts
    document.getElementById("Concatenate").innerHTML = whole_sentence; //Display fully concatenated sentence
}

function slice_Method() { //define a slice method function
    var Sentence = "Hello. My name is Inigo Montoya. You killed my father, prepare to die!";
    var Section = Sentence.slice(18,31); // cuts out the "Inigo Montoya" portion of the string
    document.getElementById("Slice").innerHTML = Section; //display the sliced portion
}

function search_Method() { //Deffine a search method function
    var Sentence = "Hello. My name is Inigo Montoya. You killed my father, prepare to die!";
    var Position = Sentence.search("Inigo"); //locate where in the string "Inigo" starts
    document.getElementById("Search").innerHTML = Position; // display the starting postion of where the search item is in the string
}

function upper_Case() { // define a toUpperCase function
    var sent = "This is originally written with both cases.";
    document.getElementById("UpperCase").innerHTML = sent.toUpperCase(); //change sentence to all uppercase letters
}

function string_Method() { //define a function using toString() method
    var X = 42;
    document.getElementById("Numbers_to_String").innerHTML = X.toString(); //display the number as a string
}

function precision_Method() { //Define a function using toPrecision() method
    var X = 3.14159265358979; //define the variable to be a number with 15 digits
    document.getElementById("Precision").innerHTML = X.toPrecision(10);// use the toPrecision method to display the first 10 digits
}

function fixed_Method() { //define function using toFixed() method
    var num = 3.14159265358979; // define a value
    var N = num.toFixed(5); // define N to be num fixed at 5 deciaml places
    document.getElementById("Fixed").innerHTML = N;// display the fixed value N
}

function value_Method() { //define function with valueOf() method
    var text = "Hi Mom!";
    document.getElementById("Valueof").innerHTML = text.valueOf(); // return the primitive value of the string "text"
}
