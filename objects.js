const measureKelvin = function () {
    const measurement = {
        type : 'temps',
        unit : 'celsius',
        value : Number(prompt("Degrees celsius : ")),
    };
    console.log(measurement);
    console.table(measurement);
    
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);


    const kelvin = measurement.value + 273 ;
    const david = measurement.unit = "fahrenheit";
    return kelvin;
};

console.log(measureKelvin());
console.warn(measurement.unit);
console.error(measurement.type)