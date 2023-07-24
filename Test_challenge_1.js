const MassMark = 95;
const heighMark = 1.88;
const massJohn = 86;
const heighJohn = 1.76;

const BMIMark = MassMark / heighMark ** 2;
const BMIJohn = massJohn / (heighJohn*heighJohn);
const markHeigherBMI = BMIMark > BMIJohn;

console.log(BMIMark , BMIJohn , markHeigherBMI);