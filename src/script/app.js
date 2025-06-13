const navBtnLine = document.querySelector(".nav-menu-icon")
const navContent = document.querySelector(".nav-horizontal-content")

function addListLine() {
    const navList = document.querySelector(".nav-list")
    if (!navList.querySelector(".nav-list-line")) {
        const navListLine = document.createElement("div")
        navListLine.className = "nav-list-line"
        navList.appendChild(navListLine)
    }
    else {
        const navListLine = navList.querySelector(".nav-list-line")
        navListLine.remove()
    }
}

function toggleMenu() {
    navBtnLine.classList.toggle("nav-menu-icon-active")
    navContent.classList.toggle("nav-vertical-content-show")
    addListLine()
}

function update() {
    if (window.innerWidth < 500) {
        navContent.classList.add("nav-vertical-content")
    } else {
        navContent.classList.remove("nav-vertical-content")
    }
}

window.addEventListener("resize", update)
update()
