function myFunction(x) {
    var image_first_el = document.getElementById("image_first_col");
    var image_last_el = document.getElementById("image_last_col");

    if (x.matches) { // If media query matches

        image_first_el.style.display = "none";
        image_last_el.style.display = "none";

    } else {
        image_first_el.style.display = "block";
        image_last_el.style.display = "block";

    }
}

function update_responsive_navbar(screen_size) {
    var navbar_container_el = document.getElementById("navbar_container");
    if (screen_size.matches) {
        navbar_container_el.classList.remove("container");
    } else {
        navbar_container_el.classList.add("container");
    }
}

var x = window.matchMedia("(max-width: 767px)")
var navbar_match_size = window.matchMedia("(max-width: 991px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
update_responsive_navbar(navbar_match_size)
navbar_match_size.addListener(update_responsive_navbar)