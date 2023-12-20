//REDIRECT to another page on click from NAVBAR

document.querySelector('.logo').onclick = () => {
    window.location.href = "../index.html"
}

document.querySelector(".gotoHome").onclick = () => {
    window.location.href = "../index.html"
}

document.querySelector(".gotoAbout").onclick = () => {
    window.location.href = "./AboutUs/index.html"
}

document.querySelector(".gotoContact").onclick = () => {
    window.location.href = "./ContactUs/index.html"
}

const contact = document.querySelector(".gotoContact")

contact.onclick = () => {
    window.location.href = "./ContactUs/index.html"
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
let Swidth = screen.width;
if(Swidth <= 600){
    hamIcon.style.display = "block"
}

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

        //DISPLAYING the image and meal in main page as well as MODAL using FOREACH
        randomMealImg.forEach(el => {
            el.setAttribute('src',`${data.meals[0].strMealThumb}`);
        })

        randomMealName.forEach(el => {
            el.innerHTML = data.meals[0].strMeal;
        })

        //Take ingredients and we display it into modalList
        let modalList = document.querySelector('.modalList')

        modalList.innerHTML = ""

        let currentMeal = data.meals[0]

        let ingredientsList = []

        for (let i = 1; i <= 8; i++) {
            //take every ingredient individually till there are no ingredients left
            const ingredient = data.meals[0][`strIngredient${i}`];
            const measure = data.meals[0][`strMeasure${i}`];
            
            // Add non-empty ingredients and measures to the list
            if (ingredient && measure) {
                ingredientsList+=`<li>${measure} ${ingredient}</li>`
            }

            modalList.innerHTML = `${ingredientsList}`
        }

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

// now we have to display searched resukts by category when enter pis piressed or button is clciked
const resultsGrid = document.querySelector('.resultsGrid')
const hideSearchResults = document.querySelector('.searchedResultsArea')

function getInputFromUserAndDisplay(){

    //make entire search area visible
    hideSearchResults.style.visibility = "visible" 

    const typeName = inputBox.value;

    // make result grid empty
    inputBox.innerHTML = ""

    resultsGrid.innerHTML = ""

    // fettch data from API by category via input box
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${typeName}`)
    
      .then((data) => data.json())
      .then((data) => {
        const diffMeals = data.meals
        //convert it to JSON

        //if theres no result found it should make the nohing found text  visible 
        let nothingFound = document.querySelector('.nothingFound')

        setTimeout(()=>{
            if(diffMeals == null){
                nothingFound.style.visibility = "visible"
            }
            else{
                nothingFound.style.visibility = "hidden"
            }
          },1000)

        // for each meal there will be a new result tile generated
        if(diffMeals != null)
        {
        diffMeals.forEach((el) => {
            //assign class to this result file
            let result = document.createElement('div')
            result.setAttribute('class','result')

            // addd the image to the div and give it appropriate class
            let searchImg = document.createElement('img')
            searchImg.setAttribute('class','searchedMealImg')
            searchImg.setAttribute('src',el.strMealThumb)
            searchImg.setAttribute('alt','Searched Meal Image"')

            // write the name of he dish below the pic of the dish
            let searchHeading = document.createElement('h4')
            searchHeading.setAttribute('class','searchedMealName')
            searchHeading.innerHTML = el.strMeal


            //pin image
            let pinImg = document.createElement('img')
            pinImg.setAttribute('class','SearchPin')
            pinImg.setAttribute('src','./Images/pin.png')
            pinImg.setAttribute('alt','Pin Image"')

            // append the following stuff to result Tile
            result.append(searchImg,searchHeading,pinImg)

            // now append the result tile to the Results grid
            resultsGrid.append(result)
        })
    }

        // make the nohitng found text visible after a second if theres nothing there
        
      });

    //   using set timeout to scroll when random recipe from navbar is clicked
      setTimeout(()=>{
        var elementToScrollTo = document.querySelector('.scrollHere')
        
      elementToScrollTo.scrollIntoView({behavior: "smooth" });
      },1000)

      
}

//hamburger menu
const hmRandom = document.querySelector('.hmRandom')

hmRandom.onclick = () => {
    hamIcon.style.display = "block"
    ham.style.display = "none"
}


//display a random fact from the three in the DID YOU KNOW? Section using math.random
const fact = document.querySelector('.fact')

window.onload = () => {
    var randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber == 1){
        fact.innerHTML = `Potatoes were the first <br>food planted in space!`
    }
    if(randomNumber == 2){
        fact.innerHTML = `Raspberries are a member of <br>the ROSE family!`
    }
    if(randomNumber == 3){
        fact.innerHTML = `There's more water in<br>cucumber than a Watermelon!`
    }
}






