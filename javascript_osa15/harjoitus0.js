function laskeIka(syntymaaika, tanaan = new Date()) {
  const [vuosi, kuukausi, paiva] = syntymaaika.split("-").map(Number);
  let ika = tanaan.getFullYear() - vuosi;

  if (
    tanaan.getMonth() + 1 < kuukausi ||
    (tanaan.getMonth() + 1 === kuukausi && tanaan.getDate() < paiva)
  ) {
    ika--;
  }

  return ika;
}
const testi = new Date(2026, 7, 7);
console.log(laskeIka("2008-08-07", testi)); 
console.log(laskeIka("1985-08-08", testi)); 
console.log(laskeIka("1998-08-06", testi));