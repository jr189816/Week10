const menuToggle = document.querySelector(".nav-button");
const menu = document.querySelector("#main-nav-list");

/* Toggle mobile menu */
function toggleMenu() {    
    if (menu.classList.contains("active")) {                menu.classList.remove("active");                    toggle.innerHTML = "&#9776;"    
    } 
    else {        
        menu.classList.add("active");         toggle.innerHTML = "X";    
    }
}

/* Event Listener */
menuToggle.addEventListener("click", toggleMenu, false);