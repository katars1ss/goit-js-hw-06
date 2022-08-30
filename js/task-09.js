function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  divWidget : document.querySelector(".widget"),
  changeColorBtn : document.querySelector(".change-color"),
  colorName : document.querySelector(".color"),
}

refs.changeColorBtn.addEventListener('click', onChangColorBtn);

function onChangColorBtn() {
  refs.divWidget.parentNode.style.backgroundColor = getRandomHexColor();
  
  refs.colorName.textContent = getRandomHexColor();
}