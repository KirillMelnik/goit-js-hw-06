function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controls: document.querySelector('#controls'),
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
}

    

function createBoxes(amount) {
  let initialBoxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = `<div style="width: ${initialBoxSize}px; height: ${initialBoxSize}px; background-color: ${getRandomHexColor()};"></div>`
    refs.boxesEl.insertAdjacentHTML('beforeend', box);
    const boxSizeStep = 10;
    initialBoxSize += boxSizeStep;
  }
}

function destroyBox() {
  refs.boxesEl.innerHTML = '';
  refs.input.value = '';
}

refs.createBtn.addEventListener('click', () => {
  createBoxes(refs.input.value);
});

refs.destroyBtn.addEventListener('click', () => {
  destroyBox();
})