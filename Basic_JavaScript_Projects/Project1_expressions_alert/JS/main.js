
window.alert("Hello, World!"); //Alert when page is first opened
var Family = "The Howenstines", Mom = "Madeleine", Oldest = "Josiah", Middle = "Jared", Youngest = "Justin"; //Assigned variables
document.write(Youngest); //Print value of variable Youngest
document.write(4*5); //Print the value of the expression
function My_First_Function() { //defining the function and naming it
    var str="This is the button text!";// defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML=str;//Putting the value of the variable into HTML elementFromPoint with the "Button_Text" id
}
var Sent1 = "This is the beginning of the string", Sent2 = " and this is the end of the string"; //Set values of variables Sent1 and Sent2
document.write(Sent1 + Sent2); //concatenate variables Sent1 and Sent2 to make the full sentence

function bigImg(x) { //Created function to increase image size
    x.style.height = "150px";
    x.style.width = "200px";
  }
  
function normalImg(x) { //Created function for normal image size
    x.style.height = "75px";
    x.style.width = "100px";
  }