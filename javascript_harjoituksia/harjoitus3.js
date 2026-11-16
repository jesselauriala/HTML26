const nameInput = document.getElementById("name");
const previewSpan = document.getElementById("preview");

nameInput.addEventListener("input", () => {
    if (nameInput.value === "") {
        previewSpan.textContent = "vieras";
    } else {
        previewSpan.textContent = nameInput.value;
    }
});