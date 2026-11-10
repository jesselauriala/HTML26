function tekstianalyysi(teksti) {
  const siistiTeksti = teksti.trim();

  console.log("Pituus:", siistiTeksti.length);
  console.log("Pienillä:", siistiTeksti.toLowerCase());
  console.log("Isoilla:", siistiTeksti.toUpperCase());
  console.log("Sanoja:", siistiTeksti.split(" ").length);
  
}

tekstianalyysi("   JavaScript harjoituksia missä harjoitellaan tekstianalyysia  ");