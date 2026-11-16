const form = document.getElementById("palautelomake");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const yhteydenottolupa = formData.has("yhteydenottolupa") ? "Kyllä" : "Ei";

    alert(
        `Yhteenveto\n\n` +
        `Aihe: ${formData.get("aihe")}\n` +
        `Viesti: ${formData.get("viesti")}\n` +
        `Arvosana: ${formData.get("arvosana")}\n` +
        `Yhteydenottolupa: ${yhteydenottolupa}`
    );
});
