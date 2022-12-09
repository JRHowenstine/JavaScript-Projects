window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
})
function getReceipt() {
    // This initializes our string so it can get passed from
    //  function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:<h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") { // Select one size of pizza for base price
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; // Running total is just size price initially
    console.log(selectedSize+" = $"+sizeTotal+".00"); // show in console log the selected size and price
    console.log("size text1: "+text1); // Show in log what had been ordered and will show in final receipt
    console.log("subtotal: $"+runningTotal+".00"); // Show in console log the running subtotal 
    // These variables will get passed on to each function
    getTopping(runningTotal,text1);
};
function getTopping(runningTotal,text1) { // Select as many toppings as desired
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");  // Create an array of all the meat and vegetable toppings
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")"); // Show in console log topping chosen
            text1 = text1+toppingArray[j].value+"<br>"; // Add topping chosen to list for final receipt 
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); // Deduct one free topping from the customer's choices
    } else {
        toppingTotal = 0; // If the customer only chooses 1 or no toppings there will be no charge added to total
    }
    runningTotal = (runningTotal + toppingTotal); // Running total becomes size price plus (total toppings chosen - 1 free topping)
    console.log("total selected topping items: "+toppingCount); // Show in log number of toppings chosen
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00"); //show in console total price for toppings
    console.log("topping text1: "+text1); // Show in console the string of what toppings were selected
    console.log("Purchase Total: "+"$"+runningTotal+".00"); // Show in console the total
    document.getElementById("showText").innerHTML=text1; // Display on page the list of size and toppings
    document.getElementById("totalPrice").innerHTML= "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"; // Display total of order
}

function validateForm() {
    let x = document.forms["myForm"]["firstName"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }
    let y = document.forms["myForm"]["lastName"].value;
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
    let z = document.forms["myForm"]["phoneNumber"].value;
    if (z == "") {
        alert("Phone number must be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById("popup").style.display = "block";
}

