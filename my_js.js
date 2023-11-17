function myFunction(x) {
    var image_center_el = document.getElementById("image_center");
    var image_last_el = document.getElementById("image_last");
    if (x.matches) { // If media query matches
        // document.body.style.backgroundColor = "yellow";

        image_center_el.style.display = "none";
        image_last_el.style.display = "none";
    } else {
        // document.body.style.backgroundColor = "pink";
        image_center_el.style.display = "flex";
        image_last_el.style.display = "flex";
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes