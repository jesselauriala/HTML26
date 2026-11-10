const asetukset = {
    id: 1,
    teema: 'dark',
    kieli: 'fi'
};

const { teema, kieli } = asetukset;
const { fonttikoko = 16 } = asetukset;
const { fonttikoko: fonttikoko20 = 16 } = { ...asetukset, fonttikoko: 20 };
const { fonttikoko: fonttikokoNull = 16 } = { ...asetukset, fonttikoko: null };
const { id, ...muutAsetukset } = asetukset;

console.log(teema, kieli);
console.log(fonttikoko, fonttikoko20, fonttikokoNull);
console.log(id, muutAsetukset);