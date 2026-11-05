const pisteanalyysi = [60, 80, 95, 70, 85, 90];
const summa = pisteanalyysi.reduce((kertymä, pisteet) => kertymä + pisteet, 0);
const pisteet = pisteanalyysi.some(pisteet => pisteet >= 95);
const validiointi = pisteanalyysi.every(pisteet => pisteet >= 0 && pisteet <= 100);

console.log(pisteet); 
console.log(summa); 
console.log(validiointi);