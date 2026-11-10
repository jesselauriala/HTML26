const rivi = " HTML, CSS, JavaScript, React ";

const taulukko = rivi
  .split(",")
  .map(rivi => rivi.trim());

  const suodata = taulukko.filter(alkio => alkio !== "React");
  console.log(taulukko);

console.log(suodata);