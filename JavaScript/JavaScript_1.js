function Pet_Function() {
    var Pet_Output;
    var Pets = document.getElementById("Animal_Input").value;
    var Pet_String = "s make great pets!";
    switch(Pets) {
        case "Cat":
            Pet_Output = "Cat" + Pet_String;
        break;
        case "Dog":
            Pet_Output = "Dog" + Pet_String;
        break;
        case "Guinea Pig":
            Pet_Output = "Guinea Pig" + Pet_String;
        break;
        case "Ferret":
            Pet_Output = "Ferret" + Pet_String;
        break;
        case "Bird":
            Pet_Output = "Bird" + Pet_String;
        break;
        case "Horse":
            Pet_Output = "Horse" + Pet_String;
        break;
        default:
            Pet_Output = "Please enter an animal exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Pet_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.font = "25px Helvetica";
ctx.strokeStyle = "#FF0000";
ctx.strokeText("Today is a good day!",10 ,50);

var d = document.getElementById("myCanvas");
var dtx = d.getContext("2d");
var grd = dtx.createLinearGradient(0,0,200,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
dtx.fillStyle = grd;
dtx.fillRect(20,20,150,100);