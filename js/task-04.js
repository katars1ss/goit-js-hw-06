let counterValue = 0;
const counter = document.getElementById('value');
const counterBlock = document.querySelector("#counter");

counterBlock.firstElementChild.addEventListener("click", () => {
    counterValue -= 1;
    value.innerHTML = counterValue;
});
counterBlock.lastElementChild.addEventListener("click", () => {
    counterValue += 1;
    value.innerHTML = counterValue;
});

