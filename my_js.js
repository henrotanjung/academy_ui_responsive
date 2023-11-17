function myFunction(x) {
    var image_first_el = document.getElementById("image_first_col");
    var image_last_el = document.getElementById("image_last_col");
    if (x.matches) { // If media query matches
        // document.body.style.backgroundColor = "yellow";

        image_first_el.style.display = "none";
        image_last_el.style.display = "none";
    } else {
        // document.body.style.backgroundColor = "pink";
        image_first_el.style.display = "block";
        image_last_el.style.display = "block";
    }
}

var x = window.matchMedia("(max-width: 767px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes