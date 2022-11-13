function my_Dictionary1() { //Define and Name function
    var Animal= {
        Species: "Dog",  //Create KVPs for dictionary
        Color: "White",
        Breed: "Great Pyrenees",
        Age: 7, //No quotes needed because number
        Sound: "Woof!"
    };
    document.getElementById("Dictionary1").innerHTML=Animal.Breed; //display the value of the chosen key
}

function my_Dictionary2() { //Define and Name function
    var Animal= {
        Species: "Cat",  //Create KVPs for dictionary
        Color: "Orange",
        Breed: "Tabby",
        Age: 8, //No quotes needed because number
        Sound: "Meow!"
    };
    delete Animal.Breed; //Remove the key Breed from dictionary
    document.getElementById("Dictionary2").innerHTML=Animal.Breed; //Attempt to display the value of the deleted key
}