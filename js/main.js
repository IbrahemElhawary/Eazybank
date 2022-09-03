let nav = document.querySelector("nav")
let burger = document.getElementById("hamburger")
function sitList() {
    nav.classList.toggle("active")
}



burger.onclick = sitList

