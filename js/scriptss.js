document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.querySelector(".burger-icon");
    const mobileNav = document.querySelector(".mobile-nav");

    burgerIcon.addEventListener("click", function () {
        if (mobileNav.style.display === "block") {
            mobileNav.style.display = "none";
        } else {
            mobileNav.style.display = "block";
        }
    });
});
