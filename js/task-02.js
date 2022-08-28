const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let listItemsArr = []
const ingredientsList = document.getElementById('ingredients')

function createIngredients(item) { 
  const listItem = document.createElement('li')
  listItem.innerText = item;
  console.log('listItem', listItem);
  listItem.classList.add('item')
  listItemsArr.push(listItem);
}

ingredients.forEach(item => { 
  createIngredients(item)
})

ingredientsList.append(...listItemsArr)


