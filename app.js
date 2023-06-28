// create 12 cards //
// 6 cards are created but we need 12, so copy & paste //

const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'icecream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'icecream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  } 
]

cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)

const gridDisplay = document.querySelector('#grid')
console.log(gridDisplay)
const resultDisplay = document.querySelector('#result')

let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.append(card)
    console.log(card, i)
  } 
}

createBoard()

function checkMatch() {
  const cards = document.querySelectorAll('img') 
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]
  console.log('check for match!')

  if (optionOneId == optionTwoId) {
    alert('You have clicked the same image!')
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert('You found a match!')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry try again!')
  }
  resultDisplay.innerHTML = cardsWon.length
  cardsChosen = []
  cardsChosenIds = []

  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.innerHTML = 'Congratulations you found them all!'
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id')
  console.log(cardArray[cardId].name)
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log(cardsChosenIds)
  console.log('clicked', cardId)
  console.log(cardsChosen)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}

