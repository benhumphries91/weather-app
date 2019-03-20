export function fahrenheitToCelsius(temperature) {
    
    let celsiusTemperature = (temperature - 32) * 0.5556;
    celsiusTemperature = celsiusTemperature.toFixed(0);
    return celsiusTemperature;
}

export function kelvinToCelsius(temperature) {
    let celsiusTemperature = temperature - 273.15;
    celsiusTemperature = celsiusTemperature.toFixed(0);
    return celsiusTemperature;
}