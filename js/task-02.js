const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listElem = document.querySelector('#ingredients');

const createMarkup = [];

ingredients.map(item => {
  const itemEl = document.createElement('li');
  itemEl.textContent = item;
  itemEl.classList.add('item');
  createMarkup.push(itemEl);
});

listElem.append(...createMarkup);
