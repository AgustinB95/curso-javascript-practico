const mail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu"); 

mail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}