function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;

    if (isNaN(inputTemp)) {
        alert('Please enter a valid temperature');
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (inputUnit) {
        case 'Celsius':
            celsius = inputTemp;
            fahrenheit = (inputTemp * 9/5) + 32;
            kelvin = inputTemp + 273.15;
            break;
        case 'Fahrenheit':
            celsius = (inputTemp - 32) * 5/9;
            fahrenheit = inputTemp;
            kelvin = (inputTemp - 32) * 5/9 + 273.15;
            break;
        case 'Kelvin':
            celsius = inputTemp - 273.15;
            fahrenheit = (inputTemp - 273.15) * 9/5 + 32;
            kelvin = inputTemp;
            break;
        default:
            alert('Invalid unit');
            return;
    }

    document.getElementById('celsiusResult').textContent = `Celsius: ${celsius.toFixed(2)}°C`;
    document.getElementById('fahrenheitResult').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    document.getElementById('kelvinResult').textContent = `Kelvin: ${kelvin.toFixed(2)}K`;
}
