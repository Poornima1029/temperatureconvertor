function convertTemperature() {
    let tempInput = document.getElementById("tempInput").value;
    let unit = document.getElementById("unitSelect").value;
    let convertedValue = 0;
    let outputText = "";

    if (unit === "celsius") {
        convertedValue = (tempInput * 9/5) + 32; // Celsius to Fahrenheit
        outputText = `${convertedValue.toFixed(2)} °F`;
    } else if (unit === "fahrenheit") {
        convertedValue = (tempInput - 32) * 5/9; // Fahrenheit to Celsius
        outputText = `${convertedValue.toFixed(2)} °C`;
    } else if (unit === "kelvin") {
        if (tempInput < 0) {
            outputText = "Kelvin cannot be below 0!";
        } else {
            convertedValue = tempInput - 273.15; // Kelvin to Celsius
            outputText = `${convertedValue.toFixed(2)} °C`;
        }
    }

    document.getElementById("convertedValue").innerText = outputText;
}
