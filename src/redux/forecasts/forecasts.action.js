import { ForecastsActionTypes } from './forecasts.types';

export const addForecast = (forecast) => ({
    type: ForecastsActionTypes.ADD_FORECAST,
    payload: forecast
});

export const removeForecast = (forecast) => ({
    type: ForecastsActionTypes.REMOVE_FORECAST,
    payload: forecast
})
