//REDIRECT to another page on click from NAVBAR

document.querySelector('.logo').onclick = () => {
    window.location.href = "../index.html"
}

document.querySelector(".gotoHome").onclick = () => {
    window.location.href = "../index.html"
}

document.querySelector(".gotoRandom").onclick = () => {
    window.location.href = "../index.html"
}

document.querySelector(".gotoAbout").onclick = () => {
    window.location.href = "../AboutUs/index.html"
}

document.querySelector(".gotoContact").onclick = () => {
    window.location.href = "../ContactUs/index.html"
}

//HAMBURGER MENU for mobile view
const hamIcon = document.querySelector('.hmIcon')
const ham = document.querySelector('.hamburger')

let hamVisible = false

hamIcon.onclick = () => {
    hamIcon.style.display = "none"
    ham.style.display = "block"
    hamVisible = true
}

const closeHam = document.querySelector('.closehm')

closeHam.onclick = () => {
    hamIcon.style.display = "block"
    ham.style.display = "none"
    hamVisible=false
}

//Solve the bug of hiding hamburger when window is RESIZED

addEventListener("resize", (event) => {
    let width = screen.width;
    if(width>600){
        ham.style.display = "none"
        hamIcon.style.display = "none"
    }
    if(width<=600 && hamVisible==false){
        hamIcon.style.display = "block"
    }
});

//hamburger REDIRECTION

document.querySelector(".hmHome").onclick = () => {
    window.location.href = "../index.html"
}

document.querySelector(".hmRandom").onclick = () => {
    window.location.href = "../index.html"
}

document.querySelector(".hmAbout").onclick = () => {
    window.location.href = "../AboutUs/index.html"
}

document.querySelector(".hmContact").onclick = () => {
    window.location.href = "../ContactUs/index.html"
}


