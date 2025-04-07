let btnBurger = document.querySelector(".burger-icon")
let mobile_nav = document.querySelector(".mobile-nav")

btnBurger.addEventListener("click", function() {
    mobile_nav.classList.toggle("d-block")
    mobile_nav.classList.toggle("d-none")
})