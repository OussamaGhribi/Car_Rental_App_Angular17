const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win !");
}else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("Koalas win !");
}else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Both win !");
}else{
    console.log("Nobody win !");
}