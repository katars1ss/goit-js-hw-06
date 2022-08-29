const fontSizeControl = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
    spanText.style.fontSize = fontSizeControl.value + "px";
});

