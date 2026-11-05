const tuotteet = [
  { nimi: 'Hiiri', hinta: 25, saldo: 4 },
  { nimi: 'Näyttö', hinta: 240, saldo: 0 },
  { nimi: 'Kaapeli', hinta: 12, saldo: 7 }
];

const saldo = tuotteet
  .filter(tuote => tuote.saldo > 0)
  .map(tuote => tuote.nimi);
console.log(saldo);



