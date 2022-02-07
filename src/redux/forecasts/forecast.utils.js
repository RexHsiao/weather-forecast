export const addForecast = ( forecasts, forecastToAdd ) => {
    const existingForecast = forecasts.find(forecast => forecast.currentDay.location === forecastToAdd.currentDay.location);

    if (existingForecast) {
        return forecasts;
    }

    return [...forecasts, forecastToAdd];
};

export const removeForecast = ( forecasts, forecastToRemove ) => {
    const existingForecast = forecasts.find(forecast => forecast.currentDay.location === forecastToRemove.currentDay.location);

    if (existingForecast) {
        return forecasts.filter(forecast => forecast.currentDay.location !== forecastToRemove.currentDay.location);
    }

    return forecasts;
}