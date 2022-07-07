document.getElementById("celsius-eingabefeld").addEventListener("input", celsiusUmrechnen);
document.getElementById("fahrenheit-eingabefeld").addEventListener("input", fahrenheitUmrechnen);
document.getElementById("kelvin-eingabefeld").addEventListener("input", kelvinUmrechnen);

function celsiusInFahrenheitUmrechnen(celsius) {
   return celsius * 1.8 + 32;
}

function celsiusInKelvinUmrechnen(celsius) {
    return celsius + 273.15
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

function celsiusUmrechnen(event) {
    const celsius = event.target.valueAsNumber;
    document.getElementById("fahrenheit-eingabefeld").value = celsiusInFahrenheitUmrechnen(celsius);
    document.getElementById("kelvin-eingabefeld").value = celsiusInKelvinUmrechnen(celsius);
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