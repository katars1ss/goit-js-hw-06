let boxesHTML = '';
let boxSize = 30;
let amount;
let takeOnInterval;
let isCreated = false;


const controlButtons = document.getElementById("controls");
const createdBoxes = document.getElementById("boxes");
const createBtn = controlButtons.firstElementChild.nextElementSibling;
const destroyBtn = controlButtons.lastElementChild;

gsap.set("#takeOnMe", {autoAlpha: 0, x: "-100%"})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function paintBoxes(amount) {
  for (let i = 0; i <= amount - 1; i++) {
    
  }
}
function createBoxes(amount) {
  for (let i = 0; i <= amount - 1; i++) {
    boxesHTML += `<div class = "box" style = "width : ${boxSize}px; height : ${boxSize}px; background-color : ${getRandomHexColor()}; border : 1px solid grey; margin: 0 auto; transform: perspective(900px); transform-style: preserve-3d"></div>`
    boxSize += 10;
  }
  createdBoxes.innerHTML = boxesHTML;
}

function destroyBoxes(event) {
  createdBoxes.innerHTML = '';
  boxesHTML = '';
  boxSize = 30;
  controlButtons.firstElementChild.value = 0
}

function clearBoxes(event) {
  boxesHTML = '';
  boxSize = 30;
}

createBtn.addEventListener("click", () => {
  clearBoxes();
  amount = Number(controlButtons.firstElementChild.value);
  if (!amount) {
    alert("Please enter a number!");
    return;
  }
  createBoxes(amount)

  if (!isCreated) { 
    gsap.to("#takeOnMe", 1, { autoAlpha: 1, x: 0 })
    isCreated = true;
  }
  setIframeClickMonitor()
});

destroyBtn.addEventListener("click", () => {
  clearInterval(takeOnInterval)
  destroyBoxes()
});

function setIframeClickMonitor() {
  let monitor = setInterval(function () {
    let elem = document.activeElement;
    if (elem && elem.tagName == 'IFRAME') {
      //console.log('Clicked');
      clearInterval(monitor);

      setTimeout(() => {
        takeOnInterval = setInterval(() => {
          clearBoxes()
          createBoxes(amount)
        }, 355)
      }, 1700)
    }
  }, 100);
}