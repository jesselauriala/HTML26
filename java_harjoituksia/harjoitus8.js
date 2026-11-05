const luvut =[2,4,6];

console.log(luvut.map(luku => luku * 5));

//harjoitus 2

const luku = [4, 12, 8, 20];
 const filtteröidytluvut = luku.filter(luku => luku > 10);
 console.log(filtteröidytluvut);

 

 //harjoitus 3  filteröidyt luvut

 const luku3 = [2, 8, 15, 20];
 const finded = luku3.find(luku => luku > 10);
 console.log(finded);


 //harjoitus 4 some onko parillinen tai pariton

 const luvut4 = [4, -2, 8];
 const negatiivinen = luvut4.some(luku => luku < 0);
 console.log(negatiivinen);


 //harjoitus 5 reduce laskee yhteen luvut

 const luvut5 = [2, 3, 5];
const lasketulos = luvut5.reduce((acc, luku) => acc + luku, 0);
console.log(lasketulos);


//harjoitus 6 map voi laskea alennuksen

const luvut6 = [20, 40, 80];
const alennetut = luvut6.map(luku => luku * 0.9);
console.log(alennetut);

//harjoitus 7 filteröidyt nimet esim yli 5 kirjainta
const nimet = ['Li','Anna','Mikko','Eevi'];
const vahintaanviidenkirjaimet = nimet.filter(nimi => nimi.length >= 5);
console.log(vahintaanviidenkirjaimet);

//harjoitus 8 some tarkistaa löytyykö vähintään yksi alkio, joka täyttää ehdon.

const vapaapaikka = [false, false, true, false];
const onkoVapaata = vapaapaikka.some(paikka => paikka === true);
console.log(onkoVapaata);

//harjoitus 9 every voidaan tarkista onko esimerkiksi kaikki läpäisseet yli 50 pistettä.

const läpäisseet = [67,82,49,90];
const läpäisseet2 = läpäisseet.every(luku => luku >= 50);
console.log(läpäisseet2);

//harjoitus 10 reducella voidaan laskea yhteen kaikki luvut taulukossa.

const euroina = [12.5,9.9,3.6];
const euroina2 = euroina.reduce((acc, luku) => acc + luku, 0);
console.log(euroina2);

//harjoitus 11 sort. voidaan lajitella taulukko aakkosjärjestykseen.

const nimetAakkosjärjestyksessä = ['Veera','Aino','Oona'];
const nimetAakkosjärjestyksessä2 = nimetAakkosjärjestyksessä.sort();
console.log(nimetAakkosjärjestyksessä2);

//harjoitus 12 Sort, voidaan lajitella taulukko suurimmasta pienimpään.

const suurinEnsin = [12,3,25,8];
const suurinEnsin2 = suurinEnsin.sort((a,b) => b - a);
console.log(suurinEnsin2);

//harjoitus 13  indexOf, voidaan tarkistaa kuinka mones esim sama on listalla.

const kayttajanpaikka = ['Aino','Sara','Mika'];
const kayttajanpaikka2 = kayttajanpaikka.indexOf('Sara');
console.log(kayttajanpaikka2);

//harjoitus 14 includes, voidaan tarkistaa löytyykö esim tuote listalta.

const löytyykötuote = ['tee','mehu','kahvi'].
includes('kahvi');
console.log(löytyykötuote);

//harjoitus 15 reduce ja length voidaan laskea keskiarvo.

const lampotilat=[14,18,17,21,20];
 const summa=lampotilat.reduce((s,l)=>s+l,0);
  console.log(summa/lampotilat.length);


//harjoitus 16  filter haettu yli 50p pisteet saaneet.

const opiskelijat = [
  { nimi: "Aino", pisteet: 75 },
  { nimi: "Mika", pisteet: 45 },
  { nimi: "Sara", pisteet: 88 }];

  const hyväksytyt = opiskelijat.filter(opiskelija => opiskelija.pisteet >= 50);
  console.log(hyväksytyt);


  // harjoitus 17 reduce voidaan laskea suurin luku taulukossa.
  const kallein = [14,29,8,41];
  const kallein2 = kallein.reduce((acc, luku) => Math.max(acc, luku), -Infinity);
  console.log(kallein2);

//harjoitus 18 filter voidaan erotella parilliset ja parittomat luvut.

  const parillisetjaParittomat = [1,2,3,4,5,6,7,8];
  const parilliset = parillisetjaParittomat.filter(luku => luku % 2 === 0);
  console.log(parilliset);
  const parittomat = parillisetjaParittomat.filter(luku => luku % 2 !== 0);
  console.log(parittomat);

  //harjoitus 19 reduce voidaan laskea varaston arvo

  const varastoarvo =
  [
  { hinta: 5, maara: 3 },
  { hinta: 8, maara: 2 },
  { hinta: 12, maara: 1 }]

  const varastoarvo2 = varastoarvo.reduce((acc, tuote) => acc + (tuote.hinta * tuote.maara), 0);
  console.log(varastoarvo2);

  //harjoitus 20

  const tilastoraportti = [12,5,18,7,20,9];
    const tilastoraportti2 = tilastoraportti.reduce((acc, luku) => {
      if (luku > acc) {
        return luku;
      }
      return acc;
    }, -Infinity);
    console.log(tilastoraportti2);