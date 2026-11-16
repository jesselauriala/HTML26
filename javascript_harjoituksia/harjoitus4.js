const hakukentta = document.getElementById("hakukentta");
const tuotelista = document.getElementById("tuotelista");
const viesti = document.getElementById("viesti");
const tuoteLomake = document.getElementById("tuoteLomake");
const uusiTuote = document.getElementById("uusiTuote");

function paivitaTuotelista() {
    const hakusana = hakukentta.value.toLowerCase();
    const tuotteet = document.querySelectorAll("#tuotelista li");

    tuotteet.forEach(tuote => {
        const teksti = tuote.textContent.toLowerCase();
        if (teksti.includes(hakusana)) {
            tuote.style.display = "";
        } else {
            tuote.style.display = "none";
        }
    });
}

hakukentta.addEventListener("input", paivitaTuotelista);

tuotelista.addEventListener("click", (event) => {
    const tuote = event.target.closest("li");
    if (!tuote) return;

    viesti.textContent = "Valitsit: " + tuote.textContent;
});

tuoteLomake.addEventListener("submit", (event) => {
    event.preventDefault();

    const nimi = uusiTuote.value.trim();
    if (nimi === "") return;

    const uusi = document.createElement("li");
    uusi.textContent = nimi;
    tuotelista.appendChild(uusi);

    uusiTuote.value = "";
    paivitaTuotelista();
    viesti.textContent = "Lisätty: " + nimi;
});