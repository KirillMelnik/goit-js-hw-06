const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  if (
      evt.currentTarget.elements.email.value === '' ||
      evt.currentTarget.elements.password.value === ''
  )
  {
    alert('All form fields must be filled out!');
  }
    
  else {
      const formData = {
          email: evt.currentTarget.elements.email.value,
          password: evt.currentTarget.elements.password.value,
      }
      console.log(formData)
      evt.currentTarget.reset();
    }   
}
