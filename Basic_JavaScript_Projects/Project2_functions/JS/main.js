function Function_1() { // Defining and naming the function
    var x="Justin", y=" Howenstine";//Setting the values of the variables
    document.getElementById("Button_Text").innerHTML=(x+y); //When button click show concatenated variables
}
function Function_2() { //Define and name second function
    document.getElementById("Paragraph").style.color = "red"; //make the text of the paragraph element red
}
function Function_3() { //Define and name third function
    var sentence = "I am learning"; //define variable sentence
    sentence += " a lot from this book!";//use the += operator to concatenate string to sentence variable
    document.getElementById("Concatenate").innerHTML=sentence;//print the full concatenated string
}
