const inputElem = document.querySelector(`input#name-input`);
const spanElem = document.querySelector(`span#name-output`);
inputElem.addEventListener(`input`, onInputChange);

function onInputChange(event) {
  spanElem.textContent = event.currentTarget.value.trim() || `Anonymous`;
}
