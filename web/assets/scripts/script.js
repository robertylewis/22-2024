// Navbar script

function toggleNav() {
    var navholder = document.getElementById("navholder-mobile");
    if (navholder.style.height === "100%") {
        navholder.style.height = "0%";
    } else {
        navholder.style.height = "100%";
    }
}