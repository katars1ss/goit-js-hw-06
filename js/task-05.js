const nameInput = document.getElementById('name-input');
const greeting = document.getElementById('name-output');

nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    greeting.textContent = event.currentTarget.value;
    if (nameInput.value === "") {
        greeting.textContent = "Anonymous"
    }
}

