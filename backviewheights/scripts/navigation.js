document.addEventListener("DOMContentLoaded", () => {
    const navButton = document.getElementById("navbutton");
    const menu = document.querySelector(".menulinks");

    navButton.addEventListener("click", () => {
        menu.classList.toggle("show");
        navButton.classList.toggle("open");
    });
});
