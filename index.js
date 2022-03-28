let isOpen = false

// open and close burger menu
const openMenu = () => {
    isOpen = !isOpen
    const leftMenu = document.getElementById("leftMenu")
    leftMenu.style.display = isOpen ? "flex" : "none"
}