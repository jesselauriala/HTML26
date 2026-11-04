
function suurempi(a, b, c ) {
    if (a > b > c) {
        console.log("suurempi luku on" + a);
    }
    else if (b > a) {
        console.log("suurempi luku on" + b);

    }

    else if (c > a) {
        console.log("suurempi luku on" + c);
    }
    else {
        console.log("Luvut ovat yhtä suuret");
    }
}
suurempi(5, 5, 5);



function suurin (a, b, c) {
    if (a > b && a > c) {
        console.log("suurin luku on" + a);
    }
    else if (b > a && b > c) {
        console.log("suurin luku on" + b);
    }
    else if (c > a && c > b) {
        console.log("suurin luku on" + c);
    }
    else {
        console.log("Luvut ovat yhtä suuret");
    }
}
suurin(5, 10, 15);


function jaollinen(luku) {
    if (luku % 3 === 0 && luku % 11 === 0) {
        console.log("Luku on jaollinen 3:lla ja 11:llä");
    }
    else {
        console.log("Luku ei ole jaollinen 3:lla eikä 11:llä");
    }
}
jaollinen(33);
jaollinen(55);
