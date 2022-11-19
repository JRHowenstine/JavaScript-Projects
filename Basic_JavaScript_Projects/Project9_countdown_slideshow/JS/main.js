function countdown() { // Name and define the countdown function
    var seconds = document.getElementById("seconds").value; //get the number of seconds for countdown from input

    function tick() { //define the function that actually counts the seconds down
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time is up!"); //set alert to go off when countdown hits zero
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

// SLIDESHOW

let slideIndex = 1; //define index for images
showSlides(slideIndex);

// NEXT AND PREVIOUS CONTROLS
function plusSlides(n) { //define function for controling movement between slides
    showSlides(slideIndex += n);
}

// THUMBNAIL IMAGE CONTROLS
function currentSlide(n) { //define this function and next for which slide gets shown when clicking next/prev buttons
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("Slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}