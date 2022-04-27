document.getElementById("celsius-eingabefeld").addEventListener("input", meterUmrechnen);
document.getElementById("fahrenheit-eingabefeld").addEventListener("input", fahrenheitUmrechnen);
document.getElementById("kelvin-eingabefeld").addEventListener("input", kelvinUmrechnen);

function meterInZentimeter(meter) {
   return meter / 100;
}

function meterInMillimeter(meter) {
    return meter / 100 / 10;
}

function fahrenheitIncelsiusUmrechnen(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

function fahrenkeitInKelvinUmrechnen(fahrenheit) {
    return (fahrenheit - 32) / 1.8 + 273.15
}

function kelvinIncelsiusUmrechnen(kelvin) {
    return kelvin - 273.15
}

function kelvinInFahrenkeitUmrechnen(kelvin) {
    return (kelvin - 273.15) * 1.8 +32;
}

function meterUmrechnen(event) {
    const meter = event.target.valueAsNumber;
    document.getElementById("zentimeter-eingabefeld").value = meterInZentimeter(meter);
    document.getElementById("kelvin-eingabefeld").value = meterInMillimeter(meter);
}

function fahrenheitUmrechnen(event) {
    const fahrenheit = event.target.valueAsNumber;
    document.getElementById("celsius-eingabefeld").value = fahrenheitIncelsiusUmrechnen(fahrenheit);
    document.getElementById("kelvin-eingabefeld").value = fahrenkeitInKelvinUmrechnen(fahrenheit);
}

function kelvinUmrechnen(event) {
    const kelvin = event.target.valueAsNumber;
    document.getElementById("fahrenheit-eingabefeld").value = kelvinInFahrenkeitUmrechnen(kelvin);
    document.getElementById("celsius-eingabefeld").value = kelvinIncelsiusUmrechnen(kelvin);
}