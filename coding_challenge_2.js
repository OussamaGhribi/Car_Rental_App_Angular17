const MassMark = 78;
const heighMark = 1.69;
const massJohn = 92;
const heighJohn = 1.92;

const BMIMark = MassMark / heighMark ** 2;
const BMIJohn = massJohn / (heighJohn*heighJohn);

if (BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn} !`);
}else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark} !`);
}