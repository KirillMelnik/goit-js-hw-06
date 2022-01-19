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

let initialBoxSize = 30;
const boxSizeStep = 10;

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const box = `<div style="width: ${initialBoxSize}px; height: ${initialBoxSize}px; background-color: ${getRandomHexColor()};"></div>`
    initialBoxSize += boxSizeStep;
    refs.boxesEl.insertAdjacentHTML('beforeend', box);
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