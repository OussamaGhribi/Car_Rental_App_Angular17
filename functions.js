let t = [0 , -5 , -7 , 20 , 3 , 10];

const calcAge = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length ; i++) {
        const curtemps = temps[i]
        if (curtemps < min) min = curtemps;
        if (curtemps > max) max = curtemps;
    }
    console.log(min , max);
}

calcAge(t);