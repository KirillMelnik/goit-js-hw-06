const listElems = document.querySelectorAll('.item');
console.log('Number of categories:', listElems.length);

listElems.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Category: ${item.querySelectorAll('li').length}`);
});
