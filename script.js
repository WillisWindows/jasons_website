function openHamburgerMenu(){
    document.getElementById('menu').classList.toggle('active')
}


// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();