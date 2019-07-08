//listen for click on any bottle
//When clicked, ask user if they want to "take it down, pass it arround"
//If yes, add a class of "drank" 
//and decrease number up top

const bottles = document.querySelectorAll('.bottle')
const counter = document.querySelectorAll('.count')

function drink () {
    if (confirm('are you sure you want a beer')){
        this.classList.add('drank')
        counter.forEach(beerCount => beerCount.textContent--)
    } else {
        //window.location.href"url" if you want to move to a different page
        alert('smart move, you have to drive later!')
    }
 
 

}

bottles
    .forEach(beer => beer.addEventListener('click', drink))