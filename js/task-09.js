function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const colorName = document.querySelector('p .color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
})