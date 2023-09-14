// Get elements from the DOM
const temperatureInput = document.getElementById("temperatureInput");
const unitSelect = document.getElementById("unitSelect");
const convertButton = document.getElementById("convertButton");
const resultElement = document.getElementById("result");

// Conversion functions
function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    const fromUnit = unitSelect.value;
    let toUnit, result;

    if (fromUnit === "celsius") {
        // Convert from Celsius to Fahrenheit and Kelvin
        result = {
            fahrenheit: (temperature * 9/5) + 32,
            kelvin: temperature + 273.15
        };
    } else if (fromUnit === "fahrenheit") {
        // Convert from Fahrenheit to Celsius and Kelvin
        result = {
            celsius: (temperature - 32) * 5/9,
            kelvin: (temperature - 32) * 5/9 + 273.15
        };
    } else {
        // Convert from Kelvin to Celsius and Fahrenheit
        result = {
            celsius: temperature - 273.15,
            fahrenheit: (temperature - 273.15) * 9/5 + 32
        };
    }

    resultElement.textContent = `Converted Temperature:
    Celsius (°C): ${result.celsius.toFixed(2)}
    Fahrenheit (°F): ${result.fahrenheit.toFixed(2)}
    Kelvin (K): ${result.kelvin.toFixed(2)}`;
}

// Event listener for the "Convert" button
convertButton.addEventListener("click", convertTemperature);
// Add these lines at the end of your existing JavaScript code:

// Show the input and output sections when the Convert button is clicked
convertButton.addEventListener("click", function () {
    convertTemperature();
    document.querySelector(".container").classList.add("show");
    document.querySelector(".input-section").classList.add("show");
    document.querySelector(".output-section").classList.add("show");
});
