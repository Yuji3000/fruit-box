var fruits = [ 
  {
    name: 'Lemon',
    img: 'https://bit.ly/2wQwmYG',
    id: 0
  }, 
  {
    name: 'Lime',
    img: 'https://bit.ly/344kBtA',
    id: 1
  },
  {
    name: 'Apple',
    img: 'https://bit.ly/2X1v3AJ',
    id: 2
  }
]

var fruitBox = document.querySelector('.fruit-box');

window.addEventListener("load", renderFruit);


// Try It #1:
function renderFruit() { 
  fruitBox.innerHTML = '';
  for(var i = 0; i < fruits.length; i++) {
    fruitBox.innerHTML += `
    <section class=fruit>
      <h2>${fruits[i].name}</h2>
      <img src=${fruits[i].img} />
      <button id=${fruits[i].id}>Eat</button>
    </section>`
  }
}



// Try It #2:
var addFruitButton = document.querySelector('#add-button');

addFruitButton.addEventListener("click", function() {
  addFruit('Banana', 'https://bit.ly/3bNpVnT')
});



function addFruit(name, img) {
  var newFruit = {
    name: name,
    img: img,
    id: Date.now() // Assign a unique ID based on the current length of the fruits array
  };
  
  fruits.push(newFruit);
 
  renderFruit(); 
}



// Try It #3:
fruitBox.addEventListener('click', function() {
  deleteFruit(parseInt(event.target.id));
});

function deleteFruit(id) {
  for(var i = 0; i < fruits.length; i++) {
    if (fruits[i].id == id) {
      fruits.splice([i], 1)
    }
  }
  console.log(fruits)
  renderFruit();
}