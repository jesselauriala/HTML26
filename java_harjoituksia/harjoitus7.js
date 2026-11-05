const opiskelijat = [
  { id: 1, nimi: 'Aino', pisteet: 82, aktiivinen: true },
  { id: 2, nimi: 'Mika', pisteet: 64, aktiivinen: false },
  { id: 3, nimi: 'Sara', pisteet: 78, aktiivinen: true }
];
const aktiivisetOpiskelijat = opiskelijat.filter(o => o.aktiivinen);
const opiskelijoidenTiedot = aktiivisetOpiskelijat
  .map(o => `${o.nimi} - ${o.pisteet}`);
const pisteidenSumma = aktiivisetOpiskelijat
  .reduce((summa, o) => summa + o.pisteet, 0);
const pisteitaYliNolla = pisteidenSumma > 0;

console.log(opiskelijoidenTiedot);
console.log(pisteidenSumma);
console.log(pisteitaYliNolla);
