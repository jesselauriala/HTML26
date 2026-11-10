const opiskelija = {
    nimi: 'Aino',
    ikä: 21,
    Koulutusala: 'Ohjelmistokehitys',
    aktiivinen: true,
    pisteet: 82,


esittele() {
        console.log(
            `Nimi: ${this.nimi}, ikä: ${this.ikä}, koulutusala: ${this.Koulutusala}, aktiivinen: ${this.aktiivinen}, pisteet: ${this.pisteet}`
        );
    }
};

opiskelija.esittele();


//harjoitus 2

const tuotteet = [
    { id: 1, nimi: 'Langaton hiiri', hinta: 24.90, saldo: 15 },
    { id: 2, nimi: 'Näppäimistö', hinta: 49.90, saldo: 8 },
    { id: 3, nimi: 'Näyttö', hinta: 199.00, saldo: 5 },
    { id: 4, nimi: 'Kuulokkeet', hinta: 39.90, saldo: 12 }
];

const haettavatIdt = [2, 99];

for (const id of haettavatIdt) {
    const tuote = tuotteet.find(tuote => tuote.id === id);

    if (tuote) {
        console.log('Löytyi:', tuote);
    } else {
        console.log(`Tuotetta id:llä ${id} ei löydy.`);
    }
}