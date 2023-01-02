const body = document.querySelector("body")
const navbarMenuMobile = document.querySelector(".nav-menu-mobile")
const openMenu = document.querySelector("#open-menu")
const closeMenu = document.querySelector("#close-menu")

openMenu.addEventListener("click", () => {
    navbarMenuMobile.classList.add("open-menu")
    body.classList.add("background-blur")
})

closeMenu.addEventListener("click", () => {
    navbarMenuMobile.classList.remove("open-menu")
    body.classList.remove("background-blur")
})