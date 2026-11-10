const nimi = '   Aino Virtanen   ';

const valit = nimi.trim();
const pienella = valit.toLowerCase();
console.log("Pituus:", pienella.length);
console.log("Ensimmäinen:", pienella[0]);
console.log("Viimeinen:", pienella[pienella.length - 1]);
const kayttajatunnus = pienella.replace(" ", ".");
console.log(kayttajatunnus);

