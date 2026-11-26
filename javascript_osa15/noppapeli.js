function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const silmaluvut = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < 100; i++) {
  const heitto = randomInt(1, 6);

  silmaluvut[heitto - 1]++;
}

console.table(silmaluvut);

const heittojenMaara = silmaluvut.reduce(
  (summa, maara) => summa + maara,
  0
);

console.log("Heittojen määrä:", heittojenMaara);