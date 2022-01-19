const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidInput);
console.log(typeof inputEl)

function onValidInput() {
  if (inputEl.value.length === inputEl.dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
  }
}
