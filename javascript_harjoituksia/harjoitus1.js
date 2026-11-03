function arvosana(pisteet) {
    if (pisteet < 0 || pisteet > 100) {
        return "Virheelliset pisteet";
    } else if (pisteet <= 49) {
        return "Hylätty";
    } else if (pisteet <= 69) {
        return "Tyydyttävä";
    } else if (pisteet <= 89) {
        return "Hyvä";
    } else {
        return "Kiitettävä";
    }
}

console.log(arvosana(90));


function kertotaulufunktio(luku) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${luku} x ${i} = ${luku * i}`);
    }
}
kertotaulufunktio(7);