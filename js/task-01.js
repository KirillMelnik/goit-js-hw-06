const listElems = document.querySelectorAll('.item');
console.log('Number of categories:', listElems.length);

listElems.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.querySelectorAll('li').length}`)
});

