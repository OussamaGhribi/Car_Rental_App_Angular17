const measureKelvin = function () {
    const measurement = {
        type : 'temps',
        unit : 'celsius',
        value : prompt("Degrees celsius : "),
    };
    console.log(measurement);

    const kelvin = measurement.value + 273 ;
    return kelvin;
};

console.log(measureKelvin())