const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.input.addEventListener('input', onFontSizeChange);

function onFontSizeChange() {
  refs.text.style.fontSize = `${refs.input.value}px`;
}
