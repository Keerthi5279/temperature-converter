document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
    const tempInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    // Validate that the input is a number
    if (isNaN(tempInput) || tempInput === "") {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    let temp = parseFloat(tempInput);
    let convertedTemp, targetUnit;

    // Conversion logic
    if (unit === 'celsius') {
        convertedTemp = (temp * 9/5) + 32;
        targetUnit = 'Fahrenheit';
    } else if (unit === 'fahrenheit') {
        convertedTemp = (temp - 32) * 5/9;
        targetUnit = 'Celsius';
    } else if (unit === 'kelvin') {
        convertedTemp = temp + 273.15;
        targetUnit = 'Kelvin';
    }

    resultDiv.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${targetUnit}`;
}
