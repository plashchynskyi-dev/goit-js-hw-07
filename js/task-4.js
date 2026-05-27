const formElem = document.querySelector(`.login-form`);
formElem.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === `` || passwordValue === ``) {
    alert(`Please fill in all the fields!`);
    return;
  }
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  event.currentTarget.reset();
}
