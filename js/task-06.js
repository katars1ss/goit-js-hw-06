const validationInput = document.getElementById("validation-input");
let dataLength;

validationInput.addEventListener("blur", onInputBlur);

function onInputBlur() {
    dataLength = Number(this.getAttribute("data-length"));
    if (this.value.length === dataLength) {
        if (this.classList.contains("invalid")) {
            this.classList.remove("invalid");
        }
        this.classList.add("valid");
    }
    else {
        if (this.classList.contains("valid")) {
            this.classList.remove("valid");
        }
        this.classList.add("invalid");
    }
}
