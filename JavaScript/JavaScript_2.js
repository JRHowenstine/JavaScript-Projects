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
}