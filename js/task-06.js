const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidInput);

function onValidInput() {
  if (inputEl.value.length <= inputEl.dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  }

  if (inputEl.value.length > inputEl.dataset.length) {
    inputEl.classList.add('invalid');
  }
}
