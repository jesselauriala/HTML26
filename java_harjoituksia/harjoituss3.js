const hedelmat = ["omena", "banaani", "appelsiini", "kiivi", "mango"];
console.log(hedelmat);

hedelmat.push("ananas");
console.log(hedelmat);

const poistettuhedelma = hedelmat.pop();

console.log("Poistettu:", poistettuhedelma);
console.log(hedelmat);

const includesKiwi = hedelmat.includes("kiivi");
console.log("Sisältää kiivin:", includesKiwi);



 // Harjoitus 2
const pisteet = [60, 80, 95, 70, 85, 90];

if (pisteet.length === 0) {
    console.log("Ei pisteitä");
} else {
    let summa = 0;

    for (let i = 0; i < pisteet.length; i++) {
        summa += pisteet[i];
    }

    const keskiarvo = summa / pisteet.length;

    console.log("Summa:", summa);
    console.log("Keskiarvo:", keskiarvo);

}

//Harjoitus 3
const nimet = ["Sara", "Aino", "Mika"];
console.log(nimet);

nimet.push("Oskari");
console.log(nimet);

console.log("Aino:", nimet.includes("Aino"));
console.log("Leevi:", nimet.indexOf("Leevi"));

const kopio = [...nimet];
kopio.sort();

console.log("Alkuperäinen:", nimet.join(", "));
console.log("Järjestetty:", kopio.join(", "));