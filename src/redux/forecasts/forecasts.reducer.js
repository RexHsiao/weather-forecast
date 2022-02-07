import { ForecastsActionTypes } from './forecasts.types';
import { addForecast, removeForecast } from './forecast.utils';

const INITIAL_STATE = {
    currentForecasts: []
};

const forecastsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ForecastsActionTypes.ADD_FORECAST:
            return {
                ...state,
                currentForecasts: addForecast(state.currentForecasts, action.payload)
            }
        case ForecastsActionTypes.REMOVE_FORECAST:
            return {
                ...state,
                currentForecasts: removeForecast(state.currentForecasts, action.payload)
            }
        default:
            return state;
    }
}

export default forecastsReducer;