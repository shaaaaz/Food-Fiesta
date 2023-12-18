//REDIRECT to another page on click from NAVBAR
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

const contact = document.querySelector(".gotoContact")

contact.onclick = () => {
    window.location.href = "../ContactUs/index.html"
}

//MODAL visisble and hide it

const open = document.querySelector('#open')
const modal = document.querySelector('.modalContainer')
const modalContainer = document.querySelector('.bigModal')

open.onclick = () => {
    modalContainer.style.visibility = "visible"
    modal.style.display = "block"
}

const close = document.querySelector('.close')

close.onclick = () => {
    modalContainer.style.visibility = "hidden"
    modal.style.display = "none"
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
        ham.style.display = "none"
    }
    if(width<=600 && hamVisible==true){
        hamIcon.style.display = "none"
        ham.style.display = "block"
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







//code to get IMAGE and NAME of the RANDOM MEAL via API

const randomMealImg = document.querySelectorAll('.randomMealImg')
const randomMealName = document.querySelectorAll('.randomMealName')

async function getRandomMeal() {
    try {
        //using FETCH to get the details of random meal as an OBJECT
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
        const data = await res.json();

        console.log(data);

        //DISPLAYING the image and meal in main page as well as MODAL using FOREACH
        randomMealImg.forEach(el => {
            el.setAttribute('src',`${data.meals[0].strMealThumb}`);
        })

        randomMealName.forEach(el => {
            el.innerHTML = data.meals[0].strMeal;
        })

    } catch (error) {
        //Incase theres an error we console log the error
        console.error("An error has occured while fetching the data for random meal - ", error);
    }
}

getRandomMeal()

//Searched Meal Section

//get input from inout box and search for the input using API
const inputBox = document.querySelector('.searchBox')
const searchButton = document.querySelector('.search')

//when user presses enter key it should take input
inputBox.addEventListener('keypress',function(e){
    if(e.key == "Enter")
    {
        e.preventDefault()
        getInputFromUserAndDisplay()
    }
})

//even when search button is clciked
searchButton.onclick = () => {
    getInputFromUserAndDisplay()
}

function getInputFromUserAndDisplay(){
    const typeName = inputBox.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${typeName}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
      });
}




