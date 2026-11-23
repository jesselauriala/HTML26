import { lataaTuotteet, tallennaTuotteet } from "./storage.js";
import { naytaTuotteet } from "./ui.js";

let tuotteet = [];

function paivitaNakyma() {
  naytaTuotteet(tuotteet, poistaTuote);
}

function poistaTuote(indeksi) {
  tuotteet.splice(indeksi, 1);
  tallennaTuotteet(tuotteet);
  paivitaNakyma();
}

function lisaaTuote(tapahtuma) {
  tapahtuma.preventDefault();

  const lomake = tapahtuma.currentTarget;
  const nimi = lomake.elements.namedItem("nimi").value.trim();
  const hinta = Number(lomake.elements.namedItem("hinta").value);
  const maara = Number(lomake.elements.namedItem("maara").value);

  if (
    !nimi ||
    !Number.isFinite(hinta) ||
    hinta < 0 ||
    !Number.isInteger(maara) ||
    maara < 1
  ) {
    alert(
      "Anna tuotteen nimi, kelvollinen hinta " +
        "ja positiivinen kokonaislukumäärä.",
    );
    return;
  }

  tuotteet.push({ nimi, hinta, maara });
  tallennaTuotteet(tuotteet);
  paivitaNakyma();
  lomake.reset();
}

function kaynnista() {
  tuotteet = lataaTuotteet();
  paivitaNakyma();
  document.querySelector("#tuotelomake").addEventListener("submit", lisaaTuote);
}

document.addEventListener("DOMContentLoaded", kaynnista);
