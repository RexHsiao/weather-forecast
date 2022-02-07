import { combineReducers } from 'redux';

import forecastsReducer from './forecasts/forecasts.reducer';
import themeReducer from './theme/theme.reducer';

export default combineReducers ({
    forecasts: forecastsReducer,
    theme: themeReducer
});